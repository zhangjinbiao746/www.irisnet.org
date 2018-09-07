<template>
    <div style="height: 100%">
        <div id="index" class="index">
            <headr :color="'#16152d'"></headr>
            <div class="center">
                <div class="h110"></div>
                <div class="warp">
                    <div class="center_content">
                        <div class="center-content-img">
                            <img src="../assets/GOG-landscape-transparent.png">

                        </div>
                        <div class="join-title">
                            <h5>{{title}}</h5>
                        </div>
                        <div class="introduction-container-wrap">
                            <div class="introduction-container">
                                <div class="introduction-info">
                                    {{introduction}}
                                </div>
                            </div>
                        </div>
                        <div class="rule-info-container-wrap">
                            <ul class="rule-info-container-list">
                                <li>{{signupDate}}</li>
                                <li class="rule-info">{{join}}</li>
                                <li class="riot-info">
                                    <span v-show="$store.state.lang !== 'EN'">{{riotRoom}}</span>
                                    <span v-show="$store.state.lang == 'EN'">Riot Room: </span>
                                    <a :href="riotRoom" v-show="$store.state.lang === 'EN'" target="_blank">{{riotRoom}}</a></li>
                                <li class="participation-way">
                                    <span v-show="$store.state.lang == 'EN'">{{qq}}</span>
                                    <span v-show="$store.state.lang !== 'EN'">Riot: </span>
                                    <a :href="qq" v-show="$store.state.lang !== 'EN'" target="_blank">{{qq}}</a>
                                </li>
                                <li>{{bountyPool}}</li>
                            </ul>
                        </div>
                        <div class="button-container-wrap">
                            <div class="button-container">
                                <div class="sign-btn"><a :href="$store.state.lang === 'EN'?'http://cn.mikecrm.com/loO06Op':'http://cn.mikecrm.com/Wdawxt7'" target="_blank">{{btn1}}</a></div>
                                <div class="read-btn"><a :href="$store.state.lang === 'EN'?'https://medium.com/@kidinamoto/irisnet-pos-security-hackathon-707065865926':'https://github.com/irisnet/testnets/issues/49'" target="_blank">{{btn2}}</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="h110"></div>
            </div>
        </div>
        <foot></foot>
    </div>
</template>

<script>
    import foot from './foot';
    import headr from './head';
    import message from '../common/message';
    export default {
        name: "Hackathon",
        components: {foot, headr},
        data(){
            return {
                button:'黑客松',
                title:'加入IRISnet线上PoS攻防黑客松',
                subTitle:'Game of Genesis',
                introduce:'活动介绍: 为了鼓励更多的技术人员加入IRISnet社区并且参与到测试网中，IRISnet和Dorahacks正在寻找最优秀的黑客来参加到这场攻防游戏中。让我们一起来寻找使区块链网络更加安全可靠的新解决方案吧！',
                contestTime:'比赛时间： 2018.9.3~2018.9.23',
                target:'招募对象: 全球各地对IRISnet感兴趣的技术人员,1-3 人一组.',
                secreat:'取胜秘诀： 熟悉Tendermint共识 熟悉Cosmos-SDK代码 熟悉IRISHub代码 熟悉区块链网络安全',
                award:'奖励机制： 参赛的各组选手瓜分的攻防大赛瓜分212,500IRIS枚通证的奖金池。 比赛中按规则排名划分项目一二三等奖，一等奖3组，奖励25,000枚IRIS通证/组；二等奖5组，奖金12,500枚IRIS通证/组；三等奖10组，奖金6,250枚IRIS通证/组,阳光普照奖100组奖金125枚IRIS通证/组',
                partake:'参与方式： 加入官方QQ群： 862553695',
                // join:'',
                btn1:'点击报名',
                btn2:'阅读详情',
                src:message[this.$store.state.lang=='CN'?'cn':'en'].newHackathon.src,
                introduction:"活动介绍：为了鼓励更多的技术人员加入IRISnet社区并且参与到测试网中，IRISnet和Dorahacks正在寻找最优秀的黑客来参加到这场攻防游戏中。让我们一起来寻找使区块链网络更加安全可靠的新解决方案吧！",
                signupDate: '报名时间：2018.10.8前',
                join: '招募对象：全球各地对IRISnet感兴趣的技术人员,1-3 人一组。',
                riotRoom: '参与方式：点击报名并加入官方QQ群 862553695',
                bountyPool: '奖励机制：参赛的各组选手瓜分212,500枚IRIS的奖励。',
                qq:"https://riot.im/app/#/room/#gameofgenesis:matrix.org"
            }
        },
        mounted(){
            this.getInfo();
        },
        methods:{
            format(param){
                return message[this.$store.state.lang=='CN'?'cn':'en'].newHackathon[param];
            },
            getInfo(){
                //title,introduction,signupDate，join，riotRoom，bountyPool
                this.btn1 = this.format('btn1');
                this.btn2 = this.format('btn2');
                this.src = this.format('src');
                this.title = this.format('title');
                this.introduction = this.format("introduction");
                this.signupDate = this.format("signupDate");
                this.join = this.format("join");
                this.riotRoom = this.format("riotRoom");
                this.bountyPool = this.format("bountyPool");
                this.qq = this.format('qq');
            },

        }
    }
</script>

<style scoped lang='less'>
    ul li{
        list-style: none;
    }
    .center-content-img{
        width: 593px;
        height: 323px;
        margin: 0 auto;
        img{
            width: 100%;
        }
    }
    .center_content{
    }

    .left-subTitle{
        font-size: 23px;
        padding-top: 10px;
        color: #fff;
        font-weight: 900;
    }
    .index {
        min-height: 100%;
        position: relative;
        background: #16152d;

        .h110 {
            height: 110px;
            width: 100%
        }
        .warp {
            width: 100%;
            text-align: center;
        }
    }
.join-title{
    font-size: 24px;
    color: #fff;
    word-break: break-all;
    h5{
        padding: 0.36rem 0 0.3rem 0;
    }
}
.introduction-container-wrap{
    width: 100%;
    .introduction-container{
        background: #1D1B38;
        box-sizing: border-box;
        margin: 0 auto;
        width: 5.5rem;
        padding: 0.3rem;
    }
    .introduction-info{
        color: #D4D5DE;
        line-height: 0.26rem;
        font-size: 0.14rem;
        text-align: left;
    }
}
    .rule-info-container-wrap{
        width: 100%;
        padding-top: 0.29rem;
        .rule-info-container-list{
            margin: 0 auto;
            color: #D4D5DE;
            font-size: 0.14rem;
            width: 4.87rem;
            text-align: left;
            line-height: 0.26rem;
            .rule-info{
                padding: 0.13rem 0;
            }
            .riot-info{
            }
        }
    }
    .button-container-wrap{
        width: 100%;
        .button-container{
            display: flex;
            justify-content: center;
            padding-top: 0.51rem;
            .sign-btn{
                width: 1.4rem;
                height: 0.4rem;
                text-align: center;
                line-height: 0.4rem;
                border-radius: 0.2rem;
                background: #724BE3;
                a{
                    color: #fff;
                }
            }
            .read-btn{
                width: 1.4rem;
                height: 0.4rem;
                text-align: center;
                line-height: 0.4rem;
                border: 1px solid #fff;
                border-radius: 0.2rem;
                margin-left: 0.17rem;
                a{
                    color: #724BE3;
                }
            }
        }
    }
    .participation-way{
        padding-bottom: 0.13rem;
    }


</style>