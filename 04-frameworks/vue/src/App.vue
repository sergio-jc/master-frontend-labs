<script setup lang="ts">
import NavBar from './components/nav-bar.vue'
</script>

<template>
  <main class="flex flex-col min-h-screen">
    <NavBar />
    <RouterView />
  </main>
</template>
