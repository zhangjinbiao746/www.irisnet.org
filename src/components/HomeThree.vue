<template>
    <div class="home_container"  :class="$store.state.hideHeaderBgColor ? 'hide_bg_color' : ''">
        <div class="home_swiper_container">
            <swiper ref="mySwiper" class="my-swipe" :options="swiperOption" v-if="flShowSwiper">
                <swiper-slide>
                    <div class="home_banner_one_content_container">
                        <div class="banner_one_content">
                            <p class="banner_one_content_h5_title">{{$t('message.homeThree.banner[1].h5Title')}}</p>
                            <p class="banner_one_content_h1_title">{{$t('message.homeThree.banner[1].h1Title')}}</p>
                            <p class="banner_one_content_section">{{$t('message.homeThree.banner[1].section')}}</p>
<!--                            <div class="banner_one_content_bottom">-->
<!--                                <a href="" target="_blank">{{$t('message.homeThree.banner[0].sectionThree')}}</a>-->
<!--                            </div>-->
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="home_banner_content_container">
                        <div class="banner_content">
                            <p class="banner_content_h5_title">{{$t('message.homeThree.banner[0].h5Title')}}</p>
                            <p class="banner_content_h1_title">{{$t('message.homeThree.banner[0].h1Title')}}</p>
                            <p class="banner_content_section">{{$t('message.homeThree.banner[0].section')}}</p>
                            <div class="banner_content_bottom">
                                <router-link :to="`/irisnet-bianjie`">{{$t('message.homeThree.banner[0].sectionSecond')}}</router-link>
                                <a href="https://www.rainbow.one/" target="_blank">{{$t('message.homeThree.banner[0].sectionThree')}}</a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

            </swiper>
            <div class="swiper-pagination" @mouseenter="next()"></div>
          <!--  <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>-->
        </div>
        <div class="home_irisnet_container">
            <div class="home_irisnet_content_wrap">
                <div class="home_irisnet_content_img_content">
                    <img src="../assets/basicInternet.png" alt="">
                </div>
                <div class="home_irisnet_content_right_content">
                    <div class="home_irisnet_content_title">{{$t('message.homeThree.irisnet.title')}}</div>
                    <div class="home_irisnet_content_second_title">{{$t('message.homeThree.irisnet.secondTitle')}}</div>
                    <div class="home_irisnet_content_section"
                         v-html="enMessage.homeThree.irisnet.section"
                         v-if="$i18n.locale ==='EN'"></div>
                    <div class="home_irisnet_content_section"
                         v-html="cnMessage.homeThree.irisnet.section"
                         v-if="$i18n.locale ==='CN'"></div>
                    <div class="home_irisnet_content_second_section"
                         v-html="enMessage.homeThree.irisnet.secondSection"
                         v-if="$i18n.locale ==='EN'"></div>
                    <div class="home_irisnet_content_second_section"
                         v-html="cnMessage.homeThree.irisnet.secondSection"
                         v-if="$i18n.locale ==='CN'"></div>
                    <div class="home_irisnet_content_btn">
                        <a v-if="$i18n.locale ==='EN'" href="https://github.com/irisnet/irisnet/blob/master/WHITEPAPER.md" target="_blank">
                            <div class="home_irisnet_white_paper_btn">{{$t('message.homeThree.irisnet.whitePaperBtn')}}</div>
                        </a>
                        <a v-if="$i18n.locale ==='CN'" href="https://github.com/irisnet/irisnet/blob/master/%E7%99%BD%E7%9A%AE%E4%B9%A6.md" target="_blank">
                            <div class="home_irisnet_white_paper_btn">{{$t('message.homeThree.irisnet.whitePaperBtn')}}</div>
                        </a>
                        <router-link :to="`/mainnet`">
                            <div class="home_irisnet_mainnet_btn">{{$t('message.homeThree.irisnet.mainnetBtn')}}</div>
                        </router-link>

                    </div>
                </div>
            </div>
        </div>
        <div class="home_irisnet_product_container">
            <div class="home_irisnet_product_wrap">
                <div class="home_irisnet_product_left_content">
                    <div class="home_irisnet_irishub_content">
                        <div class="home_irisnet_irishub_header">
                            <p class="home_irisnet_irishub_title">{{$t('message.homeThree.product.irisHub.title')}}</p>
                            <div class="home_irisnet_irishub_img">
                                <img src="../assets/irisnetThree/irishub.png" alt="">
                            </div>
                        </div>
                        <div class="home_irisnet_irishub_section">
                            <p class="home_irisnet_irishub_section_item">{{$t('message.homeThree.product.irisHub.section')}}</p>
