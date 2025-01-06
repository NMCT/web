<template>
  <div class="mb-32 grid grid-cols-12 items-center gap-6 px-24">
    <h1
      class="pt-18 col-span-12 pb-8 text-center text-8xl font-semibold leading-tight"
    >
      {{ title }}
    </h1>

    <div class="col-span-12 mx-auto mb-4 max-w-prose text-xl leading-normal">
      <slot name="text" />
    </div>

    <slot />
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
