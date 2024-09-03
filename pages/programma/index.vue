<template>
  <ContentList v-slot="{ list }" path="/programma">
    <RouterLink
      v-for="article in list"
      :key="article._path"
      :to="article._path"
    >
      <h2>{{ article.title }}</h2>
    </RouterLink>
  </ContentList>
</template>
