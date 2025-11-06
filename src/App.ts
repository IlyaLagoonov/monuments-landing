import App from './App.vue'
import { createSSRApp } from 'vue'
import '@/styles/main.scss'

export const createApp = () => {
    const app = createSSRApp(App)
    return { app }
}