<template>
    <div class="home">
        <KeyInnovations :keyInnovations="keyInnovations" />
    </div>
</template>

<script>
    import KeyInnovations from '@theme/pages/home/components/KeyInnovations';
    import { getModuleContent } from '@theme/utils';
    export default {
        name: 'Home',
        components: {
            KeyInnovations
        },
        computed: {
            keyInnovations() {
                return getModuleContent(this, 'keyInnovations');
            }
        }
    };
</script>

<style lang="less" scoped></style>
