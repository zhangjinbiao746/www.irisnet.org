<template>
    <div class="home_container">
<!--        <HomeBanner></HomeBanner>-->
		<banner-component></banner-component>
        <white-paper-component />
        <core-features-component />
        <upcoming-feature-component />
        <join-interchain-component/>
        <roadmap-component />
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
	import BannerComponent from "./components/BannerComponent";
	export default {
		name: "home",
		components: {
			BannerComponent,
			RoadmapComponent,
			CollaborationComponent,
			AnnouncementsComponent,JoinInterchainComponent, UpcomingFeatureComponent, CoreFeaturesComponent, WhitePaperComponent}
	}
</script>

<style scoped lang="less">
	/*.home_container{
		padding-top: 0.6rem;
	}*/
</style>