<!--                            <p class="home_irisnet_irishub_section_item">The center of the IRIS Network with cross-chain service protocol</p>-->
                        </div>
                    </div>
                    <div class="home_irisnet_irisSdk_content">
                        <div class="home_irisnet_irisSdk_header">
                            <p class="home_irisnet_irisSdk_title">{{$t('message.homeThree.product.irisSdk.title')}}</p>
                            <div class="home_irisnet_irisSdk_img">
                                <img src="../assets/irisnetThree/irissdk.png" alt="">
                            </div>
                        </div>
                        <div class="home_irisnet_irisSdk_section">
                            <p class="home_irisnet_irisSdk_section_item">{{$t('message.homeThree.product.irisSdk.section')}}</p>
<!--                            <p class="home_irisnet_irisSdk_section_item">The center of the IRIS Network with cross-chain service protocol</p>-->
                        </div>
                    </div>
                </div>
                <div class="home_irisnet_product_right_content">
                    <div class="home_irisnet_iservice_content">
                        <div class="home_irisnet_iservice_header">
                            <p class="home_irisnet_iservice_title">{{$t('message.homeThree.product.iservice.title')}}</p>
                            <div class="home_irisnet_iservice_img">
                                <img src="../assets/irisnetThree/iservice.png" alt="">
                            </div>
                        </div>
                        <div class="home_irisnet_iservice_section">
                            <p class="home_irisnet_iservice_section_item">{{$t('message.homeThree.product.iservice.section')}}</p>
<!--                            <p class="home_irisnet_iservice_section_item">The center of the IRIS Network with cross-chain service protocol</p>-->
                        </div>
                    </div>
                    <div class="home_irisnet_on_chain_gov_content">
                        <div class="home_irisnet_on_chain_gov_header">
                            <p class="home_irisnet_on_chain_gov_title">{{$t('message.homeThree.product.OnChainGov.title')}}</p>
                            <div class="home_irisnet_on_chain_gov_img">
                                <img src="../assets/irisnetThree/chaingov.png" alt="">
                            </div>
                        </div>
                        <div class="home_irisnet_on_chain_gov_section">
                            <p class="home_irisnet_on_chain_gov_section_item">{{$t('message.homeThree.product.OnChainGov.section')}}</p>
