<script setup lang="ts">
import { Edit, Heart, Trash } from '@lucide/vue'
import { useMealsStore, type Meal } from '@/stores/meals'
import { UIButton } from '@/ui'
import ConfirmDialog from './confirm-dialog.vue'
import CreateEditMeal from './create-edit-meal.vue'
import { useDialog } from '@/composables/use-dialog'

interface Props {
  meal: Meal
  isEditable?: boolean
  variant?: 'default' | 'minimal'
}

const { meal, isEditable = false, variant = 'default' } = defineProps<Props>()
const emit = defineEmits<{
  (e: 'edit', mealId: string): void
  (e: 'delete', meal: Meal): void
}>()

const mealsStore = useMealsStore()

const { isOpen: isDeleteDialogOpen, open: openDeleteDialog, close: closeDeleteDialog } = useDialog()
const { isOpen: isEditDialogOpen, open: openEditDialog, close: closeEditDialog } = useDialog()

const handleToggleFavorite = () => {
  if (isEditable) {
    mealsStore.toggleFavorite(meal.id)
  }
}

const handleEdit = () => {
  if (isEditable) {
    emit('edit', meal.id)
  }
}

const handleDelete = () => {
  if (isEditable) {
    mealsStore.removeMeal(meal.id)
    emit('delete', meal)
  }
}
</script>

<template>
  <article
    class="relative w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-4 shadow-md flex flex-col gap-2"
  >
    <div class="flex items-start justify-between gap-2">
      <span
        class="text-xs font-medium capitalize text-zinc-400 bg-zinc-800/50 rounded-lg border border-zinc-700 flex items-center justify-center w-fit px-2 py-1"
        >{{ meal.type }}</span
      >
      <div class="flex items-center gap-1">
        <template v-if="isEditable && variant === 'default'">
          <UIButton
            variant="icon"
            :aria-label="meal.isFavorite ? 'Remove from favorites' : 'Add to favorites'"
            @click="handleToggleFavorite"
          >
            <Heart :size="20" :fill="meal.isFavorite ? 'currentColor' : 'none'" stroke-width="2" />
          </UIButton>
          <UIButton variant="icon" @click="openEditDialog" aria-label="Edit meal">
            <Edit :size="20" />
          </UIButton>
          <UIButton variant="icon" @click="openDeleteDialog" aria-label="Delete meal">
            <Trash :size="20" />
          </UIButton>
        </template>
        <template v-else>
          <Heart
            :size="20"
            :class="meal.isFavorite ? 'text-rose-400' : 'text-zinc-600'"
            :fill="meal.isFavorite ? 'currentColor' : 'none'"
            stroke-width="2"
          />
        </template>
      </div>
    </div>
    <h3 class="text-base font-semibold text-zinc-100 leading-snug">{{ meal.name }}</h3>
    <p class="text-sm text-zinc-400 leading-relaxed">{{ meal.description }}</p>
    <ul class="flex flex-wrap gap-1.5 list-none m-0 p-0" v-if="variant === 'default'">
      <li
        v-for="day in meal.weekDays"
        :key="day"
        class="text-xs font-medium capitalize text-zinc-400 bg-zinc-800/50 rounded-full border border-zinc-700 w-9 h-9 flex items-center justify-center"
      >
        {{ day.slice(0, 3) }}
      </li>
    </ul>
  </article>

  <ConfirmDialog
    v-if="isDeleteDialogOpen"
    title="Delete meal"
    confirm-label="Delete"
    cancel-label="Cancel"
    variant="destroy"
    @confirm="handleDelete"
    @cancel="closeDeleteDialog"
  >
    <p>Are you sure you want to delete this meal?</p>
  </ConfirmDialog>

  <CreateEditMeal
    :is-open="isEditDialogOpen"
    :meal="meal"
    @cancel="closeEditDialog"
    @submit="handleEdit"
  />
</template>
