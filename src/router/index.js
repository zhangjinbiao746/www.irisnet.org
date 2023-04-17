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
import MainNet from "../components/MainNet";
import MainNetApp from "../components/MainNetApp";
import NewManinet from '../components/KuaFu';
import NewTestnet from '../components/NewTestnet';
import Home from "../pages/Home";
import Community from "../components/Community.vue";
import Developers from "../components/bsn/Developers"
import Cosmos from "../components/Cosmos";
import CommunityPage from "../components/CommunityPage"
import Prepare from "../components/Prepare"
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
                redirect: '/developers'
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
                redirect:'/privacy'
            },

            {
                path: '/appTerms',
                name: 'appTerms',
                redirect:'/terms'
            },
            {
                path: '/mainnet',
                component: NewManinet
            },
            {
                path: '/community/press-kit',
                component: Community
            },
            {
                path: '/mainnet/app',
                component: MainNetApp
            },
            {
                path: '/irisnet-bianjie',
                component: Cosmos
            },
            {
                path: '/developers',
                component: Developers
            },
            {
                path: '/developers/testnet',
                redirect:'/developers'
            },
        ]
    })
}
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
