<template>
  <form>
    <input type="text" placeholder="Login" />
    <input type="password" placeholder="Senha" />
    <button type="submit">Entrar</button>
  </form>
</template>

<script setup lang="ts">
interface Props {}

defineProps<Props>()
</script>

<style scoped></style>
