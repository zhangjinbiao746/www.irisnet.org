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
            <div class="newCenter">
                <div class="warp">
                    <div class="testnet_title">{{title}}</div>
                    <p class="testnet_info">
                        {{infomation}}
                        <a href="https://testnet.irisplorer.cn/#/home" target="_blank">{{explorerHref}}</a>
                        {{infomationFragment}}
                        <a href="https://testnet.irisplorer.cn/#/home" target="_blank">{{testnetplorerHref}}</a>
                        {{testnetplorerStatus}}
                    </p>
                    <div class="join_container">
                        <span>{{howToJoin}}</span>
                        <a :href="howToJoinHref">
                            <div class="help_img">
                                <img src="../assets/app/defaulthelp.png">
                            </div>
                        </a>
                    </div>
                    <div class="incentivized_title">
                       <span>{{incentivizedInfo}}</span>
                    </div>
                    <div class="incentivized_menu">
                        <a :href="incentivizedMenuHref">
                            <div class="menu_item_global">
                                <span>{{incentivizedMenu}}</span>
                            </div>
                        </a>
                        <a :href="incentivizedFaqHref">
                            <div class="menu_item_global">
                                <span>{{incentivizedFaq}}</span>
                            </div>
                        </a>
                        <a :href="incentivizedresultHref">
                            <div class="menu_item_global">
                                <span>{{incentivizedresult}}</span>
                            </div>
                        </a>
                        <a :href="incentivizedtaskHref">
                            <div class="menu_item_global">
                                <span>{{incentivizedtask}}</span>
                            </div>
                        </a>
                    </div>
                    <div class="baas_title">
                        <span>{{baasMenu}}</span>
                    </div>
                    <div class="baas_menu">
                        <a :href="baasMenuHowApplyHref">
                            <div class="menu_item_global">
                                <span>{{baasMenuAboutEffect}}</span>
                            </div>
                        </a>
                        <a :href="baasMenuHowApplyHref">
                            <div class="menu_item_global">
                                <span>{{baasMenuHowApply}}</span>
                            </div>
                        </a>
                    </div>
                    <div class="faq_container">
                        <span>{{faq}}</span>
                        <a :href="faqHref">
                            <div class="faq_img">
                                <img src="../assets/app/defaulthelp.png">
                            </div>
                        </a>
                    </div>
                    <div class="genesis_container">
                        <span>{{gameOfGenesis}}</span>
                    </div>
                    <div class="genesis_menu">
                        <a :href="whatGenesisHref" >
                            <div class="menu_item_global">
                                <span>{{whatGenesis}}</span>
                            </div>
                        </a>
                        <a :href="howWinHref">
                            <div class="menu_item_global">
                                <span>{{howWin}}</span>
                            </div>
                        </a>
                    </div>
                    <div class="community_container">
                        <span>{{join}}</span>
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
                    <a :href="riotAddressHref">
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
                <div class="zig_content">
                    <div class="zig_img_container">
                        <img src="../../public/zgkjlogo.svg">
                    </div>
                    <div class="zig_title_link">
                        <span>{{zigTitle}}</span>
                        <div class="zig_link_img">
                            <img src="../../public/link.png">
                        </div>
                    </div>
                    <div class="zig_info_introduce">
                        <span>{{zigIntroduce}}</span>
                    </div>
                    <div class="wancloud_img">
                        <img src="../assets/app/mobilewancloud.png">
                    </div>
                    <div class="wancloud_title">
                        <span>{{wanCloudTitle}}</span>
                        <div class="wancloud_link_img">
                            <img src="../../public/link.png">
                        </div>
                    </div>
                    <div class="wancloud_info_introduce">
                        <p>{{wanCloudInfo}}</p>
                        <p>{{wanCloudIntroduce}}</p>
                    </div>
                </div>

            </div>
            <div class="menu" v-show="menuIs">
                <section v-for="(item,index) in links">
                    <a v-if="item.href.indexOf('ttp')==-1" @click="gotojump(index,item)">
                        {{item.txt}}
                    </a>
                    <a v-if="item.href.indexOf('ttp')!=-1" :href="'h'+item.href" @click="gotojump(index)">
                        {{item.txt}}
                    </a>
                </section>
                <section>
                    <a @click="skipTestNet">{{$store.state.lang=='CN'?'测试网':'Testnet'}}</a>
                </section>

                <section>
                    <a @click="skipHackathon">{{$store.state.lang=='CN'?'黑客松':'Hackathon'}}</a>
                </section>
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
        name: "TestNetApp",
        watch:{
            $route(){
                console.log(this.$store.lang)
            }

        },
        methods: {
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
                this.$router.push(`/newApp?lang=${this.$store.state.lang}`)
            },
            format(param){
                return message[this.$store.state.lang=='CN'?'cn':'en'].testnet[param];
            },
            getInfo(){
                this.title = this.format('title');
                this.infomation = this.format('infomation');
                this.explorerHref = this.format('explorerHref');
                this.infomationFragment = this.format('infomationFragment');
                this.testnetplorerHref = this.format('testnetplorerHref');
                this.testnetplorerStatus = this.format('testnetplorerStatus');
                this.howToJoin = this.format('howToJoin');
                this.howToJoinHref = this.format('howToJoinHref');
                this.incentivizedInfo = this.format('incentivizedInfo');
                this.incentivizedMenu = this.format('incentivizedMenu');
                this.incentivizedMenuHref = this.format('incentivizedMenuHref');
                this.incentivizedFaq = this.format('incentivizedFaq');
                this.incentivizedFaqHref = this.format('incentivizedFaqHref');
                this.incentivizedresult = this.format('incentivizedresult');
                this.incentivizedresultHref = this.format('incentivizedresultHref');
                this.incentivizedtask = this.format('incentivizedtask');
                this.incentivizedtaskHref = this.format('incentivizedtaskHref');
                this.baasMenu = this.format('baasMenu');
                this.baasMenuAboutEffect = this.format('baasMenuAboutEffect');
                this.baasMenuAboutEffectHref = this.format('baasMenuAboutEffectHref');
                this.baasMenuHowApply = this.format('baasMenuHowApply');
                this.baasMenuHowApplyHref = this.format('baasMenuHowApplyHref');
                this.faq = this.format('faq');
                this.faqHref = this.format('faqHref');
                this.gameOfGenesis = this.format('gameOfGenesis');
                this.whatGenesis = this.format('whatGenesis');
                this.whatGenesisHref = this.format('whatGenesisHref');
                this.howWin = this.format('howWin');
                this.howWinHref = this.format('howWinHref');
                this.join = this.format('join');
                this.qq = this.format('qq');
                this.qqNum = this.format('qqNum');
                this.riot = this.format('riot');
                this.riotAddress = this.format('riotAddress');
                this.riotAddressHref = this.format('riotAddressHref');
                this.zigTitle = this.format('zigTitle');
                this.zigIntroduce = this.format('zigIntroduce');
                this.wanCloudTitle = this.format("wanCloudTitle");
                this.wanCloudInfo = this.format('wanCloudInfo');
                this.wanCloudIntroduce = this.format('wanCloudIntroduce');
            },
            changeLang(lang){
                this.$store.state.lang = lang;
                this.getInfo();
                this.links = message[lang.toLowerCase()].head.txt;
            },
            gotojump(index,item){
                this.menuIs = false;
                //解决点击导航后无法再次重复导航问题
                new Promise((resolve)=>{
                    this.$router.push(`/newApp?lang=${this.$store.state.lang}`);
                    resolve();
                }).then(()=>{
                    this.$router.push(`/newApp#/${item.href}`);
                }).then(()=>{
                    if(index == 0){
                        this.scroll(0)
                    }else if(index == 1){
                        this.scroll(364)
                    }else if(index == 2){
                        this.scroll(1036)
                    }else if(index == 3){
                        this.scroll(1678)
                    }else if(index == 4){
                        this.scroll(2278)
                    }else if(index == 5){
                        this.scroll(3542)
                    }else if(index == 6){
                        this.scroll(4549)
                    }
                })
            },
            scroll(top) {
                $('body,html').animate({
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
                wechatIs: false,
                links:message[this.$store.state.lang=='CN'?'cn':'en'].head.txt,
                title:'',
                infomation:"",
                explorerHref:"",
                infomationFragment:"",
                testnetplorerHref:"",
                testnetplorerStatus:"",
                howToJoin:"",
                howToJoinHref:"",
                incentivizedInfo:"",
                incentivizedMenu:"",
                incentivizedMenuHref:"",
                incentivizedFaq:"",
                incentivizedFaqHref:"",
                incentivizedresult:"",
                incentivizedresultHref:"",
                incentivizedtask:"",
                incentivizedtaskHref:"",
                baasMenu:"",
                baasMenuAboutEffect:"",
                baasMenuAboutEffectHref:"",
                baasMenuHowApply:"",
                baasMenuHowApplyHref:"",
                faq:"",
                faqHref:"",
                gameOfGenesis:"",
                whatGenesis:"",
                whatGenesisHref:"",
                howWin:"",
                howWinHref:"",
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
            }
        },
        mounted(){
            this.getInfo();

        }

    }
</script>

<style scoped lang='less'>
    @import "../assets/style/testnetapp";
</style>