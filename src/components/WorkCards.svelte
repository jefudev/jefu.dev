<script>
  import Card from './Card.svelte';
  import CardSocial from './CardSocial.svelte';

  import { Swipe, SwipeItem } from 'svelte-swipe'; // gzipped 3.37 KB

  const swipeConfig = {
    autoplay: false,
    delay: 2000,
    showIndicators: true,
    transitionDuration: 1000,
    defaultIndex: 0
  };
  let SwipeComp;
  function nextSlide() {
    SwipeComp.nextItem();
  }

  function prevSlide() {
    SwipeComp.prevItem();
  }
  const corporateCardInfo = {
    img: 'http://placekitten.com/g/200/300',
    cardId: 'cgOnDemand',
    expandTxt: 'Wow, show me more',
    cardHeight: 200
  };
  const ecommerce1 = {
    cardHeight: 200
  };
  let y;
</script>

<style>
  .parallax__container {
    position: fixed;
    height: 800px;
  }
  .parallax__img {
    position: absolute;
    max-width: 300px;
    width: auto;
    justify-self: center;
    transition: transform 0.1s ease-out;
    margin-top: 50px;
  }
  .slide__buttons {
    max-width: 500px;
  }
  .has-pointer-event {
    pointer-events: fill;
  }
</style>

<svelte:window bind:scrollY={y} />
<!-- container -->

<div class="container w-screen px-4 mx-auto sm:px-8 lg:px-16 xl:px-20">
  <h1
    class="w-full mb-8 text-5xl font-bold leading-tight text-center text-gray-900 font--brume">
    Work
  </h1>
  <div class="relative z-10">
    <div
      class="cards__container"
      style="cursor: grab; height: {corporateCardInfo.cardHeight + 60}px">
      <Swipe {...swipeConfig} bind:this={SwipeComp}>
        <SwipeItem>
          <Card {...ecommerce1}>
            <p class="text-2xl">5+ years in developing eCommerce stores.</p>
            <p class="text-lg">swipe</p>
          </Card>
        </SwipeItem>
        <SwipeItem>
          <Card {...ecommerce1}>
            <div class="flex items-center w-full">
              <img src="https://dummyimage.com/200x200.jpg" alt="" />
              <p class="px-4">Testing the waters</p>
            </div>
          </Card>
        </SwipeItem>
        <SwipeItem>
          <Card {...corporateCardInfo}>
            <CardSocial {...corporateCardInfo}>
              <p slot="header">
                Project: CG Sign Lab
                <br />
                Role: Dev, Design, Product, Marketing
                <br />
                <a
                  href="https://www.cgsignlab.com"
                  target="_blank"
                  class="cursor-pointer text-jefu-blue-500 hover:text-gray-900 has-pointer-event">
                  Live Link
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="inline-block h-3"
                    style="margin-top: -5px"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0
                      002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </p>
              <p slot="body">Magna id non exercitation ut aute.</p>
            </CardSocial>
          </Card>
        </SwipeItem>

        <SwipeItem>
          <Card {...corporateCardInfo}>
            <p class="text-xl">Cool</p>
          </Card>
        </SwipeItem>

        <SwipeItem>
          <Card {...corporateCardInfo} />
        </SwipeItem>
      </Swipe>
    </div>
    <div class="flex justify-between mx-auto slide__buttons">
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        class="inline-block clear-right h-4 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg> -->
      <button
        type="slide__button"
        class="px-8 text-xs font-bold uppercase focus:ring-2 focus:ring-jefu-blue-500"
        on:click={prevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Prev
      </button>
      <p class="text-center">
        <span class="text-xl font-bold uppercase">e-Commerce</span>
        <br />
        <span class="text-base">asdf</span>
      </p>
      <button
        type="button"
        class="px-8 text-xs font-bold uppercase"
        on:click={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        Next
      </button>
    </div>

  </div>
  <div class="container top-0 z-0 parallax__container">
    <img
      class="parallax__img"
      style="transform: translate(0,{(-y * -1) / 5}px) rotate({y}deg);height:50px;
      right:350px"
      src="shapes/scribble-5-min.png"
      alt="shape layer scribble" />
  </div>

</div>
