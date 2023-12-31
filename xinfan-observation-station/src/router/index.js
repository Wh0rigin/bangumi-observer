import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'bangumi',
    alias: ['/bangumi'],
    component: () => import('@/pages/BangumiPage.vue')
  },
  {
    path: '/mad',
    name: 'mad&amv',
    alias: ['/video'],
    component: () => import('@/pages/VideoPage.vue')
  },
  {
    path: '/music',
    name: 'music',
    component: () => import('@/pages/MusicPage.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('@/pages/ChatPage.vue')
  },
  {
    path: '/rss',
    name: 'rss',
    component: () => import('@/pages/RssSubscribePage.vue')
  },
  {
    path: '/atom',
    name: 'atom',
    component: () => import('@/pages/AtomSubscribePage.vue')
  },
  {
    path: '/animegrid',
    name: 'animegrid',
    component: () => import('@/pages/AnimeGridPage.vue')
  },
  {
    path
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
