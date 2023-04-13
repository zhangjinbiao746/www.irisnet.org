<template>
    <div class="irisnet">
        <irisnet-banner :banner-content="bannerContent" />
        <about-irisnet :about-content="aboutContent" :logo="logo" />
    </div>
</template>

<script>
    import IrisnetBanner from '@theme/pages/irisnet-bianjie/components/IrisnetBanner';
    import AboutIrisnet from '@theme/pages/irisnet-bianjie/components/AboutIrisnet';
    import { getModuleContent } from '@theme/utils';

    export default {
        name: 'IrisnetBianjie',
        components: {
            IrisnetBanner,
            AboutIrisnet
        },
        computed: {
            bannerContent() {
                return getModuleContent(this, 'bannerContent');
            },
            aboutContent() {
                return getModuleContent(this, 'aboutContent');
            },
            logo() {
                return getModuleContent(this, 'logo');
            },
            bianjie() {
                return getModuleContent(this, 'bianjie');
            },
            cosmosExplorer() {
                return getModuleContent(this, 'cosmosExplorer');
            }
        }
    };
</script>

<style lang="less" scoped>
    .irisnet {
        background: #fff;
    }
</style>
