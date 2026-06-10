<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { UIButton } from '../ui'

interface Props {
  title?: string
  confirmLabel?: string
  cancelLabel?: string
  variant?: 'primary' | 'destroy'
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Confirm action',
  confirmLabel: 'Confirm',
  cancelLabel: 'Cancel',
  variant: 'primary',
})

const emit = defineEmits<{
  (e: 'confirm'): void
  (e: 'cancel'): void
}>()

const handleCancel = () => {
  emit('cancel')
}

const handleConfirm = () => {
  emit('confirm')
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    handleCancel()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      @click.self="handleCancel"
    >
      <form
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        @submit.prevent="handleConfirm"
        class="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
      >
        <h2 class="text-lg font-semibold text-zinc-100" id="dialog-title">
          {{ props.title }}
        </h2>

        <div class="mt-3 text-sm text-zinc-400">
          <slot>Do you want to continue?</slot>
        </div>

        <div class="mt-5 flex justify-end gap-3">
          <UIButton variant="ghost" @click="handleCancel">
            {{ props.cancelLabel }}
          </UIButton>
          <UIButton :variant="props.variant" type="submit">
            {{ props.confirmLabel }}
          </UIButton>
        </div>
      </form>
    </div>
  </Teleport>
</template>
