<script>
  export let bgImg = '';
  export let cardHeight = '350';
</script>

<style>
  /* Small (sm) */
  @media (min-width: 640px) {
    .card {
      max-width: 500px;
      transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
    }
    .card:hover {
      opacity: 1;
    }
    .card:active {
      transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
    }
    .card__inner {
      width: 100%;
      height: 100%;
      position: relative;
      transition: transform 0.2s cubic-bezier(0.65, 0, 0.35, 1);
      transform-style: preserve-3d;
    }
    .card__front {
      position: relative;
      height: 100%;
      width: 100%;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      top: 0;
      left: 0;
    }
  }

  /* Medium (md) */
  @media (min-width: 768px) {
    /* ... */
  }

  /* Large (lg) */
  @media (min-width: 1024px) {
    /* ... */
  }

  /* Extra Large (xl) */
  @media (min-width: 1280px) {
    /* ... */
  }
</style>

<div class="w-full mx-auto my-5 card" style="height: {cardHeight}px">
  <div
    class="flex flex-col items-center justify-center overflow-hidden bg-gray-200 border border-gray-300 rounded-lg opacity-100 card__inner card__front hover:bg-gray-300 active:bg-gray-400 active:opacity-75"
    style=" background-image: url({bgImg}); background-size: cover;">
    <slot />
  </div>
</div>
