import { createRouter, createWebHistory } from 'vue-router'

const checkAuth = () => true

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', name: 'login', component: import('@/pages/Login.vue') },
    {
      path: '/',
      component: import('@/pages/Layout.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: import('@/pages/Home.vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to, from) => {
  if (to.name !== 'login' && !checkAuth()) {
    return { name: 'login' }
  }
})

export default router
