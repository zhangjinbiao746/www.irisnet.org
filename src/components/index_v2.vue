<template>
    <div>
        <div id="index" class="index" style="background: #0b0b18">
            <!--头部-->
            <div class="head" style="position: fixed;background: #0b0b18">
                <div class="center1" style="margin: 0 5%;">
                    <a href="#"><img :src="UrlSrc+$store.state.messages.logo" style="width: 130px;"/></a>
                    <div class="item_en" v-if="$store.state.lang=='EN'">
                        <div @mouseenter="downShow" @mouseleave="downHide" class="item">
                            <img :src="UrlSrc+down"/> English
                        </div>
                        <a class="item_cn" href="?lang=CN">
                            中文
                        </a>
                    </div>
                    <div class="item_en" v-if="$store.state.lang=='CN'">
                        <div @mouseenter="downShow" @mouseleave="downHide" class="item">
                            <img :src="UrlSrc+down"/>中文
                        </div>
                        <a class="item_cn" href="?lang=EN">
                            English
                        </a>
                    </div>
                    <div class="comm">
                        <div class="div_h">
                        </div>
                        <a class="item" style="margin-right: 10px;" @mouseenter="commHide" @mouseleave="commShow">
                            <img :src="UrlSrc+comm">
                            Community
                            <div></div>
                        </a>
                    </div>
                    <div style="float: right">
                        <router-link v-for="(item,index) in $store.state.messages.head.txt" class="item"
                                     :class="{'item_selected':item.is}" :to="item.href" :key="index"
                                     @click.native="showIndex(index)">
                            {{item.txt}}
                            <div></div>
                        </router-link>
                    </div>

                </div>
            </div>
            <!--内容区-->
            <div class="container">
                <div class="container-center">
                    <div id="#" class="what">
                        <div class="home" style="display: flex;">
                            <div class="hone-text-container">
                                <div class="home_warp">
                                    <div class="home_txt" v-show="true">
                                        {{$store.state.messages.home.title}}
                                    </div>

                                    <div class="home_txt1" v-html="$store.state.messages.home.txt">
                                    </div>
                                </div>
                                <a href="#/0/1">
                                    <div class="home_what">
                                        <span class="home_what_txt">WHAT IS IRISNET</span>
                                    </div>
                                </a>
                            </div>
                            <div class="home-container">
                                <div class="layer_img">
                                    <img src="../../public/layer1.png">
                                </div>
                                <div class="irispattern_img">
                                    <img src="../../public/irispattern.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="#/0/1" class="what">
                        <div class="innovation-container">

                            <div class="what_txt">
                                <div class="what_txt_title">
                                    {{$store.state.messages.about.title}}
                                    <div class="line" style="margin-top: 10px"></div>
                                </div>
                                <div class="what_txt_list_two">
                                    {{$store.state.messages.about.txt[0]}}
                                </div>
                                <div class="what_txt_list_center">
                                    {{$store.state.messages.about.txt[1]}}
                                </div>
                                <div class="what_txt_list_four">
                                    {{$store.state.messages.about.txt[2]}}
                                </div>
                                <div class="about_tab">
                                    <a href="https://github.com/irisnet/irisnet/blob/master/WHITEPAPER.md"
                                       target="_blank">
                                        <div class="about_what">
                                            <span class="about_what_txt">{{$store.state.messages.about.btnTxt}}</span>
                                            <i class="guide_right">
                                                <img src="../../public/arrowhead.png">
                                            </i>
                                        </div>
                                    </a>
                                    <!--<a href="#/0/2">-->
                                    <!--<div class="about_what_check">-->
                                    <!--<span class="about_what_check_txt">{{$store.state.messages.about.checkTxt}}</span>-->
                                    <!--</div>-->
                                    <!--</a>-->
                                </div>
                            </div>
                            <div class="img_right_container">
                                <div class="img_containter_top">
                                    <div class="img_default_containter">
                                        <img src="../../public/iris.png">
                                    </div>
                                    <div class="rectangle_default_container">
                                        <img src="../../public/Rectangle_one.png">
                                    </div>
                                </div>
                                <div class="img_container_bottom">
                                    <div>
                                        <div class="img_default_containter">
                                            <img src="../../public/chain.png">
                                        </div>
                                        <div class="rectangle_default_container">
                                            <img src="../../public/Rectangle_two.png">
                                        </div>
                                    </div>
                                    <div>
                                        <div class="img_default_containter">
                                            <img src="../../public/cosmos.png">
                                        </div>
                                        <div class="rectangle_default_container">
                                            <img src="../../public/Rectangle_three.png">
                                        </div>
                                    </div>
                                    <div>
                                        <div class="img_default_containter">
                                            <img src="../../public/Rectangle-five.png">
                                        </div>
                                        <div class="rectangle_default_container">
                                            <img src="../../public/Rectangle_four.png">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="#/0/3" class="what">

                        <div class="collaboration_wrap">
                            <h2>{{collaboration_title}}</h2>
                            <div class="line"></div>

                            <div class="collaboration_two_col">
                                <article class="core">
                                    <h4>{{collaboration_core.title}}</h4>
                                    <comp-collaboration-item :info="collaboration_core"></comp-collaboration-item>
                                </article>

                                <article class="strategy">
                                    <h4>{{collaboration_strategy.title}}</h4>
                                    <comp-collaboration-item :info="collaboration_strategy"></comp-collaboration-item>
                                </article>
                            </div>

                            <div class="collaboration_one_col">
                                <article class="investment">
                                    <h4>{{collaboration_investment.title}}</h4>
                                    <comp-collaboration-item :info="collaboration_investment"></comp-collaboration-item>
                                </article>
                            </div>

                            <div class="collaboration_one_col">
                                <article class="investment">
                                    <h4>{{collaboration_counsel.title}}</h4>
                                    <comp-collaboration-item :info="collaboration_counsel"></comp-collaboration-item>
                                </article>
                            </div>


                        </div>



                    </div>

                    <div id="#/0/2" class="what">
                        <div class="network-container">
                            <div class="what_txt">
                                <div class="what_txt_title" style="font-size: 30px;">
                                    {{$store.state.messages.network.title}}
                                    <div class="line" style="margin-top: 10px"></div>
                                </div>
                                <div class="what_txt_list_two">
                                    {{$store.state.messages.network.txt[0]}}
                                </div>
                                <div class="what_txt_list_center">
                                    {{$store.state.messages.network.txt[1]}}
                                </div>
                                <div class="what_txt_list_four">
                                    {{$store.state.messages.network.txt[2]}}
                                </div>
                                <!--<a href="#/0/3" style="margin-top: 45px;display: inline-block">-->
                                <!--<div class="collaboration_btn">-->
                                <!--<span>-->
                                <!--{{$store.state.messages.collaboration.btnTxt}}-->
                                <!--</span>-->
                                <!--</div>-->
                                <!--</a>-->
                            </div>
                            <div style="margin-left: 80px; margin-top: 50px;">
                                <img :src="UrlSrc+$store.state.messages.network.src"/>
                            </div>
                        </div>

                    </div>

                    <div id="#/0/4" class="what">
                        <div class="collaboration">
                            {{$store.state.messages.roadmap.title}}
                            <div class="line"></div>
                        </div>

                        <div style="position: relative;margin-top: 250px">
                            <img src="../../public/wave.png"/>
                            <div class="roadmap_warp" style="top: 45px; margin-left: 160px;" @mouseover="textShow(0)"
                                 @mouseout="textHide(0)">
                                <div class="roadmap_list_gif">
                                    <div class="div1">
                                        <img src="../../public/Ellipse.png">
                                    </div>
                                </div>
                                <transition name="animation">
                                    <div class="roadmap_text animation" v-show="list[0].is">
                                        {{$store.state.messages.roadmap.list[0].txt}}
                                    </div>
                                </transition>

                                <div class="top-line" v-show="list[0].is"></div>

                                <div class="roadmap-text">
                                    <p>PANGU</p>
                                    <p>JAN 2018-JUL 2018</p>
                                </div>
                            </div>

                            <div class="roadmap_warp" style="top: -10px;margin-left: 402px; margin-top: -72px;"
                                 @mouseover="textShow(1)" @mouseout="textHide(1)">
                                <div class="roadmap-text" style="padding-bottom: 14px">
                                    <p>NUWA</p>
                                    <p>AUG 2018-NOV 2018</p>
                                </div>
                                <div class="roadmap_list_gif">
                                    <div class="div1">
                                        <img src="../../public/Ellipse.png">
                                    </div>
                                    <div class="img imgdiv" v-show="!list[1].is"></div>
                                </div>
                                <transition name="animation">
                                    <div class="roadmap_text" v-show="list[1].is" style="top:190px; width: 290px">
                                        {{$store.state.messages.roadmap.list[1].txt}}
                                    </div>
                                </transition>
                                <div class="bottom-line" v-show="list[1].is"></div>
                            </div>

                            <div class="roadmap_warp" style="top: 45px; margin-left: 650px; "
                                 @mouseover="textShow(2)" @mouseout="textHide(2)">
                                <div class="roadmap_list_gif">
                                    <div class="div1">
                                        <img src="../../public/Ellipse.png">
                                    </div>
                                    <div class="img imgdiv" v-show="!list[2].is"></div>
                                </div>
                                <transition name="animation">
                                    <div class="roadmap_text" v-show="list[2].is">
                                        {{$store.state.messages.roadmap.list[2].txt}}
                                    </div>
                                </transition>
                                <div class="top-line" v-show="list[2].is"></div>
                                <div class="roadmap-text">
                                    <p>KUAFU</p>
                                    <p>DEC 2018-MAY 2018</p>
                                </div>
                            </div>

                            <div class="roadmap_warp" style="top: -10px;margin-left: 906px; margin-top: -72px;"
                                 @mouseover="textShow(3)" @mouseout="textHide(3)">
                                <div class="roadmap-text" style="padding-bottom: 14px">
                                    <p>HOUYI</p>
                                    <p>NEYOND JUN 2019</p>
                                </div>
                                <div class="roadmap_list_gif">
                                    <div class="div1">
                                        <img src="../../public/Ellipse.png">
                                    </div>
                                    <div class="img imgdiv" v-show="!list[3].is"></div>
                                </div>
                                <transition name="animation">
                                    <div class="roadmap_text" v-show="list[3].is"
                                         style="top: 210px;left: -40px; width: 290px">
                                        {{$store.state.messages.roadmap.list[3].txt}}
                                    </div>
                                </transition>
                                <div class="bottom-line" v-show="list[3].is"></div>
                            </div>
                        </div>
                    </div>

                    <div id="#/0/5" class="what">
                        <div class="contact">
                            <div class="contact_title">
                                {{$store.state.messages.contact.title}}
                                <div class="line"></div>
                            </div>
                            <div class="contact_warp">
                                <a :href="item.href" target="_blank" @click="blank(item.txt)"
                                   v-for="item in $store.state.messages.contact.img">
                                    <div class="contact_list">
                                        <img class="src" :src="UrlSrc+item.src"/>
                                        <img class="src_selected" :src="UrlSrc+item.src_selected"/>
                                        <div>{{item.txt}} {{item.is}}</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wechat" v-show="wechatIs" @click="wechatIs=false">
                <div class="wechat_warp">
                    <div class="cancel">
                        <img src="../assets/cancel.png"/>
                    </div>
                    <img src="../assets/wechat.png" class="wechat_img"/>
                    <div class="wechat_title">
                        {{$store.state.messages.qr.title}}
                    </div>
                    <div class="wechat_txt">
                        {{$store.state.messages.qr.txt}}
                    </div>
                </div>
            </div>
        </div>
        <foot></foot>
    </div>
