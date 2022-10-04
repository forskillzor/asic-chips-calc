import { createRouter, createWebHistory } from 'vue-router'
import T17 from '../components/t17'
import S17 from '../components/s17'

const routes = [
  {
    path: '/t17',
    name: 'T17',
    component: T17
  },
  {
    path: '/s17',
    name: 'S17',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: S17
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
