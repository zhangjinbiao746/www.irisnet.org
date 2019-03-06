<template>
    <div style="padding-top: 0.6rem;">
        <div class="mainnet_header_container">
            <div class="mainnet_header_wrap">
                <h1 class="mainnet_title">{{$store.state.messages.mainnet.title}}</h1>
                <p class="chain_content">{{$store.state.messages.mainnet.production}}</p>
                <div class="link_content">
                    <a :href="$store.state.messages.mainnet.walletHref" target="_blank">{{$store.state.messages.mainnet.wallet}}</a>
                    <a :href="$store.state.messages.mainnet.explorerHref" target="_blank">{{$store.state.messages.mainnet.explorer}}</a>
                </div>
            </div>
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
                <h3 class="testnet_title">{{$store.state.messages.testnet.title}}</h3>
                <p class="testnet_status_content" v-html="$store.state.messages.testnet.production"></p>
                <div class="testnet_btn_content">
                    <span class="testnet_btn" @click="toTestnet">{{$store.state.messages.testnet.testnetLink}}</span>
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
@import "../assets/style/new_mainnet";
</style>