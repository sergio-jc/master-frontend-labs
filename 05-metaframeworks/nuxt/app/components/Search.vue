<script setup lang="ts">
import { SearchIcon } from "lucide-vue-next";

interface Props {
  searchTerm: string;
}

const props = withDefaults(defineProps<Props>(), {
  searchTerm: "",
});

const search = ref(props.searchTerm ?? "");
const updateSearchParams = useUpdateSearchParams();
const debouncedSearch = useDebounce(search, 500);

watch(debouncedSearch, (value) => {
  updateSearchParams({ search: value });
});
</script>

<template>
  <div class="relative w-72 border border-neutral-800 rounded-lg">
    <SearchIcon
      class="w-4 h-4 text-neutral-500 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"
    />
    <input
      type="text"
      placeholder="Search"
      class="w-full pl-7 h-10 p-2 bg-transparent"
      id="search"
      v-model="search"
    />
  </div>
</template>
