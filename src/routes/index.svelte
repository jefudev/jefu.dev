<script>
  import * as animateScroll from 'svelte-scrollto';
  import SvelteSeo from 'svelte-seo';
  import Cards from '../components/Cards.svelte';

  import { flip } from 'svelte/animate';
  import { afterUpdate, beforeUpdate, tick } from 'svelte';

  let direction;

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

  let y;
</script>

<SvelteSeo
  title="Home | Jeff Lau — Web Developer — Designer — Artist — Content Creator"
  description="Jeff Lau is a web developer and designer based in Denver
  Colorado." />
<svelte:window bind:scrollY={y} />
<body class="antialiased transition-all duration-500">
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
            <button on:click={() => animateScroll.scrollToTop()}>
              Jeff Lau
            </button>
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
          <p class="mt-8 text-4xl font-semibold leading-relaxed text-gray-800">
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
  <div class="py-16 bg-white">
    <!-- container -->
    <div class="container w-screen px-4 mx-auto sm:px-8 lg:px-16 xl:px-20">
      <h1
        class="w-full mb-8 text-6xl font-bold leading-tight text-center text-gray-900 md:text-5xl">
        Work
      </h1>
      <div class="flex flex-col items-center">
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
  <div class="h-screen py-16 bg-gray-100 hero" />
  <!-- end hero -->
</body>
