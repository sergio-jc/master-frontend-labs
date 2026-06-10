<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import ConfirmDialog from './confirm-dialog.vue'
import { UIInput, UISelect } from '@/ui'
import { Type, useMealsStore, WeekDays, type Meal } from '@/stores/meals'

type MealFormValues = Omit<Meal, 'id'>

interface Props {
  isOpen?: boolean
  meal?: Meal
  defaultWeekDays?: WeekDays[]
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
  meal: undefined,
})

const emit = defineEmits<{
  (e: 'submit', payload: MealFormValues): void
  (e: 'cancel'): void
}>()

const mealsStore = useMealsStore()

const mealForm = ref<MealFormValues>({
  name: '',
  description: '',
  weekDays: [],
  isFavorite: false,
  type: Type.BREAKFAST,
})

watch(
  () => props.defaultWeekDays,
  (newWeekDays) => {
    if (newWeekDays) {
      mealForm.value.weekDays = [...newWeekDays]
    }
  },
  { immediate: true },
)

watch(
  () => props.meal,
  (newMeal) => {
    if (newMeal) {
      mealForm.value = { ...newMeal, weekDays: [...newMeal.weekDays] }
    }
  },
  { immediate: true },
)

const dayOptions = [
  { value: WeekDays.MONDAY, label: 'Monday' },
  { value: WeekDays.TUESDAY, label: 'Tuesday' },
  { value: WeekDays.WEDNESDAY, label: 'Wednesday' },
  { value: WeekDays.THURSDAY, label: 'Thursday' },
  { value: WeekDays.FRIDAY, label: 'Friday' },
  { value: WeekDays.SATURDAY, label: 'Saturday' },
  { value: WeekDays.SUNDAY, label: 'Sunday' },
]

const isDaySelected = (day: WeekDays) => mealForm.value.weekDays.includes(day)

const toggleDay = (day: WeekDays) => {
  mealForm.value.weekDays = isDaySelected(day)
    ? mealForm.value.weekDays.filter((selectedDay) => selectedDay !== day)
    : [...mealForm.value.weekDays, day]
}

const canSubmit = computed(
  () =>
    mealForm.value.name.trim().length > 0 &&
    mealForm.value.description.trim().length > 0 &&
    mealForm.value.weekDays.length > 0,
)

const resetForm = () => {
  if (props.meal) {
    mealForm.value = { ...props.meal, weekDays: [...props.meal.weekDays] }
  } else {
    mealForm.value.name = ''
    mealForm.value.description = ''
    mealForm.value.weekDays = []
    mealForm.value.type = Type.BREAKFAST
  }
}

const handleSubmit = () => {
  if (!canSubmit.value) return

  const payload: MealFormValues = {
    name: mealForm.value.name.trim(),
    description: mealForm.value.description.trim(),
    weekDays: mealForm.value.weekDays,
    isFavorite: props.meal?.isFavorite || false,
    type: mealForm.value.type,
  }

  if (props.meal) {
    mealsStore.updateMeal(props.meal.id, {
      id: props.meal.id,
      ...payload,
    })
  } else {
    mealsStore.addMeal({
      id: crypto.randomUUID(),
      ...payload,
    })
  }

  emit('submit', payload)

  resetForm()
  emit('cancel')
}

const handleCancel = () => {
  resetForm()
  emit('cancel')
}
</script>

<template>
  <ConfirmDialog
    v-if="props.isOpen"
    title="Add meal"
    confirm-label="Save meal"
    cancel-label="Cancel"
    @confirm="handleSubmit"
    @cancel="handleCancel"
  >
    <div class="mt-1 grid gap-4" @submit.prevent="handleSubmit">
      <UIInput
        v-model="mealForm.name"
        id="meal-name"
        label="Meal name"
        placeholder="Chicken salad"
        required
      />

      <label class="grid gap-2" for="meal-description">
        <span class="text-[0.85rem] text-zinc-400">Description</span>
        <textarea
          id="meal-description"
          v-model="mealForm.description"
          rows="3"
          required
          class="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3.5 py-2.5 text-[0.95rem] text-zinc-100 placeholder:text-zinc-500 transition-colors duration-200 focus:border-zinc-400 focus:outline-none"
          placeholder="Short meal description"
        />
      </label>

      <UISelect
        v-model="mealForm.type"
        id="meal-type"
        label="Type"
        required
        :options="[
          { value: Type.BREAKFAST, label: 'Breakfast' },
          { value: Type.LUNCH, label: 'Lunch' },
          { value: Type.DINNER, label: 'Dinner' },
        ]"
      />

      <div class="grid gap-2">
        <span class="text-[0.85rem] text-zinc-400">Days</span>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="dayOption in dayOptions"
            :key="dayOption.value"
            type="button"
            class="rounded-lg border px-3 py-1.5 text-sm transition-colors duration-200"
            :class="
              isDaySelected(dayOption.value)
                ? 'border-zinc-200 bg-zinc-100 text-zinc-900'
                : 'border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
            "
            @click="toggleDay(dayOption.value)"
          >
            {{ dayOption.label }}
          </button>
        </div>
      </div>

      <p v-if="!canSubmit" class="text-xs text-zinc-500">
        Complete name, description and at least one day.
      </p>
    </div>
  </ConfirmDialog>
</template>
