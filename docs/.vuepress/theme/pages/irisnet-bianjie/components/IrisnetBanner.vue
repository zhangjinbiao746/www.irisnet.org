<template>
    <div class="irisnet_banner">
        <div class="irisnet_banner_content">
            <div class="banner_top">
                <div class="banner_top_left">
                    <div class="moniker_title">
                        <span class="title">{{ headerTitle }}</span>
                        <span class="commission_content"
                            >{{ rate }} {{ bannerContent.commission }}</span
                        >
                    </div>
                    <p>{{ bannerContent.product }}</p>
                    <h2 class="cosmos_address">{{ bannerContent.validatorAddress }}</h2>
                    <p>
                        <span>{{ headerCosmosAddress }} </span>
                        <span
                            id="cosmosAddress"
                            :data-clipboard-text="headerCosmosAddress"
                            @click="toCosmosBrowser"
                        >
                            <img src="../../../assets/irisnet-bianjie/copy_logo.png" alt="" />
                        </span>
                    </p>
                </div>
                <img class="banner_top_right" :src="getImageUrl(bannerContent.cosmosImg)" alt="" />
            </div>
            <div class="toast_content" :style="{ visibility: flShowToast ? 'visible' : 'hidden' }">
                {{ bannerContent.toastHint }}
            </div>
            <div class="banner_middle">
                <div class="common_style">
                    <span>{{ bondedTokens }}</span>
                    <span>{{ bannerContent.bondedAtoms }}</span>
                </div>
                <div class="common_style">
                    <span>{{ votingPowerNumber }}</span>
                    <span>{{ bannerContent.votingPower }}</span>
                </div>
                <div class="common_style">
                    <span>{{ rate }}</span>
                    <span>{{ bannerContent.commissionRate }}</span>
                </div>
                <div class="common_style">
                    <span>{{ bianJieUpTime }}</span>
                    <span>{{ bannerContent.uptime }}</span>
                </div>
            </div>
            <p class="banner_bottom">
                <a :href="bannerContent.guideHref" target="_blank" rel="noopener noreferrer">
                    {{ bannerContent.guide }}
                    <img src="../../../assets/irisnet-bianjie/right_icon.png" alt="" />
                </a>
            </p>
        </div>
    </div>
</template>

