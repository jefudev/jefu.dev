<script>
  import * as animateScroll from 'svelte-scrollto';
  import { onMount } from 'svelte';
  import { annotate, annotationGroup } from 'rough-notation';

  onMount(() => {
    addAnnotations();
  });
  let ag;
  function addAnnotations() {
    const a1 = annotate(document.querySelector('#e1'), {
      type: 'highlight',
      color: '#FFEA34'
    });
    const a2 = annotate(document.querySelector('#e2'), { type: 'underline' });
    const a3 = annotate(document.querySelector('#e3'), {
      type: 'circle'
    });
    const a4 = annotate(document.querySelector('#e4'), {
      type: 'highlight',
      color: '#FFEA34'
    });

    ag = annotationGroup([a1, a2, a3, a4]);
    ag.show();
  }
  function updatesAnnotation() {
    ag.hide();
    setTimeout(function() {
      ag.show();
    }, 1500);
  }
</script>

<style>
  .downArrow {
    position: absolute;
    left: calc(50% - 16px);
  }
  .bounce {
    -moz-animation: bounce 3s infinite;
    -webkit-animation: bounce 3s infinite;
    animation: bounce 3s infinite;
  }
  @-moz-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -moz-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -moz-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -moz-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }
  @-webkit-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -webkit-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -moz-transform: translateY(-30px);
      -ms-transform: translateY(-30px);
      -webkit-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -moz-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      -webkit-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }
</style>

<svelte:window on:resize={updatesAnnotation} />
<div class="sticky py-16 bg-gray-100 hero">
  <!-- container -->
  <div
    class="container px-4 mx-auto transition-all duration-300 sm:px-8 xl:px-20">
    <!-- hero wrapper -->
    <div class="grid items-center grid-cols-1 gap-8 md:grid-cols-12">
      <!-- hero text -->
      <div class="hidden col-span-5 md:block">
        <h1
          class="max-w-xl text-6xl font-bold text-gray-900 font--brume md:text-5xl">
          Hello, I'm
          <span id="e1">Jeff</span>
        </h1>
        <hr class="w-24 mt-8 border-black" />
        <p class="mt-8 text-2xl font-semibold leading-relaxed text-gray-800">
          I am a
          <span id="e2">web developer</span>
          and
          <span id="e3">designer</span>
          based in Denver, Colorado
        </p>
      </div>
      <!-- hero image -->
      <div class="col-span-12 md:col-span-7 md:py-12 lg:p-16">
        <img
          src="/hero-scrapbook.png"
          alt="Collage of Jeff with scribbles and objects" />
      </div>
      <div class="block col-span-12 md:hidden">
        <h1
          class="max-w-xl pb-8 text-6xl font-bold text-center text-gray-900 font--brume">
          Hello, I'm
          <span id="e4">Jeff</span>
        </h1>
      </div>
    </div>
    <button
      class="downArrow bounce"
      on:click={() => animateScroll.scrollTo({
          element: '#work',
          offset: -80
        })}>
      <svg
        enable-background="new 0 0 32 32"
        class="text-gray-900 fill-current hover:text-jefu-blue-500"
        height="32px"
        version="1.1"
        viewBox="0 0 32 32"
        width="32px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <path
          d="M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0
          c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002
          c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z"
          id="Expand_More" />
      </svg>
    </button>
  </div>
</div>
