<template>
    <div class="irisnet">
        <irisnet-banner :banner-content="bannerContent" />
        <about-irisnet :about-content="aboutContent" :logo="logo" />
        <delegation :delegation="delegation" />
        <explorer :cosmos-explorer="cosmosExplorer" />
    </div>
</template>

<script>
    import IrisnetBanner from '@theme/pages/irisnet-bianjie/components/IrisnetBanner';
    import AboutIrisnet from '@theme/pages/irisnet-bianjie/components/AboutIrisnet';
    import Delegation from '@theme/pages/irisnet-bianjie/components/Delegation';
    import Explorer from '@theme/pages/irisnet-bianjie/components/Explorer';
    import { getModuleContent } from '@theme/utils';

    export default {
        name: 'IrisnetBianjie',
        components: {
            IrisnetBanner,
            AboutIrisnet,
            Delegation,
            Explorer
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
            delegation() {
                return getModuleContent(this, 'delegation');
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
