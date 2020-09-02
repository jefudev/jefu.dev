<script>
  import * as animateScroll from 'svelte-scrollto';
  import SvelteSeo from 'svelte-seo';
  import WorkCards from '../components/WorkCards.svelte';
  import Header from '../components/Header.svelte';
  import Hero from '../components/Hero.svelte';
  import Footer from '../components/Footer.svelte';

  import { flip } from 'svelte/animate';
  import { afterUpdate, beforeUpdate, tick } from 'svelte';

  let direction;
  import { onMount } from 'svelte';
  let height;
  onMount(async () => {
    var body = document.body,
      html = document.documentElement;

    height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    document.getElementById('circle_container').style.height = height + 'px';
  });

  import { spring } from 'svelte/motion';

  let coords = spring(
    { x: 50, y: 50 },
    {
      stiffness: 0.1,
      damping: 0.25
    }
  );
  let y;
  let size = spring(10);
  let mouseDownSize = 30;
  let mouseUpSize = 10;
</script>

<style>
  #circle_container {
    width: 100%;
    height: 100%;
    margin: -8px;
    position: absolute;
  }
  #circle_container svg {
    width: 100%;
    height: 100%;
  }
  #circle_container circle {
    fill: #ff3e00;
  }
</style>

<svelte:window bind:scrollY={y} />
<SvelteSeo
  title="Home | Jeff Lau — Web Developer — Designer — Artist — Content Creator"
  description="Jeff Lau is a web developer and designer based in Denver
  Colorado." />
<html lang="en">
  <body
    class="antialiased transition-all duration-500"
    on:mousemove={e => coords.set({ x: e.clientX, y: e.clientY })}
    on:mousedown={() => size.set(mouseDownSize)}
    on:mouseup={() => size.set(mouseUpSize)}>
    <div id="circle_container">
      <svg class="z-50">
        <circle cx={$coords.x} cy={$coords.y + y} r={$size} />
      </svg>
    </div>
    <Header />
    <Hero />

    <div
      class="py-16 bg-white work__cards"
      on:mouseenter={() => {
        size.set(100);
        mouseDownSize = 150;
        mouseUpSize = 100;
      }}
      on:mouseleave={() => {
        size.set(10);
        mouseDownSize = 30;
        mouseUpSize = 10;
      }}>
      <WorkCards />
    </div>
    <div class="sticky p-16 bg-gray-100" id="about">
      <div class="container flex flex-col items-center justify-center">
        <h1
          class="w-full mb-8 text-6xl font-bold leading-tight text-center text-gray-900 md:text-5xl">
          About
        </h1>
        <div class="flex-1 p-4 bg-white border border-gray-300 rounded-lg ">
          Voluptate irure aliquip consectetur occaecat consequat nulla eiusmod
          quis aute laborum dolore ipsum enim. Et voluptate excepteur incididunt
          non dolor veniam. Aliqua excepteur sit culpa est ipsum id do. Ad
          cupidatat commodo non quis velit cupidatat ea qui proident eiusmod
          mollit. Sit in aute Lorem cillum tempor ipsum pariatur magna eiusmod
          deserunt velit voluptate enim est.
        </div>
        <div class="flex-1 p-4 bg-white border border-gray-300 rounded-lg ">
          Voluptate irure aliquip consectetur occaecat consequat nulla eiusmod
          quis aute laborum dolore ipsum enim. Et voluptate excepteur incididunt
          non dolor veniam. Aliqua excepteur sit culpa est ipsum id do. Ad
          cupidatat commodo non quis velit cupidatat ea qui proident eiusmod
          mollit. Sit in aute Lorem cillum tempor ipsum pariatur magna eiusmod
          deserunt velit voluptate enim est.
        </div>
      </div>
    </div>

  </body>
  <Footer />

</html>
