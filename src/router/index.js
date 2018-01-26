import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import app from '@/components/app'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'index',
                component: index
            },
            {
                path: '/app',
                name: 'app',
                component: app
            }
        ]
    })
}

