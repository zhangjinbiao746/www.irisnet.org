<template>
    <div class="theme-container">
        <email-mask v-if="$store.state.showMask" />
        <ClientOnly>
            <navigation :navList="navList"></navigation>
        </ClientOnly>
        <ClientOnly>
            <div class="main_container">
                <home v-if="$page.frontmatter.isHome" />
                <developers v-if="$page.frontmatter.isDevelopers" />
                <mainnet v-if="$page.frontmatter.isMainnet" />
                <press-kit v-if="$page.frontmatter.isPressKit" />
                <irisnet-bianjie v-if="$page.frontmatter.isIrisnetBianjie" />
                <community :community-info="footerInfo.communityInfo" />
                <markdown :showMd="showMd"></markdown>
            </div>
        </ClientOnly>
        <ClientOnly>
            <Footer v-show="!showMd" :footer-info="footerInfo"></Footer>
        </ClientOnly>
    </div>
</template>

<script>
    import Navigation from '../components/Navigation.vue';
    import EmailMask from '../components/common/EmailMask.vue';
    import Home from '../pages/home/Home.vue';
    import Developers from '../pages/developers/Developers.vue';
    import Mainnet from '../pages/mainnet/Mainnet.vue';
    import PressKit from '../pages/press-kit/PressKit.vue';
    import IrisnetBianjie from '../pages/irisnet-bianjie/IrisnetBianjie.vue';
    import Community from '../components/Community.vue';
    import Markdown from '../components/Markdown.vue';
    import Footer from '../components/Footer.vue';
    import globalCommonStyles from '../styles/common';
    import { getLocalesNav, getLocalesFooter } from '../utils';
    export default {
        name: 'Layout',
        components: {
            Navigation,
            EmailMask,
            Home,
            Developers,
            Mainnet,
            PressKit,
            IrisnetBianjie,
            Community,
            Markdown,
            Footer
        },
        data() {
            return {
                navList: {},
                footerInfo: {}
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
                    this.footerInfo = getLocalesFooter(this, newLang);
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
