<template>
  <GenericRow>
    <GenericContainer>
      <HomeSection title="Werk van studenten. Veel werk..." class="pb-12" />
    </GenericContainer>
  </GenericRow>

  <div class="mb-24">
    <div class="w-full">
      <div class="grid auto-cols-min grid-flow-col-dense gap-12">
        <StudentworkDetail
          v-for="digit in 3"
          :key="digit"
          class="grid-col-1 grid-row-1"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
