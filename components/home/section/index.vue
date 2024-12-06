<template>
  <div class="grid grid-cols-12 gap-6 py-52">
    <HomeSectionTitle class="col-span-3">{{ title }}</HomeSectionTitle>

    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String as PropType<string>,
    required: true,
  },

  layout: {
    type: String as PropType<string>,
    default: 'default',
  },
})
</script>
