<template>
    <div class="testnet_page">
        <div class="index">
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
                        <div>
                            <p>{{testnetFirstParagraph}}</p>
                            <p>{{testnetSecendParagraph}}</p>
                            <p>{{testnetText}}</p>
                        </div>
                        <div class="testnet_info_join_content">
                            <div class="link_btn_content">
                                <a :href="howToJoinHref" target="_blank" class="link_common_style">
                                    <div class="testnet_link_btn_content">
                                        <span>{{howToJoin}}</span>
                                        <div class="testnet_link_btn_content_img">
                                            <img class="default_help_img" src="../assets/app/defaulthelp.png">
                                            <img class="highlight_help_img" src="../assets/app/highlight.png">
                                        </div>
                                    </div>
                                </a>
                                <a :href="faqHref" target="_blank" class="link_common_style">
                                    <div class="testnet_link_btn_content">
                                        <span>{{faq}}</span>
                                        <div class="testnet_link_btn_content_img">
                                            <img class="default_help_img" src="../assets/app/defaulthelp.png">
                                            <img class="highlight_help_img" src="../assets/app/highlight.png">
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="link_btn_content">
                                <a :href="irisplorerHref" target="_blank" class="link_common_style">
                                    <div class="testnet_link_btn_content">
                                        <span>{{irisplorerBtn}}</span>
                                        <div class="testnet_link_btn_content_img">
                                            <img class="default_help_img" src="../assets/app/explorerDefault.png">
                                            <img class="highlight_help_img" src="../assets/app/explorerHighLight.png">
                                        </div>
                                    </div>
                                </a>
                                <a :href="downloadRainbowAppHref" target="_blank" class="link_common_style">
                                    <div class="testnet_link_btn_content">
                                        <span>{{rainbowAppBtn}}</span>
                                        <div class="testnet_link_btn_content_img">
                                            <img class="default_help_img" src="../assets/app/walletDefault.png">
                                            <img class="highlight_help_img" src="../assets/app/walletHighLight.png">
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
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
                testnetFirstParagraph:"",
                testnetHereHref:"",
                testnetSecendParagraph:"",
                testnetText:"",
                linkText:"",
                faq:"",
                faqHref:"",
                join:"",
                qq:"",
                qqNum:"",
                riot:"",
                howToJoin:"",
                howToJoinHref:"",
                riotAddress:"",
                riotAddressHref:"",
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
                flShowGenesisArrowImg : false,
                toggleMediumImg: true,
                mediumImg: require('../assets/medium.png'),
                mediumWhiteImg: require('../assets/medium_white.png'),
                irisplorerBtn:'',
                irisplorerHref:'',
                rainbowAppBtn: '',
                downloadRainbowAppHref:''
            }
        },
        mounted(){
            $('html,body').animate({
                    scrollTop: 0
                }, 10
            );
            this.getInfo();
        },
        methods:{
            goHome(){
                this.$router.push(`/#`)
            },
            format(param){
                return message[this.$store.state.lang=='CN'?'cn':'en'].testnet[param];
            },
            getInfo(){
                this.title = this.format('title');
                this.testnetFirstParagraph = this.format('testnetFirstParagraph');
                this.testnetHereHref = this.format('testnetHereHref');
                this.testnetSecendParagraph = this.format('testnetSecendParagraph');
                this.testnetText = this.format('testnetText');
                this.linkText = this.format('linkText');
                this.faq = this.format('faq');
                this.faqHref = this.format('faqHref');
                this.join = this.format('join');
                this.qq = this.format('qq');
                this.qqNum = this.format('qqNum');
                this.riot = this.format('riot');
                this.riotAddress = this.format('riotAddress');
                this.riotAddressHref = this.format('riotAddressHref');
                this.howToJoin = this.format('howToJoin');
                this.howToJoinHref = this.format('howToJoinHref');
                this.irisplorerBtn = this.format('irisplorerBtn');
                this.irisplorerHref = this.format('irisplorerHref');
                this.rainbowAppBtn = this.format('rainbowAppBtn');
                this.downloadRainbowAppHref = this.format('downloadRainbowAppHref');
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
@import "../assets/style/testnet.less";



</style>