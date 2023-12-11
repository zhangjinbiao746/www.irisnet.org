<template>
    <div class="home">
        <home-banner :keyInnovations="keyInnovations" />
        <key-innovations :keyInnovations="keyInnovations" />
        <core-features :coreFeatures="coreFeatures" :upcoming="upcoming"/>
        <join-interchain :joinInterchain="joinInterchain" />
        <announcements :announcements="announcements" />
        <collaboration :collaboration="collaboration" />
    </div>
</template>

<script>
    import HomeBanner from '../home/components/HomeBanner.vue';
    import KeyInnovations from '../home/components/KeyInnovations.vue';
    import CoreFeatures from '../home/components/CoreFeatures.vue';
    import JoinInterchain from '../home/components/JoinInterchain.vue';
    import Announcements from '../home/components/Announcements.vue';
    import Collaboration from '../home/components/Collaboration.vue';
    import { getModuleContent } from '../../utils';
    export default {
        name: 'Home',
        components: {
            HomeBanner,
            KeyInnovations,
            CoreFeatures,
            JoinInterchain,
            Announcements,
            Collaboration
        },
        computed: {
            keyInnovations() {
                return getModuleContent(this, 'keyInnovations');
            },
            coreFeatures() {
                return getModuleContent(this, 'coreFeatures');
            },
            upcoming() {
                return getModuleContent(this, 'upcoming');
            },
            joinInterchain() {
                return getModuleContent(this, 'joinInterchain');
            },
            announcements() {
                return getModuleContent(this, 'announcements');
            },
            collaboration() {
                return getModuleContent(this, 'collaboration');
            }
        }
    };
</script>

<style lang="less" scoped>

</style>
