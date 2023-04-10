<template>
    <div class="mainnet">
        <mainnet-banner :irishub="irishub" />
    </div>
</template>

<script>
    import MainnetBanner from '@theme/pages/mainnet/components/MainnetBanner';
    import { getModuleContent } from '@theme/utils';

    export default {
        name: 'Mainnet',
        components: {
            MainnetBanner
        },
        computed: {
            irishub() {
                return getModuleContent(this, 'irishub');
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
