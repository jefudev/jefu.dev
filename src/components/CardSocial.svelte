<script>
  export let img = '';
</script>

<style>
  /* Small (sm) */
  @media (min-width: 640px) {
  }
  /* Medium (md) */
  @media (min-width: 768px) {
    /* ... */
  }

  /* Large (lg) */
  @media (min-width: 1024px) {
    /* ... */
  }

  /* Extra Large (xl) */
  @media (min-width: 1280px) {
    /* ... */
  }
</style>

<div class="flex items-center justify-center px-4 pt-4">
  <img
    src={img}
    class="flex-initial w-16 h-16 rounded-full"
    alt="Company Logo" />
  <p class="pl-4 text-sm font-bold leading-4 text-left uppercase">
    <slot name="header" />
  </p>
</div>
<div class="flex items-center justify-center px-4 pt-4">
  <slot name="body" />
</div>
