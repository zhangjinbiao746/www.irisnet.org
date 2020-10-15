<template>
    <div class="content_wrap" @click="closeWeChat">
        <div @mouseenter="swiperStop" @mouseleave="swiperStart" style="position: relative;">
            <swiper ref="mySwiper" :options="swiperOption" class="my-swipe" v-if="flShowSwiper">
                <swiper-slide>
                    <div class="banner_item_container">
                        <div class="banner_item_container_wrap">
                            <div class="banner_item_content_container">
                                <span class="banner_item_content_title">
                                    {{$store.state.messages.home.ecosystem.content.title}}
                                </span>
                                <span class="banner_item_content_content">
                                    {{$store.state.messages.home.ecosystem.content.content}}
                                </span>
                                <div class="banner_item_content_link_container">
                                    <a :href="$store.state.messages.home.sectionOne.shareUrl.githubUrl" target="_blank">
                                        <img src="../assets/github.png" class="banner_item_link">
                                    </a>
                                    <a :href="$store.state.messages.home.sectionOne.shareUrl.telegramUrl" target="_blank" >
                                        <img src="../assets/telegram.png" class="banner_item_link">
                                    </a>
                                    <a href="https://twitter.com/irisnetwork" target="_blank" >
                                        <img src="../assets/twitter.png" class="banner_item_link">
                                    </a>
                                    <a href="https://medium.com/irisnet-blog" target="_blank" >
                                        <img src="../assets/message.png" class="banner_item_link">
                                    </a>
                                </div>
                                <div class="banner_item_content_btn_container">
                                    <a :href="$store.state.messages.home.ecosystem.content.btnHref1"
                                       class="banner_item_content_btn"
                                       target="_blank">
                                        {{$store.state.messages.home.ecosystem.content.btn1}}
                                    </a>
                                    <a :href="$store.state.messages.home.ecosystem.content.btnHref2"
                                       class="banner_item_content_btn"
                                       target="_blank">
                                        {{$store.state.messages.home.ecosystem.content.btn2}}
                                    </a>

                                </div>
                            </div>
                            <div class="banner_item_img_container">
                                <img src="../assets/ecosystem.png" alt="" class="banner_item_img">
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="banner_item_container">
                        <div class="banner_item_container_wrap">
                            <div class="banner_item_content_container">
                                <span class="banner_item_content_title">
                                    {{$store.state.messages.home.bsn.content.title}}
                                </span>
                                <span class="banner_item_content_content">
                                    {{$store.state.messages.home.bsn.content.title1}}
                                </span>
                                <div class="banner_item_content_link_container"></div>
                                <div class="banner_item_content_btn_container">
