<script setup lang="ts">
import CreateEditMeal from '@/components/create-edit-meal.vue'
import { useMealsStore } from '@/stores/meals'
import { UIButton, UIInput } from '@/ui'
import UiSection from '@/ui/ui-section.vue'
import { computed, ref } from 'vue'
import MealCard from './meal-card.vue'

const isCreateMealOpen = ref(false)
const search = ref('')

const filteredMeals = computed(() => {
  return mealsStore.meals.filter((meal) => meal.name.toLowerCase().includes(search.value.toLowerCase()))
})

const mealsStore = useMealsStore()

const thereAreMeals = computed(() => mealsStore.meals.length > 0)
const thereAreFilteredMeals = computed(() => filteredMeals.value.length > 0)

const handleAddFavorite = () => {
  isCreateMealOpen.value = true
}

const handleCloseCreateMealDialog = () => {
  isCreateMealOpen.value = false
}
</script>

<template>
  <UiSection title="All meals" description="List of all meals you have planned.">
    <template #actions>
      <div class="flex items-center gap-2 flex-1 justify-end">
        <UIInput v-model="search" placeholder="Search meals" hide-label class="flex-1 max-w-md" />
        <UIButton variant="primary" @click="handleAddFavorite">Add meal</UIButton>
      </div>
    </template>
    <div v-if="!thereAreFilteredMeals && search.length > 0" class="flex flex-col gap-2 items-center justify-center p-6">
      <p class="text-zinc-300">No meals found. Try again with a different search.</p>
    </div>

    <div v-if="!thereAreMeals" class="flex flex-col gap-2 items-center justify-center p-6">
      <p class="text-zinc-300">No meals yet. Add a meal to your list.</p>
      <UIButton variant="ghost" @click="handleAddFavorite">Add meal</UIButton>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MealCard v-for="meal in filteredMeals" :is-editable="true" :key="meal.id" :meal="meal" />
    </div>
  </UiSection>

  <CreateEditMeal :is-open="isCreateMealOpen" title="Add meal" @cancel="handleCloseCreateMealDialog" />
</template>
