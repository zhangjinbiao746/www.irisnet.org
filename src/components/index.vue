<template>
    <div>
        <div id="index" class="index">
            <div class="head">
                <div class="center">
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
                        <a class="item" style="    margin-right: 10px;" @mouseenter="commHide" @mouseleave="commShow">
                            <img :src="UrlSrc+comm">
                            Community
                            <div></div>
                        </a>
                    </div>
                    <div style="float: right">
                        <a :href="item.href" v-for="item in $store.state.messages.head.txt" class="item"
                           :class="{'item_selected':item.is}">
                            {{item.txt}}
                            <div></div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="reveal center">
                <div class="slides center">
                    <section>
                        <section data-transition="slide">
                            <div class="center home">
                                <div class="home_warp">
                                    <div class="home_txt">
                                        {{$store.state.messages.home.title}}
                                    </div>
                                    <div class="home_txt1" v-html="$store.state.messages.home.txt">

                                    </div>
                                </div>
                                <a href="#/0/1" class="home_btn">
                                    <img :src="UrlSrc+$store.state.messages.home.src"/>
                                </a>
                            </div>
                        </section>
                        <section data-transition="slide">
                            <div class="what">
                                <div class="what_img" style="position: relative">
                                    <img :src="UrlSrc+$store.state.messages.logo"/>
                                    <div class="what_img_txt"  v-html="$store.state.messages.about.imgtxt"></div>
                                </div>
                                <div class="what_txt">
                                    <div>
                                        {{$store.state.messages.about.title}}
                                    </div>
                                    <div>
                                        {{$store.state.messages.about.txt[0]}}
                                    </div>
                                    <div>
                                        {{$store.state.messages.about.txt[1]}}
                                    </div>
                                    <div>
                                        {{$store.state.messages.about.txt[2]}}
                                    </div>
                                </div>
                            </div>
                            <a href="#/0/2">
                                <img :src="UrlSrc+$store.state.messages.next" class="what_btn"/>
                            </a>
                        </section>
                        <section data-transition="slide">
                            <div class="what">
                                <div class="what_img">
                                    <img :src="UrlSrc+$store.state.messages.network.src" style="margin-top: 80px;"/>
                                </div>
                                <div class="what_txt" style="width: 432px;margin-top: 90px">
                                    <div style="font-size: 24px;">
                                        {{$store.state.messages.network.title}}
                                    </div>
                                    <div>
                                        {{$store.state.messages.network.txt[0]}}
                                    </div>
                                    <div>
                                        {{$store.state.messages.network.txt[1]}}
                                    </div>
                                    <div>
                                        {{$store.state.messages.network.txt[2]}}
                                    </div>
                                    <!--<div>-->
                                    <!--<img src="../assets/whiteDw.png" style="cursor: pointer"/>-->
                                    <!--</div>-->
                                </div>
                            </div>
                            <a href="#/0/3">
                                <img :src="UrlSrc+$store.state.messages.next" class="what_btn"/>
                            </a>
                        </section>
                        <section data-transition="slide">
                            <div class="collaboration">
                                {{$store.state.messages.collaboration.title}}
                            </div>
                            <div class="collaboration_warp">
                                <a class="collaboration_list" style="margin-right: 80px;    margin-left: 60px;"
                                   :href="$store.state.messages.collaboration.list[0].href" target="_blank">
                                    <div class="collaboration_top">
                                        {{$store.state.messages.collaboration.txt[0]}}
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <img :src="UrlSrc+$store.state.messages.collaboration.list[0].img"
                                         class="collaboration_img"/>
                                    <div class="collaboration_title">
                                        {{$store.state.messages.collaboration.list[0].title}}
                                    </div>
                                    <div class="collaboration_h1"></div>
                                    <div class="collaboration_text">
                                        {{$store.state.messages.collaboration.list[0].text}}
                                    </div>
                                </a>

                                <a class="collaboration_list"
                                   style="margin-left:24px "
                                   v-for="(item,$index) in $store.state.messages.collaboration.list"
                                   v-if="$index!==0" :href="item.href" target="_blank">
                                    <div class="collaboration_top" v-if="$index===1">
                                        {{$store.state.messages.collaboration.txt[1]}}
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <img :src="UrlSrc+$store.state.messages.collaboration.list[$index].img"
                                         class="collaboration_img"/>
                                    <div class="collaboration_title">
                                        {{$store.state.messages.collaboration.list[$index].title}}
                                    </div>
                                    <div class="collaboration_h1"></div>
                                    <div class="collaboration_text">
                                        {{$store.state.messages.collaboration.list[$index].text}}
                                    </div>
                                </a>
                            </div>
                            <a href="#/0/4" style="display: block;clear: both;">
                                <img :src="UrlSrc+$store.state.messages.next" class="what_btn" style="    margin-top: 17vh;"/>
                            </a>
                        </section>
                        <section data-transition="slide">
                            <div class="collaboration" style="padding-bottom: 28vh">
                                {{$store.state.messages.roadmap.title}}
                            </div>
                            <div style="position: relative;">
                                <img src="../assets/roadmapList.gif" style="width: 860px;margin: 0 auto"/>
                                <div class="roadmap_warp" style="top: 0;" @mouseover="textShow(0)"
                                     @mouseout="textHide(0)">
                                    <div class="roadmap_list_gif">
                                        <div class="div1"></div>
                                        <div class="img imgdiv" v-show="!list[0].is"></div>
                                        <img class="img" v-show="list[0].is" src="../assets/Roadmap.gif"/>
                                    </div>
                                    <div class="roadmap_text" v-show="list[0].is"
                                         style="bottom: 106px;left: -100px;">
                                        {{$store.state.messages.roadmap.list[0].txt}}
                                        <div class="s"></div>
                                    </div>
                                    <img :src="UrlSrc+$store.state.messages.roadmap.list[0].img"/>
                                </div>
                                <div class="roadmap_warp" style="top: 0;margin-left: 382px; margin-top: -92px;"
                                     @mouseover="textShow(1)" @mouseout="textHide(1)">
                                    <img :src="UrlSrc+$store.state.messages.roadmap.list[1].img" style="padding-bottom: 20px"/>
                                    <div class="roadmap_list_gif">
                                        <div class="div1"></div>
                                        <div class="img imgdiv" v-show="!list[1].is"></div>
                                        <img class="img" v-show="list[1].is" src="../assets/Roadmap.gif"/>
                                    </div>
                                    <div class="roadmap_text" v-show="list[1].is"
                                         style="   top:134px;left: -98px;">
                                        {{$store.state.messages.roadmap.list[1].txt}}
                                        <div class="d"></div>
                                    </div>
                                </div>
                                <div class="roadmap_warp" style="top: 0;margin-left: 670px; "
                                     @mouseover="textShow(2)" @mouseout="textHide(2)">
                                    <div class="roadmap_list_gif">
                                        <div class="div1"></div>
                                        <div class="img imgdiv" v-show="!list[2].is"></div>
                                        <img class="img" v-show="list[2].is" src="../assets/Roadmap.gif"/>
                                    </div>
                                    <div class="roadmap_text" v-show="list[2].is"
                                         style="bottom: 106px;left: -100px;">
                                        {{$store.state.messages.roadmap.list[2].txt}}
                                        <div class="s"></div>
                                    </div>
                                    <img :src="UrlSrc+$store.state.messages.roadmap.list[2].img"/>
                                </div>
                                <div class="roadmap_warp" style="top: 0;margin-left: 966px; margin-top: -92px;"
                                     @mouseover="textShow(3)" @mouseout="textHide(3)">
                                    <img :src="UrlSrc+$store.state.messages.roadmap.list[3].img" style="padding-bottom: 20px"/>
                                    <div class="roadmap_list_gif">
                                        <div class="div1"></div>
                                        <div class="img imgdiv" v-show="!list[3].is"></div>
                                        <img class="img" v-show="list[3].is" src="../assets/Roadmap.gif"/>
                                    </div>
                                    <div class="roadmap_text" v-show="list[3].is"
                                         style="    top: 134px;left: -96px; width: 276px;">
                                        {{$store.state.messages.roadmap.list[3].txt}}
                                        <div class="d"></div>
                                    </div>
                                </div>
                            </div>
                            <a href="#/0/5" style="clear: both;display: block">
                                <img :src="UrlSrc+$store.state.messages.next" class="what_btn" style="margin-top: 33vh;"/>
                            </a>
                        </section>
                        <section data-transition="slide">
                            <div class="contact">
                                <div class="contact_title">
                                    {{$store.state.messages.contact.title}}
                                </div>
                                <div class="contact_warp">
                                    <a :href="item.href" target="_blank" @click="blank(item.txt)"
                                       v-for="item in $store.state.messages.contact.img">
                                        <div class="contact_list"
                                             @mouseover="overShow(item)" @mouseout="outHide(item)">
                                            <img :src="UrlSrc+item.src"/>
                                            <div>{{item.txt}}</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
            <div class="wechat" v-show="wechatIs" @click="wechatIs=false">
                <div class="wechat_warp">
                    <div class="cancel" >
                        <img src="../assets/cancel.png"  />
                    </div>
                    <img src="../assets/wechat.png" class="wechat_img"/>
                    <div class="wechat_title">
                        Scan QR code
                    </div>
                    <div class="wechat_txt">
                        to follow our Subscriptions
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
            overShow(item) {
                item.img = item.src;
                item.src = item.src_selected
            },
            outHide(item) {
                item.src = item.img;
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
                if(item=='wechat'){
                    this.wechatIs=true;
                }
            }
        },
        mounted: function () {
            this.list.forEach((v) => {
                v.is = false;
            })
            this.list[0].is = true;
            if (process.env.VUE_ENV === 'client') {
                Reveal.initialize({
                    progress: false,
                    mouseWheel: true,
                    controls:false
                });
                let _this = this;
                Reveal.addEventListener('slidechanged', function (event) {
                    let index = event.indexv;
                    let model = [];
                    _this.$store.state.messages.head.txt.forEach((v) => {
                        v.is = false;
                        model.push(v);
                    })
                    model[index].is = true;
                    history.pushState({}, '', model[index].href);
                    _this.$store.state.messages.head.txt = model;
                });
            }
        }
    }
