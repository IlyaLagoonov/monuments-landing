import { createMemoryHistory, createRouter as createVueRouter, createWebHistory } from 'vue-router'
import MonumentsPage from "../pages/MonumentsPage.vue";


export function createRouter() {
    return createVueRouter({
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes: [
            { path: '/', component: MonumentsPage }
        ]
    })
}

