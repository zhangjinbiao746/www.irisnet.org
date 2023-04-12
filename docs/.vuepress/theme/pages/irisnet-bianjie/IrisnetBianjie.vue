<template>
    <div class="irisnet">
        <irisnet-banner :banner-content="bannerContent" />
    </div>
</template>

<script>
    import IrisnetBanner from '@theme/pages/irisnet-bianjie/components/IrisnetBanner';
    import { getModuleContent } from '@theme/utils';

    export default {
        name: 'IrisnetBianjie',
        components: {
            IrisnetBanner
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
