<template>
    <div>
        <div class="app" style="width: 100%;height:100%;">
            <div class="head">
                <img src="../assets/app/irislogo.png" class="imglogo"  @click="goToHome">
                <div class="div_en">
                    <img src="../assets/app/list.png" @click="menuIs=!menuIs"/>
                    <span @click="changeLang('CN')" v-if="$store.state.lang!='CN'">
                        CN
                    </span>
                    <span  @click="changeLang('EN')" v-if="$store.state.lang=='CN'">
                        EN
                    </span>
                </div>

            </div>
            <div class="menu" v-show="menuIs">
                <section>
                    <a @click="skipMainnet">{{$store.state.lang=='CN'? '主网' :'Mainnet'}}</a>
                </section>
                <section>
                    <a @click="skipTestNet">{{$store.state.lang=='CN'?'测试网':'Testnet'}}</a>
                </section>
                <section v-for="(item,index) in links">
                    <a v-if="item.href.indexOf('ttp')==-1" @click="gotojump(index,item)">
                        {{item.txt}}
                    </a>
                    <a v-if="item.href.indexOf('ttp')!=-1" :href="'h'+item.href" @click="gotojump(index)">
                        {{item.txt}}
                    </a>
                </section>
                <section>
                    <a :href="$store.state.lang=='CN' ? 'https://www.irisnet.org/docs/zh/' : 'https://www.irisnet.org/docs/'" target="_blank">{{$store.state.lang=='CN'?'文档':'Docs'}}</a>
                </section>

                <section>
                    <a class="item medium_img_content" :href="$store.state.lang=='CN' ? 'https://medium.com/irisnet-blog' : 'https://medium.com/irisnet-blog' " target="_blank">
                        <span>{{$store.state.lang=='CN'?'博客':'Blog'}}</span>
                        <img class="medium_img" src="../assets/mobile_medium.png">
                    </a>
                </section>
            </div>

            <div class="container">
                <div class="mainnet_img_content">
                    <img :src="$store.state.lang=='CN' ? mainnetImgZH : mainnetImgEN ">
                    <div class="link_btn_container">
                        <div class="link_btn"><a style="color: #3BC1AA" href="https://www.irisplorer.io/" target="_blank">{{$store.state.lang=='CN'?'IRIS 浏览器':'IRIS Explorer'}}</a></div>
                        <div class="wallet_link_btn link_btn"><a href="https://www.rainbow.one/" target="_blank">{{$store.state.lang=='CN'?'Rainbow 钱包':'Rainbow Wallet'}}</a></div>
                    </div>
                </div>
                <div class="announcement_content">
                    <div class="announcement_title">
                        <p>{{$store.state.lang=='CN'?'公告':'Announcements'}}</p>
                        <p class="hr_vertical"></p>
                    </div>
                    <ul class="announcement_list_content">
                        <li v-for="item in announcementList" v-show="item.href">
                            <div class="img_content">
                                <a :href="item.href ? item.href : 'javascript:;'"
                                   :class="item.href ? 'pointer' : 'default' " target="_blank">
                                    <img :src="item.src">
                                    <div class="img_text">
                                        <span>{{item.imgtext}}</span>
                                        <p class="timestamp_content">{{item.timestamp}}</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="join_warp">
                    <div class="join_content">
                        <p>{{$store.state.lang=='CN'? '加入社区' :'Join Community'}}</p>
                        <p class="hr_vertical"></p>
                    </div>
                    <div class="join_ways_container">
                        <div class="join_ways_content">
                            <div class="join_ways_img">
                                <img src="../assets/app/qq.png">
                            </div>
                            <div class="join_ways_info">
                                <div>
                                    <p>{{qq}}</p>
                                    <p class="info_address">{{qqNum}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a :href="riotAddressHref" class="rito_content" target="_blank">
                        <div class="join_ways_rito">
                            <div class="join_ways_rito_content">
                                <div class="join_ways_rito_content_img">
                                    <img src="../assets/app/riot.png">
                                </div>
                                <div class="join_ways_rito_info">
                                    <div>
                                        <p>{{riot}}</p>
                                        <p class="riot_address">{{riotAddress}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import message from '../common/message';
    let Reveal
    if (process.env.VUE_ENV === 'client') {
    Reveal = require('reveal.js')
    }
	export default {
        name: "MainNetApp",
        data(){
            return {
                riotAddressHref: '',
                qq:"",
                qqNum:"",
                riot:"",
                riotAddress:"",
            }
        },
        watch:{
            $route(){
                console.log(this.$store.lang)
            }

        },
        methods: {
            skipMainnet(){
                this.$router.push('/mainnet/app');
            },
            skipTestNet(){
                this.$router.push('/testnets/app');
            },
            skipHackathon(){
                this.$router.push('/hackathon/app');
            },
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
            goToHome(){
                this.$router.push(`/app?lang=${this.$store.state.lang}`)
            },
            format(param){
                return message[this.$store.state.lang=='CN'?'cn':'en'].testnet[param];
            },
            formatMessage(){
                this.qq = this.format('qq');
                this.qqNum = this.format('qqNum');
                this.riot = this.format('riot');
                this.riotAddress = this.format('riotAddress');
                this.riotAddressHref = this.format('riotAddressHref');
            },
            changeLang(lang){
                this.$store.state.lang = lang;
                this.formatMessage();
                this.links = message[lang.toLowerCase()].head.txt;
                this.announcementList = message[lang.toLowerCase()].announcements;
                this.mainnetImg = message[lang.toLowerCase()].mainnetImg;
            },
            gotojump(index,item){
                this.menuIs = false;
                //解决点击导航后无法再次重复导航问题
                new Promise((resolve)=>{
                    this.$router.push(`/app?lang=${this.$store.state.lang}`);
                    resolve();
                }).then(()=>{
                    this.$router.push(`/app/${item.href}`);
                })
            },
            scroll(top) {
                $('html,body').animate({
                        scrollTop: top
                    }, 500
                );
            },
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
                links:message[this.$store.state.lang=='CN'?'cn':'en'].head.txt,
                announcementList:message[this.$store.state.lang=='CN'?'cn':'en'].announcements,
                mainnetImg:message[this.$store.state.lang=='CN'?'cn':'en'].mainnetImg,
                join:"",
                qq:"",
                qqNum:"",
                riot:"",
                riotAddress:"",
                riotAddressHref:"",
                zigTitle:"",
                zigIntroduce:"",
                wanCloudTitle:"",
                wanCloudInfo:"",
                wanCloudIntroduce:"",
                testlink:false,
                mainnetImgZH: require('../../public/mainnet_title_zh.png'),
                mainnetImgEN: require('../../public/mainnet_title_en.png')

            }
        },
        mounted(){
            this.formatMessage();

        }

    }
</script>

<style scoped lang="less">
    @import "../assets/style/mainnetApp.less";
</style>