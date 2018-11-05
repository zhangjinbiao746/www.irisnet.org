<template>
    <div class="testnet_page">
        <div class="index" style="height:100%;">
            <div class="container">
                <div class="head" style="">
                    <div class="center1 head-content">
                        <!--左侧logo-->
                        <a class="head-layout-left" href="#"><img src="../../public/irisnet.png" style="width: 130px;"/></a>

                        <!--右侧内容-->
                        <div class="head-layout-right">

                            <!--导航-->
                            <a :href="'/?lang='+$store.state.lang+item.href" v-for="item in $store.state.messages.head.txt"  class="item">
                                {{item.txt}}
                                <div></div>
                            </a>

                            <!--分割线-->
                            <div class="hr_vertical"></div>

                            <span @click="skipToTest"  @mouseenter="commHide" @mouseleave="commShow"
                                  class="item">{{$store.state.lang=='CN'?'测试网':'Testnet'}}
                            <div></div>
                        </span>

                            <div class="hr_vertical"></div>

                            <span @click="skipToHackathon"  @mouseenter="commHide" @mouseleave="commShow"
                                  class="item">{{$store.state.lang=='CN'?'黑客松':'Hackathon'}}
                            <div></div>
                        </span>

                            <!--Community-->

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
                <div class="testnet_content">
                    <div class="testnet_title">
                        <p>{{title}}</p>
                    </div>
                    <div class="testnet_info_content">
                        <p>
                            {{infomation}}
                            <a href="https://testnet.irisplorer.cn/#/home" target="_blank">{{explorerHref}}</a>
                            {{infomationFragment}}
                            <a href="https://testnet.irisplorer.cn/#/home" target="_blank">{{testnetplorerHref}}</a>
                            {{testnetplorerStatus}}
                        </p>
                    </div>
                    <div class="testnet_info_join_content">
                        <a :href="howToJoinHref" target="_blank">
                            <div class="testnet_how_join">
                                <span>{{howToJoin}}</span>
                                <div class="testnet_how_join_img">
                                    <a :href="howToJoinHref" target="_blank">
                                        <img class="default_help_img" src="../assets/app/defaulthelp.png">
                                        <img class="highlight_help_img" src="../assets/app/highlight.png">
                                    </a>
                                </div>
                            </div>
                        </a>
                        <div class="testnet_hover_content">
                            <div class="testnet_hover_left" @click.stop="showIncentivitedMenu()" :class="flShowMenu ? 'testnet_hover_left_active' : '' ">
                                <div class="tesnet_hover_incentivize">
                                    <span>{{incentivizedInfo}}</span>
                                    <span class="select_arrow_img">
                                    <img :src="flShowMenu ? activeArrow : defaultArrow">
                                </span>
                                </div>
                                <a :href="incentivizedMenuHref" target="_blank">
                                    <div class="tesnet_hover_introduce">
                                        <span>{{incentivizedMenu}}</span>
                                    </div>
                                </a>
                                <a :href="incentivizedFaqHref" target="_blank">
                                    <div class="testnet_hover_faq">
                                        <span>{{incentivizedFaq}}</span>
                                    </div>
                                </a>
                                <a :href="incentivizedresultHref" target="_blank">
                                    <div class="testnet_hover_result">
                                        <span>{{incentivizedresult}}</span>
                                    </div>
                                </a>
                                <a :href="incentivizedtaskHref" target="_blank">
                                    <div class="testnet_hover_Tasks">
                                        <span>{{incentivizedtask}}</span>
                                    </div>
                                </a>
                            </div>
                            <div class="testnet_hover_right" @click.stop="showBaasMenu()" :class="flShowBassMenu ? 'testnet_hover_right_active' : '' ">
                                <div class="testnet_hover_booststrap">
                                    <span>{{baasMenu}}</span>
                                    <span class="select_arrow_img">
                                    <img :src="flShowBassMenu ? activeArrow : defaultArrow">
                                </span>
                                </div>
                                <a :href="baasMenuAboutEffectHref" target="_blank">
                                    <div class="testnet_hover_available">
                                        <span>{{baasMenuAboutEffect}}</span>
                                    </div>
                                </a>
                                <a :href="baasMenuHowApplyHref" target="_blank">
                                    <div class="testnet_hover_BaaS">
                                        {{baasMenuHowApply}}
                                    </div>
                                </a>
                            </div>
                        </div>
                        <a :href="faqHref" target="_blank">
                            <div class="testnet_faq">
                                <span>{{faq}}</span>
                                <div class="testnet_faq_img">
                                    <img class="default_help_img" src="../assets/app/defaulthelp.png">
                                    <img class="highlight_help_img" src="../assets/app/highlight.png">
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="testnet_genesis_hover_container" @click.stop="showHackathonGameMenu" :class="flshowhackathonGameMenu ? 'testnet_genesis_hover_container_active' : ''">
                        <div class="testnet_genesis">
                            <span>{{gameOfGenesis}}</span>
                            <span class="select_arrow_img">
                        <img :src="flshowhackathonGameMenu ? activeArrow : defaultArrow">
                    </span>
                        </div>
                        <a :href="whatGenesisHref" target="_blank">
                            <div class="testnet_hover_introduce_what">{{whatGenesis}}</div>
                        </a>
                        <a :href="howWinHref" target="_blank">
                            <div class="testnet_hover_win">{{howWin}}</div>
                        </a>
                    </div>

                    <div class="testnet_community">
                        <span>{{join}}</span>
                    </div>
                    <div class="testnet_join_way">
                        <div class="testnet_join_way_group">
                            <div class="testnet_img_group">
                                <img src="../assets/app/qq.png">
                            </div>
                            <div class="testnet_group_number">
                                <p>{{qq}}</p>
                                <p>{{qqNum}}</p>
                            </div>
                        </div>
                        <div class="testnet_join_way_riot">
                            <div class="testnet_img_riot">
                                <img src="../assets/app/riot.png">
                            </div>
                            <div class="testnet_riot_number">
                                <p>{{riot}}</p>
                                <p><a :href="riotAddressHref" target="_blank">{{riotAddress}}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="zgblock_container">
                    <div class="zgblock_wrap">
                        <div class="zgblock_info_container">
                            <div class="zgblock_info_img_container">
                                <div class="zgblock_info_img">
                                    <img src="../../public/zgkjlogo.svg">
                                    <!--<svg style="width: 100px;height: 50px;" src="../../public/zgkjlogo.svg" ></svg>-->
                                </div>
                            </div>
                            <div class="zgblock_introduce_container">
                                <div class="zgblock_introduce_title_container">
                                    <span>{{zigTitle}}</span>
                                    <div class="zgblock_introduce_img">
                                        <a href="https://baas.zhigui.com/IRISnet" target="_blank">
                                            <img src="../../public/link.png">
                                        </a>
                                    </div>
                                </div>
                                <div class="zgblock_introduce_info">
                                    {{zigIntroduce}}
                                </div>
                            </div>
                        </div>
                        <div class="wanCloud_info_container">
                            <div class="wanCloud_info_introduce">
                                <div class="wanCloud_info_title_container">
                                    <div class="wanCloud_info_title_content">
                                        <span>{{wanCloudTitle}}</span>
                                    </div>
                                    <div class="wanCloud_info_img">
                                        <a href=" https://irisnet.wancloud.cloud/#/" target="_blank">
                                            <img src="../../public/link.png">
                                        </a>
                                    </div>
                                </div>
                                <div class="wanCloud_info_content">
                                    <p>{{wanCloudInfo}}</p>
                                    <p>{{wanCloudIntroduce}}</p>
                                </div>
                            </div>
                            <div class="wanCloud_logo_container">
                                <div class="wanCloud_logo">
                                    <img src="../../public/wancloud.png">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <foot></foot>
        </div>
    </div>
