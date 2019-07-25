<template>
    <div class="community_page_container">
        <div class="community_page_title_container">
            <div class="community_page_title_wrap">
                <span class="community_page_title">{{$store.state.messages.communityPage.title}}</span>
            </div>
        </div>
        <div class="community_events_container" v-if="$store.state.messages.communityPage.events.left.length > 0">
            <div class="community_events_wrap">
                <h1 class="community_events_title">{{$store.state.messages.communityPage.eventsTitle}}</h1>
                <div class="community_events_list_container">
                    <div class="community_events_left_content">
                        <div class="community_events_item" v-if="$store.state.messages.communityPage.events.left.length > 0" v-for="item in $store.state.messages.communityPage.events.left">
                            <a :href="item.href ? item.href : ''" target="_blank" :style="{cursor: item.href === 'javascript:void(0);' ? 'auto' : 'pointer'}">
                                <div class="community_events_item_content">
                                    <img :src="UrlSrc + item.img">
                                    <p class="community_events_timestamp"><span v-show="item.address">{{item.address}}</span> <span>{{item.timestamp}}</span></p>
                                    <p class="community_item_content">{{item.title}}</p>
                                </div>
                            </a>
                            <p class="community_sign_up_content" v-if="item.signUp">
                                <a :href="item.signUpUrl" class="sign_up_link" target="_blank">{{item.signUp}} <i class="triangle"></i></a>
                            </p>
                        </div>
                    </div>
                    <div class="community_events_right_content">
                        <div class="community_events_item" v-for="item in $store.state.messages.communityPage.events.right">
                            <a :href="item.href" target="_blank" :style="{cursor: item.href === 'javascript:void(0);' ? 'auto' : 'pointer'}">
                                <div class="community_events_item_content">
                                    <img :src="UrlSrc + item.img">
                                    <p class="community_events_timestamp"><span v-show="item.address">{{item.address}}</span> <span>{{item.timestamp}}</span></p>
                                    <p class="community_item_content">{{item.title}}</p>
                                </div>
                            </a>
                            <p class="community_sign_up_content">
                                <a :href="item.viewMoreUrl" class="sign_up_link" v-if="item.viewMore" target="_blank">{{item.viewMore}} <i class="triangle"></i></a>
                                <a :href="item.signUpUrl" class="sign_up_link" v-if="item.signUp" target="_blank">{{item.signUp}} <i class="triangle"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="community_faq_container">
            <div class="community_faq_wrap">
                <h1 class="community_title">{{$store.state.messages.communityPage.faq.faqTitle}}</h1>
                <div class="community_faq_content">
                    <div class="community_img_list_wrap">
                        <div class="community_img_content">
                            <img :src="UrlSrc + $store.state.messages.communityPage.faq.faqImg">
                        </div>
                        <div class="community_faq_list_content">
                            <!--<div class="community_faq_title">{{$store.state.messages.communityPage.faq.faqList.title}}</div>-->
                            <p class="community_faq_list_item_content" v-for="item in $store.state.messages.communityPage.faq.faqList.list">
                                {{item.item}}
                            </p>
                            <div class="view_more_content">
                                <a :href="$store.state.messages.communityPage.faq.faqList.viewMoreLink" target="_blank">{{$store.state.messages.communityPage.faq.faqList.viewMore}} <i class="triangle"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="community_ama_content">
                    <h3 class="community_title">{{$store.state.messages.communityPage.faq.ama.title}}</h3>
                    <div class="community_list_container">
                        <div class="community_list_content" v-if="$store.state.messages.communityPage.faq.ama.leftList.length > 0">
                            <div class="community_list_wrap" v-for="item in $store.state.messages.communityPage.faq.ama.leftList">
                                <a :href="item.href" target="_blank" style="display: inline-block" :style="{cursor: item.href === 'javascript:void(0)' ? 'inherit' : 'pointer'}">
                                    <div class="community_item_content">
                                        <img class="community_img" :src="UrlSrc + item.img">
                                        <p class="community_ama_list_item_title">{{item.title}}</p>
                                        <p class="community_ama_list_item_content">{{item.content}}</p>
                                    </div>
                                    <div class="community_right_triangle">
                                        <div class="right_triangle"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="community_list_content" v-if="$store.state.messages.communityPage.faq.ama.rightList && $store.state.messages.communityPage.faq.ama.rightList.length > 0">
                            <div class="community_list_wrap" v-for="item in $store.state.messages.communityPage.faq.ama.rightList">
                                <a :href="item.href" target="_blank" style="display: inline-block">
                                    <div class="community_item_content">
                                        <img class="community_img" :src="UrlSrc + item.img">
                                        <p class="community_ama_list_item_title">{{item.title}}</p>
                                        <p class="community_ama_list_item_content">{{item.content}}</p>
                                    </div>
                                    <div class="community_right_triangle">
                                        <div class="right_triangle"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="community_resources_container">
            <div class="community_resources_wrap">
                <h2 class="community_resources_title">{{$store.state.messages.communityPage.resources.title}}</h2>
                <div class="community_resources_list_content">
                     <div class="community_list_item_content" v-for="item in $store.state.messages.communityPage.resources.ResourceList">
                         <div class="community_list_logo_content">
                             <img :src="UrlSrc + item.img" alt="">
                             <span class="logo_name">{{item.name}}</span>
                         </div>
                         <div class="community_resource_item_content">
                             <div class="community_item_top_container" v-if="item.resourceList">
                                 <div class="community_item_top_content" v-for="value in item.resourceList">
                                     <a :href="value.href" target="_blank"><span>{{value.itemName}}</span></a> <span class="os_content">{{value.os}}</span>
                                 </div>
                             </div>
                             <div class="community_item_bottom_content" :class="item.href !=='javascript:void(0);' ? 'hover_style' : ''"><a :href="item.href" target="_blank">{{item.content}}</a></div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "communityPage",
        data () {
			return {

            }
        }
	}
</script>

<style scoped lang="less">
    @import "../assets/style/community_page";
</style>
