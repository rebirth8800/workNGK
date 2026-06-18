import { createApp } from 'vue'
import App from './app/App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import router from './router'

async function prepareApp(){
    const {worker} = await import('./msw/browser')
    return worker.start()

}

const app = createApp(App)

app.use(router).use(VueQueryPlugin)

prepareApp().then(() => {
  app.mount('#app')
})

