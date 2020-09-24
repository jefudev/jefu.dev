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
      img: 'https://unsplash.it/100/200?random&gravity=center',
      frontBody:
        'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
    },
    {
      work: 'Infinite Domain',
      img: 'https://unsplash.it/200/100?random&gravity=center',
      frontBody:
        'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.'
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
