<template>
    <div class="testnet_three_container">
        <div class="testent_three_header_content">
            <div class="testnet_three_header_wrap">
                <h2 class="testnet_three_header_title">{{$t('message.testnetThree.title')}}</h2>
                <p class="testent_three_herder_section">{{$t('message.testnetThree.secondTitle')}}</p>
                <p class="testent_three_herder_section">{{$t('message.testnetThree.section')}}</p>
                <p class="testent_three_herder_section">{{$t('message.testnetThree.secondSection')}}</p>
            </div>
        </div>
        <div class="testnet_three_bottom_content">
            <div class="testnet_three_bottom_content_wrap">
                <div class="testnet_fuxi_content">
                    <div class="testnet_fuxi_img_content">
                        <img src="../assets/irisnetThree/testnets_fuxi.png" alt="">
                    </div>
                    <div class="testnet_fuxi_section_content">
                        <h3 class="testnet_fuxi_section_title">{{$t('message.testnetThree.fuxi.title')}}</h3>
                        <p class="testnet_fuxi_section_text">{{$t('message.testnetThree.fuxi.section')}}</p>
                        <p class="testnet_fuxi_section_faq">
                            <a v-if="$i18n.locale === 'EN'" href="https://www.irisnet.org/docs/get-started/testnet.html#install" target="_blank">{{$t('message.testnetThree.fuxi.linkName')}}</a>
                            <a v-if="$i18n.locale === 'CN'" href="https://www.irisnet.org/docs/zh/get-started/testnet.html#fuxi-%E6%B5%8B%E8%AF%95%E7%BD%91" target="_blank">{{$t('message.testnetThree.fuxi.linkName')}}</a>
                        </p>
                        <div class="testnet_fuxi_sertion_btns"  @click="openUrl(nyancatUrl)">{{$t('message.testnetThree.fuxi.fuxiExplorer')}}</div>
                    </div>
                </div>

            </div>
        </div>
        <div class="testnet_three_nayancat_container">
            <div class="testnet_three_nyancat_content_wrap">
                  <div class="testnet_nyancat_content">
                    <div class="testnet_nyancat_section_content">
                        <h3 class="testnet_nyancat_section_title">{{$t('message.testnetThree.nyancat.title')}}</h3>
                        <p class="testnet_nyancat_section_text">{{$t('message.testnetThree.nyancat.section')}}</p>
                        <p class="testnet_nyancat_section_faq">
                            <a v-if="$i18n.locale === 'EN'" href="https://github.com/irisnet/testnets/tree/master/nyancat#how-to-join-nyancat-testnet" target="_blank">{{$t('message.testnetThree.nyancat.linkName')}}</a>
                            <a v-if="$i18n.locale === 'CN'" href="https://www.irisnet.org/docs/zh/get-started/testnet.html#nyancat-%E6%B5%8B%E8%AF%95%E7%BD%91" target="_blank">{{$t('message.testnetThree.nyancat.linkName')}}</a>
                        </p>
                        <div class="testnet_nyancat_sertion_btns" @click="openUrl(nyancatUrl)">{{$t('message.testnetThree.nyancat.nyancatExplorer')}}</div>
                    </div>
                    <div class="testnet_nyancat_img_content">
                        <img src="../assets/irisnetThree/testnets_nyancat.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TestnetThree",
        data() {
            return {
                nyancatUrl:'https://nyancat.irisplorer.io/#/home',
                fuxiUrl:'https://testnet.irisplorer.io/#/home',
            }
        },
        methods:{
            openUrl(url){
                window.open(url)
            }
        }
    }
</script>

