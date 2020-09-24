<script>
  import Inview from 'svelte-inview';
  import { fly, slide } from 'svelte/transition';
  let ref;
  let m = { x: 0, y: 0 };
  let backVisible = false;
  export let data;
  function flipCard() {
    if (backVisible == false) {
      this.classList.toggle('is-flipped');
      backVisible = !backVisible;
    }
  }
  function openPage() {}
</script>

<style>
  /* Small (sm) */
  @media (min-width: 640px) {
    .card {
      perspective: 1500px;
      width: 500px;
      opacity: 0;
      transition: all 0.2s ease-in-out;
      -webkit-transition: all 0.2s ease-in-out;
      transform: translateY(200px);
    }
    .card:hover {
      opacity: 1;
      transform: scale(1.08);
    }
    .card:active {
      transform: scale(1);
      transition: all 0.2s ease-in-out;
      -webkit-transition: all 0.2s ease-in-out;
    }
    .card__inner {
      width: 100%;
      height: 100%;
      position: relative;
      transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
      transform-style: preserve-3d;
    }
    :global(.card.is-flipped > .card__inner) {
      transform: rotateY(-180deg);
    }
    :global(.card.is-flipped) {
      z-index: 30;
    }
    .card__front,
    .card__back {
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
    .card__back {
      position: absolute;
      transform: rotateY(-180deg);
    }
    .animate {
      opacity: 1;
      transition-duration: 0.8s;
      transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      -moz-transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      transform: translateY(0);
      -moz-transform: translateY(0);
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

<Inview
  let:inView
  let:scrollDirection
  let:entry
  wrapper={ref}
  rootMargin="-25% 0px"
  unobserveOnEnter="true">
  <div bind:this={ref}>
    <div
      class="w-full my-5 cursor-pointer card"
      on:click={flipCard}
      class:animate={inView}>
      <div
        class="bg-gray-200 border border-gray-300 rounded-lg opacity-100 card__inner card__front hover:bg-gray-300 active:bg-gray-400 active:opacity-75">
        <div class="flex items-center px-4 pt-4">
          <img
            src={data.img}
            class="flex-initial w-16 h-16 rounded-full"
            alt="Company Logo" />
          <p
            class="flex-auto pl-4 text-sm font-bold leading-4 text-left uppercase">
            {data.frontHeader}
            <br />
            Front-end Dev, Design, design, design, design, design
          </p>
        </div>
        <div class="flex px-4 pt-2 pb-6">
          <div class="w-full">{data.frontBody}</div>
        </div>
        <a
          href="/"
          class="absolute bottom-0 right-0 p-1 px-3 text-xs font-bold uppercase">
          View More
        </a>
        <div
          class="flex flex-col items-center justify-center p-4 my-4 bg-white border border-black rounded-lg card__back active:bg-gray-100 active:opacity-75">
          {#if backVisible}
            <p
              class="p-2 text-base"
              transition:slide={{ delay: 400 }}
              on:outroend={openPage}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis nemo sequi obcaecati totam repellendus? At explicabo
              consequatur voluptatem recusandae, distinctio nobis exercitationem
              totam quae soluta laboriosam perferendis provident optio
              voluptatibus.
              <span class="font-bold text-blue-700">Circle Graphics</span>
            </p>
          {/if}
        </div>
      </div>
    </div>
  </div>
</Inview>
