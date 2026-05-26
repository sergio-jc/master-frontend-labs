<script setup lang="ts">
import { computed, ref } from 'vue'
import ConfirmDialog from './confirm-dialog.vue'
import { UIInput } from '@/ui'
import { useMealsStore, WeekDays } from '@/stores/meals'

interface MealFormValues {
  name: string
  description: string
  weekDays: WeekDays[]
}

interface Props {
  isOpen?: boolean
  setIsOpen?: (value: boolean) => void
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
  title: 'Create meal',
})

const emit = defineEmits<{
  (e: 'submit', payload: MealFormValues): void
}>()

const mealsStore = useMealsStore()

const name = ref('')
const description = ref('')
const selectedDays = ref<WeekDays[]>([])

const dayOptions = [
  { value: WeekDays.MONDAY, label: 'Monday' },
  { value: WeekDays.TUESDAY, label: 'Tuesday' },
  { value: WeekDays.WEDNESDAY, label: 'Wednesday' },
  { value: WeekDays.THURSDAY, label: 'Thursday' },
  { value: WeekDays.FRIDAY, label: 'Friday' },
  { value: WeekDays.SATURDAY, label: 'Saturday' },
  { value: WeekDays.SUNDAY, label: 'Sunday' },
]

const isDaySelected = (day: WeekDays) => selectedDays.value.includes(day)

const toggleDay = (day: WeekDays) => {
  selectedDays.value = isDaySelected(day)
    ? selectedDays.value.filter((selectedDay) => selectedDay !== day)
    : [...selectedDays.value, day]
}

const canSubmit = computed(
  () =>
    name.value.trim().length > 0 &&
    description.value.trim().length > 0 &&
    selectedDays.value.length > 0,
)

const resetForm = () => {
  name.value = ''
  description.value = ''
  selectedDays.value = []
}

const handleSubmit = () => {
  if (!canSubmit.value) return

  mealsStore.addMeal({
    id: crypto.randomUUID(),
    name: name.value.trim(),
    description: description.value.trim(),
    weekDays: selectedDays.value,
  })

  emit('submit', {
    name: name.value.trim(),
    description: description.value.trim(),
    weekDays: selectedDays.value,
  })

  resetForm()
  props.setIsOpen?.(false)
}
</script>

<template>
  <ConfirmDialog
    :is-open="props.isOpen"
    :set-is-open="props.setIsOpen"
    :title="props.title"
    confirm-label="Save meal"
    cancel-label="Cancel"
    @confirm="handleSubmit"
  >
    <form class="mt-1 grid gap-4" @submit.prevent="handleSubmit">
      <UIInput v-model="name" id="meal-name" label="Meal name" placeholder="Chicken salad" />

      <label class="grid gap-2" for="meal-description">
        <span class="text-[0.85rem] text-zinc-400">Description</span>
        <textarea
          id="meal-description"
          v-model="description"
          rows="3"
          class="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3.5 py-2.5 text-[0.95rem] text-zinc-100 placeholder:text-zinc-500 transition-colors duration-200 focus:border-zinc-400 focus:outline-none"
          placeholder="Short meal description"
        />
      </label>

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
    </form>
  </ConfirmDialog>
</template>
