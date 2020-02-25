<template>
    <div class="mainnet_content_container">
        <div class="mainnet_content_wrap">
            <div class="mainnet_header_content">
                <h3 class="mainnet_header_title">Introduction</h3>
                <p class="mainnet_header_text_content">At the "center" of the IRIS network is a blockchain known as the IRIS Hub, which is a Proof-of-Stake (PoS) blockchain built on Cosmos SDK and Tendermint.It will be the first regional hub that connects to the Cosmos Hub as one of its zones. </p>
                <p class="mainnet_header_text_content">The IRIS hub is equipped with a service protocol that coordinates on-chain transaction processing with off-chain data processing and business logic execution.</p>
                <p class="mainnet_header_text_content"> We have also enhanced the IBC protocol to facilitate cross-chain invocation of those off-chain services, if so desired.</p>
            </div>
        </div>
        <div class="mainnet_token_content">
            <div class="mainnet_token_header">
                <div class="mainnet_token_header_content">
                    <h4 class="mainnet_token_header_title">IRIS Tokens</h4>
                    <p class="mainnet_token_header_section">The IRIS hub has its own native token known as IRIS. It is designed to serve three purposes in the network.</p>
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
                            <h5 class="mainnet_token_center_staking_title">Staking</h5>
                            <p class="mainnet_token_center_staking_section">Similar to the ATOM token in the Cosmos Hub, the IRIS token will be used as a staking token to secure the PoS blockchain.</p>
                        </div>
                    </div>
                    <div class="mainnet_token_center_transaction">
                        <div class="mainnet_token_center_transaction_icon">
                            <img src="../assets/irisnetThree/transaction.png" alt="">
                        </div>
                        <div class="mainnet_token_center_transaction_text">
                            <h5 class="mainnet_token_center_transaction_title">Transaction Fee</h5>
                            <p class="mainnet_token_center_transaction_section">The IRIS token will also be used to pay fees for all transactions in the IRIS network.</p>
                        </div>
                    </div>
                    <div class="mainnet_token_center_service">
                        <div class="mainnet_token_center_service_icon">
                            <img src="../assets/irisnetThree/service.png" alt="">
                        </div>
                        <div class="mainnet_token_center_service_text">
                            <h5 class="mainnet_token_center_service_title">Service Fee</h5>
                            <p class="mainnet_token_center_service_section">It is required that service providers in the IRIS network charge service fees denominated in the IRIS token.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mainnet_token_footer">
                <div class="mainnet_token_footer_content">
                    <p class="mainnet_token_footer_section">It is intended that the IRIS network will eventually support all whitelisted fee tokens from the Cosmos network, which can be used to pay the transaction fees and service fees.</p>
                </div>
            </div>
        </div>
        <div class="mainnet_tools_content">
            <div class="mainnet_tools_content_wrap">
                <div class="mainnet_tools_wallet_content">
                    <h3 class="mainnet_tools_wallet_title">Wallets</h3>
                    <p class="mainnet_tools_wallet_section">These web and mobile wallets allow you to store & transfer IRIS, delegate IRIS to validators, and some of them also support ATOM. Note that we do not endorse any of the wallets, they are listed for your convenience.</p>
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
                    <h3 class="mainnet_tools_explorer_title">Explorers</h3>
                    <p class="mainnet_tools_explorer_section">These block explorers allow you to search, view and analyze IRIS Hub data—like blocks, transactions, validators, governance including params or proposals, etc.</p>
                    <div class="mainnet_tools_explorer_logo_content">
                        <div class="mainnet_tools_explorer_logo_list_content">
                            <a href="" class="mainnet_tools_explorer_logo_link">
                                <div class="mainnet_tools_explorer_img">
                                    <img src="../assets/irisnetThree/irisplorer.png" alt="">
                                </div>
                                <div class="mainnet_tools_explorer_name">IRISplorer</div>
                            </a>
                            <a href="" class="mainnet_tools_explorer_logo_link">
                                <div class="mainnet_tools_explorer_img">
                                    <img src="../assets/irisnetThree/big_dipper.png" alt="">
                                </div>
                                <div class="mainnet_tools_explorer_name">Big Dipper</div>
                            </a>
                        </div>
                        <div class="mainnet_tools_explorer_logo_list_content">
                            <a href="" class="mainnet_tools_explorer_logo_link">
                                <div class="mainnet_tools_explorer_img">
                                    <img src="../assets/irisnetThree/hubble.png" alt="">
                                </div>
                                <div class="mainnet_tools_explorer_name">Hubble</div>
                            </a>
                            <a href="" class="mainnet_tools_explorer_logo_link">
                                <div class="mainnet_tools_explorer_img">
                                    <img src="../assets/irisnetThree/mintscan.png" alt="">
                                </div>
                                <div class="mainnet_tools_explorer_name">Mintscan</div>
                            </a>
                        </div>
                        <div class="mainnet_tools_explorer_logo_list_content">
                            <a href="" class="mainnet_tools_explorer_logo_link">
                                <div class="mainnet_tools_explorer_img">
                                    <img src="../assets/irisnetThree/look.png" alt="">
                                </div>
                                <div class="mainnet_tools_explorer_name">LOOK</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mainnet_tools_staking_tools_content">
                    <h3 class="mainnet_tools_staking_tools_title">Staking Tools</h3>
                    <p class="mainnet_tools_staking_section">Those tools, contributed by IRISnet validators and developers, facilitates IRIS token holders to delegate via web wallets and Ledger hardware wallets, etc . Before using these tools, you need to assure their security.</p>
                    <div class="mainnet_tools_staking_tools_logo_content">
                        <div class="mainnet_tools_staking_tools_logo_list_content">
                            <a href="" class="mainnet_tooks_staking_tools_logo_link">
                                <div class="mainnet_tools_staking_tools_img">
                                    <img src="../assets/irisnetThree/hashekey.png" alt="">
                                </div>
                                <div class="mainnet_tools_staking_tools_name">HashKey Hub</div>
                            </a>
                            <a href="" class="mainnet_tooks_staking_tools_logo_link">
                                <div class="mainnet_tools_staking_tools_img">
                                    <img src="../assets/irisnetThree/mathwallet.png" alt="">
                                </div>
                                <div class="mainnet_tools_staking_tools_name">Math Wallet</div>
                            </a>
                        </div>
                        <div class="mainnet_tools_staking_tools_logo_list_content">
                            <a href="" class="mainnet_tooks_staking_tools_logo_link">
                                <div class="mainnet_tools_staking_tools_img">
                                    <img src="../assets/irisnetThree/node_one.png" alt="">
                                </div>
                                <div class="mainnet_tools_staking_tools_name">01node.com</div>
                            </a>
                            <a href="" class="mainnet_tooks_staking_tools_logo_link">
                                <div class="mainnet_tools_staking_tools_img">
                                    <img src="../assets/irisnetThree/mintscan.png" alt="">
                                </div>
                                <div class="mainnet_tools_staking_tools_name">Cosmostation</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MinnetThree",
        data(){
            return{
                wallets:[
                    {
                        isAandroid: true,
                        isiOS: true,
                        require: require("../assets/irisnetThree/rainbow.png"),
                        name: "Rainbow",
                        href:""
                    },
                    {
                        isAandroid: true,
                        isiOS: true,
                        require:require("../assets/irisnetThree/mathwallet.png"),
                        name: "Math wallet",
                        href:""
                    },
                    {
                        isAandroid: true,
                        isiOS: true,
                        require:require("../assets/irisnetThree/wetez.png"),
                        name: "Wetez",
                        href:""
                    },
                    {
                        isAandroid: true,
                        isiOS: true,
                        require:require("../assets/irisnetThree/cosmostation.png"),
                        name: "Cosmostation",
                        href:""
                    },
                    {
                        isAandroid: true,
                        isiOS: true,
                        require:require("../assets/irisnetThree/syncnode.png"),
                        name: "SyncNode",
                        href:""
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
                        width: calc(100% - 208px);
                        margin: 1rem 0 1.06rem 0;
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
</style>