import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ command, ssrBuild }) => {
    return {
        plugins: [vue()],
        resolve: { alias: { '@': path.resolve(__dirname, './src') } },
        build: ssrBuild
            ? { ssr: 'src/entry-server.ts', outDir: 'dist/ssr' }
            : { outDir: 'dist' },
        ssr: {
            noExternal: ['vue', '@vue/server-renderer']
        }
    }
})