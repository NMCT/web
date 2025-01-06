<template>
  <main class="px-24">
    <GenericRow>
      <GenericContainer>
        <article v-if="doc">
          <h1 class="mb-6 text-6xl font-semibold">{{ doc.title }}</h1>

          <ContentRenderer class="max-w-prose leading-loose" :value="doc" />
        </article>
      </GenericContainer>
    </GenericRow>
  </main>
</template>

<script lang="ts" setup>
import type { ProgrammaCollectionItem } from '@nuxt/content'

const { path } = useRoute()

const { data: doc } = await useAsyncData<ProgrammaCollectionItem>(path, () =>
  queryCollection('programma').path(path).first(),
)
</script>
