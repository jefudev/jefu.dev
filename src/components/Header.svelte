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

<header class="sticky top-0 z-50 py-4 bg-white border-b-2">
  <!-- container -->
  <div class="container px-4 mx-auto sm:px-8 xl:px-20">
    <!-- header wrapper -->
    <div class="flex items-center justify-between">
      <!-- header logo -->
      <button
        class="px-4 py-1 duration-500 bg-gray-900 rounded-lg hover:bg-jefu-blue-500"
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
            class="w-6 h-6 text-gray-900 fill-current"
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
            <button
              on:mouseover={handleMouseOver}
              on:mouseout={handleMouseOut}
              on:click={() => animateScroll.scrollTo({
                  element: '#work',
                  offset: -80
                })}
              class="px-4 py-2 font-medium duration-500 hover:text-gray-900">
              {#if animateHello}
                <span transition:blur={{ amount: 6 }} class="font-bold">
                  Hello, Friend.
                </span>
              {/if}
              <span>&#x1F44B;</span>
            </button>
          </li>

        </ul>
      </navbar>
    </div>
  </div>
</header>
