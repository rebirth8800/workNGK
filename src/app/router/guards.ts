import type { Router } from 'vue-router'
import { useAuthStore } from '@/entities/user'
import { message } from 'ant-design-vue'
import { computed } from 'vue'


export function setupRouterGuards(router: Router) {
  // Глобальный гард (beforeEach)
  router.beforeEach(async (to, from) => {
    // Получаем store
    const authStore = useAuthStore()
    const isAuthenticated = computed(() => authStore.isAuthenticated)
    const user = computed(() => authStore.user)

    // ============ ПРОВЕРКА НА АВТОРИЗАЦИЮ ============
    // Если маршрут требует авторизации
    if (to.meta.requiresAuth) {
      if (!isAuthenticated.value) {
        message.warning({
          content: 'Для доступа к этой странице необходимо войти',
          class: 'custom-message-large',
        })
        return ({ name: 'auth' })
      }

      if (to.meta.roles){
        const requiredRoles = to.meta.roles as string[]
        if (requiredRoles == 'employer' && user.value?.role === 'student'){
          message.error({
            content: 'Создать вакансию может только работодатель',
            class: 'custom-message-large',
          })
          return ({ name: 'home' })
        }
      }

      // ============ ПРОВЕРКА НА АДМИНА ============
      if (to.meta.requiresAdmin) {
        if (user.value?.role !== 'admin') {
          message.error({
            content: 'Требуются права администратора',
            class: 'custom-message-large',
          })
          return ({ name: 'home' })
        }
      }
    }

    // ============ ГОСТЕВЫЕ МАРШРУТЫ ============
    // Если маршрут только для гостей (логин/регистрация)
    if (to.meta.requiresGuest) {

      console.log(isAuthenticated.value)
      if (isAuthenticated.value) {
        // Если пользователь уже авторизован - отправляем на главную
        return ({ name: 'home' })
      }
    }

    // Если все проверки пройдены - продолжаем
    return true
  })

  // ============ ПОСЛЕ ПЕРЕХОДА ============
  router.afterEach((to) => {
    // Прокрутка вверх при переходе
    window.scrollTo({ top: 0, behavior: 'smooth' })

  })

  // ============ ОБРАБОТКА ОШИБОК ============
  router.onError((error) => {
    console.error('Ошибка роутинга:', error)
    message.error({
      content: 'Произошла ошибка при переходе',
      class: 'custom-message-large',
    })
  })
}