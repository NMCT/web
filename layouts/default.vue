<template>
  <div
    class="@dark:bg-neutral-900 @dark:text-neutral-50 flex min-h-screen flex-col font-sans"
  >
    <div class="relative z-10">
      <slot />
    </div>

    <div class="test pointer-events-none absolute top-0 h-full w-full" />
  </div>
</template>

<style scoped>
.test {
  --size: 4rem;
  --line: color-mix(in lch, canvasText, transparent 90%);
  background:
    linear-gradient(90deg, var(--line) 1px, transparent 1px var(--size)) 50% 50% /
      var(--size) var(--size),
    linear-gradient(var(--line) 1px, transparent 1px var(--size)) 50% 50% /
      var(--size) var(--size);
  -webkit-mask: linear-gradient(-20deg, transparent 50%, white);
  mask: linear-gradient(-20deg, transparent 50%, white);
  transform-style: flat;
}

@media (prefers-color-scheme: dark) {
  .test {
    --line: color-mix(in lch, canvasText, transparent 10%);
  }
}
</style>
