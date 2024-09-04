<template>
  <div class="grid grid-cols-12 items-center gap-6 px-24">
    <section class="col-span-10 pb-48 pt-24">
      <h1 class="mb-6 text-7xl font-semibold">
        {{ title }}
      </h1>

      <div class="max-w-prose text-lg leading-loose">
        <slot name="text" />
      </div>
    </section>

    <div class="col-span-2 font-mono text-sm leading-relaxed tracking-wide">
      <slot name="floating" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { title } = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
