<template>
    <div>
        <div id="index" class="index" style="background: #0b0b18">
            <!--头部-->
            <div class="head" style="position: fixed;background: #0b0b18" >
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
                        <router-link  v-for="(item,index) in $store.state.messages.head.txt" class="item"
                           :class="{'item_selected':item.is}" :to="item.href" :key="index" @click.native="showIndex(index)">
                            {{item.txt}}
                            <div></div>
                        </router-link>
                    </div>

                </div>
            </div>
            <!--内容区-->
            <div class="container-center">
                <div id="#" class="what" >
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
                                    <span class="home_what_txt">What is IRISnet</span>
                                </div>
                            </a>
                        </div>
                        <div class="home-container" >
                            <div class="layer_img">
                                <img src="../../public/layer1.png">
                            </div>
                            <div class="irispattern_img">
                                <img src="../../public/irisnetpattern.png" alt="">
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
                            <a href="https://github.com/irisnet/irisnet/blob/master/WHITEPAPER.md" target="_blank">
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

                <div id="#/0/2" class="what">
                    <div class="network-container">
                        <div class="what_txt" >
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
                            <img :src="UrlSrc+$store.state.messages.network.src" />
                        </div>
                    </div>

                </div>

                <div id="#/0/3" class="what">
                    <div class="collaboration">
                        {{$store.state.messages.collaboration.title}}
                        <div class="line"></div>
                    </div>
                    <div class="collaboration_title_txt">
                        <p>
                            {{$store.state.messages.collaboration.txt[0]}}
                        </p>
                        <p>
                            {{$store.state.messages.collaboration.txt[1]}}
                        </p>
                    </div>
                    <div class="collaboration_warp">
                        <a class="collaboration_list" style="margin-left: 40px; margin-right: 10px;"
                           :href="$store.state.messages.collaboration.list[0].href" target="_blank">
                        <div class="collaboration_list_item">
                            <div class="collaboration_img_container">
                                <img :src="UrlSrc+$store.state.messages.collaboration.list[0].img"/>
                            </div>
                            <div>
                                <div class="collaboration_title">
                                    {{$store.state.messages.collaboration.list[0].title}}
                                    <div class="collaboration_title_line"></div>
                                    <div class="collaboration_text">
                                        {{$store.state.messages.collaboration.list[0].text}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div style="margin-left: 240px;">
                        <a class="collaboration_list"
                           style="margin-left: 60px "
                           v-for="(item,$index) in $store.state.messages.collaboration.list"
                           v-if="$index!==0" :href="item.href" :target="item.text ? '_blank ': '' ">
                            <div class="collaboration_list_item">
                                <div class="collaboration_img_container">
                                    <img :src="UrlSrc+$store.state.messages.collaboration.list[$index].img"/>
                                </div>
                                <div>
                                    <div :class="item.text ? 'collaboration_title ' : 'collaboration_title_none' ">
                                        {{$store.state.messages.collaboration.list[$index].title}}
                                        <div v-if="item.text" class="collaboration_title_line"></div>
                                        <div class="collaboration_text">
                                            {{$store.state.messages.collaboration.list[$index].text}}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                </div>

                <div id="#/0/4" class="what">
                    <div class="collaboration">
                        {{$store.state.messages.roadmap.title}}
                        <div class="line"></div>
                    </div>

                    <div style="position: relative;margin-top: 250px">
                            <img src="../../public/wave.png" />
                        <div class="roadmap_warp" style="top: 45px; margin-left: 160px;" @mouseover="textShow(0)"
                         @mouseout="textHide(0)">
                        <div class="roadmap_list_gif">
                            <div class="div1">
                                <img  src="../../public/Ellipse.png">
                            </div>
                        </div>
                        <transition name="animation">
                            <div class="roadmap_text animation" v-show="list[0].is" >
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
                                <img  src="../../public/Ellipse.png">
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
                                <img  src="../../public/Ellipse.png">
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
                                <img  src="../../public/Ellipse.png">
                            </div>
                            <div class="img imgdiv" v-show="!list[3].is"></div>
                        </div>
                        <transition name="animation">
                            <div class="roadmap_text" v-show="list[3].is" style="top: 210px;left: -40px; width: 290px">
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
                                    <img  class="src" :src="UrlSrc+item.src"/>
                                    <img class="src_selected"  :src="UrlSrc+item.src_selected" />
                                    <div>{{item.txt}} {{item.is}}</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="wechat" v-show="wechatIs" @click="wechatIs=false">
                <div class="wechat_warp">
                    <div class="cancel" >
                        <img src="../assets/cancel.png"  />
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

<script>
    import $ from 'jquery'
    import foot from './foot'
    let Reveal
    if (process.env.VUE_ENV === 'client') {
        Reveal = require('reveal.js')
    }
    export default {
        name: 'index',
        components:{foot},
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
                wechatIs:false
            }
        },
        methods: {
            roll() {
                if (document.getElementById(this.$route.hash)) {
                    //window.scrollTo(0, document.getElementById(this.$route.hash).offsetTop-80)
                    this.scroll(document.getElementById(this.$route.hash).offsetTop + 100)
                    console.log(document.getElementById(this.$route.hash).offsetTop,999999999);
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
                if(item=='Wechat'){
                    this.wechatIs=true;
                }
            },
            getPath(){
                return this.$route.hash.split("/")[2]||0
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
            this.$store.commit('changeItemIs',this.getPath())
            this.list.forEach((v) => {
                v.is = false;
            })
            this.list[0].is = true;
            // this.$store.commit('changeItemIs',this.$route.fullPath)
            if (process.env.VUE_ENV === 'client') {
                Reveal.initialize({
                    progress: false,
                    mouseWheel: true,
                    controls:false
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


    .index {

        flex: 1;
        height: 100vh;
        position: relative;
        background: #0b0b18;
        .wechat{
            position: relative;position: fixed;height: 100%;width: 100%;top: 0;background-color:rgba(0,0,0,0.6);z-index: 12;
            .wechat_warp{
                position: relative;position: absolute;color:#5c5c7c;text-align: center;height: 368px;width: 368px;background: #141426;border-radius: 8px;top: 50%;left: 50%;margin-top: -184px;margin-left: -184px;
                .cancel{
                    width: 10px;height: 10px;border-radius: 50%;background: #ed3d3d;position: absolute;margin-top: 14px;right: 14px;cursor: pointer;
                    img{
                        margin-top: 2px; margin-left: 2px; float: left;display: none;
                    }
                    &:hover{
                        img{
                            display: block;
                        }
                    }
                }
                .wechat_img{
                    margin-top: 50px;margin-bottom: 30px;    width: 180px;
                }
                .wechat_title{
                    font-size: 24px;
                }
                .wechat_txt{
                    font-size: 18px;margin-top: 14px;
                }
            }
        }
        .head {
            position: absolute;
            top: 0;
            z-index: 10;
            width: 100%;
            height: 70px;
            .comm {
                float: right;
                position: relative;
                margin-left: 20px;
                .div_h {
                    height: 10px;
                    width: 1px;
                    background: #4b4d6c;
                    position: absolute;
                    top: 30px;
                    left: -20px;
                }
                img {
                    padding-top: 2px;
                    float: left;
                    margin-right: 6px;
                }
                a {
                    margin-right: 20px;
                }
            }
            img {
                padding-top: 18px
            }
            .item_en {
                float: right;
                position: relative;
                &:hover {
                    .item_cn {
                        display: block;
                    }
                }
                img {
                    padding-top: 6px;
                    float: left;
                    margin-right: 8px;
                }
                .item_cn {
                    display: none;
                    font-size: 12px;
                    border-radius: 4px;
                    line-height: 20px;
                    text-align: center;
                    position: absolute;
                    cursor: pointer;
                    height: 20px;
                    width: 68px;
                    top: 54px;
                    left: 20px;
                    color: #4b4e6d;
                    background: #141426;
                    &:hover {
                        color: #fff;
                    }
                }
            }
            .item {
                float: left;
                margin: 20px 20px;
                color: #4b4d6c;
                padding-top: 8px;
                cursor: pointer;
                position: relative;
                font-size: 14px;
                overflow: hidden;
                div {
                    width: 24px;
                    height: 2px;
                    background: #fff;
                    margin-top: 20px;
                    display: none;
                    margin-left: 2px;
                }
                &:hover {
                    color: #724be3;
                    div {
                        display: block;
                        animation: nav-line 0.2s ;
                    }
                }
            }
            .item_selected {
                color: #724be3;
                div {
                    background: #FFF;
                    display: block;
                }

            }
            .item:last-child {
                margin-right: 40px;
            }
        }
        .home {
            color: #fff;
            position: relative;
            .home_warp {
                overflow: hidden;
                .home_txt {
                    margin-top: 40px;
                    font-size: 52px;
                    width: 672px;
                    font-weight: bold;
                    text-align: left;
                    animation: txtanim 1s linear;
                }
                .home_txt1 {
                    margin-top: 40px;
                    color: #fff;
                    font-size: 22px;
                    width: 640px;
                    line-height: 44px;
                    text-align: left;
                    animation: txtanim 1s linear;
                }
                .home_txt2 {
                    margin-top: 22px;
                    color: #fff;
                    font-size: 18px;
                    text-align: left;
                }
                .home_img {
                    float: left;
                    width: 64px;
                    position: relative;
                    height: 80px;
                    margin-top: 68px;
                    img {
                        cursor: pointer;
                        display: block;
                    }
                    .home_img_txt {
                        position: absolute;
                        top: 10px;
                        left: -12px;
                        background: #000;
                        float: left;
                        font-size: 12px;
                        padding: 6px 0px;
                        border-radius: 4px;
                        position: relative;
                        width: 60px;
                        text-align: center;
                        div {
                            top: -46px;
                            left: 40%;
                            position: absolute;
                            width: 0;
                            height: 0;
                            border-width: 0 6px 6px;
                            border-style: solid;
                            border-color: transparent transparent #000;
                            margin: 40px auto;
                        }
                    }
                }
            }
            .home_btn {
                height: 70px;
                width: 300px;
                display: block;
                margin: auto;
                margin-top: 120px;
                color: #000;
            }
        }
        .what {
            background: #0b0b18;
            height: 600px;
            padding-top: 200px;
            .what_img {
                /*float: left;*/
                /*line-height: 583px;*/
                /*margin-left: 80px;*/
                position: relative;
                .what_img_txt {
                    position: absolute;
                    top: 290px;
                    left: 120px;
                    text-align: left;
                    width: 240px;
                    font-size: 12px;
                    line-height: 22px;
                    color: #bfbfbf;
                }
            }

            .what_txt {
                /*margin-top: 114px;*/
                color: #fff;
                width: 548px;
                text-align: left;
                font-size: 18px;
                div {
                    line-height: 26px;
                }
                div:first-child {
                    margin-top: 0;
                    font-size: 30px;
                    font-weight: bold;
                    margin-bottom: 50px;
                }
            }
        }
        .what_btn {
            margin-top: 4vh;
            cursor: pointer;
        }
        .collaboration {
            font-size: 30px;
            font-weight: bold;
            color: #fff;
            text-align: left;
            animation: txtanim 1s linear;
        }
        .collaboration_warp {
            margin-top: 5vh;
            opacity: 0;
            animation: opacityShow 0.5s 1.1s;
            animation-fill-mode: forwards;
            .collaboration_list {
                float: left;
                display: flex;
                width: 180px;
                height: 90px;
                border-radius: 8px;
                background: #141430;
                position: relative;
                cursor: pointer;
                margin-bottom: 20px;
                .collaboration_top {
                    position: relative;
                    position: absolute;
                    top: -116px;
                    color: #fff;
                    font-size: 15px;
                    div:nth-child(1) {
                        position: absolute;
                        height: 1px;
                        background: #fff;
                        width: 136px;
                        top: 24px;
                    }
                    div:nth-child(2) {
                        position: absolute;
                        height: 3px;
                        background: #fff;
                        width: 36px;
                        top: 24px;
                    }
                }
                .collaboration_list_item{
                    display: flex;
                    width: 180px;
                }
                .collaboration_img_container{
                    width: 90px;
                    height: 90px;
                    margin-left: -45px;
                    img{
                        /*width: 90px !important;*/
                        width: 100%;
                    }
                }
                .collaboration_img {
                    position: absolute;
                    top: -64px;
                    left: 24px;
                }
                .collaboration_title {
                    padding-top: 20px;
                    font-weight: bold;
                    color: #6678e8;
                    font-size: 16px;
                    margin-left: 14px;
                    padding-bottom: 14px;
                    text-align: left;
                }
                .collaboration_title_line{
                    width: 90px;
                    height: 1px;
                    background: #282856;
                    margin-top: 10px;
                }
                .collaboration_h1 {
                    height: 1px;
                    background: #b6b6b6;
                    width: 104px;
                    margin: 18px auto
                }
                .collaboration_text {
                    color: #0a7dbe;
                    font-size: 12px;
                    padding-top: 10px;
                    text-align: left;
                }
            }
        }
        .collaboration_title_txt{
            font-size: 18px;
            color: #cbc8d4;
            text-align: left;
            margin-top: 26px;
            animation: txtanim 1s linear;
            p:nth-child(2){
                padding-left: 270px;
                margin-top: -18px;
            }
        }
        .roadmap {
            font-size: 16px;
            color: #fff;
            margin-top: 30px
        }
        .roadmap_warp {
            float: left;
            cursor: pointer;
            margin-left: 100px;
            position: relative;
            position: absolute;
            transition: height 0.4s;
                &:hover{
                    .top-line{
                        /*display: block;*/
                        /*height: 90px;*/
                        animation: top-line 0.4s linear ;
                    }
                    .bottom-line{
                        animation: top-line 0.4s linear ;
                    }
                }
            .roadmap_list {
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background: #00aeef;
                border: 2px solid #fff;
                margin: 0 auto;
                position: relative;
            }
            .roadmap_list_gif {
                width: 16px;
                height: 16px;
                position: relative;
                .div1 {
                    position: absolute;
                    top: 0;
                    left: 62px;
                    width: 22px;
                    height: 22px;
                    background: #fff;
                    border-radius: 50%;
                    img{
                        margin-top: -2px;
                        margin-right: 10px;

                    }
                }
                .img {
                    position: absolute;
                    top: -19px;
                    left: 63px;
                    width: 20px;
                }
                .imgdiv {
                    /*background: #00aeef;*/
                    height: 18px;
                    width: 18px;
                    border-radius: 50%;
                    top: 2px;
                    left: 64px;
                }
            }
            .roadmap_text {
                border-radius: 16px;
                position: absolute;
                left: -50px;
                bottom: 180px;
                color: #fff;
                width: 290px;
                text-align: left;
                font-size: 12px;
                line-height: 18px;
            }
            img {
                margin-top: 20px;
            }
        }
        .top-line{
            height: 70px;
            width: 2px;
            background: #eeeeee;
            position: absolute;
            left: 73px;
            bottom: 95px;
            margin-top: 10px;
            animation: top-line 0.4s;
            /*display: none;*/
            /*transition: opacity 0.4s;*/
        }
        .bottom-line{
            height: 70px;
            width: 2px;
            background: #eeeeee;
            position: absolute;
            left: 73px;
            top: 112px;
        }
        .contact {
            box-shadow: 0 0 20px #080B0F;
            height: 540px;
            margin: 0 auto;
            overflow: hidden;
            .contact_title {
                font-size: 30px;
                color: #fff;
                text-align: left;
                margin-bottom: 30px;
                position: relative;
                font-weight: bold;
                animation: txtanim 1s linear;
            }
            .contact_warp {
                margin-left: 210px;
                opacity: 0;
                animation: opacityShow 0.5s 1.1s;
                animation-fill-mode: forwards;
                .contact_list {
                    float: left;
                    height: 100px;
                    background: #1d1f37;
                    width: 180px;
                    margin: 0 30px 30px 0;
                    border-radius: 6px;
                    text-align: left;
                    cursor: pointer;
                    .src_selected{
                        display: none;
                    }
                    &:hover {
                        background: #2b2e4e;
                        div {
                            color: #fff;
                        }
                        .src{
                            display: none;
                        }
                        .src_selected{
                            display: block;
                        }
                    }
                    img {
                        margin-top: 30px;
                        margin-left: 30px;
                        float: left;
                    }
                    div {
                        color: #c5c5c5;
                        float: left;
                        margin-top: 38px;
                        margin-left: 26px;
                    }
                }
            }
        }
    }

    @media (max-height: 800px) {

    }

    .slides {
        zoom: normal !important;
        height: 100% !important;
        min-height: 100% !important;
        transform: translate(-50%, -50%) scale(1.0) !important;
        left: 50% !important;
        top: 50% !important;
        margin-top: 0% !important;;
    }

    .controls {
        display: none !important;
    }

    .reveal {
        min-height: 100% !important;
    }

    .section {
        margin-top: 138px !important;
        top: 0 !important;
    }
    .home_what{
        width: 200px;
        height: 48px;
        background: #724be3;
        border-radius: 24px;
        margin-top: 40px;
        opacity: 0;
        text-align: center;
        animation: opacityShow 0.5s  1.1s;
        animation-fill-mode: forwards;

    }
    .home_what_txt{
        font-size: 16px;
        color: #ffffff;
        line-height: 48px;
    }
    .layer_img{
        width: 464px;
        height: 464px;
        position: absolute;
        right: 5%;
        top: 180px;
        img{
            width: 100%;
            height:100%;
            animation: imgRotate 40s  infinite  linear  ;
        }
    }
    .irispattern_img{
        width: 180px;
        height: 180px;
        position: relative;
        right: 83%;
        top: 330px;
        img{
            width: 100%;
        }
    }
    #newindex_home_btn{
        margin-top: 220px;
    }
    .about_tab{
        display: flex;
        margin-top: 70px;
    }
    .about_what{
        width: 180px;
        height: 48px;
        border-radius: 24px;
        background: #724be3;
        text-align: center;
        opacity: 0;
        animation: opacityShow 0.5s  1.1s;
        animation-fill-mode: forwards;
    }
    .about_what_txt{
        font-size: 16px;
        color: #FFF;
        line-height: 48px;
    }
    .guide_right{
        display: inline-block;
        padding-left: 18px;
        padding-top: 5px;
    }
    .about_what_check{
        margin-left: 30px;
        border: 2px solid #fff;
        border-radius: 48px;
        height: 48px;
        width: 180px;
        text-align: center;
        margin-top: 0;
        opacity: 0;
        animation: opacityShow 0.5s  1.1s;
        animation-fill-mode: forwards;
        .about_what_check_txt{
            font-size: 16px;
            color: #724be3;
            padding: 18px 0;
            line-height: 48px;
        }
    }
    .what_txt_title{
        animation: txtanim 1s linear;
    }
    .what_txt_list_two{
        margin-bottom: 26px;
        animation: txtanim 1s linear;
    }
    .what_txt_list_center{
        animation: txtanim 1s linear;
    }
    .what_txt_list_four{
        margin-top: 26px;
        animation: txtanim 1s linear;
    }
    .img_right_container{
        margin-top: 5%;
    }
    .img_default_containter{
        animation: imgTranslate 2s infinite linear alternate;
        img{
           position: relative;
            z-index: 2;
       }
    }
    .rectangle_default_container{
        margin-top: -10px;
        img{
            position: relative;
            z-index: 1;
        }
    }
    .img_container_bottom{
        display: flex;
        margin-top: 30px;
        text-align: center;
        div{
            padding: 0 10px;
        }
    }
    .collaboration_btn{
        width: 200px;
        height: 48px;
        background: #774be3;
        border-radius: 24px;
        text-align: center;
        margin-top: 45px;
        opacity: 0;
        animation: opacityShow 0.5s  1.1s;
        animation-fill-mode: forwards;
        span{
            font-size: 16px;
            color: #fff;
            line-height: 48px;
        }
    }
    .line{
        width: 60px;
        height: 2px;
        margin-top: 10px;
        background: #774be3;
        animation: line 1s;
    }
    .collaboration_title_none{
        line-height: 90px;
        margin-left: 14px;
    }
    .roadmap-text{
        p:nth-child(1){
            margin-top: 14px;
            font-size: 18px;
            color: #61cbff;
            text-align: center;
        }
        p:nth-child(2){
            margin-top: 10px;
            font-size: 16px;
            color: #61cbff;
        }

    }

    @keyframes line{
        from{
            width: 0;
        }
        to{
            width: 60px;
        }
    }
    @keyframes top-line {
        from{
            height: 0;
        }
        to{
            height: 70px;
        }
    }
    @keyframes nav-line{
        from{
            width: 0;
        }
        to{
            width: 24px;
        }
    }
    @keyframes imgRotate {
       0%{
            transform: rotate(0deg);
           -webkit-transform:rotate(0deg);  /*兼容-webkit-引擎浏览器*/
           -moz-transform:rotate(0deg);
       }
        50%{
            transform:rotate(180deg);
            -webkit-transform:rotate(180deg);  /*兼容-webkit-引擎浏览器*/
            -moz-transform:rotate(180deg);
        }
        100%{
            transform:rotate(360deg);
            -webkit-transform:rotate(360deg);  /*兼容-webkit-引擎浏览器*/
            -moz-transform:rotate(360deg);
        }
    }
    @keyframes imgTranslate {
        from{
            transform: translateY(0px);
        }
        to{
            transform: translateY(-30px);
        }
    }
    .animation-enter-active, .animation-leave-active {
        transition: opacity 0.5s;
        transition-delay: 0.4s;
    }
    .animation-enter, .animation-leave-active {
        opacity: 0;
        transition-delay: 0s;
    }
    @keyframes txtanim {
        from{
            transform: translateY(30px);
            opacity: 0;
        }
        to{
            transform: translateY(0);
            opacity: 1;
        }
    }
    @keyframes opacityShow {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    .innovation-container{
        display: flex;
    }
    .container-center{
        padding: 0 5%;
        background: #0b0b18;
        overflow: hidden !important;
    }
    .network-container{
        display: flex;
    }
    .img_containter_top{
        text-align: center;
    }
    .home-container{
        position: absolute;
        top: -60%;
        right: 0
    }
</style>