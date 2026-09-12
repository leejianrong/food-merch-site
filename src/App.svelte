<script>
  import { theme } from './lib/theme.svelte.js'
  import Nav from './lib/Nav.svelte'
  import Hero from './lib/Hero.svelte'
  import Stats from './lib/Stats.svelte'
  import Spotted from './lib/Spotted.svelte'
  import TeaserGallery from './lib/TeaserGallery.svelte'
  import Process from './lib/Process.svelte'
  import About from './lib/About.svelte'
  import WaitlistForm from './lib/WaitlistForm.svelte'
  import Footer from './lib/Footer.svelte'

  $effect(() => {
    document.documentElement.dataset.theme = theme.dark ? 'dark' : 'light'
  })
</script>

<Nav />
<Hero />
<Stats />
<Spotted />
<TeaserGallery />
<Process />
<About />
<WaitlistForm />
<Footer />
