import { createApp } from './App.js'
import { renderToString } from '@vue/server-renderer'

export async function render(url: string) {
    const { app, router } = createApp()
    router.push(url)
    await router.isReady()
    const appHtml = await renderToString(app)
    return appHtml
}
