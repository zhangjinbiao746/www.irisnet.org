// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {createRouter} from './router/index.js'
import {createStore} from './store'
import VueI18n from 'vue-i18n'
import 'babel-polyfill'
import umeng  from "./umeng/umeng";
require("vuescroll/dist/vuescroll.css")
require('reveal.js/css/reveal.css');
require('swiper/dist/css/swiper.css');
require('element-ui/lib/theme-chalk/index.css')
if (process.env.VUE_ENV === 'client') {
    require('./assets/icon/iconfont')
    const VueAwesomeSwiper = require('vue-awesome-swiper');
    const vuescroll = require('vuescroll')
    Vue.use(VueAwesomeSwiper);
    Vue.use(vuescroll)
    const { Swipe, SwipeItem } = require('vue-awesome-swiper');
    const Message  = require('element-ui')
    Vue.component('swipe', Swipe);
    Vue.component('swipe-item', SwipeItem);
    Vue.component('vue-scroll', vuescroll);
    console.log( Vue)
    Vue.prototype.$umeng = umeng;
    Vue.prototype.$Message = Message;
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
        if(to.path.includes('/kuafu/testnet')){
            next('/developers/testnet')
        }
        if(to.path.includes('/kuafu')){
            next('/mainnet')
        }
        next()
    })
    Vue.prototype.UrlSrc='/public/irisnet/';
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
app.config.errorHandler = (err, instance, info) => {
    // report error to tracking services
    console.log(err,'err')
    console.log(instance,'instance')
    console.log(info,'info')
}


