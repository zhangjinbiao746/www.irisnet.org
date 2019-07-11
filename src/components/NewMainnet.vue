<template>
    <div style="padding-top: 0.6rem;">
        <div class="mainnet_header_container">
            <div class="mainnet_header_wrap">
                <div class="mainnet_header_left_content">
                    <h1 class="mainnet_title">{{$store.state.messages.mainnet.title}}</h1>
                    <p class="chain_content">{{$store.state.messages.mainnet.production}}</p>
                    <div class="link_content">
                        <a :href="$store.state.messages.mainnet.walletHref" target="_blank">{{$store.state.messages.mainnet.wallet}}</a>
                        <a :href="$store.state.messages.mainnet.explorerHref" target="_blank">{{$store.state.messages.mainnet.explorer}}</a>
                    </div>
                </div>
                <div class="mainnet_header_right_content">
                    <div class="mainnet_header_wallet_content">
                        <div class="mainnet_header_wallet_line"></div>
                        <div class="mainnet_header_wallet_img">
                            <img :src="UrlSrc + $store.state.messages.mainnet.leftContent.wallet.logo" alt="IRISnet_wallet_logo">
                        </div>
                        <div class="mainnet_header_list_content">
                            <p class="mainnet_header_list_wallet_title">{{$store.state.messages.mainnet.leftContent.wallet.title}}</p>
                            <ul class="mainnet_header_wallet_list">
                                <li class="mainnet_header_wallet_list_item" v-for="(item,index) in $store.state.messages.mainnet.leftContent.wallet.list" :key="index">
                                    <a :href="item.href">{{item.name}}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mainnet_header_explorer_content">
                        <div class="mainnet_header_explorer_line"></div>
                        <div class="mainnet_header_explorer_img">
                            <img :src="UrlSrc + $store.state.messages.mainnet.leftContent.explorer.logo" alt="">
                        </div>
                        <div class="mainnet_header_explorer_list_content">
                            <p class="mainnet_header_explorer_title">{{$store.state.messages.mainnet.leftContent.explorer.title}}</p>
                            <ul class="mainnet_header_list_explorer">
                                <li class="mainnet_header_explorer_list_item" v-for="(v,index) in $store.state.messages.mainnet.leftContent.explorer.list" :key="index">
                                    <a :href="v.href">{{v.name}}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!--<div class="header_wallet_explorer_wrap">
                <div class="header_wallet_content">
                    钱包
                </div>
                <div class="header_explorer_content">
                    浏览器
                </div>
            </div>-->
        </div>
        <div class="foundation_container">
            <div class="foundation_wrap_left">
                <div class="foundation_content">
                    <div class="title_content">
                        <h2 class="foundation_title">{{$store.state.messages.announcements.title}}</h2>
                        <p class="view_more_content">
                            <span class="view_more"><a :href="$store.state.messages.announcements.viewMoreHref" target="_blank">{{$store.state.messages.announcements.viewMore}} <i class="triangle"></i></a></span>
                        </p>
                    </div>
                    <div class="foundation_background_img">
                        <img src="../../public/irisnet/IRISnet_announcements_betanet.png">
                    </div>
                    <div class="betanet_container">
                        <a :href="$store.state.messages.announcements.readMoreHref" target="_blank">
                            <div class="betanet_content">
                                <h3 class="betanet_title">{{$store.state.messages.announcements.betaTitle}}</h3>
                                <p class="date_content">{{$store.state.messages.announcements.betaContent}}</p>
                                <p class="read_more_content">
                                    <!--<span class="read_more"><a :href="$store.state.messages.announcements.readMoreHref" target="_blank">{{$store.state.messages.announcements.readMore}} <i class="triangle"></i></a></span>-->
                                    <span class="date">{{$store.state.messages.announcements.betaDate}}</span>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="foundation_wrap_right">
                <ul class="foundation_list_content">
                    <li class="foundation_item_container" v-for="item in $store.state.messages.announcements.announcementList" :key="item.id">
                        <a :href="item.href" target="_blank">
                            <p class="foundation_item_date">{{item.date}}</p>
                            <p class="foundation_item_title">{{item.title}}</p>
                            <p class="foundation_item_content">{{item.content}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="testnet_container">
            <div class="testnet_wrap">
                <div class="testnet_content_wrap">
                    <h3 class="testnet_title"><a :href="$store.state.messages.testnet.fuxi.explorerHref" target="_blank">{{$store.state.messages.testnet.fuxi.title}}</a></h3>
                    <div class="testnet_content">{{$store.state.messages.testnet.fuxi.production}}</div>
                    <div class="testnet_explorer_content">
                        <a :href="$store.state.messages.testnet.fuxi.href" class="testnet_link" target="_blank">{{$store.state.messages.testnet.fuxi.testnetLink}}</a>
                        <a :href="$store.state.messages.testnet.fuxi.testnetExplorerHref" class="testnet_link" target="_blank">{{$store.state.messages.testnet.fuxi.testnetExplorerTitle}}</a>
                    </div>
                </div>
                <div class="testnet_content_wrap">
                    <h3 class="testnet_title"><a :href="$store.state.messages.testnet.fuxi.explorerHref" target="_blank">{{$store.state.messages.testnet.nyancat.title}}</a></h3>
                    <div class="testnet_content">{{$store.state.messages.testnet.nyancat.production}}</div>
                    <div class="testnet_explorer_content">
                        <a :href="$store.state.messages.testnet.nyancat.href" class="testnet_link" target="_blank">{{$store.state.messages.testnet.nyancat.testnetLink}}</a>
                        <a :href="$store.state.messages.testnet.nyancat.testnetExplorerHref" class="testnet_link" target="_blank">{{$store.state.messages.testnet.nyancat.testnetExplorerTitle}}</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="community_container">
            <div class="community_wrap">
                <h3 class="community_title">{{$store.state.messages.community.title}}</h3>
                <ul class="community_way_content">
                    <li class="community_way" v-for="item in $store.state.messages.community.joinWay" :key="item.id" @click="jumpUrl(item.href)">
                        <div class="community_logo_img">
                            <img :src="`${UrlSrc}${item.src}`">
                        </div>
                        <div class="way_content">
                            <p class="way_name">{{item.name}}</p>
                            <p class="way_link_name">{{item.linkName}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewMainnet",
	    data () {
            return {

            }
        },
        methods:{
            toTestnet () {
                if(Object.keys(this.$route.query).length === 0){
                    this.$router.push({
                        path:'/testnets'
                    })
                }else {
                    this.$router.push({
                        path:`/testnets/?lang=${this.$route.query.lang}`
                    })
                }
            },
            jumpUrl (url) {
                window.open(url)
            }
        }
    }
</script>

<style scoped lang="less">
 @import "../assets/style/new_mainnet.less";
</style>