import express from 'express'
import fs from 'fs'
import path from 'path'
import { createServer as createViteServer } from 'vite'
import { pathToFileURL } from 'url'

async function startServer() {
    const app = express()
    const isProd = process.env.NODE_ENV === 'production'

    if (!isProd) {
        // DEV
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
        // PROD
        app.use('/assets', express.static(path.resolve(process.cwd(), 'dist/assets')))

        app.all(/.*/, async (req, res) => {
            try {
                const template = fs.readFileSync(path.resolve(process.cwd(), 'dist/index.html'), 'utf-8')
                const { render } = await import(
                    pathToFileURL(path.resolve(process.cwd(), 'dist/ssr/entry-server.js')).href
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

    const port = Number(process.env.PORT || 3000)
    app.listen(port, () => console.log(`Server running at http://localhost:${port} (prod=${isProd})`))
}

startServer()