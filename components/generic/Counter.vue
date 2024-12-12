<template>
  <p>{{ count }}</p>
</template>

<script lang="ts" setup>
const props = defineProps({
  startValue: {
    type: Number as () => number,
    required: false,
    default: 0,
  },
  endValue: {
    type: Number as () => number,
    required: true,
  },
})

const count = ref<number>(props.startValue)

const { resume, pause } = useRafFn(
  () => {
    if (count.value >= props.endValue) return pause()

    count.value++
  },
  { immediate: false },
)

// This will be possible to call from the outside
resume()
</script>
