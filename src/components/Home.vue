<template>
    <div class="content_wrap" @click="closeWeChat">
        <div @mouseenter="swiperStop" @mouseleave="swiperStart">
            <swiper ref="mySwiper" :options="swiperOption"  class="my-swipe" v-if="flShowSwiper" >
                <swiper-slide>
                    <section class="sectionOne">
                        <div class="left">
                            <div>{{$store.state.messages.home.sectionOne.title}}</div>
                            <div>{{$store.state.messages.home.sectionOne.time}}</div>
                            <div>
                                <a :href="$store.state.messages.home.sectionOne.shareUrl.telegramUrl" target="_bank"><img src="../assets/hoverIcon/telegramIconHover.png" alt=""></a>
                                <a :href="$store.state.messages.home.sectionOne.shareUrl.githubUrl" target="_bank"><img src="../assets/hoverIcon/githubIconHover.png" alt=""></a>
                                <a @click="showWeChatPic">
                                    <img src="../assets/hoverIcon/weChatIconHover.png" alt="">
                                    <div v-show="showWeChat"  class="mobileBox" @touchmove.prevent>
                                        <div class="qrcode" @touchmove.prevent>
                                            <img src="../assets/wechat.jpg" alt="" @touchmove.prevent>
                                            <div class="arrow"></div>
                                            <img src="../assets/closeIcon.png" alt="" class="closeIcon" @touchmove.prevent>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <button @click="jumpUrl($store.state.messages.home.sectionOne.button.buttonUrl.rainbowUrl)">{{$store.state.messages.home.sectionOne.button.buttonName.rainbowName}}</button>
                                <button @click="jumpUrl($store.state.messages.home.sectionOne.button.buttonUrl.explorerUrl)">{{$store.state.messages.home.sectionOne.button.buttonName.explorerName}}</button>
                            </div>
                        </div>
                        <div class="right">
                            <img src="../assets/banner.png" alt="" class="banner">
                        </div>
                    </section>
                </swiper-slide>
                <swiper-slide>
                    <section class="sectionOne1">
                        <div class="left">
                            <div class="irisnet_bianjie_moniker">{{bianJieMoniker}}</div>
                            <div>{{rate}} {{$store.state.messages.home.irisnetBianJie.commission}}</div>
                            <div class="development_content">
                                <p>{{$store.state.messages.home.irisnetBianJie.development}}</p>
                            </div>
                            <div>
                                <button @click="jumpUrl($store.state.messages.home.irisnetBianJie.button.buttonUrl.rainbowUrl)">{{$store.state.messages.home.irisnetBianJie.button.buttonName.rainbowName}}</button>
                                <button @click="jumpUrl($store.state.messages.home.irisnetBianJie.button.buttonUrl.explorerUrl)">{{$store.state.messages.home.irisnetBianJie.button.buttonName.explorerName}}</button>
                            </div>
                        </div>
                        <div class="right">
                            <img src="../assets/IRISnet_bianjie_node_logo.png" alt="" class="banner">
                        </div>
                    </section>
                </swiper-slide>
            </swiper>
        </div>
        <section class="sectionTwo" ref="whitePaper">
            <div class="first">
                <div class="left">
                    <div class="keyInnovationMsg">
                        <div class="title">{{$store.state.messages.home.sectionTwo.KeyInnovations.title}}</div>
                        <ul class="msgList">
                            <li v-for="n of $store.state.messages.home.sectionTwo.KeyInnovations.list" :key="n.id"><label></label> {{n.msg}} </li>
                        </ul>
                        <div class="whitePaper">
                            <button @click="jumpUrl($store.state.messages.home.sectionTwo.KeyInnovations.WHITEPAPERUrl)"><span>{{$store.state.messages.home.sectionTwo.KeyInnovations.buttonMsg}}</span> <img src="../assets/rightArrow.png" alt=""></button>
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
                            <li v-for="n of $store.state.messages.home.sectionTwo.NetworkDesign.list" :key="n.id"><label></label> {{n.msg}} </li>
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
                        <a :href="n.url" target="_blank" v-for="n of $store.state.messages.home.sectionFour.CoreDevelopmentTeams.logos" :key="n.id">
                            <img :src='UrlSrc + n.path'>
                        </a>
                    </div>
                </div>
                <div class="logo">
                    <div class="title">{{$store.state.messages.home.sectionFour.StrategicPartners.title}}</div>
                    <div class="logoIcon">
                        <a :href="n.url" target="_blank" v-for="n of $store.state.messages.home.sectionFour.StrategicPartners.logos" :key="n.id">
                            <img :src='UrlSrc + n.path'>
                        </a>
                    </div>
                </div>
                <div class="logo">
                    <div class="title">{{$store.state.messages.home.sectionFour.EcosystemPartners.title}}</div>
                    <div class="logoIcon">
                        <a :href="n.url" target="_blank" v-for="n of $store.state.messages.home.sectionFour.EcosystemPartners.logos" :key="n.id">
                            <img :src='UrlSrc + n.path'>
                        </a>
                    </div>
                </div>
                <div class="logo">
                    <div class="title">{{$store.state.messages.home.sectionFour.Institutional.title.msg1}}<p>{{$store.state.messages.home.sectionFour.Institutional.title.msg2}}</p></div>
                    <div class="logoIcon supporters">
                        <a :href="n.url" target="_blank" v-for="n of $store.state.messages.home.sectionFour.Institutional.logos" :key="n.id">
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
        name: "Home",
        data () {
            return {
                showWeChat: false,
                timer: null,
	            flShowSwiper: false,
	            swiperOption:{
                	loop:true,
                    autoplay: 3000,
                    speed: 300,
		            autoplayDisableOnInteraction:false,
		            disableOnInteraction:false,
                    //鼠标变成手掌型
		            grabCursor: true,
		            virtualTranslate: false,
		            roundLengths: true,
                    autoHeight: true,
		            // effect : 'coverflow',
                },
	            bianJieMoniker:'',
	            rate:''
            }
        },
	    computed: {
		    mySwiper() {
			    // mySwiper 是要绑定到标签中的ref属性
			    return this.$refs.mySwiper.swiper
		    },

	    },
         methods: {
	         swiperStop() {
		        this.mySwiper.stopAutoplay()
	        },
	         swiperStart() {
		        this.mySwiper.startAutoplay()
	        },

            jumpUrl (url) {
                window.open(url)
            },
            showWeChatPic (e) {
                e.stopPropagation()
                this.showWeChat = !this.showWeChat
            },

            closeWeChat () {
                this.showWeChat = false
            },
	        getCosmosBianJieValidator(){
		        let url = `/validators`;
		        axios(url).then(data => {
			        if(data.status === 200){
				        return data.data
			        }
		        }).then(res => {
			        if(res && typeof res === "object" && Object.keys(res).length !== 0){
				        localStorage.setItem('rate',res.commission.rate);
				        this.bianJieMoniker = res.description.moniker;
				        this.rate = this.formatRate(localStorage.getItem('rate'));
			        }else {
				        this.rate= '';
				        this.bondedTokens = '';

			        }
		        }).catch(err => {

		        })
	        },
            onresize(){
                clearTimeout(this.timer);
                let that = this;

                this.timer =  setTimeout(function () {
                    that.$store.commit('whitePaper',that.$refs.whitePaper.offsetTop - that.$store.state.headerHeight);
                    that.$store.commit('roadmap',that.$refs.roadmap.offsetTop - that.$store.state.headerHeight);
                    that.$store.commit('collaboration',that.$refs.collaboration.offsetTop - that.$store.state.headerHeight);
                },200);
            },
	        formatRate(rate){
		        return `${(rate*100).toFixed(2)} %`
	        },
        },
        mounted () {
            this.onresize();
            this.getCosmosBianJieValidator();
	        this.flShowSwiper= true;
	        this.bianJieMoniker= 'IRISnet-Bianjie';
	        this.rate = localStorage.getItem('rate') ? this.formatRate(localStorage.getItem('rate')) : '';
            window.addEventListener('resize',this.onresize);
        },
    }
</script>

<style scoped lang="less">
@import "../assets/style/home.less";
</style>