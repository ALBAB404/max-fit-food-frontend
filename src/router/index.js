import { createRouter, createWebHistory } from 'vue-router'
import { HomePage } from "@/views/pages";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage,
      meta: { title: "Home-Page" }
    },
  ]
})

export default router
