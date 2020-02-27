// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {createRouter} from './router/index.js'
import {createStore} from './store'
import VueI18n from 'vue-i18n'
require('reveal.js/css/reveal.css');
import 'swiper/dist/css/swiper.css'
require('vue-swipe/dist/vue-swipe.css');
import 'babel-polyfill'
if (process.env.VUE_ENV === 'client') {
    const VueAwesomeSwiper = require('vue-awesome-swiper');
    console.log(VueAwesomeSwiper,"?？？？？？？？？？？？？？？？？？？？")
    Vue.use(VueAwesomeSwiper);
}
Vue.mixin({
    beforeMount() {
        const {asyncData} = this.$options
        if (asyncData) {
            this.dataPromise = asyncData({
                store: this.$store
            })
        }
    },
    mounted () {
        //根据用户浏览器语言偏好设置页面的中英文语言展示
        let langCNMessage = require('./assets/lang/cn').message,
            langENMessage = require('./assets/lang/en').message;
        if(window.navigator.language === 'zh' || window.navigator.language === 'zh-CN'){
            this.$store.commit('messages',langCNMessage)
            this.$store.commit('lang','CN')
        }else {
            this.$store.commit('messages',langENMessage)
            this.$store.commit('lang','EN')
        }
        if(this.$route.query && this.$route.query.lang === 'CN'){
            this.$store.commit('lang','CN');
            this.$store.commit('messages',langCNMessage)
        }else if(this.$route.query && this.$route.query.lang === 'EN'){
            this.$store.commit('lang','EN');
            this.$store.commit('messages',langENMessage)
        }
    }
})

export function createApp() {
    const router = createRouter()
    const store = createStore()
    Vue.use(VueI18n)
    let i18n = new VueI18n({
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
    Vue.prototype.UrlSrc='../public/irisnet/';
    // Vue.prototype.UrlSrc = process.env.NODE_ENV == 'development' ? '../public/' : 'https://www.bianjie.ai/irisnet/public/';
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })

    return {app, router, store}
}






