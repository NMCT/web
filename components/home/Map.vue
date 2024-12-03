<template>
  <div ref="mapElement" class="map" />
</template>

<script lang="ts" setup>
import mapboxgl, { Map } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const runtimeConfig = useRuntimeConfig()
console.log('config', runtimeConfig)

// Show mapbox map
mapboxgl.accessToken = runtimeConfig.mapboxToken ?? ''

const mapElement = ref<HTMLElement | null>(null)
const map = ref()

onMounted(() => {
  if (!mapElement.value) return

  console.log('config', runtimeConfig)

  map.value = new Map({
    container: mapElement.value, // container ID
    center: [-74.5, 40], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9, // starting zoom
  })
})
</script>
