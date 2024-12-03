<template>
  <div class="grid grid-cols-12 gap-6 px-24 py-52">
    <div class="col-span-3">
      <h3 class="relative z-10 text-lg font-bold leading-loose">{{ title }}</h3>
    </div>

    <div class="col-span-9">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String as PropType<string>,
    required: true,
  },
})
</script>
