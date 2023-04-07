import Vuex from 'vuex';
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
    if (!isServer) {
        router.beforeEach((to, from, next) => {
            if (to?.path === '/') next(`${store.state.currentLang}`);
            else next();
        });
    }
};
