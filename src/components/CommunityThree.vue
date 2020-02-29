<template>
    <div class="community_container_content">
        <div class="community_header_content_wrap">
            <div class="community_header_content">
                <div class="community_header_announcement_header">
                    <span class="community_header_announcement_title">{{$t('message.announcement.title')}}</span>
                    <span class="community_header_announcement_view_more" @click="openUrl()">{{$t('message.announcement.viewMore')}}></span>
                </div>
                <div class="community_header_announcement_header_content">
                    <div class="community_header_announcement_left_content">
                        <div class="community_header_announcement_img_content">
                            <img src="../../public/irisnet/IRISnet_announcements_betanet.png" alt="">·
                        </div>
                        <div class="community_header_announcement_important" @click="openUrl()">
                            <h2 class="community_header_announcement_important_title">{{$t('message.announcement.publicToken.title')}}</h2>
                            <p class="community_header_announcement_important_section">{{$t('message.announcement.publicToken.section')}}</p>
                            <p class="community_header_announcement_important_date">{{$t('message.announcement.publicToken.date')}}</p>
                        </div>
                    </div>
                    <div class="community_header_announcement_right_content">
                        <div class="community_header_announcement_list_content">
                            <p class="community_header_announcement_date">{{$t('message.announcement.latestAnnouncement[0].date')}}</p>
                            <h2 class="community_header_announcement_item_title">{{$t('message.announcement.latestAnnouncement[0].title')}}</h2>
                            <p class="community_header_announcement_section">{{$t('message.announcement.latestAnnouncement[0].section')}}</p>
                        </div>
                        <div class="community_header_announcement_list_content">
                            <p class="community_header_announcement_date">{{$t('message.announcement.latestAnnouncement[1].date')}}</p>
                            <h2 class="community_header_announcement_item_title">{{$t('message.announcement.latestAnnouncement[1].title')}}</h2>
                            <p class="community_header_announcement_section">{{$t('message.announcement.latestAnnouncement[1].section')}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <!-- <div class="community_center_wrap">
            <div class="community_center_event_content">
                <div class="community_center_event_header_content">
                    <span class="community_center_event_header_title">Events</span>
                    <span class="community_center_event_header_view_more">View More ></span>
                </div>
                <div class="community_center_event_list_content">
                    <div class="community_center_event_list_item">
                        <div class="community_center_event_list_item_img">
                            <img src="../assets/app/irispattern-network.png" alt="">
                        </div>
                        <p class="community_center_event_list_item_title">IRISnet (IRIS) Airdrop on Binance DEX — Win 500,000 IRIS!</p>
                        <p class="community_center_event_list_item_section">Airdrop on Binance DEX</p>
                        <p class="community_center_event_list_item_date">Mar 02,2019</p>
                    </div>
                    &lt;!&ndash;循环删除&ndash;&gt;
                    <div class="community_center_event_list_item">
                        <div class="community_center_event_list_item_img">
                            <img src="../assets/app/irispattern-network.png" alt="">
                        </div>
                        <p class="community_center_event_list_item_title">IRISnet (IRIS) Airdrop on Binance DEX — Win 500,000 IRIS!</p>
                        <p class="community_center_event_list_item_section">Airdrop on Binance DEX</p>
                        <p class="community_center_event_list_item_date">Mar 02,2019</p>
                    </div>
                    <div class="community_center_event_list_item">
                        <div class="community_center_event_list_item_img">
                            <img src="../assets/app/irispattern-network.png" alt="">
                        </div>
                        <p class="community_center_event_list_item_title">IRISnet (IRIS) Airdrop on Binance DEX — Win 500,000 IRIS!</p>
                        <p class="community_center_event_list_item_section">Airdrop on Binance DEX</p>
                        <p class="community_center_event_list_item_date">Mar 02,2019</p>
                    </div>
                </div>
            </div>
        </div>-->
        <div class="community_footer_wrap">
            <div class="community_footer_faq_content">
                <div class="community_footer_faq_header_content">
                    <span class="community_footer_faq_header_title">{{$t('message.announcement.faq.title')}}</span>
                    <span class="community_footer_faq_header_view_more" @click="openFaqUrl">{{$t('message.announcement.faq.viewMore')}}></span>
                </div>
                <div class="community_footer_faq_list_content">
                    <div class="community_footer_faq_list_left_content">
                        <div class="community_footer_faq_left_item">{{$t('message.announcement.faq.list[0].title')}}</div>
                        <div class="community_footer_faq_left_item"> {{$t('message.announcement.faq.list[1].title')}}</div>
                    </div>
                    <div class="community_footer_faq_list_right_content">
                        <div class="community_footer_faq_right_item">{{$t('message.announcement.faq.list[2].title')}}</div>
                        <div class="community_footer_faq_right_item">{{$t('message.announcement.faq.list[3].title')}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import enMessage from "../assets/lang/en"
    import cnMessage from "../assets/lang/cn"
    export default {
        name: "CommunityThree",
        data() {
            return {
                enMessage:enMessage,
                cnMessage:cnMessage,
            }
        },
        methods:{
            openUrl(){
                window.open('https://github.com/irisnet/iris-foundation/blob/master/README.md')
            },
            openFaqUrl(){
                if(this.$i18n.locale === 'CN'){
                    window.open('https://medium.com/irisnet-blog/irisnet-常见问答-cc7a59293823')
                }else {
                    window.open('https://medium.com/irisnet-blog/irisnet-faq-8793cf116c37')
                }
            }
        }
    }
</script>

<style scoped lang="less">
@import '../style/mixin.less';
    .community_container_content{
        padding-top: 1.2rem;
        .community_header_content_wrap{
            padding-top: 1rem;
            background: #fff;
            padding:0 0.15rem;
            .community_header_content{
                max-width: 12rem;
                margin: 0 auto;
                .community_header_announcement_header{
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 0.22rem;
                    border-bottom: 0.01rem solid #DDD;
                    align-items: center;
                    .community_header_announcement_title{
                        font-size: 0.48rem;
                        font-weight:400;
                        color:rgba(49,50,54,1);
                        line-height:0.65rem;
                    }
                    .community_header_announcement_view_more{
                        cursor: pointer;
                        padding-top: 0.4rem;
                        font-size:0.17rem;
                        font-weight:400;
                        color:rgba(94,130,241,1);
                        line-height:0.2rem;
                    }

                }
                .community_header_announcement_header_content{
                    display: flex;
                    margin: 0.61rem  0 0.7rem 0;
                    .community_header_announcement_left_content{
                        flex: 1;
                        margin-right: 0.8rem;
                        .community_header_announcement_img_content{
                            img{
                                display: inline-block;
                                width: 100%;
                            }
                        }
                        .community_header_announcement_important{
                            margin-top: 0.3rem;
                            .community_header_announcement_important_title{
                                font-size: 0.22rem;
                                font-weight:600;
                                color:rgba(38,48,53,1);
                                line-height:0.26rem;
                            }
                            .community_header_announcement_important_section{
                                font-size:0.17rem;
                                font-weight:400;
                                color:rgba(124,125,141,1);
                                line-height:0.3rem;
                            }
                            .community_header_announcement_important_date{
                                font-size:0.15rem;
                                font-weight:400;
                                color:rgba(124,125,141,1);
                                line-height:0.18rem;
                            }
                        }
                    }
                    .community_header_announcement_right_content{
                        flex: 1;
                        .community_header_announcement_list_content{
                            padding-bottom: 0.3rem;
                            border-bottom: 0.01rem solid #EEEEEE;
                            .community_header_announcement_date{
                                font-size: 0.15rem;
                                font-weight:400;
                                color:rgba(124,125,141,1);
                                line-height:0.18rem;
                            }
                            .community_header_announcement_item_title{
                                margin-top: 0.06rem;
                                font-size:0.22rem;
                                font-weight:600;
                                color:rgba(38,48,53,1);
                                line-height:0.32rem;
                            }
                            .community_header_announcement_section{
                                margin-top: 0.1rem;
                                font-size: 0.17rem;
                                font-weight:400;
                                color:rgba(124,125,141,1);
                                line-height: 0.3rem;
                            }
                        }
                        .community_header_announcement_list_content:nth-child(2){
                            margin-top: 0.3rem;
                            border-bottom: none;
                        }
                    }
                }
            }
        }
        .community_center_wrap{
            background: #F8F9FC;
            padding: 1rem 0.15rem 0 0.15rem;
            .community_center_event_content{
                max-width: 12rem;
                margin: 0 auto;
                .community_center_event_header_content{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-bottom: 0.22rem;
                    border-bottom: 0.01rem solid #DDD;
                    .community_center_event_header_title{
                        font-size: 0.48rem;
                        font-weight:400;
                        color:rgba(49,50,54,1);
                        line-height:0.65rem;
                    }
                    .community_center_event_header_view_more{
                        padding-top: 0.4rem;
                        font-size:0.17rem;
                        font-weight:400;
                        color:rgba(94,130,241,1);
                        line-height:0.2rem;
                    }
                }
                .community_center_event_list_content{
                    margin-top: 0.6rem;
                    padding-bottom: 0.93rem;
                    display: flex;
                    .community_center_event_list_item{
                        flex: 1;
                        margin-right: 0.45rem;
                        .community_center_event_list_item_img{
                            height:2.4rem;
                            /*删除*/
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .community_center_event_list_item_title{
                            margin-top: 0.3rem;
                            font-size: 0.22rem;
                            font-weight:600;
                            color:rgba(38,48,53,1);
                            line-height:0.32rem;
                        }
                        .community_center_event_list_item_section{
                            margin-top: 0.15rem;
                            font-size: 0.17rem;
                            font-weight:400;
                            color:rgba(124,125,141,1);
                            line-height: 0.3rem;
                        }
                        .community_center_event_list_item_date{
                            margin-top: 0.1rem;
                            font-size: 0.15rem;
                            font-weight:400;
                            color:rgba(124,125,141,1);
                            line-height: 0.18rem;
                        }
                    }
                    .community_center_event_list_item:last-child{
                        margin-right: 0;
                    }
                }
            }
        }
        .community_footer_wrap{
            background: #fff;
            padding:0 0.15rem;
            margin-top:1rem;
            .community_footer_faq_content{
                max-width: 12rem;
                margin: 0 auto;
                .community_footer_faq_header_content{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-bottom: 0.22rem;
                    border-bottom: 0.01rem solid #DDD;
                    .community_footer_faq_header_title{
                        font-size: 0.48rem;
                        font-weight:400;
                        color:rgba(49,50,54,1);
                        line-height:0.65rem;
                    }
                    .community_footer_faq_header_view_more{
                        cursor: pointer;
                        padding-top: 0.4rem;
                        font-size:0.17rem;
                        font-weight:400;
                        color:rgba(94,130,241,1);
                        line-height:0.2rem;
                    }
                }
                .community_footer_faq_list_content{
                    margin-top: 0.6rem;
                    display: flex;
                    margin-bottom: 0.6rem;
                    .community_footer_faq_list_left_content{
                        flex: 1;
                        margin-right: 0.3rem;
                        .community_footer_faq_left_item{
                            box-sizing: border-box;
                            padding: 0.26rem ;
                            border:1px solid rgba(237,237,237,1);
                            border-radius: 0.03rem;
                        }
                        .community_footer_faq_left_item:last-child{
                            margin-top: 0.1rem;
                        }
                    }
                    .community_footer_faq_list_right_content{
                        flex: 1;
                        .community_footer_faq_right_item{
                            box-sizing: border-box;
                            padding: 0.26rem ;
                            border:1px solid rgba(237,237,237,1);
                            border-radius: 0.03rem;
                            font-size: 0.17rem;
                            color: #263035;
                            line-height: 0.2rem;
                        }
                        .community_footer_faq_right_item:last-child{
                            margin-top: 0.1rem;
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width:375px) and (max-width: 768px){
        .community_container_content{
            padding-top: 0.8rem;
            .community_header_content_wrap{
                padding-top: 1rem;
                .community_header_content{
                    max-width: 5.2rem;
                    margin: 0 auto;
                    .community_header_announcement_header{
                        .community_header_announcement_title{
                            font-size: 0.36rem;
                            font-weight:400;
                            line-height:0.65rem;
                        }
                        .community_header_announcement_view_more{
                            padding-top: 0.4rem;
                            font-size:0.17rem;
                            font-weight:400;
                            line-height:0.2rem;
                        }
                    }
                    .community_header_announcement_header_content{
                        .flexColumn;
                        margin: 0.61rem  0 0.7rem 0;
                        .community_header_announcement_left_content{
                            flex: 1;
                            margin-right: 0rem;
                            .community_header_announcement_img_content{
                                img{
                                    display: inline-block;
                                    width: 100%;
                                }
                            }
                            .community_header_announcement_important{
                                margin-top: 0.3rem;
                                .community_header_announcement_important_title{
                                    font-size: 0.22rem;
                                    font-weight:600;
                                    line-height:0.26rem;
                                }
                                .community_header_announcement_important_section{
                                    font-size:0.17rem;
                                    font-weight:400;
                                    line-height:0.3rem;
                                }
                                .community_header_announcement_important_date{
                                    font-size:0.15rem;
                                    font-weight:400;
                                    line-height:0.18rem;
                                }
                            }
                        }
                        .community_header_announcement_right_content{
                            flex: 1;
                            .community_header_announcement_list_content{
                                padding-top: 0.3rem;
                                border-top: 0.01rem solid #EEEEEE;
                                border-bottom: none;
                                margin-top: 0.3rem;
                                .community_header_announcement_date{
                                    font-size: 0.15rem;
                                    font-weight:400;
                                    line-height:0.18rem;
                                }
                                .community_header_announcement_item_title{
                                    margin-top: 0.06rem;
                                    font-size:0.22rem;
                                    font-weight:600;
                                    line-height:0.32rem;
                                }
                                .community_header_announcement_section{
                                    margin-top: 0.1rem;
                                    font-size: 0.17rem;
                                    font-weight:400;
                                    line-height: 0.3rem;
                                }
                            }
                            .community_header_announcement_list_content:nth-child(2){
                                margin-top: 0rem;
                            }
                        }
                    }
                }
            }
            .community_center_wrap{
                padding-top: 1rem;
                .community_center_event_content{
                    max-width: 5.2rem;
                    margin: 0 auto;
                    .community_center_event_header_content{
                        .community_center_event_header_title{
                            font-size: 0.36rem;
                            font-weight:400;
                            line-height:0.65rem;
                        }
                        .community_center_event_header_view_more{
                            padding-top: 0.4rem;
                            font-size:0.17rem;
                            font-weight:400;
                            line-height:0.2rem;
                        }
                    }
                    .community_center_event_list_content{
                        .flexColumn;
                        margin-top: 0.6rem;
                        padding-bottom: 0.93rem;
                        .community_center_event_list_item{
                            flex: 1;
                            margin-right: 0rem;
                            margin-bottom: 0.6rem;
                            .community_center_event_list_item_img{
                                height:2.4rem;
                                /*删除*/
                                img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            .community_center_event_list_item_title{
                                margin-top: 0.3rem;
                                font-size: 0.22rem;
                                font-weight:600;
                                line-height:0.32rem;
                            }
                            .community_center_event_list_item_section{
                                margin-top: 0.15rem;
                                font-size: 0.17rem;
                                font-weight:400;
                                line-height: 0.3rem;
                            }
                            .community_center_event_list_item_date{
                                margin-top: 0.1rem;
                                font-size: 0.15rem;
                                font-weight:400;
                                line-height: 0.18rem;
                            }
                        }
                        .community_center_event_list_item:last-child{
                            margin-right: 0;
                            margin-bottom: 0;
                        }
                    }
                }
            }
            .community_footer_wrap{
                .community_footer_faq_content{
                    max-width: 5.2rem;
                    margin: 0 auto;
                    .community_footer_faq_header_content{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding-bottom: 0.22rem;
                        border-bottom: 0.01rem solid #DDD;
                        .community_footer_faq_header_title{
                            font-size: 0.36rem;
                            font-weight:400;
                            line-height:0.65rem;
                        }
                        .community_footer_faq_header_view_more{
                            padding-top: 0.4rem;
                            font-size:0.17rem;
                            font-weight:400;
                            line-height:0.2rem;
                        }
                    }
                    .community_footer_faq_list_content{
                        margin-top: 0.6rem;
                        flex-direction: column;
                        .community_footer_faq_list_left_content{
                            margin-right: 0;
                        }
                        .community_footer_faq_list_right_content{
                            margin-top: 0.1rem;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 375px){
        .community_container_content{
            padding-top: 0.8rem;
            .community_header_content_wrap{
                padding-top: 0.5rem;
                .community_header_content{
                    max-width: 5.2rem;
                    margin: 0 auto;
                    .community_header_announcement_header{
                        .community_header_announcement_title{
                            font-size: 0.18rem;
                            font-weight:400;
                            line-height:0.65rem;
                        }
                        .community_header_announcement_view_more{
                            padding-top: 0.4rem;
                            font-size:0.14rem;
                            font-weight:400;
                            line-height:0.2rem;
                        }
                    }
                    .community_header_announcement_header_content{
                        .flexColumn;
                        margin: 0.61rem 0 0.3rem 0;
                        .community_header_announcement_left_content{
                            flex: 1;
                            margin-right: 0rem;
                            .community_header_announcement_img_content{
                                img{
                                    display: inline-block;
                                    width: 100%;
                                }
                            }
                            .community_header_announcement_important{
                                margin-top: 0.3rem;
                                .community_header_announcement_important_title{
                                    font-size: 0.16rem;
                                    font-weight:600;
                                    line-height:0.26rem;
                                }
                                .community_header_announcement_important_section{
                                    font-size:0.14rem;
                                    font-weight:400;
                                    line-height:0.3rem;
                                }
                                .community_header_announcement_important_date{
                                    font-size:0.15rem;
                                    font-weight:400;
                                    line-height:0.18rem;
                                }
                            }
                        }
                        .community_header_announcement_right_content{
                            flex: 1;
                            .community_header_announcement_list_content{
                                padding-top: 0.3rem;
                                border-top: 0.01rem solid #EEEEEE;
                                border-bottom: none;
                                margin-top: 0.3rem;
                                .community_header_announcement_date{
                                    font-size: 0.15rem;
                                    font-weight:400;
                                    line-height:0.18rem;
                                }
                                .community_header_announcement_item_title{
                                    margin-top: 0.06rem;
                                    font-size:0.22rem;
                                    font-weight:600;
                                    line-height:0.32rem;
                                }
                                .community_header_announcement_section{
                                    margin-top: 0.1rem;
                                    font-size: 0.17rem;
                                    font-weight:400;
                                    line-height: 0.3rem;
                                }
                            }
                            .community_header_announcement_list_content:nth-child(2){
                                margin-top: 0rem;
                            }
                        }
                    }
                }
            }
            .community_center_wrap{
                padding-top: 0.5rem;
                .community_center_event_content{
                    max-width: 5.2rem;
                    margin: 0 auto;
                    .community_center_event_header_content{
                        .community_center_event_header_title{
                            font-size: 0.18rem;
                            font-weight:400;
                            line-height:0.65rem;
                        }
                        .community_center_event_header_view_more{
                            padding-top: 0.4rem;
                            font-size:0.14rem;
                            font-weight:400;
                            line-height:0.2rem;
                        }
                    }
                    .community_center_event_list_content{
                        .flexColumn;
                        margin-top: 0.6rem;
                        padding-bottom: 0.93rem;
                        .community_center_event_list_item{
                            flex: 1;
                            margin-right: 0rem;
                            margin-bottom: 0.6rem;
                            .community_center_event_list_item_img{
                                height:2.4rem;
                                /*删除*/
                                img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            .community_center_event_list_item_title{
                                margin-top: 0.3rem;
                                font-size: 0.16rem;
                                font-weight:600;
                                line-height:0.32rem;
                            }
                            .community_center_event_list_item_section{
                                margin-top: 0.15rem;
                                font-size: 0.17rem;
                                font-weight:400;
                                line-height: 0.3rem;
                            }
                            .community_center_event_list_item_date{
                                margin-top: 0.1rem;
                                font-size: 0.14rem;
                                font-weight:400;
                                line-height: 0.18rem;
                            }
                        }
                        .community_center_event_list_item:last-child{
                            margin-right: 0;
                            margin-bottom: 0;
                        }
                    }
                }
            }
            .community_footer_wrap{
                margin-top:0.5rem;
                .community_footer_faq_content{
                    max-width: 5.2rem;
                    margin: 0 auto;
                    .community_footer_faq_header_content{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding-bottom: 0.22rem;
                        border-bottom: 0.01rem solid #DDD;
                        .community_footer_faq_header_title{
                            font-size: 0.18rem;
                            font-weight:400;
                            line-height:0.65rem;
                        }
                        .community_footer_faq_header_view_more{
                            padding-top: 0.4rem;
                            font-size:0.14rem;
                            font-weight:400;
                            line-height:0.2rem;
                        }
                    }
                    .community_footer_faq_list_content{
                        margin-top: 0.3rem;
                        flex-direction: column;
                        .community_footer_faq_list_left_content{
                            margin-right: 0;
                        }
                        .community_footer_faq_list_right_content{
                            margin-top: 0.1rem;
                        }
                    }
                }
            }
        }
    }
</style>