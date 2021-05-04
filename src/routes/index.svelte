<script>
  import * as animateScroll from 'svelte-scrollto';
  import SvelteSeo from 'svelte-seo';
  import WorkCards from '../components/WorkCards.svelte';
  import Header from '../components/Header.svelte';
  import Hero from '../components/Hero.svelte';
  import Footer from '../components/Footer.svelte';
  import Inview from 'svelte-inview';
  let ref;

  import { flip } from 'svelte/animate';

  let direction;
  import { onMount } from 'svelte';
  let height;
  let y;
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  .placeholder {
    height: 525px;
  }
</style>

<svelte:window bind:scrollY={y} />
<SvelteSeo
  title="Home | Jeff Lau — Web Developer — Designer — Artist — Content Creator"
  description="Jeff Lau is a web developer and designer based in Denver
  Colorado." />
<html lang="en">
  <body class="antialiased transition-all duration-500 bg-gray-900">
    <Header />
    <Hero />
    <div class="p-16 bg-gradient-to-r from-indigo-700 to-blue-700">
      <div class="container">
        <p
          class="w-full pb-4 text-3xl leading-tight text-left text-gray-900 font--brume">
          Notes
        </p>
        <div
          class="grid gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
          <div class="">
            <img src="https://placeskull.com/249" alt="" />
            <p
              class="pt-4 text-lg font-semibold leading-relaxed text-center text-gray-900">
              Jeff is based in
              <br />
              Denver, CO
            </p>
          </div>
          <div>
            <img src="https://placeskull.com/250" alt="" />
            <p
              class="pt-4 text-lg font-semibold leading-relaxed text-center text-gray-900">
              UX/UI Developer
              <br />
              @ Circle Graphics
            </p>
          </div>
          <div>
            <img src="https://placeskull.com/251" alt="" />
            <p
              class="pt-4 text-lg font-semibold leading-relaxed text-center text-gray-900">
              Currently studying
              <br />
              <a href="https://grow.google/uxdesign" target="_blank">
                <u>Google UX Design</u>
              </a>
            </p>
          </div>
          <div>
            <img src="https://placeskull.com/252" alt="" />
            <p
              class="pt-4 text-lg font-semibold leading-relaxed text-center text-gray-900">
              Portfolio WIP.
              <br />
              Check back soon!
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="sticky p-16 px-2 bg-gray-900 md:px-16" id="about">
      <div class="container">
        <div class="grid items-center grid-cols-1 gap-8 md:grid-cols-12">
          <div class="col-span-12">
            <p
              class="w-full pl-4 text-3xl leading-tight text-left text-gray-100 font--brume">
              Work
            </p>
          </div>
          <div class="col-span-12 md:col-span-3">
            <div class="p-1 md:p-4">
              <img src="https://placeskull.com/550" alt="About" />
            </div>
          </div>
          <div class="col-span-12 duration-500 delay-1000 md:col-span-9">
            <p
              class="w-full pl-4 text-lg font-extrabold leading-tight text-left text-gray-100 uppercase">
              CG Sign Lab
            </p>
            <p class="px-4 py-2 text-lg leading-relaxed text-gray-100 ">
              CG Sign Lab is an eCommerce store selling customizable business
              signs and branding solutions. Jeff was involved in the entire
              process of building CG Sign Lab; from ideation, market analysis,
              prototyping, graphic design, full-stack web development, and
              marketing. The success of this online print lab has lead to the
              creation of a suite of in-house niche brands as well as
              white-label brands for enterprise clients.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="sticky p-16 px-2 bg-gray-900 md:px-16" id="about">
      <div class="container">
        <div class="grid items-center grid-cols-1 gap-8 md:grid-cols-12">
          <Inview
            let:inView
            let:scrollDirection
            wrapper={ref}
            rootMargin="-30% 0px"
            unobserveOnEnter={true}>
            <div class="col-span-6" bind:this={ref}>
              <div class="p-4">
                {#if inView}
                  <img
                    src="/about-scrapbook.png"
                    alt="About"
                    class:imageFadeIn={inView} />
                {:else}
                  <div class="placeholder" />
                {/if}
              </div>
            </div>
            <div
              class="col-span-6 duration-500 delay-1000 opacity-0"
              class:opacity-100={inView}>
              <p
                class="w-full pl-4 text-3xl leading-tight text-left text-gray-100 font--brume">
                Info
              </p>
              <p class="p-4 text-xl leading-relaxed text-gray-100 ">
                Jeff Lau works as a UX/Front-end developer at Circle Graphics,
                where he builds and maintain its flagship eCommerce websites. He
                integrates his previous interest in interdisciplinary art with
                UX principles to create products that are useful, accessible,
                and enjoyable to use.
                <!-- an experienced web developer, designer, and artist. When growing
                up in San Francisco, he spent his time building computers and
                learning new art mediums. It wasn't until college where he
                studied Interdiscplinary Computing and the Art(ICAM) that he was
                able to During his undergrad at UC San Diego, Driven by [], he
                takes pride in providing I believe the intersection between art
                and technology the closest reality we have from science fiction.
                I love Beginn design and tech growing up. box of crayons with a
                sharpener on the back. learning to code with a turtle
                [https://www.eclipse.org/Xtext/documentation/208_tortoise.html]
                middle end -->
              </p>
            </div>
          </Inview>
        </div>
      </div>
    </div>

  </body>
  <Footer />

</html>
