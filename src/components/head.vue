<template>
    <div class="head">
        <div class="center">
            <a href="#"><img :src="UrlSrc+$store.state.messages.logo" style="width: 130px;"/></a>
            <div class="item_en">
                <div @mouseenter="downShow" @mouseleave="downHide" class="item">
                    <img :src="UrlSrc+down"/> English
                </div>
                <a class="item_cn">
                    中文
                </a>
            </div>
            <div class="comm">
                <div class="div_h">
                </div>
                <a class="item" style="    margin-right: 10px;" @mouseenter="commHide" @mouseleave="commShow">
                    <img :src="UrlSrc+comm">
                    Community
                    <div></div>
                </a>
            </div>
            <div style="float: right">
                <a :href="item.href" v-for="item in $store.state.messages.head.txt" class="item">
                    {{item.txt}}
                    <div></div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "head",
        data() {
            return {
                comm: 'community.png',
                down: 'arrow.png',
            }
        },
        methods: {
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
            }
        },
    }
</script>

<style scoped  lang='less'>
    .head {
        position: fixed;
        top: 0;
        z-index: 10;
        width: 100%;
        height: 70px;
        background: #141426;
        .comm {
            float: right;
            position: relative;
            margin-left: 20px;
            .div_h {
                height: 10px;
                width: 1px;
                background: #4b4d6c;
                position: absolute;
                top: 30px;
                left: -20px;
            }
            img {
                padding-top: 2px;
                float: left;
                margin-right: 6px;
            }
            a {
                margin-right: 20px;
            }
        }
        img {
            padding-top: 18px
        }
        .item_en {
            float: right;
            position: relative;
            &:hover {
                .item_cn {
                    display: block;
                }
            }
            .item {
                margin-right: 0;
            }
            img {
                padding-top: 6px;
                float: left;
                margin-right: 8px;
            }
            .item_cn {
                display: none;
                font-size: 12px;
                border-radius: 4px;
                line-height: 20px;
                text-align: center;
                position: absolute;
                cursor: pointer;
                height: 20px;
                width: 68px;
                top: 54px;
                left: 20px;
                color: #4b4e6d;
                background: #141426;
                &:hover {
                    color: #fff;
                }
            }
        }
        .item {
            float: left;
            margin: 20px 20px;
            color: #4b4d6c;
            padding-top: 8px;
            cursor: pointer;
            position: relative;
            font-size: 14px;
            div {
                width: 30px;
                margin: 0 auto;
                height: 2px;
                background: #572d79;
                margin-top: 20px;
                display: none;
            }
            &:hover {
                color: #fff;
                div {
                    display: block;
                }
            }
        }
        .item_selected {
            color: #fff;
            div {
                background: #ec008c;
                display: block;
            }
        }
        .item:last-child {
            margin-right: 40px;
        }
    }
</style>