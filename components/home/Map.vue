<template>
  <div ref="mapElement" />
</template>

<script lang="ts" setup>
import mapboxgl, { Map } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const runtimeConfig = useRuntimeConfig()

// Show mapbox map
mapboxgl.accessToken = runtimeConfig.public.mapboxToken ?? ''

const mapElement = ref<HTMLElement | null>(null)
const map = ref()

onMounted(() => {
  if (!mapElement.value) return

  console.log('config', runtimeConfig.public)

  // disable the atmosphere layer

  map.value = new Map({
    container: mapElement.value, // container ID
    center: [-74.5, 40], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 2, // starting zoom
  })

  map.value.on('load', () => {})
})
</script>
