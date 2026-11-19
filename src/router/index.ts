import { useAuthStore } from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router'

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

router.beforeEach(async (to, _from) => {
  const auth = useAuthStore()
  if (!auth.isAuth && to.name !== 'login') {
    return { name: 'login' }
  }
})

export default router
