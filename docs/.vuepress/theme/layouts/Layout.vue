<template>
    <div class="theme-container">
        <ClientOnly>
            <Navigation :navList="navList"></Navigation>
        </ClientOnly>
        <ClientOnly>
            <div class="main_container">
                <Home v-if="$page.frontmatter.isHome" />
                <Markdown :showMd="showMd"></Markdown>
            </div>
        </ClientOnly>

        <ClientOnly>
            <Footer></Footer>
        </ClientOnly>
    </div>
</template>

<script>
    import Navigation from '@theme/components/Navigation';
    import Home from '@theme/pages/Home';
    import Markdown from '@theme/components/Markdown';
    import Footer from '@theme/components/Footer';
    import globalCommonStyles from '@theme/styles/common';
    import { getLocalesNav } from '@theme/utils';

    export default {
        name: 'Layout',
        components: {
            Navigation,
            Home,
            Markdown,
            Footer
        },
        data() {
            return {
                navList: {}
            };
        },
        computed: {
            showMd() {
                return Object.keys(this.$page.frontmatter).length === 0;
            }
        },
        watch: {
            '$store.state.currentLang': {
                handler(newLang) {
                    this.navList = getLocalesNav(this, newLang);
                },
                immediate: true,
                deep: true
            }
        },
        mounted() {
            for (const commonStyle in globalCommonStyles) {
                document.documentElement.style.setProperty(
                    commonStyle,
                    globalCommonStyles[commonStyle]
                );
            }
        }
    };
</script>

<style lang="less">
    @import '../styles/index.less';
</style>
