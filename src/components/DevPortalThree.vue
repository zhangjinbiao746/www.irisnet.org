<template>
    <div class="dev_portal_container">
        <div class="dev_portal_common_wrap wrap_top">
            <div class="dev_portal_content_container dev_portal_common_container">
                <div class="dev_portal_common_item_wrap">
                    <div class="dev_portal_common_item_container dev_portal_common_item_container_left ">
                        <p class="dev_portal_common_item_title">
                            {{$store.state.messages.devPortal.first.title}}
                        </p>
                        <span class="dev_portal_common_item_content link_url"
                              @click="toLinkUrl($store.state.messages.devPortal.first.damon.href)">
                            {{$store.state.messages.devPortal.first.damon.title}}
                        </span>
                        <span class="dev_portal_common_item_content link_url"
                              @click="toLinkUrl($store.state.messages.devPortal.first.client.href)">
                            {{$store.state.messages.devPortal.first.client.title}}
                        </span>
                        <span class="dev_portal_common_item_content link_url"
                              @click="toLinkUrl($store.state.messages.devPortal.first.server.href)">
                            {{$store.state.messages.devPortal.first.server.title}}
                        </span>
                    </div>
                    <div class="dev_portal_common_item_container">
                        <p class="dev_portal_common_item_title">
                            {{$store.state.messages.devPortal.second.title}}
                        </p>
                        <p class="dev_portal_common_item_sub_content">
                            {{$store.state.messages.devPortal.second.content}}
                        </p>
                        <span class="dev_portal_common_item_second_item">
                             {{$store.state.messages.devPortal.second.define}}
                        </span>
                        <span class="dev_portal_common_item_second_item">
                             {{$store.state.messages.devPortal.second.bind}}
                        </span>
                        <span class="dev_portal_common_item_second_item">
                             {{$store.state.messages.devPortal.second.call}}
                        </span>
                        <span class="dev_portal_common_item_second_more link_url"
                              @click="toLinkUrl($store.state.messages.devPortal.second.moreLink)">
                            {{$store.state.messages.devPortal.second.more}}
                        </span>
                    </div>
                </div>
                <div class="dev_portal_common_item_wrap">
                    <div class="dev_portal_common_item_container dev_portal_common_item_container_left  bottom_container">
                        <p class="dev_portal_common_item_title">
                            {{$store.state.messages.devPortal.third.title}}
                        </p>
                        <span class="dev_portal_common_item_content link_url"
                              @click="toLinkUrl($store.state.messages.devPortal.third.monitor.href)">
                            {{$store.state.messages.devPortal.third.monitor.title}}
                        </span>
                        <span class="dev_portal_common_item_content link_url"
                              @click="toLinkUrl($store.state.messages.devPortal.third.management.href)">
                            {{$store.state.messages.devPortal.third.management.title}}
                        </span>
                        <span class="dev_portal_common_item_content link_url"
                              @click="toLinkUrl($store.state.messages.devPortal.third.support.href)">
                            {{$store.state.messages.devPortal.third.support.title}}
                        </span>
                    </div>
                    <div class="dev_portal_common_item_container bottom_container">
                        <p class="dev_portal_common_item_title">
                            {{$store.state.messages.devPortal.fourth.title}}
                        </p>
                        <p class="dev_portal_common_item_sub_content">
                            {{$store.state.messages.devPortal.fourth.advice}}
                        </p>
                        <p class="dev_portal_common_item_sub_content">
                            {{$store.state.messages.devPortal.fourth.reference}}
                        </p>
                        <span class="dev_portal_common_item_second_more link_url"
                              @click="toLinkUrl($store.state.messages.devPortal.fourth.detailLink)">
                            {{$store.state.messages.devPortal.fourth.detail}}
                        </span>
                    </div>
                </div>

            </div>
        </div>
        <div class="dev_portal_common_wrap wrap_bottom">
            <div class="dev_portal_join_us">
                <span class="dev_portal_join_us_title">
                    {{$store.state.messages.devPortal.join.title}}
                </span>
                <div class="dev_portal_join_us_item_container">
                    <img :src="$store.state.messages.devPortal.join.github.src" class="dev_portal_join_us_item_img"
                         @click="toLinkUrl($store.state.messages.devPortal.join.github.href)">
                    <img :src="$store.state.messages.devPortal.join.nyancat.src" class="dev_portal_join_us_item_img"
                         @click="toLinkUrl($store.state.messages.devPortal.join.nyancat.href)">
                    <img :src="$store.state.messages.devPortal.join.qq.src" class="dev_portal_join_us_item_img"
                         @click="toLinkUrl($store.state.messages.devPortal.join.qq.href)">
                    <img :src="$store.state.messages.devPortal.join.riot.src" class="dev_portal_join_us_item_img"
                         @click="toLinkUrl($store.state.messages.devPortal.join.riot.href)">
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name : "DevPortalThree",
        data(){
            return{

            }
        },
        computed : {

        },
        mounted(){

        },
        methods : {
            toLinkUrl(url){
                window.open(url);
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../style/mixin.less';

    .dev_portal_container {
        width: 100%;
        padding-top: 0.6rem;
        .dev_portal_common_wrap{
            width:100%;
            padding-bottom:0.9rem;
            .dev_portal_common_container {
                max-width: 12rem;
                margin: 0 auto;
                .flexColumn;
                align-items: center;
                padding-top: 1rem;
                .dev_portal_common_item_wrap{
                    .flexRow;
                    margin-bottom:0.3rem;
                    .dev_portal_common_item_container{
                        height:5.8rem;
                        width:5.85rem;
                        border-radius:4px;
                        border:1px solid rgba(221,221,221,1);
                        padding:0.4rem;
                        box-sizing:border-box;
                        .flexColumn;
                        .dev_portal_common_item_title{
                            color:#263035;
                            font-size:0.36rem;
                            margin-bottom:0.5rem;
                        }
                        .dev_portal_common_item_content{
                            font-size:0.22rem;
                            margin-bottom:0.25rem;
                        }
                        .dev_portal_common_item_sub_content{
                            color:#7C7D8D;
                            font-size:0.22rem;
                            margin-bottom:0.4rem;
                            line-height:0.4rem;

                        }
                        .dev_portal_common_item_second_item{
                            color:#263035;
                            font-size:0.22rem;
                            margin-bottom:0.2rem;
                        }
                        .dev_portal_common_item_second_more{
                            margin-top:0.4rem;
                        }


                    }
                    .bottom_container{
                        height:4.8rem;
                    }
                    .dev_portal_common_item_container_left{
                        margin-right:0.3rem;
                    }
                    .link_url{
                        color:#5E82F1;
                        cursor:pointer;
                    }

                }



            }
            .dev_portal_join_us{
                .flexColumn;
                align-items: center;
                padding-top:1rem;
                .dev_portal_join_us_title{
                    color:#313236;
                    font-size:0.36rem;
                    margin-bottom:0.4rem;
                }
                .dev_portal_join_us_item_container{
                    .flexRow;
                    .dev_portal_join_us_item_img{
                        width:0.36rem;
                        height:0.36rem;
                        margin-right:0.1rem;
                        cursor: pointer;
                    }
                }
            }
        }
        .wrap_top{
            background: #ffffff;
        }
        .wrap_bottom{
            background: #F8F9FC;
        }


    }


</style>