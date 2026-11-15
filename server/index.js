// Serves the built Svelte site and the waitlist API from one process.
// POST /api/waitlist {email, website?} -> 201 joined | 200 already | 400 invalid | 429 | 500
import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, join, normalize, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import pg from 'pg'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const DIST = resolve(fileURLToPath(new URL('../dist', import.meta.url)))
const PORT = Number(process.env.PORT ?? 8080)
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
}

// Neon pooled connections close idle sockets; keep the pool small and short-lived.
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  max: 3,
  idleTimeoutMillis: 10_000,
  connectionTimeoutMillis: 15_000, // allows for a Neon cold start
})
pool.on('error', (err) => console.error('pg pool error', err.message))

// Naive per-IP limiter: 10 signups / minute. Fine for one machine.
const hits = new Map()
function rateLimited(ip) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > 10
}
setInterval(() => hits.clear(), 10 * 60_000).unref()

function send(res, status, body, headers = {}) {
  const isJson = typeof body === 'object'
  res.writeHead(status, {
    ...(isJson && { 'content-type': 'application/json' }),
    'x-content-type-options': 'nosniff',
    ...headers,
  })
  res.end(isJson ? JSON.stringify(body) : body)
}

async function readJson(req) {
  let raw = ''
  for await (const chunk of req) {
    raw += chunk
    if (raw.length > 4096) throw new Error('body too large')
  }
  return JSON.parse(raw)
}

async function handleWaitlist(req, res) {
  const ip = req.headers['fly-client-ip'] ?? req.socket.remoteAddress ?? 'unknown'
  if (rateLimited(ip)) return send(res, 429, { error: 'rate_limited' })

  let payload
  try {
    payload = await readJson(req)
  } catch {
    return send(res, 400, { error: 'invalid' })
  }

  // Honeypot: real users never fill the hidden "website" field. Pretend success.
  if (payload.website) return send(res, 201, { status: 'joined' })

  const email = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : ''
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) return send(res, 400, { error: 'invalid' })

  try {
    const { rowCount } = await pool.query(
      `insert into waitlist_signups (email, source) values ($1, $2)
       on conflict (email) do nothing`,
      [email, 'landing_page'],
    )
    return rowCount
      ? send(res, 201, { status: 'joined' })
      : send(res, 200, { status: 'already' })
  } catch (err) {
    console.error('waitlist insert failed', err.message)
    return send(res, 500, { error: 'server' })
  }
}

async function serveStatic(req, res) {
  const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname)
  let file = normalize(join(DIST, urlPath))
  if (!file.startsWith(DIST)) return send(res, 403, 'forbidden')
  try {
    if ((await stat(file)).isDirectory()) file = join(file, 'index.html')
    await stat(file)
  } catch {
    file = join(DIST, 'index.html') // single page
  }
  const immutable = file.includes(`${DIST}/assets/`)
  res.writeHead(200, {
    'content-type': MIME[extname(file)] ?? 'application/octet-stream',
    'cache-control': immutable ? 'public, max-age=31536000, immutable' : 'no-cache',
    'x-content-type-options': 'nosniff',
  })
  createReadStream(file).pipe(res)
}

createServer(async (req, res) => {
  const { pathname } = new URL(req.url, 'http://x')
  try {
    if (pathname === '/healthz') return send(res, 200, { ok: true })
    if (pathname === '/api/waitlist') {
      return req.method === 'POST'
        ? await handleWaitlist(req, res)
        : send(res, 405, { error: 'method' }, { allow: 'POST' })
    }
    if (req.method !== 'GET' && req.method !== 'HEAD') return send(res, 405, 'method not allowed')
    return await serveStatic(req, res)
  } catch (err) {
    console.error('unhandled', err)
    if (!res.headersSent) send(res, 500, { error: 'server' })
  }
}).listen(PORT, '0.0.0.0', () => console.log(`listening on :${PORT}`))
