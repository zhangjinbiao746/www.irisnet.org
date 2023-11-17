import {createStore} from 'vuex';

export default createStore({
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
