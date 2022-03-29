<template>
    <div class="home_banner_container">
        <div class="home_banner_wrap">
            <div class="home_banner_content">
                <div class="home_banner">
                    <img v-show="clientWidth > 1000" :src="$store.state.messages.thirdBanner.img" class="img_normal" alt="">
                    <img v-show="clientWidth <= 1000 && clientWidth > 500" :src="$store.state.messages.thirdBanner.img1000" class="img_1000" alt="">
                    <img v-show="clientWidth <= 500" :src="$store.state.messages.thirdBanner.img320" class="img_320" alt="">
                    <div class="description">
                        <p class="text">{{`${$store.state.messages.thirdBanner.descriptionF}`}}</p>
                        <p class="text">{{`${$store.state.messages.thirdBanner.descriptionT}`}}</p>
                    </div>
                    <a class="btn" :href="$store.state.messages.thirdBanner.btnLink" target="_blank" rel="noopener noreferrer">{{`${$store.state.messages.thirdBanner.btnLabel}`}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeBanner",
    data() {
        return {
            clientWidth: null,
        }
    },
    methods: {
        resizeWidth() {
            this.clientWidth = +document.body.clientWidth;
        }
    },
    mounted() {
        this.resizeWidth();
        window.addEventListener("resize", this.resizeWidth);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.resizeWidth);
    }

};
</script>

<style scoped lang="less">
.home_banner_container {
    width: 100%;
    background: rgba(21, 12, 54, 1);
    .home_banner_wrap {
        margin: 0 auto;
        max-width: 19.2rem;
        height: 10.8rem;
        background: url(../../assets/third_banner.png) no-repeat center / cover;
        @media(max-width: 1000px) {
            height: 9.24rem;
            background: url(../../assets/third_banner_1000.png) no-repeat center / cover;
        }
        @media(max-width: 800px) {
            height: 7.2rem;
        }
        @media(max-width: 640px) {
            height: 6rem;
        }
        @media(max-width: 500px) {
            background: url(../../assets/third_banner_320.png) no-repeat center / cover;
        }
        .home_banner_content {
            box-sizing: border-box;
            padding: 2.18rem 0 2.6rem 0;
            margin: 0 auto;
            max-width: 12rem;
            height: 100%;
            @media(max-width: 1000px) {
                padding: 1.38rem 0 0 0.8rem;
            }
            @media(max-width: 960px) {
                padding: 1.38rem 0 0 0.5rem;
            }
            @media(max-width: 890px) {
                padding: 1.38rem 0 0 0;
            }
            @media(max-width: 800px) {
                padding: 0.8rem 0 0 0.5rem;
            }
            @media(max-width: 730px) {
                padding: 0.8rem 0 0 0;
            }
            @media(max-width: 640px) {
                padding: 0.6rem 0 0 0.3rem;
            }
            @media(max-width: 590px) {
                padding: 0.6rem 0 0 0;
            }
            @media(max-width: 500px) {
                padding: 0.6rem 0.6rem 0.6rem 1.6rem;
            }
            @media(max-width: 470px) {
                padding: 0.6rem 0.6rem 0.6rem 1.2rem;
            }
            @media(max-width: 420px) {
                padding: 0.6rem 0.6rem 0.6rem 0.6rem;
            }
            @media(max-width: 350px) {
                padding: 0.6rem 0.6rem 0.6rem 0.4rem;
            }
            @media(max-width: 330px) {
                padding: 0.6rem 0.6rem 0.6rem 0.2rem;
            }
            .home_banner {
                position: relative;
                height: 6.02rem;
                @media(max-width: 1000px) {
                    height: 7.27rem;
                }
                @media(max-width: 800px) {
                    height: 6rem;
                }
                @media(max-width: 640px) {
                    height: 5rem;
                }
                @media(max-width: 500px) {
                    height: 5rem;
                }
                img {
                    height: 100%;
                }
                .description {
                    position: absolute;
                    top: 3.66rem;
                    left: 0.8rem;
                    @media(max-width: 1000px) {
                        left: 2.42rem;
                    }
                    @media(max-width: 800px) {
                        top: 3rem;
                        left: 2.05rem;
                    }
                    @media(max-width: 640px) {
                        top: 2.4rem;
                        left: 1.7rem;
                    }
                    @media(max-width: 500px) {
                        top: 2.6rem;
                        left: 0.35rem;
                    }
                    .text {
                        box-sizing: border-box;
                        margin-top: 0.21rem;
                        padding: 0 0.22rem;
                        width: 5.05rem;
                        font-size: 0.28rem;
                        font-weight: 400;
                        color: #FFFFFF;
                        line-height: 0.48rem;
                        background: rgba(76, 37, 154, 1);
                        @media (max-width: 1000px) {
                            margin-top: 0.13rem;
                            padding: 0 0.18rem;
                            width: 4.33rem;
                            font-size: 0.24rem;
                            line-height: 0.44rem;
                        }
                        @media (max-width: 800px) {
                            padding: 0 0.16rem;
                            width: 3.6rem;
                            font-size: 0.2rem;
                            line-height: 0.4rem;
                        }
                        @media (max-width: 640px) {
                            padding: 0 0.12rem;
                            width: 3rem;
                            font-size: 0.16rem;
                            line-height: 0.36rem;
                        }
                        @media (max-width: 500px) {
                            padding: 0 0.04rem;
                            width: 2.22rem;
                            font-size: 0.13rem;
                            line-height: 0.2rem;
                        }
                        &:first-child {
                            margin-top: 0;
                        }
                    }
                }
                .btn {
                    box-sizing: border-box;
                    padding: 0.53rem 0.66rem 0.77rem 0.66rem;
                    position: absolute;
                    top: 4.93rem;
                    left: 3.32rem;
                    width: 3.68rem;
                    height: 1.78rem;
                    font-size: 0.32rem;
                    font-weight: normal;
                    color: #FFFFFF;
                    line-height: 0.48rem;
                    background: url(../../assets/market_text.png) no-repeat center / 100% 100%;
                    @media (max-width: 1000px) {
                        padding: 0.45rem 0.75rem 0.68rem 0.71rem;
                        top: 4.38rem;
                        left: 4.43rem;
                        width: 3.23rem;
                        height: 1.61rem;
                        font-size: 0.24rem;
                        background: url(../../assets/market_text_1000.png) no-repeat center / 100% 100%;
                    }
                    @media (max-width: 800px) {
                        top: 3.8rem;
                        left: 3.4rem;
                    }
                    @media (max-width: 640px) {
                        padding: 0.28rem 0.75rem 0.28rem 0.51rem;
                        top: 3.1rem;
                        left: 2.6rem;
                        width: 2.6rem;
                        height: 1.31rem;
                        font-size: 0.2rem;
                    }
                    @media (max-width: 500px) {
                        padding: 0.23rem 0.45rem 0.57rem 0.45rem;
                        top: 3.1rem;
                        left: -0.4rem;
                        width: 2.08rem;
                        height: 1.16rem;
                        font-size: 0.16rem;
                        background: url(../../assets/market_text_320.png) no-repeat center / 100% 100%;
                    }
                }
            }
        }
    }
}
</style>