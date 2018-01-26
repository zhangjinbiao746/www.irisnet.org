// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {createRouter} from './router/index.js'
import {createStore} from './store'
import VueI18n from 'vue-i18n'
import 'babel-polyfill'

require('reveal.js/css/reveal.css')

Vue.mixin({
    beforeMount() {
        const {asyncData} = this.$options
        if (asyncData) {
            this.dataPromise = asyncData({
                store: this.$store
            })
        }
    }
})

export function createApp() {
    const router = createRouter()
    const store = createStore()
    Vue.use(VueI18n)

    const i18n = new VueI18n({
        locale: store.state.lang,    // 语言标识
        messages: {
            'CN': require('./assets/lang/cn'),   // 中文语言包
            'EN': require('./assets/lang/en')    // 英文语言包
        }
    })
    store.state.messages = i18n.messages[store.state.lang]['message']
    router.beforeEach((to, from, next) => {
        if ((to.query.lang) && (to.query.lang == 'EN' || to.query.lang == 'CN')) {
            store.state.lang = to.query.lang;
            store.state.messages = i18n.messages[store.state.lang]['message']
        }
        next()
    })
    //Vue.prototype.UrlSrc='../public/';
    Vue.prototype.UrlSrc=process.env.NODE_ENV=='development'?'../public/':'http://d29xkc1uszfq9u.cloudfront.net/public/';
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })
    return {app, router, store}
}
