import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const profileType = ref('')
  const isAuth = computed(() => profileType.value !== '')

  return {
    profileType,
    isAuth,
  }
})
