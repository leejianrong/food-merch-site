# Tapau Co. — site

Public waitlist site for Tapau Co. (Singapore hawker-food merch). Svelte + Vite,
deployed to GitHub Pages via GitHub Actions (ADR-0006). No checkout yet — this
collects interest via email.

Live at: https://leejianrong.github.io/food-merch-site/

Planning lives one level up: see `../docs/PLAN.md`, `../docs/SLICES.md`
(this repo is built in Slice V1), and `../docs/adr/` — particularly
**ADR-0002** for the Supabase key boundary this repo must respect (ship the
**anon** key only, never the service-role key), and **ADR-0006** for the
deploy setup.

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and fill in `VITE_SUPABASE_URL` /
`VITE_SUPABASE_ANON_KEY` (the anon key only — never the service-role key) to
run against a real Supabase project locally.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages. The same two Supabase env vars must be
set as repository secrets for the build to have them.
