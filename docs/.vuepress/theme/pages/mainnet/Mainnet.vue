<template>
    <div class="mainnet">
        <mainnet-banner :irishub="irishub" />
        <new-features :features="features" />
        <app-ecosystem :app-ecosystem="appEcosystem" />
        <resources :resources="resources" />
    </div>
</template>

<script>
    import MainnetBanner from '@theme/pages/mainnet/components/MainnetBanner';
    import NewFeatures from '@theme/pages/mainnet/components/NewFeatures';
    import AppEcosystem from '@theme/pages/mainnet/components/AppEcosystem';
    import Resources from '@theme/pages/mainnet/components/Resources';
    import { getModuleContent } from '@theme/utils';

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
