<template>
  <div>
    <div class="px-24 pb-12">
      <h1 class="mb-6 text-7xl font-semibold">Curriculum</h1>
      <p class="max-w-prose text-lg leading-loose">Shit you'll learn.</p>
    </div>

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
