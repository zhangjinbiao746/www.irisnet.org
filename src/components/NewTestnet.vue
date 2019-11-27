<template>
    <div class="tpl_content">
        <!--<div class="testnet_container">
            <div class="testnet_text_content">
                <h1 class="fuxi_title">{{$store.state.messages.testnetPage.title}}</h1>
                <ul class="fuxi_content">
                    <li class="content_item" v-for="item in $store.state.messages.testnetPage.section">{{item.content}}</li>
                </ul>
            </div>
        </div>-->
        <div class="testnet_container">
            <div class="testnet_wrap">
                <div class="testnet_content">
                    <h3 class="testnet_title"><a :href="$store.state.messages.testnet.fuxi.explorerHref" target="_blank">{{$store.state.messages.testnet.fuxi.title}}</a></h3>
                    <div class="testnet_content">{{$store.state.messages.testnet.fuxi.production}}</div>
                    <a :href="$store.state.messages.testnet.fuxi.href" class="testnet_link" target="_blank">{{$store.state.messages.testnet.fuxi.testnetLink}}<i class="triangle"></i></a>
                </div>
                <div class="testnet_content">
                    <h3 class="testnet_title"><a :href="$store.state.messages.testnet.fuxi.explorerHref" target="_blank">{{$store.state.messages.testnet.nyancat.title}}</a></h3>
                    <div class="testnet_content">{{$store.state.messages.testnet.nyancat.production}}</div>
                    <a :href="$store.state.messages.testnet.nyancat.href" class="testnet_link" target="_blank">{{$store.state.messages.testnet.nyancat.testnetLink}}<i class="triangle"></i></a>
                </div>
            </div>
        </div>
        <div class="testnet_link_container">
            <div class="testnet_link_content">
                <div class="faq_content">
                    <a :href="$store.state.messages.testnetPage.joinHref" target="_blank">
                        <div class="fqa_block">
                            <span class="faq_title">{{$store.state.messages.testnetPage.joinTitle}}</span>
                            <span class="faq_img">
                            <img src="../../public/irisnet/IRISnet_explorer_fuxi.png" alt="">
                        </span>
                        </div>
                    </a>
                <!--    <a :href="$store.state.messages.testnetPage.faqHref" target="_blank">
                        <div class="fqa_block">
                            <span class="faq_title">{{$store.state.messages.testnetPage.faqTitle}}</span>
                            <span class="faq_img">
                            <img src="../../public/irisnet/irisnet_faq.png" alt="">
                        </span>
                        </div>
                    </a>-->
                    <a :href="$store.state.messages.testnetPage.explorerHref" target="_blank">
                        <div class="fqa_block">
                            <span class="faq_title">{{$store.state.messages.testnetPage.explorerTitle}}</span>
                            <span class="faq_img">
                            <img src="../../public/irisnet/IRISnet_explorer_nyancat.png" alt="">
                        </span>
                        </div>
                    </a>
                </div>
               <!-- <div class="explorer_rainbow_link_content">
                    <a :href="$store.state.messages.testnetPage.explorerHref" target="_blank">
                        <div class="explorer_content">
                            <span class="explorer_title">{{$store.state.messages.testnetPage.explorerTitle}}</span>
                            <span class="explorer_img">
                            <img src="../../public/irisnet/IRISnet_explorer.png" alt="">
                        </span>
                        </div>
                    </a>
                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewTestnet",
        data(){
            return {

            }
        },

    }
</script>

<style scoped lang="less">
    @import "../assets/style/new_test_net.less";
</style>
