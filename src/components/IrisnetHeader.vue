<template>
    <div class="header_container" :class="[flShowIrisHub? 'iris_hub_header_style' : 'common_header_style', isBgColor ? 'is_color_bg' : '']">
        <div class="header_wrap">
            <div class="header_content">
                <div class="irisnet_logo_content" @click="toHome">
                    <img src="../assets/irisnet/irisnet_logo.png">
                </div>
                <div class="nav_content">
                    <ul class="nav_link_content">
                        <li class="link_content"
                            v-for="(item,index) in navigationData.header.left"
                            @click="activeIcon(index)"
                            :class="item.active ? 'active_icon' : ' '"  >
                          {{item.title}}
                        </li>
                    </ul>
                    <div class="link_right_container">
                        <ul class="nav_link_content right_content">
                            <li class="link_content" :class="item.active ? 'active_icon' : ''" v-for="(item,index) in navigationData.header.right" :key="item.id">
                                <div class="link_img_content">
                                    <a :href="item.href" target="_blank"
                                       :target="item.href.indexOf('ttp')!== -1 ? '_blank' : ''"
                                       @click="toMainnet(item)">
                                        {{item.title}}
                                    </a>
                                    <span v-show="index === 3" class="blog_img_content">
                                    <img style="padding-bottom: 0.02rem" src="../assets/medium_white.png">
                                </span>
                                    <span v-if="index === 4" class="lang_img_content">
                                    <img src="../../public/down.png">
                                </span>
                                </div>
                            </li>
                        </ul>
                        <div class="lang_content">
                            <div class="english_content">
                                <span v-if="$store.state.lang=='CN'" class="lang_english"><a href="?lang=EN">English</a></span>
                                <span v-if="$store.state.lang=='EN'" class="lang_english"><a href="?lang=CN">中文</a></span>
                                <span class="arrow_img" style="padding-left: 0.05rem">
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
                <li class="nav_link_content"
                    v-for="item in $store.state.messages.header.mobileNavigation"
                    :class="item.active ? 'active_icon' : '' " >
                    <span @click="mobileLink(item.title,item.activeIndex)" >{{item.title}}</span>
                </li>
                <li class="nav_link_content" v-for="item in $store.state.messages.header.mobileLinkHrefNavigation">
                    <a @click="resetActiveIcon" :href="item.href" :target="item.href.indexOf('ttp')!== -1 ? '_blank' : ''" >{{item.title}}</a>
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
                flShowIrisHub: this.$route.path ? false : true,
                navigationData: this.$store.state.messages,
                scrollTopHeight: '',
                isBgColor: false
            }
        },
        watch:{
            $route (){
                if(this.$route.path.includes('kuafu') || this.$route.path.includes('/developers/testnet')){
                    this.flShowIrisHub = true
                }else {
                    this.flShowIrisHub = false
                }
                let that = this;
                setTimeout(function () {
                    that.getDomOffsetTop(that.$store.state.activeIconIndex)
                },200);
                if(this.$route.path === '/mainnet' || this.$route.path === '/testnets' || this.$route.path === '/testnets/'){
                    this.navigationData.header.right[1].active = true;
                    this.resetActiveIcon();
                }else if(this.$route.path.includes('kuafu')){
                    this.resetActiveIcon();
                    this.navigationData.header.right[0].active = true;
                    this.navigationData.header.mobileNavigation[1].active = true;
                }else {
                    this.navigationData.header.right[0].active = false;
                }
				const path = this.$route.path.split('/')[1];
				if(path === 'mainnet' || path === 'developers') {
					this.isBgColor = true;
				} else {
					this.isBgColor = false;
				}
            },
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
                }else if(index === 2) {
					if(this.$route.query.lang && this.$route.query.lang === 'CN'){
						this.$router.push({path: '/developers/?lang=CN'});
					}else if(this.$route.query.lang && this.$route.query.lang === 'EN'){
						this.$router.push({path:'/developers/?lang=EN'})
					}else {
						this.$router.push({path:'/developers'})
					}
					this.$umeng.push('developers','click')
	                // this.$router.push({path:'/community'})
                }
                this.resetActiveIcon();
                this.navigationData.header.left[index].active = true;
                this.navigationData.header.right[0].active = false;
                this.saveActiveIconIndex(index);
                this.getDomOffsetTop(index)
                
            },
            getDomOffsetTop(index){
                let activeDomOffsetTop = 0;
                if(index === 0){
                    activeDomOffsetTop = this.$store.state.whitePaper;
                }else if (index === 1) {
                    activeDomOffsetTop = this.$store.state.collaboration;
                }else if (index === 7) {
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
            scrollToTop() {
                this.scrollTopHeight = document.documentElement.scrollTop || document.body.scrollTop;
                const path = this.$route.path.split('.')[0].split('/')[1];
                if(path === 'mainnet' || path === 'developers' || this.scrollTopHeight > 60) {
                    this.isBgColor = true;
                } else {
                    this.isBgColor = false;
                }
            },
            toMainnet(href){
                if(href.href === "" && !href.name){
                    if(this.$route.query.lang && this.$route.query.lang === 'CN'){
                        this.isColor = true;
                        this.$router.push({path:'/mainnet/?lang=CN'})
                    }else if(this.$route.query.lang && this.$route.query.lang === 'EN'){
                        this.isColor = true;
                        this.$router.push({path:'/mainnet/?lang=EN'})
                    }else {
                        this.isColor = true;
                        this.$router.push({path:'/mainnet'})
                    }
                }else{
                    if(this.$route.query.lang && this.$route.query.lang === 'CN'){
                        this.$router.push({path:'/kuafu/?lang=CN'})
                    }else if(this.$route.query.lang && this.$route.query.lang === 'EN'){
                        this.$router.push({path:'/kuafu/?lang=EN'})
                    }else {
                        this.$router.push({path:'/kuafu'})
                    }
                }
            },
            mobileLink(title,index){
                let mainnet,testnets,community,developers,home,kuafu;
                if(this.$route.query.lang && this.$route.query.lang === 'CN'){
                    mainnet = '/mainnet/?lang=CN'
                    kuafu = '/kuafu/?lang=CN'
                    testnets = '/testnets/?lang=CN'
                    community = '/community/?lang=CN'
                    developers = '/developers/?lang=CN'
                    home = '/?lang=CN'
                }else if(this.$route.query.lang && this.$route.query.lang === 'EN'){
                    mainnet = '/mainnet/?lang=EN'
                    kuafu = '/kuafu/?lang=EN'
                    testnets = '/testnets/?lang=EN'
                    community = '/community/?lang=EN'
                    developers = '/developers/?lang=EN'
                    home = '/?lang=EN'
                }else {
                    kuafu = '/kuafu'
                    mainnet = '/mainnet'
                    testnets = '/testnets'
                    community = '/community'
                    developers = '/developers'
                    home = '/'
                }
                if(title === 'Mainnet' || title === '主网'){
                    this.$router.push({path:mainnet})
                }else if(title === 'Testnet' || title === '测试网'){
                    this.$router.push({path:testnets})
                } else if(title === 'Community' || title === '社区'){
	                this.$router.push({path:community})
                }else if(title === 'WhitePaper' || title === '白皮书' || title === 'Roadmap'  || title === '路线图' || title === 'Collaboration'|| title === '合作方'){
                    this.$router.push({path:home})
                }else if(title === 'KUAFU' || title === '夸父' ){
                    this.$router.push({path:kuafu})
                }else if(title === 'Developers' || title === '开发者'){
                    this.$router.push({path:developers})
                    this.$umeng.push('developers','click')
                }
                this.resetActiveIcon();
                this.navigationData.header.mobileNavigation.map( item => {
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
                this.navigationData.header.mobileNavigation.map( item => {
                    item.active = false;
                    return item
                });
                this.navigationData.header.left.map( item => {
                    item.active = false;
                    return item
                });
                this.navigationData.header.right.map( item => {
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
            if(this.$route.path.includes('kuafu') || this.$route.path.includes('/developers/testnet')){
                this.flShowIrisHub = true
            }else {
                this.flShowIrisHub = false
            }
            this.navigationData = this.$store.state.messages
            let headerHeight = document.getElementsByClassName('header_wrap')[0].clientHeight;
            this.resetActiveIcon();
            this.$store.commit('headerHeight',headerHeight);
            if(this.$route.path.includes('kuafu')  ){
                this.navigationData.header.right[0].active = true;
            }else if(this.$route.path.includes('/developers') || this.$route.path.includes('/developers/testnet')){
                this.navigationData.header.left[2].active = true;
            }else if(this.$route.path.includes('/community')){
                this.navigationData.header.left[2].active = true;
            }else if(this.$route.path === '/mainnet/'
                    || this.$route.path === '/mainnet'
                    || this.$route.path === '/testnets'
                    || this.$route.path === '/testnets/'){
                this.navigationData.header.right[0].active = true;
            }else {
                this.navigationData.header.right[0].active = false;
            }
			const path = this.$route.path.split('/')[1];
			if(path === 'mainnet' || path === 'developers') {
				this.isBgColor = true;
			} else {
				this.isBgColor = false;
			}
            window.addEventListener("scroll", this.scrollToTop);
        }
    }
</script>

<style scoped lang="less">
 @import "../assets/style/header.less";
</style>
