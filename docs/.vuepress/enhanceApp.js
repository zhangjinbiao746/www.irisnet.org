import Vuex from 'vuex';
import axios from 'axios';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './theme/store';

export default async ({ Vue, options, router, siteData, isServer }) => {
    // 解决  Uncaught (in promise) Error: Redirected when going from "/xxx/xxx.html" to "/xxx/xxx" via a navigation guard 警告
    const originalPush = router.push;
    router.push = function push(location, onResolve, onReject) {
        if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
        return originalPush.call(this, location).catch((err) => {
            err;
        });
    };
    Vue.use(router);
    Vue.use(Vuex);
    Vue.mixin({ store: store });
    Vue.use(Element);
    if (!isServer) {
        router.beforeEach((to, from, next) => {
            if (
                to.path === '/testnets' ||
                to.path === '/developers/testnet' ||
                to.path === '/developers'
            ) {
                next(`${store.state.currentLang}developers`);
            } else if (to.path === '/appPrivacy' || to.path === '/privacy') {
                next(`${store.state.currentLang}privacy`);
            } else if (to.path === '/appTerms' || to.path === '/terms') {
                next(`${store.state.currentLang}terms`);
            } else if (to.path === '/mainnet') {
                next(`${store.state.currentLang}mainnet`);
            } else if (to.path === '/irisnet-bianjie') {
                next(`${store.state.currentLang}irisnet-bianjie`);
            } else if (to.path === '/community/press-kit') {
                next(`${store.state.currentLang}community/press-kit`);
            } else if (to?.path === '/') {
                next(`${store.state.currentLang}`);
            } else next();
        });
        await import('./theme/assets/iconfont/iconfont.css').then((module) => {});
        await import('./theme/assets/iconfont/iconfont.js').then((module) => {});
        await import('axios')
            .then((module) => {
                Vue.prototype.$axios = module.default;
            })
            .catch((e) => {
                console.log(e, 'axios error ');
            });
        await import('element-ui')
            .then((module) => {
                Vue.use(module.default);
            })
            .catch((e) => {
                console.log(e, 'element-ui error ');
            });
    }
};
