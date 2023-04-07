/**
 * get nav
 * @param {vue实例} vue 
 * @param {current language} lang 
 * @returns 
 */
export const getLocalesNav = (vue, lang) => {
	return vue.$site.themeConfig.locales[lang].nav;
}

/**
 * 
 * @param {vue实例} vue 
 * @param {module content} content 
 * @returns 
 */
export const getModuleContent = (vue, content) => {
	return vue.$frontmatter[content];
}
