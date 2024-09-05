<template>
  <main class="px-24">
    <ContentDoc v-slot="{ doc }">
      <article>
        <h1 class="mb-6 text-7xl font-semibold">{{ doc.title }}</h1>

        <ContentRenderer
          class="max-w-prose text-lg leading-loose"
          :value="doc"
        />
      </article>
    </ContentDoc>
  </main>
</template>

<script lang="ts" setup></script>
