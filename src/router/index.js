import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'

import index_v2 from '@/components/index_v2.vue'

import app from '@/components/app'
import privacy from '@/components/privacy'
import terms from '@/components/terms'
import login from '@/components/login'
import newIndex from "@/components/newIndex"
import newApp from "@/components/newApp"
import appPrivacy from '@/components/appPrivacy'
import appTerms from '@/components/appTerms'
import community from '@/components/community'
import TestNet from '../components/TestNet.vue';
import Hackathon from '../components/Hackathon';
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
            //{
            //    path: '/',
            //    name: 'newIndex',
            //    component: newIndex
            //},
            // {
            //     path: '/',
            //     name: 'index',
            //     component: index
            // },
            {
                path: '/testnets/pc',
                component: TestNet,
            },
            {
                path: '/hackathon/pc',
                component: Hackathon,
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
            // {
            //     path: '/app',
            //     name: 'app',
            //     component: app
            // },
            {
                path: '/newApp',
                name: 'newApp',
                component: newApp,
            },

            {
                path: '/community',
                name: 'community',
                component: community
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

