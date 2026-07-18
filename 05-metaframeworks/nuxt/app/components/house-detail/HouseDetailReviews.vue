<script setup lang="ts">
import type { Review } from "~/types";

interface Props {
  reviews: Review[];
}

defineProps<Props>();
</script>

<template>
  <div v-if="reviews.length > 0" class="flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <h2 class="text-lg font-bold text-neutral-100">Reseñas</h2>
      <span class="text-neutral-500">({{ reviews.length }})</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <ReviewCard
        v-for="review in reviews"
        :key="review.id"
        :review="review"
      />
    </div>
  </div>
</template>
