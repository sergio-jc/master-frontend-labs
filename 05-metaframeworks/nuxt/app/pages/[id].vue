<script setup lang="ts">
import type { House } from "~/types";

const { id } = useRoute().params;
const { API_URL } = getEnv();

const { data: house, error } = await useFetch<House>(
  `${API_URL}/api/houses/${id}`,
  {
    key: `house-${id}`,
  },
);

if (error.value || !house.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "House not found",
    fatal: true,
  });
}
</script>

<template>
  <HouseDetail :house="house!" />
</template>
