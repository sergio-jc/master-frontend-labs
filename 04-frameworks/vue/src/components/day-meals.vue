<script setup lang="ts">
import { UIButton } from '@/ui'
import { useMealsStore, WeekDays } from '@/stores/meals'
import { computed } from 'vue'
import CreateEditMeal from './create-edit-meal.vue'
import { Plus, Trash } from '@lucide/vue'
import MealCard from './meal-card.vue'
import ConfirmDialog from './confirm-dialog.vue'
import { useDialog } from '@/composables/use-dialog'

interface Props {
  day: WeekDays
  dayLabel: string
}

const { day, dayLabel } = defineProps<Props>()
const mealsStore = useMealsStore()

const meals = computed(() => mealsStore.getMealByDay(day))
const { isOpen: isDeleteDialogOpen, open: openDeleteDialog, close: closeDeleteDialog } = useDialog()
const {
  isOpen: isCreateMealOpen,
  open: openCreateMealDialog,
  close: closeCreateMealDialog,
} = useDialog()

const handleClearWeekMeals = () => {
  mealsStore.clearWeekMeals(day)
  closeDeleteDialog()
}
</script>
<template>
  <div
    class="flex min-h-28 min-w-[300px] flex-1 flex-col items-start justify-start gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-1 text-zinc-100"
  >
    <div class="flex justify-between items-center w-full p-1">
      <header>
        <h2 class="text-zinc-100 text-xl p-3 font-semibold">{{ dayLabel }}</h2>
      </header>
      <div class="flex items-center gap-2">
        <UIButton variant="icon" @click="openDeleteDialog" aria-label="Delete meals">
          <Trash :size="20" />
        </UIButton>
        <UIButton variant="icon" @click="openCreateMealDialog" aria-label="Add meal">
          <Plus :size="20" />
        </UIButton>
      </div>
    </div>
    <div v-if="meals.length === 0" class="flex w-full flex-1 items-center justify-center">
      <p class="text-zinc-400">No meals for this day</p>
    </div>
    <template v-else>
      <MealCard v-for="meal in meals" :key="meal.id" :meal="meal" variant="minimal" />
    </template>
  </div>

  <ConfirmDialog
    v-if="isDeleteDialogOpen"
    title="Delete meals"
    confirm-label="Delete"
    cancel-label="Cancel"
    variant="destroy"
    @confirm="handleClearWeekMeals"
    @cancel="closeDeleteDialog"
  >
    <p>Are you sure you want to delete all meals for this day?</p>
  </ConfirmDialog>

  <CreateEditMeal
    :is-open="isCreateMealOpen"
    @cancel="closeCreateMealDialog"
    :default-week-days="[day]"
  />
</template>
