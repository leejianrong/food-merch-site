<script>
  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  let email = $state('')
  let website = $state('') // honeypot, must stay empty
  let status = $state('idle') // idle | submitting | joined | already | invalid | error

  async function handleSubmit(event) {
    event.preventDefault()

    const trimmed = email.trim()
    if (!EMAIL_PATTERN.test(trimmed)) {
      status = 'invalid'
      return
    }

    status = 'submitting'

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: trimmed, website }),
      })
      if (res.status === 201) status = 'joined'
      else if (res.status === 200) status = 'already'
      else if (res.status === 400) status = 'invalid'
      else status = 'error'
    } catch {
      status = 'error'
    }
  }
</script>

<section id="waitlist" class="wrap">
  <div class="newsletter">
    <div>
      <h3>Be first in line</h3>
      <p>One email when we launch — plus first dibs on the earliest drops. No spam.</p>
    </div>

    {#if status === 'joined'}
      <p class="feedback feedback-success">You're on the list — we'll email you when we launch.</p>
    {:else if status === 'already'}
      <p class="feedback feedback-success">You're already on the list — hang tight.</p>
    {:else}
      <form onsubmit={handleSubmit} novalidate>
        <input
          class="hp"
          type="text"
          name="website"
          bind:value={website}
          tabindex="-1"
          autocomplete="off"
          aria-hidden="true"
        />
        <div class="field">
          <input
            type="email"
            bind:value={email}
            placeholder="you@example.com"
            aria-label="Email address"
            disabled={status === 'submitting'}
          />
          <button class="btn btn-solid" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Joining…' : 'Join waitlist'}
          </button>
        </div>
        {#if status === 'invalid'}
          <p class="feedback feedback-error">That doesn't look like a valid email — check it and try again.</p>
        {:else if status === 'error'}
          <p class="feedback feedback-error">Something went wrong on our end — try again in a moment.</p>
        {/if}
      </form>
    {/if}
  </div>
</section>

<style>
  .hp {
    position: absolute;
    left: -9999px;
  }

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

  .field {
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

  .feedback {
    margin: 0.6rem 0 0;
    font-weight: 700;
    font-size: 0.85rem;
  }

  .feedback-success {
    color: var(--chilli-deep);
  }

  .feedback-error {
    color: var(--turmeric);
  }
</style>
