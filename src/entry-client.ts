import { createApp } from './App.js'

const { app, router } = createApp()
router.isReady().then(() => {
    app.mount('#app', true) // hydrate = true
})
