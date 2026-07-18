<script setup lang="ts">
import type { Component } from "vue";

interface Characteristic {
  icon: Component;
  label: string;
  value: number;
}

interface Props {
  description: string;
  houseCharacteristics: Characteristic[];
}

defineProps<Props>();
</script>

<template>
  <div class="flex flex-col gap-6">
    <p class="text-neutral-400 leading-relaxed">{{ description }}</p>
    <ol class="flex flex-col gap-2">
      <li
        v-for="characteristic in houseCharacteristics"
        :key="characteristic.label"
        class="flex items-center gap-2"
      >
        <component
          :is="characteristic.icon"
          class="w-4 h-4 text-emerald-500"
        />
        <span>{{ characteristic.value }}</span>
        <span>{{ characteristic.label }}</span>
      </li>
    </ol>
  </div>
</template>
