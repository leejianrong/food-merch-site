<script>
  let email = $state('')

  function handleSubmit(event) {
    event.preventDefault()
  }
</script>

<section id="waitlist" class="wrap">
  <div class="newsletter">
    <div>
      <h3>Be first in line</h3>
      <p>One email when we launch — plus first dibs on the earliest drops. No spam.</p>
    </div>
    <form onsubmit={handleSubmit}>
      <input
        type="email"
        required
        bind:value={email}
        placeholder="you@example.com"
        aria-label="Email address"
      />
      <button class="btn btn-solid" type="submit">Join waitlist</button>
    </form>
  </div>
</section>

<style>
  .newsletter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    border: 1.5px solid var(--line);
    border-radius: 4px;
    padding: clamp(1.5rem, 4vw, 2.25rem);
  }

  .newsletter h3 {
    font-size: clamp(1.4rem, 3vw, 1.8rem);
    font-weight: 700;
  }

  .newsletter p {
    margin: 0.35rem 0 0;
    color: var(--ink-soft);
    font-weight: 600;
    font-size: 0.9rem;
  }

  .newsletter form {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
  }

  .newsletter input {
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0.75rem 1rem;
    border: 1.5px solid var(--ink);
    border-radius: 100px;
    background: var(--card);
    color: var(--ink);
    min-width: 220px;
  }
</style>
