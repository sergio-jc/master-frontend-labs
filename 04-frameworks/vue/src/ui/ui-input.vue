<script setup lang="ts">
interface Props {
  modelValue?: string
  id?: string
  label?: string
  placeholder?: string
  type?: string
  disabled?: boolean
  required?: boolean
  hideLabel?: boolean
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  id: 'input',
  label: 'Label',
  placeholder: 'Escribe algo...',
  type: 'text',
  disabled: false,
  required: false,
  hideLabel: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <label class="grid gap-2" :for="id">
    <span v-show="!hideLabel" class="text-[0.85rem] text-zinc-400">{{ label }}</span>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      :required="required"
      class="min-h-10 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3.5 py-2.5 text-[0.95rem] text-zinc-100 placeholder:text-zinc-500 transition-colors duration-200 focus:border-zinc-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-45"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </label>
</template>
