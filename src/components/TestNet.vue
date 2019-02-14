<template>
    <div class="testnet_page">
        <div class="index" style="height:100%;" @click="closeMenu">
            <div class="container">
                <div class="head" style="position: fixed">
                    <div class="center1 head-content">
                        <!--左侧logo-->
                        <a class="head-layout-left" href="#"><img src="../../public/irisnet.png" style="width: 130px;" @click="goHome"/></a>

                        <!--右侧内容-->
                        <div class="head-layout-right">
                            <div class="nav_left">
                                <a :href="'/?lang='+$store.state.lang+item.href" v-for="item in $store.state.messages.head.txt"  class="item">
                                    {{item.txt}}
                                    <div></div>
                                </a>
                            </div>
                            <!--导航-->

                            <div class="nav_right">
                                 <span @click="skipToMainnet"  @mouseenter="commHide" @mouseleave="commShow"
                                       class="item">{{$store.state.lang=='CN'?'主网':'Mainnet'}}
                                    <div></div>
                                </span>
                                <div class="hr_vertical"></div>

                                <span @click="skipToTest"  @mouseenter="commHide" @mouseleave="commShow"
                                     class="item">{{$store.state.lang=='CN'?'测试网':'Testnet'}}
                                    <div></div>
                                </span>
                                <!--分割线-->
                                <div class="hr_vertical"></div>
                                <a class="item" :href="$store.state.lang=='CN' ? 'https://www.irisnet.org/docs/zh/' : 'https://www.irisnet.org/docs/' " target="_blank">
                                    {{$store.state.lang=='CN'?'文档':'Docs'}}
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
                <div class="testnet_content">
                    <div class="testnet_title">
                        <p>{{title}}</p>
                    </div>
                    <div class="testnet_info_content">
                        <p>
                            {{infomation}}
                            <a href="https://testnet.irisplorer.cn/#/home" target="_blank">{{explorerHref}}</a>
                            {{informationFragment}}{{download}}
                            <a :href="downloadHref" target="_blank">{{downloadword}}</a>
                            {{downloadEndWord}}
                            <a :href="testnetHereHref" target="_blank">{{testnetplorerHref}}</a>
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
                            <div class="testnet_hover_left" @mouseover="onMouseOver('incentivizedTestnet')" @mouseout="onmouseout()" @click.stop="showIncentivitedMenu()" :class="flShowMenu ? 'testnet_hover_left_active' : '' ">
                                <div class="tesnet_hover_incentivize">
                                    <span>{{incentivizedInfo}}</span>
                                    <span class="select_arrow_img">
                                    <img :src="flShowArrowImg ? activeArrow : defaultArrow">
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
                            <div class="testnet_hover_right" @mouseover="onMouseOver('baas')" @mouseout="onmouseout()" @click.stop="showBaasMenu()" :class="flShowBassMenu ? 'testnet_hover_right_active' : '' ">
                                <div class="testnet_hover_booststrap">
                                    <span>{{baasMenu}}</span>
                                    <span class="select_arrow_img">
                                    <img :src="flShowBassArrowImg ? activeArrow : defaultArrow">
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
                                    <a href="https://baas.zhigui.com/IRISnet" target="_blank">
                                        <img src="../../public/zgkjlogo.svg">
                                    </a>
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
                                        <a href="https://irisnet.wancloud.cloud/#/" target="_blank">
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
                                    <a href="https://irisnet.wancloud.cloud/#/" target="_blank">
                                        <img src="../../public/wancloud.png">
                                    </a>
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
                testnetHereHref:"",
                informationFragment:"",
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

                flClickArrowStatus: false,
                flClickBaasArrowStatus: false,
                flClickGenesisStatus: false,

                flShowArrowImg: false,
                flShowBassArrowImg: false,
                flshowGenesisArrowImg : false,

                toggleMediumImg: true,
                mediumImg: require('../assets/medium.png'),
                mediumWhiteImg: require('../assets/medium_white.png'),
                download:"",
                downloadword:"",
                downloadHref:"",
                downloadEndWord:""
            }
        },
        mounted(){
            $('#app').animate({
                    scrollTop: 0
                }, 10
            );
            this.getInfo();
        },
        methods:{
            goHome(){
                this.$router.push(`/#`)
            },
            onMouseOver(mouseOverTitle){
                if(mouseOverTitle === "incentivizedTestnet"){
                    this.flShowArrowImg = true;
                }else if(mouseOverTitle === 'baas'){
                    this.flShowBassArrowImg = true;
                }else if(mouseOverTitle === 'genesis'){
                    this.flshowGenesisArrowImg = true;
                }
            },
            onmouseout(){
                if(!this.flClickArrowStatus){
                    this.flShowArrowImg = false;
                }
                if(!this.flClickBaasArrowStatus){
                    this.flShowBassArrowImg = false;
                }
                if(!this.flClickGenesisStatus){
                    this.flshowGenesisArrowImg = false;

                }
            },
            closeMenu(){
                this.flClickArrowStatus = false;
                this.flClickBaasArrowStatus = false;
                this.flClickGenesisStatus = false;

                this.flShowArrowImg = false;
                this.flShowBassArrowImg = false;
                this.flshowGenesisArrowImg = false;

                this.flShowMenu = false;
                this.flshowhackathonGameMenu = false;
                this.flShowBassMenu = false;
            },
            format(param){
                return message[this.$store.state.lang=='CN'?'cn':'en'].testnet[param];
            },
            getInfo(){
                this.title = this.format('title');
                this.download = this.format('download');
                this.downloadword = this.format('downloadword');
                this.downloadHref = this.format('downloadHref');
                this.downloadEndWord = this.format('downloadEndWord');
                this.infomation = this.format('infomation');
                this.explorerHref = this.format('explorerHref');
                this.testnetHereHref = this.format('testnetHereHref');
                this.informationFragment = this.format('informationFragment');
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
                this.flClickGenesisStatus = false;
                this.flClickArrowStatus = true;
                this.flClickBaasArrowStatus = false;

                this.flShowArrowImg = true;
                this.flShowBassArrowImg = false;
                this.flshowGenesisArrowImg = false;

                this.flShowMenu =! this.flShowMenu;
                this.flshowhackathonGameMenu = false;
                this.flShowBassMenu = false;
            },
            showBaasMenu(){
                this.flClickGenesisStatus = false;
                this.flClickBaasArrowStatus = true;
                this.flClickArrowStatus = false;

                this.flShowBassArrowImg = true;
                this.flShowArrowImg = false;
                this.flshowGenesisArrowImg = false;

                this.flshowhackathonGameMenu = false;
                this.flShowMenu = false;
                this.flShowBassMenu =! this.flShowBassMenu
            },
            showHackathonGameMenu(){
                this.flClickBaasArrowStatus = false;
                this.flClickGenesisStatus = true;
                this.flClickArrowStatus = false;

                this.flshowGenesisArrowImg = true;
                this.flShowArrowImg = false;
                this.flShowBassArrowImg = false;

                this.flShowMenu = false;
                this.flShowBassMenu = false;
                this.flshowhackathonGameMenu =! this.flshowhackathonGameMenu;
            },
            setToggleMediumImg(){
                this.toggleMediumImg = !this.toggleMediumImg;
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
            skipToMainnet(){
                this.$router.push('/mainnet')
            },
            skipToTest() {
                this.$router.push('/testnets')
            },
            skipToHackathon() {
                this.$router.push('/hackathon')
            },
        }
    }
</script>

<style scoped lang='less'>
@import "../assets/style/testnet";



</style>