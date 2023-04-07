/**
 * get nav
 * @param {vue实例} vue 
 * @param {current language} lang 
 * @returns 
 */
export const getLocalesNav = (vue, lang) => {
	return vue.$site.themeConfig.locales[lang].nav;
}