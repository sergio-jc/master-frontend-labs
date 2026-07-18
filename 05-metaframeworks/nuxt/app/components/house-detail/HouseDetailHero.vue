<script setup lang="ts">
interface Props {
  imageUrl: string;
  name: string;
  country: string;
  city: string;
  address: string;
  avgRating: string | null;
}

defineProps<Props>();
</script>

<template>
  <div class="relative h-72 md:h-96 w-full rounded-2xl overflow-hidden">
    <NuxtImg
      :src="imageUrl"
      :alt="name"
      format="webp"
      class="absolute inset-0 w-full h-full object-cover brightness-75"
    />
    <div
      class="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"
    />

    <div
      v-if="avgRating"
      class="absolute top-4 right-4 flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 rounded-full px-3 py-1"
    >
      <StarRating :rating="Math.round(Number(avgRating))" />
      <span class="text-sm font-semibold text-neutral-200">
        {{ avgRating }}
      </span>
    </div>

    <div class="absolute bottom-5 left-5 right-5">
      <h1
        class="text-2xl md:text-4xl font-extrabold text-white leading-tight drop-shadow-lg"
      >
        {{ name }}
      </h1>
      <p class="text-sm text-neutral-300 mt-1">
        {{ country }} · {{ city }} · {{ address }}
      </p>
    </div>
  </div>
</template>
