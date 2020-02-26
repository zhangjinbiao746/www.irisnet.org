<template>
    <div class="ecosystem_container">
        <div class="ecosystem_common_wrap">
            <div class="ecosystem_common_container">
                <div class="ecosystem_item_content_container">
                    <p class="ecosystem_item_content_title">
                        {{$store.state.messages.ecosystemThree.first.title}}
                    </p>
                    <p class="ecosystem_item_content_content">
                        {{$store.state.messages.ecosystemThree.first.content}}
                    </p>
                    <span class="ecosystem_item_content_link"
                          @click="$router.push({path: '/collaboration'})">
                        {{$store.state.messages.ecosystemThree.first.partner}}
                    </span>
                </div>
                <div class="ecosystem_item_img_container">
                    <img :src="$store.state.messages.ecosystemThree.first.img"
                         class="ecosystem_item_img first_img">
                </div>
            </div>
        </div>
        <div class="ecosystem_common_wrap">
            <div class="ecosystem_common_container">
                <div class="ecosystem_item_img_container">
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
                    <div class="ecosystem_item_content_link_wrap">

                    </div>
                    <span class="ecosystem_item_content_link"
                          @click="toLinkUrl">
                        {{$store.state.messages.ecosystemThree.second.more}}
                        <!--todo(lsc 跳转)-->
                    </span>
                </div>
            </div>
        </div>
        <div class="ecosystem_common_wrap">
            <div class="ecosystem_common_container">
                <div class="ecosystem_item_content_container">
                    <p class="ecosystem_item_content_title">
                        {{$store.state.messages.ecosystemThree.third.title}}
                    </p>
                    <p class="ecosystem_item_content_content">
                        {{$store.state.messages.ecosystemThree.third.content}}
                    </p>
                    <span class="ecosystem_item_content_link"
                          @click="toLinkUrl($store.state.messages.ecosystemThree.third.detailLink)">
                        {{$store.state.messages.ecosystemThree.third.details}}
                    </span>
                </div>
                <div class="ecosystem_item_img_container">
                    <img :src="$store.state.messages.ecosystemThree.third.img"
                         class="ecosystem_item_img third_img">
                </div>
            </div>
        </div>
        <div class="ecosystem_common_wrap">
            <div class="ecosystem_common_container">
                <div class="ecosystem_item_img_container">
                    <img :src="$store.state.messages.ecosystemThree.fourth.img"
                         class="ecosystem_item_img fourth_img">
                </div>
                <div class="ecosystem_item_content_container">
                    <p class="ecosystem_item_content_title">
                        {{$store.state.messages.ecosystemThree.fourth.title}}
                    </p>
                    <p class="ecosystem_item_content_content">
                        {{$store.state.messages.ecosystemThree.fourth.content}}
                    </p>
                    <span class="ecosystem_item_content_link"
                          @click="toLinkUrl($store.state.messages.ecosystemThree.fourth.detailLink)">
                        {{$store.state.messages.ecosystemThree.fourth.details}}
                    </span>
                </div>
            </div>
        </div>
        <div class="ecosystem_common_wrap">
            <div class="ecosystem_common_container">
                <div class="ecosystem_item_content_container">
                    <p class="ecosystem_item_content_title">
                        {{$store.state.messages.ecosystemThree.fifth.title}}
                    </p>
                    <div class="ecosystem_item_content_link_wrap">

                    </div>
                    <span class="ecosystem_item_content_link"
                          @click="toLinkUrl($store.state.messages.ecosystemThree.fifth.detailLink)">
                        {{$store.state.messages.ecosystemThree.fifth.details}}
                    </span>
                </div>
                <div class="ecosystem_item_img_container">
                    <img :src="$store.state.messages.ecosystemThree.fifth.img"
                         class="ecosystem_item_img fifth_img">
                </div>
            </div>
        </div>



    </div>
</template>

<script>


    export default {
        name : "EcosystemThree",
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

    .ecosystem_container {
        width: 100%;
        padding-top: 0.6rem;
        .ecosystem_common_wrap{
            width:100%;
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

                .ecosystem_item_content_container{
                    .flexColumn;
                    flex:1;
                    .ecosystem_item_content_title{
                        color:#313236;
                        margin-bottom:0.4rem;
                        font-size:0.36rem;
                    }
                    .ecosystem_item_content_content{
                        color:#7C7D8D;
                        line-height:0.4rem;
                        font-size:0.22rem;
                        margin-bottom:0.4rem;
                    }
                    .ecosystem_item_content_link{
                        cursor:pointer;
                        color:#5E82F1;
                        font-size:0.22rem;
                    }

                }
                .ecosystem_item_img_container{
                    flex:1;
                    .flexRow;
                    justify-content: center;
                    .ecosystem_item_img{


                    }
                    .first_img{
                        width:2.5rem;
                        height:2.5rem;
                    }
                    .second_img{
                        width:5.5rem;
                        height:2.5rem;
                    }
                    .third_img{
                        width:2.2rem;
                        height:2.54rem;
                    }
                    .fourth_img{
                        width:5.4rem;
                        height:2.8rem;
                    }
                    .fifth_img{
                        width:2.5rem;
                        height:2.5rem;
                    }


                }




            }
        }

    }


</style>