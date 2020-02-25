<template>
    <div class="footer_container"  ref="contact" v-if="$store.state.flShowFooter">
        <div class="footer_content_wrap">
            <div class="footer_content_header">
                <div class="footer_content_log_content">
                    <img src="../assets/irisnet/irisnet_logo.png" alt="">
                </div>
                <div class="footer_content_newsletter_content">
                    <span class="footer_content_newsletter_title">Newsletter</span>
                    <div class="footer_content_newsletter_input_content">
                        <input v-model="mailAddress" class="footer_content_newsletter_ipt" type="text" :class="flShowError ? 'error_style' : ' '" :placeholder="$store.state.messages.placehooder.placehooder">
                        <div class="footer_content_newsletter_join_btn">
                            <span class="footer_content_newsletter_join_btn_text"  @click="commitMail">Join Now</span>
                        </div>
                    </div>
<!--                    <p :class="flShowError ? 'show_error' : 'hide_error'">{{$store.state.messages.errEmail.err}}</p>-->

                </div>
            </div>

            <div class="footer_tool_content">
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
                                <a @click="jumpUrl($event, item.href)" :href="item.href" target="_blank">
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
                    <div class="tech_community_content">
                        <h4 class="community">{{$store.state.messages.footer.validatorCommunityTitle}}</h4>
                        <ul class="community_link_list">
                            <li class="community_link_item" v-for="item in $store.state.messages.footer.validatorCommunity" :key="item.id">
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
              <!--  <div class="newsletter_content">
                    <h4 class="newsletter_title">{{$store.state.messages.footer.submitBtn.title}}</h4>
                    <input v-model="mailAddress" class="email_input" :class="flShowError ? 'error_style' : ' '" type="text" :placeholder="$store.state.messages.placehooder.placehooder">
                    <p :class="flShowError ? 'show_error' : 'hide_error'">{{$store.state.messages.errEmail.err}}</p>
                    <button class="submit_btn" @click="commitMail">{{$store.state.messages.footer.submitBtn.subscribe}}</button>
                </div>-->
            </div>

            <div class="footer_tool_community_content"></div>
            <div class="footer_tool_developer_content"></div>
            <div class="footer_tool_validator_content"></div>
        </div>
        <div class="footer_copy_right_content">
            <div class="footer_copy_right_content_wrap">
                <p class="irisnet">{{$store.state.messages.footer.irisnetInproduction}}</p>
                <p class="copyright_text"><span class="copyright">Copyright &#169 2020 IRIS Foundation Ltd. All rights reserved.</span><span class="link_common_style" @click="toPrivacy"> Privacy</span> <span class="connector"> & </span> <span class="link_common_style" @click="toTerms">Terms</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "FooterThree",
        data() {
            return {
                mailAddress:'',
                flShowError: false,
                submitTimer: '',
                errorTimer: '',
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
        mounted () {
            if(this.$route.path === '/privacy' || this.$route.path === '/terms'){
                this.$store.commit('flShowFooter',false)
            }
            this.onresize();
            window.addEventListener('resize',this.onresize())
        },
        methods:{
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
                    // window.open(url)
                } else {
                    this.$store.commit('controlWeChat', true)
                }
            },
            showWeChat (e) {
                e.stopPropagation()
                this.$store.commit('controlWeChat', true)
            },

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
        }
    }
</script>

