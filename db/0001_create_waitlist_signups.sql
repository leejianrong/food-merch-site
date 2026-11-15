-- Waitlist table for Neon. No RLS or anon role: only the server (DATABASE_URL)
-- and the agents CLI ever connect, so access control lives in credentials.
create table if not exists waitlist_signups (
  id bigint generated always as identity primary key,
  email text not null unique,
  created_at timestamptz not null default now(),
  source text
);