<script>
    import clipboardJS from 'clipboard';
    import bigNumber from 'bignumber.js';
    import { SUCCESS_CODE } from '../../../constant';

    export default {
        name: 'IrisnetBanner',
        props: ['bannerContent'],
        data() {
            return {
                headerTitle: this.bannerContent.title,
                headerCosmosAddress: this.bannerContent.address,
                flShowToast: false,
                rate: '',
                bondedTokens: '',
                votingPowerNumber: '',
                bianJieUpTime: '',
                lcdBianJieBondedTokens: '',
                missedBlocksCnt: ''
            };
        },
        methods: {
            getImageUrl(img) {
                return new URL(`../../../assets/irisnet-bianjie/${img}`,import.meta.url);
            },
            toCosmosBrowser() {
                let clipboard = new clipboardJS('#cosmosAddress');
                clipboard.on('success', (e) => {
                    this.flShowToast = true;
                    setTimeout(() => {
                        this.flShowToast = false;
                    }, 2000);
                });
            },
            formatTokens(number) {
                let integer = String(number).split('.')[0];
                let decimals = String(number).split('.')[1];
                let formattedInteger = integer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                return `${formattedInteger}.${decimals}`;
            },
            formatRate(rate) {
                return `${(rate * 100).toFixed(2)} %`;
            },
            formatUptime(missedBlocks, totalBlocks) {
                return `${(
                    ((Number(totalBlocks) - Number(missedBlocks)) / Number(totalBlocks)) *
                    100
                ).toFixed(4)} %`;
            },
            formatVotingPower(votingPower) {
                return `${(votingPower * 100).toFixed(2)} %`;
            },
            getCosmosBianJieValidator() {
                this.$axios
                    .get(
                        'https://cosmos-mainnet-rpc.allthatnode.com:1317/staking/validators/cosmosvaloper1ssm0d433seakyak8kcf93yefhknjleeds4y3em'
                    )
                    .then((res) => {
                        if (res.status === SUCCESS_CODE) {
                            return res.data;
                        }
                    })
                    .then((data) => {
                        if (data && typeof data === 'object' && Object.keys(data).length) {
                            localStorage.setItem('bondedTokens', data.result.tokens);
                            localStorage.setItem(
                                'rate',
                                data.result.commission.commission_rates.rate
                            );
                            this.bondedTokens = new bigNumber(
                                new bigNumber(localStorage.getItem('bondedTokens'))
                                    .div(1000000)
                                    .toNumber()
                            ).toFormat();
                            this.rate = this.formatRate(localStorage.getItem('rate'));
                            this.lcdBianJieBondedTokens = data.result.tokens;
                            this.headerTitle = data.result.description.moniker;
                            this.headerCosmosAddress = data.result.operator_address;
                            this.getbondedTokens();
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
            getbondedTokens() {
                this.$axios
                    .get('https://cosmos-mainnet-rpc.allthatnode.com:1317/staking/pool')
                    .then((res) => {
                        if (res.status === SUCCESS_CODE) {
                            return res.data;
                        }
                    })
                    .then((data) => {
                        if (data && typeof data === 'object' && Object.keys(data).length !== 0) {
                            if (
                                !this.lcdBianJieBondedTokens ||
                                (this.lcdBianJieBondedTokens === 0 &&
                                    localStorage.getItem('bondedTokens'))
                            ) {
                                this.lcdBianJieBondedTokens = localStorage.getItem('bondedTokens');
                            }
                            let votingPower =
                                this.lcdBianJieBondedTokens / data.result.bonded_tokens;
                            localStorage.setItem('votingPower', votingPower);
                            this.votingPowerNumber = this.formatVotingPower(
                                localStorage.getItem('votingPower')
                            );
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
            getMissedBlocksCounter() {
                this.$axios
                    .get(
                        'https://cosmos-mainnet-rpc.allthatnode.com:1317/slashing/validators/cosmosvalconspub1zcjduepqrgyyjxpe0ujefxwnkpmqz9m0hj03y09tdz9lwc0s7mvy469hulfq69f8sd/signing_info'
                    )
                    .then((res) => {
                        if (res.status === SUCCESS_CODE) {
                            return res.data;
                        }
                    })
                    .then((data) => {
                        console.log(data, 'data');
                        if (data && typeof data === 'object' && Object.keys(data).length !== 0) {
                            localStorage.setItem(
                                'missedBlocksCnt',
                                data.result.missed_blocks_counter
                            );
                            this.missedBlocksCnt = data.result.missed_blocks_counter;
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
            getSignedBlocksWindow() {
                this.$axios
                    .get('https://cosmos-mainnet-rpc.allthatnode.com:1317/slashing/parameters')
                    .then((res) => {
                        if (res.status === SUCCESS_CODE) {
                            return res.data;
                        }
                    })
                    .then((data) => {
                        if (data && typeof data === 'object' && Object.keys(data).length !== 0) {
                            if (!this.missedBlocksCnt || localStorage.getItem('missedBlocksCnt')) {
                                this.missedBlocksCnt = localStorage.getItem('missedBlocksCnt');
                            }
                            let bianJieUpTime = this.formatUptime(
                                this.missedBlocksCnt,
                                data.result.signed_blocks_window
                            );
                            localStorage.setItem('bianJieUpTime', bianJieUpTime);
                            if (!localStorage.getItem('bianJieUpTime')) {
                                this.bianJieUpTime = this.formatUptime(
                                    this.missedBlocksCnt,
                                    data.result.signed_blocks_window
                                );
                            } else {
                                this.bianJieUpTime = localStorage.getItem('bianJieUpTime');
                            }
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        mounted() {
            this.bondedTokens = localStorage.getItem('bondedTokens')
                ? this.formatTokens(
                      new bigNumber(localStorage.getItem('bondedTokens')).div(1000000)
                  )
                : '';
            this.rate = localStorage.getItem('rate')
                ? this.formatRate(localStorage.getItem('rate'))
                : '';
            this.votingPowerNumber = localStorage.getItem('votingPower')
                ? this.formatVotingPower(localStorage.getItem('votingPower'))
                : '';
            this.bianJieUpTime = localStorage.getItem('bianJieUpTime')
                ? localStorage.getItem('bianJieUpTime')
                : '';
            this.getCosmosBianJieValidator();
            this.getMissedBlocksCounter();
            this.getSignedBlocksWindow();
        }
    };
</script>

<style lang="less" scoped>
    .irisnet_banner {
        padding-top: 0.6rem;
        background: #2c2948;
        .irisnet_banner_content {
            margin: 0 auto;
            padding: 1.1rem 0 0.73rem;
            max-width: 10rem;
            @media (max-width: 768px) {
                padding: 1.1rem 0.16rem 0.73rem;
            }
            .banner_top {
                display: flex;
                justify-content: space-between;
                padding: 0 0.2rem;
                @media (max-width: 1060px) {
                    flex-direction: column-reverse;
                    justify-content: flex-start;
                    align-items: center;
                }
                @media (max-width: 768px) {
                    padding: 0;
                }
                .banner_top_left {
                    @media (max-width: 1060px) {
                        margin-top: 0.4rem;
                        text-align: center;
                    }
                    .moniker_title {
                        font-size: var(--font-32);
                        color: #fff;
                        line-height: 0.32rem;
                        @media (max-width: 450px) {
                            display: flex;
                            flex-direction: column;
                        }
                        .commission_content {
                            font-size: var(--font-20);
                        }
                    }
                    .cosmos_address {
                        margin-top: 0.35rem;
                        font-size: 0.22rem;
                        color: #fff;
                    }
                    p {
                        word-break: break-word;
                        &:nth-of-type(1) {
                            margin-top: 0.1rem;
                            font-size: 0.22rem;
                            color: rgba(255, 255, 255, 0.5);
                        }
                        &:nth-of-type(2) {
                            margin-top: 0.1rem;
                            word-break: break-all;
                            span {
                                &:nth-of-type(1) {
                                    font-size: 0.22rem;
                                    color: rgba(255, 255, 255, 0.5);
                                }
                                &:nth-of-type(2) {
                                    display: inline-block;
                                    width: 0.15rem;
                                    height: 0.17rem;
                                    cursor: pointer;
                                    img {
                                        width: 100%;
                                    }
                                }
                            }
                        }
                    }
                }
                .banner_top_right {
                    max-width: 2.92rem;
                    max-height: 1.43rem;
                }
            }
            .toast_content {
                position: relative;
                bottom: -0.2rem;
                margin: 0 auto;
                width: 1.83rem;
                height: 0.4rem;
                font-size: 0.16rem;
                color: #fff;
                text-align: center;
                line-height: 0.4rem;
                background: rgba(0, 0, 0, 0.8);
                border-radius: 0.32rem;
                visibility: hidden;
            }
            .banner_middle {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 0.36rem;
                margin-top: 0.5rem;
                @media (max-width: 1060px) {
                    grid-template-columns: repeat(2, 1fr);
                }
                @media (max-width: 450px) {
                    grid-template-columns: repeat(1, 1fr);
                }
                .common_style {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0.18rem 0;
                    background: rgba(1, 95, 190, 1);
                    border-radius: 0.04rem;
                    @media (max-width: 1060px) {
                        &:nth-of-type(odd) {
                            justify-self: flex-end;
                        }
                        width: 2.7rem;
                    }
                    @media (max-width: 768px) {
                        width: 100%;
                    }
                    @media (max-width: 450px) {
                        justify-self: center;
                        width: 80%;
                        &:nth-of-type(odd) {
                            justify-self: center;
                        }
                    }
                    span {
                        &:nth-of-type(1) {
                            color: #fff;
                        }
                        &:nth-of-type(2) {
                            margin-top: 0.06rem;
                            color: rgba(255, 255, 255, 0.5);
                        }
                    }
                }
            }
            .banner_bottom {
                margin-top: 0.6rem;
                text-align: center;
                a {
                    color: #fff;
                    border-bottom: 1px solid #fff;
                    img {
                        height: 0.11rem;
                    }
                }
            }
        }
    }
</style>
