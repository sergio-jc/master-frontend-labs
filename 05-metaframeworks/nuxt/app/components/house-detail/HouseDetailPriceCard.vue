<script setup lang="ts">
import { toast } from "vue-sonner";

interface Props {
  price: number;
  avgRating: string | null;
  reviewCount: number;
}

defineProps<Props>();

const handleReserve = () => {
  toast.success("Reserva realizada correctamente", {
    description: "Te esperamos en el alojamiento",
  });
};
</script>

<template>
  <div class="lg:w-72 shrink-0">
    <div
      class="sticky top-6 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col gap-5 shadow-xl shadow-black/50"
    >
      <div class="flex flex-col gap-1">
        <div class="flex items-end gap-1">
          <span class="text-3xl font-extrabold text-white">{{ price }}€</span>
          <span class="text-neutral-500 mb-0.5">/ noche</span>
        </div>
        <div v-if="avgRating" class="flex items-center gap-1.5">
          <StarRating :rating="Math.round(Number(avgRating))" />
          <span class="text-sm text-neutral-400">
            {{ avgRating }} · {{ reviewCount }} reseñas
          </span>
        </div>
      </div>

      <div class="border-t border-neutral-800" />

      <div class="flex flex-col gap-2 text-sm text-neutral-400">
        <div class="flex justify-between">
          <span>{{ price }}€ × 7 noches</span>
          <span class="text-neutral-200">{{ price * 7 }}€</span>
        </div>
        <div class="flex justify-between">
          <span>Tarifa de limpieza</span>
          <span class="text-neutral-200">50€</span>
        </div>
        <div
          class="border-t border-neutral-800 mt-1 pt-2 flex justify-between font-semibold text-neutral-100"
        >
          <span>Total</span>
          <span>{{ price * 7 + 50 }}€</span>
        </div>
      </div>

      <button
        @click="handleReserve"
        class="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 transition-all text-white font-bold py-3 rounded-xl shadow-lg shadow-black/40"
      >
        Reservar ahora
      </button>
    </div>
  </div>
</template>
