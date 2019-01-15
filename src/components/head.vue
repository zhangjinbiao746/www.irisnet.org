<template>
    <div class="head" :style="color?'background:#16152d;':''">
        <div class="head" style="position: fixed">
            <div class="center1 head-content">
                <!--左侧logo-->
                <a class="head-layout-left" href="#"><img src="../../public/irisnet.png" style="width: 130px;" @click="goHome"/></a>

                <!--右侧内容-->
                <div class="head-layout-right">

                    <!--导航-->
                    <a :href="'/?lang='+$store.state.lang+item.href" v-for="item in $store.state.messages.head.txt"  class="item">
                    {{item.txt}}
                    <div></div>
                    </a>
                    <a class="item" :href="$store.state.lang=='CN' ? 'https://www.irisnet.org/docs/zh/' : 'https://www.irisnet.org/docs/' " target="_blank">
                        {{$store.state.lang=='CN'?'文档':'Docs'}}
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
    </div>
</template>

<script>
    export default {
        name: "head",
        props:['color'],
        data() {
            return {
                comm: 'community.png',
                down: 'arrow.png',
            }
        },
        methods: {
            goHome(){
                this.$router.push(`/#`)
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
                this.$router.push('/testnets')
            },
            skipToHackathon() {
                this.$router.push('/hackathon')
            },
        }
    }
</script>

<style scoped  lang='less'>
    @import "../assets/style/index.less";

</style>