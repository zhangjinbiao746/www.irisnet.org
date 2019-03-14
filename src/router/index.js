import Vue from 'vue'
import Router from 'vue-router'



import privacy from '@/components/privacy'
import terms from '@/components/terms'
import newApp from "@/components/newApp"
import appPrivacy from '@/components/appPrivacy'
import appTerms from '@/components/appTerms'
import TestNetApp from '../components/TestNetApp.vue';
import HackathonApp from '../components/HackathonApp.vue';
import MainNetApp from "../components/MainNetApp";
import NewManinet from '../components/NewMainnet';
import NewTestnet from '../components/NewTestnet';
import Home from "../components/Home"
Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/testnets',
                component: NewTestnet,
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
            {
                path: '/mainnet',
                component: NewManinet
            },
            {
                path: '/mainnet/app',
                component: MainNetApp
            },
        ]
    })
}

