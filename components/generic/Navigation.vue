<template>
  <div class="flex items-center justify-between">
    <RouterLink class="font-medium hover:opacity-60" to="/">Home</RouterLink>
    <RouterLink class="font-medium hover:opacity-60" to="/programma">
      Programma
    </RouterLink>
    <RouterLink class="font-medium hover:opacity-60" to="/praktisch">
      Praktisch
    </RouterLink>
  </div>
</template>

<style>
li .router-link-active {
  opacity: 0.4;
}
</style>
