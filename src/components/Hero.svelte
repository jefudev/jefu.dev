<script>
  const layers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let y;

  import { onMount } from 'svelte';

  onMount(() => {
    document.getElementById('heroLoading').classList.add('hidden');
    document.getElementById('parallaxHero').classList.remove('js-loading');
  });
</script>

<style>
  .js-loading *,
  .js-loading *:before,
  .js-loading *:after {
    animation-play-state: paused !important;
    display: none !important;
  }
  .parallax-container {
    position: fixed;
    width: 2400px;
    height: 712px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .parallax-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    animation: botup 2s;
    animation-fill-mode: both;
    will-change: transform;
  }

  @keyframes botup {
    0% {
      top: -20px;
      opacity: 0;
      scale: 0.9;
    }
    100% {
      top: 0px;
      opacity: 1;
      scale: 1;
    }
  }

  .parallax-container img:last-child::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(45, 10, 13);
  }

  .text {
    position: relative;
    width: 100%;
    height: 300vh;
    color: #fff;
    text-align: center;
    padding: 4em 0.5em 0.5em 0.5em;
    box-sizing: border-box;
    pointer-events: none;
  }

  span {
    display: block;
    font-size: 1em;
    text-transform: uppercase;
    will-change: transform, opacity;
  }

  .foreground {
    position: absolute;
    top: 711px;
    left: 0;
    width: 100%;
    height: calc(100% - 712px);
    background-color: rgb(32, 0, 1);
    color: white;
    padding: 50vh 0 0 0;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    background-color: rgb(253, 174, 51);
  }
</style>

<svelte:window bind:scrollY={y} />
<p id="heroLoading">Loading...</p>
<div class="parallax-container js-loading" id="parallaxHero">
  {#each layers as layer}
    <img
      style="transform: translate(0,{(-y * layer) / (layers.length - 1)}px);
      animation-delay: {layer * 0.2}s"
      src="parallax/parallax{layer}.png"
      alt="parallax layer {layer}" />
  {/each}
</div>

<div class="text">
  <span style="opacity: {1 - Math.max(0, y / 40)}">scroll down</span>

  <div class="foreground">You have scrolled {y} pixels</div>
</div>
