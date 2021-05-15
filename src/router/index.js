import { createRouter, createWebHistory } from 'vue-router'
import Gallery from '../views/Gallery.vue'

const routes = [
  {
    path: '/',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: () => import('../views/Details.vue')
  },
  {
    path: '/:notFound(.*)',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
