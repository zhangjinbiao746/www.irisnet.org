<template>
    <div class="testnet_three_container">
        <div class="testent_three_header_content">
            <div class="testnet_three_header_wrap">
                <h2 class="testnet_three_header_title">Introduction</h2>
                <p class="testent_three_herder_section">There 2 testnets available to developers or validators. </p>
                <p class="testent_three_herder_section">Since the launch of mainnet, Fuxi Testnet starts to operate as a stable application testnet which has the same version as the mainnet, so that the service providers of IRISnet can develop their apps on or interact with IRIShub without running a node or lcd instance.</p>
                <p class="testent_three_herder_section"> However there is also a need for validators to test the new version of IRIShub before it can be relased to production, and this is Nyancat Testnet's focus. And new validators can also use the Nyancat Testnet to practice the validator operations.</p>
            </div>
        </div>
        <div class="testnet_three_bottom_content">
            <div class="testnet_three_bottom_content_wrap">
                <div class="testnet_fuxi_content">
                    <div class="testnet_fuxi_img_content">
                        <img src="../assets/irisnetThree/testnets_fuxi.png" alt="">
                    </div>
                    <div class="testnet_fuxi_section_content">
                        <h3 class="testnet_fuxi_section_title">FUXI Testnet</h3>
                        <p class="testnet_fuxi_section_text">The FUXI testnet runs the same software as IRIS mainnet, providing a stable test environment for the developer community (wallets, browsers, iService providers/consumers).</p>
                        <p class="testnet_fuxi_section_faq">How to Use FUXI Testnet</p>
                        <div class="testnet_fuxi_sertion_btns">FUXI Explorer</div>
                    </div>
                </div>

            </div>
        </div>
        <div class="testnet_three_nayancat_container">
            <div class="testnet_three_nyancat_content_wrap">
                  <div class="testnet_nyancat_content">
                    <div class="testnet_nyancat_section_content">
                        <h3 class="testnet_nyancat_section_title">Nyancat Testnet</h3>
                        <p class="testnet_nyancat_section_text">The Nyancat testnet runs a newer version of irishub, providing a test environment for validators to preview and test the new version before it is ready for deployment to mainnet.</p>
                        <p class="testnet_nyancat_section_faq">How to Join Nyancat Tensent</p>
                        <div class="testnet_nyancat_sertion_btns">Nyancat Explorer</div>
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