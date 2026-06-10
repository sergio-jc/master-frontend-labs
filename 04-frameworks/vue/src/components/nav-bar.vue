<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { routes } from '@/router/routes.ts'
</script>

<template>
  <nav class="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 py-4 px-6">
    <h1 class="text-xl font-black tracking-[0.2em] text-zinc-100 uppercase sm:text-2xl">
      weekly meal
    </h1>
    <ul class="flex items-center gap-2 text-sm font-medium text-zinc-300 sm:gap-4 sm:text-base">
      <li v-for="route in Object.values(routes)" :key="route.path">
        <RouterLink
          :to="route.path"
          class="rounded-md px-3 py-2 transition-colors duration-200 hover:bg-zinc-800 hover:text-zinc-100"
          active-class="bg-zinc-800 text-zinc-100"
        >
          {{ route.label }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
