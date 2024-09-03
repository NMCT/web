<template>
  <div class="grid grid-flow-dense grid-cols-6 grid-rows-10 gap-4">
    <CurriculumDetail
      v-for="module in modules"
      :key="module._path"
      :module="module"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const modules = ref([])

const getModulesFiltered = async () => {
  modules.value = await queryContent('programma')
    .where({
      weight: { $exists: true },
    })
    .sort({ weight: 1, $numeric: true })
    .sort({ semester: 1, $numeric: true })
    .without(['aliases', 'tags', 'tools'])
    .find()

  console.log(modules.value)
}

getModulesFiltered()
</script>
