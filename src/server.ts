import express from 'express'
import fs from 'fs'
import path from 'path'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp } from 'vue'
import App from './App.vue'
import { createSSRRouter } from './router'
import { create } from 'naive-ui'

const server = express()
const naive = create()

server.use('/assets', express.static(path.resolve(__dirname, 'assets')))

server.get('*', async (req, res) => {
    const router = createSSRRouter(true)
    router.push(req.url)
    await router.isReady()

    const app = createSSRApp(App)
    app.use(router)
    app.use(naive)

    const appHtml = await renderToString(app)
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8')
    res.send(html.replace('<!--ssr-outlet-->', appHtml))
})

server.listen(3000, () => console.log('SSR running at http://localhost:3000'))