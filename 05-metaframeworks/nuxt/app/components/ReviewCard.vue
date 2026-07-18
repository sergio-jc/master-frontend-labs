<script setup lang="ts">
import type { Review } from "~/types";

defineProps<{
  review: Review;
}>();

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
</script>

<template>
  <div
    class="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex flex-col gap-2"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div
          class="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-sm font-bold text-neutral-300"
        >
          {{ review.author[0].toUpperCase() }}
        </div>
        <span class="text-sm font-semibold text-neutral-200">
          {{ review.author }}
        </span>
      </div>
      <StarRating :rating="review.rating" />
    </div>
    <p class="text-sm text-neutral-400 leading-relaxed">
      {{ review.comment }}
    </p>
    <time class="text-xs text-neutral-600">
      {{ formatDate(review.date) }}
    </time>
  </div>
</template>
