<script>
  import * as animateScroll from 'svelte-scrollto';
  import { blur } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  let animateHello = false;
  function handleMouseOver(e) {
    animateHello = true;
  }
  function handleMouseOut(e) {
    animateHello = false;
  }
</script>

<header class="sticky top-0 z-50 py-4 bg-transparent">
  <!-- container -->
  <div class="container px-4 mx-auto sm:px-8 xl:px-20">
    <!-- header wrapper -->
    <div class="flex items-center justify-between">
      <!-- header logo -->
      <button
        class="px-4 py-1 duration-500 bg-blue-900 rounded-lg hover:bg-blue-700"
        on:click={() => animateScroll.scrollToTop()}>
        <h1
          class="text-2xl font-semibold leading-relaxed text-white font--brume">
          J
        </h1>
      </button>

      <!-- mobile toggle -->
      <div class="toggle md:hidden">
        <button>
          <svg
            class="w-6 h-6 text-gray-100 fill-current"
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
        <ul class="flex space-x-8 text-lg">
          <li>
            <div
              on:mouseover={handleMouseOver}
              on:mouseout={handleMouseOut}
              on:click={() => animateScroll.scrollTo({
                  element: '#about',
                  offset: -80
                })}
              class="px-4 py-2 font-medium text-gray-100 duration-500 cursor-pointer hover:text-gray-100">
              {#if animateHello}
                <p
                  transition:blur={{ amount: 6 }}
                  class="inline-block font-bold">
                  Hello, Friend.
                </p>
              {/if}
              <svg
                class="inline-block h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9
                  9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </li>

        </ul>
      </navbar>
    </div>
  </div>
</header>
