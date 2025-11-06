import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import MonumentsPage from '../pages/MonumentsPage.vue'

export const createSSRRouter = (isServer = false) => {
    const history = isServer ? createMemoryHistory() : createWebHistory()
    return createRouter({ history, routes: [{ path: '/', component: MonumentsPage }] })
}
