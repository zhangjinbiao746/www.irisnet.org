<template>
    <div class="home_container">
        <div class="home_swiper_container">
            <swiper ref="mySwiper" class="my-swipe" :options="swiperOption">
                <swiper-slide>
                    <div style="width: 100%;">
                        <img style="width: 100%;" src="../assets/irisnetThree/home_swiper_1.jpg" >
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div style="width: 100%;">
                        <img style="width: 100%;" src="../assets/irisnetThree/home_swiper_1.jpg" alt="">
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div style="width: 100%;">
                        <img style="width: 100%;" src="../assets/irisnetThree/home_swiper_1.jpg" alt="">
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div style="width: 100%;">
                        <img style="width: 100%;" src="../assets/irisnetThree/home_swiper_1.jpg" alt="">
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
                    <div class="home_irisnet_content_title">IRIS Network</div>
                    <div class="home_irisnet_content_section">IRIS Network (IRISnet) is a self-evolving BPoS cross-chain service hub. It is a blockchain cross-chain service network created by Border Intelligence and Cosmos/Tendermint. It focuses on providing infrastructure and protocols for distributed applications. Integration and interoperability, including public links, alliance chains, and existing traditional business systems, allowing data and complex computing to be invoked across heterogeneous networks is the next-generation public chain that links the digital economy to the real economy and builds complex distributed business applications.</div>
                    <div class="home_irisnet_content_btn">
                        <a href="">
                            <div class="home_irisnet_white_paper_btn">Whitepaper</div>
                        </a>
                        <a href="">
                            <div class="home_irisnet_mainnet_btn">Mainnet</div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
        <div class="home_irisnet_product_container">
            <div class="home_irisnet_product_wrap">
                <div class="home_irisnet_product_left_content">
                    <div class="home_irisnet_irishub_content">
                        <div class="home_irisnet_irishub_header">
                            <p class="home_irisnet_irishub_title">IRIS Hub</p>
                            <div class="home_irisnet_irishub_img">
                                <img src="../assets/irisnetThree/irishub.png" alt="">
                            </div>
                        </div>
                        <div class="home_irisnet_irishub_section">
                            <p class="home_irisnet_irishub_section_item">The first regional hub will connect the Cosmos Hub as one of its zones</p>
                            <p class="home_irisnet_irishub_section_item">The center of the IRIS Network with cross-chain service protocol</p>
                        </div>
                    </div>
                    <div class="home_irisnet_irisSdk_content">
                        <div class="home_irisnet_irisSdk_header">
                            <p class="home_irisnet_irisSdk_title">IRIS SDK</p>
                            <div class="home_irisnet_irisSdk_img">
                                <img src="../assets/irisnetThree/irissdk.png" alt="">
                            </div>
                        </div>
                        <div class="home_irisnet_irisSdk_section">
                            <p class="home_irisnet_irisSdk_section_item">The first regional hub will connect the Cosmos Hub as one of its zones</p>
                            <p class="home_irisnet_irisSdk_section_item">The center of the IRIS Network with cross-chain service protocol</p>
                        </div>
                    </div>
                </div>
                <div class="home_irisnet_product_right_content">
                    <div class="home_irisnet_iservice_content">
                        <div class="home_irisnet_iservice_header">
                            <p class="home_irisnet_iservice_title">iService</p>
                            <div class="home_irisnet_iservice_img">
                                <img src="../assets/irisnetThree/iservice.png" alt="">
                            </div>
                        </div>
                        <div class="home_irisnet_iservice_section">
                            <p class="home_irisnet_iservice_section_item">The first regional hub will connect the Cosmos Hub as one of its zones</p>
                            <p class="home_irisnet_iservice_section_item">The center of the IRIS Network with cross-chain service protocol</p>
                        </div>
                    </div>
                    <div class="home_irisnet_on_chain_gov_content">
                        <div class="home_irisnet_on_chain_gov_header">
                            <p class="home_irisnet_on_chain_gov_title">On-chain Gov</p>
                            <div class="home_irisnet_on_chain_gov_img">
                                <img src="../assets/irisnetThree/chaingov.png" alt="">
                            </div>
                        </div>
                        <div class="home_irisnet_on_chain_gov_section">
                            <p class="home_irisnet_on_chain_gov_section_item">The first regional hub will connect the Cosmos Hub as one of its zones</p>
                            <p class="home_irisnet_on_chain_gov_section_item">The center of the IRIS Network with cross-chain service protocol</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="home_irisnet_road_map_container">
            <div class="home_irisnet_road_map_content">
                <div class="home_irisnet_road_map_header">
                    <p class="home_irisnet_road_map_title">The expected project roadmap</p>
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
                                <P>PANGU</P>
                                <p>NÜWA</p>
                                <p>KUAFU</p>
                                <p>HOUYI</p>
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
                                    <p class="home_road_map_right_step_title"> April 2019 ~ October 2019</p>
                                    <p class="home_road_map_right_step_section">The first stage of the IRIS project focused on having the IRIS Hub up and running. Initial version of the mobile client for the IRIS network was released. In this stage we also focused on building the fundamental IRIS Service Layer which was released to IRIS Hub. Which enables service definition, binding, invocation and query.</p>
                                </div>
                                <div class="home_irisnet_road_map_right_step_content">
                                    <p class="home_road_map_right_step_title"> April 2019 ~ October 2019</p>
                                    <p class="home_road_map_right_step_section">In this stage we are adding more fundamental modules to support application development especially DeFi applications. The new modules planned to release in this stage including multi-asset management, uniswap, multi-sig account etc. We plan to collaborate with 1-2 ecosystem partners to develop applications using those modules.We also plan to accomplish the test connection with Cosmos Hub through IBC at this stage.</p>
                                </div>
                                <div class="home_irisnet_road_map_right_step_content">
                                    <p class="home_road_map_right_step_title"> April 2019 ~ October 2019</p>
                                    <p class="home_road_map_right_step_section">In this stage we are aiming to accomplish the connection of IRIS Hub with applications blockchains through IBC. We plan to upgrade IRISnet mobile client to support those applications. The third stage will also focus on incremental upgrades to the IRIS network in order to support our planned advanced IRIS Service features.</p>
                                </div>
                                <div class="home_irisnet_road_map_right_step_content">
                                    <p class="home_road_map_right_step_title"> April 2019 ~ October 2019</p>
                                    <p class="home_road_map_right_step_section">The fourth stage will focus on further technology innovations to the IRIS network, SDK and mobile client, as well as developer engagement.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="home_irisnet_road_map_footer">
                    <div class="home_irisnet_road_map_footer_content">
                        <span @click="prevpage()">
                            <img v-show="!flShowNextPage" src="../assets/irisnetThree/prev.png" alt="">
                            <img v-show="flShowNextPage" src="../assets/irisnetThree/prev_light.png" alt="">
                        </span>
                        <span @click="nextpage()">
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
    export default {
        name: "HomeThree",
        data(){
            return {
                flShowNextPage: false,
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
            console.log(this,"数据展示")
            this.flShowSwiper= true;
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

    .home_container{
        padding-top: 0.6rem;
        .home_swiper_container{
            position: relative;
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
                        margin: 0.35rem 0 0.4rem 0;
                        font-size: 0.36rem;
                        font-weight:600;
                        color:rgba(49,50,54,1);
                        line-height: 0.43rem;
                    }
                    .home_irisnet_content_section{
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
                    display: flex;
                    margin-right: 0.2rem;
                    .home_irisnet_irishub_content{
                        display: flex;
                        flex-direction: column;
                        margin-right: 0.2rem;
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
                            .home_irisnet_irishub_section_item{
                                font-size: 0.17rem;
                                font-weight:400;
                                color:rgba(127,148,226,1);
                                line-height: 0.3rem;
                            }
                            .home_irisnet_irishub_section_item:last-child{
                                margin-top: 0.3rem;
                            }
                        }
                    }
                    .home_irisnet_irisSdk_content{
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
                            .home_irisnet_irisSdk_section_item{
                                font-size: 0.17rem;
                                font-weight:400;
                                color:rgba(127,148,226,1);
                                line-height: 0.3rem;
                            }
                            .home_irisnet_irisSdk_section_item:last-child{
                                margin-top: 0.3rem;
                            }
                        }
                    }
                    .home_irisnet_irisSdk_content:last-child{
                        margin-right: 0;
                    }
                }
                .home_irisnet_product_right_content{
                    display: flex;
                    .home_irisnet_iservice_content{
                        display: flex;
                        flex-direction: column;
                        margin-right: 0.2rem;
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
                            .home_irisnet_iservice_section_item{
                                font-size: 0.17rem;
                                font-weight:400;
                                color:rgba(127,148,226,1);
                                line-height: 0.3rem;
                            }
                            .home_irisnet_iservice_section_item:last-child{
                                margin-top: 0.3rem;
                            }
                        }
                    }
                    .home_irisnet_on_chain_gov_content{
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
                            .home_irisnet_on_chain_gov_section_item{
                                font-size: 0.17rem;
                                font-weight:400;
                                color:rgba(127,148,226,1);
                                line-height: 0.3rem;
                            }
                            .home_irisnet_on_chain_gov_section_item:last-child{
                                margin-top: 0.3rem;
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
                        font-size: 0.48rem;
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
                            transform: translateY(-3.28rem);
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
                            transform: translateY(-3.28rem);
                            .home_irisnet_road_map_left_step{
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                p{
                                    flex: 1;
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
            transform:translateY(-3.28rem);
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
            transform:translateY(-3.28rem);
        }
    }
</style>