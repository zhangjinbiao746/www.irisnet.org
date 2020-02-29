<template>
    <div class="dev_portal_container">
        <div class="dev_portal_common_wrap wrap_top">
            <div class="dev_portal_content_container dev_portal_common_container">
                <div class="dev_portal_common_item_wrap">
                    <div class="dev_portal_common_item_container dev_portal_common_item_container_left ">
                        <p class="dev_portal_common_item_title">
                            {{$t('message.devPortal.first.title')}}
                        </p>
                        <span class="dev_portal_common_item_content link_url"
                              @click="toLinkUrl( $i18n.locale === 'EN' ? enMessage.devPortal.first.client.href : cnMessage.devPortal.first.client.href)">
                            {{$t('message.devPortal.first.client.title')}}
                        </span>
                        <span class="dev_portal_common_item_content link_url"
                              @click="toLinkUrl( $i18n.locale === 'EN' ? enMessage.devPortal.first.server.href : cnMessage.devPortal.first.server.href)">
                            {{$t('message.devPortal.first.server.title')}}
                        </span>
                    </div>
                    <div class="dev_portal_common_item_container">
                        <p class="dev_portal_common_item_title">
                            {{$t('message.devPortal.second.title')}}
                        </p>
                        <p class="dev_portal_common_item_sub_content">
                            {{$t('message.devPortal.second.content')}}
                        </p>
                        <span class="dev_portal_common_item_second_item">
                            {{$t('message.devPortal.second.define')}}
                        </span>
                        <span class="dev_portal_common_item_second_item">
                             {{$t('message.devPortal.second.bind')}}
                        </span>
                        <span class="dev_portal_common_item_second_item">
                            {{$t('message.devPortal.second.call')}}
                        </span>
                        <span class="dev_portal_common_item_second_more link_url"
                              @click="toLinkUrl( $i18n.locale === 'EN' ? enMessage.devPortal.second.moreLink : cnMessage.devPortal.second.moreLink)">
                            {{$t('message.devPortal.second.more')}}
                        </span>
                    </div>
                </div>
                <div class="dev_portal_common_item_wrap">
                    <div class="dev_portal_common_item_container dev_portal_common_item_container_left  bottom_container">
                        <p class="dev_portal_common_item_title">
                            {{$t('message.devPortal.third.title')}}
                        </p>
                        <span class="dev_portal_common_item_content link_url"
                              @click="toLinkUrl( $i18n.locale === 'EN' ?  enMessage.devPortal.third.monitor.href : cnMessage.devPortal.third.monitor.href)">
                            {{$t('message.devPortal.third.monitor.title')}}
                        </span>
                        <span class="dev_portal_common_item_content link_url"
                              @click="toLinkUrl( $i18n.locale === 'EN' ? enMessage.devPortal.third.management.href : cnMessage.devPortal.third.management.href)">
                            {{$t('message.devPortal.third.management.title')}}
                        </span>
                        <span class="dev_portal_common_item_content link_url"
                              @click="toLinkUrl( $i18n.locale === 'EN' ? enMessage.devPortal.third.support.href : cnMessage.devPortal.third.support.href)">
                            {{$t('message.devPortal.third.support.title')}}
                        </span>
                    </div>
                    <div class="dev_portal_common_item_container bottom_container">
                        <p class="dev_portal_common_item_title">

                            {{$t('message.devPortal.fourth.title')}}
                        </p>
                        <p class="dev_portal_common_item_sub_content">
                            {{$t('message.devPortal.fourth.advice')}}
                        </p>
                        <p class="dev_portal_common_item_sub_content">
                            {{$t('message.devPortal.fourth.reference')}}
                        </p>
                        <span class="dev_portal_common_item_second_more link_url"
                              @click="toLinkUrl(  $i18n.locale === 'EN' ? enMessage.devPortal.fourth.detailLink : cnMessage.devPortal.fourth.detailLink)">
                            {{$t('message.devPortal.fourth.detail')}}
                        </span>
                    </div>
                </div>

            </div>
        </div>
        <div class="dev_portal_common_wrap wrap_bottom">
            <div class="dev_portal_join_us">
                <span class="dev_portal_join_us_title">
                    {{$t('message.devPortal.join.title')}}
                </span>
                <div class="dev_portal_join_us_item_container">
                    <img :src=" $i18n.locale === 'EN' ? enMessage.devPortal.join.github.src : cnMessage.devPortal.join.github.src" class="dev_portal_join_us_item_img"
                         @click="toLinkUrl( $i18n.locale === 'EN' ? enMessage.devPortal.join.github.href : cnMessage.devPortal.join.github.href)">
                    <img :src="$i18n.locale === 'EN' ?  enMessage.devPortal.join.nyancat.src : cnMessage.devPortal.join.nyancat.src " class="dev_portal_join_us_item_img"
                         @click="toLinkUrl( $i18n.locale === 'EN' ? enMessage.devPortal.join.nyancat.href : cnMessage.devPortal.join.nyancat.href)">
                    <img :src="$i18n.locale === 'EN' ? enMessage.devPortal.join.qq.src : cnMessage.devPortal.join.qq.src " class="dev_portal_join_us_item_img"
                         @click="toLinkUrl( $i18n.locale === 'EN' ? enMessage.devPortal.join.qq.href : cnMessage.devPortal.join.qq.href)">
                    <img :src="$i18n.locale === 'EN' ? enMessage.devPortal.join.riot.src : cnMessage.devPortal.join.riot.src" class="dev_portal_join_us_item_img"
                         @click="toLinkUrl( $i18n.locale === 'EN' ? enMessage.devPortal.join.riot.href : cnMessage.devPortal.join.riot.href )">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import enMessage from "../assets/lang/en"
    import cnMessage from "../assets/lang/cn"
    export default {
        name : "DevPortalThree",
        data(){
            return {
                enMessage:enMessage,
                cnMessage:cnMessage,
                damonEnUrl:''
            }
        },
        computed : {},
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

    @media screen and (min-width: 769px) {
        .dev_portal_container{
            .dev_portal_common_wrap{
                .dev_portal_content_container{
                    min-width:10rem;
                    max-width:12rem;
                    .dev_portal_common_item_wrap{
                        .flexRow;
                        .dev_portal_common_item_container{
                            flex:1;
                        }
                        .dev_portal_common_item_container_left {
                            margin-right: 0.3rem;
                        }
                        .dev_portal_common_item_title {
                            font-size: 0.36rem;
                            margin-bottom: 0.5rem;
                        }
                        .dev_portal_common_item_content {
                            font-size: 0.22rem;
                        }
                        .dev_portal_common_item_sub_content {
                            font-size: 0.22rem;
                            line-height: 0.4rem;
                            margin-bottom: 0.4rem;
                        }
                        .dev_portal_common_item_second_item {
                            font-size: 0.22rem;
                        }
                        .dev_portal_common_item_second_more {
                            font-size: 0.18rem;
                        }
                    }
                }
                .dev_portal_join_us {
                    .dev_portal_join_us_title {
                        font-size: 0.36rem;
                    }
                }
            }


        }

    }
    @media screen and (max-width: 768px) and (min-width:768px){
        .dev_portal_container{
            .dev_portal_common_wrap{
                .dev_portal_content_container{
                    width:100%;
                    padding:0 1.24rem;
                    box-sizing:border-box;
                    .dev_portal_common_item_wrap{
                        .flexColumn;
                        width:100%;
                        .dev_portal_common_item_container{
                            width:100%;
                            &:first-child{
                                margin-bottom:0.3rem;
                            }
                            .dev_portal_common_item_title {
                                font-size: 0.36rem;
                                margin-bottom: 0.5rem;
                            }
                            .dev_portal_common_item_content {
                                font-size: 0.22rem;
                            }
                            .dev_portal_common_item_sub_content {
                                font-size: 0.22rem;
                                line-height: 0.4rem;
                                margin-bottom: 0.4rem;
                            }
                            .dev_portal_common_item_second_item {
                                font-size: 0.22rem;
                            }
                            .dev_portal_common_item_second_more {
                                font-size: 0.14rem;
                            }
                        }
                    }
                }
                .dev_portal_join_us {
                    .dev_portal_join_us_title {
                        font-size: 0.36rem;
                    }
                }
            }

        }

    }
    @media screen and (max-width: 767px)  and (min-width:375px){
        .dev_portal_container{
            .dev_portal_common_wrap{
                .dev_portal_content_container{
                    width:100%;
                    padding:0 0.15rem;
                    box-sizing:border-box;
                    .dev_portal_common_item_wrap{
                        .flexColumn;
                        width:100%;
                        .dev_portal_common_item_container{
                            width:100%;
                            &:first-child{
                                margin-bottom:0.3rem;
                            }
                            .dev_portal_common_item_title {
                                font-size: 0.18rem;
                                margin-bottom: 0.3rem;
                            }
                            .dev_portal_common_item_content {
                                font-size: 0.14rem;
                            }
                            .dev_portal_common_item_sub_content {
                                font-size: 0.14rem;
                                line-height: 0.4rem;
                                margin-bottom: 0.2rem;
                            }
                            .dev_portal_common_item_second_item {
                                font-size: 0.14rem;
                            }
                            .dev_portal_common_item_second_more {
                                font-size: 0.14rem;
                            }
                        }
                    }
                }
                .dev_portal_join_us {
                    .dev_portal_join_us_title {
                        font-size: 0.18rem;
                    }
                }
            }


        }

    }









    .dev_portal_container {
        width: 100%;
        padding-top: 0.8rem;
        .dev_portal_common_wrap {
            width: 100%;
            padding-bottom: 0.9rem;
            .flexRow;
            justify-content: center;
            .dev_portal_common_container {
                .flexColumn;
                align-items: center;
                padding-top: 1rem;
                .dev_portal_common_item_wrap {

                    &:first-child{
                        margin-bottom: 0.3rem;
                    }
                    .dev_portal_common_item_container {
                        border-radius: 4px;
                        border: 1px solid rgba(221, 221, 221, 1);
                        padding: 0.4rem;
                        box-sizing: border-box;
                        .flexColumn;
                        .dev_portal_common_item_title {
                            color: #263035;
                        }
                        .dev_portal_common_item_content {
                            margin-bottom: 0.25rem;
                        }
                        .dev_portal_common_item_sub_content {
                            color: #7C7D8D;
                            line-height: 0.4rem;

                        }
                        .dev_portal_common_item_second_item {
                            color: #263035;
                            margin-bottom: 0.2rem;
                        }
                        .dev_portal_common_item_second_more {
                            margin-top: 0.4rem;
                        }

                    }

                    .link_url {
                        color: #5E82F1;
                        cursor: pointer;
                    }

                }

            }
            .dev_portal_join_us {
                .flexColumn;
                align-items: center;
                padding-top: 1rem;
                .dev_portal_join_us_title {
                    color: #313236;
                    margin-bottom: 0.4rem;
                }
                .dev_portal_join_us_item_container {
                    .flexRow;
                    .dev_portal_join_us_item_img {
                        width: 0.36rem;
                        height: 0.36rem;
                        margin-right: 0.1rem;
                        cursor: pointer;
                    }
                }
            }
        }
        .wrap_top {
            background: #ffffff;
        }
        .wrap_bottom {
            background: #F8F9FC;
        }

    }


</style>