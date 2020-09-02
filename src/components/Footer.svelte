<script>
  import { onMount } from 'svelte';

  let now = new Date(),
    year;
  onMount(() => {
    year = now.getFullYear();
  });
</script>

<header class="sticky z-50 py-16 bg-white border-t-2">
  <div class="container px-4 mx-auto sm:px-8 lg:px-16 xl:px-20">
    <div class="flex items-center justify-start">
      <div>
        <h1 class="font-semibold leading-relaxed text-black ">
          &copy; Jeff Lau, {year}
        </h1>
        <p class="text-base leading-relaxed">
          Designed by Jeff. Developed in Svelte.
        </p>
        <p class="text-base leading-relaxed">
          <a href="https://www.linkedin.com/in/jefudev/" class="pr-2">
            LinkedIn
          </a>
          <a href="https://twitter.com/jefudev" class="pr-2">Twitter</a>
          <a href="mailto:hi@jefu.dev">Email</a>
        </p>
      </div>
    </div>
  </div>
</header>
