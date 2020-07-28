<template>
    <div class="content_wrap" @click="closeWeChat">
        <div @mouseenter="swiperStop" @mouseleave="swiperStart" style="position: relative;">
            <swiper ref="mySwiper" :options="swiperOption" class="my-swipe" v-if="flShowSwiper">
                <swiper-slide>
                    <section class="sectionOne_goz">
                        <div class="left">
                            <div style="margin:0;font-size:0.4rem;">
                                {{$store.state.messages.home.bsn.content.title}}
                            </div>
                            <div style="font-size: 0.18rem;margin:0.34rem 0 0.9rem 0;line-height: 0.4rem;">
                                <span>{{$store.state.messages.home.bsn.content.title1}}</span>
                            </div>
                            <div style="margin:0;"></div>
                            <div>
                                <a :href="$store.state.messages.home.bsn.content.btnHref" target="_blank">
                                    <button>
                                        <p style="padding: 0 0.2rem;font-size: 0.14rem;line-height: 0.15rem">
                                            {{$store.state.messages.home.bsn.content.btn}}
                                        </p>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div class="right">
                            <img src="../assets/bsn.png" alt="" class="banner">
                        </div>
                    </section>
                </swiper-slide>
                <swiper-slide>
                    <section class="sectionOne_goz">
                        <div class="left">
                            <div style="font-size: 0.4rem;line-height: 0.4rem;">
                                {{$store.state.messages.home.frost.content.title}}
                            </div>
                            <div style="font-size: 0.18rem;margin:0.34rem 0 0.9rem 0;line-height: 0.4rem;">
                                {{$store.state.messages.home.frost.content.content}}
                            </div>
                            <div style="margin:0;"></div>
                            <div style="position:relative;">
                                <a :href="$store.state.messages.home.frost.content.btnHref1" target="_blank">
                                    <button>
                                        <p style="padding: 0 0.2rem;font-size: 0.14rem;line-height: 0.15rem">
                                            {{$store.state.messages.home.frost.content.btn1}}
                                        </p>
                                    </button>
                                </a>
                                <button @click="handleBtnClick('wallet')">
                                    <p style="padding: 0 0.2rem;font-size: 0.14rem;line-height: 0.15rem">
                                        {{$store.state.messages.home.frost.content.btn2}}
                                    </p>
                                </button>
                                <transition>
                                    <span v-show="comingShow"
                                          style="position:absolute; height:0.36rem;line-height: 0.36rem;
                                right:1.4rem;bottom:-0.6rem;width:1.9rem;text-align: center; font-size:0.14rem;
                                color:#ffffff;
                                border-radius:0.18rem;background:rgba(0,0,0,.4);">
                                    {{ $store.state.messages.home.frost.content.coming }}
                                </span>
                                </transition>

                            </div>
                        </div>
                        <div class="right">
                            <img src="../assets/frost.png" alt="" class="banner">
                        </div>
                    </section>
                </swiper-slide>

                <swiper-slide>
                    <section class="sectionOne_goz">
                        <div class="left">
                            <div style="line-height: 0.4rem;font-size: 0.4rem;font-weight:600;">
                                {{$store.state.messages.home.ecosystem.content.title}}
                            </div>
                            <div style="line-height: 0.4rem;font-size: 0.18rem;margin:0.34rem 0 0 0;">
                                {{$store.state.messages.home.ecosystem.content.content}}
                            </div>
                            <div style="margin:0.34rem 0 0.9rem 0;display:flex;" class="link_container">
                                <a :href="$store.state.messages.home.sectionOne.shareUrl.githubUrl" target="_blank">
                                    <img src="../assets/github.png" alt=""
                                         style="width:0.26rem;height:0.26rem;margin-right:0.26rem;">
                                </a>
                                <a :href="$store.state.messages.home.sectionOne.shareUrl.telegramUrl" target="_blank">
                                    <img src="../assets/telegram.png" alt=""
                                         style="width:0.26rem;height:0.26rem;margin-right:0.26rem;">
                                </a>
                                <a href="https://twitter.com/irisnetwork" target="_blank">
                                    <img src="../assets/twitter.png" alt=""
                                         style="width:0.26rem;height:0.26rem;margin-right:0.26rem;">
                                </a>
                                <a href="https://medium.com/irisnet-blog" target="_blank">
                                    <img src="../assets/message.png"
                                         style="width:0.26rem;height:0.26rem;margin-right:0;">
                                </a>

                            </div>
                            <div>
                                <a :href="$store.state.messages.home.ecosystem.content.btnHref1" target="_blank">
                                    <button>
                                        <p style="padding: 0 0.2rem;font-size: 0.14rem;line-height: 0.15rem">
                                            {{$store.state.messages.home.ecosystem.content.btn1}}
                                        </p>
                                    </button>
                                </a>
                                <a :href="$store.state.messages.home.ecosystem.content.btnHref2" target="_blank">
                                    <button>
                                        <p style="padding: 0 0.2rem;font-size: 0.14rem;line-height: 0.15rem">
                                            {{$store.state.messages.home.ecosystem.content.btn2}}
                                        </p>
                                    </button>
                                </a>

                            </div>
                        </div>
                        <div class="right">
                            <img src="../assets/ecosystem.png" alt="" class="banner">
                        </div>
                    </section>
                </swiper-slide>

                <swiper-slide>
                    <section class="sectionOne1">
                        <div class="left">
                            <div class="irisnet_bianjie_moniker" style="font-size:0.4rem;line-height: 0.4rem;">
                                {{$store.state.messages.home.irisnetBianJie.commission}}
                            </div>
                            <div style="font-size:0.18rem;line-height: 0.28rem;margin:0.34rem 0 0 0;">
                                {{bianJieMoniker}}
                            </div>
                            <div class="development_content"
                                 :style="`font-size:${$store.state.lang==='CN' ? '0.28' : '0.18'}rem;line-height: 0.28rem;margin:0.34rem 0 0 0;`">
                                <p style="margin-top:0.34rem;margin-bottom:0.9rem;">
                                    {{$store.state.messages.home.irisnetBianJie.development}}
                                </p>

                            </div>
                            <div>
                                <a :href="$store.state.messages.home.irisnetBianJie.button.buttonUrl.explorerUrl"
                                   target="_blank">
                                    <button>
                                        {{$store.state.messages.home.irisnetBianJie.button.buttonName.explorerName}}
                                    </button>
                                </a>
                                <a :href="$store.state.messages.home.irisnetBianJie.button.buttonUrl.rainbowUrl"
                                   target="_blank">
                                    <button>
                                        {{$store.state.messages.home.irisnetBianJie.button.buttonName.rainbowName}}
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div class="right">
                            <img src="../assets/IRISnet_bianjie_node_logo.png" alt="" class="banner">
                        </div>
                    </section>
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
                    //autoplay : 3000,
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
                comingShow:false,
                timerout:null,

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
                    this.timerout = setTimeout(()=>{
                        this.comingShow = false;
                    },2000)
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
</style>
