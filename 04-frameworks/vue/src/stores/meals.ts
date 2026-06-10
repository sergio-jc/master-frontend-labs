import { ref } from 'vue'
import { defineStore } from 'pinia'

export enum WeekDays {
  MONDAY = 'monday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday',
  THURSDAY = 'thursday',
  FRIDAY = 'friday',
  SATURDAY = 'saturday',
  SUNDAY = 'sunday',
}

export enum Type {
  BREAKFAST = 'breakfast',
  LUNCH = 'lunch',
  DINNER = 'dinner',
}

export interface Meal {
  id: string
  name: string
  description: string
  weekDays: WeekDays[]
  isFavorite: boolean
  type: Type
}

export const useMealsStore = defineStore('meals', () => {
  const meals = ref<Meal[]>([])

  function addMeal(meal: Meal) {
    meals.value.push(meal)
  }

  function removeMeal(id: string) {
    meals.value = meals.value.filter((meal) => meal.id !== id)
  }

  function updateMeal(id: string, meal: Meal) {
    meals.value = meals.value.map((prevMeal) => (prevMeal.id === id ? meal : prevMeal))
  }

  function getMealByDay(day: WeekDays) {
    return meals.value.filter((meal) => meal.weekDays.includes(day))
  }

  function toggleFavorite(id: string) {
    meals.value = meals.value.map((meal) =>
      meal.id === id ? { ...meal, isFavorite: !meal.isFavorite } : meal,
    )
  }

  function clearWeekMeals(day: WeekDays) {
    meals.value = meals.value.map((meal) => ({
      ...meal,
      weekDays: meal.weekDays.filter((d) => d !== day),
    }))
  }

  return { meals, addMeal, removeMeal, updateMeal, getMealByDay, toggleFavorite, clearWeekMeals }
}, {
  persist: true,
})
