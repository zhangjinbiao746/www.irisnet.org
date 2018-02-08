<template>
    <div>
        <img src="../assets/app/meangra.png" style="width: 100%"/>
        <div class="app">
            <div class="head">
                <img src="../assets/app/irislogo.png" class="imglogo">
                <div class="div_en" >
                    <a href="?lang=CN" v-if="$store.state.lang!='CN'">
                        CN
                    </a>
                    <a href="?lang=EN" v-if="$store.state.lang=='CN'">
                        EN
                    </a>
                    <img src="../assets/app/list.png" @click="menuIs=!menuIs"/>
                </div>
            </div>
            <div class="menu" v-show="menuIs">
                <a :href="'app#'+item.href" @click="menuIs=false" v-for="item in $store.state.messages.head.txt">
                    {{item.txt}}
                </a>
            </div>
            <div class="reveal ">
                <div class="slides ">
                    <section>
                        <section data-transition="slide">
                            <div class="home">
                                <div class="home-left">
                                    <div class="home_title">
                                        {{$store.state.messages.home.title}}
                                    </div>
                                    <div class="home_txt" v-html="$store.state.messages.home.txt"></div>
                                </div>
                                <div class="home_img">
                                    <a href="#/0/1">
                                        <img class="button" src="../assets/app/button.png"/>
                                    </a>
                                    <br/>
                                    <img class="community" src="../assets/app/community.png"/>
                                </div>
                            </div>
                        </section>
                        <section data-transition="slide">
                            <div class="about">
                                <img class="irispattern" src="../assets/app/irispattern.png"/>
                                <div class="about_warp">
                                    <img src="../assets/app/irislogo.png">
                                    <div class="imgtxt" v-html="$store.state.messages.about.imgtxt"></div>
                                    <div class="about_txt">
                                        <div>
                                            {{$store.state.messages.about.title}}
                                        </div>
                                        <div class="about_div" style="width: 200px">
                                            {{$store.state.messages.about.txt[0]}}
                                        </div>
                                        <div class="about_div" style="width: 250px">
                                            {{$store.state.messages.about.txt[1]}}
                                        </div>
                                        <div class="about_div" style="width: 250px;">
                                            {{$store.state.messages.about.txt[2]}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section data-transition="slide">
                            <div class="network">
                                <img class="irispattern" src="../assets/app/irispattern.png"/>
                                <div class="network_title">
                                    {{$store.state.messages.network.title}}
                                    <img src="../assets/app/diagram.png"/>
                                </div>
                            </div>
                        </section>
                        <section data-transition="slide">
                            <div class="network_txt">
                                <img src="../assets/app/irispattern.png"/>
                                <div class="network_text">
                                    <div class="network_title">{{$store.state.messages.network.title}}</div>
                                    <div class="network_list">
                                        <div>
                                            {{$store.state.messages.network.txt[0]}}
                                        </div>
                                        <div>
                                            {{$store.state.messages.network.txt[1]}}
                                        </div>
                                        <div>
                                            {{$store.state.messages.network.txt[2]}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section data-transition="slide">
                            <div class="collaboration">
                                <div class="collaboration_title">
                                    {{$store.state.messages.collaboration.title}}
                                </div>
                                <a class="collaboration_href" :href="$store.state.messages.collaboration.list[0].href"
                                   target="_blank">
                                    <div class="collaboration_warp">
                                        <div class="collaboration_div">
                                            <img :src="UrlSrc+$store.state.messages.collaboration.list[0].img"/>
                                            <div class="collaboration_div_title">
                                                {{$store.state.messages.collaboration.list[0].title}}
                                            </div>
                                            <div class="collaboration_div_text">
                                                {{$store.state.messages.collaboration.list[0].text}}
                                            </div>
                                            <div class="collaboration_div_txt">
                                                {{$store.state.messages.collaboration.txt[0]}}
                                                <div class="collaboration_div1" style="width: 92px;top: 28px"></div>
                                                <div class="collaboration_div1" style="width: 26px;top:29px"></div>
                                            </div>

                                        </div>
                                    </div>
                                </a>
                                <a class="collaboration_href"
                                   v-for="(item,$index) in $store.state.messages.collaboration.list" v-if="$index!==0"
                                   :href="item.href" target="_blank" style="margin-bottom: 0">
                                    <div class="collaboration_warp" style="margin-top: 14px;">
                                        <div class="collaboration_div">
                                            <img :src="UrlSrc+$store.state.messages.collaboration.list[$index].img"/>
                                            <div class="collaboration_div_title">
                                                {{$store.state.messages.collaboration.list[$index].title}}
                                            </div>
                                            <div class="collaboration_div_text">
                                                {{$store.state.messages.collaboration.list[$index].text}}
                                            </div>
                                            <div class="collaboration_div_txt" v-if="$index===1">
                                                {{$store.state.messages.collaboration.txt[1]}}
                                                <div v-if="$index===1" class="collaboration_div1"
                                                     style="width: 92px;top: 28px"></div>
                                                <div v-if="$index===1" class="collaboration_div1"
                                                     style="width: 26px;top:29px"></div>
                                            </div>

                                        </div>
                                    </div>
                                </a>
                            </div>
                        </section>
                        <section data-transition="slide">
                            <div class="roadmap">
                                <div class="roadmap_title">
                                    {{$store.state.messages.roadmap.title}}
                                </div>
                                <div class="roadmap_warp">
                                    <img src="../assets/app/rainbow.jpg" class="rainbow"/>
                                    <div class="roadmap_div" style="top:0;">
                                        <div class="roadmap_radius"></div>
                                        <img class="roadmap_img" @click="txtShow(0)"
                                             :src="UrlSrc+img($store.state.messages.roadmap.list[0].img)">
                                        <div class="roadmap_txt" v-show="list[0].is">
                                            {{$store.state.messages.roadmap.list[0].txt}}
                                        </div>
                                    </div>
                                    <div class="roadmap_div" style="top:33%;">
                                        <div class="roadmap_radius"></div>
                                        <img class="roadmap_img" @click="txtShow(1)"
                                             :src="UrlSrc+img($store.state.messages.roadmap.list[1].img)">
                                        <div class="roadmap_txt" v-show="list[1].is">
                                            {{$store.state.messages.roadmap.list[1].txt}}
                                        </div>
                                    </div>
                                    <div class="roadmap_div" style="top:66%;">
                                        <div class="roadmap_radius"></div>
                                        <img class="roadmap_img" @click="txtShow(2)"
                                             :src="UrlSrc+img($store.state.messages.roadmap.list[2].img)">
                                        <div class="roadmap_txt" v-show="list[2].is" style="top: -174px;">
                                            {{$store.state.messages.roadmap.list[2].txt}}
                                        </div>
                                    </div>
                                    <div class="roadmap_div" style="top:99%;">
                                        <div class="roadmap_radius"></div>
                                        <img class="roadmap_img" @click="txtShow(3)"
                                             :src="UrlSrc+img($store.state.messages.roadmap.list[3].img)">
                                        <div class="roadmap_txt" v-show="list[3].is" style="top: -130px;">
                                            {{$store.state.messages.roadmap.list[3].txt}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section data-transition="slide">
                            <div class="contact">
                                <div class="contact_title">
                                    {{$store.state.messages.contact.title}}
                                </div>
                                <div class="contact_div">
                                    <a :href="item.href" target="_blank" style="overflow: hidden"
                                       @click="blank(item.txt)"
                                       v-for="item in $store.state.messages.contact.img">
                                        <div class="contact_radius">
                                            <img :src="UrlSrc+item.src"/>
                                            <div>
                                                {{item.txt}}
                                            </div>
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
                    <img src="../assets/wechat.png" class="wechat_img"/>
                    <div class="wechat_title">
                        Get more
                    </div>
                    <div class="wechat_txt">
                        office info
                    </div>
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
        name: "app",
        methods: {
            img(src) {

                return 'app/'+src;
            },
            txtShow(index) {
                this.list.forEach(v => {
                    v.is = false;
                })
                this.list[index].is = true;
            },
            blank(item) {
                if (item == 'wechat') {
                    this.wechatIs = true;
                }
            }
        },
        data() {
            return {
                list: [
                    {is: true},
                    {is: false},
                    {is: false},
                    {is: false},
                ],
                menuIs: false,
                wechatIs: false
            }
        },
        mounted: function () {
            this.$store.state.messages.head.txt.forEach(v => {
                v.href = v.href.substr(1, v.href.length)
            })
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
                    _this.$store.state.messages.head.txt = model;
                });
            }
        }
    }
