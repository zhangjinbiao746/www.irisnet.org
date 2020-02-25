<template>
    <div class="swiper_container">
        <div @mouseenter="swiperStop" @mouseleave="swiperStart" style="position: relative;">
            <swiper ref="mySwiper" :options="swiperOption"  class="my-swipe" v-if="flShowSwiper" >
                <swiper-slide>
                    <section class="sectionOne1">
                        <div class="left">
                            <div class="irisnet_bianjie_moniker">{{$store.state.messages.home.irisnetBianJie.commission}}</div>
                            <div>{{bianJieMoniker}}</div>
                            <div class="development_content">
                                <p>{{$store.state.messages.home.irisnetBianJie.development}}</p>
                            </div>
                            <div>
                                <a :href="$store.state.messages.home.irisnetBianJie.button.buttonUrl.explorerUrl" target="_blank">
                                    <button>{{$store.state.messages.home.irisnetBianJie.button.buttonName.explorerName}}</button>
                                </a>
                                <a :href="$store.state.messages.home.irisnetBianJie.button.buttonUrl.rainbowUrl" target="_blank">
                                    <button>{{$store.state.messages.home.irisnetBianJie.button.buttonName.rainbowName}}</button>
                                </a>
                            </div>
                        </div>
                        <div class="right">
                            <img src="../../assets/IRISnet_bianjie_node_logo.png" alt="" class="banner">
                        </div>
                    </section>
                </swiper-slide>
                <swiper-slide>
                    <section class="sectionOne">
                        <div class="left">
                            <div>{{$store.state.messages.home.sectionOne.title}}</div>
                            <div>{{$store.state.messages.home.sectionOne.content}}</div>
                            <div>{{$store.state.messages.home.sectionOne.time}}</div>
                            <div>
                                <a :href="$store.state.messages.home.sectionOne.button.buttonUrl.rainbowUrl" target="_blank">
                                    <button>{{$store.state.messages.home.sectionOne.button.buttonName.rainbowName}}</button>
                                </a>
                                <a :href="$store.state.messages.home.sectionOne.button.buttonUrl.explorerUrl" target="_blank">
                                    <button>{{$store.state.messages.home.sectionOne.button.buttonName.explorerName}}</button>
                                </a>
                            </div>
                        </div>
                        <div class="right">
                            <img src="../../assets/banner.png" alt="" class="banner">
                        </div>
                    </section>
                </swiper-slide>
            </swiper>
            <div class="swiper-button-prev"  @click="prev()"></div>

            <div class="swiper-button-next"  @click="next()"></div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Swiper",
        data(){
            return{
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
                    navigation:{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
                },
                flShowSwiper: false,
            }
        },
        mounted(){
            this.flShowSwiper= true;
        },
        methods:{
            swiperStop() {
                this.mySwiper.stopAutoplay()
            },
            swiperStart() {
                this.mySwiper.startAutoplay()
            },
        }
    }
</script>

<style scoped>

</style>