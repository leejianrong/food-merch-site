# Tapau Co. — site

Public waitlist site for Tapau Co. (Singapore hawker-food merch). Svelte + Vite,
deployed to Netlify. No checkout yet — this collects interest via email.

Planning lives one level up: see `../docs/PLAN.md`, `../docs/SLICES.md`
(this repo is built in Slice V1), and `../docs/adr/` — particularly
**ADR-0002** for the Supabase key boundary this repo must respect (ship the
**anon** key only, never the service-role key).

Not yet scaffolded — `npm create vite@latest` with the Svelte template is the
first step of V1.
