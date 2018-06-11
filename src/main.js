// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {createRouter} from './router/index.js'
import {createStore} from './store'
import VueI18n from 'vue-i18n'
import 'babel-polyfill'

require('reveal.js/css/reveal.css')
// var Mailchimp = require('mailchimp-api-v3')

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
    Vue.prototype.UrlSrc='../public/';
    // Vue.prototype.UrlSrc = process.env.NODE_ENV == 'development' ? '../public/' : 'https://www.bianjie.ai/irisnet/public/';
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })

            /*var mailchimp = new Mailchimp('617e8ebd7915e6e4d5e95adad27003b5-us18');

            var callback = function (err, result) {
                if (err) {
                    console.log('error', err);
                }
                console.log(result);

            }

            mailchimp.request({
                method : 'post',
                path : '/lists/{list_id}/members',
                path_params : {
                    list_id:"fae0215d25"
                },
                body : {
                    "email_address":"xiao.xianming@oncloudit.com", "status":"subscribed"
                },

            }, callback);*/


    return {app, router, store}
}






