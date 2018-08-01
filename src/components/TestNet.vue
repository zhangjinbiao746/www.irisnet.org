<template>
    <div style="height: 100%">
        <div id="index" class="index">
            <headr></headr>
            <div class="center">
                <div class="h110"></div>
                <div class="warp">
                    <div class="center_content">
                        <h2 class="join_test_net">{{join}}</h2>
                        <p class="join_iris">{{title}}</p>
                        <span class="join_btn" @click="skipLink(1)">{{btn1}}</span>
                        <span class="join_btn" @click="skipLink(2)">{{btn2}}</span>
                        <span class="join_btn" @click="skipLink(3)">{{btn3}}</span>
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
    import message from '../assets/lang/message';
    export default {
        name: "terms",
        components: {foot, headr},
        data(){
            return {
                join:'',
                title:'',
                btn1:'',
                btn2:'',
                btn3:'',
            }
        },
        mounted(){
            this.getInfo();
        },
        methods:{
            format(param){
                return message[window.location.href.includes('lang=CN')?'cn':'en'].test[param];
            },
            getInfo(){
                this.join = this.format('join');
                this.title = this.format('title');
                this.btn1 = this.format('btn1');
                this.btn2 = this.format('btn2');
                this.btn3 = this.format('btn3');
            },
            skipLink(num){
                if(num === 1){
                    window.open('https://github.com/irisnet/testnets')
                }else if(window.location.href.includes('lang=CN')){
                    if(num === 2){
                        window.open('https://medium.com/irisnet-blog/irisnet%E6%B5%8B%E8%AF%95%E7%BD%91%E5%85%AC%E6%B5%8B%E5%BC%80%E5%90%AF-%E5%BD%93%E4%B8%AA%E9%AA%8C%E8%AF%81%E4%BA%BA%E8%8A%82%E7%82%B9%E4%BA%86%E8%A7%A3%E4%B8%80%E4%B8%8B-1c3db32d3c75')
                    }else if(num === 3){
                        window.open('https://medium.com/irisnet-blog/irisnet-%E5%B8%B8%E8%A7%81%E9%97%AE%E7%AD%94-71b7635d302c')
                    }
                }else{
                    if(num === 2){
                        window.open('https://medium.com/irisnet-blog/iris-latest-testnet-fuxi-now-lives-join-us-to-be-a-validator-eeca83d50154')
                    }else if(num === 3){
                        window.open('https://medium.com/irisnet-blog/irisnet-q-a-a2fc4a10d07c')
                    }
                }

            }
        }
    }
</script>

<style scoped lang='less'>


    .index {
        min-height: 100%;
        position: relative;
        background: #0b0b18;

        .h110 {
            height: 110px;
            width: 100%
        }
        .warp {
            background: url('../../public/privacy.png');
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: 36% 180px;
            display:flex;
            justify-content:center;
            align-items:center;
            min-height:7rem;
            .center_content{
                display:flex;
                flex-direction:column;
                align-items: center;
                color:#fff;
                .join_test_net{
                    font-family: 'PingFang-SC-Semibold';
                    color:#FFFFFF;
                    font-size:0.3rem;
                    font-weight:400;
                }
                .join_iris{
                    font-family: 'PingFang-SC-Regular';
                    color:#D4D5DE;
                    font-size:0.18rem;
                    margin-top:0.9rem;
                    margin-bottom:0.9rem;
                }
                .join_btn{
                    color:#724BE3;
                    width:2.82rem;
                    height:0.4rem;
                    border-radius:0.2rem;
                    border:0.01rem solid #ffffff;
                    margin-bottom:0.16rem;
                    text-align: center;
                    line-height:0.4rem;
                    cursor:pointer;
                    font-size:0.16rem;
                    &:hover{
                        background: rgb(114,75,227);
                        color:#ffffff;
                        border:0.01rem solid #724BE3;
                    }
                }
            }
        }
    }


</style>