<!--                                    <a :href="$store.state.messages.home.bsn.content.btnHref1"-->
<!--                                       class="banner_item_content_btn"-->
<!--                                       target="_blank">-->
<!--                                        -->
<!--                                    </a>-->
                                    <router-link class="banner_item_content_btn" :to="`/developers`">{{$store.state.messages.home.bsn.content.btn1}}</router-link>
                                    <transition>
                                        <span v-show="comingShow"
                                              class="coming_soon">
                                            {{ $store.state.messages.home.frost.content.coming }}
                                        </span>
                                    </transition>
                                    <a :href="$store.state.messages.home.bsn.content.btnHref2"
                                       class="banner_item_content_btn"
                                       target="_blank">
                                        {{$store.state.messages.home.bsn.content.btn2}}
                                    </a>

                                </div>
                            </div>
                            <div class="banner_item_img_container">
                                <img src="../assets/bsn.png" alt="" class="banner_item_img">
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="banner_item_container">
                        <div class="banner_item_container_wrap">
                            <div class="banner_item_content_container">
                                <span class="banner_item_content_title">
                                    {{$store.state.messages.home.irisnetBianJie.commission}}
                                </span>
                                <span class="banner_item_content_content">
                                    {{bianJieMoniker}}{{$store.state.messages.home.irisnetBianJie.development}}
                                </span>
                                <div class="banner_item_content_link_container"></div>
                                <div class="banner_item_content_btn_container">
                                    <a :href="$store.state.messages.home.irisnetBianJie.button.buttonUrl.explorerUrl"
                                       class="banner_item_content_btn"
                                       target="_blank">
                                        {{$store.state.messages.home.irisnetBianJie.button.buttonName.explorerName}}
                                    </a>
                                    <a :href="$store.state.messages.home.irisnetBianJie.button.buttonUrl.rainbowUrl"
                                       class="banner_item_content_btn"
                                       target="_blank">
                                        {{$store.state.messages.home.irisnetBianJie.button.buttonName.rainbowName}}
                                    </a>


                                </div>
                            </div>
                            <div class="banner_item_img_container">
                                <img src="../assets/IRISnet_bianjie_node_logo.png" alt="" class="banner_item_img">
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="banner_item_container">
                        <div class="banner_item_container_wrap">
                            <div class="banner_item_content_container">
                                <span class="banner_item_content_title">
                                    {{$store.state.messages.home.frost.content.title}}
                                </span>
                                <span class="banner_item_content_content">
                                    {{$store.state.messages.home.frost.content.content}}
                                </span>
                                <div class="banner_item_content_link_container"></div>
                                <div class="banner_item_content_btn_container">
                                    <a :href="$store.state.messages.home.frost.content.btnHref1"
                                       class="banner_item_content_btn"
                                       target="_blank">
                                        {{$store.state.messages.home.frost.content.btn1}}
                                    </a>
                                    <span class="banner_item_content_btn" @click="handleBtnClick('wallet')">
                                        {{$store.state.messages.home.frost.content.btn2}}
                                    </span>
                                    <transition>
                                        <span v-show="comingShow"
                                              class="coming_soon">
                                            {{ $store.state.messages.home.frost.content.coming }}
                                        </span>
                                    </transition>
                                </div>
                            </div>
                            <div class="banner_item_img_container">
                                <img src="../assets/frost.png" alt="" class="banner_item_img">
                            </div>
                        </div>
                    </div>
                </swiper-slide>


            </swiper>
            <div class="swiper-button-prev" @click="prev()"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
            <div class="swiper-button-next" @click="next()"></div>
        </div>
        <section class="sectionTwo" ref="whitePaper">
            <div class="first">
                <div class="left">
                    <div class="keyInnovationMsg">
                        <div class="title">{{$store.state.messages.home.sectionTwo.KeyInnovations.title}}</div>
                        <ul class="msgList">
                            <li v-for="n of $store.state.messages.home.sectionTwo.KeyInnovations.list" :key="n.id">
                                <label></label> {{n.msg}}
                            </li>
                        </ul>
                        <div class="whitePaper">
                            <button @click="jumpUrl($store.state.messages.home.sectionTwo.KeyInnovations.WHITEPAPERUrl)">
                                <span>{{$store.state.messages.home.sectionTwo.KeyInnovations.buttonMsg}}</span> <img
                                    src="../assets/rightArrow.png" alt=""></button>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <img src="../assets/basicInternet.png" alt="">
                </div>
            </div>
            <div class="secend first">
                <div class="right">
                    <img src="../assets/banner-Network design.png" alt="">
                </div>
                <div class="left">
                    <div class="keyInnovationMsg">
                        <div class="title">{{$store.state.messages.home.sectionTwo.NetworkDesign.title}}</div>
                        <ul class="msgList">
                            <li v-for="n of $store.state.messages.home.sectionTwo.NetworkDesign.list" :key="n.id">
                                <label></label> {{n.msg}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="sectionThree" ref="roadmap">
            <div class="title">{{$store.state.messages.home.sectionThree.title}}</div>
            <div class="road">
                <div class="roadMap"></div>
                <img src="../assets/rocket.png" alt="">
                <div class="HOUYI" v-for="n of $store.state.messages.home.sectionThree.road" :key="n.id">
                    <div>{{n.caption}}</div>
                    <div>{{n.time}}</div>
                    <div>{{n.msg}}</div>
                    <div class="markIcon">
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="sectionFour" ref="collaboration">
            <div class="title">{{$store.state.messages.home.sectionFour.Collaboration}}</div>
            <div class="logos">
                <div class="logo">
                    <div class="title">{{$store.state.messages.home.sectionFour.CoreDevelopmentTeams.title}}</div>
                    <div class="logoIcon">
                        <a :href="n.url"
                           :target="n.url === 'javascript:void(0)' ? '' : '_blank'"
                           :style="{cursor: n.url === 'javascript:void(0)' ? 'auto' :'pointer'}"
                           v-for="n of $store.state.messages.home.sectionFour.CoreDevelopmentTeams.logos"
                           :key="n.id">
                            <img :src='UrlSrc + n.path'>
                        </a>
                    </div>
                </div>
                <div class="logo">
                    <div class="title">{{$store.state.messages.home.sectionFour.StrategicPartners.title}}</div>
                    <div class="logoIcon">
                        <a :href="n.url"
                           :target="n.url === 'javascript:void(0)' ? '' : '_blank'"
                           :style="{cursor: n.url === 'javascript:void(0)' ? 'auto' :'pointer'}"
                           v-for="n of $store.state.messages.home.sectionFour.StrategicPartners.logos"
                           :key="n.id">
                            <img :src='UrlSrc + n.path'>
                        </a>
                    </div>
                </div>
                <div class="logo">
                    <div class="title">{{$store.state.messages.home.sectionFour.EcosystemPartners.title}}</div>
                    <div class="logoIcon">
                        <a :href="n.url"
                           :target="n.url === 'javascript:void(0)' ? '' : '_blank'"
                           :style="{cursor: n.url === 'javascript:void(0)' ? 'auto' :'pointer'}"
                           v-for="n of $store.state.messages.home.sectionFour.EcosystemPartners.logos"
                           :key="n.id">
                            <img style="max-width: 2rem;" :src='UrlSrc + n.path'>
                        </a>
                    </div>
                </div>
                <div class="logo">
                    <div class="title">{{$store.state.messages.home.sectionFour.Institutional.title.msg1}}<p>
                        {{$store.state.messages.home.sectionFour.Institutional.title.msg2}}</p></div>
                    <div class="logoIcon supporters">
                        <a :href="n.url"
                           :target="n.url === 'javascript:void(0)' ? '' : '_blank'"
                           :style="{cursor: n.url === 'javascript:void(0)' ? 'auto' :'pointer'}"
                           v-for="n of $store.state.messages.home.sectionFour.Institutional.logos"
                           :key="n.id">
                            <img :src='UrlSrc + n.path'>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name : "Home",
        data(){
            return {
                bannerImgClass : 'banner_img_container',
                showWeChat : false,
                timer : null,
                flShowSwiper : false,
                swiperOption : {
                    loop : true,
                    autoplay : 3000,
                    speed : 300,
                    autoplayDisableOnInteraction : false,
                    disableOnInteraction : false,
                    //鼠标变成手掌型
                    grabCursor : true,
                    virtualTranslate : false,
                    roundLengths : true,
                    autoHeight : true,
                    // effect : 'coverflow',
                    navigation : {
                        nextEl : '.swiper-button-next',
                        prevEl : '.swiper-button-prev',
                    }
                },
                bianJieMoniker : '',
                rate : '',
                comingShow : false,
                timerout : null,

            }
        },
        computed : {
            mySwiper(){
                // mySwiper 是要绑定到标签中的ref属性
                return this.$refs.mySwiper.swiper
            },

        },
        methods : {
            swiperStop(){
                this.mySwiper.stopAutoplay()
            },
            swiperStart(){
                this.mySwiper.startAutoplay()
            },
            handleBtnClick(){
                if(!this.comingShow){
                    this.comingShow = true;
                    this.timerout = setTimeout(() =>{
                        this.comingShow = false;
                    }, 2000)
                }

            },
            next(){
                this.mySwiper.slideNext();
                console.log(this.mySwiper, "wwww")
            },
            prev(){
                this.mySwiper.slidePrev();
            },
            jumpUrl(url){
                window.open(url)
            },
            showWeChatPic(e){
                e.stopPropagation()
                this.showWeChat = !this.showWeChat
            },

            closeWeChat(){
                this.showWeChat = false
            },
            getCosmosBianJieValidator(){
                let url = `/validators`;
                axios(url).then(data =>{
                    if(data.status === 200){
                        return data.data
                    }
                }).then(res =>{
                    if(res && typeof res === "object" && Object.keys(res).length !== 0){
                        localStorage.setItem('rate', res.commission.rate);
                        this.bianJieMoniker = res.description.moniker;
                        this.rate = this.formatRate(localStorage.getItem('rate'));
                    } else {
                        this.rate = '';
                        this.bondedTokens = '';

                    }
                }).catch(err =>{

                })
            },
            onresize(){
                clearTimeout(this.timer);
                let that = this;

                this.timer = setTimeout(function (){
                    that.$store.commit('whitePaper', that.$refs.whitePaper.offsetTop - that.$store.state.headerHeight);
                    that.$store.commit('roadmap', that.$refs.roadmap.offsetTop - that.$store.state.headerHeight);
                    that.$store.commit('collaboration', that.$refs.collaboration.offsetTop - that.$store.state.headerHeight);
                }, 200);
            },
            formatRate(rate){
                return `${(rate * 100).toFixed(2)} %`
            },
            changLange(){
                if(this.$route.query.lang === 'EN'){
                    this.bannerImgClass = 'banner_img_container'
                } else if(this.$route.query.lang === 'CN'){
                    this.bannerImgClass = 'banner_img_container_cn'
                }
            }
        },
        mounted(){
            this.changLange();
            this.onresize();
            this.getCosmosBianJieValidator();
            this.flShowSwiper = true;
            this.bianJieMoniker = 'IRISnet-Bianjie';
            this.rate = localStorage.getItem('rate') ? this.formatRate(localStorage.getItem('rate')) : '';
            window.addEventListener('resize', this.onresize);
        },
    }
