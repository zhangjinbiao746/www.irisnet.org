// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export function createStore () {
    return new Vuex.Store({
        state: {
            musicList: [],
            lang: 'EN',
            whitePaper: '',
            roadmap: '',
            collaboration: '',
            contact: '',
            activeIconIndex: '',
            footerWeChatIcon: false,
            newsLetterTitle: '',
            textContent: '',
            showMask: false,
            confirm: '',
            flShowFooter: true,
            headerHeight:'',
            messages:null,
            changeItemIsActive:2
        },
        mutations: {
            changeItemIs(state, payload) {
                this.state.messages.head.txt[payload].is = true
                let obj = Object.assign({}, this.state.messages)
                this.state.messages = obj
                // this.$set(this.state.messages.head.txt,payload,true)
            },
            changeItemIsActive(state,payload){
                this.state.messages.home.sectionThree.road.forEach(item => {
                    item.isActive = false
                })
                this.state.messages.home.sectionThree.road[payload].isActive = true
                let obj = Object.assign({}, this.state.messages)
                this.state.messages = obj
            },
            lang(state,data){
                state.lang = 'EN';
            },
            whitePaper(state,data){
                state.whitePaper = data;
            },
            collaboration(state,data){
                state.collaboration = data;
            },
            contact(state,data){
                state.contact = data;
            },
            activeIconIndex(state,data){
                state.activeIconIndex = data;
            },
            roadmap(state,data){
                state.roadmap = data;
            },
            controlWeChat(state,data){
                state.footerWeChatIcon = data;
            },
            newsLetterTitle(state,data){
                state.newsLetterTitle = data;
            },
            textContent(state,data){
                state.textContent = data;
            },
            showMask(state,data){
                state.showMask = data;
            },
            confirm(state,data){
                state.confirm = data;
            },
            flShowFooter(state,data){
                state.flShowFooter = data;
            },
            headerHeight(state,data){
                state.headerHeight = data;
            },
            messages(state,data){
                state.messages = data;
            },
        }
    })
}
