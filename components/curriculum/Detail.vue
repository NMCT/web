<template>
  <RouterLink
    :class="`rounded-lg bg-neutral-50 px-4 py-4 hover:text-neutral-400 row-span-${
      props.module.studycredits / 3
    } col-start-${props.module.semester} ${
      props.module.tracks &&
      props.module.tracks.map((track: string) => ` js-track-${track}`).join(``)
    }`"
    :to="`${props.module._path}`"
  >
    <h1 class="text-2xl font-semibold">{{ props.module.title }}</h1>
  </RouterLink>
</template>

<script lang="ts" setup>
const props = defineProps({
  module: {
    type: Object,
    required: true,
  },
})
</script>
