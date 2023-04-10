import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentLang: '/en/'
    },
    mutations: {
        currentLang(state, currentLang) {
            state.currentLang = currentLang;
        }
    }
});
