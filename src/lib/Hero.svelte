<section class="hero wrap">
  <div>
    <h1>WEAR YOUR<br /><span class="pop">MAKAN.</span></h1>
    <p>
      Hawker classics turned into bold, wearable icons — sketched with AI, art-directed by hand.
      No shop yet, no stock sitting in a warehouse. Just the list, and first dibs when we print.
    </p>
    <span class="made-chip"><span class="dot"></span>Made &amp; printed in Singapore</span>
    <div class="hero-ctas">
      <a class="btn btn-solid" href="#waitlist">Join the waitlist</a>
      <a class="btn btn-outline" href="#process">How it's made</a>
    </div>
  </div>
  <div class="hero-art">
    <span class="queue-tag">001<small>Now queuing</small></span>
    <svg viewBox="0 0 200 200" aria-hidden="true">
      <ellipse cx="100" cy="168" rx="62" ry="10" fill="#1A2013" opacity=".12" />
      <path d="M55 70 L68 160 Q100 172 132 160 L145 70 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="3" />
      <path d="M60 78 L71 152 Q100 162 129 152 L140 78 Z" fill="var(--coffee)" />
      <ellipse cx="100" cy="78" rx="40" ry="9" fill="var(--ink)" opacity=".12" />
      <path
        d="M75 62 Q80 40 68 28"
        fill="none"
        stroke="var(--ink)"
        stroke-width="3"
        stroke-linecap="round"
        opacity=".55"
      />
      <path
        d="M95 62 Q100 36 88 20"
        fill="none"
        stroke="var(--ink)"
        stroke-width="3"
        stroke-linecap="round"
        opacity=".55"
      />
      <path
        d="M115 62 Q120 40 108 28"
        fill="none"
        stroke="var(--ink)"
        stroke-width="3"
        stroke-linecap="round"
        opacity=".55"
      />
    </svg>
  </div>
</section>

<style>
  .hero {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: clamp(1.5rem, 4vw, 3rem);
    align-items: center;
  }

  .hero h1 {
    font-size: clamp(2.8rem, 7vw, 5.2rem);
    letter-spacing: -0.01em;
  }

  .hero h1 .pop {
    color: var(--accent);
  }

  .hero p {
    max-width: 44ch;
    color: var(--ink-soft);
    font-size: 1.08rem;
    margin-top: 1.1rem;
    font-weight: 500;
  }

  .made-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.1rem;
    background: var(--card);
    border: 1.5px solid var(--line);
    border-radius: 100px;
    padding: 0.4rem 0.9rem 0.4rem 0.6rem;
    font-weight: 700;
    font-size: 0.8rem;
  }

  .made-chip .dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: var(--primary);
  }

  .hero-ctas {
    display: flex;
    gap: 0.85rem;
    margin-top: 1.6rem;
    flex-wrap: wrap;
  }

  .hero-art {
    aspect-ratio: 1 / 1;
    background: var(--ground-alt);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .hero-art svg {
    width: 66%;
    height: 66%;
  }

  .queue-tag {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: var(--chip-ink);
    color: var(--chip-text);
    border-radius: 4px;
    padding: 0.35rem 0.55rem;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 0.85rem;
    font-variant-numeric: tabular-nums;
    line-height: 1;
  }

  .queue-tag small {
    display: block;
    font-family: var(--font-body);
    font-weight: 800;
    font-size: 0.5rem;
    letter-spacing: 0.08em;
    margin-top: 0.2rem;
    opacity: 0.75;
  }

  @media (max-width: 760px) {
    .hero {
      grid-template-columns: 1fr;
    }
    .hero-art {
      order: -1;
      max-width: 340px;
      margin-inline: auto;
    }
  }
</style>
