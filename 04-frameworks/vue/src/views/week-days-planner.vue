<script setup lang="ts">
import DayMeals from '@/components/day-meals.vue'
import { DAY_OPTIONS } from '@/constants/week-days'
</script>

<template>
  <div class="w-full flex flex-1 gap-3 overflow-x-auto p-2">
    <DayMeals v-for="day in DAY_OPTIONS" :key="day.value" :day="day.value" :day-label="day.label" />
  </div>
</template>
