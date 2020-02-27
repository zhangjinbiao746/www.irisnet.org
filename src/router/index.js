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
import NewManinet from '../components/MinnetThree';
import NewTestnet from '../components/TestnetThree';
import Home from "../components/HomeThree";
import Community from "../components/PressKitThree.vue";
import Cosmos from "../components/Cosmos";
import CommunityPage from "../components/CommunityThree"
import AnnouncementsThree from "../components/AnnouncementsThree";
import CollaborationThree from "../components/CollaborationThree";
import DevPortalThree from "../components/DevPortalThree";
import EcosystemThree from "../components/EcosystemThree";
import EventsThree from "../components/EventsThree";
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
                path: '/community',
                component: CommunityPage
            },
            {
                path: '/announcements',
                component: AnnouncementsThree
            },
            {
                path: '/devportal',
                component: DevPortalThree
            },
            {
                path: '/ecosystem',
                component: EcosystemThree
            },
            {
                path: '/collaboration',
                component: CollaborationThree
            },
            {
                path: '/events',
                component: EventsThree
            },





        ]
    })
}

