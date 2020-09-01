<script>
  import * as animateScroll from 'svelte-scrollto';
  import SvelteSeo from 'svelte-seo';
  import Cards from '../components/Cards.svelte';

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
  const handleEntry = ({ detail }) => {
    direction = detail.verticalDirection;
    if (detail.verticalDirection === 'up') {
      console.log('going down');
      console.log(detail.ratio);
    } else {
      console.log('going up');
      console.log(detail.ratio);
    }
  };

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
    <!-- header -->
    <header class="sticky top-0 z-50 py-4 bg-white shadow">
      <!-- container -->
      <div class="container px-4 mx-auto sm:px-8 lg:px-16 xl:px-20">
        <!-- header wrapper -->
        <div class="flex items-center justify-between">
          <!-- header logo -->
          <div>
            <h1 class="font-semibold leading-relaxed text-black">
              <!-- svelte-ignore missing-declaration -->
              <a href="/" on:click={() => animateScroll.scrollToTop()}>
                Jeff Lau
              </a>
            </h1>
          </div>

          <!-- mobile toggle -->
          <div class="toggle md:hidden">
            <button>
              <svg
                class="w-6 h-6 text-black fill-current"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <!-- Navbar -->
          <navbar class="hidden navbar md:block">
            <ul class="flex space-x-8 text-sm font-semibold">
              <li>
                <button class="hover:text-orange-500">Work</button>
              </li>
              <li>
                <button class="hover:text-orange-500">About</button>
              </li>
            </ul>
          </navbar>
        </div>
      </div>
    </header>
    <!-- end header -->
    <!-- hero -->
    <div class="py-16 bg-gray-100 hero">
      <!-- container -->
      <div class="container px-4 mx-auto sm:px-8 lg:px-16 xl:px-20">
        <!-- hero wrapper -->
        <div class="grid items-center grid-cols-1 gap-8 md:grid-cols-12">
          <!-- hero text -->
          <div class="col-span-6 hero-text ">
            <h1
              class="max-w-xl text-6xl font-bold leading-tight text-gray-900 md:text-5xl">
              Hello, I'm Jeff.
            </h1>
            <hr class="w-24 mt-8 border-black" />
            <p
              class="mt-8 text-4xl font-semibold leading-relaxed text-gray-800">
              I am a web developer based in Denver, Colorado.
            </p>
          </div>
          <!-- hero image -->
          <div class="col-span-6 hero-image">
            <img src="/home-bike.png" alt="Vector Art of Guy Riding a Bike" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="py-16 bg-white"
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
      <!-- container -->
      <div class="container w-screen px-4 mx-auto sm:px-8 lg:px-16 xl:px-20">
        <h1
          class="w-full mb-8 text-6xl font-bold leading-tight text-center text-gray-900 md:text-5xl">
          Work
        </h1>
        <div class="flex flex-col items-center cards__container">
          <Cards company="Circle Graphics" on:entry={handleEntry} />
          <Cards
            company="University of California, San Diego"
            on:entry={handleEntry} />
          <Cards company="Infinite Domain" on:entry={handleEntry} />
          <Cards company="Film" on:entry={handleEntry} />
          <Cards company="Illustrations" on:entry={handleEntry} />
        </div>
      </div>
    </div>
    <div class="sticky h-screen py-16 bg-gray-100 hero" />
    <!-- end hero -->

  </body>

</html>
