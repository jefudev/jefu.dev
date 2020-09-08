<header class="sticky top-0 z-50 py-4 bg-white border-b-2">
  <!-- container -->
  <div class="container px-4 mx-auto sm:px-8 lg:px-16 xl:px-20">
    <!-- header wrapper -->
    <div class="flex items-center justify-between">
      <!-- header logo -->
      <div>
        <h1 class="font-semibold leading-relaxed text-black">
          <!-- svelte-ignore missing-declaration -->
          <a href="/" on:click={() => animateScroll.scrollToTop()}>Jeff Lau</a>
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
            <button class="px-4 py-2 hover:text-indigo-800">Work</button>
          </li>
          <li>
            <button class="px-4 py-2 hover:text-indigo-800">About</button>
          </li>
          <li>
            <button
              class="px-4 py-2 text-white bg-indigo-800 rounded-full hover:bg-indigo-900">
              Contact
            </button>
          </li>
        </ul>
      </navbar>
    </div>
  </div>
</header>
