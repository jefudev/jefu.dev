<script>
  import Card from './Card.svelte';
  let works = [
    {
      work: 'Circle Graphics',
      img: 'https://unsplash.it/100/100?random&gravity=center',
      frontHeader: '2016 - Present',
      frontBody:
        'Magna id non exercitation ut aute. Tempor reprehenderit nostrud et velit do labore velit eu sit aliqua laborum. Ad duis elit excepteur anim nulla incididunt elit tempor aliquip irure anim. Esse velit pariatur minim incididunt ad officia irure laboris laborum deserunt occaecat. Pariatur do Lorem dolore reprehenderit fugiat nostrud ex consequat. Dolor sit cillum eu quis mollit dolore consequat elit adipisicing amet exercitation ullamco qui mollit.'
    },
    {
      work: 'University of California, San Diego',
      img: 'https://unsplash.it/100/200?random&gravity=center'
    },
    {
      work: 'Infinite Domain',
      img: 'https://unsplash.it/200/100?random&gravity=center'
    },
    { work: 'Film', img: 'https://unsplash.it/100/300?random&gravity=center' },
    {
      work: 'Illustrations',
      img: 'https://unsplash.it/200/200?random&gravity=center'
    }
  ];
</script>

<!-- container -->
<div
  class="container w-screen min-h-screen px-4 mx-auto sm:px-8 lg:px-16 xl:px-20">
  <h1
    class="w-full mb-8 text-5xl font-bold leading-tight text-center text-gray-900 font--brume">
    Work
  </h1>
  <div class="flex flex-col items-center cards__container">
    {#each works as work}
      <Card data={work} />
    {/each}
  </div>
</div>
