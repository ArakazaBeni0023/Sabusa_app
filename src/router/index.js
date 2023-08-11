import { createRouter, createWebHistory } from 'vue-router'
import ProduitsView from '../views/ProduitsView.vue'

const routes = [
  {
    path: '/',
    name: 'produits',
    component: ProduitsView
  },
  {
    path: '/ventes',
    name: 'ventes',
    component: () => import('../views/VentesView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
