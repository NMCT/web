<template>
  <div ref="mapElement" class="map" />
</template>

<script lang="ts" setup>
import mapboxgl, { type Map } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

console.log(import.meta.env)
console.log(process.env)
// Show mapbox map
mapboxgl.accessToken = process.env.MAPBOX_TOKEN

const mapElement = ref<HTMLElement | null>(null)
const map = ref<Map | null>(null)

onMounted(() => {
  map.value = new mapboxgl.Map({
    container: mapElement.value, // container ID
    center: [-74.5, 40], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9, // starting zoom
  })
})
</script>
