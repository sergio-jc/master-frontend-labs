<script setup lang="ts">
import { Bath, Bed, House as HouseIcon } from "lucide-vue-next";
import type { House } from "~/types";

interface Props {
  house: House;
}

const props = defineProps<Props>();
const { IMAGE_URL } = getEnv();

const imageUrl = `${IMAGE_URL}${props.house.image}`;
const avgRating =
  props.house.reviews.length > 0
    ? (
        props.house.reviews.reduce((sum, r) => sum + r.rating, 0) /
        props.house.reviews.length
      ).toFixed(1)
    : null;

const houseCharacteristics = [
  {
    icon: HouseIcon,
    label: "Habitaciones",
    value: props.house.bedrooms,
  },
  {
    icon: Bed,
    label: "Camas",
    value: props.house.beds,
  },
  {
    icon: Bath,
    label: "Baños",
    value: props.house.bathrooms,
  },
];
</script>

<template>
  <div class="flex flex-col gap-8 pb-16">
    <HouseDetailHero
      :image-url="imageUrl"
      :name="house.name"
      :country="house.country"
      :city="house.city"
      :address="house.address"
      :avg-rating="avgRating"
    />

    <div class="flex flex-col lg:flex-row gap-8">
      <div class="flex flex-col gap-6 flex-1 min-w-0">
        <HouseDetailOverview
          :description="house.description"
          :house-characteristics="houseCharacteristics"
        />
        <HouseDetailAmenities :amenities="house.amenities" />
        <HouseDetailReviews :reviews="house.reviews" />
      </div>
      <HouseDetailPriceCard
        :price="house.price"
        :avg-rating="avgRating"
        :review-count="house.reviews.length"
      />
    </div>
  </div>
</template>
