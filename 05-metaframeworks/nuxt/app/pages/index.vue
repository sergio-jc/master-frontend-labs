<script setup lang="ts">
import HousesList from "~/components/HousesList.vue";
import Search from "~/components/Search.vue";

const route = useRoute();
const searchTerm = computed(() => (route.query.search as string) ?? "");
</script>

<template>
  <div class="flex-1 flex flex-col gap-4">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold">Houses List</h2>
      <Search :search-term="searchTerm" />
    </div>
    <HousesList :search-term="searchTerm" />
  </div>
</template>
