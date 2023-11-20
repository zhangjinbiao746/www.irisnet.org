<template>
    <div class="presskit">
        <banner :pressKitContent="pressKitContent" />
        <press-kit-module :moduleContents="moduleContents" />
    </div>
</template>

<script>
    import Banner from '../press-kit/components/Banner.vue';
    import PressKitModule from '../press-kit/components/PressKitModule.vue';
    import { getModuleContent } from '../../utils';

    export default {
        name: 'PressKit',
        components: {
            Banner,
            PressKitModule
        },
        computed: {
            pressKitContent() {
                return getModuleContent(this, 'pressKitContent');
            },
            moduleContents() {
                return getModuleContent(this, 'moduleContents');
            }
        }
    };
</script>

<style lang="less" scoped>
    .presskit {
        padding-top: 0.6rem;
        background: #0d0e2c;
    }
</style>
