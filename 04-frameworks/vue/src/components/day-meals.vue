<script setup lang="ts">
import { UIButton } from '@/ui'
import { useMealsStore, WeekDays } from '@/stores/meals'
import { computed, ref } from 'vue'
import CreateEditMeal from './create-edit-meal.vue'

interface Props {
    day: WeekDays
    dayLabel: string
}

const { day, dayLabel } = defineProps<Props>()
const mealsStore = useMealsStore()

const meals = computed(() => mealsStore.getMealByDay(day))

const isCreateMealOpen = ref(false)

const setIsCreateMealOpen = (value: boolean) => {
    isCreateMealOpen.value = value
}

</script>
<template>
    <div
        class="flex min-h-28 min-w-[320px] flex-1 flex-col items-start justify-start gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-zinc-100">
        <div class="flex justify-between items-center w-full p-3">
            <header>
                <h2 class="text-zinc-100 text-xl p-3 font-semibold">{{ dayLabel }}</h2>
            </header>
            <UIButton variant="ghost" @click="setIsCreateMealOpen(true)">Add Meal</UIButton>
        </div>
        <div
            v-for="meal in meals"
            :key="meal.id"
            class="w-full rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-4 shadow-sm"
        >
            <h3 class="text-base font-semibold tracking-wide text-zinc-100">
                {{ meal.name }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-zinc-400">
                {{ meal.description }}
            </p>
        </div>
    </div>

    <CreateEditMeal :is-open="isCreateMealOpen" :set-is-open="setIsCreateMealOpen" title="Add meal" />
</template>