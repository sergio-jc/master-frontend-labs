<script setup lang="ts">
interface Props {
  label?: string
  variant?: 'primary' | 'ghost' | 'destroy'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  label: 'Button',
  variant: 'primary',
  type: 'button',
  disabled: false,
})
</script>

<template>
  <button :type="type" :disabled="disabled"
    class="inline-flex min-h-10 cursor-pointer items-center justify-center gap-2 rounded-xl border border-transparent px-4 py-3 text-[0.95rem] leading-none font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-45"
    :class="
      variant === 'primary'
        ? 'bg-zinc-100 text-gray-900 hover:bg-white'
        : variant === 'destroy'
          ? 'bg-red-600 text-red-50 hover:bg-red-500'
          : 'border-zinc-800 bg-zinc-900 text-zinc-200 hover:bg-zinc-800'
    ">
    <slot>{{ label }}</slot>
  </button>
</template>
