<template>
    <div class="header_container">
        <div class="header_wrap">
            <div class="header_content">
                <div class="irisnet_logo_content" @click="toHome">
                    <img src="../assets/irisnet/irisnet_logo.png">
                </div>
                <div class="nav_content">
                    <ul class="nav_link_content">
                        <li class="link_content" :class="item.active ? 'active_icon' : ' '" v-for="(item,index) in $store.state.messages.header.left" @click="activeIcon(index)" >{{item.title}}</li>
                    </ul>
                    <div class="link_right_container">
                        <ul class="nav_link_content right_content">
                            <li class="link_content" :class="item.active ? 'active_icon' : ''" v-for="(item,index) in $store.state.messages.header.right" :key="item.id">
                                <div class="link_img_content">
                                    <a :href="item.href" target="_blank" :target="item.href.indexOf('ttp')!== -1 ? '_blank' : ''" @click="toMainnet(item.href)">
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
                                <span v-if="$store.state.lang=='CN'" class="lang_english"><a href="?lang=EN">English</a></span>
                                <span v-if="$store.state.lang=='EN'" class="lang_english"><a href="?lang=CN">中文</a></span>
                                <span class="arrow_img">
                                    <img src="../../public/irisnet/IRISnet_chang_lang.png">
                                </span>
                            </div>
                            <!--<div v-if="$store.state.lang=='EN'" class="chinese_content" @click="changLang">-->
                                <!--<span class="lang_chinese"><a href="?lang=CN">中文</a></span>-->
                            <!--</div>-->
                            <!--<div v-if="$store.state.lang=='CN'" class="chinese_content" @click="changLang">-->
                                <!--<span class="lang_chinese"><a href="?lang=EN">English</a></span>-->
                            <!--</div>-->
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
                <li class="nav_link_content" :class="item.active ? 'active_icon' : '' " v-for="item in $store.state.messages.header.mobileNavigation">
                    <span @click="mobileLink(item.title,item.activeIndex)" >{{item.title}}</span>
                </li>
                <li class="nav_link_content" v-for="item in $store.state.messages.header.mobileLinkHrefNavigation">
                    <a :href="item.href" :target="item.href.indexOf('ttp')!== -1 ? '_blank' : ''" >{{item.title}}</a>
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
                flShowMenu: false,
            }
        },
        watch:{
            $route (){
                let that = this;
                setTimeout(function () {
                    that.getDomOffsetTop(that.$store.state.activeIconIndex)
                },200);
                if(this.$route.path === '/mainnet' || this.$route.path === '/testnets' || this.$route.path === '/testnets/'){
                    this.$store.state.messages.header.right[0].active = true;
                    this.resetActiveIcon();
                }else {
                    this.$store.state.messages.header.right[0].active = false;
                }
            }
        },
        methods:{
            toggleMenus(){
                this.flShowMenu = !this.flShowMenu
            },
            saveActiveIconIndex(index){
                this.$store.commit('activeIconIndex',index)
            },
            activeIcon(index){
                if(index === 0 || index ===1){
                    if(this.$route.query.lang && this.$route.query.lang === 'CN'){
                        this.$router.push({path: '/?lang=CN'});
                    }else if(this.$route.query.lang && this.$route.query.lang === 'EN'){
                        this.$router.push({path:'/?lang=EN'})
                    }else {
                        this.$router.push({path:'/'})
                    }
                }
                this.resetActiveIcon();
                this.$store.state.messages.header.left[index].active = true;
                this.$store.state.messages.header.right[0].active = false;
                this.saveActiveIconIndex(index);
                this.getDomOffsetTop(index)
            },
            getDomOffsetTop(index){
                let activeDomOffsetTop = 0;
                if(index === 0){
                    activeDomOffsetTop = this.$store.state.whitePaper;
                }else if (index === 1) {
                    activeDomOffsetTop = this.$store.state.collaboration;
                }else if (index === 2) {
                    activeDomOffsetTop = this.$store.state.contact - 60;
                }else if (index === 3) {
                    activeDomOffsetTop = this.$store.state.roadmap;
                }else {
                    activeDomOffsetTop;
                }
                this.scroll(activeDomOffsetTop)
            },
            scroll(top) {
                $('html,body').animate({
                        scrollTop: top
                    }, 500
                );
            },
            toMainnet(href){
                if(href === ""){
                    if(this.$route.query.lang && this.$route.query.lang === 'CN'){
                        this.$router.push({path:'/mainnet/?lang=CN'})
                    }else if(this.$route.query.lang && this.$route.query.lang === 'EN'){
                        this.$router.push({path:'/mainnet/?lang=EN'})
                    }else {
                        this.$router.push({path:'/mainnet'})
                    }
                }
            },
            mobileLink(title,index){
                if(title === 'Mainnet'){
                    this.$router.push({path:'/mainnet'})
                }else if(title === 'Testnet'){
                    this.$router.push({path:'/testnets'})
                }else if(title === 'WhitePaper' || title === 'Roadmap' || title === 'Collaboration'){
                    this.$router.push({path:'/'})
                }
                this.resetActiveIcon();
                this.$store.state.messages.header.mobileNavigation.map( item => {
                    if(item.title === title){
                        item.active = true
                    }
                    return item
                });
                this.saveActiveIconIndex(index);
                this.getDomOffsetTop(index);
                this.flShowMenu = false;
            },
            resetActiveIcon(){
                this.$store.state.messages.header.mobileNavigation.map( item => {
                    item.active = false;
                    return item
                });
                this.$store.state.messages.header.left.map( item => {
                    item.active = false;
                    return item
                });
            },
            toHome(){
                let defaultScrollTop = 0;
                if(this.$route.query.lang && this.$route.query.lang === 'CN'){
                    this.$router.push({path:'/?lang=CN'});
                }else if(this.$route.query.lang && this.$route.query.lang === 'EN'){
                    this.$router.push({path:'/?lang=EN'});
                }else {
                    this.$router.push({path:'/'});
                }
                this.$store.commit('activeIconIndex',' ');
                this.scroll(defaultScrollTop);
                this.resetActiveIcon()
            }
        },
        mounted(){
            let headerHeight = document.getElementsByClassName('header_wrap')[0].clientHeight;
            this.resetActiveIcon();
            this.$store.commit('headerHeight',headerHeight);
            if(this.$route.path === '/mainnet' || this.$route.path === '/testnets'){
                this.$store.state.messages.header.right[0].active = true;
            }else {
                this.$store.state.messages.header.right[0].active = false;
            }
        }
    }
</script>

<style scoped lang="less">
 @import "../assets/style/header";
</style>