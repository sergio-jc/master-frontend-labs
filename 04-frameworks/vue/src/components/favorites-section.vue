<script setup lang="ts">
import { useMealsStore } from '@/stores/meals'
import { UIButton } from '@/ui'
import UiSection from '@/ui/ui-section.vue'
import { computed } from 'vue'
import MealCard from './meal-card.vue'
import { useRouter } from 'vue-router'
import { routes } from '@/router/routes.ts'

const router = useRouter()
const mealsStore = useMealsStore()

const hasFavorites = computed(() => mealsStore.meals.some((meal) => meal.isFavorite))
const favoriteMeals = computed(() => mealsStore.meals.filter((meal) => meal.isFavorite))

const handleRedirectToHome = () => {
  router.push(routes.home.path)
}
</script>

<template>
  <UiSection title="Favorites" description="List of all your favorite meals.">
    <div v-if="!hasFavorites" class="flex flex-col gap-2 items-center justify-center p-6">
      <p class="text-zinc-300">No favorites yet. Add a meal to your favorites list.</p>
      <UIButton variant="ghost" @click="handleRedirectToHome">Add favorite meal</UIButton>
    </div>
    <template v-else>
      <MealCard v-for="meal in favoriteMeals" :key="meal.id" :meal="meal" />
    </template>
  </UiSection>
</template>
