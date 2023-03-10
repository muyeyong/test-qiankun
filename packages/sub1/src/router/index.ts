import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: 'Home Page',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/pages/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'About Page',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/pages/about.vue')
  }
]

const history = createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/sub1/' : '/')

const router = createRouter({
  history,
  routes
})

export { history, router }
