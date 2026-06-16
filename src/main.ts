import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

async function prepareApp(){
    const {worker} = await import('./msw/browser')
    return worker.start()

}

const app = createApp(App)

app.use(router)

prepareApp().then(() => {
  app.mount('#app')
})

