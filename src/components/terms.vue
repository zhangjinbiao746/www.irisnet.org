<template>
    <div style="height: 100%">
        <div id="index" class="index">
            <div class="content">
                <div class="h110"></div>
                <div class="warp">
                    <div>
                        <div class="warp_title">
                            {{$store.state.messages.terms.title}}
                        </div>
                        <div class="warp_title2">
                            {{$store.state.messages.terms.title1}}
                        </div>
                        <div class="warp_cont" v-for="item in  $store.state.messages.terms.list">
                            <div class="warp_cont_left">
                                <div class="border"></div>
                                <div class="title" v-html="item.title">
                                </div>
                            </div>
                            <div class="warp_cont_right">
                                <div v-for="items in item.txtList" v-html="items">
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div class="h110"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "terms",
        data(){
            return{

            }
        },
       mounted(){
            let privacyClass = document.getElementsByClassName("privacy")[0];
            let privacyProtoco = window.location.protocol;
            let privacyHostName = window.location.hostname;
            let privacySearch =  privacyHostName;
            if(this.$store.state.lang=='EN'){
                privacySearch = privacyProtoco + '//' + privacyHostName + "/privacy/?lang=EN"
            }else {
                privacySearch = privacyProtoco + '//' + privacyHostName + "/privacy/?lang=CN"
            }

           privacyClass.setAttribute("href",privacySearch );
       }
    }
</script>

<style scoped lang='less'>
    .index {
        min-height: 100%;
        position: relative;
        background: #2D2948 ;

        .content {
            max-width: 12rem;
            padding: 0 0.2rem;
            margin: auto;
        }
        .h110 {
            height: 1.1rem;
            width: 100%
        }
        .warp {
            background: url('../../public/privacy.png');
            background-repeat: no-repeat;
            background-attachment:fixed;
            background-position:  36% 1.8rem;
            .warp_cont {
                overflow: hidden;
                .warp_cont_left {
                    border-top: 0.01rem solid #2e3148;
                    position: relative;
                    .border {
                        height: 0.02rem;
                        width: 0.84rem;
                        background: #c83e66;
                        position: absolute;
                        top: 0;
                    }
                    .title {
                        margin-top: 0.18rem;
                        font-size: 0.24rem;
                        color: #fff;
                        line-height: 0.3rem;
                        .div1{
                            font-size: 0.14rem;
                            line-height: 0.22rem;
                            color: #d4d5de;  font-style: oblique;
                        }
                    }
                }
                .warp_cont_right {
                    border-top: 0.01rem solid #2e3148;
                    padding: 0.3rem 0.08rem;
                    div {
                        font-size: 0.16rem;
                        color: #d4d5de;
                        line-height: 0.26rem;
                        margin-top: 0.28rem;
                        span {
                            font-style: oblique;
                        }
                        a {
                            color: #7681e3;
                        }
                        ul {
                            list-style-type: disc;
                            margin-left: 0.6rem;
                        }
                    }
                    div:first-child {
                        margin-top: 0;
                    }
                }
            }
            .warp_title {
                font-size: 0.3rem;
                color: #ffffff;
                padding-top: 0.2rem;
                font-weight: bold;
                text-align: center;
            }
            .warp_title2 {
                color: #8c8fa6;
                font-size: 0.24rem;
                margin-top: 0.14rem;
                margin-bottom: 0.36rem;
            }
        }
    }
</style>