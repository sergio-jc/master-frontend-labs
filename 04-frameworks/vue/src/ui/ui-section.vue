<script setup lang="ts">
interface Props {
  title: string
  description?: string
}

defineProps<Props>()
</script>

<template>
  <section class="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-4">
    <header class="flex justify-between items-center">
      <div>
        <h2 class="text-2xl font-bold text-zinc-100">{{ title }}</h2>
        <p v-if="description" class="text-sm text-zinc-400">{{ description }}</p>
      </div>
      <slot name="actions" />
    </header>

    <slot />
  </section>
</template>