</template>

<script type="text/ecmascript-6">
    import $ from 'jquery'
    import foot from './foot'
    import {mapState} from 'vuex'
    import CompCollaborationItem from '@/components/modules/collaborationItem.vue'
    let Reveal
    if (process.env.VUE_ENV === 'client') {
        Reveal = require('reveal.js')
    }
    export default {
        name: 'index',
        components: {foot,CompCollaborationItem},
        data() {
            return {
                list: [
                    {is: false},
                    {is: false},
                    {is: false},
                    {is: false},
                ],
                comm: 'community.png',
                down: 'arrow.png',
                wechatIs: false
            }
        },
        computed: {
            ...mapState({
                collaboration_title: state=>state.messages.collaboration.title,
                collaboration_core: state=>state.messages.collaboration.core,
                collaboration_strategy: state=>state.messages.collaboration.strategy,
                collaboration_investment: state=>state.messages.collaboration.investment,
                collaboration_counsel: state=>state.messages.collaboration.counsel,
            })
        },
        methods: {
            roll() {
                if (document.getElementById(this.$route.hash)) {
                    //window.scrollTo(0, document.getElementById(this.$route.hash).offsetTop-80)
                    this.scroll(document.getElementById(this.$route.hash).offsetTop + 100)
                    console.log(document.getElementById(this.$route.hash).offsetTop, 999999999);
                }
            },
            scroll(top) {
                $('body,html').animate({
                            scrollTop: top
                        }, 500
                );
            },
            downShow() {
                this.down = '../public/down.png';
            },
            downHide() {
                this.down = '../public/arrow.png';
            },
            commShow() {
                this.comm = '../public/community.png';
            },
            commHide() {
                this.comm = '../public/community_selected.png';
            },
            textShow(index) {
                this.list[index].is = true;
            },
            textHide(index) {
                this.list.forEach((v) => {
                    v.is = false;
                })
                this.list[index].is = true;
            },
            blank(item){
                if (item == 'Wechat') {
                    this.wechatIs = true;
                }
            },
            getPath(){
                return this.$route.hash.split("/")[2] || 0
            },
            showIndex(index){
                let model = [];
                this.$store.state.messages.head.txt.forEach((v) => {
                    v.is = false;
                    model.push(v);
                });
                model[index].is = true;
                history.pushState({}, '', model[index].href);
                this.$store.state.messages.head.txt = model;
            }
        },
        created(){
            // this.$store.commit('changeItemIs',this.getPath())
        },
        mounted: function () {
            this.$store.commit('changeItemIs', this.getPath())
            this.list.forEach((v) => {
                v.is = false;
            })
            this.list[0].is = true;
            // this.$store.commit('changeItemIs',this.$route.fullPath)
            if (process.env.VUE_ENV === 'client') {
                Reveal.initialize({
                    progress: false,
                    mouseWheel: true,
                    controls: false
                });
                // let _this = this;
                this.list[0].is = true;
                // Reveal.addEventListener('slidechanged', function (event) {
                //     let index = event.indexv;
                //     let model = [];
                //     _this.$store.state.messages.head.txt.forEach((v) => {
                //         v.is = false;
                //         model.push(v);
                //     });
                //     //去掉白皮书数组长度发生改变，跳转出现问题故注释掉。
                //     // if(index>=2){
                //     //     index++;
                //     // }
                //     model[index].is = true;
                //     history.pushState({}, '', model[index].href);
                //     _this.$store.state.messages.head.txt = model;
                // });
            }
            this.roll();
            this.is = true;
        },
        watch: {
            '$route': 'roll'
        },
    }
</script>

<style scoped lang='less'>
    @import "../assets/style/index.less";
</style>