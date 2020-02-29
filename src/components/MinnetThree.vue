<template>
    <div class="mainnet_content_container">
        <div class="mainnet_content_wrap">
            <div class="mainnet_header_content">
                <h3 class="mainnet_header_title">{{$t("message.mainnetThree.title")}}</h3>
                <p  v-if="$i18n.locale ==='CN'" v-html="cnMessage.mainnetThree.section"  class="mainnet_header_text_content"></p>
                <p  v-if="$i18n.locale ==='EN'" v-html="enMessage.mainnetThree.section"  class="mainnet_header_text_content"></p>
                <p class="mainnet_header_text_content">{{$t("message.mainnetThree.secondSection")}}</p>
                <p class="mainnet_header_text_content">{{$t("message.mainnetThree.threeSection")}}</p>
                <p class="mainnet_header_text_content">{{$t("message.mainnetThree.fourSection")}}</p>
            </div>
        </div>
        <div class="mainnet_token_content">
            <div class="mainnet_token_header">
                <div class="mainnet_token_header_content">
                    <h4 class="mainnet_token_header_title">{{$t("message.mainnetThree.token.title")}}</h4>
                    <p class="mainnet_token_header_section">{{$t("message.mainnetThree.token.section")}}</p>
                </div>
            </div>
            <div class="mainnet_token_center">
                <div class="mainnet_token_img_content">
                    <img src="../assets/irisnetThree/mainnet_token_center.png" alt="">
                </div>
                <div class="mainnet_token_center_content">
                    <div class="mainnet_token_center_staking">
                        <div class="mainnet_token_center_staking_icon">
                            <img src="../assets/irisnetThree/staking.png" alt="">
                        </div>
                        <div class="mainnet_token_center_staking_text">
                            <h5 class="mainnet_token_center_staking_title">{{$t("message.mainnetThree.token.staking.title")}}</h5>
                            <p class="mainnet_token_center_staking_section">{{$t("message.mainnetThree.token.staking.section")}}</p>
                        </div>
                    </div>
                    <div class="mainnet_token_center_transaction">
                        <div class="mainnet_token_center_transaction_icon">
                            <img src="../assets/irisnetThree/transaction.png" alt="">
                        </div>
                        <div class="mainnet_token_center_transaction_text">
                            <h5 class="mainnet_token_center_transaction_title">{{$t("message.mainnetThree.token.transactionFee.title")}}</h5>
                            <p class="mainnet_token_center_transaction_section">{{$t("message.mainnetThree.token.transactionFee.section")}}</p>
                        </div>
                    </div>
                    <div class="mainnet_token_center_service">
                        <div class="mainnet_token_center_service_icon">
                            <img src="../assets/irisnetThree/service.png" alt="">
                        </div>
                        <div class="mainnet_token_center_service_text">
                            <h5 class="mainnet_token_center_service_title">{{$t("message.mainnetThree.token.serviceFee.title")}}</h5>
                            <p class="mainnet_token_center_service_section">{{$t("message.mainnetThree.token.serviceFee.section")}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mainnet_token_footer">
                <div class="mainnet_token_footer_content">
                    <p class="mainnet_token_footer_section">{{$t("message.mainnetThree.token.bottomSection")}}</p>
                </div>
            </div>
        </div>
        <div class="mainnet_tools_content">
            <div class="mainnet_tools_content_wrap">
                <div class="mainnet_tools_wallet_content">
                    <h3 class="mainnet_tools_wallet_title">{{$t("message.mainnetThree.wallet.title")}}</h3>
                    <p class="mainnet_tools_wallet_section">{{$t("message.mainnetThree.wallet.section")}}</p>
                    <ul class="miannet_tools_wallet_list">
                        <li class="mainnet_tools_wallet_list_item" v-for="(item,index) in wallets" :key="index">
                            <a :href="item.href" target="_blank" class="mainnet_tools_wallet_link_content">
                                <div class="mainnet_tools_logo_content">
                                    <img :src="item.require">
                                </div>
                                <p class="mainnet_tools_wallet_name">
                                    <span>{{item.name}}</span>
                                </p>
                                <div class="os_icon_content">
                                    <img v-if="item.isAandroid" src="../assets/irisnetThree/android_logo.png" alt="">
                                    <img v-if="item.isiOS" src="../assets/irisnetThree/ios_logo.png" alt="">
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="mainnet_tools_explorer_content">
                    <h3 class="mainnet_tools_explorer_title">{{$t("message.mainnetThree.explorer.title")}}</h3>
                    <p class="mainnet_tools_explorer_section">{{$t("message.mainnetThree.explorer.section")}}</p>
                    <div class="mainnet_tools_explorer_logo_content">
                        <ul class="miannet_tools_explorer_list">
                            <li class="mainnet_tools_explorer_list_item" v-for="(item,index) in explorer" :key="index">
                                <a :href="item.href" target="_blank" class="mainnet_tools_explorer_link_content">
                                    <div class="mainnet_tools_logo_content">
                                        <img :src="item.require">
                                    </div>
                                    <p class="mainnet_tools_explorer_name">
                                        <span>{{item.name}}</span>
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mainnet_tools_staking_tools_content">
                    <h3 class="mainnet_tools_staking_tools_title">{{$t("message.mainnetThree.stakingTools.title")}}</h3>
                    <p class="mainnet_tools_staking_section">{{$t("message.mainnetThree.stakingTools.section")}}</p>
                    <div class="mainnet_tools_staking_tools_logo_content">
                        <ul class="miannet_tools_staking_list">
                            <li class="mainnet_tools_staking_list_item" v-for="(item,index) in staking" :key="index">
                                <a :href="item.href" target="_blank" class="mainnet_tools_staking_link_content">
                                    <div class="mainnet_tools_logo_content">
                                        <img :src="item.require">
                                    </div>
                                    <p class="mainnet_tools_staking_name">
                                        <span>{{item.name}}</span>
                                    </p>
                                </a>
                            </li>
                        </ul>
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
        name: "MinnetThree",
        data(){
            return{
                enMessage:enMessage,
                cnMessage:cnMessage,
                wallets:[
                    {
                        isAandroid: true,
                        isiOS: true,
                        require: require("../assets/irisnetThree/rainbow.png"),
                        name: "Rainbow",
                        href:"https://www.rainbow.one/"
                    },
                    {
                        isAandroid: true,
                        isiOS: true,
                        require:require("../assets/irisnetThree/mathwallet.png"),
                        name: "Math wallet",
                        href:"http://www.mathwallet.org/"
                    },
                    {
                        isAandroid: true,
                        isiOS: true,
                        require:require("../assets/irisnetThree/wetez.png"),
                        name: "Wetez",
                        href:"https://www.wetez.io/pc/homepage"
                    },
                    {
                        isAandroid: true,
                        isiOS: true,
                        require:require("../assets/irisnetThree/cosmostation.png"),
                        name: "Cosmostation",
                        href:"https://www.cosmostation.io/"
                    },
                    {
                        isAandroid: true,
                        isiOS: true,
                        require:require("../assets/irisnetThree/syncNode.png"),
                        name: "SyncNode",
                        href:"https://wallet.syncnode.ro/"
                    },
                ],
                explorer:[
                    {
                        require:require('../assets/irisnetThree/irisplorer.png'),
                        name:'IRISplorer',
                        href:'https://www.irisplorer.io/#/validators'
                    },
                    {
                        require:require('../assets/irisnetThree/big_dipper.png'),
                        name:'Big-Dipper',
                        href:'https://iris.bigdipper.live/'
                    },
                    {
                        require:require('../assets/irisnetThree/hubble.png'),
                        name:'Hubble',
                        href:'https://hubble.figment.network/iris/chains/irishub'
                    },
                    {
                        require:require('../assets/irisnetThree/mintscan.png'),
                        name:'Mintscan',
                        href:'https://irishub.mintscan.io/'
                    },
                    {
                        require:require('../assets/irisnetThree/look.png'),
                        name:'LOOK',
                        href:'https://look.ping.pub/validator?chain=irishub'
                    }

                ],
                staking:[
                    {
                        require:require('../assets/irisnetThree/hashekey.png'),
                        name:'HashKey Hub',
                        href:'https://hub.hashkey.com/#/'
                    },
                    {
                        require:require('../assets/irisnetThree/mathwallet.png'),
                        name:'Math Wallet',
                        href:'https://mathwallet.net/web/irisnet'
                    },
                    {
                        require:require('../assets/irisnetThree/node_one.png'),
                        name:'01node.com',
                        href:'https://iris-delegator.01node.com/'
                    },
                    {
                        require:require('../assets/irisnetThree/mintscan.png'),
                        name:'Cosmostation',
                        href:'https://wallet.cosmostation.io/?network=iris'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .mainnet_content_container{
        background: #F8F9FC;
        .mainnet_content_wrap{
            max-width: 12rem;
            margin:0 auto;
            padding-top: 0.6rem;
            text-align: center;
            .mainnet_header_content{
                max-width: 7.2rem;
                margin:0 auto;
                .mainnet_header_title{
                    font-size: 0.36rem;
                    font-weight: 600;
                    line-height: 0.43rem;
                    padding-top: 1rem;
                    margin-bottom: 0.2rem;
                    color: #313236;

                }
                .mainnet_header_text_content{
                    margin-top: 0.15rem;
                    font-size: 0.18rem;
                    line-height: 0.34rem;
                    font-weight: 400;
                    color: #7C7D8D;
                }
                .mainnet_header_text_content:first-child{
                    margin-top: 0;
                }
                .mainnet_header_text_content:last-child{
                    margin-bottom: 1rem;
                }
            }
        }
        .mainnet_token_content{
            background: linear-gradient(90deg,rgba(39,38,159,1) 0%,rgba(14,15,105,1) 100%);;
            .mainnet_token_header{
                display: flex;
                max-width: 12rem;
                margin: 0 auto;
                justify-content: flex-end;
                color: #fff;
                .mainnet_token_header_content{
                    width: 6.3rem;
                    margin-top: 1rem;
                    .mainnet_token_header_title{
                        font-size: 0.36rem;
                        font-weight: 600;
                        line-height: 0.43rem;
                        margin-bottom: 0.2rem;
                    }
                    .mainnet_token_header_section{
                        font-size: 0.22rem;
                        font-weight:400;
                        color:#7F94E2;
                        line-height:0.34rem;
                    }
                }
            }
            .mainnet_token_center{
                display:flex;
                max-width: 12rem;
                margin: 0 auto;
                .mainnet_token_img_content{
                    flex: 1;
                    margin-right: 0.6rem;
                    img{
                        width: 100%;
                    }
                }
                .mainnet_token_center_content{
                    flex:1;
                    display: flex;
                    flex-direction: column;
                    .mainnet_token_center_staking{
                        flex: 1;
                        display: flex;
                        margin-top: 0.53rem;
                        align-items: center;
                        .mainnet_token_center_staking_icon{
                            margin: 0 0.5rem 0 0;
                            img{
                              width: 0.6rem;
                            }
                        }
                        .mainnet_token_center_staking_text{
                            min-width: 5.2rem;
                            .mainnet_token_center_staking_title{
                                font-size:0.22rem;
                                font-weight:600;
                                color:#E2E7F8;
                                line-height:0.26rem;
                            }
                            .mainnet_token_center_staking_section{
                                margin-top: 0.15rem;
                                font-size: 0.17rem;
                                font-weight:400;
                                color:rgba(111,133,212,1);
                                line-height:0.3rem;
                            }
                        }
                    }
                    .mainnet_token_center_transaction{
                        flex: 1;
                        display: flex;
                        margin-top: 0.2rem;
                        .mainnet_token_center_transaction_icon{
                            margin: 0 0.5rem 0 0;
                            img{
                                width: 0.6rem;
                            }
                        }
                        .mainnet_token_center_transaction_text{
                            min-width: 5.2rem;
                            .mainnet_token_center_transaction_title{
                                font-size:0.22rem;
                                font-weight:600;
                                color:#E2E7F8;
                                line-height:0.26rem;
                            }
                            .mainnet_token_center_transaction_section{
                                margin-top: 0.15rem;
                                font-size:0.17rem;
                                font-weight:400;
                                color:rgba(111,133,212,1);
                                line-height:0.3rem;
                            }
                        }
                    }
                    .mainnet_token_center_service{
                        flex: 1;
                        display: flex;
                        .mainnet_token_center_service_icon{
                            margin: 0 0.5rem 0 0;
                            img{
                                width: 0.6rem;
                            }
                        }
                        .mainnet_token_center_service_text{
                            min-width: 5.2rem;
                            .mainnet_token_center_service_title{
                                font-size:0.22rem;
                                font-weight:600;
                                color:#E2E7F8;
                                line-height:0.26rem;
                            }
                            .mainnet_token_center_service_section{
                                margin-top: 0.15rem;
                                font-size:0.17rem;
                                font-weight:400;
                                color:rgba(111,133,212,1);
                                line-height:0.3rem;
                            }
                        }
                    }
                }
            }
            .mainnet_token_footer{
                display: flex;
                max-width: 12rem;
                margin: 0 auto;
                justify-content: flex-end;
                .mainnet_token_footer_content{
                    width: 6.3rem;
                    margin: 0.62rem 0 0.98rem 0;
                    .mainnet_token_footer_section{
                        font-size:17px;
                        font-weight:400;
                        color:rgba(127,148,226,1);
                        line-height:34px;
                    }
                }
            }
        }
        .mainnet_tools_content{
            background: #FFFFFF;
            .mainnet_tools_content_wrap{
                max-width: 12rem;
                margin:0 auto;
                .mainnet_tools_wallet_content{
                    padding-top: 1rem;
                    .mainnet_tools_wallet_title{
                        font-size:36px;
                        font-weight:400;
                        color:rgba(49,50,54,1);
                        line-height:65px;
                    }
                    .mainnet_tools_wallet_section{
                        margin-top: 0.15rem;
                        font-size:22px;
                        font-weight:400;
                        color:rgba(124,125,141,1);
                        line-height:34px;
                    }
                    .miannet_tools_wallet_list{
                        display: flex;
                        margin-top: 0.5rem;
                        .mainnet_tools_wallet_list_item{
                            flex: 1;
                            min-width: 2.08rem;
                            margin-right: 0.4rem;
                            background:rgba(248,249,252,1);
                            border-radius:5px;
                            display: flex;
                            justify-content: center;
                            padding: 0.3rem 0 0.15rem 0;
                            .mainnet_tools_wallet_link_content{
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                text-align: center;
                                .mainnet_tools_logo_content{
                                    width: 0.7rem;
                                    height: 0.7rem;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    img{
                                        width: 100%;
                                    }
                                }
                                .os_icon_content{
                                    display: flex;
                                    justify-content: center;
                                    img{
                                        width: 0.16rem;
                                        margin-right: 0.15rem;
                                    }
                                    img:last-child{
                                        margin-right: 0;
                                    }
                                }
                                .mainnet_tools_wallet_name{
                                    margin:  0.27rem 0 0.15rem 0;
                                    font-size:17px;
                                    font-weight:400;
                                    color:rgba(124,125,141,1);
                                    line-height:30px;
                                }
                            }
                        }
                        .mainnet_tools_wallet_list_item:last-child{
                            margin-right: 0;
                        }
                    }
                }
                .mainnet_tools_explorer_content{
                    margin-top: 1rem;
                    .mainnet_tools_explorer_title{
                        font-size:36px;
                        font-weight:400;
                        color:rgba(49,50,54,1);
                        line-height:65px;
                    }
                    .mainnet_tools_explorer_section{
                        font-size:22px;
                        font-weight:400;
                        color:rgba(124,125,141,1);
                        line-height:34px;
                    }
                    .mainnet_tools_explorer_logo_content{
                        display: flex;
                        margin-top: 0.5rem;
                        .miannet_tools_explorer_list{
                            display: flex;
                            margin-top: 0.5rem;
                            .mainnet_tools_explorer_list_item:last-child{
                                margin-right: 0;
                            }
                            .mainnet_tools_explorer_list_item{
                                flex: 1;
                                min-width: 2.08rem;
                                margin-right: 0.4rem;
                                background:rgba(248,249,252,1);
                                border-radius:5px;
                                display: flex;
                                justify-content: center;
                                padding: 0.3rem 0 0.15rem 0;
                                .mainnet_tools_explorer_link_content{
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    text-align: center;
                                    .mainnet_tools_logo_content{
                                        width: 0.7rem;
                                        height: 0.7rem;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        img{
                                            width: 100%;
                                        }
                                    }
                                    .mainnet_tools_explorer_name{
                                        margin:  0.27rem 0 0.15rem 0;
                                        font-size:17px;
                                        font-weight:400;
                                        color:rgba(124,125,141,1);
                                        line-height:30px;
                                    }
                                }
                            }
                            .mainnet_tools_wallet_list_item:last-child{
                                margin-right: 0;
                            }
                        }
                        .mainnet_tools_explorer_logo_list_content{
                            display: flex;
                            flex: 2;
                            margin-right: 0.4rem;
                            .mainnet_tools_explorer_logo_link{
                                flex: 1;
                                display: inline-block;
                                background: #F8F9FC;
                                border-radius: 0.05rem;
                                margin-right: 0.4rem;
                                text-align: center;
                                .mainnet_tools_explorer_img{
                                    width: 0.7rem;
                                    height: 0.7rem;
                                    margin: 0.46rem auto 0.3rem auto;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    img {
                                        width: 100%;
                                    }
                                }
                                .mainnet_tools_explorer_name{
                                    padding-bottom: 0.15rem;
                                    font-size:17px;
                                    font-weight:400;
                                    color:rgba(124,125,141,1);
                                    line-height:30px;
                                }
                            }
                            .mainnet_tools_explorer_logo_link:last-child{
                                margin-right: 0;
                            }
                        }
                        .mainnet_tools_explorer_logo_list_content:last-child{
                            display: flex;
                            flex: 1;
                            max-width: 2.08rem;
                            margin-right: 0;
                        }
                    }
                }
                .mainnet_tools_staking_tools_content{
                    margin-bottom: 0.6rem;
                    .mainnet_tools_staking_tools_title{
                        margin-top: 1rem;
                        font-size:36px;
                        font-weight:400;
                        color:rgba(49,50,54,1);
                        line-height:65px;
                    }
                    .mainnet_tools_staking_section{
                        margin-top: 0.15rem;
                        font-size:22px;
                        font-weight:400;
                        color:rgba(124,125,141,1);
                        line-height:34px;
                    }
                    .mainnet_tools_staking_tools_logo_content{
                        display: flex;
                        margin-top: 0.5rem;
                        .miannet_tools_staking_list{
                            display: flex;
                            margin-top: 0.5rem;
                            .mainnet_tools_staking_list_item{
                                flex: 1;
                                min-width: 2.08rem;
                                margin-right: 0.4rem;
                                background:rgba(248,249,252,1);
                                border-radius:5px;
                                display: flex;
                                justify-content: center;
                                padding: 0.3rem 0 0.15rem 0;
                                .mainnet_tools_staking_link_content{
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    text-align: center;
                                    .mainnet_tools_logo_content{
                                        width: 0.7rem;
                                        height: 0.7rem;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        img{
                                            width: 100%;
                                        }
                                    }
                                    .mainnet_tools_staking_name{
                                        margin:  0.27rem 0 0.15rem 0;
                                        font-size:17px;
                                        font-weight:400;
                                        color:rgba(124,125,141,1);
                                        line-height:30px;
                                    }
                                }
                            }
                            .mainnet_tools_wallet_list_item:last-child{
                                margin-right: 0;
                            }
                        }
                        .mainnet_tools_staking_tools_logo_list_content{
                            flex: 1;
                            display: flex;
                            .mainnet_tooks_staking_tools_logo_link{
                                flex: 1;
                                display: inline-block;
                                background: #F8F9FC;
                                border-radius: 0.05rem;
                                margin-right: 0.4rem;
                                text-align: center;
                                .mainnet_tools_staking_tools_img{
                                    width: 0.7rem;
                                    height: 0.7rem;
                                    margin: 0.46rem auto 0.3rem auto;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    img {
                                        width: 100%;
                                    }
                                }
                                .mainnet_tools_staking_tools_name{
                                    padding-bottom: 0.15rem;
                                    font-size:17px;
                                    font-weight:400;
                                    color:rgba(124,125,141,1);
                                    line-height:30px;
                                }
                            }
                        }
                        .mainnet_tools_staking_tools_logo_list_content:last-child{
                            flex: 1;

                        }
                    }
                }
            }
        }
    }
    @media screen  and (max-width: 1200px){
        .mainnet_content_container{
            .mainnet_token_content{
                .mainnet_token_header{
                    margin: 0 0.2rem;
                    justify-content: flex-start;
                    .mainnet_token_header_content{
                        width: auto;
                    }
                }
                .mainnet_token_center{
                    margin: 0 0.2rem;
                    .mainnet_token_img_content{
                        display: none;
                    }
                    .mainnet_token_center_content{
                        .mainnet_token_center_staking_text{
                            min-width: auto !important;
                            .mainnet_token_center_staking_section{
                                word-wrap: break-word;
                            }
                        }

                    }
                    .mainnet_token_center_transaction{
                        margin-top: 0.6rem !important;
                        .mainnet_token_center_transaction_text{
                            min-width: auto !important;
                            .mainnet_token_center_transaction_section{
                                word-wrap: break-word;
                            }
                        }
                    }
                    .mainnet_token_center_service{
                        margin-top: 0.6rem;
                        .mainnet_token_center_service_text{
                            min-width: auto !important;
                            .mainnet_token_center_service_section{
                                word-wrap: break-word;
                            }
                        }
                    }

                }
                .mainnet_token_footer{
                    margin: 0 0.2rem;
                    justify-content: flex-start;
                    .mainnet_token_footer_content{
                        width: auto;
                    }
                }
            }
            .mainnet_tools_content{
                .mainnet_tools_content_wrap{
                    .mainnet_tools_wallet_content{
                        margin: 0 0.2rem;
                        .miannet_tools_wallet_list{
                            flex-wrap: wrap;
                            max-width: 8rem;
                            margin: 0 auto;
                            .mainnet_tools_wallet_list_item{
                                margin-top: 0.2rem;
                                max-width: 2.16rem;
                            }
                            .mainnet_tools_wallet_list_item:nth-child(3){
                                margin-right: 0;
                            }

                        }
                    }
                    .mainnet_tools_explorer_content{
                        margin-right: 0.2rem;
                        margin-left: 0.2rem;
                        .mainnet_tools_explorer_logo_content{
                            flex-direction: column;
                            .miannet_tools_explorer_list{
                                flex-wrap: wrap;
                                max-width: 8rem;
                                margin: 0 auto;
                                .mainnet_tools_explorer_list_item{
                                    margin-top: 0.2rem;
                                    max-width: 2.16rem;
                                }
                                .mainnet_tools_explorer_list_item:nth-child(3){
                                    margin-right: 0;
                                }

                            }
                        }
                    }
                    .mainnet_tools_staking_tools_content{
                        margin-right: 0.2rem;
                        margin-left: 0.2rem;
                        .mainnet_tools_staking_tools_logo_content{
                            flex-direction: column;
                            .miannet_tools_staking_list{
                                flex-wrap: wrap;
                                max-width: 8rem;
                                margin: 0 auto;
                                .mainnet_tools_staking_list_item{
                                    margin-top: 0.2rem;
                                    max-width: 2.16rem;
                                }
                                .mainnet_tools_staking_list_item:nth-child(3){
                                    margin-right: 0;
                                }

                            }
                        }
                    }
                }
            }
        }
    }

    @media screen  and (max-width: 768px){
        .mainnet_content_container{
            .mainnet_content_wrap{
                .mainnet_header_content{
                    margin: 0 0.2rem;
                }
            }
            .mainnet_token_content{
                .mainnet_token_header{
                    margin: 0 0.2rem;
                    justify-content: flex-start;
                    .mainnet_token_header_content{
                        width: auto;
                    }
                }
                .mainnet_token_center{
                    margin: 0 0.2rem;
                    .mainnet_token_img_content{
                        display: none;
                    }
                    .mainnet_token_center_content{
                        .mainnet_token_center_staking_text{
                            min-width: auto !important;
                            .mainnet_token_center_staking_section{
                                word-wrap: break-word;
                            }
                        }
                    }
                    .mainnet_token_center_transaction{
                        margin-top: 0.6rem !important;
                        .mainnet_token_center_transaction_text{
                            min-width: auto !important;
                            .mainnet_token_center_transaction_section{
                                word-wrap: break-word;
                            }
                        }
                    }
                    .mainnet_token_center_service{
                        margin-top: 0.6rem;
                        .mainnet_token_center_service_text{
                            min-width: auto !important;
                            .mainnet_token_center_service_section{
                                word-wrap: break-word;
                            }
                        }
                    }

                }
                .mainnet_token_footer{
                    margin: 0 0.2rem;
                    justify-content: flex-start;
                    .mainnet_token_footer_content{
                        width: auto;
                    }
                }
            }
            .mainnet_tools_content{
                .mainnet_tools_content_wrap{
                    .mainnet_tools_wallet_content{
                        margin: 0 0.2rem;
                        .miannet_tools_wallet_list{
                            flex-wrap: wrap;
                            max-width: 6rem;
                            margin: 0 auto;
                            justify-content: space-between;
                            .mainnet_tools_wallet_list_item{
                                margin-top: 0.2rem;
                                max-width: 2.66rem;
                            }
                            .mainnet_tools_wallet_list_item:nth-child(3){
                                margin-right: 0.4rem;
                            }
                            .mainnet_tools_wallet_list_item:nth-child(2){
                                margin-right: 0;
                            }
                            .mainnet_tools_wallet_list_item:nth-child(4){
                                margin-right: 0;
                            }

                        }
                    }
                    .mainnet_tools_explorer_content{
                        margin-right: 0.2rem;
                        margin-left: 0.2rem;
                        .mainnet_tools_explorer_logo_content{
                            .miannet_tools_explorer_list{
                                flex-wrap: wrap;
                                max-width: 6rem;
                                margin: 0 auto;
                                justify-content: space-between;
                                .mainnet_tools_explorer_list_item{
                                    margin-top: 0.2rem;
                                    max-width: 2.66rem;
                                }
                                .mainnet_tools_explorer_list_item:nth-child(3){
                                    margin-right: 0.4rem;
                                }
                                .mainnet_tools_explorer_list_item:nth-child(2){
                                    margin-right: 0;
                                }
                                .mainnet_tools_explorer_list_item:nth-child(4){
                                    margin-right: 0;
                                }

                            }
                        }
                    }
                    .mainnet_tools_staking_tools_content{
                        margin-right: 0.2rem;
                        margin-left: 0.2rem;
                        .mainnet_tools_staking_tools_logo_content{
                            .miannet_tools_staking_list{
                                flex-wrap: wrap;
                                max-width: 6rem;
                                margin: 0 auto;
                                justify-content: space-between;
                                .mainnet_tools_staking_list_item{
                                    margin-top: 0.2rem;
                                    max-width: 2.66rem;
                                }
                                .mainnet_tools_staking_list_item:nth-child(3){
                                    margin-right: 0.4rem;
                                }
                                .mainnet_tools_staking_list_item:nth-child(2){
                                    margin-right: 0;
                                }
                                .mainnet_tools_staking_list_item:nth-child(4){
                                    margin-right: 0;
                                }

                            }
                        }
                    }
                }
            }
        }
    }
    @media screen  and (max-width: 610px){
        .mainnet_content_container{
            .mainnet_token_content{
                .mainnet_token_header{
                    margin: 0 0.2rem;
                    justify-content: flex-start;
                    .mainnet_token_header_content{
                        width: auto;
                    }
                }
                .mainnet_token_center{
                    margin: 0 0.2rem;
                    .mainnet_token_img_content{
                        display: none;
                    }
                    .mainnet_token_center_content{
                        .mainnet_token_center_staking_text{
                            min-width: auto !important;
                            .mainnet_token_center_staking_section{
                                word-wrap: break-word;
                            }
                        }
                    }
                    .mainnet_token_center_transaction{
                        margin-top: 0.6rem !important;
                        .mainnet_token_center_transaction_text{
                            min-width: auto !important;
                            .mainnet_token_center_transaction_section{
                                word-wrap: break-word;
                            }
                        }
                    }
                    .mainnet_token_center_service{
                        margin-top: 0.6rem;
                        .mainnet_token_center_service_text{
                            min-width: auto !important;
                            .mainnet_token_center_service_section{
                                word-wrap: break-word;
                            }
                        }
                    }

                }
                .mainnet_token_footer{
                    margin: 0 0.2rem;
                    justify-content: flex-start;
                    .mainnet_token_footer_content{
                        width: auto;
                    }
                }
            }
            .mainnet_tools_content{
                .mainnet_tools_content_wrap{
                    .mainnet_tools_wallet_content{
                        margin: 0 0.2rem;
                        .miannet_tools_wallet_list{
                            flex-wrap: wrap;
                            max-width: 3.48rem;
                            margin: 0 auto;
                            justify-content: space-between;
                            .mainnet_tools_wallet_list_item{
                                margin-top: 0.2rem;
                                min-width: 1.6rem !important;
                                max-width: 1.6rem !important;
                            }
                            .mainnet_tools_wallet_list_item:nth-child(1){
                                margin-right: 0.2rem;
                            }
                            .mainnet_tools_wallet_list_item:nth-child(3){
                                margin-right: 0.2rem;
                            }
                            .mainnet_tools_wallet_list_item:nth-child(2){
                                margin-right: 0;
                            }
                            .mainnet_tools_wallet_list_item:nth-child(4){
                                margin-right: 0;
                            }

                        }
                    }
                    .mainnet_tools_explorer_content{
                        margin-right: 0.2rem;
                        margin-left: 0.2rem;
                        .mainnet_tools_explorer_logo_content{
                            .miannet_tools_explorer_list{
                                flex-wrap: wrap;
                                max-width: 3.48rem;
                                margin: 0 auto;
                                justify-content: space-between;
                                .mainnet_tools_explorer_list_item{
                                    margin-top: 0.2rem;
                                    min-width: 1.6rem !important;
                                    max-width: 1.6rem !important;
                                }
                                .mainnet_tools_explorer_list_item:nth-child(1){
                                    margin-right: 0.2rem;
                                }
                                .mainnet_tools_explorer_list_item:nth-child(3){
                                    margin-right: 0.2rem;
                                }
                                .mainnet_tools_explorer_list_item:nth-child(2){
                                    margin-right: 0;
                                }
                                .mainnet_tools_explorer_list_item:nth-child(4){
                                    margin-right: 0;
                                }

                            }
                        }
                    }
                    .mainnet_tools_staking_tools_content{
                        margin-right: 0.2rem;
                        margin-left: 0.2rem;
                        .mainnet_tools_staking_tools_logo_content{
                            .miannet_tools_staking_list{
                                flex-wrap: wrap;
                                max-width: 3.48rem;
                                margin: 0 auto;
                                justify-content: space-between;
                                .mainnet_tools_staking_list_item{
                                    margin-top: 0.2rem;
                                    min-width: 1.6rem !important;
                                    max-width: 1.6rem !important;
                                }
                                .mainnet_tools_staking_list_item:nth-child(1){
                                    margin-right: 0.2rem;
                                }
                                .mainnet_tools_staking_list_item:nth-child(3){
                                    margin-right: 0.2rem;
                                }
                                .mainnet_tools_staking_list_item:nth-child(2){
                                    margin-right: 0;
                                }
                                .mainnet_tools_staking_list_item:nth-child(4){
                                    margin-right: 0;
                                }

                            }
                        }
                    }
                }
            }
        }
    }
    @media screen  and (max-width: 380px){
        .mainnet_content_container{
            .mainnet_content_wrap{
                .mainnet_header_content{
                    .mainnet_header_title{
                        padding-top: 0.5rem;
                        font-size: 0.18rem;
                        line-height: 0.36rem;
                    }
                    .mainnet_header_text_content{
                        font-size: 0.14rem;
                        line-height: 0.28rem;
                    }
                    .mainnet_header_text_content:last-child{
                        margin-bottom: 0.5rem;
                    }
                }
            }
            .mainnet_token_content{
                .mainnet_token_header{
                    margin: 0 0.2rem;
                    justify-content: flex-start;
                    .mainnet_token_header_content{
                        width: auto;
                        margin-top: 0.5rem;
                        .mainnet_token_header_title{
                            font-size: 0.18rem;
                        }
                        .mainnet_token_header_section{
                            font-size: 0.16rem;
                        }
                    }
                }
                .mainnet_token_center{
                    margin: 0 0.2rem;
                    .mainnet_token_img_content{
                        display: none;
                    }
                    .mainnet_token_center_content{
                        .mainnet_token_center_staking{
                            .mainnet_token_center_staking_text{
                                min-width: auto !important;
                                .mainnet_token_center_staking_title{
                                    font-size: 0.16rem;
                                }
                                .mainnet_token_center_staking_section{
                                    font-size: 0.14rem;
                                    word-wrap: break-word;
                                }
                            }
                        }
                        .mainnet_token_center_transaction{
                            margin-top: 0.6rem !important;
                            .mainnet_token_center_transaction_text{
                                min-width: auto !important;
                                .mainnet_token_center_transaction_title{
                                    font-size: 0.16rem;
                                }
                                .mainnet_token_center_transaction_section{
                                    font-size: 0.14rem;
                                    word-wrap: break-word;
                                }
                            }
                        }
                        .mainnet_token_center_service{
                            margin-top: 0.6rem;
                            .mainnet_token_center_service_text{
                                min-width: auto !important;
                                .mainnet_token_center_service_title{
                                    font-size: 0.16rem;
                                }
                                .mainnet_token_center_transaction_section{
                                    font-size: 0.14rem;
                                    word-wrap: break-word;
                                }
                            }
                        }
                    }
                }
                .mainnet_token_footer{
                    margin: 0 0.2rem;
                    justify-content: flex-start;
                    .mainnet_token_footer_content{
                        width: auto;
                        margin-bottom: 0.89rem;
                        .mainnet_token_footer_section{
                            font-size: 0.14rem;
                        }
                    }
                }
            }
            .mainnet_tools_content{
                .mainnet_tools_content_wrap{
                    .mainnet_tools_wallet_content{
                        margin: 0 0.2rem;
                        padding-top: 0.5rem;
                        .mainnet_tools_wallet_title{
                            font-size: 0.18rem;
                        }
                        .mainnet_tools_wallet_section{
                            font-size: 0.14rem;
                        }
                        .miannet_tools_wallet_list{
                            flex-wrap: wrap;
                            max-width: 3.40rem;
                            margin: 0 auto;
                            justify-content: space-between;
                            .mainnet_tools_wallet_list_item{
                                margin-top: 0.2rem;
                                min-width: 1.4rem !important;
                                max-width: 1.4rem !important;
                            }
                            .mainnet_tools_wallet_list_item:nth-child(1){
                                margin-right: 0.15rem;
                            }
                            .mainnet_tools_wallet_list_item:nth-child(3){
                                margin-right: 0.15rem;
                            }
                            .mainnet_tools_wallet_list_item:nth-child(2){
                                margin-right: 0;
                            }
                            .mainnet_tools_wallet_list_item:nth-child(4){
                                margin-right: 0;
                            }

                        }
                    }
                    .mainnet_tools_explorer_content{
                        margin-right: 0.2rem;
                        margin-left: 0.2rem;
                        margin-top: 0.6rem;
                        .mainnet_tools_explorer_title{
                            font-size: 0.18rem;
                        }
                        .mainnet_tools_explorer_section{
                            font-size: 0.14rem;
                        }
                        .mainnet_tools_explorer_logo_content{
                            .miannet_tools_explorer_list{
                                flex-wrap: wrap;
                                max-width: 3.40rem;
                                margin: 0 auto;
                                justify-content: space-between;
                                .mainnet_tools_explorer_list_item{
                                    margin-top: 0.2rem;
                                    min-width: 1.4rem !important;
                                    max-width: 1.4rem !important;
                                }
                                .mainnet_tools_explorer_list_item:nth-child(1){
                                    margin-right: 0.15rem;
                                }
                                .mainnet_tools_explorer_list_item:nth-child(3){
                                    margin-right: 0.15rem;
                                }
                                .mainnet_tools_explorer_list_item:nth-child(2){
                                    margin-right: 0;
                                }
                                .mainnet_tools_explorer_list_item:nth-child(4){
                                    margin-right: 0;
                                }

                            }
                        }
                    }
                    .mainnet_tools_staking_tools_content{
                        margin-right: 0.2rem;
                        margin-left: 0.2rem;
                        .mainnet_tools_staking_tools_title{
                            margin-top: 0.5rem;
                            font-size: 0.18rem;
                        }
                        .mainnet_tools_staking_section{
                            font-size: 0.14rem;
                        }
                        .mainnet_tools_staking_tools_logo_content{
                            .miannet_tools_staking_list{
                                flex-wrap: wrap;
                                max-width: 3.40rem;
                                margin: 0 auto;
                                justify-content: space-between;
                                .mainnet_tools_staking_list_item{
                                    margin-top: 0.2rem;
                                    min-width: 1.4rem !important;
                                    max-width: 1.4rem !important;
                                }
                                .mainnet_tools_staking_list_item:nth-child(1){
                                    margin-right: 0.15rem;
                                }
                                .mainnet_tools_staking_list_item:nth-child(3){
                                    margin-right: 0.15rem;
                                }
                                .mainnet_tools_staking_list_item:nth-child(2){
                                    margin-right: 0;
                                }
                                .mainnet_tools_staking_list_item:nth-child(4){
                                    margin-right: 0;
                                }

                            }
                        }
                    }
                }
            }
        }
    }
</style>