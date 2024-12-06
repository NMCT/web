<template>
  <div class="grid grid-cols-12 items-center gap-6 px-24">
    <h1
      class="pt-18 col-span-12 pb-8 text-center text-7xl font-semibold leading-tight"
    >
      {{ title }}
    </h1>

    <div class="col-span-12 mx-auto mb-32 max-w-prose text-xl leading-normal">
      <slot name="text" />
    </div>

    <!-- <div class="col-span-2 text-sm leading-relaxed tracking-wide">
      <slot name="floating" />
    </div> -->
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
