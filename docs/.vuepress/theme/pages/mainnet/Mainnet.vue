<template>
    <div class="mainnet">
        <mainnet-banner :irishub="irishub" />
        <new-features :features="features" />
        <app-ecosystem :app-ecosystem="appEcosystem" />
        <resources :resources="resources" :more-resource="moreResource "/>
    </div>
</template>

<script>
    import MainnetBanner from '../mainnet/components/MainnetBanner.vue';
    import NewFeatures from '../mainnet/components/NewFeatures.vue';
    import AppEcosystem from '../mainnet/components/AppEcosystem.vue';
    import Resources from '../mainnet/components/Resources.vue';
    import { getModuleContent } from '../../utils';

    export default {
        name: 'Mainnet',
        components: {
            MainnetBanner,
            NewFeatures,
            AppEcosystem,
            Resources
        },
        computed: {
            irishub() {
                return getModuleContent(this, 'irishub');
            },
            features() {
                return getModuleContent(this, 'features');
            },
            appEcosystem() {
                return getModuleContent(this, 'appEcosystem');
            },
            resources() {
                return getModuleContent(this, 'resources');
            },
            moreResource() {
                return getModuleContent(this, 'moreResource');
            }
        }
    };
</script>

<style lang="less" scoped>
    .mainnet {
        padding-top: 0.6rem;
        background: #0d0e2c;
    }
</style>
