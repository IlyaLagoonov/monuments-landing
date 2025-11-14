import express from 'express'
import fs from 'fs'
import path from 'path'
import { createServer as createViteServer } from 'vite'
import { pathToFileURL } from 'url'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const isProd = process.env.NODE_ENV === 'production'

if (!isProd) {
    // DEV - только для локальной разработки
    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'custom'
    })
    app.use(vite.middlewares)

    app.get('*', async (req, res) => {
        try {
            let template = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8')
            template = await vite.transformIndexHtml(req.url, template)

            const { render } = await vite.ssrLoadModule('/src/entry-server.ts')
            const appHtml = await render(req.url)
            const html = template.replace('<!--ssr-outlet-->', appHtml)

            res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
        } catch (e: any) {
            vite.ssrFixStacktrace(e)
            console.error(e)
            res.status(500).end(e.message)
        }
    })
} else {
    // PROD - для Vercel
    app.use('/assets', express.static(path.join(__dirname, 'client/assets')))

    app.get('*', async (req, res) => {
        try {
            const template = fs.readFileSync(path.join(__dirname, 'client', 'index.html'), 'utf-8')
            const { render } = await import(
                pathToFileURL(path.join(__dirname, 'ssr', 'entry-server.js')).href
                )
            const appHtml = await render(req.url)
            const html = template.replace('<!--ssr-outlet-->', appHtml)
            res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
        } catch (err: any) {
            console.error(err && err.stack ? err.stack : err)
            res.status(500).end(String(err && err.message ? err.message : 'SSR error'))
        }
    })
}

// ВАЖНО: для Vercel убираем app.listen и экспортируем app
export default app