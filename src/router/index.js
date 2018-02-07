import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import app from '@/components/app'
import privacy from '@/components/privacy'
import terms from '@/components/terms'
import login from '@/components/login'
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
                path: '/login',
                name: 'login',
                component: login
            },
            {
                path: '/privacy',
                name: 'privacy',
                component: privacy
            },
            {
                path: '/terms',
                name: 'terms',
                component: terms
            },
            {
                path: '/app',
                name: 'app',
                component: app
            }


        ]
    })
}

