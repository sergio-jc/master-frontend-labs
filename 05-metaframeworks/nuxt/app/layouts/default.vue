<script setup lang="ts">
import { Toaster } from "vue-sonner";
import "vue-sonner/style.css";
</script>

<template>
  <div class="min-h-full flex flex-col">
    <Toaster />
    <NavBar />
    <main
      class="flex-1 flex flex-col container mx-auto py-6 px-3 w-full"
    >
      <slot />
    </main>
  </div>
</template>
