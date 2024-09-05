<template>
  <div>
    <GenericHeroText title="Een les-aanbod met focus. Vol innovatie.">
      <template #text>
        <p>
          We kiezen resoluut voor een aanbod met focus. We kiezen voor een
          beperkt aantal modules per semester zodat je de ruimte krijgt om je
          voldoende te focussen en te verdiepen op de kern. Alle modules worden
          geregeld geupdate in samenspraak met het werkveld, dat heb je als je
          steeds de meest innovatieve wil zijn...
        </p>
      </template>
      <template #floating>
        <p class="text-neutral-950">5 pijlers</p>
        <p class="text-neutral-500">180 ECTS</p>
      </template>
    </GenericHeroText>
    <div>
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

const getModulesFiltered = async () => {
  modules.value = await queryContent('programma')
    .where({ weight: { $exists: true } })
    .sort({ weight: 1, $numeric: true })
    .sort({ semester: 1, $numeric: true })
    .without(['aliases', 'tags', 'tools'])
    .find()
}

getModulesFiltered()
</script>
