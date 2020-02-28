<template>
    <div class="ecosystem_container">
        <div class="ecosystem_common_wrap">
            <div class="ecosystem_common_container">
                <div class="ecosystem_item_content_container">
                    <p class="ecosystem_item_content_title">
                        {{$store.state.messages.ecosystemThree.first.title}}
                    </p>
                    <p class="ecosystem_item_content_content" style="margin-bottom:0">
                        {{$store.state.messages.ecosystemThree.first.content}}
                    </p>

                    <div class="ecosystem_item_content_link_arrow_container">
                        <span class="ecosystem_item_content_link"
                              @click="$router.push({path: '/collaboration'})">
                            {{$store.state.messages.ecosystemThree.first.partner}}
                        </span>
                    </div>
                </div>
                <div class="ecosystem_item_img_container">
                    <img :src="$store.state.messages.ecosystemThree.first.img"
                         class="ecosystem_item_img first_img">
                </div>
            </div>
        </div>
        <div class="ecosystem_common_wrap">
            <div class="ecosystem_common_container ecosystem_common_container_second">
                <div class="ecosystem_item_img_container second_img1_display">
                    <img :src="$store.state.messages.ecosystemThree.second.img"
                         class="ecosystem_item_img second_img">
                </div>
                <div class="ecosystem_item_content_container">
                    <p class="ecosystem_item_content_title">
                        {{$store.state.messages.ecosystemThree.second.title}}
                    </p>
                    <p class="ecosystem_item_content_content">
                        {{$store.state.messages.ecosystemThree.second.content1}}
                    </p>
                    <p class="ecosystem_item_content_content">
                        {{$store.state.messages.ecosystemThree.second.content2}}
                    </p>
                    <p class="ecosystem_item_content_content">
                        {{$store.state.messages.ecosystemThree.second.content3}}
                    </p>
                    <div class="ecosystem_item_content_link_wrap"
                         v-if="$store.state.lang === 'CN'">
                        <div class="ecosystem_item_content_sub_container">
                            <span class="ecosystem_item_content_sub_content">
                                {{$store.state.messages.ecosystemThree.second.link1}}
                            </span>
                            <span class="ecosystem_item_content_sub_link"
                                  @click="toLinkUrl($store.state.messages.ecosystemThree.second.rainbowLink)">
                                {{$store.state.messages.ecosystemThree.second.link2}}
                            </span>
                        </div>
                        <span class="ecosystem_item_content_sub_content">
                            {{$store.state.messages.ecosystemThree.second.link3}}
                        </span>
                        <span class="ecosystem_item_content_sub_link"
                              @click="toLinkUrl($store.state.messages.ecosystemThree.second.cosmosLink)">
                            {{$store.state.messages.ecosystemThree.second.link4}}
                        </span>
                    </div>
                    <div class="ecosystem_item_content_link_wrap"
                         v-else>
                        <span class="ecosystem_item_content_sub_content">
                            {{$store.state.messages.ecosystemThree.second.link1}}
                        </span>
                        <span class="ecosystem_item_content_sub_link"
                              @click="toLinkUrl($store.state.messages.ecosystemThree.second.cosmosLink)">
                            {{$store.state.messages.ecosystemThree.second.link2}}
                        </span>
                        <div class="ecosystem_item_content_sub_container">
                            <span class="ecosystem_item_content_sub_content">
                                {{$store.state.messages.ecosystemThree.second.link3}}
                            </span>
                            <span class="ecosystem_item_content_sub_link"
                                  @click="toLinkUrl($store.state.messages.ecosystemThree.second.rainbowLink)">
                                {{$store.state.messages.ecosystemThree.second.link4}}
                            </span>
                        </div>
                    </div>
                    <div class="ecosystem_item_content_link_arrow_container">
                        <span class="ecosystem_item_content_link"
                              @click="$router.push({path: '/irisnet-bianjie'})">
                            {{$store.state.messages.ecosystemThree.second.more}}
                        </span>
                        <img src="../assets/arrow_right_icon.png"
                             class="ecosystem_item_content_link_arrow">
                    </div>

                </div>
                <div class="ecosystem_item_img_container second_img2_display">
                    <img :src="$store.state.messages.ecosystemThree.second.img"
                         class="ecosystem_item_img second_img">
                </div>
            </div>
        </div>
        <div class="ecosystem_common_wrap">
            <div class="ecosystem_common_container">
                <div class="ecosystem_item_content_container">
                    <p class="ecosystem_item_content_title">
                        {{$store.state.messages.ecosystemThree.third.title}}
                    </p>
                    <p class="ecosystem_item_content_content" style="margin-bottom:0">
                        {{$store.state.messages.ecosystemThree.third.content}}
                    </p>

                    <div class="ecosystem_item_content_link_arrow_container">
                        <span class="ecosystem_item_content_link"
                              @click="toLinkUrl($store.state.messages.ecosystemThree.third.detailLink)">
                            {{$store.state.messages.ecosystemThree.third.details}}
                        </span>
                        <img src="../assets/arrow_right_icon.png"
                             class="ecosystem_item_content_link_arrow">
                    </div>
                </div>
                <div class="ecosystem_item_img_container">
                    <img :src="$store.state.messages.ecosystemThree.third.img"
                         class="ecosystem_item_img third_img">
                </div>
            </div>
        </div>
        <div class="ecosystem_common_wrap">
            <div class="ecosystem_common_container ecosystem_common_container_fourth">
                <div class="ecosystem_item_img_container fourth_img1_display">
                    <img :src="$store.state.messages.ecosystemThree.fourth.img"
                         class="ecosystem_item_img fourth_img">
                </div>
                <div class="ecosystem_item_content_container">
                    <p class="ecosystem_item_content_title">
                        {{$store.state.messages.ecosystemThree.fourth.title}}
                    </p>
                    <p class="ecosystem_item_content_content" style="margin-bottom:0">
                        {{$store.state.messages.ecosystemThree.fourth.content}}
                    </p>
                    <div class="ecosystem_item_content_link_arrow_container">
                        <span class="ecosystem_item_content_link"
                              @click="toLinkUrl($store.state.messages.ecosystemThree.fourth.detailLink)">
                            {{$store.state.messages.ecosystemThree.fourth.details}}
                        </span>
                        <img src="../assets/arrow_right_icon.png"
                             class="ecosystem_item_content_link_arrow">
                    </div>
                </div>
                <div class="ecosystem_item_img_container fourth_img2_display">
                    <img :src="$store.state.messages.ecosystemThree.fourth.img"
                         class="ecosystem_item_img fourth_img">
                </div>
            </div>
        </div>
        <div class="ecosystem_common_wrap">
            <div class="ecosystem_common_container">
                <div class="ecosystem_item_content_container">
                    <p class="ecosystem_item_content_title">
                        {{$store.state.messages.ecosystemThree.fifth.title}}
                    </p>
                    <p class="ecosystem_item_content_content" style="margin-bottom:0"
                       v-if="$store.state.lang === 'CN'">
                        {{$store.state.messages.ecosystemThree.fifth.content1}}
                        <span class="ecosystem_item_content_link"
                              @click="toLinkUrl($store.state.messages.ecosystemThree.fifth.tendermintLink)">
                            {{$store.state.messages.ecosystemThree.fifth.content2}}
                        </span>
                        {{$store.state.messages.ecosystemThree.fifth.content3}}
                        <span class="ecosystem_item_content_link"
                              @click="toLinkUrl($store.state.messages.ecosystemThree.fifth.sdkLink)">
                            {{$store.state.messages.ecosystemThree.fifth.content4}}
                        </span>
                        {{$store.state.messages.ecosystemThree.fifth.content5}}
                    </p>
                    <p class="ecosystem_item_content_content" style="margin-bottom:0"
                       v-else>
                        {{$store.state.messages.ecosystemThree.fifth.content1}}
                        <span class="ecosystem_item_content_link"
                              @click="toLinkUrl($store.state.messages.ecosystemThree.fifth.tendermintLink)">
                            {{$store.state.messages.ecosystemThree.fifth.content2}}
                        </span>
                        {{$store.state.messages.ecosystemThree.fifth.content3}}
                        <span class="ecosystem_item_content_link"
                              @click="toLinkUrl($store.state.messages.ecosystemThree.fifth.sdkLink)">
                            {{$store.state.messages.ecosystemThree.fifth.content4}}
                        </span>
                        {{$store.state.messages.ecosystemThree.fifth.content5}}
                    </p>

                    <div class="ecosystem_item_content_link_arrow_container">
                        <span class="ecosystem_item_content_link"
                              @click="toLinkUrl($store.state.messages.ecosystemThree.fifth.detailLink)">
                            {{$store.state.messages.ecosystemThree.fifth.details}}
                        </span>
                        <img src="../assets/arrow_right_icon.png"
                             class="ecosystem_item_content_link_arrow">
                    </div>

                </div>
                <div class="ecosystem_item_img_container">
                    <img :src="$store.state.messages.ecosystemThree.fifth.img"
                         class="ecosystem_item_img fifth_img">
                </div>
            </div>
        </div>
        <div class="ecosystem_common_wrap">
            <div class="ecosystem_common_container">
                <div class="ecosystem_item_img_container">
                </div>
                <div class="ecosystem_item_content_container">
                    <p class="ecosystem_item_content_title">
                        {{$store.state.messages.ecosystemThree.brand.title}}
                    </p>
                    <p class="ecosystem_item_content_content" style="margin-bottom:0">
                        {{$store.state.messages.ecosystemThree.brand.content}}
                    </p>
                    <div class="ecosystem_item_content_link_arrow_container">
                        <span class="ecosystem_item_content_link"
                              @click="toLinkUrl($store.state.messages.ecosystemThree.brand.detailLink)">
                            {{$store.state.messages.ecosystemThree.brand.details}}
                        </span>
                        <img src="../assets/arrow_right_icon.png"
                             class="ecosystem_item_content_link_arrow">
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>


    export default {
        name : "EcosystemThree",
        data(){
            return {}
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

    .ecosystem_container {
        width: 100%;
        padding-top: 0.6rem;
        .ecosystem_common_wrap {
            width: 100%;
            &:nth-child(odd) {
                background: #ffffff;
            }
            &:nth-child(even) {
                background: #F8F9FC;
            }
            .ecosystem_common_container {
                max-width: 12rem;
                margin: 0 auto;
                .flexRow;
                align-items: center;
                padding: 1rem 0;
                .second_img1_display{
                    display: block !important;
                }
                .second_img2_display{
                    display: none !important;
                }
                .fourth_img1_display{
                    display: block !important;
                }
                .fourth_img2_display{
                    display: none !important;
                }
                .ecosystem_item_content_container {
                    .flexColumn;
                    flex: 1;
                    margin:0 0.15rem;
                    .ecosystem_item_content_title {
                        color: #313236;
                        margin-bottom: 0.4rem;
                        font-size: 0.36rem;
                    }
                    .ecosystem_item_content_content {
                        color: #7C7D8D;
                        line-height: 0.4rem;
                        font-size: 0.22rem;
                        margin-bottom: 0.2rem;
                    }

                    .ecosystem_item_content_link_arrow_container {
                        .flexRow;
                        align-items: center;
                        margin-top: 0.2rem;
                        .ecosystem_item_content_link {
                            cursor: pointer;
                            color: #5E82F1;
                            font-size: 0.22rem;
                            margin-right: 0.05rem;

                        }
                        .ecosystem_item_content_link_arrow {
                            width: 0.06rem;
                            height: 0.12rem;
                        }
                    }

                    .ecosystem_item_content_link_wrap {
                        .flexColumn;
                        .ecosystem_item_content_sub_content {
                            color: #7C7D8D;
                            line-height: 0.4rem;
                            font-size: 0.22rem;
                        }
                        .ecosystem_item_content_sub_link {
                            cursor: pointer;
                            color: #5E82F1;
                            font-size: 0.22rem;
                            line-height: 1.8;
                            word-break: break-all;
                        }
                        .ecosystem_item_content_sub_container {
                            .flexRow;
                            align-items: center;
                            .ecosystem_item_content_sub_content {
                                margin-right: 0.03rem;
                            }
                        }
                    }

                }
                .ecosystem_item_img_container {
                    flex: 1;
                    .flexRow;
                    justify-content: center;
                    .ecosystem_item_img {
                        margin: 0 0.15rem;
                    }
                    .first_img {
                        width: 2.5rem;
                        height: 2.5rem;
                    }
                    .second_img {
                        width: 5.21rem;
                        height: 2.55rem;
                    }
                    .third_img {
                        width: 2.2rem;
                        height: 2.54rem;
                    }
                    .fourth_img {
                        width: 5.4rem;
                        height: 2.8rem;
                    }
                    .fifth_img {
                        width: 2.5rem;
                        height: 2.5rem;
                    }

                }

            }
        }

    }

@media screen and (min-width: 768px) and (max-width: 1200px){
    .ecosystem_container {
        .ecosystem_common_wrap {
            
            .ecosystem_common_container {
                .ecosystem_item_content_container {
                    
                    .ecosystem_item_content_link_arrow_container {
                    }
                    .ecosystem_item_content_link_wrap {

                    }
                }
                .ecosystem_item_img_container {
                    
                }
            }
        }
    }
}

@media screen and (max-width: 1010px){
    .ecosystem_container {
        .ecosystem_common_wrap {
    
            .ecosystem_common_container {
                .second_img1_display{
                    display: none !important;
                }
                .second_img2_display{
                    display: block !important;
                }
                .fourth_img1_display{
                    display: none !important;
                }
                .fourth_img2_display{
                    display: block !important;
                }
                .ecosystem_item_content_container {
                    .ecosystem_item_content_link_arrow_container {
                        margin-bottom:0.6rem;
                    }
                    .ecosystem_item_content_link_wrap {
                    }
                }
                .ecosystem_item_img_container {
                }
            }
            .ecosystem_common_container_second{
                .flexColumn;
            }
            .ecosystem_common_container_fourth{
                .flexColumn;
            }
        }
    }
}

@media screen and (min-width: 375px) and (max-width: 768px){
    .ecosystem_container {
        .ecosystem_common_wrap {
            .ecosystem_common_container {
                padding: 0.5rem 0;
                .flexColumn;
                .ecosystem_item_content_container {
                    max-width:5.12rem;
                    .ecosystem_item_content_link_arrow_container {
                        margin-bottom:0.6rem;
                    }
                    .ecosystem_item_content_link_wrap {
                    }
                }
                .ecosystem_item_img_container {
                    .second_img {
                        width: 5.20rem;
                        height: 2.7rem;
                    }
                    .fourth_img {
                        width: 5.4rem;
                        height: 2.8rem;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 550px){
    .ecosystem_container {
        .ecosystem_common_wrap {
            
            .ecosystem_common_container {
                .ecosystem_item_content_container {
                    .ecosystem_item_content_link_arrow_container {
                    }
                    .ecosystem_item_content_link_wrap {
                    }
                }
                .ecosystem_item_img_container {
                    .second_img {
                        width: 3.34rem;
                        height: 1.16rem;
                    }
                    .fourth_img {
                        width: 3.45rem;
                        height: 1.79rem;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 375px){
    .ecosystem_container {
        .ecosystem_common_wrap {
            
            .ecosystem_common_container {
                .flexColumn;
                .ecosystem_item_content_container {
                    max-width:3.45rem;
                    .ecosystem_item_content_link_arrow_container {
                        margin-bottom:0.4rem;
                    }
                    .ecosystem_item_content_link_wrap {
                    }
                }
                .ecosystem_item_img_container {
                    .second_img {
                        width: 3.34rem;
                        height: 1.16rem;
                    }
                    .fourth_img {
                        width: 3.45rem;
                        height: 1.79rem;
                    }
                }
            }
        }
    }
}
</style>