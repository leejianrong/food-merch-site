<section id="process" class="wrap">
  <div class="section-head">
    <h2>How we make it</h2>
  </div>
  <div class="process">
    <div class="step">
      <span class="num">01</span>
      <h3>Brief the model</h3>
      <p>
        Every dish is prompted against a locked house style guide — palette, linework weight,
        composition rules.
      </p>
    </div>
    <div class="step">
      <span class="num">02</span>
      <h3>Art-direct by hand</h3>
      <p>We cull, recolour and align every draft to grid. This pass is the actual craft — and the moat.</p>
    </div>
    <div class="step">
      <span class="num">03</span>
      <h3>Print on demand</h3>
      <p>Nothing is made until it's ordered. Printed and packed in Singapore, no warehouse markdowns.</p>
    </div>
    <div class="step">
      <span class="num">04</span>
      <h3>Pack &amp; ship</h3>
      <p>Reused kraft mailers, islandwide in 48 hours, tracked door to door.</p>
    </div>
  </div>
</section>

<style>
  .process {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }

  .step {
    background: var(--card);
    border: 1.5px solid var(--line);
    border-radius: 4px;
    padding: 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .step .num {
    font-family: var(--font-display);
    color: var(--chilli);
    font-size: 1.3rem;
    font-weight: 600;
  }

  .step h3 {
    font-size: 1.05rem;
    font-weight: 700;
  }

  .step p {
    margin: 0;
    color: var(--ink-soft);
    font-size: 0.9rem;
    font-weight: 500;
  }

  @media (max-width: 760px) {
    .process {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 480px) {
    .process {
      grid-template-columns: 1fr;
    }
  }
</style>
