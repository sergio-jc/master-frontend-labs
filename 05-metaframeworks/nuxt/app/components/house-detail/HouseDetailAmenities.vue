<script setup lang="ts">
import { CheckCircle } from "lucide-vue-next";

interface Props {
  amenities: string[];
}

defineProps<Props>();
</script>

<template>
  <div class="flex flex-col gap-3">
    <h2 class="text-lg font-bold text-neutral-100">Servicios incluidos</h2>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="amenity in amenities"
        :key="amenity"
        class="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm px-3 py-1.5 rounded-full"
      >
        <CheckCircle class="w-4 h-4 text-emerald-500" />
        {{ amenity }}
      </span>
    </div>
  </div>
</template>
