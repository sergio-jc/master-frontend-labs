import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../containers/week-days-planner.vue"),
    },
    {
      path: "/all-meals",
      component: () => import("../containers/all-meals.vue"),
    },
    {
      path: "/favorites",
      component: () => import("../containers/all-favorites.vue"),
    },
  ],
});

export default router;
