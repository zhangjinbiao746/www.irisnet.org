import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentLang: '/en/',
        showMask: false,
        newsLetterTitle: '',
        textContent: '',
        confirm: ''
    },
    mutations: {
        currentLang(state, currentLang) {
            state.currentLang = currentLang;
        },
        showMask(state, showMask) {
            state.showMask = showMask;
        },
        newsLetterTitle(state, newsLetterTitle) {
            state.newsLetterTitle = newsLetterTitle;
        },
        textContent(state, textContent) {
            state.textContent = textContent;
        },
        confirm(state, confirm) {
            state.confirm = confirm;
        }
    }
});
