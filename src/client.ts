import { createSSRApp } from 'vue'
import { createSSRRouter } from './router'
import App from './App.vue'
import { create } from 'naive-ui'
import '@/styles/main.scss' // <- важно! Tailwind + переменные

const naive = create()
const router = createSSRRouter(false)
const app = createSSRApp(App)
app.use(router)
app.use(naive)

router.isReady().then(() => app.mount('#app'))