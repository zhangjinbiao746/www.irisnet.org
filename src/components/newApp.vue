<template>
    <div>
        <!--<img  src="../../public/app/irispattern-background.png" style="position:absolute;left:0; top:0;right:0;bottom:0;margin:auto;width:100%;background: #141426"/>-->
        <div class="app">
            <div class="head">
                <img src="../assets/app/irislogo.png" class="imglogo" @click="goToHome">
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
                <section v-for="item in $store.state.messages.head.txt">
                    <a v-if="item.href.indexOf('ttp')==-1" :href="'newApp#'+item.href" @click="menuIs=false" >
                        {{item.txt}}
                    </a>
                    <a v-if="item.href.indexOf('ttp')!=-1" :href="'h'+item.href" @click="menuIs=false" >
                        {{item.txt}}
                    </a>
                </section>
            </div>
                <div style="width: 100%;background: #0b0b18">
                    <div style="width: 100%;height: auto">
                            <div id="#" class="home" style="background: #0b0b18 url('../../public/app/irispattern-background.png') no-repeat  center;background-size: 375px;">
                                <div class="home-left">
                                    <div class="home_title">
                                        {{$store.state.messages.home.title}}
                                    </div>
                                    <div class="home_txt" v-html="$store.state.messages.home.txt"></div>
                                </div>
                                <div class="home_img">
                                    <a href="#/0/1">
                                        <div style="margin-bottom: 10px;">
                                            <span class="button">WHAT IS IRISNET</span>
                                        </div>
                                    </a>
                                    <br/>
                                    <div class="community-container" @click="gotoCommunity">
                                        <span class="community-img-container">
                                            <img src="../../public/app/community-purple.png">
                                        </span>
                                        <span>Community</span>
                                    </div>
                                </div>
                            </div>

                            <div id="#/0/1" class="about">
                                <div class="about_warp">
                                    <div class="about_txt">
                                        <div class="title-txt">
                                            {{$store.state.messages.about.title}}
                                            <div class="nav-line"></div>
                                        </div>
                                        <div class="about_div" >
                                            {{$store.state.messages.about.txt[0]}}
                                        </div>
                                        <div class="about_div" >
                                            {{$store.state.messages.about.txt[1]}}
                                        </div>
                                        <div class="about_div" >
                                            {{$store.state.messages.about.txt[2]}}
                                        </div>

                                        <div class="img_right_container">
                                            <div class="img_containter_top">
                                                <div class="img_default_containter">
                                                    <img src="../../public/iris.png" >
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
                                                <div class="img-center-container">
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
                                        <div class="whiteBook-button">
                                            <a class="whiteHref-btn" :href="$store.state.messages.whiteHref">WHITE PAPER</a>
                                            <i class="guide_right">
                                                <img src="../../public/arrowhead.png">
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="#/0/2"   class="network">
                                <div class="network_title">
                                    <div class="what_txt_title" style="font-size: 30px;margin-bottom: 10px;color:#fff">
                                        {{$store.state.messages.network.title}}
                                        <div class="nav-line"></div>
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
                                    <img src="../assets/app/diagram.png"/>
                                </div>
                            </div>

                            <div id="#/0/3"  class="collaboration">
                                <div class="collaboration_title" >
                                    {{$store.state.messages.collaboration.title}}
                                    <div class="nav-line"></div>
                                </div>

                                    <div class="collaboration_warp">
                                        <div class="collaboration_div_txt">
                                            {{$store.state.messages.collaboration.txt[0]}}

                                        </div>
                                        <div class="collaboration-img-container">
                                            <a class="collaboration_href1" :href="$store.state.messages.collaboration.list[0].href"
                                               target="_blank" style="clear:both; display: flex">
                                                <div class="img-container-collaboration">
                                                    <img :src="UrlSrc+$store.state.messages.collaboration.list[0].img"/>
                                                </div>
                                                <div class="collaboration-txt-container">
                                                    <div class="collaboration_div_title">
                                                        {{$store.state.messages.collaboration.list[0].title}}
                                                    </div>
                                                    <div class="line"></div>
                                                    <div class="collaboration_div_text">
                                                        {{$store.state.messages.collaboration.list[0].text}}
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                <div class="collaboration_div_txt">
                                    {{$store.state.messages.collaboration.txt[1]}}
                                </div>
                                <div style=" margin-left: 5%;display: flex; flex-wrap: wrap">
                                    <a class="collaboration_href"
                                       v-for="(item,$index) in $store.state.messages.collaboration.list" v-if="$index!==0"
                                       :href="item.href ? item.href : 'javascript:void(0);'" :target="item.text ? '_blank ': '' " >
                                        <div class="collaboration_warp" >
                                            <div class="collaboration-img-container-two">
                                                <div class="img-container-collaboration">
                                                    <img :src="UrlSrc+$store.state.messages.collaboration.list[$index].img"/>
                                                </div>
                                                <div class="collaboration-txt-container">
                                                    <div class="collaboration_div_title" :class="item.text ? 'collaboration_div_title ' : 'collaboration_title_none' ">
                                                        {{$store.state.messages.collaboration.list[$index].title}}
                                                    </div>
                                                    <div v-if="item.text"class="line"></div>
                                                    <div class="collaboration_div_text">
                                                        {{$store.state.messages.collaboration.list[$index].text}}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div id="#/0/4"  class="roadmap">
                                <div class="roadmap_title">
                                    {{$store.state.messages.roadmap.title}}
                                    <div class="nav-line"></div>
                                </div>
                                <div class="roadmap_warp">
                                    <div style="width: 2px;height: 120%;background: #724be3" class="rainbow" ></div>
                                    <div class="roadmap_div" style="top:0;">
                                        <div class="roadmap_radius" @click="txtShow(0)">
                                            <div class="direction-line" :class="list[0].is ? 'showAnim' : 'show-line'"></div>
                                            <img src="../../public/app/Ellipse2.png">
                                            <div  class="show-radius" :class="list[0].is ? 'show-scale' : ''"></div>
                                        </div>
                                        <div class="roadmap_img" @click="txtShow(0)">
                                            <span>PANGU</span>
                                            <p>JAN 2018 </p>
                                            <p> | </p>
                                            <p>JUN 2018</p>
                                        </div>
                                        <div class="roadmap_txt" :class=" list[0].is ? 'showOpacity' : '' " >
                                            {{$store.state.messages.roadmap.list[0].txt}}
                                        </div>
                                    </div>
                                    <div class="roadmap_div" style="top:33%;">
                                        <div class="roadmap_radius" @click="txtShow(1)">
                                            <div class="direction-line" :class="list[1].is ? 'showAnim' : 'show-line'"></div>
                                            <img src="../../public/app/Ellipse2.png">
                                            <div  class="show-radius" :class="list[1].is ? 'show-scale' : ''"></div>
                                        </div>
                                        <div class="roadmap_img" @click="txtShow(1)">
                                            <span>NUWA</span>
                                            <p>JUL 2018 </p>
                                            <p> | </p>
                                            <p>NOV 2018</p>
                                        </div>
                                        <div class="roadmap_txt" :class=" list[1].is ? 'showOpacity' : '' " >
                                            {{$store.state.messages.roadmap.list[1].txt}}
                                        </div>
                                    </div>
                                    <div class="roadmap_div" style="top:66%;">
                                        <div class="roadmap_radius" @click="txtShow(2)">
                                            <div class="direction-line" :class="list[2].is ? 'showAnim' : 'show-line'"></div>
                                            <img src="../../public/app/Ellipse2.png">
                                            <div  class="show-radius" :class="list[2].is ? 'show-scale' : ''"></div>
                                        </div>
                                        <div class="roadmap_img" @click="txtShow(2)">
                                            <span>KUAFU</span>
                                            <p>DEC 2018 </p>
                                            <p> | </p>
                                            <p>MAY 2019</p>
                                        </div>
                                        <div v-if="$store.state.lang!='CN'" class="roadmap_txt" :class=" list[2].is ? 'showOpacity' : '' "  style="top: -54px;">
                                            {{$store.state.messages.roadmap.list[2].txt}}
                                        </div>
                                        <div v-if="$store.state.lang=='CN'" class="roadmap_txt" :class=" list[2].is ? 'showOpacity' : '' "  style="top: 0px;">
                                            {{$store.state.messages.roadmap.list[2].txt}}
                                        </div>
                                    </div>
                                    <div class="roadmap_div" style="top:99%;">
                                        <div class="roadmap_radius" @click="txtShow(3)">
                                            <div class="direction-line" :class="list[3].is ? 'showAnim' : 'show-line'"></div>
                                            <img src="../../public/app/Ellipse2.png">
                                            <div  class="show-radius" :class="list[3].is ? 'show-scale' : ''"></div>
                                        </div>
                                        <div class="roadmap_img" @click="txtShow(3)">
                                            <span>HOUYI</span>
                                            <p>BEYOND </p>
                                            <p>JUN 2019</p>
                                        </div>
                                        <div v-if="$store.state.lang!='CN'" class="roadmap_txt" :class=" list[3].is ? 'showOpacity' : '' " style="top: -70px;">
                                            {{$store.state.messages.roadmap.list[3].txt}}
                                        </div>
                                        <div v-if="$store.state.lang=='CN'" class="roadmap_txt" :class=" list[3].is ? 'showOpacity' : '' " style="top: -82px;">
                                            {{$store.state.messages.roadmap.list[2].txt}}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="#/0/5"  class="contact">
                                <div class="contact_title">
                                    {{$store.state.messages.contact.title}}
                                    <div class="nav-line"></div>
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
                                <div class="bottom-container">
                                    <div class="protocol-container">
                                        <div class="protocol-distance" @click="goToAppPrivacy">
                                            <span>Privacy</span>
                                            <div class="bottom-line"></div>
                                        </div>
                                        <div style="padding: 10px 0">
                                            &
                                        </div>
                                        <div class="protocol-distance" @click="goToAppTerms">
                                            <span>Terms</span>
                                            <div class="bottom-line"></div>
                                        </div>
                                    </div>
                                    <span>Copyright © 2018 IRIS Foundation Ltd. All rights reserved.</span>
                                </div>
                            </div>
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
        data() {
            return {
                list: [
                    {is: true},
                    {is: false},
                    {is: false},
                    {is: false},
                ],
                menuIs: false,
                wechatIs: false,
                showScale: "",
                path:this.$route.path
            }
        },
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
                if (item == 'Wechat') {
                    this.wechatIs = true;
                }
            },
            goToAppPrivacy(){
                this.$router.push({path:'/appPrivacy'})
            },
            goToAppTerms(){
                this.$router.push({path:'/appTerms'})
            },
            goToHome(){
                this.$router.go('/newApp')
            },
            gotoCommunity(){
                this.$router.push({path:'/community'})
            },
            roll() {
                this.is = false;
                if (document.getElementById(this.$route.hash)) {
                    this.scroll(document.getElementById(this.$route.hash).offsetTop - 100)
                }
            },
            scroll(top) {
                $('body,html').animate({
                        scrollTop: top
                    }, 500
                );
            },
        },

        mounted: function () {
            this.path =  this.$route.path
            console.log( this.path)
            this.$store.state.messages.head.txt.forEach(v => {
                v.href = v.href.substr(1, v.href.length)
            })
            if (process.env.VUE_ENV === 'client') {
                Reveal.initialize({
                    progress: false,
                    mouseWheel: true,
                    controls:false
                });
                // let _this = this;
                // Reveal.addEventListener('slidechanged', function (event) {
                //     let index = event.indexv;
                //
                //     let model = [];
                //     _this.$store.state.messages.head.txt.forEach((v) => {
                //         v.is = false;
                //         model.push(v);
                //     })
                //     if(index>=2){
                //         index++;
                //     }
                //     _this.$store.state.messages.head.txt = model;
                // });
                this.roll();
                if ('addEventListener' in document) {
                    document.addEventListener('DOMContentLoaded', function () {
                        FastClick.attach(document.body);
                    }, false);
                }
            }
        },
        watch: {
            '$route': 'roll'
        }
    }