//兼容火狐 多行显示省略号...
// 注册一个全局自定义指令 `v-clamp`
Vue.directive('clamp', {
    // 当被绑定的元素插入到 DOM 中时……
    update: function (el, binding) {
        function clamp(element, options) {
            options = options || {};

            var self = this,
                win = window,
                opt = {
                    clamp: options.clamp || 2,
                    useNativeClamp: typeof(options.useNativeClamp) != 'undefined' ? options.useNativeClamp : true,
                    splitOnChars: options.splitOnChars || ['.', '-', '–', '—', ' '], //Split on sentences (periods), hypens, en-dashes, em-dashes, and words (spaces).
                    animate: options.animate || false,
                    truncationChar: options.truncationChar || '…',
                    truncationHTML: options.truncationHTML
                },

                sty = element.style,
                originalText = element.innerHTML,

                supportsNativeClamp = typeof(element.style.webkitLineClamp) != 'undefined',
                clampValue = opt.clamp,
                isCSSValue = clampValue.indexOf && (clampValue.indexOf('px') > -1 || clampValue.indexOf('em') > -1),
                truncationHTMLContainer;

            if (opt.truncationHTML) {
                truncationHTMLContainer = document.createElement('span');
                truncationHTMLContainer.innerHTML = opt.truncationHTML;
            }


            // UTILITY FUNCTIONS __________________________________________________________

            /**
             * Return the current style for an element.
             * @param {HTMLElement} elem The element to compute.
             * @param {string} prop The style property.
             * @returns {number}
             */
            function computeStyle(elem, prop) {
                if (!win.getComputedStyle) {
                    win.getComputedStyle = function(el, pseudo) {
                        this.el = el;
                        this.getPropertyValue = function(prop) {
                            var re = /(\-([a-z]){1})/g;
                            if (prop == 'float') prop = 'styleFloat';
                            if (re.test(prop)) {
                                prop = prop.replace(re, function() {
                                    return arguments[2].toUpperCase();
                                });
                            }
                            return el.currentStyle && el.currentStyle[prop] ? el.currentStyle[prop] : null;
                        };
                        return this;
                    };
                }

                return win.getComputedStyle(elem, null).getPropertyValue(prop);
            }

            /**
             * Returns the maximum number of lines of text that should be rendered based
             * on the current height of the element and the line-height of the text.
             */
            function getMaxLines(height) {
                var availHeight = height || element.clientHeight,
                    lineHeight = getLineHeight(element);

                return Math.max(Math.floor(availHeight / lineHeight), 0);
            }

            /**
             * Returns the maximum height a given element should have based on the line-
             * height of the text and the given clamp value.
             */
            function getMaxHeight(clmp) {
                var lineHeight = getLineHeight(element);
                return lineHeight * clmp;
            }

            /**
             * Returns the line-height of an element as an integer.
             */
            function getLineHeight(elem) {
                var lh = computeStyle(elem, 'line-height');
                if (lh == 'normal') {
                    // Normal line heights vary from browser to browser. The spec recommends
                    // a value between 1.0 and 1.2 of the font size. Using 1.1 to split the diff.
                    lh = parseInt(computeStyle(elem, 'font-size')) * 1.2;
                }
                return parseInt(lh);
            }


            // MEAT AND POTATOES (MMMM, POTATOES...) ______________________________________
            var splitOnChars = opt.splitOnChars.slice(0),
                splitChar = splitOnChars[0],
                chunks,
                lastChunk;

            /**
             * Gets an element's last child. That may be another node or a node's contents.
             */
            function getLastChild(elem) {
                //Current element has children, need to go deeper and get last child as a text node
                if (elem.lastChild.children && elem.lastChild.children.length > 0) {
                    return getLastChild(Array.prototype.slice.call(elem.children).pop());
                }
                //This is the absolute last child, a text node, but something's wrong with it. Remove it and keep trying
                else if (!elem.lastChild || !elem.lastChild.nodeValue || elem.lastChild.nodeValue === '' || elem.lastChild.nodeValue == opt.truncationChar) {
                    elem.lastChild.parentNode.removeChild(elem.lastChild);
                    return getLastChild(element);
                }
                //This is the last child we want, return it
                else {
                    return elem.lastChild;
                }
            }

            /**
             * Removes one character at a time from the text until its width or
             * height is beneath the passed-in max param.
             */
            function truncate(target, maxHeight) {
                if (!maxHeight) {
                    return;
                }

                /**
                 * Resets global variables.
                 */
                function reset() {
                    splitOnChars = opt.splitOnChars.slice(0);
                    splitChar = splitOnChars[0];
                    chunks = null;
                    lastChunk = null;
                }

                var nodeValue = target.nodeValue.replace(opt.truncationChar, '');

                //Grab the next chunks
                if (!chunks) {
                    //If there are more characters to try, grab the next one
                    if (splitOnChars.length > 0) {
                        splitChar = splitOnChars.shift();
                    }
                    //No characters to chunk by. Go character-by-character
                    else {
                        splitChar = '';
                    }

                    chunks = nodeValue.split(splitChar);
                }

                //If there are chunks left to remove, remove the last one and see if
                // the nodeValue fits.
                if (chunks.length > 1) {
                    // console.log('chunks', chunks);
                    lastChunk = chunks.pop();
                    // console.log('lastChunk', lastChunk);
                    applyEllipsis(target, chunks.join(splitChar));
                }
                //No more chunks can be removed using this character
                else {
                    chunks = null;
                }

                //Insert the custom HTML before the truncation character
                if (truncationHTMLContainer) {
                    target.nodeValue = target.nodeValue.replace(opt.truncationChar, '');
                    element.innerHTML = target.nodeValue + ' ' + truncationHTMLContainer.innerHTML + opt.truncationChar;
                }

                //Search produced valid chunks
                if (chunks) {
                    //It fits
                    if (element.clientHeight <= maxHeight) {
                        //There's still more characters to try splitting on, not quite done yet
                        if (splitOnChars.length >= 0 && splitChar !== '') {
                            applyEllipsis(target, chunks.join(splitChar) + splitChar + lastChunk);
                            chunks = null;
                        }
                        //Finished!
                        else {
                            return element.innerHTML;
                        }
                    }
                }
                //No valid chunks produced
                else {
                    //No valid chunks even when splitting by letter, time to move
                    //on to the next node
                    if (splitChar === '') {
                        applyEllipsis(target, '');
                        target = getLastChild(element);

                        reset();
                    }
                }

                //If you get here it means still too big, let's keep truncating
                if (opt.animate) {
                    setTimeout(function() {
                        truncate(target, maxHeight);
                    }, opt.animate === true ? 10 : opt.animate);
                } else {
                    return truncate(target, maxHeight);
                }
            }

            function applyEllipsis(elem, str) {
                elem.nodeValue = str + opt.truncationChar;
            }


            // CONSTRUCTOR ________________________________________________________________

            if (clampValue == 'auto') {
                clampValue = getMaxLines();
            } else if (isCSSValue) {
                clampValue = getMaxLines(parseInt(clampValue));
            }

            var clampedText;
            if (supportsNativeClamp && opt.useNativeClamp) {
                sty.overflow = 'hidden';
                sty.textOverflow = 'ellipsis';
                sty.webkitBoxOrient = 'vertical';
                sty.display = '-webkit-box';
                sty.webkitLineClamp = clampValue;

                if (isCSSValue) {
                    sty.height = opt.clamp + 'px';
                }
            } else {
                var height = getMaxHeight(clampValue);
                if (height <= element.clientHeight) {
                    console.log(getLastChild(element));
                    clampedText = truncate(getLastChild(element), height);
                }
            }

            return {
                'original': originalText,
                'clamped': clampedText
            };
        }

        clamp(el,{clamp: 2})


    }
})


