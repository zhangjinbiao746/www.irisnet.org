<template>
    <div>
        <div id="index" class="index">
            <div class="head">
                <div class="center">
                    <a href="#"><img :src="$store.state.messages.logo" style="width: 130px;"/></a>
                    <div class="item_en">
                        <div @mouseenter="downShow" @mouseleave="downHide" class="item" s>
                            <img :src="down"/> English
                        </div>
                        <a class="item_cn">
                            中文
                        </a>
                    </div>
                    <div class="comm">
                        <div class="div_h">
                        </div>
                        <a class="item" @mouseenter="commHide" @mouseleave="commShow">
                            <img :src="comm">
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
                                    <img :src="$store.state.messages.home.src"/>
                                </a>
                            </div>
                        </section>
                        <section data-transition="slide">
                            <div class="what">
                                <div class="what_img">
                                    <img :src="$store.state.messages.logo"/>
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
                                <img :src="$store.state.messages.next" class="what_btn"/>
                            </a>
                        </section>
                        <section data-transition="slide">
                            <div class="what">
                                <div class="what_img">
                                    <img :src="$store.state.messages.network.src" style="margin-top: 80px;"/>
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
                                <img :src="$store.state.messages.next" class="what_btn"/>
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
                                    <img :src="$store.state.messages.collaboration.list[0].img"
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
                                    <img :src="$store.state.messages.collaboration.list[$index].img"
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
                                <img :src="$store.state.messages.next" class="what_btn" style="    margin-top: 12vh;"/>
                            </a>
                        </section>
                        <section data-transition="slide">
                            <div class="collaboration" style="padding-bottom: 28vh">
                                {{$store.state.messages.roadmap.title}}
                            </div>
                            <div>
                                <div class="roadmap_warp" @mouseover="textShow(0)" @mouseout="textHide(0)">
                                    <div class="roadmap_list">
                                        <div class="roadmap_text" v-show="list[0].is" style="bottom: 32px;left: -166px;">
                                            {{$store.state.messages.roadmap.list[0].txt}}
                                            <div class="s"></div>
                                        </div>
                                    </div>
                                    <img :src="$store.state.messages.roadmap.list[0].img"/>
                                </div>
                                <div style="float: left;margin-left: -64px;margin-top: 0px;">
                                    <img src="../assets/rainbow.png" style="width: 264px"/>
                                </div>
                                <div class="roadmap_warp" style="margin-left: -69px; margin-top: -92px;"
                                     @mouseover="textShow(1)" @mouseout="textHide(1)">
                                    <img :src="$store.state.messages.roadmap.list[1].img" style="padding-bottom: 20px"/>
                                    <div class="roadmap_list" style="position: relative">
                                        <div v-show="list[1].is" class="roadmap_text"
                                             style="bottom: -250px;left: -162px;">
                                            {{$store.state.messages.roadmap.list[1].txt}}
                                            <div class="d"></div>
                                        </div>
                                    </div>

                                </div>
                                <div style="float: left;margin-left: -69px; margin-top: 0px;">
                                    <img src="../assets/rainbow.png" style="width: 264px;transform:rotate(180deg);"/>
                                </div>
                                <div class="roadmap_warp" style="margin-left: -68px;" @mouseover="textShow(2)"
                                     @mouseout="textHide(2)">
                                    <div class="roadmap_list">
                                        <div class="roadmap_text" v-show="list[2].is"
                                             style=" top: -196px;    left: -166px;">
                                            {{$store.state.messages.roadmap.list[2].txt}}
                                            <div class="s" style="top: 142px;"></div>
                                        </div>
                                    </div>
                                    <img :src="$store.state.messages.roadmap.list[2].img"/>
                                </div>
                                <div style="float: left;margin-left: -70px; margin-top: 0px;">
                                    <img src="../assets/rainbow.png" style="width: 264px"/>
                                </div>
                                <div class="roadmap_warp" style="margin-left:-46px; margin-top: -92px;" @mouseover="textShow(3)" @mouseout="textHide(3)">
                                    <img :src="$store.state.messages.roadmap.list[3].img" style="padding-bottom: 20px"/>
                                    <div class="roadmap_list">
                                        <div class="roadmap_text" v-show="list[3].is" style="top: 32px;left: -162px;">
                                            {{$store.state.messages.roadmap.list[3].txt}}
                                            <div class="d"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <a href="#/0/5" style="clear: both;display: block">
                                <img :src="$store.state.messages.next" class="what_btn" style="    margin-top: 20vh;"/>
                            </a>
                        </section>
                        <section data-transition="slide">
                            <div class="contact">
                                <div class="contact_title">
                                    Contact
                                </div>
                                <div class="contact_warp">
                                    <div class="contact_list" v-for="item in $store.state.messages.index.img"
                                         @mouseover="overShow(item)" @mouseout="outHide(item)">
                                        <img :src="item.src"/>
                                        <div>{{item.txt}}</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'

    let Reveal
    if (process.env.VUE_ENV === 'client') {
        Reveal = require('reveal.js')
    }
    export default {
        name: 'index',
        data() {
            return {
                list: [
                    {is: false},
                    {is: false},
                    {is: false},
                    {is: false},
                ],
                comm: '../public/community.png',
                down: '../public/arrow.png'
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
                    mouseWheel: true
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
                    _this.$store.state.messages.head.txt = model;
                });
            }
        }
    }
</script>

<style lang='less'>
    .index {
        flex: 1;
        height: 100vh;
        background: url('../../public/irisnet-background.jpg');
        background-size: cover;
        position: relative;;
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
                    margin-right: 4px;
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
            border-radius: 40px;
            background: #141426;
            margin-top: 20vh;
            background-image: url('../../public/iris_bg.png');
            background-repeat: no-repeat;
            box-shadow:0 0 20px #080B0F;
            background-position: center top;
            .what_img {
                float: left;
                line-height: 583px;
                margin-left: 80px
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
                    margin-bottom: 50px;
                }
            }
        }
        .what_btn {
            margin-top: 4vh
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
                border-radius: 20px;
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
            position: relative;
            margin-left: 100px;
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
            box-shadow:0 0 20px #080B0F;
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