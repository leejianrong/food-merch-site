<section id="teaser" class="wrap">
  <div class="section-head">
    <h2>Sneak peek: what's brewing</h2>
    <span class="label">Nothing's for sale yet — join the list to hear first</span>
  </div>

  <div class="grid">
    <article class="card">
      <div class="card-art" style="background:#F3CDBB;">
        <span class="pill-badge">Coming soon</span>
        <svg viewBox="0 0 200 200" aria-hidden="true">
          <path
            d="M62 82 L60 176 Q100 190 140 176 L138 82 Z"
            fill="var(--primary)"
            stroke="var(--ink)"
            stroke-width="3"
          />
          <ellipse cx="100" cy="150" rx="30" ry="14" fill="#fff" opacity=".85" />
          <path
            d="M60 100 Q30 96 22 116 Q40 122 58 112"
            fill="var(--primary)"
            stroke="var(--ink)"
            stroke-width="2.5"
          />
          <path
            d="M140 100 Q170 96 178 116 Q160 122 142 112"
            fill="var(--primary)"
            stroke="var(--ink)"
            stroke-width="2.5"
          />
          <path d="M78 82 Q100 66 122 82" fill="none" stroke="var(--ink)" stroke-width="3" />
          <circle cx="88" cy="76" r="3.5" fill="var(--ink)" />
          <circle cx="112" cy="76" r="3.5" fill="var(--ink)" />
        </svg>
      </div>
      <div class="card-body">
        <span class="dish">Chilli Crab · Tote</span>
        <h3>Chilli Crab Carryall</h3>
        <span class="swatches"><span style="background:#F3CDBB;"></span><span style="background:#1A2013;"></span><span style="background:#FCFCF2;"></span></span>
      </div>
    </article>

    <article class="card">
      <div class="card-art" style="background:#D8E8D4;">
        <span class="pill-badge">Coming soon</span>
        <svg viewBox="0 0 200 200" aria-hidden="true">
          <ellipse cx="100" cy="150" rx="58" ry="14" fill="var(--accent)" opacity=".35" />
          <rect x="55" y="70" width="90" height="24" rx="3" fill="var(--accent)" stroke="var(--ink)" stroke-width="3" />
          <rect x="55" y="94" width="90" height="16" fill="var(--primary)" stroke="var(--ink)" stroke-width="2.5" />
          <rect x="55" y="110" width="90" height="24" rx="3" fill="var(--card)" stroke="var(--ink)" stroke-width="3" />
          <rect x="60" y="134" width="80" height="20" rx="3" fill="var(--accent)" opacity=".55" stroke="var(--ink)" stroke-width="2" />
        </svg>
      </div>
      <div class="card-body">
        <span class="dish">Kaya Toast · Tote</span>
        <h3>Kaya Toast Stack Tote</h3>
        <span class="swatches"><span style="background:#D8E8D4;"></span><span style="background:#1A2013;"></span><span style="background:#FCFCF2;"></span></span>
      </div>
    </article>

    <article class="card">
      <div class="card-art" style="background:#FBE2C2;">
        <span class="pill-badge">Coming soon</span>
        <svg viewBox="0 0 200 200" aria-hidden="true">
          <path
            d="M50 100 Q100 76 150 100 L146 168 Q100 182 54 168 Z"
            fill="var(--primary)"
            stroke="var(--ink)"
            stroke-width="3"
          />
          <path d="M58 104 Q100 112 142 104" fill="none" stroke="#fff" stroke-width="3" opacity=".7" />
          <path d="M62 116 Q100 124 138 116" fill="none" stroke="#fff" stroke-width="3" opacity=".55" />
          <ellipse cx="72" cy="118" rx="10" ry="6" fill="#fff" opacity=".9" />
          <ellipse cx="128" cy="122" rx="12" ry="7" fill="var(--accent)" />
        </svg>
      </div>
      <div class="card-body">
        <span class="dish">Laksa · Tee</span>
        <h3>Laksa Bowl Tee</h3>
        <span class="swatches"><span style="background:#FBE2C2;"></span><span style="background:#1A2013;"></span></span>
      </div>
    </article>

    <article class="card">
      <div class="card-art" style="background:#CDE9E1;">
        <span class="pill-badge">Coming soon</span>
        <svg viewBox="0 0 200 200" aria-hidden="true">
          <path d="M64 66 L64 150 Q100 168 136 150 L136 66 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="3" />
          <path d="M136 90 Q166 92 164 116 Q162 138 134 134" fill="none" stroke="var(--ink)" stroke-width="3" />
          <path d="M96 44 Q104 24 100 30 Q88 18 96 44 Z" fill="var(--accent)" />
          <path d="M76 100 Q90 150 130 96" fill="none" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <path d="M70 108 Q100 156 122 108" fill="none" stroke="var(--tertiary)" stroke-width="4" stroke-linecap="round" />
        </svg>
      </div>
      <div class="card-body">
        <span class="dish">Ice Kacang · Mug</span>
        <h3>Ice Kacang Mug</h3>
        <span class="swatches"><span style="background:#CDE9E1;"></span><span style="background:#FCFCF2;"></span></span>
      </div>
    </article>
  </div>
</section>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    gap: 1rem;
  }

  .card {
    background: var(--card);
    border: 1.5px solid var(--line);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .card-art {
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-bottom: 1.5px solid var(--line);
  }

  .card-art svg {
    width: 64%;
    height: 64%;
  }

  .pill-badge {
    position: absolute;
    top: 0.6rem;
    left: 0.6rem;
    font-weight: 800;
    font-size: 0.62rem;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    border-radius: 100px;
    padding: 0.25rem 0.6rem;
    color: var(--chip-ink);
    background: var(--tertiary);
  }

  .card-body {
    padding: 0.9rem 1rem 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .card-body .dish {
    font-size: 0.72rem;
    color: var(--ink-soft);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-weight: 800;
  }

  .card-body h3 {
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0;
  }

  .swatches {
    display: flex;
    gap: 0.35rem;
    margin-top: 0.1rem;
  }

  .swatches span {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    border: 1px solid var(--line);
    display: inline-block;
  }
</style>
