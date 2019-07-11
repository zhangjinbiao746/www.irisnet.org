<template>
    <div class="events_review_list">
        <div class="events_review_container">
            <div class="events_review_title_wrap">
                <h1 class="events_review_title">{{$store.state.messages.communityPage.pastEvents.title}}
                    <p class="event_review_subheading">{{$store.state.messages.communityPage.pastEvents.subheading}}</p>
                </h1>
            </div>
        </div>
        <div class="events_review_list_container">
            <div class="events_review_last_list_wrap">
                <div class="events_reviews_last_title_wrap">
                   <h1 class="events_reviews_last_title">{{$store.state.messages.communityPage.pastEvents.currentDate}}</h1>
                </div>
                <div class="events_reviews_last_list_container">
                    <ul class="events_review_list_content">
                        <li class="events_review_list_item" v-for="event in $store.state.messages.communityPage.pastEvents.imgList">
                            <a :href="event.href" class="events_review_list_item_content" target="_blank">
                                <img :src="UrlSrc + event.img" alt="" class="event_img">
                                <p class="event_title"><span class="event_address" v-if="event.address">{{event.address}}</span><span>{{event.timestamp}}</span></p>
                                <p class="event_content">{{event.title}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="events_review_past_list_container" v-if="$store.state.messages.communityPage.pastEvents.list">
            <div class="events_review_past_list_wrap">
                <div class="events_reviews_past_list_title_wrap">
                    <h1 class="events_reviews_past_list_title">{{$store.state.messages.communityPage.pastEvents.pastListTitle}}</h1>
                </div>
                <div class="events_reviews_past_list_container">
                    <ul class="events_reviews_past_list_content">
                        <li class="events_reviews_past_list_item" v-for="item in $store.state.messages.communityPage.pastEvents.list">
                            <a :href="item.href" class="past_list_item_link_content" target="_blank">
                                <div class="past_list_item">
                                    <div class="past_list_left_content">
                                        <span class="past_list_timestamp">{{item.timestamp}}</span>
                                        <span class="past_list_address">{{item.address}}</span>
                                    </div>
                                    <div class="past_list_right_content">
                                        <span class="past_list_title">{{item.title}}</span>
                                        <span class="past_list_type"><span v-if="item.type">{{item.type}}</span></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="events_review_past_list_container" v-if="$store.state.messages.communityPage.pastEvents.pastListTwoList">
            <div class="events_review_past_list_wrap">
                <div class="events_reviews_past_list_title_wrap">
                    <h1 class="events_reviews_past_list_title">{{$store.state.messages.communityPage.pastEvents.pastListTwoTitle}}</h1>
                </div>
                <div class="events_reviews_past_list_container">
                    <ul class="events_reviews_past_list_content">
                        <li class="events_reviews_past_list_item" v-for="item in $store.state.messages.communityPage.pastEvents.pastListTwoList">
                            <a :href="item.href" class="past_list_item_link_content" target="_blank">
                                <div class="past_list_item">
                                    <div class="past_list_left_content">
                                        <span class="past_list_timestamp" :class="item.address ? 'line' : ''">{{item.timestamp}}</span>
                                        <span class="past_list_address">{{item.address}}</span>
                                    </div>
                                    <div class="past_list_right_content">
                                        <span class="past_list_title">{{item.title}}</span>
                                        <span class="past_list_type"><span v-if="item.type">{{item.type}}</span></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "EventsReview",
        data () {
            return {

            }
        }
	}
</script>

<style scoped lang="less">
@import "../assets/style/events_reviews_list";
</style>