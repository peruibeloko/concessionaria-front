<template>
  <header>
    <menu></menu>
  </header>
  <aside></aside>
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<script setup lang="ts">
interface Props {}

defineProps<Props>()
</script>

<style scoped></style>
