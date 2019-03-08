<template>
    <div class="footer_container" ref="contact" v-if="$store.state.flShowFooter">
        <div class="footer_wrap">
            <div class="content">
                <div class="left_content">
                    <div class="community_link_content">
                        <div class="social_community_content">
                            <h4 class="community">{{$store.state.messages.footer.socialCommunityTitle}}</h4>
                            <ul class="community_link_list">
                                <div v-show="$store.state.footerWeChatIcon"  class="mobileBox" @touchmove.prevent>
                                    <div class="qrcode" @touchmove.prevent>
                                        <img src="../assets/wechat.jpg" alt="" @touchmove.prevent>
                                        <div class="arrow"></div>
                                        <img src="../assets/closeIcon.png" alt="" class="closeIcon" @touchmove.prevent>
                                    </div>
                                </div>
                                <li class="community_link_item" v-for="item in $store.state.messages.footer.socialCommunity" :key="item.id">
                                    <a @click="jumpUrl($event, item.href)">
                                        <img :src='UrlSrc + item.src'>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="tech_community_content">
                            <h4 class="community">{{$store.state.messages.footer.TechCommunityTitle}}</h4>
                            <ul class="community_link_list">
                                <li class="community_link_item" v-for="item in $store.state.messages.footer.techCommunity" :key="item.id">
                                    <a :href="item.href" target="_blank">
                                        <img :src="UrlSrc + item.src">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer_link_content">
                    <div class="products_resources_container">
                        <div class="products_link_content">
                            <h4 class="products_title">{{$store.state.messages.footer.productsTitle}}</h4>
                            <div class="link_container">
                                <ul class="link_content">
                                    <li class="link_item_content" v-for="item in $store.state.messages.footer.productList" :key="item.id">
                                        <a :href="item.href" target="_blank">{{item.name}}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="resources_content">
                            <h4 class="resources_title">{{$store.state.messages.footer.resourcesTitle}}</h4>
                            <div class="resources_link_container">
                                <ul class="resources_link_content">
                                    <li class="resource_list_item" v-for="(item,index) in $store.state.messages.footer.resourceList" :key="item.id">
                                        <a :href="item.href" target="_blank">{{item.name}}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="newsletter_content">
                        <h4 class="newsletter_title">{{$store.state.messages.footer.submitBtn.title}}</h4>
                        <input v-model="mailAddress" class="email_input" :class="flShowError ? 'error_style' : ' '" type="text" :placeholder="$store.state.messages.placehooder.placehooder">
                        <p :class="flShowError ? 'show_error' : 'hide_error'">{{$store.state.messages.errEmail.err}}</p>
                        <button class="submit_btn" @click="commitMail">{{subscription}}</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright_wrap">
            <div class="copyright_container">
                <div class="copyright_content">
                    <p class="irisnet">{{$store.state.messages.footer.irisnetInproduction}}</p>
                    <p class="copyright_text"><span class="copyright">Copyright &#169 2019 IRIS Foundation Ltd. All rights reserved.</span><span class="link_common_style" @click="toPrivacy"> Privacy</span> <span class="connector"> & </span> <span class="link_common_style" @click="toTerms">Terms</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "v-footer",
        data () {
            return {
                mailAddress: '',
                flShowError: false,
                submitTimer: '',
                errorTimer: '',
                subscription: this.$store.state.messages.footer.submitBtn.subscribe
            }
        },
        watch:{
            $route(){
                this.onresize();
                if(this.$route.path === '/privacy' || this.$route.path === '/terms'){
                    this.$store.commit('flShowFooter',false)
                }else {
                    this.$store.commit('flShowFooter',true)
                }
            }
        },
        methods:{
            commitMail(){
                clearTimeout(this.submitTimer);
                clearTimeout(this.errorTimer);
                let address =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(address.exec(this.mailAddress)){
                    this.flShowError = false;
                }else {
                    this.flShowError = true;
                    let that = this;
                    this.errorTimer = setTimeout(function () {
                        that.flShowError = false;
                    },2000)
                    return
                }
                axios({
                    method: 'post',
                    url:"/",
                    data: {
                        email:this.mailAddress,
                    }
                }).then((data)=>{
                    let that = this;
                    that.$store.commit('showMask',true);
                    if(data.data.id){
                        that.$store.commit('confirm',that.$store.state.messages.newsLetter.confirm);
                        that.$store.commit('textContent',that.$store.state.messages.newsLetter.successText);
                        that.$store.commit('newsLetterTitle',that.$store.state.messages.newsLetter.successTitle)
                    }else {
                        that.$store.commit('confirm',that.$store.state.messages.newsLetter.confirm);
                        that.$store.commit('textContent',that.$store.state.messages.newsLetter.failedText);
                        that.$store.commit('newsLetterTitle',that.$store.state.messages.newsLetter.failedTitle)
                    }
                })
                .catch((e)=>{
                })
            },
            onresize(){
                let that = this;
                //解决因为页面没有渲染完成取offsetTop出错
                setTimeout(function () {
                    that.$store.commit('contact',that.$refs.contact.offsetTop)
                },100);
            },
            jumpUrl (e, url) {
                e.stopPropagation()
                if (url) {
                    window.open(url)
                } else {
                    this.$store.commit('controlWeChat', true)
                }
            },
            showWeChat (e) { 
                e.stopPropagation()
                this.$store.commit('controlWeChat', true)
            },
            toPrivacy(){
                this.$router.push('/privacy');
                this.hideFooter()
            },
            toTerms(){
                this.$router.push('/terms');
                this.hideFooter()
            },
            hideFooter(){
                this.$store.commit('flShowFooter',false)
            }
        },
        mounted () {
            if(this.$route.path === '/privacy' || this.$route.path === '/terms'){
                this.$store.commit('flShowFooter',false)
            }
            this.onresize();
            window.addEventListener('resize',this.onresize())
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/style/footer";
</style>