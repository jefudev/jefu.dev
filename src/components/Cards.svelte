<script>
  import Inview from 'svelte-inview';
  let ref;
  let cardRatio;

  function flipCard() {
    this.classList.toggle('is-flipped');
  }

  function shrinkSiblings() {
    var x = document.getElementsByClassName('card');
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].classList.add('card--scale-1');
    }
    this.classList.remove('card--scale-1');
    // this.style.setProperty('transform', 'scale(1.11)');
    // this.style.setProperty('opacity', '1');

    console.log('ratio updated');
  }
  function resetScale() {
    var x = document.getElementsByClassName('card');
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove('card--scale-1');
    }

    console.log('ratio updated');
  }
</script>

<style>
  :root {
    --card-ratio: 0.2;
  }
  .card {
    perspective: 1500px;
    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    height: 300px;
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
    position: absolute;
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
    transform: rotateY(-180deg);
  }
  /* Small (sm) */
  @media (min-width: 640px) {
    .card {
      width: 500px;
      transform: scale(min(max(calc(1.1 * var(--card-ratio)), 1), 1.1));
      opacity: max(calc(var(--card-ratio) * 1.1), 0.7);
    }
    .card:hover {
      opacity: 1;
      transform: scale(1.11);
    }
    :global(.card--scale-1) {
      transform: scale(1) !important;
      opacity: 0.7 !important;
    }
    /* .cards__container .card:hover ~ .card {
      --card-ratio: 0.2 !important;
    } */
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
  rootMargin="-20% 0px"
  on:change={event => (cardRatio = event.detail.entry.intersectionRatio)}
  threshold={Array.apply(null, { length: 100 }).map((n, i) => i / 100)}>
  <div
    class="w-full my-5 cursor-pointer card"
    on:click={flipCard}
    bind:this={ref}
    style="--card-ratio: {cardRatio}"
    on:mouseover={shrinkSiblings}
    on:mouseout={resetScale}>
    <div class="opacity-100 card__inner">
      <div
        class="flex flex-col items-center p-4 my-4 bg-gray-200 border border-gray-300 rounded-lg shadow-lg card__front hover:shadow-2xl hover:bg-gray-300">
        <img
          src="https://unsplash.it/100/100?random&gravity=center"
          class="w-16 h-16 mt-3 rounded-full"
          alt="Company Logo" />
        <p class="p-3 text-xl text-center">
          {cardRatio}I've built and led front-end development of 6 eCommerice
          sites from the ground up
        </p>
      </div>
      <div
        class="flex flex-col items-center p-4 my-4 bg-white border border-black rounded-lg card__back hover:shadow-2xl">
        <p class="p-2 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          nemo sequi obcaecati totam repellendus? At explicabo consequatur
          voluptatem recusandae, distinctio nobis exercitationem totam quae
          soluta laboriosam perferendis provident optio voluptatibus.
          <span class="font-bold text-blue-700">Circle Graphics</span>
        </p>
      </div>
    </div>
  </div>
</Inview>
