<script>
  function flipCard() {
    this.classList.toggle('is-flipped');
  }

  import Inview from 'svelte-inview';
  import { createEventDispatcher } from 'svelte';

  let ref;
  const dispatch = createEventDispatcher();

  let ratio = 0;
</script>

<style>
  .card {
    width: 500px;
    height: 300px;
    perspective: 1500px;
    transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
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
  }
  .card__back {
    transform: rotateY(-180deg);
  }
</style>

<!-- on:change={({ detail }) => dispatch('entry', {
  verticalDirection: detail.scrollDirection.vertical,
  ratio: detail.entry.intersectionRatio
})} -->
<!-- on:change={event => {
  const { inView, entry, scrollDirection, observe, unobserve } = event.detail;
}} -->
<!-- -->
<Inview
  let:inView
  let:scrollDirection
  let:entry
  wrapper={ref}
  on:change={event => (ratio = event.detail.entry.intersectionRatio)}
  threshold={Array.apply(null, { length: 100 }).map((n, i) => i / 100)}>
  <div
    class="my-12 cursor-pointer card"
    on:click={flipCard}
    bind:this={ref}
    style="transform: scale(calc(.75 + ({ratio}/2));">
    <div class="card__inner">
      <div
        class="flex flex-col items-center p-4 my-4 bg-white border border-black rounded-lg card__front hover:shadow-md">
        <img
          src="http://placekitten.com/150/150"
          class="w-16 h-16 mt-3 rounded-full"
          alt="Company Logo" />
        <p class="p-3 text-3xl text-center">
          {ratio} I've built and led front-end development of 6 eCommerice sites
          from the ground up
        </p>
      </div>
      <div
        class="flex flex-col items-center p-4 my-4 bg-white border border-black rounded-lg card__back hover:shadow-md">
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
