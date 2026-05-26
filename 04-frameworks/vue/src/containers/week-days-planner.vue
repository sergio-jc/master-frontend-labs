<script setup lang="ts">
import DayMeals from '@/components/day-meals.vue';
import { WeekDays } from '@/stores/meals'

const weekDays = [
  { value: WeekDays.MONDAY, label: 'Monday' },
  { value: WeekDays.TUESDAY, label: 'Tuesday' },
  { value: WeekDays.WEDNESDAY, label: 'Wednesday' },
  { value: WeekDays.THURSDAY, label: 'Thursday' },
  { value: WeekDays.FRIDAY, label: 'Friday' },
  { value: WeekDays.SATURDAY, label: 'Saturday' },
  { value: WeekDays.SUNDAY, label: 'Sunday' },
]
</script>

<template>
  <div class="w-full flex flex-1 gap-3 overflow-x-auto p-2">
    <DayMeals
      v-for="day in weekDays"
      :key="day.value"
      :day="day.value"
      :day-label="day.label"
    />
  </div>
</template>
