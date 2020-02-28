<template>
    <div class="collaboration_container">
        <div class="collaboration_common_wrap">
            <div class="collaboration_content_container collaboration_common_container">
                <p class="collaboration_common_title">
                    {{$store.state.messages.home.sectionFour.CoreDevelopmentTeams.title}}
                </p>
                <div class="collaboration_common_content">
                    <div class="collaboration_common_img_container"
                         :class="deviceType === 'phone' ? 'bottom_border' : 'right_border'">
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
                    <div class="collaboration_common_img_container"
                         :class="deviceType === 'phone' ? 'bottom_border' : 'right_border'">
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
        <div class="collaboration_common_wrap">
            <div class="collaboration_common_container">
                <p class="collaboration_common_title">
                    {{$store.state.messages.home.sectionFour.EcosystemPartners.title}}
                </p>
                <div class="collaboration_common_content_wrap">
                    <div class="collaboration_common_img_container"
                         :class="deviceType === 'phone' ? 'bottom_border' : ''"
                         :style="`visibility:${item.path ? 'visible' : 'hidden'}`"
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
                         :class="deviceType === 'phone' ? 'bottom_border' : ''"
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
                deviceType:'pc',
            }
        },
        computed : {

        },
        mounted(){
            setTimeout(()=>{
                if(innerWidth >= 375 && innerWidth < 768){
                    this.deviceType = 'phone'
                }else if(innerWidth === 768){
                    this.deviceType = 'pad'
                }else{
                    this.deviceType = 'pc'
                }
            },300)
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
        padding-top: 0.8rem;
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
                .collaboration_common_title {
                    font-size: 0.28rem;
                    color: #263035;
                    .collaboration_common_sub_title{
                        color:#7C7D8D;
                    }
                }

                .collaboration_common_content {

                    .collaboration_common_img_container {
                        .collaboration_img {
                            width: 2rem;
                            height: 0.7rem;
                            cursor: pointer;
                        }
                        &:last-child{
                            border:none;
                        }
                    }

                }
                .collaboration_common_content_wrap{
                    flex-wrap:wrap;
                    .flexRow;
                    padding-bottom:1rem;
                    .collaboration_common_img_container {
                        .collaboration_img {
                            width: 2rem;
                            height: 0.7rem;
                            cursor: pointer;
                        }
                        &:last-child{
                            border:none;
                        }
                    }
                }

            }
            @media screen and (min-width: 769px) {
                .collaboration_common_container{
                    padding-top: 1rem;
                    .collaboration_common_title {
                        margin-bottom: 0.8rem;
                    }
                    .collaboration_common_content {
                        height: 2rem;
                        .flexRow;
                        .collaboration_common_img_container {
                            padding: 0.65rem 0.46rem;
                        }
                    }
                    .collaboration_common_content_wrap{
                        .collaboration_common_img_container {
                            padding: 0.65rem 0.46rem;
                        }
                    }
                }


            }
            @media screen and (max-width: 768px) and (min-width:768px){
                .collaboration_common_container{
                    padding-top: 1rem;
                    .collaboration_common_title {
                        margin-bottom: 0.8rem;
                    }
                    .collaboration_common_content {
                        height: 2rem;
                        .flexRow;
                        .collaboration_common_img_container {
                            padding: 0.65rem 0.46rem;
                        }
                    }
                    .collaboration_common_content_wrap{
                        justify-content: center;
                        .collaboration_common_img_container {
                            padding: 0.65rem 0.46rem;
                        }
                    }
                }

            }
            @media screen and (max-width: 767px)  and (min-width:375px){
                .collaboration_common_container{
                    padding-top: 0.5rem;
                    .collaboration_common_title {
                        margin-bottom: 0.26rem;
                    }
                    .collaboration_common_content {
                        .flexColumn;
                        align-items: center;
                        .collaboration_common_img_container {
                            padding:0.26rem 0.72rem 0.24rem 0.75rem;
                        }
                    }
                    .collaboration_common_content_wrap{
                        justify-content: center;
                        .collaboration_common_img_container{
                            padding:0.26rem 0.72rem 0.24rem 0.75rem;
                        }
                    }
                }

            }
        }

    }


</style>