</script>

<style scoped lang='less'>
    .app {
        position: fixed;
        min-height: 100%;
        top: 0;
        width: 100%;
        .menu {
            position: fixed;
            top: 60px;
            background: rgba(255, 255, 255, .95);
            width: 100%;
            z-index: 2;
            a {
                text-align: center;
                color: #1c2042;
                padding-top: 14px;
                padding-bottom: 14px;
                font-size: 14px;
                display: block;
            }
        }
        .contact {
            width: 84%;
            background: #141426;
            margin: 0 auto;
            border-radius: 10px;
            box-shadow: 0 0 20px #080B0F;
            margin-top: 6vh;
            position: relative;
            .contact_title {
                text-align: center;
                padding-top: 24px;
                font-weight: bold;
            }
            .contact_div {
                padding-top: 14px;
                padding-bottom: 24px;
                margin-left: 8%;
                overflow: hidden;
                .contact_radius {
                    margin-top: 4%;
                    float: left;
                    width: 44%;
                    height: 46px;
                    background: #1d1f37;
                    margin-right: 4%;
                    border-radius: 6px;
                    img {
                        margin-top: 9px;
                        width: 28px;
                        margin-left: 20%;
                        float: left;
                    }
                    div {
                        font-size: 12px;
                        color: #fff;
                        float: left;
                        margin-top: 17px;
                        margin-left: 10%;
                    }
                }
            }
        }
        .wechat {
            position: relative;
            position: fixed;
            height: 100%;
            width: 100%;
            top: 0;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 12;
            .wechat_warp {
                position: relative;
                position: absolute;
                color: #5c5c7c;
                text-align: center;
                height: 200px;
                width: 200px;
                background: #141426;
                border-radius: 8px;
                top: 50%;
                left: 50%;
                margin-top: -100px;
                margin-left: -100px;
                .cancel {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: #ed3d3d;
                    position: absolute;
                    margin-top: 14px;
                    right: 14px;
                    cursor: pointer;
                    img {
                        margin-top: 2px;
                        margin-left: 2px;
                        float: left;
                        display: none;
                    }
                    &:hover {
                        img {
                            display: block;
                        }
                    }
                }
                .wechat_img {
                    margin-top: 40px;
                    margin-bottom: 10px;
                    width: 100px;
                }
                .wechat_title {
                    font-size: 14px;
                }
                .wechat_txt {
                    font-size: 14px;
                    margin-top: 6px;
                }
            }
        }
        .collaboration {
            .collaboration_title {
                margin-top: 20px;
                text-align: center;
                font-weight: bold;
            }
            .collaboration_href {
                overflow: hidden;
                display: block;
                margin-bottom: 14px;
                .collaboration_warp {
                    width: 320px;
                    margin: 0 auto;
                    margin-top: 30px;
                    .collaboration_div {
                        float: right;
                        width: 160px;
                        background: #fff;
                        border-radius: 6px;
                        height: 60px;
                        position: relative;
                        img {
                            width: 64px;
                            float: left;
                            margin-left: -30px;
                            margin-top: -2px;
                        }
                        .collaboration_div_title {
                            color: #181e46;
                            font-weight: bold;
                            font-size: 16px;
                            margin-top: 16px;
                            text-indent: 6px;
                        }
                        .collaboration_div_text {
                            font-size: 12px;
                            color: #0a7dbe;
                            margin-top: 2px;
                            text-indent: 6px;
                        }
                        .collaboration_div_txt {
                            position: relative;
                            position: absolute;
                            width: 130px;
                            left: -162px;
                            top: 0;
                            font-size: 12px;
                            color: #fff;
                        }
                        .collaboration_div1 {
                            position: absolute;
                            height: 1px;
                            background: #fff;
                        }
                    }
                }
            }

        }

        .network {
            width: 84%;
            background: #141426;
            margin: 0 auto;
            border-radius: 10px;
            box-shadow: 0 0 20px #080B0F;
            margin-top: 6vh;
            position: relative;
            .irispattern {
                width: 100%;
                height: 100%;
            }
            .network_title {
                position: absolute;
                top: 0;
                padding-top: 30px;
                text-align: center;
                font-weight: bold;
                img {
                    width: 90%;
                    margin-top: 40px;
                }
            }
        }

        .network_txt {
            height: 70%;
            width: 84%;
            background: #141426;
            margin: 0 auto;
            border-radius: 10px;
            box-shadow: 0 0 20px #080B0F;
            margin-top: 6vh;
            position: relative;
            img {
                width: 100%;
                height: 100%;
            }
            .network_text {
                position: absolute;
                top: 0;
                padding-top: 30px;
                text-align: center;
                .network_title {
                    font-weight: bold;
                }
                .network_list {
                    margin-left: 10%;
                    font-size: 12px;
                    line-height: 22px;
                    text-align: left;
                    width: 84%;
                    div {
                        margin-top: 30px;
                    }
                }
            }
        }

        .about {
            width: 84%;
            min-height: 60vh;
            background: #141426;
            margin: 0 auto;
            border-radius: 10px;
            box-shadow: 0 0 20px #080B0F;
            margin-top: 6vh;
            position: relative;
            .irispattern {
                width: 100%;
                height: 100%;
            }
            .about_warp {
                position: relative;
                position: absolute;
                top: 0;
                height: 100%;
                width: 100%;
                img {
                    width: 150px;
                    margin-top: 6%;
                    margin-right: 4%;
                    float: right;
                }
                .imgtxt {
                    position: absolute;
                    font-size: 12px;
                    right: 0;
                    top: 18%;
                    text-align: right;
                    line-height: 20px;
                    margin-right: 4%;
                    color: #bfbfbf;
                }
                .about_txt {
                    margin-top: 22vh;
                    margin-left: 10%;
                    text-align: left;
                    padding-bottom: 20px;
                    .about_div {
                        font-size: 12px;
                        margin-top: 20px;
                        line-height: 20px;
                    }

                }
            }
        }

        .home {
            .home-left {
                margin-left: 10%;
                text-align: left;
                .home_title {
                    font-size: 30px;
                    margin-top: 34%;
                    font-weight: bold;
                }
                .home_txt {
                    font-size: 12px;
                    line-height: 24px;
                    margin-top: 14px;
                    width: 90%;
                }
            }
            .home_img {
                text-align: center;
                margin-top: 20%;
                .button {
                    width: 182px;
                }
                .community {
                    width: 110px;
                    margin-top: 6%;
                }
            }
        }

        .roadmap {
            height: 100%;
            .roadmap_title {
                margin-top: 20px;
                text-align: center;
                font-weight: bold;
            }
            .roadmap_warp {
                text-align: center;
                height: 60%;
                position: relative;
                width: 4px;
                margin: 0 auto;
                margin-top: 6%;
                .rainbow {
                    height: 100%;
                    width: 4px;
                }
                .roadmap_div {
                    position: relative;
                    position: absolute;
                    width: 20px;
                    background: #fff;
                    height: 20px;
                    border-radius: 50%;
                    left: -8px;
                    .roadmap_radius {
                        position: absolute;
                        top: 2px;
                        left: 2px;
                        width: 16px;
                        height: 16px;
                        background: #00aeef;
                        border-radius: 50%;
                    }
                    .roadmap_img {
                        position: absolute;
                        top: 0;
                        width: 100px;
                        margin-left: 20px;
                    }
                    .roadmap_txt {
                        position: absolute;
                        top: 0;
                        left: -170px;
                        border-radius: 6px;
                        line-height: 14px;
                        font-size: 12px;
                        width: 140px;
                        text-align: left;
                        background: #1a254a;
                        padding: 14px 12px;
                    }
                }
            }
        }

        .head {
            background: #141426;
            height: 60px;
            width: 100%;
            .imglogo {
                width: 112px;
                margin-top: 12px;
                margin-left: 20px;
            }
            .div_en {
                float: right;
                color: #4b4e6d;
                line-height: 60px;
                img {
                    margin-left: 20px;
                    float: right;
                    width: 20px;
                    margin-top: 20px;
                    margin-right: 20px;
                }
            }
        }

        .reveal {
            width: 100% !important;
            position: fixed !important;
        }

    }

    html, body {
        min-width: auto !important;
    }

    .slides {
        width: 100% !important;
        height: 100% !important;
        left: 0% !important;
        top: 0% !important;
        transform: none !important;
        text-align: left;
        color: #fff;
        .stack {
            height: 100%;
        }
        .present {
            top: 0 !important;
            height: 100%;
        }
    }


</style>