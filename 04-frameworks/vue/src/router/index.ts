import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routes.home.path,
      component: () => import('../views/all-meals.vue'),
    },
    {
      path: routes.weekPlanner.path,
      component: () => import('../views/week-days-planner.vue'),
    },
    {
      path: routes.favorites.path,
      component: () => import('../views/all-favorites.vue'),
    },
  ],
})

export default router
