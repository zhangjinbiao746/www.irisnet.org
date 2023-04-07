<template>
    <div class="home">
        <key-innovations :keyInnovations="keyInnovations" />
        <upcoming-feature :upcoming="upcoming" />
    </div>
</template>

<script>
    import KeyInnovations from '@theme/pages/home/components/KeyInnovations';
    import UpcomingFeature from '@theme/pages/home/components/UpcomingFeature';
    import { getModuleContent } from '@theme/utils';
    export default {
        name: 'Home',
        components: {
            KeyInnovations,
            UpcomingFeature
        },
        computed: {
            keyInnovations() {
                return getModuleContent(this, 'keyInnovations');
            },
            upcoming() {
                return getModuleContent(this, 'upcoming');
            }
        }
    };
</script>

<style lang="less" scoped></style>
