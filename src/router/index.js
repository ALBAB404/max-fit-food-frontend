import { createRouter, createWebHistory } from 'vue-router'
import { HomePage, ShopPage } from "@/views/pages";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage,
      meta: { title: "Home-Page" }
    },
    {
      path: '/shop-page',
      name: 'shopPage',
      component: ShopPage,
      meta: { title: "Shop-Page" }
    },
  ]
})

export default router
