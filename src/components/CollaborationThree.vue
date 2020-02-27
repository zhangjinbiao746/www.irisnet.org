<template>
    <div class="collaboration_container">
        <div class="collaboration_common_wrap">
            <div class="collaboration_content_container collaboration_common_container">
                <p class="collaboration_common_title">
                    {{$store.state.messages.home.sectionFour.CoreDevelopmentTeams.title}}
                </p>
                <div class="collaboration_common_content">
                    <div class="collaboration_common_img_container right_border">
                        <img :src="$store.state.messages.home.sectionFour.CoreDevelopmentTeams.logos[0].path"
                             @click="toLinkUrl($store.state.messages.home.sectionFour.CoreDevelopmentTeams.logos[0].url)"
                             alt="" class="collaboration_img">
                    </div>
                    <div class="collaboration_common_img_container">
                        <img :src="$store.state.messages.home.sectionFour.CoreDevelopmentTeams.logos[1].path"
                             @click="toLinkUrl($store.state.messages.home.sectionFour.CoreDevelopmentTeams.logos[1].url)"
                             alt="" class="collaboration_img">
                    </div>
                </div>
            </div>
        </div>
        <div class="collaboration_common_wrap">
            <div class="collaboration_common_container">
                <p class="collaboration_common_title">
                    {{$store.state.messages.home.sectionFour.StrategicPartners.title}}
                </p>
                <div class="collaboration_common_content">
                    <div class="collaboration_common_img_container right_border">
                        <img :src="$store.state.messages.home.sectionFour.StrategicPartners.logos[0].path"
                             @click="toLinkUrl($store.state.messages.home.sectionFour.StrategicPartners.logos[0].url)"
                             alt="" class="collaboration_img">
                    </div>
                    <div class="collaboration_common_img_container">
                        <img :src="$store.state.messages.home.sectionFour.StrategicPartners.logos[1].path"
                             @click="toLinkUrl($store.state.messages.home.sectionFour.StrategicPartners.logos[1].url)"
                             alt="" class="collaboration_img">
                    </div>
                </div>
            </div>
        </div>
        <!--<div class="collaboration_common_wrap">
            <div class="collaboration_common_container">
                <p class="collaboration_common_title">
                    {{$store.state.messages.collaborationThree.ecosystem.title}}
                </p>
                <div class="collaboration_common_content">
                    <div class="collaboration_common_img_container right_border">
                        <img :src="$store.state.messages.collaborationThree.ecosystem.list[0].img"
                             @click="toLinkUrl($store.state.messages.collaborationThree.ecosystem.list[0].href)"
                             alt="" class="collaboration_img">
                    </div>
                    <div class="collaboration_common_img_container right_border">
                        <img :src="$store.state.messages.collaborationThree.ecosystem.list[1].img"
                             @click="toLinkUrl($store.state.messages.collaborationThree.ecosystem.list[1].href)"
                             alt="" class="collaboration_img">
                    </div>
                    <div class="collaboration_common_img_container">
                        <img :src="$store.state.messages.collaborationThree.ecosystem.list[2].img"
                             @click="toLinkUrl($store.state.messages.collaborationThree.ecosystem.list[2].href)"
                             alt="" class="collaboration_img">
                    </div>

                </div>
            </div>
        </div>-->
        <div class="collaboration_common_wrap">
            <div class="collaboration_common_container">
                <p class="collaboration_common_title">
                    {{$store.state.messages.home.sectionFour.EcosystemPartners.title}}
                </p>
                <div class="collaboration_common_content_wrap">
                    <div class="collaboration_common_img_container"
                         v-for="item in $store.state.messages.home.sectionFour.EcosystemPartners.logos">
                        <img :src="item.path"
                             @click="toLinkUrl(item.url)"
                             class="collaboration_img">
                    </div>
                </div>
            </div>
        </div>
        <div class="collaboration_common_wrap">
            <div class="collaboration_common_container">
                <p class="collaboration_common_title">
                    {{$store.state.messages.home.sectionFour.Institutional.title.msg1}}
                    <span class="collaboration_common_sub_title">
                   {{$store.state.messages.home.sectionFour.Institutional.title.msg2}}
                </span>
                </p>
                <div class="collaboration_common_content_wrap">
                    <div class="collaboration_common_img_container"
                         v-for="item in $store.state.messages.home.sectionFour.Institutional.logos">
                        <img :src="item.path"
                             @click="toLinkUrl(item.url)"
                             class="collaboration_img">
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>


    export default {
        name : "CollaborationThree",
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

    .collaboration_container {
        width: 100%;
        padding-top: 0.6rem;
        .collaboration_content_container {

        }
        .collaboration_common_wrap{
            width:100%;
            &:nth-child(odd) {
                background: #ffffff;
            }
            &:nth-child(even) {
                background: #F8F9FC;
            }
            .collaboration_common_container {
                max-width: 12rem;
                margin: 0 auto;
                .flexColumn;
                align-items: center;
                padding-top: 1rem;

                .collaboration_common_title {
                    margin-bottom: 0.8rem;
                    font-size: 0.28rem;
                    color: #263035;
                    .collaboration_common_sub_title{
                        color:#7C7D8D;
                    }
                }
                .collaboration_common_content {
                    height: 2rem;
                    .flexRow;
                    .collaboration_common_img_container {
                        padding: 0.65rem 0.46rem;
                        .collaboration_img {
                            width: 2rem;
                            height: 0.7rem;
                            cursor: pointer;
                        }
                    }

                }
                .collaboration_common_content_wrap{
                    flex-wrap:wrap;
                    .flexRow;
                    padding-bottom:1rem;
                    .collaboration_common_img_container {
                        padding: 0.65rem 0.46rem;
                        .collaboration_img {
                            width: 2rem;
                            height: 0.7rem;
                            cursor: pointer;
                        }
                    }
                }

            }
        }

    }


</style>