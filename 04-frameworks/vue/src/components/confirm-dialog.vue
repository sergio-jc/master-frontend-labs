<script setup lang="ts">
import { UIButton } from '../ui'

interface Props {
  isOpen?: boolean
  title?: string
  confirmLabel?: string
  cancelLabel?: string
  setIsOpen?: (value: boolean) => void
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
  title: 'Are you sure?',
  confirmLabel: 'Confirm',
  cancelLabel: 'Cancel',
})

const emit = defineEmits<{
  (e: 'confirm'): void
  (e: 'cancel'): void
}>()

const handleCancel = () => {
  props.setIsOpen?.(false)
  emit('cancel')
}
</script>

<template>
  <div
    v-if="props.isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
    @click.self="handleCancel"
  >
    <article class="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
      <h2 class="text-lg font-semibold text-zinc-100">
        {{ props.title }}
      </h2>

      <div class="mt-3 text-sm text-zinc-400">
        <slot>Do you want to continue?</slot>
      </div>

      <div class="mt-5 flex justify-end gap-3">
        <UIButton variant="ghost" @click="handleCancel">
          {{ props.cancelLabel }}
        </UIButton>
        <UIButton variant="destroy" @click="emit('confirm')">
          {{ props.confirmLabel }}
        </UIButton>
      </div>
    </article>
  </div>
</template>
