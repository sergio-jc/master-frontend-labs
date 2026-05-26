<template>
  <nav class="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 py-4 px-6">
    <h1 class="text-xl font-black tracking-[0.2em] text-zinc-100 uppercase sm:text-2xl">
      weekly meal
    </h1>

    <ul class="flex items-center gap-2 text-sm font-medium text-zinc-300 sm:gap-4 sm:text-base">
      <li>
        <RouterLink
          to="/"
          class="rounded-md px-3 py-2 transition-colors duration-200 hover:bg-zinc-800 hover:text-zinc-100"
          active-class="bg-zinc-800 text-zinc-100"
        >
          Week Planner
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/all-meals"
          class="rounded-md px-3 py-2 transition-colors duration-200 hover:bg-zinc-800 hover:text-zinc-100"
          active-class="bg-zinc-800 text-zinc-100"
        >
          All Meals
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/favorites"
          class="rounded-md px-3 py-2 transition-colors duration-200 hover:bg-zinc-800 hover:text-zinc-100"
          active-class="bg-zinc-800 text-zinc-100"
        >
          Favorites
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