</template>

<script>
    import foot from './foot';
    import headr from './head';
    import message from '../common/message';
    export default {
        name: "testNet",
        components: {foot,headr},
        data(){
            return {
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
                flShowMenu: false,
                flShowBassMenu: false,
                flshowhackathonGameMenu: false,
                defaultArrow:require("../assets/app/arrow.png"),
                activeArrow:require("../assets/app/arrowblue.png"),
                comm: 'community.png',
                down: 'arrow.png',
            }
        },
        mounted(){
            $('body,html').animate({
                    scrollTop: 0
                }, 10
            );
            this.getInfo();
        },
        methods:{
            closeMenu(){
                this.flShowMenu = false;
                this.flshowhackathonGameMenu = false;
                this.flShowBassMenu = false;
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
            showIncentivitedMenu(){
                this.flShowMenu =! this.flShowMenu;
                this.flshowhackathonGameMenu = false;
                this.flShowBassMenu = false;
            },
            showBaasMenu(){
                this.flshowhackathonGameMenu = false;
                this.flShowMenu = false;
                this.flShowBassMenu =! this.flShowBassMenu
            },
            showHackathonGameMenu(){
                this.flShowMenu = false;
                this.flShowBassMenu = false;
                this.flshowhackathonGameMenu =! this.flshowhackathonGameMenu;
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
            skipToTest() {
                this.$router.push('/testnets/pc')
            },
            skipToHackathon() {
                this.$router.push('/hackathon/pc')
            },
        }
    }
</script>

<style scoped lang='less'>
@import "../assets/style/testnet";



</style>