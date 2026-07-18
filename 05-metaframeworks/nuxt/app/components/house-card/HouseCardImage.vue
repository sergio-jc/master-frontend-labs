<script setup lang="ts">
interface Props {
  imageUrl: string;
  name: string;
  city: string;
  price: number;
  avgRating: number;
  reviewCount: number;
}

defineProps<Props>();
</script>

<template>
  <div class="relative h-52 overflow-hidden">
    <NuxtImg
      :src="imageUrl"
      :alt="name"
      format="webp"
      class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-75 grayscale-[20%]"
    />
    <div
      class="absolute inset-0 bg-linear-to-t from-neutral-950/90 via-black/30 to-transparent"
    />

    <div
      class="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm rounded-full px-2.5 py-1 border border-neutral-700"
    >
      <StarRating :rating="avgRating" />
      <span class="text-xs font-semibold text-neutral-100">
        {{ avgRating }}.0
      </span>
      <span class="text-xs text-neutral-500">({{ reviewCount }})</span>
    </div>

    <div
      class="absolute top-3 right-3 bg-emerald-600 rounded-full px-3 py-1 text-xs font-bold text-white tracking-wide"
    >
      {{ city }}
    </div>

    <div class="absolute bottom-3 right-3 text-2xl">
      <span class="font-semibold text-neutral-100">{{ price }}€</span>
      <span class="text-neutral-500 text-sm"> x noche</span>
    </div>
  </div>
</template>
