import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/inedx.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Layout },
    { path: '/login', component: () => import('@/views/login/index.vue') }
  ]
})

export default router
