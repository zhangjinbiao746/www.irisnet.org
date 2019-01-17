<template>
    <div class="mainnet_page">
        <div class="index" style="height:100%;">
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
                <div class="main_container">
                    <div class="main_img_content">
                        <img :src="$store.state.lang=='CN' ? mainnetImgzh : mainnetImgEN ">
                    </div>
                </div>
                <div class="news_container">
                    <div class="news_content_wrap">
                        <h3 class="news_title"><p>{{$store.state.lang=='CN'?'公告':'Announcements'}}</p></h3>
                        <div class="hr_vertical"></div>
                        <ul class="news_content">
                            <li v-for="(item , index) in $store.state.messages.announcements">
                                <div class="img_content" :class="index === 2 ? 'comming_soon_content' : '' ">
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
                </div>
                <div class="main_join_container">
                    <div class="main_join_content">
                        <div class="main_join_way_group">
                            <div class="community_title">{{$store.state.lang=='CN'? '加入社区' :'Join Community'}}</div>
                            <div class="hr_vertical"></div>
                            <ul class="join_way_wrap">
                                <li class="join_way_list_item">
                                    <div class="qq_img">
                                        <img src="../assets/app/qq.png">
                                    </div>
                                    <div class="qq_group_number">
                                        <p>{{qq}}</p>
                                        <p>{{qqNum}}</p>
                                    </div>
                                </li>
                                <li class="join_way_list_item">
                                    <div class="riot_room_img">
                                        <img src="../assets/app/riot.png">
                                    </div>
                                    <div class="main_riot_number">
                                        <p>{{riot}}</p>
                                        <p><a class="riot_href" :href="riotAddressHref" target="_blank">{{riotAddress}}</a></p>
                                    </div>
                                </li>
                            </ul>
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
        name: "MainNet",
        components: {foot,headr},
        data(){
            return {
                defaultArrow:require("../assets/app/arrow.png"),
                activeArrow:require("../assets/app/arrowblue.png"),
                toggleMediumImg: true,
                down: 'arrow.png',
                mediumImg: require('../assets/medium.png'),
                mediumWhiteImg: require('../assets/medium_white.png'),
                qq:"",
                qqNum:"",
                riot:"",
                riotAddress:"",
                riotAddressHref:"",
                mainnetImgzh: require("../../public/mainnet_child_zh.png"),
                mainnetImgEN: require("../../public/mainnet_child_en.png"),
            }
        },
        mounted(){
            $('#app').animate({
                    scrollTop: 0
                }, 10
            );
            this.getInfo()
        },
        methods:{
            skipToMainnet(){
                this.$router.push('/mainnet')
            },
            goHome(){
                this.$router.push(`/#`)
            },

            format(param){
                return message[this.$store.state.lang=='CN'?'cn':'en'].testnet[param];
            },
            getInfo(){
                this.qq = this.format('qq');
                this.qqNum = this.format('qqNum');
                this.riot = this.format('riot');
                this.riotAddress = this.format('riotAddress');
                this.riotAddressHref = this.format('riotAddressHref');
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
            skipToTest() {
                this.$router.push('/testnets')
            },
            skipToHackathon() {
                this.$router.push('/hackathon')
            },
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/style/mainnet";
</style>