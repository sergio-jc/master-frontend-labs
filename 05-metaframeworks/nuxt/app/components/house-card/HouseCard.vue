<script setup lang="ts">
import type { House } from "~/types";

interface Props {
  house: House;
}

const props = defineProps<Props>();
const { IMAGE_URL } = getEnv();

const imageUrl = `${IMAGE_URL}${props.house.image}`;
const avgRating =
  props.house.reviews.length > 0
    ? Math.round(
        props.house.reviews.reduce((sum, r) => sum + r.rating, 0) /
          props.house.reviews.length,
      )
    : 0;
</script>

<template>
  <NuxtLink :to="`/${house.id}`">
    <article
      class="group bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-600 shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-black/70 transition-all duration-300 flex flex-col"
    >
      <HouseCardImage
        :image-url="imageUrl"
        :name="house.name"
        :city="house.city"
        :price="house.price"
        :avg-rating="avgRating"
        :review-count="house.reviews.length"
      />
      <HouseCardContent
        :name="house.name"
        :address="house.address"
        :country="house.country"
        :description="house.description"
        :bedrooms="house.bedrooms"
        :beds="house.beds"
        :bathrooms="house.bathrooms"
      />
    </article>
  </NuxtLink>
</template>
