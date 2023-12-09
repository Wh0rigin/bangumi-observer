import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'bangumi',
    alias: ['/bangumi'],   
    component: () => import('../pages/BangumiPage.vue')
  },
  {
    path: '/mad',
    name: 'mad&amv',
    alias: ['/video'],   
    component: () => import('../pages/VideoPage.vue')
  },
  {
    path: '/music',
    name: 'music',
    component: () => import('../pages/MusicPage.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../pages/ChatPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
