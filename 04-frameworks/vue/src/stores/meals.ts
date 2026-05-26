import { ref } from "vue";
import { defineStore } from "pinia";

export enum WeekDays {
  MONDAY = "monday",
  TUESDAY = "tuesday",
  WEDNESDAY = "wednesday",
  THURSDAY = "thursday",
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday",
}

export interface Meal {
  id: string;
  name: string;
  description: string;
  weekDays: WeekDays[];
}

export const useMealsStore = defineStore("meals", () => {
  const meals = ref<Meal[]>([]);

  function addMeal(meal: Meal) {
    meals.value.push(meal);
  }

  function removeMeal(id: string) {
    meals.value = meals.value.filter((meal) => meal.id !== id);
  }

  function updateMeal(id: string, meal: Meal) {
    meals.value = meals.value.map((prevMeal) => (prevMeal.id === id ? meal : prevMeal));
  }

  function getMealByDay(day: WeekDays) {
    return meals.value.filter((meal) => meal.weekDays.includes(day));
  }

  return { meals, addMeal, removeMeal, updateMeal, getMealByDay };
});
