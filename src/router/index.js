import Vue from 'vue'
import Router from 'vue-router'


import index_v2 from '@/components/index_v2.vue'

import privacy from '@/components/privacy'
import terms from '@/components/terms'
import newIndex from "@/components/newIndex"
import newApp from "@/components/newApp"
import appPrivacy from '@/components/appPrivacy'
import appTerms from '@/components/appTerms'
import TestNet from '../components/TestNet.vue';
import TestNetApp from '../components/TestNetApp.vue';
import HackathonApp from '../components/HackathonApp.vue';
Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'newIndex',
                component: index_v2
            },
            {
                path: '/testnets',
                component: TestNet,
            },
            {
                path: '/testnets/app',
                component: TestNetApp,
            },
            {
                path: '/hackathon/app',
                component: HackathonApp,
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
                component: newApp,
            },
            {
                path: '/appPrivacy',
                name: 'appPrivacy',
                component: appPrivacy
            },

            {
                path: '/appTerms',
                name: 'appTerms',
                component: appTerms
            },
        ]
    })
}

