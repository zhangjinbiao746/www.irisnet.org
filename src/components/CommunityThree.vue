<template>
    <div class="community_container_content">
        <div class="community_header_content_wrap">
            <div class="community_header_content">
                <div class="community_header_announcement_header">
                    <span class="community_header_announcement_title">Announcements </span>
                    <span class="community_header_announcement_view_more">View More ></span>
                </div>
                <div class="community_header_announcement_header_content">
                    <div class="community_header_announcement_left_content">
                        <div class="community_header_announcement_img_content">
                            <img src="../../public/irisnet/IRISnet_announcements_betanet.png" alt="">·
                        </div>
                        <div class="community_header_announcement_important">
                            <h2 class="community_header_announcement_important_title">IRISnet Public Token Addresses</h2>
                            <p class="community_header_announcement_important_section">Foundation and Dev Team Token Addresses.</p>
                            <p class="community_header_announcement_important_date">Mar 02,2019</p>
                        </div>
                    </div>
                    <div class="community_header_announcement_right_content">
                        <div class="community_header_announcement_list_content">
                            <p class="community_header_announcement_date">Dec 31, 2019</p>
                            <h2 class="community_header_announcement_item_title">The 3rd IRIS Token Burn is Completed & Token Burning Plan Continues in 2020</h2>
                            <p class="community_header_announcement_section">On December 31st, 2019, the IRIS Foundation completed the 3rd IRIS token burn under a one-year token burning plan with 15,029,472 IRIS burned. The current total supply is 2 billion IRIS.</p>
                        </div>
                        <div class="community_header_announcement_list_content">
                            <p class="community_header_announcement_date">Dec 31, 2019</p>
                            <h2 class="community_header_announcement_item_title">The 3rd IRIS Token Burn is Completed & Token Burning Plan Continues in 2020</h2>
                            <p class="community_header_announcement_section">On December 31st, 2019, the IRIS Foundation completed the 3rd IRIS token burn under a one-year token burning plan with 15,029,472 IRIS burned. The current total supply is 2 billion IRIS.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="community_center_wrap">
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
                    <!--循环删除-->
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
        </div>
        <div class="community_footer_wrap">
            <div class="community_footer_faq_content">
                <div class="community_footer_faq_header_content">
                    <span class="community_footer_faq_header_title">FAQ</span>
                    <span class="community_footer_faq_header_view_more">View More</span>
                </div>
                <div class="community_footer_faq_list_content">
                    <div class="community_footer_faq_list_left_content"></div>
                    <div class="community_footer_faq_list_right_content"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommunityThree"
    }
</script>

<style scoped lang="less">
    .community_container_content{
        padding-top: 0.6rem;
        .community_header_content_wrap{
            padding-top: 1rem;
            background: #fff;
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
            padding-top: 1rem;
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
                        padding-top: 0.4rem;
                        font-size:0.17rem;
                        font-weight:400;
                        color:rgba(94,130,241,1);
                        line-height:0.2rem;
                    }
                }
                .community_footer_faq_list_content{
                    margin-top: 0.6rem;
                    .community_footer_faq_list_left_content{

                    }
                    .community_footer_faq_list_right_content{

                    }
                }
            }
        }
    }
</style>