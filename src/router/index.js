import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import SearchView from '@/views/SearchView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/s/:search', name: 'search', component: SearchView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
