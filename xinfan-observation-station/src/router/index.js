import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'bangumi',
    alias: ['/bangumi'],   // 别名，可以定义很多个
    component: () => import('../pages/BangumiPage.vue')
  },
  {
    path: '/mad',
    name: 'mad&amv',
    component: () => import('../pages/VideoPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
