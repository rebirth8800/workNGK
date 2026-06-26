import type { Router } from 'vue-router'
import { useAuthStore } from '@/entities/user'
import { message } from 'ant-design-vue'


export function setupRouterGuards(router: Router) {
  // Глобальный гард (beforeEach)
  router.beforeEach(async (to, from) => {
    // Получаем store
    const authStore = useAuthStore()

    // ============ ПРОВЕРКА НА АВТОРИЗАЦИЮ ============
    // Если маршрут требует авторизации
    if (to.meta.requiresAuth) {

      if (!authStore.isAuthenticated) {

        message.warning({
          content: 'Для доступа к этой странице необходимо войти',
          class: 'custom-message-large',
        })
        return ({ name: 'auth' })
      }

      if (to.meta.roles){
        const requiredRoles = to.meta.roles as string[]
        if (requiredRoles == 'employer' && authStore.user?.role !== 'employer'){
          message.error({
            content: 'Создать вакансию может только работодатель',
            class: 'custom-message-large',
          })
          return ({ name: 'home' })
        }
      }

      // ============ ПРОВЕРКА НА АДМИНА ============
      if (to.meta.requiresAdmin) {
        if (authStore.user?.role !== 'admin') {
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
      if (authStore.isAuthenticated) {
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