</script>

<style scoped lang='less'>


    .index {
        flex: 1;
        height: 100vh;
        background: url('../../public/irisnet-background.jpg');
        background-size: cover;
        position: relative;
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
                .item {
                    margin-right: 0;
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
                div {
                    width: 30px;
                    margin: 0 auto;
                    height: 2px;
                    background: #572d79;
                    margin-top: 20px;
                    display: none;
                }
                &:hover {
                    color: #fff;
                    div {
                        display: block;
                    }
                }
            }
            .item_selected {
                color: #fff;
                div {
                    background: #ec008c;
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
                padding-left: 60px;
                overflow: hidden;
                .home_txt {
                    margin-top: 30vh;
                    font-size: 52px;
                    width: 672px;
                    font-weight: bold;
                    text-align: left;
                }
                .home_txt1 {
                    margin-top: 40px;
                    color: #fff;
                    font-size: 22px;
                    width: 640px;
                    line-height: 44px;
                    text-align: left;
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
            overflow: hidden;
            width: 1064px;
            margin: 0 auto;
            height: 540px;
            border-radius: 12px;
            background: #141426;
            margin-top: 20vh;
            background-image: url('../../public/iris_bg.png');
            background-repeat: no-repeat;
            box-shadow: 0 0 20px #080B0F;
            background-position: center top;
            .what_img {
                float: left;
                line-height: 583px;
                margin-left: 80px;
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
                float: left;
                margin-left: 80px;
                margin-top: 134px;
                color: #fff;
                width: 548px;
                text-align: left;
                font-size: 18px;
                div {
                    line-height: 26px;
                    margin-top: 26px
                }
                div:first-child {
                    margin-top: 0;
                    font-size: 24px;
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
            font-size: 20px;
            font-weight: bold;
            margin-top: 14vh;
            color: #fff
        }
        .collaboration_warp {
            margin-top: 28vh;
            .collaboration_list {
                float: left;
                width: 180px;
                height: 170px;
                border-radius: 10px;
                background: #fff;
                position: relative;
                cursor: pointer;
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
                .collaboration_img {
                    position: absolute;
                    top: -64px;
                    left: 24px;
                }
                .collaboration_title {
                    margin-top: 74px;
                    font-weight: bold;
                    color: #000;
                    font-size: 20px;
                }
                .collaboration_h1 {
                    height: 1px;
                    background: #b6b6b6;
                    width: 104px;
                    margin: 18px auto
                }
                .collaboration_text {
                    color: #0a7dbe;
                    font-size: 14px;
                }
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
            .roadmap_list {
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background: #00aeef;
                border: 2px solid #fff;
                margin: 0 auto;
                position: relative;
                &:hover {
                    animation: spin 3s linear infinite;
                }
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
                }
                .img {
                    position: absolute;
                    top: -19px;
                    left: 63px;
                    width: 20px;
                }
                .imgdiv {
                    background: #00aeef;
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
                left: -100px;
                padding: 20px;
                background: #1a254a;
                color: #fff;
                width: 310px;
                text-align: left;
                font-size: 14px;
                line-height: 24px;
                .s {
                    position: relative;
                    position: absolute;
                    left: 162px;
                    bottom: -52px;
                    width: 0;
                    height: 0;
                    border-width: 12px 12px 0;
                    border-style: solid;
                    border-color: #1a254a transparent transparent;
                    margin: 40px auto;
                }
                .d {
                    position: relative;
                    position: absolute;
                    top: -52px;
                    left: 158px;
                    width: 0;
                    height: 0;
                    border-width: 0 12px 12px;
                    border-style: solid;
                    border-color: transparent transparent #1a254a;
                    margin: 40px auto;
                }
            }
            img {
                margin-top: 20px;
            }
        }
        .contact {
            box-shadow: 0 0 20px #080B0F;
            height: 540px;
            width: 650px;
            background: #141426;
            border-radius: 12px;
            margin: 0 auto;
            margin-top: 14vh;
            overflow: hidden;
            .contact_title {
                font-size: 24px;
                color: #fff;
                margin: 50px 0;
            }
            .contact_warp {
                margin-left: 30px;
                .contact_list {
                    float: left;
                    height: 90px;
                    background: #1d1f37;
                    width: 290px;
                    margin: 0 10px 10px 0;
                    border-radius: 6px;
                    text-align: left;
                    cursor: pointer;
                    &:hover {
                        background: #2b2e4e;
                        div {
                            color: #fff;
                        }
                    }
                    img {
                        margin-top: 26px;
                        margin-left: 70px;
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
        .what {
            margin-top: 12vh !important;
        }
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
</style>