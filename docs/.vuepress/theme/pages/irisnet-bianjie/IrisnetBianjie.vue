<template>
    <div class="irisnet">
        <irisnet-banner :banner-content="bannerContent" />
        <about-irisnet :about-content="aboutContent" :logo="logo" />
        <delegation :delegation="delegation" />
        <explorer :cosmos-explorer="cosmosExplorer" />
    </div>
</template>

<script>
    import IrisnetBanner from '../irisnet-bianjie/components/IrisnetBanner.vue';
    import AboutIrisnet from '../irisnet-bianjie/components/AboutIrisnet.vue';
    import Delegation from '../irisnet-bianjie/components/Delegation.vue';
    import Explorer from '../irisnet-bianjie/components/Explorer.vue';
    import { getModuleContent } from '../../utils';

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
