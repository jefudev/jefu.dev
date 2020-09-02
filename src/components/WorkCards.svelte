<script>
  import Card from './Card.svelte';
  let works = [
    { work: 'Circle Graphics', img: 'img url' },
    { work: 'University of California, San Diego', img: 'img url' },
    { work: 'Infinite Domain', img: 'img url' },
    { work: 'Film', img: 'img url' },
    { work: 'Illustrations', img: 'img url' }
  ];
</script>

<!-- container -->
<div class="container w-screen px-4 mx-auto sm:px-8 lg:px-16 xl:px-20">
  <h1
    class="w-full mb-8 text-6xl font-bold leading-tight text-center text-gray-900 md:text-5xl">
    Work
  </h1>
  <div class="flex flex-col items-center cards__container">
    {#each works as work}
      <Card work img />
      {work.work}
    {/each}
  </div>
</div>
