import {defineClientConfig} from "@vuepress/client";
import Layout from "./theme/layouts/Layout.vue";
import store from "./theme/store";
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
export default defineClientConfig({
	layouts: {
		Layout,
	},
	async enhance({app, router, siteData}) {
		app.use(store);
		if(!__VUEPRESS_SSR__){
			await import('./theme/assets/iconfont/iconfont.css').then((module) => {});
			await import('./theme/assets/iconfont/iconfont.js').then((module) => {});
		}
		app.use(ElementPlus);
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
	}
})