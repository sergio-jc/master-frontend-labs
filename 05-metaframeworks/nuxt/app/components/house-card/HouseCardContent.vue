<script setup lang="ts">
import { BathIcon, BedIcon, HouseIcon } from "lucide-vue-next";

interface Props {
  name: string;
  address: string;
  country: string;
  description: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
}

defineProps<Props>();
</script>

<template>
  <div class="flex flex-col flex-1 p-5 gap-3">
    <div>
      <h3
        class="text-base font-bold text-neutral-100 leading-snug line-clamp-1"
      >
        {{ name }}
      </h3>
      <p class="text-xs text-neutral-500 mt-0.5 tracking-wide">
        {{ address }} · {{ country }}
      </p>
    </div>

    <p class="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
      {{ description }}
    </p>

    <div class="flex items-center gap-4 text-sm text-neutral-300">
      <span class="flex items-center gap-1.5">
        <HouseIcon class="w-4 h-4 text-emerald-500 shrink-0" />
        {{ bedrooms }} hab.
      </span>
      <span class="flex items-center gap-1.5">
        <BedIcon class="w-4 h-4 text-emerald-500 shrink-0" />
        {{ beds }} camas
      </span>
      <span class="flex items-center gap-1.5">
        <BathIcon class="w-4 h-4 text-emerald-500 shrink-0" />
        {{ bathrooms }} baños
      </span>
    </div>
  </div>
</template>
