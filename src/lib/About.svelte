<section id="about" class="wrap">
  <div class="about">
    <div class="about-art">
      <svg viewBox="0 0 200 160" aria-hidden="true">
        <rect x="20" y="20" width="160" height="120" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="3" />
        <rect x="20" y="20" width="80" height="60" fill="var(--tertiary)" opacity=".85" />
        <rect x="100" y="20" width="80" height="60" fill="#F3CDBB" opacity=".9" />
        <rect x="20" y="80" width="80" height="60" fill="var(--accent)" opacity=".55" />
        <rect x="100" y="80" width="80" height="60" fill="var(--tertiary)" opacity=".5" />
        <rect x="20" y="20" width="160" height="120" rx="4" fill="none" stroke="var(--ink)" stroke-width="3" />
      </svg>
    </div>
    <div>
      <h2>Built by one person, a laptop, and a lot of nostalgia for kopitiam formica tables.</h2>
      <p>
        Tapau Co. started as a way to keep the look of the neighbourhood kopitiam — enamel plates,
        tile floors, hand-painted signboards — alive on things people actually use every day.
      </p>
      <p>
        AI drafts the first pass of every illustration; a human (currently: just one) decides what
        actually earns the house style. No design goes to print without that second look.
      </p>
    </div>
  </div>
</section>

<style>
  .about {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: clamp(1.5rem, 4vw, 3rem);
    align-items: center;
    background: var(--ground-alt);
    border-radius: 4px;
    padding: clamp(1.5rem, 4vw, 2.75rem);
  }

  .about-art {
    aspect-ratio: 4 / 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about-art svg {
    width: 80%;
    height: 80%;
  }

  .about h2 {
    font-size: clamp(1.7rem, 4vw, 2.3rem);
    margin-bottom: 0.75rem;
  }

  .about p {
    color: var(--ink-soft);
    max-width: 52ch;
    font-weight: 500;
  }

  .about p + p {
    margin-top: 0.75rem;
  }

  @media (max-width: 760px) {
    .about {
      grid-template-columns: 1fr;
    }
  }
</style>