</script>

<style scoped lang='less'>
    .app {
        top: 0;
        width: 100%;
        .menu {
            position: fixed;
            top: 60px;
            background: rgba(20, 20, 38, .85);
            width: 100%;
            z-index: 2;
            a {
                text-align: center;
                color: #7681e3;
                padding-top: 10px;
                padding-bottom: 10px;
                font-size: 14px;
                display: block;
            }
        }
        .contact {
            width: 100%;
            height: 600px;
            border-radius: 10px;
            position: relative;
            .contact_title {
                text-align: left;
                padding-top: 24px;
                font-weight: bold;
                font-size: 30px;
                color: #fff;
                padding-left: 5%;
            }
            .contact_div {
                padding-top: 54px;
                padding-left: 5%;
                padding-bottom: 24px;
                overflow: hidden;
                .contact_radius {
                    margin-top: 4%;
                    float: left;
                    width: 45%;
                    height: 60px;
                    background: #1d1f37;
                    margin-right: 5%;
                    border-radius: 6px;
                    img {
                        margin-top: 12px;
                        width: 36px;
                        margin-left: 8%;
                        float: left;
                    }
                    div {
                        font-size: 18px;
                        color: #cbc8d4;
                        float: left;
                        margin-top: 24px;
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
            min-height: 600px;
            height: auto;
            .collaboration_title {
                margin-top: 20px;
                text-align: left;
                /*font-weight: bold;*/
                font-size: 30px;
                margin-left: 5%;
                color: #fff;
            }
            .collaboration_href {
                overflow: hidden;
                /*display: block;*/
                margin-right: 5%;
                .collaboration_warp {
                    flex-direction: column;
                    .collaboration_div {
                        float: right;
                        width: 160px;
                        background: #141430;
                        border-radius: 6px;
                        height: 60px;
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        img {
                            width: 64px;
                            float: left;
                            margin-left: -30px;
                            margin-top: -2px;
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
            height: 600px;
            margin: 0 auto;
            border-radius: 10px;
            position: relative;
            .irispattern {
                width: 100%;
                height: 100%;
            }
            .network_title {
                position: absolute;
                top: 0;
                text-align: left;
                margin: 0 20px;
                font-family: "PingFang SC";
                img {
                    width: 100%;
                    margin-top: 20px;
                }
            }
        }
        .what_txt_list_two{
            font-size: 12px;
            color: #cbc8d4;
            line-height: 20px;
        }
        .what_txt_list_center{
            font-size: 12px;
            color: #cbc8d4;
            padding: 10px 0;
            line-height: 20px;
        }
        .what_txt_list_four{
            font-size: 12px;
            color: #cbc8d4;
            line-height: 20px;
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
            height: 600px;
            /*background: #141426;*/
            margin: 0 auto;
            border-radius: 10px;
            /*box-shadow: 0 0 20px #080B0F;*/
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
                    margin: 0 5%;
                    text-align: left;
                    padding-bottom: 20px;
                    .about_div {
                        font-size: 12px;
                        margin-top: 15px;
                        line-height: 20px;
                        color: #cbc8d4;
                    }

                }
            }
        }

        .home {
            padding-top: 10%;
            padding:10% 5% 10%;
            height: 667px;
            .home-left {
                text-align: left;
                margin-top: 50%;
                .home_title {
                    font-size: 30px;
                    font-weight: bold;
                    color: #fff;
                }
                .home_txt {
                    font-size: 12px;
                    line-height: 24px;
                    margin-top: 14px;
                    width: 90%;
                    color: #cbc8d4;
                }
            }
            .home_img {
                text-align: center;
                margin-top: 13%;
                .button {
                    display: inline-block;
                    padding: 16px 30px;
                    color: #fff;
                    background: #724be3;
                    border-radius: 24px;

                }
                .community-container{
                    width: 113px;
                    margin: 0 auto;
                    color: #fff;
                    border-radius: 24px;
                    border: 1px solid #fff;
                    display: flex;
                    justify-content: center;
                    padding: 14px 45px 14px 33px;
                    .community-img-container{
                        width: 18px;
                        height: 18px;
                        img{
                            width: 18px;
                        }
                    }
                    span{
                        padding-left: 15px;
                        color: #724be3;
                    }
                }


            }
        }

        .roadmap {
            height: 600px;
            margin: 0 5%;
            .roadmap_title {
                margin-top: 20px;
                text-align: left;
                font-weight: bold;
                font-size: 30px;
                color: #fff;
            }
            .roadmap_warp {
                text-align: center;
                height: 60%;
                position: relative;
                width: 4px;
                left: 30%;
                margin-top: 6%;
                .rainbow {
                    height: 150%;
                    width: 4px;
                    position: relative;
                    right: 1px;
                }
                .roadmap_div {
                    position: relative;
                    position: absolute;
                    border-radius: 50%;
                    left: -8px;
                    .roadmap_radius {
                        width: 22px;
                        height: 22px;
                        img{
                            width: 100%;
                            position: relative;
                            top: -3px;
                            left: -3px;
                        }
                        .show-radius{
                            width: 10px;
                            height: 10px;
                            border-radius: 50%;
                            background: #fff;
                            position: relative;
                            bottom: 22px;
                            left: 3px;

                        }
                    }
                    .roadmap_img {
                        position: absolute;
                        top: 0;
                        text-align: right;
                        margin-left: -80px;
                        span{
                            display: inline-block;
                            color: #61cbff;
                            font-size: 18px;
                            margin-bottom: 5px;
                        }
                        p{
                            color: #25556d;
                            font-size: 12px;
                            margin: 2px 0;
                        }
                        p:nth-child(3){
                            text-align: center;
                        }
                    }
                    .roadmap_txt {
                        position: absolute;
                        top: 7px;
                        left: 60px;
                        border-radius: 6px;
                        line-height: 14px;
                        font-size: 12px;
                        min-width: 155px;
                        width: auto;
                        text-align: left;
                        opacity: 0;
                        color: #fff;
                    }
                }
            }
        }

        .head {
            background: #141426;
            height: 60px;
            width: 100%;
            position: fixed;
            z-index: 100;
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

        /*.reveal {*/
            /*width: 100% !important;*/
            /*position: fixed !important;*/
        /*}*/

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
            width: 100%;
            background: #0b0b18;
            /*background: #0b0b18 url("../../public/app/irispattern-background.png") no-repeat fixed center;*/
            /*background-size: 375px;*/

        }
    }
    .title-txt{
        font-size: 30px;
        color: #fff;
    }
    .img_right_container{
        margin-top: 40px;
    }
    .img_containter_top{
        display: flex;
        flex-direction: column;
    }

    .img_default_containter{
        margin: 0 auto;
        width: 40px;
        animation: imgTranslate 2s infinite linear alternate;
        img{
            width: 100%;
        }
    }
    .rectangle_default_container{
        margin: 0 auto;
        width: 80px;
        img{
            width: 100%;
        }
    }
    .img_container_bottom{
        display: flex;
        justify-content: center;
    }
    .img-center-container{
        padding: 0 10%;
    }
    .whiteBook-button{
        text-align: center;
        margin-top: 40px;
    }
    .whiteHref-btn{
        padding: 10px 30px;
        background: #724be3;
        color: #fff;
        margin: 0 auto;
        border-radius: 24px;
        cursor: pointer;
        font-size: 18px;
        -webkit-tap-highlight-color:rgba(0,0,0,0);
    }
    .collaboration-img-container{
        display: flex;
        margin-top: 15px;
        margin-left: -10px;
    }
    .img-container-collaboration{
        position: relative;
        left: 28px;
        top: 1px;
        width: 50px;
        img{
            width: 100%;
        }
    }
    .collaboration-txt-container{
        width: 100px;
        padding: 10px 20px 10px 20px;
        background: #141430;
        border-radius: 5px;
    }
    .collaboration_div_text{
        color: #1994db;
        margin-top: 5px;
        font-size: 12px;
        margin-left: 12px;
    }
    .line{
        height: 1px;
        width: 100%;
        background: #282856;
        margin-top: 5px;
        margin-left: 12px;
    }
    .collaboration-img-container-two{
        display: flex;
        margin-top: 15px;
        margin-left: -31px;
    }
    .collaboration_div_title {
        color: #6677e8;
        font-weight: bold;
        font-size: 12px;
        margin-left: 12px;
    }
    .collaboration_div_txt{
        color: #cbc8d4;
        font-size: 12px;
        margin-top:20px;
        margin-left: 20px;
    }
    .collaboration_title_none{
        line-height: 30px;
        margin-left: 10px;
    }
    /*.sroll-container{*/
        /*width: 90%;*/
        /*height:150px;*/
        /*overflow: scroll;*/
    /*}*/
    @keyframes  myMove{
        0%{
            transform:scale(1,1);
            -moz-transform:scale(1,1);
            -webkit-transform:scale(1,1);
            -o-transform:scale(1,1);
            -ms-transform:scale(1,1);
        }

        50%{
            transform:scale(1.2,1.2);
            -moz-transform:scale(1.2,1.2);
            -webkit-transform:scale(1.2,1.2);
            -o-transform:scale(1.2,1.2);
            -ms-transform:scale(1.2,1.2);
        }

        100%{
            transform:scale(1,1);
            -moz-transform:scale(1,1);
            -webkit-transform:scale(1,1);
            -o-transform:scale(1,1);
            -ms-transform:scale(1,1);
        }

    }

    @-webkit-keyframes  myMove{
        0%{
            transform:scale(1,1);
            -moz-transform:scale(1,1);
            -webkit-transform:scale(1,1);
            -o-transform:scale(1,1);
            -ms-transform:scale(1,1);
        }

        50%{
            transform:scale(1.2,1.2);
            -moz-transform:scale(1.2,1.2);
            -webkit-transform:scale(1.2,1.2);
            -o-transform:scale(1.2,1.2);
            -ms-transform:scale(1.2,1.2);
        }

        100%{
            transform:scale(1,1);
            -moz-transform:scale(1,1);
            -webkit-transform:scale(1,1);
            -o-transform:scale(1,1);
            -ms-transform:scale(1,1);
        }
    }

    @-moz-keyframes  myMove{
        0%{
            transform:scale(1,1);
            -moz-transform:scale(1,1);
            -webkit-transform:scale(1,1);
            -o-transform:scale(1,1);
            -ms-transform:scale(1,1);
        }

        50%{
            transform:scale(1.5,1.5);
            -moz-transform:scale(1.5,1.5);
            -webkit-transform:scale(1.5,1.5);
            -o-transform:scale(1.5,1.5);
            -ms-transform:scale(1.5,1.5);
        }

        100%{
            transform:scale(1,1);
            -moz-transform:scale(1,1);
            -webkit-transform:scale(1,1);
            -o-transform:scale(1,1);
            -ms-transform:scale(1,1);
        }
    }

    @-o-keyframes  myMove{
        0%{
            transform:scale(1,1);
            -moz-transform:scale(1,1);
            -webkit-transform:scale(1,1);
            -o-transform:scale(1,1);
            -ms-transform:scale(1,1);
        }

        50%{
            transform:scale(1.5,1.5);
            -moz-transform:scale(1.5,1.5);
            -webkit-transform:scale(1.5,1.5);
            -o-transform:scale(1.5,1.5);
            -ms-transform:scale(1.5,1.5);
        }

        100%{
            transform:scale(1,1);
            -moz-transform:scale(1,1);
            -webkit-transform:scale(1,1);
            -o-transform:scale(1,1);
            -ms-transform:scale(1,1);
        }

    }

    .show-scale{
        animation:myMove 2s infinite;//循环
        -webkit-animation:myMove 2s infinite;
        -moz-animation:myMove 2s infinite;
        -o-animation:myMove 2s infinite;
    }
    @keyframes imgTranslate {
        from{
            transform: translateY(0px);
        }
        to{
            transform: translateY(-10px);
        }
    }

    .warp {

        .warp_cont {
            overflow: hidden;
            .warp_cont_left {
                position: relative;
                .border {
                    width: 25%;
                    height: 2px;
                    background: #c83e66;
                }
                .title {
                    margin-top: 18px;
                    padding-bottom: 20px;
                    font-size: 24px;
                    color: #fff;
                    line-height: 30px;
                    .div1{
                        font-size: 14px;
                        line-height: 22px;
                        color: #d4d5de;  font-style: oblique;
                    }
                }
            }
            .warp_cont_right {
                border-top: 1px solid #2e3148;
                padding: 20px 8px;
                font-size: 12px;
                flex: 1;
                div {
                    font-size: 16px;
                    color: #d4d5de;
                    line-height: 26px;
                    margin-top: 28px;
                    span {
                        font-style: oblique;
                    }
                    a {
                        color: #7681e3;
                    }
                    ul {
                        list-style-type: disc;
                    }
                }
                div:first-child {
                    margin-top: 0;
                }
            }
        }
        .warp_title {
            font-size: 30px;
            color: #ffffff;
            padding-top: 20px;
            font-weight: bold;
        }
        .warp_title2 {
            color: #8c8fa6;
            font-size: 12px;
            margin-top: 14px;
            margin-bottom: 36px;
        }
    }
    .warp .warp_cont .warp_cont_right div{
        width: 100%;
        font-size: 12px;
    }
    .newCenter{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        background: #0b0b18 url('../../public/privacy.png') no-repeat fixed center;
        background-size: 375px;

    }
    .scroll-container{
        width: 90%;
        margin-left: 5%;

    }
    .right-text{
        margin-bottom: 20px;
    }
    .nav-line{
        margin-top: 10px;
        width: 12%;
        height: 3px;
        background: #724be3;
    }
    .bottom-container{
        width: 100%;
        line-height: 30px;
        background: #0f0f1f ;
        text-align: center;
        color: #3b3b5f ;
        font-size: 12px;
        position: absolute;
        bottom: 0
    }
    .protocol-container{
        display: flex;
        color: #3563c1;
        justify-content: center;
    }
    .protocol-distance{
        padding: 10px 5px;
        font-size: 12px;
    }
    .guide_right{
        position: relative;
        right: 25px;
        top: 2px;
    }
    .bottom-line{
        width: 100%;
        height: 1px;
        margin-top: 3px;
        background: #3563c1;
    }
    .direction-line{
        width: 22px;
        height: 1px;
        background: #fff;
        position: relative;
        left: 105%;
        top: 9px;
    }
    .show-line{
       visibility: hidden;
    }
    .showAnim{
        animation: directionLine  0.25s linear ;
    }
    @keyframes directionLine {
        from{
            width: 0;
        }
        to{
            width: 22px;
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
    .showOpacity{
        animation: opacityShow 2s;
        /*animation-delay: 2s;*/
        animation-fill-mode: forwards;
    }
</style>