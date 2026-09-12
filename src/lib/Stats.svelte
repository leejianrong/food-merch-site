<div class="stats wrap">
  <div class="stat">
    <span class="token">48hr</span>
    <p>Print &amp; dispatch, once we launch</p>
  </div>
  <div class="stat">
    <span class="token">0</span>
    <p>Warehouses — print-on-demand only</p>
  </div>
  <div class="stat">
    <span class="token">6</span>
    <p>Dishes in the house style so far</p>
  </div>
</div>

<style>
  .stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding-block: 2.25rem;
  }

  .stat {
    display: flex;
    align-items: center;
    gap: 0.9rem;
  }

  .stat .token {
    background: var(--ink);
    color: var(--turmeric);
    border-radius: 6px;
    min-width: 4.2rem;
    padding: 0.5rem 0.6rem;
    text-align: center;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.7rem;
    font-variant-numeric: tabular-nums;
    line-height: 1;
  }

  .stat p {
    margin: 0;
    font-weight: 700;
    font-size: 0.85rem;
    color: var(--ink-soft);
    max-width: 16ch;
  }

  @media (max-width: 760px) {
    .stats {
      grid-template-columns: 1fr;
    }
  }
</style>
