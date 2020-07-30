<script>
  const layers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let y;
  import parallaxLayers from '../data/parallaxLayers.js';
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
    height: 100vh;
    max-height: 1000px;
    left: 50%;
    transform: translate(-50%, 0);
    background-image: url(https://www.fillmurray.com/1200/500);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .parallax-container img {
    position: absolute;
    animation: botup 2s;
    animation-fill-mode: both;
    will-change: transform;
    transition: transform 0.1s ease, top 0.1s ease;
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
    background: #fff;
  }

  .text {
    position: relative;
    width: 100%;
    /* height: 300vh; */
    color: #000;
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
    background-color: #fff;
    color: #000;
    padding: 0 0 250vh 0;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    background-color: #fff;
  }
</style>

<svelte:window bind:scrollY={y} />
<p id="heroLoading">Loading...</p>
<div class="parallax-container js-loading" id="parallaxHero">
  <div class="container">
    {#each parallaxLayers as parallaxLayer}
      <img
        style=" transform: translate( {parallaxLayer.align},{(-y * parallaxLayer.group) / (parallaxLayers.length - 1)}px);
        animation-delay: {parallaxLayer.group * 0.2}s; z-index:{parallaxLayer.zIndex}"
        src="https://www.fillmurray.com/{parallaxLayer.name}"
        alt="parallax layer {parallaxLayer}" />
    {/each}
  </div>
</div>

<div class="text">
  <span style="opacity: {1 - Math.max(0, y / 40)}">scroll down</span>

  <div class="foreground">
    You have scrolled {y} pixels
    {#each parallaxLayers as parallaxLayer}{parallaxLayer.name}{/each}
  </div>
</div>
<!-- working layers -->
<!-- <img
style=" transform: translate( 0,{(-y * layer) / (layers.length - 1)}px);
animation-delay: {layer * 0.2}s;z-index:{layer}"
src="parallax/parallax{layer}.png"
alt="parallax layer {layer}" /> -->
