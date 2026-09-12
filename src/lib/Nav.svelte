<script>
  import { theme, toggleTheme } from './theme.svelte.js'
</script>

<div class="topbar">
  <div class="nav wrap">
    <span class="brand">Tapau Co.</span>
    <div class="navlinks">
      <a href="#teaser">Sneak peek</a>
      <a href="#process">How it's made</a>
      <a href="#about">Story</a>
      <button class="btn btn-outline mode-toggle" type="button" onclick={toggleTheme}>
        {theme.dark ? 'Light mode' : 'Dark mode'}
      </button>
      <a class="btn btn-solid waitlist-cta" href="#waitlist">Join waitlist</a>
    </div>
  </div>
  <div class="marquee" aria-hidden="true">
    <div class="marquee-track">
      <span
        >Coming soon &nbsp;·&nbsp; Singapore hawker-food merch &nbsp;·&nbsp; Join the waitlist for
        early access &nbsp;·&nbsp;</span
      >
      <span
        >Coming soon &nbsp;·&nbsp; Singapore hawker-food merch &nbsp;·&nbsp; Join the waitlist for
        early access &nbsp;·&nbsp;</span
      >
    </div>
  </div>
</div>

<style>
  .topbar {
    position: sticky;
    top: 0;
    z-index: 20;
    background: var(--ground);
    padding-block: 0.75rem;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .brand {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: -0.01em;
  }

  .navlinks {
    display: flex;
    align-items: center;
    gap: clamp(0.75rem, 3vw, 1.75rem);
  }

  .navlinks a:not(.waitlist-cta) {
    font-weight: 700;
    font-size: 0.92rem;
    text-decoration: none;
  }

  .navlinks a:not(.waitlist-cta):hover {
    color: var(--chilli);
  }

  .waitlist-cta,
  .mode-toggle {
    padding: 0.55rem 1rem;
    font-size: 0.85rem;
  }

  .marquee {
    overflow: hidden;
    white-space: nowrap;
    background: var(--chilli);
    border-radius: 100px;
    margin-block: 0.5rem 0;
  }

  .marquee-track {
    display: inline-flex;
    gap: 2.5rem;
    padding-block: 0.6rem;
    animation: scroll 24s linear infinite;
    font-weight: 800;
    font-size: 0.82rem;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #fff;
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .marquee-track {
      animation: none;
    }
  }

  @media (max-width: 760px) {
    .navlinks {
      gap: 0.75rem;
    }
    .navlinks a:not(.waitlist-cta) {
      display: none;
    }
  }
</style>
