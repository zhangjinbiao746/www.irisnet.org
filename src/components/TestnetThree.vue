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
                        <div class="testnet_fuxi_sertion_btns">{{$t('message.testnetThree.fuxi.fuxiExplorer')}}</div>
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
                        <div class="testnet_nyancat_sertion_btns">{{$t('message.testnetThree.nyancat.nyancatExplorer')}}</div>
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
        name: "TestnetThree"
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
</style>