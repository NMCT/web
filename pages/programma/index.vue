<template>
  <div>
    <GenericHeroText title="Een les-aanbod met focus. Vol innovatie.">
      <template #text>
        <p>
          We kiezen resoluut voor een aanbod met focus. We kiezen voor een
          beperkt aantal modules per semester met voldoende uren zodat je de
          ruimte krijgt om je voldoende te focussen en te verdiepen op de kern.
          Alle modules worden geregeld geupdate in samenspraak met het werkveld,
          dat heb je als je steeds de meest innovatieve wil zijn...
        </p>
      </template>
      <template #floating>
        <p class="mb-2 flex items-center gap-3 text-neutral-950">
          <LucideLandmark size="24" /> 5 pijlers
        </p>
        <p class="flex items-center gap-3 text-neutral-500">
          <LucideStar size="24" /> 180 ECTS
        </p>
      </template>
    </GenericHeroText>
    <div>
      <div class="mb-12 grid grid-cols-4 gap-4 px-24">
        <div class="text-lg font-bold">
          <input
            id="ai-engineer"
            v-model="selected"
            value="ai-engineer"
            type="radio"
            class="sr-only"
            @change="getModulesFiltered"
          >
          <label for="ai-engineer"> AI Engineer </label>
        </div>
        <div class="text-lg font-bold">
          <input
            id="iot-engineer"
            v-model="selected"
            value="iot-engineer"
            type="radio"
            class="sr-only"
            @change="getModulesFiltered"
          >
          <label for="iot-engineer"> IoT Engineer </label>
        </div>
        <div class="text-lg font-bold">
          <input
            id="next-web-developer"
            v-model="selected"
            value="next-web-developer"
            type="radio"
            class="sr-only"
            @change="getModulesFiltered"
          >
          <label for="next-web-developer"> Next Web Developer </label>
        </div>
        <div class="text-lg font-bold">
          <input
            id="xr-developer"
            v-model="selected"
            value="xr-developer"
            type="radio"
            class="sr-only"
            @change="getModulesFiltered"
          >
          <label for="xr-developer"> XR Developer </label>
        </div>
      </div>
      <div class="grid grid-flow-dense grid-cols-6 grid-rows-10 gap-4 px-24">
        <CurriculumDetail
          v-for="module in modules"
          :key="module._path"
          :module="module"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const modules = ref([])
const selected = ref<string>('next-web-developer')

const getModulesFiltered = async () => {
  modules.value = await queryContent('programma')
    .where({
      $and: [
        { weight: { $exists: true } },
        { tracks: { $exists: true } },
        { tracks: { $in: selected.value } },
      ],
    })
    .sort({ weight: 1, $numeric: true })
    .sort({ semester: 1, $numeric: true })
    .without(['aliases', 'tags', 'tools'])
    .find()
}

getModulesFiltered()
</script>
