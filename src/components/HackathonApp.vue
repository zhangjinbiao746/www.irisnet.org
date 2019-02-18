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
            <div class="new_center" :style="`height:${bodyHeight}rem;`">
                <div class="h110"></div>
                <div class="warp">

                    <div class="center_content">
                        <img src="../assets/GOG-landscape-transparent.png" alt="">
                        <div class="hackathon_content">
                            <span class="title">{{title}}</span>
                            <div class="main_content">
                                <div class="introduction-container">
                                    <span>{{introduction}}</span>
                                </div>
                                <div>
                                    <p>{{signupDate}}</p>
                                    <p>{{join}}</p>
                                </div>
                                <div style="margin-bottom: 0.10rem">
                                    <span v-show="$store.state.lang !== 'EN'">{{riotRoom}}</span>
                                    <span v-show="$store.state.lang == 'EN'">Riot Room: </span>
                                    <a class="link-riotRoom" :href="riotRoom" v-show="$store.state.lang === 'EN'" target="_blank">{{riotRoom}}</a>
                                </div>
                                <div>
                                    <span v-show="$store.state.lang == 'EN'">{{qq}}</span>
                                    <span v-show="$store.state.lang !== 'EN'">Riot：</span>
                                    <a style="word-break: break-all;" :href="qq" v-show="$store.state.lang !== 'EN'" target="_blank">{{qq}}</a>
                                </div>
                                <div>
                                    <span>{{bountyPool}}</span>
                                </div>
                            </div>
                            <div class="btn">
                                <a :href="$store.state.lang === 'EN'?'http://cn.mikecrm.com/loO06Op':'http://cn.mikecrm.com/Wdawxt7'" target="_blank">{{btn1}}</a>
                                <a :href="$store.state.lang === 'EN'?'https://medium.com/@kidinamoto/irisnet-pos-security-hackathon-707065865926':'https://medium.com/@kidinamoto/irisnet-pos攻防hackathon计划-2657e7a22d95'" target="_blank">{{btn2}}</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="h110"></div>
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
                    <a :href="$store.state.lang=='CN' ? 'https://www.irisnet.org/docs/zh/' : 'https://www.irisnet.org/docs/'" target="_blank">{{$store.state.lang=='CN'?'文档':'Docs'}}</a>
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
        name: "HackathonApp",
        data(){
            return {
                src:message[this.$store.state.lang=='CN'?'cn':'en'].newHackathon.src,
                title:'加入IRISnet线上PoS攻防黑客松',
                subTitle:'',
                introduce:'活动介绍: 为了鼓励更多的技术人员加入IRISnet社区并且参与到测试网中，IRISnet和Dorahacks正在寻找最优秀的黑客来参加到这场攻防游戏中。让我们一起来寻找使区块链网络更加安全可靠的新解决方案吧！',
                contestTime:'比赛时间： 2018.9.3~2018.9.23',
                target:'招募对象: 全球各地对IRISnet感兴趣的技术人员,1-3 人一组',
                secreat:'取胜秘诀： 熟悉Tendermint共识 熟悉Cosmos-SDK代码 熟悉IRISHub代码 熟悉区块链网络安全',
                award:'奖励机制： 参赛的各组选手瓜分的攻防大赛瓜分212,500IRIS枚通证的奖金池。 比赛中按规则排名划分项目一二三等奖，一等奖3组，奖励25,000枚IRIS通证/组；二等奖5组，奖金12,500枚IRIS通证/组；三等奖10组，奖金6,250枚IRIS通证/组,阳光普照奖100组奖金125枚IRIS通证/组',
                partake:'参与方式： 加入官方QQ群： 862553695',
                introduction:"活动介绍：为了鼓励更多的技术人员加入IRISnet社区并且参与到测试网中，IRISnet和Dorahacks正在寻找最优秀的黑客来参加到这场攻防游戏中。让我们一起来寻找使区块链网络更加安全可靠的新解决方案吧！",
                signupDate: '报名进行中',
                join: '招募对象：全球各地对IRISnet感兴趣的技术人员,1-3 人一组。',
                riotRoom: '参与方式：点击报名并加入官方QQ群 862553695',
                bountyPool: '奖励机制：参赛的各组选手瓜分212,500枚IRIS的奖励。',
                btn1:'点击报名',
                btn2:'阅读详情',
                list: [
                    {is: true},
                    {is: false},
                    {is: false},
                    {is: false},
                ],
                menuIs: false,
                wechatIs: false,
                links:message[this.$store.state.lang=='CN'?'cn':'en'].head.txt,
                bodyHeight:"",
                qq:"https://riot.im/app/#/room/#gameofgenesis:matrix.org"
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
                this.$router.push(`/app?lang=${this.$store.state.lang}`)
            },
            format(param){
                return message[this.$store.state.lang=='CN'?'cn':'en'].newHackathon[param];
            },
            getInfo(){
                this.src = this.format('src');
                this.title = this.format('title');
                this.introduction = this.format("introduction");
                this.signupDate = this.format("signupDate");
                this.join = this.format("join");
                this.riotRoom = this.format("riotRoom");
                this.bountyPool = this.format("bountyPool");
                this.btn1 = this.format('btn1');
                this.btn2 = this.format('btn2');
                this.qq = this.format("qq")
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
                    this.$router.push(`/app?lang=${this.$store.state.lang}`);
                    resolve();
                }).then(()=>{
                    this.$router.push(`/app#/${item.href}`);
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
                    }
                })
            },
            scroll(top) {
                $('html,body').animate({
                        scrollTop: top
                    }, 500
                );
            },
        },
        mounted(){
            this.getInfo();
            this.bodyHeight = window.innerHeight/100 - 0.6
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
            background: rgba(47, 41, 72, .85);
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
                            text-align: left;
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

        .head {
            background: #2D2948;
            height: 0.6rem;
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
    .warp {
        height:100%;
        display:flex;
        justify-content:center;
        overflow-y:auto;
        .center_content{
            display:flex;
            flex-direction:column;
            align-items: center;
            color:#fff;
            width:100%;
            padding-top: 0.37rem;
            img{
                height: 1.8rem;
                width:90%;
                margin-bottom:0.37rem;
            }
            .hackathon_content{
                width:85%;
                display:flex;
                flex-direction:column;
                .title{
                    font-size:0.2rem;
                    color:#ffffff;
                    margin-bottom:0.09rem;
                    font-weight: 900;
                }
                .subTitle{
                    font-size:0.2rem;
                    color:#ffffff;
                    margin-bottom:0.37rem;
                    line-height:1.45;
                    font-weight: 900;
                }
                .main_content{
                    width:100%;
                    div{
                        width:100%;
                        margin-bottom:0.37rem;
                        span{
                            color:#D4D5DE;
                            font-size:0.14rem;
                            line-height:2;
                        }
                        p{
                            color:#D4D5DE;
                            font-size:0.14rem;
                            line-height:2;
                        }
                    }
                    .link_wrap{
                        width:100%;
                        a{
                            word-break: break-all;
                        }
                    }
                }
                .btn{

                    display:flex;
                    justify-content: center;

                    a{
                        width:1.4rem;
                        height:0.4rem;
                        border-radius:0.2rem;
                        line-height:0.4rem;
                        text-align: center;
                        font-size:0.16rem;
                        cursor:pointer;
                        margin-bottom:0.75rem;
                        word-break: break-all;
                        &:first-child{
                            background:rgba(114,75,227,1);
                            color:#ffffff;
                            margin-right:0.17rem;
                        }
                        &:last-child{
                            color:#724BE3;
                            border:0.01rem solid #ffffff;
                        }

                    }
                }
            }
        }
    }
    .new_center{
        width: 100%;
        height: 100%;
        background: #16152d;
        background-size: 375px;

    }
    .scroll-container{
        width: 90%;
        margin-left: 5%;
        margin-bottom: 60px;
    }
    .right-text{
        margin-bottom: 20px;
    }
    .introduction-container{
        padding-top: 0.37rem;
    }
    .link-riotRoom{
        word-break: break-all;
    }
</style>