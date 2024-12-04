<template>
  <RouterLink
    :class="`rounded-2xl px-4 py-4 row-span-${
      props.module.studycredits / 3
    } col-start-${props.module.semester} ${
      props.module.tracks &&
      props.module.tracks.map((track: string) => ` js-track-${track}`).join(``)
    } bg-${props.module.pillar}-100`"
    :to="`${props.module._path}`"
  >
    <!-- <span
      :class="`bg-${props.module.pillar}-500 rounded-2xl px-3 py-1 text-sm text-white`"
    >
      {{ props.module.pillar }}
    </span> -->
    <h1 class="font-bold">{{ props.module.title }}</h1>
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
