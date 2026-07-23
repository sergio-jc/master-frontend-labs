<script setup lang="ts">
import HousesList from "~/components/HousesList.vue";
import Search from "~/components/Search.vue";

const route = useRoute();
const searchTerm = computed(() => (route.query.search as string) ?? "");
</script>

<template>
  <div className="flex-1 flex flex-col gap-4">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold">Houses List</h2>
      <Search :search-term="searchTerm" />
    </div>
    <HousesList :search-term="searchTerm" />
  </div>
</template>
