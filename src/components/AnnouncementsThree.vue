<template>
    <div class="announcements_container">
        <div class="announcements_content_container">
            <p class="announcements_content_title">
                {{$t('message.announce.title')}}
            </p>
            <div class="announcements_content_img_container">
                <div class="announcements_content_left_container">
                    <img :src="$i18n.locale === 'EN' ? enMessage.announce.src : cnMessage.announce.src"
                         class="announcements_img">
                    <div class="announcements_content_left_produce_container">
                        <span class="announcements_content_left_produce_title">
                            {{$t('message.announce.betaTitle')}}
                        </span>
                        <span class="announcements_content_left_produce_content">
                            {{$t('message.announce.betaContent')}}
                        </span>
                        <span class="announcements_content_left_produce_time">
                            {{$t('message.announce.betaDate')}}
                        </span>

                    </div>
                </div>
                <div class="announcements_content_right_container">
                    <div class="announcements_content_right_top_container"
                         @click="toLinkUrl( $i18n.locale ==='EN' ? enMessage.announce.announcementList[0].href : cnMessage.announce.announcementList[0].href)">
                        <span class="announcements_content_right_time">
                             {{$t('message.announce.announcementList[0].date')}}
                        </span>
                        <span class="announcements_content_right_title">
                            {{$t('message.announce.announcementList[0].title')}}
                        </span>
                        <span class="announcements_content_right_content">
                            {{$t('message.announce.announcementList[0].content')}}
                        </span>
                    </div>
                    <div class="announcements_content_right_top_container"
                         @click="toLinkUrl($i18n.locale ==='EN' ? enMessage.announce.announcementList[1].href : cnMessage.announce.announcementList[1].href)">
                        <span class="announcements_content_right_time">
                            {{$t('message.announce.announcementList[1].date')}}
                        </span>
                        <span class="announcements_content_right_title">
                            {{$t('message.announce.announcementList[1].title')}}
                        </span>
                        <span class="announcements_content_right_content">
                            {{$t('message.announce.announcementList[1].content')}}
                        </span>
                    </div>
                </div>
            </div>
            <p class="announcements_history_title">
                {{$t('message.announce.historyTitle')}}
            </p>
            <div class="announcements_history_item_container"
                 :class="item.href ? 'pointer' : ''"
                 @click="toLinkUrl(item.href)"
                 v-for="item in announcementList">
                <div class="announcements_history_item_time_container">
                    <span class="announcements_history_item_time_month">
                        {{ item.month }}
                    </span>
                    <span class="announcements_history_item_time_date">
                        {{ item.day }}
                    </span>
                    <span class="announcements_history_item_time_year">
                        {{ item.year }}
                    </span>
                </div>
                <div class="announcements_history_content_container">
                    <span class="announcements_history_item_title">
                        {{ item.title }}
                    </span>
                    <span class="announcements_history_item_content">
                        {{ item.content }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import enMessage from "../assets/lang/en"
    import cnMessage from "../assets/lang/cn"
    export default {
        name : "Announcements",
        data(){
            return {
                enMessage: enMessage,
                cnMessage: cnMessage
            }
        },
        computed:{
            announcementList(){
                let announcementList ;
                if(this.$i18n.locale === 'EN'){
                    announcementList = JSON.parse(JSON.stringify(this.enMessage.announce.announcementList));
                }else {
                    announcementList = JSON.parse(JSON.stringify(this.cnMessage.announce.announcementList));
                }
                announcementList.shift();
                announcementList.shift();
                return announcementList;
            }
        },
        mounted(){

        },
        methods : {
            toLinkUrl(url){
                if(url){
                    window.open(url);
                }

            }
        }
    }
</script>

<style scoped lang="less">
    @import '../style/mixin.less';

    @media screen and (min-width: 769px) {
        .announcements_container{
            .announcements_content_container{
                min-width:1rem;
                max-width:12rem;
                padding-top:1rem;
                .announcements_content_title {
                    font-size:0.36rem;
                    margin-bottom:0.5rem;
                }
                .announcements_content_img_container{
                    .flexRow;
                    justify-content: space-between;
                    .announcements_content_left_container{
                        flex:67;
                        margin-right:0.8rem;
                        .announcements_content_left_produce_container{
                            .announcements_content_left_produce_title{
                                font-size:0.22rem;
                            }
                            .announcements_content_left_produce_content{
                                font-size:0.17rem;
                            }
                            .announcements_content_left_produce_time{
                                font-size:0.15rem;
                            }

                        }
                    }
                }
                .announcements_content_right_container{
                    flex:45;
                    .announcements_content_right_top_container{
                        .flexColumn;
                        padding-bottom:0.31rem;
                        cursor:pointer;
                        &:first-child{
                            border-bottom:0.01rem solid #EEEEEE;
                        }
                        &:last-child{
                            padding-top:0.31rem;
                        }
                        .announcements_content_right_time{
                            font-size:0.15rem;
                        }
                        .announcements_content_right_title{
                            font-size:22px;
                        }
                        .announcements_content_right_content{
                            font-size:0.17rem;
                        }
                    }
                }
            }
            .announcements_history_title{
                color:#313236;
                font-size:0.36rem;
                margin-top:0.7rem;
                margin-bottom:0.1rem;
            }
            .announcements_history_item_container{


                .announcements_history_content_container{
                    .announcements_history_item_title{
                        font-size:0.22rem;
                        font-weight:600;
                        line-height:0.32rem;
                    }
                    .announcements_history_item_content{
                        font-size:0.17rem;
                    }
                }
            }
            .pointer{
                cursor:pointer;
            }

        }

    }
    @media screen and (max-width: 768px) and (min-width:768px){
        .announcements_container{
            padding:0 1.24rem;
            .announcements_content_container{
                width:100%;
                padding-top:1rem;
                .announcements_content_title {
                    font-size:0.36rem;
                    margin-bottom:0.5rem;
                }
                .announcements_content_img_container{
                    .flexColumn;
                    align-items: center;
                    .announcements_content_left_container{
                        width:100%;
                        .announcements_content_left_produce_container{
                            .flexColumn;
                            .announcements_content_left_produce_title{
                                font-size:0.22rem;
                            }
                            .announcements_content_left_produce_content{
                                font-size:0.17rem;
                            }
                            .announcements_content_left_produce_time{
                                font-size:0.15rem;
                            }

                        }
                    }
                }
                .announcements_content_right_container{
                    width:100%;
                    .announcements_content_right_top_container{
                        .flexColumn;
                        border-top:0.01rem solid #EEEEEE;
                        padding-top:0.3rem;
                        .announcements_content_right_time{
                            font-size:0.15rem;
                        }
                        .announcements_content_right_title{
                            font-size:22px;
                        }
                        .announcements_content_right_content{
                            font-size:0.17rem;
                        }
                    }
                }
            }
            .announcements_history_title{
                color:#313236;
                font-size:0.36rem;
                margin-top:0.7rem;
                margin-bottom:0.1rem;
            }
            .announcements_history_item_container{
                .announcements_history_content_container{
                    .announcements_history_item_title{
                        font-size:0.22rem;
                        font-weight:600;
                        line-height:0.32rem;
                    }
                    .announcements_history_item_content{
                        font-size:0.17rem;
                    }
                }
            }

        }

    }
    @media screen and (max-width: 767px)  and (min-width:375px){
        .announcements_container{
            padding:0 0.15rem;
            .announcements_content_container{
                width:100%;
                padding-top:0.5rem;
                .announcements_content_title {
                    font-size:0.18rem;
                    margin-bottom:0.3rem;
                }
                .announcements_content_img_container{
                    .flexColumn;
                    align-items: center;
                    .announcements_content_left_container{
                        width:100%;
                        .announcements_content_left_produce_container{
                            .flexColumn;
                            .announcements_content_left_produce_title{
                                font-size:0.16rem;
                            }
                            .announcements_content_left_produce_content{
                                font-size:0.14rem;
                            }
                            .announcements_content_left_produce_time{
                                font-size:0.14rem;
                            }

                        }
                    }
                    .announcements_content_right_container{
                        width:100%;
                        .announcements_content_right_top_container{
                            .flexColumn;
                            border-top:0.01rem solid #EEEEEE;
                            padding-top:0.3rem;
                            .announcements_content_right_time{
                                font-size:0.14rem;
                            }
                            .announcements_content_right_title{
                                font-size:16px;
                            }
                            .announcements_content_right_content{
                                font-size:0.14rem;
                            }



                        }
                    }
                }


            }
            .announcements_history_title{
                color:#313236;
                font-size:0.18rem;
                margin-top:0.7rem;
            }
            .announcements_history_item_container{
                .announcements_history_content_container{
                    .announcements_history_item_title{
                        font-size:0.16rem;
                        font-weight:600;
                        line-height:0.32rem;
                    }
                    .announcements_history_item_content{
                        font-size:0.14rem;
                    }
                }
            }

        }

    }

    .announcements_container {
        padding-top:0.8rem;
        width:100%;
        box-sizing:border-box;
        .flexRow;
        justify-content: center;
        .announcements_content_container {
            padding-bottom:1rem;
            .announcements_content_title {
                color:#313236;
                font-family:SFUIDisplay-Regular,SFUIDisplay;
            }


            //公共样式
            .announcements_content_img_container{

                .announcements_content_left_container{
                    margin-bottom:0.3rem;
                    .flexColumn;
                    .announcements_img{
                        width:100%;
                        margin-bottom:0.3rem;
                    }
                    .announcements_content_left_produce_container{
                        .flexColumn;
                        .announcements_content_left_produce_title{
                            color:#263035;
                            font-weight:600;
                            margin-bottom:0.14rem;
                            line-height:0.32rem;
                        }
                        .announcements_content_left_produce_content{
                            color:#7C7D8D;
                            line-height:0.3rem;
                            margin-bottom:0.1rem;
                        }
                        .announcements_content_left_produce_time{
                            color:#7C7D8D;
                        }

                    }
                }
                .announcements_content_right_container{
                    .announcements_content_right_top_container{
                        .flexColumn;
                        padding-bottom:0.31rem;
                        .announcements_content_right_time{
                            color:#7C7D8D;
                            margin-bottom:10px;
                        }
                        .announcements_content_right_title{
                            color:#263035;
                            font-weight:600;
                            margin-bottom:0.1rem;
                            line-height:32px;
                        }
                        .announcements_content_right_content{
                            color:#7C7D8D;
                            line-height:30px;
                        }



                    }
                }

            }
            .announcements_history_title{
                color:#313236;
                margin-top:0.7rem;
            }
            .announcements_history_item_container{
                .flexRow;
                width:100%;
                padding:0.6rem 0;
                border-bottom:0.01rem solid #EEEEEE;

                &:last-child{
                    border:none;
                }
                .announcements_history_item_time_container{
                    flex:0 0 0.6rem;
                    height:0.8rem;
                    border-radius:0.04rem;
                    .flexColumn;
                    background: #5E82F1;
                    align-items: center;
                    padding-bottom:0.04rem;
                    justify-content: space-between;
                    overflow: hidden;
                    .announcements_history_item_time_month{
                        height:0.22rem;
                        font-size:0.14rem;
                        color:#ffffff;
                        line-height:0.22rem;
                        width:100%;
                        text-align: center;
                        background:rgba(15,24,142,0.23);
                    }
                    .announcements_history_item_time_date{
                        color:#ffffff;
                        font-size:0.24rem;
                        padding-top:0.1rem;
                    }
                    .announcements_history_item_time_year{
                        margin-top:0.1rem;
                        color:rgba(255,255,255,.5);
                        font-size:0.12rem;
                    }

                }
                .announcements_history_content_container{
                    margin-left:0.4rem;
                    .flexColumn;
                    .announcements_history_item_title{
                        color:#263035;

                    }
                    .announcements_history_item_content{
                        color:#7C7D8D;
                        line-height:0.3rem;
                    }

                }
            }
        }




    }


</style>