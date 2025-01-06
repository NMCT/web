<template>
  <GenericRow class="py-24">
    <GenericContainer>
      <GenericHeroText title="Een les-aanbod met focus. Vol&nbsp;innovatie.">
        <template #text>
          <p class="max-w-prose text-center">
            We kiezen resoluut voor een aanbod met focus. We kiezen voor een
            beperkt aantal modules per semester met voldoende uren zodat je de
            ruimte krijgt om je voldoende te focussen en te verdiepen op de
            kern. Alle modules worden geregeld geupdate in samenspraak met het
            werkveld, dat heb je als je steeds de meest innovatieve wil zijn...
          </p>
        </template>

        <div
          class="col-span-12 flex items-center justify-center gap-16 text-sm text-neutral-400"
        >
          <p class="flex items-center gap-3 whitespace-nowrap">
            <LucideStar :size="24" /> 180 ECTS
          </p>
          <p class="flex items-center gap-3">
            <LucideTally5 :size="24" /> 5 Pijlers
          </p>
        </div>
      </GenericHeroText>

      <div>
        <div class="mb-12 grid grid-cols-6 gap-4">
          <div class="col-start-3 text-lg font-bold">
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

        <div class="mb-3 grid grid-cols-6 gap-4">
          <h4
            v-for="year in 3"
            :key="year"
            class="col-span-2 text-center text-sm text-neutral-400"
          >
            Year {{ year }}
          </h4>
        </div>
        <div class="mb-3 grid grid-cols-6 gap-4">
          <h4
            v-for="semester in 6"
            :key="semester"
            class="text-center text-sm text-neutral-700"
          >
            Semester {{ semester }}
          </h4>
        </div>

        <div class="grid grid-flow-dense grid-cols-6 grid-rows-10 gap-4">
          <CurriculumDetail
            v-for="module in modules"
            :key="module.stem"
            :module="module"
          />
        </div>
      </div>
    </GenericContainer>
  </GenericRow>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// import type {
//   ContentQueryResponse,
//   ProgrammaCollectionItem,
// } from '@nuxt/content'

const modules = ref()
const selected = ref<string>('next-web-developer')

// const { data } = await useAsyncData(() =>
//   queryCollection('programma').order('weight', 'DESC').all(),
// )

// console.log(data)

const getModulesFiltered = async () => {
  modules.value = await queryCollection('programma')
    // .where('tracks', 'IN', [selected.value])
    .where('weight', 'IS NOT NULL')
    // .andWhere((query) =>
    //   query
    //     .where('tracks', 'IS NOT NULL')
    //     .andWhere((query) => query.where('tracks', 'IN', [selected.value])),
    // )
    // .andWhere((query) => query.where('tracks', 'IN', [selected.value]))
    .order('weight', 'ASC')
    .order('semester', 'ASC')
    .select(
      'title',
      'semester',
      'studycredits',
      'weight',
      'pillar',
      'tracks',
      'stem',
    )
    .all()

  console.log(modules.value)
}

getModulesFiltered()
</script>
