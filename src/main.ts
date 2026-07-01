import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './app/App.vue'
import Antd from 'ant-design-vue';
import { VueQueryPlugin } from '@tanstack/vue-query'
import router from './app/router'
import 'ant-design-vue/es/pagination/style/index';


async function prepareApp(){
    try {
      const {worker} = await import('./msw/browser')
      return worker.start({
        onUnhandledRequest: 'bypass',
        // Включаем поддержку cookie

        serviceWorker: {
          url: '/workNGK/mockServiceWorker.js',
          scope: '/workNGK/',
          options: {
            credentials: 'include', // <--- КЛЮЧЕВОЙ МОМЕНТ!
          },
        },
      })
      console.log('✅ MSW запущен!')
    }catch (error) {
      console.warn('⚠️ MSW не запустился:', error)
    }



}
const pinia = createPinia()
const app = createApp(App)

app.use(router).use(VueQueryPlugin).use(Antd).use(pinia)

prepareApp().then(() => {
  app.mount('#app')
})

