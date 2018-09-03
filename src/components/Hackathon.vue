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
                        <div class="btn-container">
                            <a :href="$store.state.lang === 'EN'?'https://gog.irisplorer.io/#/home':'https://gog.irisplorer.io/#/home'" target="_blank">{{btn1}}</a>
                            <a :href="$store.state.lang === 'EN'?'https://medium.com/@kidinamoto/irisnet-pos-security-hackathon-707065865926':'https://github.com/irisnet/testnets/issues/49'" target="_blank">{{btn2}}</a>
                        </div>
                        <div class="detail-content">
                            <div class="left-container">
                                <ul>
                                    <li class="left-title">{{title}}</li>
                                    <li class="left-subTitle" v-show="$store.state.lang === 'EN'">{{subTitle}}</li>
                                    <li :class="$store.state.lang === 'EN'? 'en-left-introduce' : 'left-introduce'">{{introduce}}</li>
                                    <li class="left-contestTime">{{contestTime}}</li>
                                </ul>
                            </div>
                            <div class="right-container">
                                <ul>
                                    <li class="right-target">{{target}}</li>
                                    <li class="right-secreat">{{secreat}}</li>
                                    <li class="right-partake">{{partake}}<a :href="join" v-show="$store.state.lang === 'EN'" target="_blank"> {{join}}</a></li>
                                    <li class="right-award">{{award}}</li>
                                </ul>
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
                join:'',
                btn1:'点击报名',
                btn2:'阅读详情',
                src:message[this.$store.state.lang=='CN'?'cn':'en'].hackathon.src,
            }
        },
        mounted(){
            this.getInfo();
        },
        methods:{
            format(param){
                return message[this.$store.state.lang=='CN'?'cn':'en'].hackathon[param];
            },
            getInfo(){

                this.src = this.format('src');
                this.title = this.format('title');
                this.subTitle = this.format('subTitle');
                this.introduce = this.format('introduce');
                this.contestTime = this.format('contestTime');
                this.target = this.format('target');
                this.secreat = this.format('secreat');
                this.award = this.format('award');
                this.partake = this.format('partake');
                this.join = this.format('join');
                this.btn1 = this.format('btn1');
                this.btn2 = this.format('btn2');
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
    .btn-container{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: flex-end;
        position: relative;
        top: -34px;
        a:nth-child(1){
            font-size: 16px;
            line-height: 40px;
            padding: 0 39px;
            background: #724BE3;
            border-radius: 20px;
            color: #fff;
        }
        a:nth-child(2){
            font-size: 16px;
            line-height: 40px;
            padding: 0 39px;
            color: #724BE3;
            background: #16152d;
            border: 1px solid #fff;
            border-radius: 20px;
            margin-left: 17px;
        }
    }
    .left-subTitle{
        font-size: 23px;
        padding-top: 10px;
        color: #fff;
        font-weight: 900;
    }
    .detail-content{
        width: 100%;
        display: flex;
        justify-content: center;
        .left-container{
            width: 50%;
            text-align: left;
            .left-title{
                font-size: 24px;
                line-height: 21px;
                color: #fff;
                font-weight: 900;
            }
            .left-introduce{
                padding-top: 54px;
                font-size: 14px;
                line-height: 26px;
                color: #D4D5DE;
            }
            .en-left-introduce{
                padding-top: 22px;
                font-size: 14px;
                line-height: 26px;
                color: #D4D5DE;
            }
            .left-contestTime{
                font-size: 14px;
                line-height: 16px;
                padding-top: 26px;
                color: #D4D5DE;
            }
        }
        .right-container{
            width: 50%;
            text-align: left;
            color: #D4D5DE;
            padding-top: 75px;
            margin-left: 125px;
            .right-target{
                font-size: 14px;
                line-height: 26px;
            }
            .right-secreat{
                font-size: 14px;
                line-height: 26px;
            }
            .right-partake{
                font-size: 14px;
                line-height: 26px;
            }
            .right-award{
                padding-top: 26px;
                font-size: 14px;
                line-height: 26px;
            }
        }
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


</style>