<script>
  import * as animateScroll from 'svelte-scrollto';
  import SvelteSeo from 'svelte-seo';
  import WorkCards from '../components/WorkCards.svelte';
  import Header from '../components/Header.svelte';
  import Hero from '../components/Hero.svelte';
  import Footer from '../components/Footer.svelte';
  import Inview from 'svelte-inview';
  let ref;

  import { flip } from 'svelte/animate';

  let direction;
  import { onMount } from 'svelte';
  let height;
  let y;
</script>

<style>
  .placeholder {
    height: 525px;
  }
</style>

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
    <div class="sticky p-16 bg-gray-100" id="about">
      <div class="container">
        <div class="grid items-center grid-cols-1 gap-8 md:grid-cols-12">
          <div class="col-span-12">
            <h1
              id="about"
              class="w-full mb-8 text-5xl font-bold leading-tight text-center text-gray-900 font--brume">
              About
            </h1>
          </div>
          <Inview
            let:inView
            let:scrollDirection
            wrapper={ref}
            rootMargin="-30% 0px"
            unobserveOnEnter={true}>
            <div class="col-span-6" bind:this={ref}>
              <div class="p-4">
                {#if inView}
                  <img
                    src="/about-scrapbook.png"
                    alt="Vector Art of Guy Running"
                    class:imageFadeIn={inView} />
                {:else}
                  <div class="placeholder" />
                {/if}
              </div>
            </div>
            <div class="col-span-6">
              <div
                class="p-4 text-lg leading-relaxed text-gray-900 duration-500 delay-1000 opacity-0"
                class:opacity-100={inView}>
                Voluptate irure aliquip consectetur occaecat consequat nulla
                eiusmod quis aute laborum dolore ipsum enim. Et voluptate
                excepteur incididunt non dolor veniam. Aliqua excepteur sit
                culpa est ipsum id do. Ad cupidatat commodo non quis velit
                cupidatat ea qui proident eiusmod mollit. Sit in aute Lorem
                cillum tempor ipsum pariatur magna eiusmod deserunt velit
                voluptate enim est.
              </div>
            </div>
          </Inview>
        </div>
      </div>
    </div>

  </body>
  <Footer />

</html>