</script>

<style scoped lang="less">
    @import "../assets/style/home.less";

    @media screen and (min-width: 0) and  (max-width: 767px) {
        .banner_item_container {

            .banner_item_container_wrap {
                flex-direction: column;
                .banner_item_content_container {
                    width: 100%;
                    flex: 0 0 4rem;
                    padding: 0.5rem 0.15rem 0 0.15rem;
                    box-sizing: border-box;
                    justify-content: flex-start;
                    align-items: center;
                    .banner_item_content_title {
                        margin-bottom:0.2rem;
                        height:0.8rem;
                        text-align: center;
                    }
                    .banner_item_content_content {
                        margin-bottom:0.23rem;
                        text-align: center;
                        height:0.5rem;
                    }
                    .banner_item_content_link_container {
                        margin-bottom:0.3rem;
                        height:0.26rem;
                        .banner_item_link{
                            margin-right:0.26rem;
                        }
                    }
                    .banner_item_content_btn_container {
                        flex-direction: column;
                        align-items: center;
                        box-sizing: border-box;
                        .banner_item_content_btn{
                            width:100%;

                            &:first-child{
                                margin-bottom:0.2rem;
                            }
                        }
                        .coming_soon{
                            bottom:-0.4rem;
                        }
                    }
                }
                .banner_item_img_container {
                    width: 100%;
                    flex: 0 0 5rem;
                    padding: 0 0.15rem;
                    box-sizing: border-box;
                    .banner_item_img {
                        width: 100%;
                        //height:5.24rem;
                    }
                }
            }

        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        .banner_item_container {

            .banner_item_container_wrap {
                flex-direction: column;
                .banner_item_content_container {
                    width: 100%;
                    flex: 0 0 4rem;
                    padding: 0.5rem 0.15rem 0 0.15rem;
                    box-sizing: border-box;
                    justify-content: flex-start;
                    align-items: center;
                    .banner_item_content_title {
                        margin-bottom:0.3rem;
                        height:0.4rem;
                        text-align: center;
                    }
                    .banner_item_content_content {
                        margin-bottom:0.33rem;
                        text-align: center;
                        height:0.25rem;
                    }
                    .banner_item_content_link_container {
                        margin-bottom:0.3rem;
                        height:0.26rem;
                        .banner_item_link{
                            margin-right:0.26rem;
                        }
                    }
                    .banner_item_content_btn_container {
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        box-sizing: border-box;
                        .banner_item_content_btn{
                            width:2.2rem;
                            &:first-child{
                                margin-right:0.1rem;
                            }
                        }
                        .coming_soon{
                            bottom:-0.4rem;
                        }
                    }
                }
                .banner_item_img_container {
                    width: 100%;
                    flex: 0 0 5rem;
                    padding: 0 0.15rem;
                    box-sizing: border-box;
                    .banner_item_img {
                        width: 65%;
                    }
                }
            }

        }
    }

    @media screen and (min-width: 1025px) {
        .banner_item_container {
            justify-content: center;
            align-items: center;
            height: 6.25rem;
            .banner_item_container_wrap {
                max-width: 12rem;
                .banner_item_content_container {
                    min-width:5.03rem;
                    max-width:5.66rem;
                    flex:1;
                    height: 5rem;
                    padding:1.5rem 1rem 0 1rem;
                    justify-content: flex-start;
                    align-items: flex-start;
                    .banner_item_content_title {
                        margin-bottom:0.23rem;
                        height:0.4rem;
                    }
                    .banner_item_content_content {
                        margin-bottom:0.33rem;
                        height:0.25rem;
                    }
                    .banner_item_content_link_container {
                        margin-bottom:0.4rem;
                        height:0.28rem;
                        .banner_item_link{
                            margin-right:0.26rem;
                        }
                    }
                    .banner_item_content_btn_container {
                        .banner_item_content_btn{
                            width:2.2rem;
                            &:first-child{
                                margin-right:0.3rem;
                            }
                        }
                        .coming_soon{
                            bottom:-0.6rem;
                        }
                    }
                }
                .banner_item_img_container {
                    flex: 1;
                    min-width:5.03rem;
                    max-width:5.66rem;
                    .banner_item_img {
                        width: 100%;
                        //height: 5.24rem;
                    }
                }
            }

        }
    }

    //common
    .banner_item_container {
        display: flex;
        flex-direction: row;
        width: 100%;

        box-sizing: border-box;
        .banner_item_container_wrap {
            width: 100%;
            box-sizing: border-box;
            display: flex;

            .banner_item_content_container {
                display:flex;
                flex-direction:column;


                .banner_item_content_title {
                    font-size:0.4rem;
                    color:#ffffff;
                    line-height: 0.4rem;

                }
                .banner_item_content_content {
                    font-size:0.18rem;
                    font-weight:600;
                    color:#ffffff;
                    line-height:0.25rem;

                }
                .banner_item_content_link_container {
                    display:flex;
                    .banner_item_link{
                        width:0.26rem;
                        height:0.26rem;
                    }
                }
                .banner_item_content_btn_container {
                    display:flex;
                    width:100%;
                    position:relative;
                    .banner_item_content_btn{
                        height:0.5rem;
                        border-radius:0.25rem;
                        cursor: pointer;
                        line-height: 0.5rem;
                        text-align: center;
                        background: linear-gradient(145deg,rgba(122,65,255,1) 0%,rgba(101,39,222,1) 100%);
                        color:#ffffff;
                        font-size:0.16rem;
                    }
                    .coming_soon{
                        position:absolute;
                        height:0.36rem;
                        line-height: 0.36rem;
                        left:0; right:0;
                        margin:auto;
                        bottom:-0.6rem;
                        width:1.9rem;
                        text-align: center;
                        font-size:0.14rem;
                        color:#ffffff;
                        border-radius:0.18rem;background:rgba(0,0,0,.4);

                    }
                }
            }
            .banner_item_img_container {
                display: flex;
                justify-content: center;
                align-items: center;
                .banner_item_img {

                }
            }
        }

    }


</style>
