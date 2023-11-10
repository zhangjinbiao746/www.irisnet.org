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
    import Navigation from '@theme/components/Navigation';
    import EmailMask from '@theme/components/common/EmailMask';
    import Home from '@theme/pages/home/Home';
    import Developers from '@theme/pages/developers/Developers';
    import Mainnet from '@theme/pages/mainnet/Mainnet';
    import PressKit from '@theme/pages/press-kit/PressKit';
    import IrisnetBianjie from '@theme/pages/irisnet-bianjie/IrisnetBianjie';
    import Community from '@theme/components/Community';
    import Markdown from '@theme/components/Markdown';
    import Footer from '@theme/components/Footer';
    import globalCommonStyles from '@theme/styles/common';
    import { getLocalesNav, getLocalesFooter } from '@theme/utils';
    import validator from 'validator';

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
