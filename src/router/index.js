import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Business from '../views/Business.vue'
import Culture from '../views/Culture.vue'
import Entertainment from '../views/Entertainment.vue'
import Health from '../views/Health.vue'
import Politics from '../views/Politics.vue'
import Science from '../views/Science.vue'
import Sports from '../views/Sports.vue'
import Technology from '../views/Technology.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/business', name: 'Business', component: Business },
  { path: '/culture', name: 'Culture', component: Culture },
  { path: '/entertainment', name: 'Entertainment', component: Entertainment },
  { path: '/health', name: 'Health', component: Health },
  { path: '/politics', name: 'Politics', component: Politics },
  { path: '/science', name: 'Science', component: Science },
  { path: '/sports', name: 'Sports', component: Sports },
  { path: '/technology', name: 'Technology', component: Technology },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
