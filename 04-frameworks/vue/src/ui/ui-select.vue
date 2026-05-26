<script setup lang="ts">
interface Option {
  value: string
  label: string
}

interface Props {
  modelValue?: string
  id?: string
  label?: string
  options?: Option[]
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  id: 'select',
  label: 'Selecciona una opción',
  options: () => [],
  disabled: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <label class="grid gap-2" :for="id">
    <span class="text-[0.85rem] text-zinc-400">{{ label }}</span>
    <select
      :id="id"
      :value="modelValue"
      :disabled="disabled"
      class="min-h-10 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3.5 py-2.5 text-[0.95rem] text-zinc-100 transition-colors duration-200 focus:border-zinc-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-45"
      @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option value="" disabled>Elige...</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </label>
</template>
