<template>
  <div ref="mapElement" />
</template>

<script lang="ts" setup>
import mapboxgl, { Map, Marker } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const runtimeConfig = useRuntimeConfig()

// Show mapbox map
mapboxgl.accessToken = runtimeConfig.public.mapboxToken ?? ''

const mapElement = ref<HTMLElement | null>(null)
const map = ref<Map>()

onMounted(() => {
  if (!mapElement.value) return

  map.value = new Map({
    container: mapElement.value, // container ID
    center: [2.089552, 50.523337], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 2, // starting zoom
    pitch: 60,
    style: 'mapbox://styles/mloth/cm48agecy016x01sd9iy2gax9', // style URL
    interactive: false,
  })

  map.value.on('load', () => {
    if (!map.value) return

    map.value.easeTo({
      pitch: 0,
      padding: {
        top: 0,
        bottom: 0,
        left: 1000,
        right: 0,
      },
      bearing: 0,
      duration: 3000,
    })
  })

  // Add some random markers
  for (let i = 0; i < 10; i++) {
    const marker = new Marker()
      .setLngLat([Math.random() * 360 - 180, Math.random() * 180 - 90])
      .addTo(map.value)
    markers.value.push(marker)
  }
})
</script>
