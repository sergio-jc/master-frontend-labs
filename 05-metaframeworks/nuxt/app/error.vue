<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();

const isNotFound = computed(() => props.error.status === 404);

const handleClear = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="flex h-screen flex-col items-center justify-center gap-3 text-center">
    <h1 class="text-4xl font-bold text-emerald-500">
      {{ isNotFound ? "404" : props.error.status }}
    </h1>
    <p class="text-neutral-400">
      {{ isNotFound ? "House not found" : props.error.statusText }}
    </p>
    <button
      type="button"
      class="mt-2 rounded-md bg-emerald-500 px-4 py-2 text-neutral-950 hover:bg-emerald-400"
      @click="handleClear"
    >
      Volver al inicio
    </button>
  </div>
</template>
