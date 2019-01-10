<template>
    <div>
        <div id="index" class="index" style="background: #0b0b18">
            <!--头部-->
            <div class="head" style="position: fixed">
                <div class="center1 head-content">

                    <!--左侧logo-->
                    <a class="head-layout-left" href="#"><img src="../../public/irisnet.png" style="width: 130px;" @click="toHome"/></a>

                    <!--右侧内容-->
                    <div class="head-layout-right">
                        <!--导航-->
                        <div class="nav_left">
                            <router-link v-for="(item,index) in $store.state.messages.head.txt" class="item" :class="{'item_selected':item.is}" :to="item.href" :key="index" @click.native="showIndex(index)">
                                {{item.txt}}
                                <div></div>
                            </router-link>
                        </div>
                        <div class="nav_right">
                            <span @click="skipToTest"  @mouseenter="commHide" @mouseleave="commShow"
                                  class="item">{{$store.state.lang=='CN'?'测试网':'Testnet'}}
                                <div></div>
                            </span>
                           <!--分割线-->
                           <div class="hr_vertical"></div>
                            <a class="item" :href="$store.state.lang=='CN' ? 'https://www.irisnet.org/docs/zh/' : 'https://www.irisnet.org/docs/' " target="_blank">
                                {{$store.state.lang=='CN'?'文档':'Docs'}}
                                <div></div>
                            </a>
                           <div class="hr_vertical"></div>
                           <a class="item medium_content" @mouseenter="commHide('medium')" @mouseleave="commShow('medium')" :href="$store.state.lang=='CN' ? 'https://medium.com/irisnet-blog' : 'https://medium.com/irisnet-blog' " target="_blank">
                               <span class="medium_text">{{$store.state.lang=='CN'?'博客':'Blog'}}</span>
                               <img class="medium_img"  :src="toggleMediumImg ? mediumWhiteImg : mediumImg" alt="">
                               <div></div>
                           </a>
                           <!--语言切换-->
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
                       </div>


                    </div>
                </div>
            </div>
            <router-view/>
            <!--内容区-->
            <div class="container">
                <div class="container-center">
                    <div class="bug_bounty_content">
                        <div class="bug_bounty_img">
                            <a :href="$store.state.lang=='CN' ? 'https://mp.weixin.qq.com/s/nN6I8raVV9uq-lsmfi8mvg' : 'https://medium.com/irisnet-blog/opened-irisnet-bug-bounty-program-for-mainnet-launch-30627e00e2e' " target="_blank">
                                <img :src="$store.state.lang=='CN' ? bugBountyLogo : bugBountyLogoEn ">
                            </a>
                        </div>
                    </div>
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
                            </div>
                            <div class="home-container">
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
                                <div class="what_txt_title" style="color: #fff">
                                    {{$store.state.messages.about.title}}
                                    <div class="line" style="margin-top: 20px"></div>
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


                    <div id="#/0/2" class="what">
                        <div class="network-container">
                            <div class="what_txt">
                                <div class="what_txt_title" style="font-size: 30px;color: #fff">
                                    {{$store.state.messages.network.title}}
                                    <div class="line" style="margin-top: 20px"></div>
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
                            </div>
                            <div class="network-img">
                                <img :src="UrlSrc+$store.state.messages.network.src"/>
                            </div>
                        </div>

                    </div>

                    <!-- Roadmap -->
                    <div id="#/0/4" class="what">
                        <div class="collaboration">
                            {{$store.state.messages.roadmap.title}}
                            <div class="line"></div>
                        </div>

                        <div class="roadmap-container-wrap">
                            <!--roadmap-container：包含真实内容+占位div-->
                            <!--由于真实内容太高，会显露过多空白，所以在容器内绝对定位；并且使用占位div来支撑高度-->
                            <div class="roadmap-container">

                                <!--roadmap-container-layout用于4分块的布局-->
                                <div class="roadmap-container-layout">

                                    <!--4个分块-->
                                    <div class="roadmap-item roadmap-item-bottom ">
                                        <p v-show="roadmapIsShowIdx === 0">
                                            {{$store.state.messages.roadmap.list[0].txt}}</p>
                                        <hr v-show="roadmapIsShowIdx === 0" :class="['hr_ver']">
                                        <img @mouseover="mapToggle(0)" src="../../public/Ellipse.png">
                                        <h5 v-if="$store.state.lang!='CN'" @mouseover="mapToggle(0)"><strong>PANGU</strong><span>JAN 2018 - MAR 2019</span></h5>
                                        <h5 v-if="$store.state.lang =='CN'" @mouseover="mapToggle(0)"><strong>盘古</strong><span>2018年1月- 2019年3月</span></h5>
                                    </div>

                                    <div class="roadmap-item roadmap-item-top">
                                        <h5 v-if="$store.state.lang!='CN'" @mouseover="mapToggle(1)"><strong>NÜWA</strong><span>APR 2019 - SEPT 2019</span></h5>
                                        <h5 v-if="$store.state.lang =='CN'" @mouseover="mapToggle(1)"><strong>女娲</strong><span>2019年4月 - 2019年9月</span></h5>
                                        <img @mouseover="mapToggle(1)" src="../../public/Ellipse.png">
                                        <hr v-show="roadmapIsShowIdx === 1" class="hr_ver">
                                        <p v-show="roadmapIsShowIdx === 1">
                                            {{$store.state.messages.roadmap.list[1].txt}}</p>
                                    </div>

                                    <div class="roadmap-item roadmap-item-bottom">
                                        <p v-show="roadmapIsShowIdx === 2">
                                            {{$store.state.messages.roadmap.list[2].txt}}</p>
                                        <hr v-show="roadmapIsShowIdx === 2" class="hr_ver">
                                        <img @mouseover="mapToggle(2)" src="../../public/Ellipse.png">
                                        <h5 v-if="$store.state.lang!='CN'" @mouseover="mapToggle(2)"><strong>KUAFU</strong><span>OCT 2019 - DEC 2019</span></h5>
                                        <h5 v-if="$store.state.lang =='CN'" @mouseover="mapToggle(2)"><strong>夸父</strong><span>2019年10月 - 2019年12月</span></h5>
                                    </div>

                                    <div class="roadmap-item roadmap-item-top">
                                        <h5 v-if="$store.state.lang!='CN'" @mouseover="mapToggle(3)"><strong>HOUYI</strong><span>BEYOND   JAN 2020</span></h5>
                                        <h5 v-if="$store.state.lang =='CN'" @mouseover="mapToggle(3)"><strong>后羿</strong><span>2020年1月之后</span></h5>
                                        <img @mouseover="mapToggle(3)" src="../../public/Ellipse.png">
                                        <hr v-show="roadmapIsShowIdx === 3" class="hr_ver">
                                        <p v-show="roadmapIsShowIdx === 3">
                                            {{$store.state.messages.roadmap.list[3].txt}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="roadmap-container-placeholder"></div>
                        </div>
                    </div>

                    <!--合作伙伴-->
                    <div id="#/0/3" class="what collaboration_container">

                        <div class="collaboration_wrap">
                            <h2>{{collaboration_title}}</h2>
                            <div class="line"></div>

                            <div class="collaboration_two_col">
                                <article class="core">
                                    <h4>{{collaboration_core.title}}</h4>
                                    <comp-collaboration-item :info="collaboration_core"></comp-collaboration-item>
                                </article>
                            </div>
                            <div class="collaboration_two_col">
                                <article class="strategy">
                                    <h4>{{collaboration_strategy.title}}</h4>
                                    <comp-collaboration-item :info="collaboration_strategy"></comp-collaboration-item>
                                </article>
                            </div>
                            <div class="collaboration_two_col">
                                <article class="strategy">
                                    <h4>{{collaboration_ecosystem.title}}</h4>
                                    <comp-collaboration-item :info="collaboration_ecosystem"></comp-collaboration-item>
                                </article>
                            </div>
                            <div class="collaboration_one_col">
                                <article class="investment">
                                    <h4>
                                        <span>{{collaboration_investment.title}}</span>
                                        <span class="subtitle-text">{{collaboration_investment.subtitle}}</span>
                                    </h4>
                                    <comp-collaboration-item :info="collaboration_investment"></comp-collaboration-item>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="what upcoming_content_wrap" id="#/0/5">
                </div>
                <div id="#/0/6" class="what" style="padding:0">
                    <div style="background: #0f0f1f;">
                        <div class="contact" style="max-width:1250px;">
                            <div class="contact_title">
                                {{$store.state.messages.contact.title}}
                                <div class="line"></div>
                            </div>
                            <div class="mail-container">
                                <div class="getmail-container">
                                    <span>{{$store.state.messages.newsLetter.letter}}</span>
                                </div>
                                <div class="ipt-container">
                                    <input :class="showerr ? 'erript' : ''" v-model="mailaddress" type="text" :placeholder="$store.state.messages.placehooder.placehooder">
                                    <p :class="showerr ? '' : 'showerrcontainer'" class="errcontainer">{{$store.state.messages.errEmail.err}}</p>
                                </div>
                                <a href="javascript:">
                                    <div class="sub-container" @click="commitMaile">
                                        <span>{{subscription}}</span>
                                    </div>
                                </a>
                            </div>
                            <div class="contact_warp">
                                <a :href="item.href" target="_blank" @click="blank(item.txt)"
                                   v-for="item in $store.state.messages.contact.img">
                                    <div class="contact_list">
                                        <img class="src" :src="UrlSrc+item.src"/>
                                        <img class="src_selected" :src="UrlSrc+item.src_selected"/>
                                    </div>
                                </a>
                            </div>
                            <div class="info-contianer">
                                <p class="info-center-container">{{$store.state.messages.contactList[0].infotitle}}{{$store.state.messages.contactList[1].infotitle}}{{$store.state.messages.contactList[2].infotitle}}</p>
                                <p></p>
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
                    <img src="../assets/wechat.jpg" class="wechat_img"/>
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
    import axios from "axios"
    let Reveal
    if (process.env.VUE_ENV === 'client') {
        Reveal = require('reveal.js')
    }
    export default {
        name: 'index',
        components: {foot, CompCollaborationItem},
        data() {
            return {
                roadmapIsShowIdx: -1,
                comm: 'community.png',
                down: 'arrow.png',
                wechatIs: false,
                mailaddress: "",
                showerr: false,
                subscription: this.$store.state.messages.submit.Subscribe,
                toggleMediumImg: true,
                mediumImg: require('../assets/medium.png'),
                mediumWhiteImg: require('../assets/medium_white.png'),
                bugBountyLogo: require('../../public/bug_bounty.gif'),
                bugBountyLogoEn: require('../../public/bug_bounty_en.gif')
            }
        },
        computed: {
            ...mapState({
                // 合作伙伴内容
                collaboration_title: state=>state.messages.collaboration.title,
                collaboration_core: state=>state.messages.collaboration.core,
                collaboration_strategy: state=>state.messages.collaboration.strategy,
                collaboration_ecosystem: state=>state.messages.collaboration.ecosystem,
                collaboration_investment: state=>state.messages.collaboration.investment,
                collaboration_counsel: state=>state.messages.collaboration.counsel,
            })
        },
        methods: {
            skipToTest(){
                this.$router.push('/testnets/pc')
            },
            roll() {
                if (document.getElementById(this.$route.hash)) {
                    //window.scrollTo(0, document.getElementById(this.$route.hash).offsetTop-80)
                    console.log(document.getElementById(this.$route.hash).offsetTop,"滚动的距离")
                    this.scroll(document.getElementById(this.$route.hash).offsetTop + 100)
                }
            },
            toHome(){
                let homeDomOffsetTop = 0;
                this.scroll(homeDomOffsetTop);
                this.$store.state.messages.head.txt.map((v) => {
                   return v.is = false;
                });
            },
            jump(){
                //解决锚点点击一次以后滚动效果不生效的问题
                this.scroll(742)
            },
            scroll(top) {
                $('#app').animate({
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
            setToggleMediumImg(medium){
                if(medium === 'medium'){
                    this.toggleMediumImg = !this.toggleMediumImg;
                }
            },
            commShow(medium) {
                this.setToggleMediumImg(medium);
                this.comm = '../public/community.png';
            },
            commHide(medium) {
                this.setToggleMediumImg(medium);
                this.comm = '../public/community_selected.png';
            },

            // 控制Roadmap显示哪一项
            mapToggle(idx){
                this.roadmapIsShowIdx = idx;
            },
            // textShow可废弃
            textShow(index) {
                this.list[index].is = true;
            },
            // textHIde可废弃
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
            },
            commitMaile(){
                let address =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(address.exec(this.mailaddress)){
                    this.showerr = false;
                }else {
                    this.showerr = true;
                    let _this = this;
                    setTimeout(function () {
                        _this.showerr = false;
                    },2000)
                    return
                }
                axios({
                    method: 'post',
                    url:"/",
                    data: {
                        email:this.mailaddress,
                    }
                }).then((data)=>{
                    this.subscription = this.$store.state.messages.submit.success;
                    let _this = this;
                    setTimeout(function () {
                        _this.subscription = _this.$store.state.messages.submit.Subscribe;
                        _this.mailaddress = "";
                    },2000)
                })
                .catch((e)=>{
                })
            }
        },
        mounted: function () {
            this.roll();
        },
        watch: {
            '$route': 'roll'
        },
    }
</script>

<style scoped lang='less'>
    @import "../assets/style/index.less";
</style>