/**
 * get nav
 * @param {vue实例} vue
 * @param {current language} lang
 * @returns
 */
export const getLocalesNav = (vue, lang) => {
    return vue.$site.locales[lang].nav;
};
export const getLocalesFooter = (vue, lang) => {
    return vue.$site.locales[lang].footer;
};

/**
 *
 * @param {vue实例} vue
 * @param {module content} content
 * @returns
 */
export const getModuleContent = (vue, content) => {
    return vue.$frontmatter[content];
};
// 解决不改变图片名称，只改变图片内容，获取不到最新图片的问题
export const getImgRandom = (img) => {
    return `${img}?random=${Math.random()}`;
};
