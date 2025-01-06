<template>
  <div class="@dark:bg-neutral-900 @dark:text-neutral-50 font-sans">
    <div class="grow-1 relative z-10 flex min-h-dvh flex-col">
      <slot />
    </div>

    <div
      class="background-grid pointer-events-none absolute top-0 h-full w-full"
    />
  </div>
</template>

<style scoped>
.background-grid {
  --size: 4rem;
  --line: color-mix(in lch, canvasText, transparent 90%);
  background:
    linear-gradient(90deg, var(--line) 1px, transparent 1px var(--size)) 50%
      50% / var(--size) var(--size),
    linear-gradient(var(--line) 1px, transparent 1px var(--size)) 50% 50% /
      var(--size) var(--size);
  -webkit-mask: linear-gradient(-20deg, transparent 50%, white);
  mask: linear-gradient(-20deg, transparent 50%, white);
  transform-style: flat;
}

@media (prefers-color-scheme: dark) {
  .background-grid {
    --line: color-mix(in lch, canvasText, transparent 10%);
  }
}
</style>