<!--                            <p class="home_irisnet_on_chain_gov_section_item">The center of the IRIS Network with cross-chain service protocol</p>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="home_irisnet_road_map_container">
            <div class="home_irisnet_road_map_content">
                <div class="home_irisnet_road_map_header">
                    <p class="home_irisnet_road_map_title">{{$t('message.homeThree.roadMap.title')}}</p>
                </div>
                <div class="home_irisnet_road_map_center_container">
                    <div class="home_irisnet_road_map_center">
                        <div class="home_irisnet_road_map_left_content">
                            <div>
                                <span :class="flShowNextPage ? 'showCurrent' : 'hideCurrent'">2019</span>
                                <span :class="flShowNextPage ? 'hideCurrent' : 'showCurrent'">2020</span>
                            </div>
                        </div>
                        <div class="home_irisnet_road_map_right_content"  :class="flShowNextPage ? 'show_next_page': 'hide_next_page' ">
                            <div class="home_irisnet_road_map_left_step">
                                <P>{{$t('message.homeThree.roadMap.pangu.title')}}</P>
                                <p>{{$t('message.homeThree.roadMap.nuwa.title')}}</p>
                                <p>{{$t('message.homeThree.roadMap.kuafu.title')}}</p>
                                <p>{{$t('message.homeThree.roadMap.youyi.title')}}</p>
                            </div>
                            <div class="home_irisnet_road_map_center_step">
                                <div class="home_irisnet_road_map_line">
                                    <div class="home_irisnet_road_map_img_content">
                                        <img src="../assets/irisnetThree/roadmap.png" alt="">
                                    </div>
                                    <div class="home_irisnet_road_map_img_content">
                                        <img src="../assets/irisnetThree/roadmap.png" alt="">
                                    </div>
                                    <div class="home_irisnet_road_map_img_content">
                                        <img src="../assets/irisnetThree/roadmap.png" alt="">
                                    </div>
                                    <div class="home_irisnet_road_map_img_content">
                                        <img src="../assets/irisnetThree/roadmap.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="home_irisnet_road_map_right_step">
                                <div class="home_irisnet_road_map_right_step_content">
                                    <p class="home_road_map_right_step_title">{{$t('message.homeThree.roadMap.pangu.date')}}</p>
                                    <p class="home_road_map_right_step_section">{{$t('message.homeThree.roadMap.pangu.section')}}</p>
                                </div>
                                <div class="home_irisnet_road_map_right_step_content">
                                    <p class="home_road_map_right_step_title"> {{$t('message.homeThree.roadMap.nuwa.date')}}</p>
                                    <p class="home_road_map_right_step_section">{{$t('message.homeThree.roadMap.nuwa.section')}}</p>
                                </div>
                                <div class="home_irisnet_road_map_right_step_content">
                                    <p class="home_road_map_right_step_title">  {{$t('message.homeThree.roadMap.kuafu.date')}}</p>
                                    <p class="home_road_map_right_step_section">{{$t('message.homeThree.roadMap.kuafu.section')}}</p>
                                </div>
                                <div class="home_irisnet_road_map_right_step_content">
                                    <p class="home_road_map_right_step_title"> {{$t('message.homeThree.roadMap.youyi.date')}}</p>
                                    <p class="home_road_map_right_step_section">{{$t('message.homeThree.roadMap.youyi.section')}}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="home_irisnet_road_map_footer">
                    <div class="home_irisnet_road_map_footer_content">
                        <span @click="nextpage()">
                            <img v-show="!flShowNextPage" src="../assets/irisnetThree/prev.png" alt="">
                            <img v-show="flShowNextPage" src="../assets/irisnetThree/prev_light.png" alt="">
                        </span>
                        <span @click="prevpage()" >
                            <img v-show="!flShowNextPage" src="../assets/irisnetThree/next.png" alt="">
                            <img v-show="flShowNextPage" src="../assets/irisnetThree/next_light.png" alt="">
                        </span>
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
        name: "HomeThree",
        data(){
            return {
                flShowNextPage: false,
                enMessage:enMessage,
                cnMessage:cnMessage,
                swiperOption:{
                    loop: true,
                    speed: 300,
                    // autoplay: true,
                    /*autoplay: {
                    delay: 0,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                    },*/
                    // grabCursor: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    on:{
                        progress: function(progress) {
                            // for (let i = 0; i < this.slides.length; i++) {
                            // 	var slide = this.slides.eq(i);
                            // 	var slideProgress = this.slides[i].progress;
                            // 	let modify = 1;
                            // 	if (Math.abs(slideProgress) > 1) {
                            // 		modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                            // 	}
                            // 	let translate = slideProgress * modify * 260 + 'px';
                            // 	let scale = 1 - Math.abs(slideProgress) / 5;
                            // 	let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                            // 	slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                            // 	slide.css('zIndex', zIndex);
                            // 	slide.css('opacity', 1);
                            // 	if (Math.abs(slideProgress) > 3) {
                            // 		slide.css('opacity', 0);
                            // 	}
                            // }
                        },
                        setTransition: function(transition) {
                            for (var i = 0; i < this.slides.length; i++) {
                                var slide = this.slides.eq(i);
                                slide.transition(transition);
                            }

                        }
                    }
                    // slidesPerView:3,
                    // loopedSlides:3,
                    // speed: 300,
                    // autoplayDisableOnInteraction:false,
                    // disableOnInteraction:false,
                    //鼠标变成手掌型
                    // grabCursor: true,
                    // virtualTranslate: false,
                    // roundLengths: true,
                    // autoHeight: true,
                    // effect : 'coverflow',
                    // navigation:{
                    // 	nextEl: '.swiper-button-next',
                    // 	prevEl: '.swiper-button-prev',
                    // },
                },
                flShowSwiper: false,
            }
        },
        mounted(){
            this.flShowSwiper= true;
            this.$store.commit('hideHeaderBgColor',true)
        },
        computed: {
            // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        },//需要在swiper对象上设置ref=“mySwiper”
        methods:{
            next(){
                let that = this;
                for(let i=0;i<that.swiper.pagination.bullets.length;i++){
                    that.swiper.pagination.bullets[i].onmouseover=function(){
                        this.click();
                    };
                }
            },
            prev(){
            },
            prevpage(){
                if(!this.flShowNextPage) return;
                this.flShowNextPage = !this.flShowNextPage
            },
            nextpage(){
                if(this.flShowNextPage) return;
                this.flShowNextPage = !this.flShowNextPage
            }
        }
    }
</script>

