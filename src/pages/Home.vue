<template>
    <div class="home_container">
        <HomeBanner></HomeBanner>
        <!-- <swiper-component></swiper-component> -->
        <white-paper-component />
        <core-features-component />
        <upcoming-feature-component />
        <join-interchain-component/>
        <announcements-component />
        <collaboration-component />
    </div>
</template>

<script>
import WhitePaperComponent from "./components/WhitePaperComponent";
import CoreFeaturesComponent from "./components/CoreFeaturesComponent";
import UpcomingFeatureComponent from "./components/UpcomingFeatureComponent";
import AnnouncementsComponent from "./components/AnnouncementsComponent";
import CollaborationComponent from "./components/CollaborationComponent";
import RoadmapComponent from "./components/RoadmapComponent";
import JoinInterchainComponent from "./components/JoinInterchainComponent";
// import SwiperComponent from "./components/SwiperComponent";
import HomeBanner from "./components/HomeBanner";
export default {
    name: "home",
    components: {
        HomeBanner,
        // SwiperComponent,
        RoadmapComponent,
        CollaborationComponent,
        AnnouncementsComponent,
        UpcomingFeatureComponent,
        CoreFeaturesComponent,
        WhitePaperComponent,
        JoinInterchainComponent
    },
};
</script>

<style scoped lang="less">
.home_container {
    // padding-top: 0.6rem;
}
</style>
