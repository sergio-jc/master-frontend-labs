<script setup lang="ts">
import { getHouses } from "~/services";
import type { House } from "~/types";

interface Props {
  searchTerm: string;
}

const props = defineProps<Props>();
const { API_URL } = getEnv();

const { data: houses } = await useFetch<House[]>(`${API_URL}/api/houses`, {
  key: "houses-list",
});

const filteredHouses = computed(() => {
  const list = houses.value ?? [];
  if (!props.searchTerm) return list;

  const normalizedQuery = props.searchTerm.toLowerCase().trim();
  return list.filter((house) => {
    const normalizedName = house.name.toLowerCase().trim();
    return normalizedName.includes(normalizedQuery);
  });
});
</script>

<template>
  <div
    v-if="filteredHouses.length === 0"
    class="text-neutral-500 text-center py-10 flex-1"
  >
    No houses found
  </div>
  <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <HouseCard v-for="house in filteredHouses" :key="house.id" :house="house" />
  </div>
</template>
