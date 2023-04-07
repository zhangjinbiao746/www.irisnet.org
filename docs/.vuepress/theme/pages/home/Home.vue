<template>
    <div class="home">
        <key-innovations :keyInnovations="keyInnovations" />
        <upcoming-feature :upcoming="upcoming" />
        <join-interchain :joinInterchain="joinInterchain" />
        <announcements :announcements="announcements" />
    </div>
</template>

<script>
    import KeyInnovations from '@theme/pages/home/components/KeyInnovations';
    import UpcomingFeature from '@theme/pages/home/components/UpcomingFeature';
    import JoinInterchain from '@theme/pages/home/components/JoinInterchain';
    import Announcements from '@theme/pages/home/components/Announcements';
    import { getModuleContent } from '@theme/utils';
    export default {
        name: 'Home',
        components: {
            KeyInnovations,
            UpcomingFeature,
            JoinInterchain,
            Announcements
        },
        computed: {
            keyInnovations() {
                return getModuleContent(this, 'keyInnovations');
            },
            upcoming() {
                return getModuleContent(this, 'upcoming');
            },
            joinInterchain() {
                return getModuleContent(this, 'joinInterchain');
            },
            announcements() {
                return getModuleContent(this, 'announcements');
            }
        }
    };
</script>

<style lang="less" scoped></style>
