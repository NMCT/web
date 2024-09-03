<template>
  <nav class="font-medium">
    <ul class="flex gap-36">
      <li>
        <RouterLink class="hover:opacity-60" to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink class="hover:opacity-60" to="/programma">
          Programma
        </RouterLink>
      </li>
      <li>
        <RouterLink class="hover:opacity-60" to="/praktisch">
          Praktisch
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style>
li .router-link-active {
  opacity: 0.4;
}
</style>
