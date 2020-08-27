<script type="text/javascript">
  // falling layers
  import fallingLayers from '../data/fallingLayers.js';
  let y;
</script>

<style>
  .home {
    height: 500vh;
  }
  .hero__container {
    max-width: 1400px;
    margin: 0 auto;
  }
  .hero__about {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    height: 100vh;
  }
  .about-txt__container {
  }
  .about__txt {
    font-size: 150px;
    padding: 75px;
  }
  /* Parallax Styles */
  .parallax__container {
    position: fixed;
    left: 50%;
    height: 100vh;
  }
  .parallax__img {
    position: absolute;
    max-width: 600px;
    width: auto;
    justify-self: center;
    transition: transform 0.2s ease-out;
    margin-top: 50px;
  }
</style>

<svelte:head>
  <title>Jeff Lau</title>
</svelte:head>
<svelte:window bind:scrollY={y} />
<div class="home">
  <div class="hero__container">
    <div class="hero__about">
      <div class="about-txt__container">
        <p class="about__txt">
          Jeff Lau is a
          <span style="z-index:1000">web</span>
          developer, designer, and artist.
        </p>
      </div>

      <div class="parallax__container">
        {#each fallingLayers as fallingLayer}
          <img
            class="parallax__img"
            style="z-index:{fallingLayer.layer}; transform: translate(0,{(-y * fallingLayer.speed) / (fallingLayers.length - 1)}px);
            bottom:{fallingLayer.position}"
            src="falling/{fallingLayer.layer}.png"
            alt="parallax layer {fallingLayer.layer}" />
        {/each}
      </div>

    </div>
  </div>
</div>
