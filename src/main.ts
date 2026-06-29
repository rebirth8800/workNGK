import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './app/App.vue'
import Antd from 'ant-design-vue';
import { VueQueryPlugin } from '@tanstack/vue-query'
import router from './app/router'
import 'ant-design-vue/es/pagination/style/index';
import { useAuthStore } from '@/entities/user'


async function prepareApp(){
  if (import.meta.env.DEV) {
    try {
      const {worker} = await import('./msw/browser')
      return worker.start({
        onUnhandledRequest: 'bypass',
        // Включаем поддержку cookie
        serviceWorker: {
          options: {
            credentials: 'include', // <--- КЛЮЧЕВОЙ МОМЕНТ!
          },
        },
      })
    }catch (error) {
      console.warn('⚠️ MSW не запустился:', error)
    }
  }


}
const pinia = createPinia()
const app = createApp(App)

app.use(router).use(VueQueryPlugin).use(Antd).use(pinia)

prepareApp().then(() => {
  app.mount('#app')
})

