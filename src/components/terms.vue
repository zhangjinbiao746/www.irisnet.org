<template>
    <div style="height: 100%">
        <div id="index" class="index">
            <div class="content">
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
            background: #fff;
            .warp_cont {
                overflow: hidden;
                .warp_cont_left {
                    position: relative;
                    .border {
                        height: 0.02rem;
                        width: 0.84rem;
                        background: #c83e66;
                        position: absolute;
                        top: 0;
                    }
                    .title {
                        font-weight:400;
                        color:rgba(38,48,53,1);
                        line-height:32px;
                        margin-top: 0.18rem;
                        font-size: 0.22rem;
                        color: #263035;
                        .div1{
                            font-size: 0.17rem;
                            font-weight:400;
                            color:rgba(124,125,141,1);
                            line-height: 0.3rem;
                            color: #d4d5de;
                            font-style: oblique;
                        }
                    }
                }
                .warp_cont_right {
                    padding: 0.3rem 0;
                    div {
                        font-size: 0.17rem;
                        color: rgba(124,125,141,1);
                        line-height: 0.3rem;
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
                font-size: 0.36rem;
                font-weight:400;
                color: #313236;
                line-height: 0.65rem;
                margin-top: 0.14rem;
                margin-bottom: 0.36rem;
            }
        }
    }
</style>