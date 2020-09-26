<script>
  import * as animateScroll from 'svelte-scrollto';
  import SvelteSeo from 'svelte-seo';
  import WorkCards from '../components/WorkCards.svelte';
  import Header from '../components/Header.svelte';
  import Hero from '../components/Hero.svelte';
  import About from '../components/About.svelte';
  import Footer from '../components/Footer.svelte';

  import { flip } from 'svelte/animate';

  let direction;
  import { onMount } from 'svelte';
  let height;
  let y;
</script>

<svelte:window bind:scrollY={y} />
<SvelteSeo
  title="Home | Jeff Lau — Web Developer — Designer — Artist — Content Creator"
  description="Jeff Lau is a web developer and designer based in Denver
  Colorado." />
<html lang="en">
  <body class="antialiased transition-all duration-500">
    <Header />
    <Hero />
    <div class="py-16 bg-white work__cards" id="work">
      <WorkCards />
    </div>
    <About />

  </body>
  <Footer />

</html>
