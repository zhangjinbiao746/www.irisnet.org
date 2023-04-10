<template>
    <div class="mainnet">
        <mainnet-banner :irishub="irishub" />
        <app-ecosystem :app-ecosystem="appEcosystem" />
        <resources :resources="resources" />
    </div>
</template>

<script>
    import MainnetBanner from '@theme/pages/mainnet/components/MainnetBanner';
    import AppEcosystem from '@theme/pages/mainnet/components/AppEcosystem';
    import Resources from '@theme/pages/mainnet/components/Resources';
    import { getModuleContent } from '@theme/utils';

    export default {
        name: 'Mainnet',
        components: {
            MainnetBanner,
            AppEcosystem,
            Resources
        },
        computed: {
            irishub() {
                return getModuleContent(this, 'irishub');
            },
            appEcosystem() {
                return getModuleContent(this, 'appEcosystem');
            },
            resources() {
                return getModuleContent(this, 'resources');
            },
        }
    };
</script>

<style lang="less" scoped>
    .mainnet {
        padding-top: 0.6rem;
        background: #0d0e2c;
    }
</style>
