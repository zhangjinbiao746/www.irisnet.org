<template>
    <div class="community_container">
        <div class="community_press_kit_content_wrap">
            <div class="community_press_kit_content">
                <h5 class="community_press_kit_title">{{$store.state.messages.communityPage.pressKitContent.title}}</h5>
                <p class="community_press_kit_download_title">{{$store.state.messages.communityPage.pressKitContent.downloadTitle}}</p>
                <p class="community_press_kit_download_btn">
                    <a :href="UrlSrc+$store.state.messages.communityPage.pressKitContent.downloadHref" class="community_download_content" :download="UrlSrc+$store.state.messages.communityPage.pressKitContent.downloadHref">
                        {{$store.state.messages.communityPage.pressKitContent.downloadBtn}}
                    </a>
                </p>
            </div>
        </div>
        <div class="community_color_content_wrap">
            <div class="community_color_content">
                <div class="community_color_title_content">
                    <span class="community_title">{{$store.state.messages.communityPage.ColorsContent.title}}</span>
                </div>
                <div class="community_color_list_content_wrap">
                    <ul class="community_color_list_content">
                        <li class="community_color_list_item"  v-for="item in $store.state.messages.communityPage.ColorsContent.colors"
                            :key="item.id" :style="{background: item.color}">
                            <span class="community_color">{{item.color}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="community_logo_content_wrap">
            <div class="community_logo_content">
                <div class="community_logo_title_content">
                    <span class="community_logo_title">{{$store.state.messages.communityPage.logoSizeContent.title}}</span>
                </div>
                <div class="community_logo_list_content_wrap">
                    <ul class="community_logo_list_content">
                        <li class="community_logo_list_item" v-for="item in $store.state.messages.communityPage.logoSizeContent.sizes">
                            {{item.size}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="community_standard_content_wrap">
            <div class="community_standard_content">
                <div class="community_standard_title_content">
                    <span class="community_standard_title">{{$store.state.messages.communityPage.Standard.title}}</span>
                </div>
                <div class="community_standard_list_content_wrap">
                    <ul class="community_standard_list_content">
                        <li class="community_standard_list_item" v-for="item in $store.state.messages.communityPage.Standard.StandardList">
                            <div class="community_standard_img_content">
                                <img :src="UrlSrc+item.imgUrl">
                            </div>
                            <p class="community_img_format_content">
                                <a :href="UrlSrc+item.pngUrl" :download="UrlSrc+item.pngUrl" class="community_png_img_download_content">
                                    <span class="community_png_img_format_title">{{item.pngTitle}}</span>
                                </a>
                                <a :href="UrlSrc+item.pngUrl" :download="UrlSrc+item.pngUrl" class="community_png_img_download_content">
                                    <span class="community_svg_img_format_title">{{item.svgTitle}}</span>
                                </a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="community_about_irisnet_wrap">
            <div class="community_about_irisnet_content">
                <div class="community_about_irisnet_title_content">
                    <span class="community_about_irisnet_title">{{$store.state.messages.communityPage.aboutIrisnet.title}}</span>
                </div>
                <div class="community_about_irisnet_list_content">
                    <p class="community_about_irisnet_list_item" v-for="content in $store.state.messages.communityPage.aboutIrisnet.content">{{content.item}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "Community",
        data () {
			return  {

            }
        }
	}
</script>

<style scoped lang="less">
    @import "../assets/style/community.less";
</style>