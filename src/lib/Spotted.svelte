<div class="spotted wrap">
  <span class="label">Flavours inspired by</span>
  <div class="spotted-list">
    <span>Maxwell</span><span>Tiong Bahru</span><span>Old Airport Road</span><span
      >Chinatown Complex</span
    ><span>Tekka</span>
  </div>
</div>

<style>
  .spotted {
    display: flex;
    align-items: center;
    gap: clamp(1rem, 4vw, 2rem);
    flex-wrap: wrap;
    padding-block: 1.5rem;
    border-top: 1.5px solid var(--line);
    border-bottom: 1.5px solid var(--line);
  }

  .spotted-list {
    display: flex;
    gap: clamp(1rem, 3vw, 2rem);
    flex-wrap: wrap;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.05rem;
    color: var(--ink-soft);
  }
</style>
