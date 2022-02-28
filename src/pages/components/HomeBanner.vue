<template>
    <div class="home_banner_container">
        <div class="home_banner_wrap">
            <div class="home_banner_content">
                <div class="nyancat_container">
                    <div class="nyancat_wrap" @click="showNyancatSay" @mouseleave="hiddenNyancatSay">
                        <img src="../../assets/nyancat_banner.png" alt="">
                    </div>
                    <div class="nyancat_say" v-if="isShowSay">
                        <span class="say_top">{{$store.state.messages.thirdBanner.nyancatSayT}}</span>
                        <span class="say_bottom">{{$store.state.messages.thirdBanner.nyancatSayB}}</span>
                    </div>
                </div>
                <div class="banner_intro_content">
                    <div class="banner_img" :class="$store.state.lang=='CN' ? 'transformImg' : ''">
                        <img :src="$store.state.messages.thirdBanner.img" alt="">
                    </div>
                    <div class="banner_description">{{$store.state.messages.thirdBanner.description}}</div>
                    <div class="banner_btn_wrap">
                        <a class="banner_btn" :href="$store.state.messages.thirdBanner.btnLink" target="_blank" rel="noopener noreferrer">{{$store.state.messages.thirdBanner.btnLabel}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeBanner",
    data()  {
        return {
            isShowSay: false
        }
    },
    methods: {
        showNyancatSay() {
            this.isShowSay = true;
        },
        hiddenNyancatSay() {
            this.isShowSay = false;
        }
    }
};
</script>

<style scoped lang="less">
.home_banner_container {
    width: 100%;
    background: rgba(13,14,44,1);
    .home_banner_wrap {
        margin: 0 auto;
        max-width: 19.2rem;
        height: 8rem;
        background: url(../../assets/third_banner.png) no-repeat center / cover;
        @media (max-width: 1200px) {
            background: url(../../assets/third_banner.png) no-repeat -400px center / cover;
        }
        @media (max-width: 1150px) {
            background: url(../../assets/third_banner.png) no-repeat -450px center / cover;
        }
        @media (max-width: 1100px) {
            background: url(../../assets/third_banner.png) no-repeat -500px center / cover;
        }
        @media (max-width: 1050px) {
            background: url(../../assets/third_banner.png) no-repeat -550px center / cover;
        }
        @media (max-width: 1000px) {
            background: url(../../assets/third_banner_1000.png) no-repeat center / cover;
        }
        @media (max-width: 400px) {
            height: 7.21rem;
            background: url(../../assets/third_banner_320.png) no-repeat center / cover;
        }
        .home_banner_content {
            box-sizing: border-box;
            position: relative;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin: 0 auto;
            padding-right: 0.64rem;
            max-width: 12rem;
            height: 100%;
            @media (max-width: 1000px) {
                justify-content: center;
                padding: 0 0.48rem;
            }
            @media (max-width: 502px) {
                align-items: flex-end;
                padding: 0 0.16rem 0.7rem;
            }
            .nyancat_container {
                position: absolute;
                top: 1.25rem;
                cursor: pointer;
                &:hover {
                    .nyancat_wrap {
                        transform: scale(1.02);
                    }
                }
                .nyancat_wrap {
                    position: absolute;
                    top: 0.23rem;
                    right: 0.43rem;
                    width: 0.8rem;
                    @media (max-width: 1000px) {
                        right: -1.3rem;
                    }
                    @media (max-width: 400px) {
                        top: 0.4rem;
                        right: -0.8rem;
                    }
                    img {
                        width: 100%;
                        vertical-align: middle;
                    }
                }
                .nyancat_say {
                    position: absolute;
                    right: 1.23rem;
                    width: 1.62rem;
                    height: 0.64rem;
                    background: url(../../assets/nyancat_say.png) no-repeat center / cover;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    font-size: 11px;
                    color: #FFFFFF;
                    line-height: 20px;
                    letter-spacing: 4px;
                    text-shadow: 0px 0px 45px #000000;
                    @media (max-width: 1000px) {
                        right: -0.5rem;
                    }
                    @media (max-width: 400px) {
                        right: -0.15rem;
                    }
                    .say_top {
                        display: inline-block;
                        width: 90%;
                        font-family: PangMenZhengDao;
                        text-align: center;
                    }
                    .say_bottom {
                        display: inline-block;
                        width: 90%;
                        font-family: ArialMT;
                        text-align: center;
                    }
                }
            }
            .banner_intro_content {
                display: flex;
                flex-direction: column;
                @media (max-width: 502px) {
                    align-items: center;
                }
                .banner_img {
                    max-width: 6.33rem;
                    img {
                        width: 100%;
                        vertical-align: middle;
                    }
                }
                .transformImg {
                    @media (max-width: 502px) {
                        transform: translateX(20%);
                    }
                }
                .banner_description {
                    box-sizing: border-box;
                    margin-top: 0.19rem;
                    padding: 0 0.08rem 0 0.27rem;
                    max-width: 5.98rem;
                    font-size: 24px;
                    font-family: ArialMT;
                    color: #FFFFFF;
                    line-height: 40px;
                    letter-spacing: 1px;
                    text-shadow: 0px 0px 45px #000000;
                    @media (max-width: 569px) {
                        max-width: 100%;
                        font-size: 20px;
                        line-height: 32px;
                    }
                    @media (max-width: 502px) {
                        padding: 0;
                        font-size: 16px;
                        line-height: 28px;
                        text-align: center;
                    }
                }
                .banner_btn_wrap {
                    margin-top: 0.24rem;
                    margin-left: 0.27rem;
                    max-width: 2rem;
                    height: 0.56rem;
                    @media (max-width: 502px) {
                        margin-left: 0;
                    }
                    .banner_btn {
                        box-sizing: border-box;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 0.14rem 0.08rem;
                        width: 100%;
                        height: 100%;
                        font-size: 20px;
                        font-family: PingFangSC-Semibold, PingFang SC;
                        font-weight: 600;
                        color: #FFFFFF;
                        line-height: 28px;
                        text-shadow: 0px 0px 20px rgba(1, 0, 36, 0.4);
                        background: #2E45D3;
                        box-shadow: 0px 0px 20px 0px rgba(1, 0, 36, 0.4);
                        border-radius: 4px;
                    }
                }
            }
        }
    }
}
</style>