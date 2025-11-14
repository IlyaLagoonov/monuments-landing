import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()


app.use('/assets', express.static(path.join(__dirname, 'client/assets'), {
    setHeaders: (res, filepath) => {
        if (filepath.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript')
        } else if (filepath.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css')
        }
    }
}))


app.use(express.static(path.join(__dirname, 'client')))

app.get('*', async (req, res) => {
    try {
        // Пропускаем SSR для статических файлов
        if (req.path.startsWith('/assets/') || req.path.includes('.')) {
            return res.status(404).end() // Vercel сам обслужит статику
        }

        console.log('SSR rendering for:', req.url)

        const templatePath = path.join(__dirname, 'client', 'index.html')
        const template = fs.readFileSync(templatePath, 'utf-8')

        const ssrPath = `file://${path.join(__dirname, 'ssr', 'entry-server.js')}`
        const { render } = await import(ssrPath)

        const appHtml = await render(req.url)
        const html = template.replace('<!--ssr-outlet-->', appHtml)

        res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (error) {
        console.error('SSR Error:', error)
        // Fallback to client-side
        const templatePath = path.join(__dirname, 'client', 'index.html')
        const template = fs.readFileSync(templatePath, 'utf-8')
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template)
    }
})

export default app