<style scoped lang="less">
    .testnet_three_container{
        padding-top: 0.6rem;
        .testent_three_header_content{
            background: url("../assets/irisnetThree/testnets_bg.jpg");
            background-size: cover;
            .testnet_three_header_wrap{
                max-width: 12rem;
                margin: 0 auto;
                padding-bottom: 1.02rem;
                .testnet_three_header_title{
                    text-align: center;
                    padding-top: 1.2rem;
                    font-size: 0.36rem;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height: 0.43rem;
                }
                .testent_three_herder_section{
                    margin: 0 auto;
                    text-align: center;
                    max-width: 8.8rem;
                    padding-top: 0.27rem;
                    font-size: 0.18rem;
                    font-weight:400;
                    color:rgba(127,148,226,1);
                    line-height: 0.34rem;
                }
            }
        }
        .testnet_three_bottom_content{
            background: #fff;
            .testnet_three_bottom_content_wrap{
                max-width: 12rem;
                margin: 0 auto;
                .testnet_fuxi_content{
                    display: flex;
                    margin: 1.05rem 0;
                    .testnet_fuxi_img_content{
                        flex: 1;
                        display: flex;
                        justify-content: flex-end;
                        margin-right: 1.51rem;
                        box-sizing: border-box;
                        img{
                            max-width: 3rem;
                            width: 100%;
                        }
                    }
                    .testnet_fuxi_section_content{
                        flex: 1;
                        .testnet_fuxi_section_title{
                            font-size: 0.36rem;
                            font-weight:400;
                            color:rgba(49,50,54,1);
                            line-height: 0.43rem;
                        }
                        .testnet_fuxi_section_text{
                            margin-top: 0.4rem;
                            font-size: 0.18rem;
                            font-weight:400;
                            color:rgba(124,125,141,1);
                            line-height: 0.34rem;
                        }
                        .testnet_fuxi_section_faq{
                            margin-top: 0.1rem;
                            font-size: 0.18rem;
                            font-weight:400;
                            color:rgba(94,130,241,1);
                            line-height: 0.34rem;

                        }
                        .testnet_fuxi_sertion_btns{
                            cursor: pointer;
                            margin-top: 0.3rem;
                            width: 2rem;
                            height: 0.5rem;
                            border-radius: 0.25rem;
                            background: rgba(94,130,241,1);
                            text-align: center;
                            line-height: 0.5rem;
                            color: #fff;
                            font-size: 0.18rem;
                        }
                    }
                }
            }
        }
        .testnet_three_nayancat_container{
            background: #F8F9FC;
            .testnet_three_nyancat_content_wrap{
                max-width: 12rem;
                margin: 0 auto;
                .testnet_nyancat_content{
                    display: flex;
                    padding: 1.05rem 0;
                    .testnet_nyancat_img_content{
                        flex: 1;
                        display: flex;
                        justify-content: flex-end;
                        margin-right: 1.51rem;
                        img{
                            max-width: 3rem;
                            width: 100%;
                        }
                    }
                    .testnet_nyancat_section_content{
                        flex: 1;
                        .testnet_nyancat_section_title{
                            font-size: 0.36rem;
                            font-weight:400;
                            color:rgba(49,50,54,1);
                            line-height: 0.43rem;
                        }
                        .testnet_nyancat_section_text{
                            margin-top: 0.4rem;
                            font-size: 0.18rem;
                            font-weight:400;
                            color:rgba(124,125,141,1);
                            line-height: 0.34rem;
                        }
                        .testnet_nyancat_section_faq{
                            margin-top: 0.1rem;
                            font-size: 0.18rem;
                            font-weight:400;
                            color:rgba(94,130,241,1);
                            line-height: 0.34rem;

                        }
                        .testnet_nyancat_sertion_btns{
                            cursor: pointer;
                            margin-top: 0.3rem;
                            width: 2rem;
                            height: 0.5rem;
                            border-radius: 0.25rem;
                            background: rgba(94,130,241,1);
                            text-align: center;
                            line-height: 0.5rem;
                            color: #fff;
                            font-size: 0.18rem;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width:768px) and (max-width: 1200px){
        .testnet_three_container{
            .testent_three_header_content{
                .testnet_three_header_wrap{
                    margin: 0 10%;
                    .testnet_three_header_title{

                    }
                }
            }
            .testnet_three_bottom_content{
                .testnet_three_bottom_content_wrap{
                    .testnet_fuxi_content{
                        margin-left: 5%;
                        margin-right: 5%;
                        .testnet_fuxi_img_content{
                            margin-right: 0.5rem;
                            margin-left: 10%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            img{
                                width: 2rem;
                                height: 2rem;
                            }
                        }
                    }
                }
            }
            .testnet_three_nayancat_container{
                .testnet_three_nyancat_content_wrap{
                    .testnet_nyancat_content{
                        margin-left: 5%;
                        margin-right: 5%;
                        .testnet_nyancat_img_content{
                            margin-left: 10%;
                            margin-right: 0;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            img{
                                width: 2rem !important;
                                height: 2rem;
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width:375px) and (max-width: 768px){
        .testnet_three_container{
            .testent_three_header_content{
                .testnet_three_header_wrap{
                    margin: 0 0.2rem;
                    .testnet_three_header_title{

                    }
                }
            }
            .testnet_three_bottom_content{
                .testnet_three_bottom_content_wrap{
                    .testnet_fuxi_content{
                        margin-left: 5%;
                        margin-right: 5%;
                        margin-bottom: 0.66rem;
                        flex-direction: column-reverse;
                        .testnet_fuxi_img_content{
                            margin-top: 0.5rem;
                            margin-right: 0;
                            margin-left: 0;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            img{
                                width: 2.8rem;
                                height: 2.8rem;
                            }
                        }
                        .testnet_fuxi_section_content{
                            .testnet_fuxi_sertion_btns{
                                min-width: 3.2rem;
                                margin: 0.2rem auto 0 auto;
                            }
                        }
                    }
                }
            }
            .testnet_three_nayancat_container{
                .testnet_three_nyancat_content_wrap{
                    .testnet_nyancat_content{
                        margin-left: 5%;
                        margin-right: 5%;
                        flex-direction: column;
                        .testnet_nyancat_img_content{
                            margin-top: 0.5rem;
                            margin-right: 0;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            img{
                                width: 2rem !important;
                                height: 2rem;
                            }
                        }
                        .testnet_nyancat_section_content{
                            .testnet_nyancat_sertion_btns{
                                min-width: 3.2rem;
                                margin: 0.2rem auto 0 auto;
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 375px){
        .testnet_three_container{
            .testent_three_header_content{
                .testnet_three_header_wrap{
                    margin: 0 10%;
                    .testnet_three_header_title{

                    }
                }
            }
            .testnet_three_bottom_content{
                .testnet_three_bottom_content_wrap{
                    .testnet_fuxi_content{
                        margin-top: 0.5rem;
                        margin-left: 5%;
                        margin-right: 5%;
                        flex-direction: column-reverse;
                        .testnet_fuxi_img_content{
                            margin-top: 0.5rem;
                            margin-right: 0;
                            margin-left: 10%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            img{
                                width: 2.8rem;
                                height: 2.8rem;
                            }
                        }
                        .testnet_fuxi_section_content{
                            .testnet_fuxi_section_text{
                                margin-top: 0.2rem;
                                font-size: 0.14rem;
                            }
                            .testnet_fuxi_section_faq{
                                font-size: 0.14rem;
                            }
                            .testnet_fuxi_section_title{
                                font-size: 0.18rem;
                                line-height: 0.36rem;
                            }
                            .testnet_fuxi_sertion_btns{
                                max-width: 3.2rem;
                                margin: 0.2rem auto 0 auto;
                                font-size: 0.14rem;
                            }
                        }
                    }
                }
            }
            .testnet_three_nayancat_container{
                .testnet_three_nyancat_content_wrap{
                    .testnet_nyancat_content{
                        padding-top: 0;
                        margin-left: 5%;
                        margin-right: 5%;
                        flex-direction: column;
                        .testnet_nyancat_section_content{
                            padding-top: 0.6rem;
                            .testnet_nyancat_section_title{
                                font-size: 0.18rem;
                                line-height: 0.36rem;
                            }
                            .testnet_nyancat_section_text{
                                font-size: 0.14rem;
                            }
                            .testnet_nyancat_section_faq{
                                font-size: 0.14rem;
                            }
                            .testnet_nyancat_sertion_btns{
                                max-width: 3.2rem;
                                font-size: 0.14rem;
                                margin: 0.2rem auto 0 auto;
                            }
                        }
                        .testnet_nyancat_img_content{
                            margin-top: 0.5rem;
                            margin-right: 0;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            img{
                                width: 2rem !important;
                                height: 2rem;
                            }
                        }
                    }
                }
            }
        }
    }
</style>