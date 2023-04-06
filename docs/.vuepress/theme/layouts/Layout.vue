<template>
    <div class="theme-container">
        <ClientOnly>
            <Navigation></Navigation>
        </ClientOnly>
        <ClientOnly>
            <div class="main_container">
                <Markdown :showMd="showMd"></Markdown>
            </div>
        </ClientOnly>

        <ClientOnly>
            <Footer></Footer>
        </ClientOnly>
    </div>
</template>

<script>
    import Navigation from '@theme/components/common/Navigation';
    import Markdown from '@theme/components/common/Markdown';
    import Footer from '@theme/components/common/Footer';
    import globalCommonStyles from '@theme/styles/common';
    export default {
        name: 'Layout',
        components: {
            Navigation,
            Markdown,
            Footer
        },
        computed: {
            showMd() {
                return Object.keys(this.$page.frontmatter).length === 0;
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

<style lang="less" scoped></style>
