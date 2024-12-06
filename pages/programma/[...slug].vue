<template>
  <main class="px-24">
    <GenericRow>
      <GenericContainer>
        <ContentDoc v-slot="{ doc }">
          <article>
            <h1 class="mb-6 text-7xl font-semibold">{{ doc.title }}</h1>

            <ContentRenderer
              class="max-w-prose text-lg leading-loose"
              :value="doc"
            />
          </article>
        </ContentDoc>
      </GenericContainer>
    </GenericRow>
  </main>
</template>

<script lang="ts" setup></script>
