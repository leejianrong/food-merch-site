# Peng Fashion — site

Public waitlist site for Peng Fashion (pengfashion.com). Svelte + Vite frontend,
plus a small Node server that serves the build and handles `POST /api/waitlist`,
writing to Neon Postgres. Deployed on Fly.io. No checkout yet — this collects
interest via email.

Planning lives one level up: `../docs/PLAN.md`, `../docs/SLICES.md`, and
`../docs/adr/` — see **ADR-0007** for the hosting and key-boundary decisions.

## Local development

Create a `.env` from `.env.example` and set `DATABASE_URL` to a Neon (or local
Postgres) URL. Then:

```bash
npm install
npm run build
npm start                # server on :8080, serving dist/ and /api/waitlist
```

For frontend work, run `npm run dev` (Vite proxies `/api` to `:8080`) alongside
`npm start`.

The `waitlist_signups` table is defined in `db/0001_create_waitlist_signups.sql`
(the agents repo owns the canonical migrations).

## Deploy

```bash
fly secrets set DATABASE_URL='postgresql://...' -a pengfashion   # once
fly deploy
```

`fly.toml` keeps one machine running in `sin`. The only secret is `DATABASE_URL`;
the browser never sees any credential.
