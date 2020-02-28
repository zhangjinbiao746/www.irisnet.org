<template>
    <div class="right_menu_container">
        <ul class="right_menu_content">
            <li v-for="item in menuList" class="right_menu_list_item" :class="item.isWeChat ? 'show_qr_img': ''">
                <a :href="item.href" target="_blank">
                    <img :src="item.src" alt="">
                </a>
                <div v-show="item.isWeChat" class="wechat_qr_img_content" >
                    <img src="../assets/irisnetThree/wechat.jpg" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "RightMenuThree",
        data() {
            return {
                menuList:[
                    {
                        src: require("../assets/irisnetThree/rainbow.png"),
                        href: "https://www.rainbow.one/"
                    },
                    {
                        src: require("../assets/irisnetThree/irisplorer_right.png"),
                        href: "https://www.irisplorer.io/"
                    },
                    {
                        src: require("../assets/irisnetThree/tegegram.png"),
                        href: "https://t.me/irisnetwork"
                    },
                    {
                        src: require("../assets/irisnetThree/github.png"),
                        href: "https://github.com/irisnet"
                    },
                    {
                        src: require("../assets/irisnetThree/wechat.png"),
                        href: "",
                        isWeChat: true,
                    },
                    {
                        src: require("../assets/irisnetThree/forum.png"),
                        href: "https://forum.irisnet.org/"
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .right_menu_container{
        z-index: 999;
        position: fixed;
        transform: translateY(-50%);
        top: 50%;
        right: 0.2rem;
        .right_menu_content{
            width: 0.5rem;
            border-radius: 0.25rem;
            background: rgba(0,0,0,0.12);
            height:3rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            padding: 0.3rem 0;
            .right_menu_list_item{
                position: relative;
                a{
                    img{
                        width: 0.2rem;
                    }
                }
                .wechat_qr_img_content{
                    background: #fff;
                    border-radius: 0.05rem;
                    box-shadow: 0 0.02rem 0.1rem 0 rgba(19, 18, 35,0.2);
                    position: absolute;
                    right: 0.5rem;
                    bottom: -0.5rem;
                    width: 1.35rem;
                    height: 1.35rem;
                    box-sizing: border-box;
                    padding: 0.05rem;
                    display: none;
                    img{
                        width: 100%;
                    }
                }
            }
            .show_qr_img{
                &:hover{
                   .wechat_qr_img_content{
                       display: block;
                   }
                }
            }
        }
    }
</style>