<style  lang="less">
   .hide_bg_color{
        padding-top: 0 !important;
    }
    .home_container{
        padding-top: 0.6rem;
        .home_swiper_container{
            position: relative;
            .swiper-slide{
                .home_banner_content_container{
                    background: url("../assets/irisnetThree/banner_1.jpg") no-repeat center center;
                    background-size: cover;
                    display: flex;
                    justify-content: center;
                    height: 8.8rem;
                    .banner_content{
                        margin-top:3.05rem;
                        text-align: center;
                        .banner_content_h5_title{
                            font-size: 0.45rem;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                            line-height: 0.36rem;
                        }
                        .banner_content_h1_title{
                            margin-top: 0.35rem;
                            font-size: 0.6rem;
                            font-weight:bold;
                            color:rgba(255,255,255,1);
                            line-height:0.7rem;
                        }
                        .banner_content_section{
                            margin-top: 0.1rem;
                            font-size: 0.28rem;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                            line-height: 0.36rem;
                        }
                        .banner_content_bottom{
                            width: 60%;
                            margin: 0 auto;
                            margin-top: 0.5rem;
                            display: flex;
                            flex-direction: column;
                            border-top: 0.02rem solid #fff;
                            a{
                                padding-top: 0.5rem;
                            }
                            a:last-child{
                                padding-top: 0;
                                margin-top: 0.12rem;
                            }
                        }
                    }
                }
                .home_banner_one_content_container{
                    background: url("../assets/irisnetThree/banner_2.jpg") no-repeat center center;
                    background-size: cover;
                    display: flex;
                    justify-content: center;
                    height: 8.8rem;
                    .banner_one_content{
                        margin-top: 3.36rem;
                        text-align: center;
                        .banner_one_content_h5_title{
                            font-size: 0.60rem;
                            font-weight:bold;
                            color:rgba(255,255,255,1);
                            line-height: 0.7rem;
                        }
                        .banner_one_content_h1_title{
                            margin-top: 0.28rem;
                            font-size: 0.28rem;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                            line-height: 0.36rem;
                        }
                        .banner_one_content_section{
                            margin-top: 0.1rem;
                            font-size: 0.28rem;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                            line-height: 0.36rem;
                        }
                    }
                }
            }
            .swiper-pagination-bullet-active{
                width: 0.3rem !important;
                height: 0.02rem;
                background: #0a7dbe;
            }
            .swiper-pagination{
                position: absolute;
                left: 50%;
                bottom: 0.2rem;
                transform: translateX(-50%);
            }
            .swiper-button-prev{
                width: 0.3rem !important;
                height: 0.02rem;
                background: #f66;
            }
            .swiper-button-next{
                width: 0.3rem !important;
                height: 0.02rem;
                background: #0a7dbe;
            }
        }
        .home_irisnet_container{
            background: #fff;
            .home_irisnet_content_wrap{
                max-width: 12rem;
                margin: 1.44rem auto;
                display: flex;

                .home_irisnet_content_img_content{
                    flex: 1;
                    margin-right: 0.92rem;
                    img{
                        width: 100%;
                    }
                }
                .home_irisnet_content_right_content{
                    flex: 1;
                    .home_irisnet_content_title{
                        margin: 0.35rem 0 0.1rem 0;
                        font-size: 0.36rem;
                        font-weight:600;
                        color:rgba(49,50,54,1);
                        line-height: 0.43rem;
                    }
                    .home_irisnet_content_second_title{
                        margin-bottom: 0.2rem;
                        font-size: 0.17rem;
                        font-weight:400;
                        color:rgba(38,48,53,1);
                        line-height: 0.3rem;
                    }
                    .home_irisnet_content_section{
                        font-size: 0.17rem;
                        font-weight:400;
                        color:rgba(124,125,141,1);
                        line-height: 0.3rem;
                    }
                    .home_irisnet_content_second_section{
                        margin-top: 0.2rem;
                        font-size: 0.17rem;
                        font-weight:400;
                        color:rgba(124,125,141,1);
                        line-height: 0.3rem;
                    }
                    .home_irisnet_content_btn{
                        margin: 0.5rem 0;
                        display: flex;
                        a{
                            .home_irisnet_white_paper_btn{
                                background: #5E82F1;
                                padding: 0.14rem 0.24rem;
                                border-radius: 0.33rem;
                                font-size: 0.18rem;
                                font-weight:bold;
                                color:rgba(255,255,255,1);
                                line-height: 0.21rem;
                                margin-right: 0.3rem;
                            }
                            .home_irisnet_mainnet_btn{
                                background: #5E82F1;
                                padding: 0.14rem 0.38rem;
                                border-radius: 0.33rem;
                                font-size: 0.18rem;
                                font-weight:bold;
                                color:rgba(255,255,255,1);
                                line-height: 0.21rem;
                            }
                        }


                    }
                }
            }
        }
        .home_irisnet_product_container{
            background: linear-gradient(90deg,rgba(39,38,159,1) 0%,rgba(14,15,105,1) 100%);
            .home_irisnet_product_wrap{
                max-width: 12rem;
                margin: 0 auto;
                padding: 1.2rem 0;
                display: flex;
                .home_irisnet_product_left_content{
                    flex: 1;
                    display: flex;
                    margin-right: 0.2rem;
                    .home_irisnet_irishub_content{
                        display: flex;
                        flex-direction: column;
                        margin-right: 0.2rem;
                        flex: 1;
                        .home_irisnet_irishub_header{
                            background: rgba(94,130,241,0.1);;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            .home_irisnet_irishub_title{
                                font-size: 0.24rem;
                                font-weight:500;
                                color:rgba(255,255,255,1);
                                line-height: 0.29rem;
                                padding: 0.7rem 0;
                            }
                            .home_irisnet_irishub_img{
                                width: 1rem;
                                margin-bottom: 0.86rem;
                                img{
                                    width: 100%;
                                }
                            }
                        }
                        .home_irisnet_irishub_section{
                            background: rgba(0,0,0,0.08);
                            padding: 0.4rem 0.32rem;
                            box-sizing: border-box;
                            height: 2rem;
                            .home_irisnet_irishub_section_item{
                                font-size: 0.17rem;
                                font-weight:400;
                                color:rgba(127,148,226,1);
                                line-height: 0.3rem;
                            }
                        }
                    }
                    .home_irisnet_irisSdk_content{
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        margin-right: 0.2rem;
                        .home_irisnet_irisSdk_header{
                            background: rgba(94,130,241,0.1);;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            .home_irisnet_irisSdk_title{
                                font-size: 0.24rem;
                                font-weight:500;
                                color:rgba(255,255,255,1);
                                line-height: 0.29rem;
                                padding: 0.7rem 0;
                            }
                            .home_irisnet_irisSdk_img{
                                width: 1rem;
                                margin-bottom: 0.66rem;
                                img{
                                    width: 100%;
                                }
                            }
                        }
                        .home_irisnet_irisSdk_section{
                            background: rgba(0,0,0,0.08);
                            padding: 0.4rem 0.32rem;
                            box-sizing: border-box;
                            height: 2rem;
                            .home_irisnet_irisSdk_section_item{
                                font-size: 0.17rem;
                                font-weight:400;
                                color:rgba(127,148,226,1);
                                line-height: 0.3rem;
                            }

                        }
                    }
                    .home_irisnet_irisSdk_content:last-child{
                        margin-right: 0;
                    }
                }
                .home_irisnet_product_right_content{
                    display: flex;
                    flex: 1;
                    .home_irisnet_iservice_content{
                        display: flex;
                        flex-direction: column;
                        margin-right: 0.2rem;
                        flex: 1;
                        .home_irisnet_iservice_header{
                            background: rgba(94,130,241,0.1);;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            .home_irisnet_iservice_title{
                                font-size: 0.24rem;
                                font-weight:500;
                                color:rgba(255,255,255,1);
                                line-height: 0.29rem;
                                padding: 0.7rem 0;
                            }
                            .home_irisnet_iservice_img{
                                width: 1.28rem;
                                margin-bottom: 1rem;
                                img{
                                    width: 100%;
                                }
                            }
                        }
                        .home_irisnet_iservice_section{
                            background: rgba(0,0,0,0.08);
                            padding: 0.4rem 0.32rem;
                            box-sizing: border-box;
                            height: 2rem;
                            .home_irisnet_iservice_section_item{
                                font-size: 0.17rem;
                                font-weight:400;
                                color:rgba(127,148,226,1);
                                line-height: 0.3rem;
                            }

                        }
                    }
                    .home_irisnet_on_chain_gov_content{
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        margin-right: 0.2rem;
                        .home_irisnet_on_chain_gov_header{
                            background: rgba(94,130,241,0.1);;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            .home_irisnet_on_chain_gov_title{
                                font-size: 0.24rem;
                                font-weight:500;
                                color:rgba(255,255,255,1);
                                line-height: 0.29rem;
                                padding: 0.7rem 0;
                            }
                            .home_irisnet_on_chain_gov_img{
                                width: 1rem;
                                margin-bottom: 0.78rem;
                                img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                        .home_irisnet_on_chain_gov_section{
                            background: rgba(0,0,0,0.08);
                            padding: 0.4rem 0.32rem;
                            box-sizing: border-box;
                            height: 2rem;
                            .home_irisnet_on_chain_gov_section_item{
                                font-size: 0.17rem;
                                font-weight:400;
                                color:rgba(127,148,226,1);
                                line-height: 0.3rem;
                            }
                        }
                    }
                }
            }
        }
        .home_irisnet_road_map_container{
            background: #fff;
            .home_irisnet_road_map_content{
                max-width: 12rem;
                margin: 0 auto;
                padding: 1.2rem 0 0 0;
                .home_irisnet_road_map_header{
                    text-align: center;
                    .home_irisnet_road_map_title{
                        font-size: 0.36rem;
                        font-weight:400;
                        color:rgba(38,48,53,1);
                        line-height: 0.65rem;
                    }
                }
                .home_irisnet_road_map_center_container{
                    max-height: 11rem;
                    overflow: hidden;
                    .home_irisnet_road_map_center{
                        display: flex;
                        justify-content: space-between;
                        overflow-y: hidden;
                        margin-top: 1.62rem;
                        .home_irisnet_road_map_left_content{
                            transform: translateY(-3.1rem);
                            font-size: 0.36rem;
                            font-weight:bold;
                            line-height: 0.43rem;
                            display: flex;
                            flex: 2;
                            div{
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                span{
                                    margin-bottom: 1.2rem;
                                    display: inline-block;
                                    transform: rotate(-90deg);
                                }
                                .showCurrent{
                                    opacity: 1 !important;
                                }
                                .hideCurrent{
                                    opacity: 0.15 !important;;
                                }
                                span:first-child{
                                    opacity: 0.15;
                                }
                            }

                        }
                        .show_next_page{
                            animation: showNextPage linear 0.3s 1 forwards;
                        }
                        .hide_next_page{
                            animation: hideNextPage linear 0.3s 1 forwards;
                        }
                        .home_irisnet_road_map_right_content{
                            flex: 4;
                            display: flex;
                            transform: translateY(-3.1rem);
                            .home_irisnet_road_map_left_step{
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                p{
                                    white-space: nowrap;
                                    flex: 1;
                                    min-height: 3.2rem;
                                    font-size: 0.26rem;
                                    font-weight:600;
                                    color:rgba(49,50,54,1);
                                    line-height: 0.31rem;
                                }
                            }
                            .home_irisnet_road_map_center_step{
                                margin: 0 0.6rem 0 0.8rem;
                                .home_irisnet_road_map_line{
                                    height: 100%;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: space-between;
                                    border-right: 0.02rem solid;
                                    border-image: linear-gradient(#fff,#000,#fff) 30  10 30;
                                    .home_irisnet_road_map_img_content{
                                        flex: 1;
                                        width: 0.32rem;
                                        position: relative;
                                        left: 50%;
                                        img{
                                            left: 76%;
                                            display: inline-block;
                                            width:100%;
                                        }
                                    }

                                }
                            }
                            .home_irisnet_road_map_right_step{
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                .home_irisnet_road_map_right_step_content{
                                    flex: 1;
                                    .home_road_map_right_step_title{
                                        font-size: 0.17rem;
                                        color:rgba(124,125,141,1);
                                        line-height: 0.34rem;
                                    }
                                    .home_road_map_right_step_section{
                                        min-width: 4.8rem;
                                        margin-top: 0.1rem;
                                        font-size: 0.17rem;
                                        color:rgba(124,125,141,1);
                                        line-height: 0.34rem;
                                        margin-bottom: 0.5rem;

                                    }
                                }
                                .home_irisnet_road_map_right_step_content:last-child{
                                    .home_road_map_right_step_title{
                                        color: rgba(49,50,54,0.2);
                                    }
                                    .home_road_map_right_step_section{
                                        padding-bottom: 0;
                                        color:  rgba(49,50,54,0.2);
                                    }
                                }
                            }
                        }
                    }
                }
                .home_irisnet_road_map_footer{
                    .home_irisnet_road_map_footer_content{
                        max-width: 12rem;
                        margin: 0 auto;
                        display: flex;
                        justify-content: center;
                        padding: 0.8rem 0;
                        span{
                            display: inline-block;
                            width: 0.56rem;
                            margin-right: 0.2rem;
                            img{
                                width: 100%;
                            }
                        }
                        span:last-child{
                            margin-right: 0;
                        }
                    }
                }
            }
        }
    }
    @keyframes showNextPage {
        from{
            transform:translateY(-3.1rem);
        }
        to{
            transform:translateY(0);
        }
    }
    @keyframes hideNextPage {
        from{
            transform:translateY(0);
        }
        to{
            transform:translateY(-3.1rem);
        }
    }
    @media screen and (min-width:768px) and (max-width: 1200px){
        .home_container{
            .home_irisnet_container{
                margin: 0 10%;
               .home_irisnet_content_wrap{
                   flex-direction: column-reverse;
                   .home_irisnet_content_img_content{
                       display: flex;
                       margin-right: 0;
                       justify-content: center;
                   }
               }
            }
            .home_irisnet_product_container{
                .home_irisnet_product_wrap{
                    flex-direction: column;
                    margin: 0 10%;
                    .home_irisnet_product_left_content{
                        margin-right: 0;
                    }
                    .home_irisnet_product_right_content{
                        margin-top: 0.6rem;
                        .home_irisnet_on_chain_gov_content{
                            margin-right: 0;
                        }
                    }
                }
            }
            .home_irisnet_road_map_container{
                .home_irisnet_road_map_content{
                    .home_irisnet_road_map_center_container{
                        max-height: none;
                        padding-bottom: 1.05rem;
                        .home_irisnet_road_map_center{
                            margin-right: 5%;
                            margin-left: 5%;
                            .home_irisnet_road_map_left_content{
                                display: none;
                                transform: translateY(-3.1rem);

                            }
                            .home_irisnet_road_map_right_content{
                                transform: translateY(0);
                                .home_irisnet_road_map_left_step{
                                    p{
                                        min-height: 3.3rem;
                                    }
                                }
                                .home_irisnet_road_map_center_step{
                                    margin: 0 0.4rem 0 0.2rem;
                                }
                                .home_irisnet_road_map_right_step{
                                    .home_irisnet_road_map_right_step_content{
                                        .home_road_map_right_step_section{
                                            min-width: 4.8rem;
                                        }
                                    }
                                }
                            }
                            .hide_next_page{
                                animation: none;
                            }
                        }
                    }
                    .home_irisnet_road_map_footer{
                        display: none;
                    }
                }
            }
        }
    }
    @media screen and (min-width:375px) and (max-width: 768px){
        .home_container{
            .home_swiper_container{
                .swiper-slide{
                    .home_banner_one_content_container{
                        height: 6rem;
                        padding: 0 0.2rem;
                        .banner_one_content{
                            margin-top: 2rem;
                            .banner_one_content_h5_title{
                                font-size: 0.28rem;
                                line-height: 0.42rem;
                            }
                            .banner_one_content_h1_title{
                                font-size: 0.14rem;
                                line-height: 0.21rem;
                            }
                            .banner_one_content_section{
                                font-size: 0.14rem;
                                line-height: 0.21rem;
                            }
                        }
                    }
                    .home_banner_content_container{
                        height:6rem;
                        .banner_content{
                            margin-top: 2.23rem;
                            padding: 0 0.2rem;
                            .banner_content_h5_title{
                                font-size: 0.24rem;
                                line-height: 0.2rem;
                            }
                            .banner_content_h1_title{
                                margin-top: 0.21rem;
                                font-size: 0.28rem;
                                line-height: 0.38rem;
                            }
                            .banner_content_section{
                                font-size: 0.14rem;
                                line-height: 0.2rem;
                            }
                            .banner_content_bottom{
                                margin-top: 0.26rem;
                                a{
                                    margin-top: 0.26rem;
                                }
                                a:first-child{
                                    padding-top: 0;
                                }
                            }
                        }
                    }
                }
            }
            .home_irisnet_container{
                margin: 0 5%;
                .home_irisnet_content_wrap{
                    flex-direction: column-reverse;
                    margin-top: 0.5rem;
                    .home_irisnet_content_img_content{
                        display: flex;
                        margin-right: 0;
                        justify-content: center;
                    }
                    .home_irisnet_content_right_content{
                        .home_irisnet_content_btn{
                            flex-direction: column;
                            a:first-child{
                                .home_irisnet_white_paper_btn{
                                    margin-right: 0;
                                    text-align: center;
                                }
                            }
                            a:last-child{
                                margin-top: 0.2rem;
                                text-align: center;
                            }
                        }
                    }
                }
            }
            .home_irisnet_product_container{
                .home_irisnet_product_wrap{
                    flex-direction: column;
                    margin: 0 5%;
                    .home_irisnet_product_left_content{
                        margin-right: 0;
                        flex-direction: column;
                        .home_irisnet_irishub_content{
                            margin-right: 0;
                        }
                        .home_irisnet_irisSdk_content{
                            margin-top: 0.2rem;
                        }
                    }
                    .home_irisnet_product_right_content{
                        margin-top: 0.2rem;
                        flex-direction: column;
                        .home_irisnet_iservice_content{
                            margin-right: 0;
                        }
                        .home_irisnet_on_chain_gov_content{
                            margin-right: 0;
                            margin-top: 0.2rem;
                        }
                    }
                }
            }
            .home_irisnet_road_map_container{
                .home_irisnet_road_map_content{
                    padding-top: 0.5rem;
                    .home_irisnet_road_map_header{
                        .home_irisnet_road_map_title{
                            font-size: 0.18rem;
                        }
                    }
                    .home_irisnet_road_map_center_container{
                        max-height: none;
                        padding-bottom: 1.05rem;
                        .home_irisnet_road_map_center{
                            margin-top: 0.6rem;
                            margin-right: 5%;
                            margin-left: 5%;
                            .home_irisnet_road_map_left_content{
                                display: none;
                                transform: translateY(-3.1rem);
                            }
                            .home_irisnet_road_map_right_content{
                                transform: translateY(0);
                                .home_irisnet_road_map_left_step{
                                    p{
                                        font-size: 0.14rem;
                                        min-height: 5rem;
                                    }
                                }
                                .home_irisnet_road_map_center_step{
                                    margin: 0 0.2rem 0 0;
                                }
                                .home_irisnet_road_map_right_step{
                                    .home_irisnet_road_map_right_step_content{
                                        .home_road_map_right_step_title{
                                            font-size: 0.14rem;
                                        }
                                        .home_road_map_right_step_section{
                                            min-width: auto;
                                            font-size: 0.14rem;
                                            margin-bottom: 0;
                                        }
                                    }
                                }
                            }
                            .hide_next_page{
                                animation: none;
                            }
                        }
                    }
                    .home_irisnet_road_map_footer{
                        display: none;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 375px){
        .home_container{
            .home_swiper_container{
                .swiper-slide{
                    .home_banner_one_content_container{
                        height: 6rem;
                        padding: 0 0.2rem;
                        .banner_one_content{
                            margin-top: 2rem;
                            .banner_one_content_h5_title{
                                font-size: 0.28rem;
                                line-height: 0.42rem;
                            }
                            .banner_one_content_h1_title{
                                font-size: 0.14rem;
                                line-height: 0.21rem;
                            }
                            .banner_one_content_section{
                                font-size: 0.14rem;
                                line-height: 0.21rem;
                            }
                        }
                    }
                    .home_banner_content_container{
                        height:6rem;
                        .banner_content{
                            padding: 0 0.2rem;
                            margin-top: 2.23rem;
                            .banner_content_h5_title{
                                font-size: 0.24rem;
                                line-height: 0.2rem;
                            }
                            .banner_content_h1_title{
                                margin-top: 0.21rem;
                                font-size: 0.28rem;
                                line-height: 0.38rem;
                            }
                            .banner_content_section{
                                font-size: 0.14rem;
                                line-height: 0.2rem;
                            }
                            .banner_content_bottom{
                                margin-top: 0.26rem;
                                a{
                                    margin-top: 0.26rem;
                                }
                                a:first-child{
                                    padding-top: 0;
                                }
                            }
                        }
                    }
                }
            }
            .home_irisnet_container{
                margin: 0 5%;
                .home_irisnet_content_wrap{
                    flex-direction: column-reverse;
                    margin-top: 0.5rem;
                    .home_irisnet_content_img_content{
                        display: flex;
                        margin-right: 0;
                        justify-content: center;
                    }
                    .home_irisnet_content_right_content{
                        .home_irisnet_content_btn{
                            flex-direction: column;
                            a:first-child{
                                .home_irisnet_white_paper_btn{
                                    margin-right: 0;
                                    text-align: center;
                                }
                            }
                            a:last-child{
                                margin-top: 0.2rem;
                                text-align: center;
                            }
                        }
                    }
                }
            }
            .home_irisnet_product_container{
                .home_irisnet_product_wrap{
                    flex-direction: column;
                    margin: 0 5%;
                    .home_irisnet_product_left_content{
                        margin-right: 0;
                        flex-direction: column;
                        .home_irisnet_irishub_content{
                            margin-right: 0;
                        }
                        .home_irisnet_irisSdk_content{
                            margin-top: 0.2rem;
                        }
                    }
                    .home_irisnet_product_right_content{
                        margin-top: 0.2rem;
                        flex-direction: column;
                        .home_irisnet_iservice_content{
                            margin-right: 0;
                        }
                        .home_irisnet_on_chain_gov_content{
                            margin-right: 0;
                            margin-top: 0.2rem;
                        }
                    }
                }
            }
            .home_irisnet_road_map_container{
                .home_irisnet_road_map_content{
                    padding-top: 0.5rem;
                    .home_irisnet_road_map_header{
                        .home_irisnet_road_map_title{
                            font-size: 0.18rem;
                        }
                    }
                    .home_irisnet_road_map_center_container{
                        max-height: none;
                        padding-bottom: 1.05rem;
                        .home_irisnet_road_map_center{
                            margin-top: 0.6rem;
                            margin-right: 5%;
                            margin-left: 5%;
                            .home_irisnet_road_map_left_content{
                                display: none;
                                transform: translateY(-3.1rem);
                            }
                            .home_irisnet_road_map_right_content{
                                transform: translateY(0);
                                .home_irisnet_road_map_left_step{
                                    p{
                                        font-size: 0.14rem;
                                        min-height: 5rem;
                                    }
                                }
                                .home_irisnet_road_map_center_step{
                                    margin: 0 0.2rem 0 0;
                                }
                                .home_irisnet_road_map_right_step{
                                    .home_irisnet_road_map_right_step_content{
                                        .home_road_map_right_step_title{
                                            font-size: 0.14rem;
                                        }
                                        .home_road_map_right_step_section{
                                            min-width: auto;
                                            font-size: 0.14rem;
                                            margin-bottom: 0;
                                        }
                                    }
                                }
                            }
                            .hide_next_page{
                                animation: none;
                            }
                        }
                    }
                    .home_irisnet_road_map_footer{
                        display: none;
                    }
                }
            }
        }
    }
</style>