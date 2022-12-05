<template>
    <div class="home_banner_container">
        <div class="home_banner_wrap">
            <div class="home_banner_content">
                <div class="home_banner">
                    <!-- <img v-show="clientWidth > 1000" :src="$store.state.messages.thirdBanner.img" class="img_normal" alt=""> -->
                    <!-- <img v-show="clientWidth <= 1000 && clientWidth > 530" :src="$store.state.messages.thirdBanner.img1000" class="img_1000" alt=""> -->
                    <!-- <img v-show="clientWidth <= 530" :src="$store.state.messages.thirdBanner.img320" class="img_320" alt=""> -->
                    <!-- <div class="description">
                        <p class="text">{{`${$store.state.messages.thirdBanner.descriptionF}`}}</p>
                        <p class="text">{{`${$store.state.messages.thirdBanner.descriptionT}`}}</p>
                    </div> -->
                    <a href="https://discord.gg/bmhu9F9xbX" target="_blank"><span class="btn" @click="gotoDiscord"></span></a>
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
        },
        gotoDiscord() {
            // window.open('https://discord.gg/bmhu9F9xbX')
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
        // width: 100%;
        // height: 10.8rem;
        background: url(../../assets/shouping_bg.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        // background: url(../../assets/third_banner.png) no-repeat center 0 / cover;
        @media(max-width: 1000px) {
            background: url(../../assets/shouping_1000.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            // background: url(../../assets/shouping_1000.png) no-repeat center -15px / cover;
        }
        @media(max-width: 600px) {
            background: url(../../assets/shouping_600.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            // background: url(../../assets/shouping_600.png) no-repeat center -5px / cover;
        }
        .home_banner_content {
            box-sizing: border-box;
            padding: 1.4rem 0 2.6rem 1.4rem;
            margin: 0 auto;
            max-width: 12rem;
            height: 100%;
            // @media(max-width: 1200px) {
            //     padding: 1.4rem 0 2.6rem 1.2rem;
            // }
            // @media(max-width: 1150px) {
            //     padding: 1.4rem 0 2.6rem 1rem;
            // }
            // @media(max-width: 1100px) {
            //     padding: 1.4rem 0 2.6rem 0.8rem;
            // }
            // @media(max-width: 1050px) {
            //     padding: 1.4rem 0 2.6rem 0.6rem;
            // }
            // @media(max-width: 1000px) {
            //     padding: 1.28rem 0 0 0.8rem;
            // }
            // @media(max-width: 880px) {
            //     padding: 1.08rem 0 0 0.5rem;
            // }
            // @media(max-width: 810px) {
            //     padding: 1.08rem 0 0 0.3rem;
            // }
            // @media(max-width: 768px) {
            //     padding: 1.08rem 0 0 0;
            // }
            // @media(max-width: 730px) {
            //     padding: 1.08rem 0 0 0.3rem;
            // }
            // @media(max-width: 680px) {
            //     padding: 1.08rem 0 0 0;
            // }
            // @media(max-width: 625px) {
            //     padding: 0.8rem 0 0 0.2rem;
            // }
            // @media(max-width: 580px) {
            //     padding: 0.8rem 0 0 0;
            // }
            // @media(max-width: 530px) {
            //     padding: 0.4rem 0 0 0.8rem;
            // }
            // @media(max-width: 470px) {
            //     padding: 0.4rem 0 0 0.5rem;
            // }
            // @media(max-width: 410px) {
            //     padding: 0.4rem 0 0 0.3rem;
            // }
            // @media(max-width: 400px) {
            //     padding: 0.4rem 0 0 0.5rem;
            // }
            // @media(max-width: 360px) {
            //     padding: 0.4rem 0 0 0.3rem;
            // }
            // @media(max-width: 335px) {
            //     padding: 0.4rem 0 0 0.2rem;
            // }
            .home_banner {
                position: relative;
                height: 4.8rem;
                // @media(max-width: 1000px) {
                //     height: 6.6rem;
                // }
                // @media(max-width: 730px) {
                //     height: 5.6rem;
                // }
                // @media(max-width: 625px) {
                //     height: 5rem;
                // }
                // @media(max-width: 530px) {
                //     height: 5.8rem;
                // }
                // @media(max-width: 400px) {
                //     height: 5rem;
                // }
                img {
                    height: 100%;
                }
                .description {
                    position: absolute;
                    top: 3.3rem;
                    // @media(max-width: 1000px) {
                    //     top: 3.15rem;
                    //     left: 2.22rem;
                    // }
                    // @media(max-width: 730px) {
                    //     top: 2.65rem;
                    //     left: 1.87rem;
                    // }
                    // @media(max-width: 625px) {
                    //     top: 2.4rem;
                    //     left: 1.67rem;
                    // }
                    // @media(max-width: 530px) {
                    //     top: 3rem;
                    //     left: 0.4rem;
                    // }
                    // @media(max-width: 400px) {
                    //     top: 2.6rem;
                    //     left: 0.36rem;
                    // }
                    .text {
                        box-sizing: border-box;
                        padding: 0 0.08rem;
                        font-size: 0.28rem;
                        font-weight: 400;
                        color: #FFFFFF;
                        line-height: 0.44rem;
                        // background: rgba(76, 37, 154, 1);
                        @media (max-width: 1000px) {
                            margin-top: 0.13rem;
                            padding: 0 0.18rem;
                            width: 4rem;
                        }
                        @media (max-width: 730px) {
                            margin-top: 0.12rem;
                            padding: 0 0.08rem;
                            width: 3.38rem;
                            font-size: 0.2rem;
                            line-height: 0.36rem;
                        }
                        @media (max-width: 670px) {
                            width: 3.02rem;
                            font-size: 0.16rem;
                            line-height: 0.32rem;
                        }
                        @media (max-width: 530px) {
                            width: 2.58rem;
                            font-size: 0.14rem;
                            line-height: 0.26rem;
                        }
                        @media (max-width: 400px) {
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
                    cursor: pointer;
                    padding: 0.43rem 0.7rem 0.77rem 0.6rem;
                    position: absolute;
                    top: 3.1rem;
                    left: 1.62rem;
                    width: 3.38rem;
                    height: 1.68rem;
                    font-size: 0.3rem;
                    font-weight: normal;
                    color: #FFFFFF;
                    line-height: 0.48rem;
                    background: url(../../assets/discord.png) no-repeat center / 100% 100%;
                    // @media (max-width: 1200px) {
                    //     // left: 2.93rem;
                    //     left: 0rem
                    // }
                    @media (max-width: 1000px) {
                        padding: 0.45rem 0.75rem 0.68rem 0.71rem;
                        left: 2.68rem;
                        width: 3.23rem;
                        height: 1.61rem;
                        font-size: 0.24rem;
                        background: url(../../assets/discord_1000.png) no-repeat center / 100% 100%;
                    }
                    // @media (max-width: 680px) {
                    //     padding: 0.28rem 0.75rem 0.28rem 0.51rem;
                    //     left: 3rem;
                    // }
                    @media (max-width: 750px) {
                        left: 1.68rem;
                    }
                    @media (max-width: 600px) {
                        padding: 0.4rem 0.45rem 0.57rem 0.45rem;
                        left: 1.1rem;
                        width: 2.8rem;
                        background: url(../../assets/discord_600.png) no-repeat center / 100% 100%;
                    }
                    // @media (max-width: 530px) {
                    //     padding: 0.23rem 0.45rem 0.57rem 0.45rem;
                    //     top: 3.55rem;
                    //     left: -0.4rem;
                    //     width: 2.08rem;
                    //     height: 1.16rem;
                    //     font-size: 0.16rem;
                    //     background: url(../../assets/market_text_320.png) no-repeat center / 100% 100%;
                    // }
                    @media (max-width: 500px) {
                        left: 0.1rem
                    }
                }
            }
        }
    }
}
</style>