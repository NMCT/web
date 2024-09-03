<template>
  <RouterLink
    :class="`rounded-2xl bg-neutral-50 px-4 py-2 font-semibold hover:bg-neutral-900 hover:text-white row-span-${
      props.module.studycredits / 3
    } col-start-${props.module.semester} ${
      props.module.tracks &&
      props.module.tracks.map((track: string) => ` js-track-${track}`).join(``)
    }`"
    :to="`${props.module._path}`"
  >
    <h1>{{ props.module.title }}</h1>
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