<style scoped lang="less">
    .community_link_list{
        display: flex;

        .mobileBox {
            .qrcode {
                width: 1.38rem;
                height: 1.31rem;
                background: #fff;
                position: absolute;
                top:0;
                left: 1.33rem;
                transform: translateY(-100%);
                border-radius: 0.12rem;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                    width: 90%;
                    margin: 0;
                    opacity: 1;
                }
                .arrow {
                    position:absolute;
                    border-color:#fff transparent transparent transparent;
                    border-style:solid dashed dashed dashed;
                    border-width:0.08rem;
                    left:50%;
                    bottom:-0.16rem;
                    transform: translateX(-50%);
                }
                .closeIcon {
                    display: none;
                }
            }
        }
    }
    .footer_container{
        background: linear-gradient(180deg,rgba(14,15,105,1) 0%,rgba(43,56,175,1) 100%);
        .footer_content_wrap{
            padding-bottom: 0.8rem;
            .footer_content_header{
                display: flex;
                justify-content: space-between;
                padding-top: 0.4rem;
                max-width: 12rem;
                margin: 0 auto;
                .footer_content_log_content{
                    width: 1.5rem;
                    display: flex;
                    align-items: center;
                    img{
                        width: 100%;
                    }
                }
                .footer_content_newsletter_content{
                    flex: 1;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 7.6rem;
                    .footer_content_newsletter_title{
                        font-size: 0.21rem;
                        line-height: 0.25rem;
                        font-weight: 600;
                        color: #fff;
                        margin-right: 0.6rem;
                    }
                    .footer_content_newsletter_input_content{
                        display: flex;
                        background: rgba(0,0,0,0.19);
                        border-radius: 0.33rem;
                        height:0.6rem;
                        align-items: center;
                        justify-content: space-between;
                        flex: 1;
                        .footer_content_newsletter_ipt{
                            width: calc(100% - 160px);
                            height: 0.25rem;
                            background: transparent;
                            border:none;
                            text-indent: 0.2rem;
                            color: #fff;
                       }
                        .error_style{
                            outline: none;
                            border: 0.01rem  solid #F5A623;
                        }
                        .footer_content_newsletter_join_btn{
                            display: flex;
                            /*flex-direction: column;*/
                            align-items: center;
                            .footer_content_newsletter_join_btn_text{
                                padding: 0.2rem 0.36rem;
                                border-radius: 0.33rem;
                                color: #fff;
                                background: linear-gradient(90deg,rgba(81,121,245,1) 0%,rgba(102,228,205,1) 100%);
                            }
                        }
                    }
                }
            }
            .footer_tool_content{
                display: flex;
                max-width: 12rem;
                margin: 0 auto;
                padding-top: 1.2rem;
                .community_link_content{
                    flex: 1;
                    display: flex;
                    .social_community_content{
                        flex: 1;
                        .community{
                            color:#BCC7EF;
                            font-size: 0.16rem;
                        }
                        .community_link_list{
                            display: flex;
                            list-style-type: none;
                            position: relative;
                            .mobileBox {
                                .qrcode {
                                    width: 1.38rem;
                                    height: 1.31rem;
                                    background: #fff;
                                    position: absolute;
                                    top:0;
                                    left: 1.53rem;
                                    transform: translateY(-100%);
                                    border-radius: 0.12rem;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    img {
                                        width: 90%;
                                        margin: 0;
                                        opacity: 1;
                                    }
                                    .arrow {
                                        position:absolute;
                                        border-color:#fff transparent transparent transparent;
                                        border-style:solid dashed dashed dashed;
                                        border-width:0.08rem;
                                        left:50%;
                                        bottom:-0.16rem;
                                        transform: translateX(-50%);
                                    }
                                    .closeIcon {
                                        display: none;
                                    }
                                }
                            }
                            .community_link_item{
                                cursor: pointer;
                                opacity: 0.4;
                                padding-right: 0.25rem;
                                padding-top: 0.27rem;
                                &:hover{
                                    opacity: 1;
                                }
                                a{
                                    display: inline-block;
                                    width: 0.28rem;
                                    height:0.24rem;
                                    img{
                                        height: 100%;
                                    }
                                }
                            }

                        }
                    }
                    .tech_community_content{
                        flex: 1;
                        .community{
                            color:#BCC7EF;
                            font-size: 0.16rem;
                        }
                        .community_link_list{
                            display: flex;
                            .community_link_item{
                                opacity: 0.4;
                                padding-right: 0.25rem;
                                padding-top: 0.27rem;
                                &:hover{
                                    opacity: 1;
                                }
                                a{
                                    display: inline-block;
                                    width: 0.28rem;
                                    height:0.24rem;
                                    img{
                                        height: 100%;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .footer_link_content{
                display: flex;
                flex: 1;
                justify-content: space-between;
                max-width: 12rem;
                margin: 0.7rem auto 0 auto;
                .products_resources_container{
                    display: flex;
                    flex: 2;
                    .products_link_content{
                        flex: 1;
                        .products_title{
                            font-size: 0.16rem;
                            color: #BCC7EF;
                        }
                        .link_container{
                            padding-top: 0.27rem;
                            display: flex;
                            flex-direction: column;
                            .link_content{
                                .link_item_content{
                                    padding: 0.05rem 0;
                                    a{
                                        color: #fff;
                                        opacity: 0.4;
                                        &:hover{
                                            opacity: 1;
                                            color: #fff;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .resources_content{
                        flex: 2;
                        .resources_title{
                            font-size: 0.16rem;
                            color: #BCC7EF;
                        }
                        .resources_link_container{
                            padding-top: 0.27rem;
                            display: flex;
                            flex-direction: column;
                            .resources_link_content{
                                .resource_list_item{
                                    padding: 0.05rem 0;
                                    a{
                                        color: #fff;
                                        opacity: 0.4;
                                        &:hover{
                                            opacity: 1;
                                            color: #fff;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .footer_copy_right_content{
            padding-top: 0.4rem;
            border-top: 0.01rem solid #5E82F1;
            .footer_copy_right_content_wrap{
                max-width: 12rem;
                margin: 0 auto;
                padding-bottom: 0.4rem;
                color: #fff;
                opacity: 0.4;
                .irisnet{
                    text-align: center;

                }
                .copyright_text{
                    margin-top: 0.16rem;
                    text-align: center;
                }
            }

        }

    }

</style>