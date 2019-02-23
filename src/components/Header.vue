<template>
    <div class="header_container">
        <div class="header_wrap">
            <div class="header_content">
                <div class="irisnet_logo_content">
                    <img src="../assets/irisnet/irisnet_logo.png">
                </div>
                <div class="nav_content">
                    <ul class="nav_link_content">
                        <li class="link_content" v-for="item in $store.state.messages.header.left" :key="item.id">{{item.title}}</li>
                    </ul>
                    <div class="link_right_container">
                        <ul class="nav_link_content right_content">
                            <li class="link_content"  v-for="(item,index) in $store.state.messages.header.right" :key="item.id">
                                <div class="link_img_content">
                                    <a :href="item.href" target="_blank">
                                        {{item.title}}
                                    </a>
                                    <span v-show="index === 2" class="blog_img_content">
                                    <img src="../assets/medium_white.png">
                                </span>
                                    <span v-if="index === 3" class="lang_img_content">
                                    <img src="../../public/down.png">
                                </span>
                                </div>
                            </li>
                        </ul>
                        <div class="lang_content">
                            <div class="english_content">
                                <span v-if="$store.state.lang=='EN'" class="lang_english"><a href="?lang=EN">English</a></span>
                                <span v-if="$store.state.lang=='CN'" class="lang_english"><a href="?lang=CN">中文</a></span>
                                <span class="arrow_img">
                                    <img src="../../public/down.png">
                                </span>
                            </div>
                            <div v-if="$store.state.lang=='EN'" class="chinese_content" @click="changLang">
                                <span class="lang_chinese"><a href="?lang=CN">中文</a></span>
                            </div>
                            <div v-if="$store.state.lang=='CN'" class="chinese_content" @click="changLang">
                                <span class="lang_chinese"><a href="?lang=EN">English</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mobile_nav_content">
                    <div class="menu_content">
                        <div class="lang_btn">
                            <span class="menu_lang">
                                <a v-if="$store.state.lang!='CN'" href="?lang=CN">CN</a>
                                <a v-if="$store.state.lang=='CN'" href="?lang=EN">EN</a>
                            </span>
                            <span class="arrow_img">
                                <img src="../../public/down.png">
                            </span>
                        </div>
                        <span class="menu_img" @click="toggleMenus">
                            <img src="../assets/app/list.png">
                        </span>
                    </div>
                </div>
            </div>
            <ul class="nav_link_container" :class="flShowMenu ? 'show_menu': ''">
                <li class="mav_link_content" v-for="item in $store.state.messages.header.mobileNavigation" :key="item.id">
                    <a :href="item.href" :target=" item.href.indexOf('ttp')!== -1 ? '_blank' : ''">{{item.title}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data () {
            return {
                flShowMenu: false
            }
        },
        methods:{
            toggleMenus(){
                this.flShowMenu = !this.flShowMenu
            },
            changLang(){
                this.$store.commit("lang","CN")
            }
        }
    }
</script>

<style scoped lang="less">
 @import "../assets/style/header";
</style>