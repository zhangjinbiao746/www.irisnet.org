<template>
    <div class="right_menu_container">
        <ul class="right_menu_content">
            <li v-for="item in menuList" class="right_menu_list_item"
                :style="{display: item.isMedium && $i18n.locale === 'CN' ? 'none' : 'block'}"
                :class="item.isWeChat && $i18n.locale === 'EN' ? 'show_we_chat' : 'show_qr_img'">
                <a :href=" $i18n.locale === 'EN' ? item.enHref :item.cnHref"
                   :target="item.href === 'javascript:void(0);' ? '' : '_blank'">
                    <img :src="item.src" alt="">
                </a>
                <div v-if="item.isWeChat && $i18n.locale === 'CN'" class="wechat_qr_img_content" >
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
                        src: require("../assets/irisnetThree/irisplorer_right.png"),
                        enHref:"https://www.irisplorer.io/",
                        cnHref:"https://www.irisplorer.io/",
                    },
                    {
                        src: require("../assets/irisnetThree/rainbow.png"),
                        enHref:"https://www.rainbow.one/",
                        cnHref:"https://www.rainbow.one/",
                    },
                    {
                        src: require("../assets/irisnetThree/tegegram.png"),
                        enHref:"https://t.me/irisnetwork",
                        cnHref:"https://t.me/irisnetworkcn",
                    },
                    {
                        src: require("../assets/irisnetThree/twitter.png"),
                        enHref:"https://twitter.com/irisnetwork",
                        cnHref:"https://twitter.com/irisnetwork",
                    },
                    {
                        src: require("../assets/irisnetThree/github.png"),
                        enHref:"https://github.com/irisnet",
                        cnHref:"https://github.com/irisnet",
                    },
                    {
                        src: require("../assets/irisnetThree/medium.png"),
                        enHref:" https://medium.com/irisnet-blog",
                        cnHref:" https://medium.com/irisnet-blog",
                        isMedium: true,
                    },
                    {
                        src: require("../assets/irisnetThree/wechat.png"),
                        href: "javascript:void(0);",
                        isWeChat: true,
                    },
                    {
                        src: require("../assets/irisnetThree/forum.png"),
                        enHref:"https://forum.irisnet.org/",
                        cnHref:"https://forum.irisnet.org/",
                    },

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
            .show_we_chat{
                display: none !important;
            }
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