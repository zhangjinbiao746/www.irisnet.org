<template>
    <div class="navigation_container">
        <div class="navigation_content_wrap">
            <div class="navigation_left_content">
                <div class="navigation_logo_content">
                    <router-link :to="`/`">
                        <img src="../assets/irisnet/irisnet_logo.png" alt="">
                    </router-link>
                </div>
                <ul class="navigation_left_list_content">
                    <li class="navigation_left_list_item">
                        <span>{{$t("message.navigation.aboutUs")}}</span>
                        <ul class="navigation_second_menu">
                           <li class="navigation_second_list_item">
                               <router-link :to="`/mainnet`">{{$t("message.navigation.secondMenu.mainnet")}}</router-link>
                           </li>
                           <li class="navigation_second_list_item">
                               <a v-if="$i18n.locale === 'EN'" href="https://github.com/irisnet/irisnet/blob/master/WHITEPAPER.md" target="_blank">{{$t("message.navigation.secondMenu.whitepaper")}}</a>
                               <a v-if="$i18n.locale === 'CN'" href="https://github.com/irisnet/irisnet/blob/master/白皮书.md" target="_blank">{{$t("message.navigation.secondMenu.whitepaper")}}</a>
                           </li>
                           <li class="navigation_second_list_item">
                               <router-link :to="`/announcements`">{{$t("message.navigation.secondMenu.announcement")}}</router-link>
                           </li>
                           <li class="navigation_second_list_item">
                               <router-link :to="`/collaboration`">{{$t("message.navigation.secondMenu.collaboration")}}</router-link>
                           </li>
                        </ul>
                    </li>
                    <li class="navigation_left_list_item">
                        <span>{{$t("message.navigation.developer")}}</span>
                        <ul class="navigation_second_menu">
                            <li class="navigation_second_list_item">
                                <router-link :to="`/devportal`">{{$t("message.navigation.secondMenu.devPortal")}}</router-link>
                            </li>
                            <li class="navigation_second_list_item">
                                <router-link :to="`/testnets`">{{$t("message.navigation.secondMenu.testnet")}}</router-link>
                            </li>
                            <li class="navigation_second_list_item">
                                <a v-if="$i18n.locale === 'EN'" href="https://www.irisnet.org/docs/" target="_blank">{{$t("message.navigation.secondMenu.doc")}}</a>
                                <a v-if="$i18n.locale === 'CN'" href="https://www.irisnet.org/docs/zh/" target="_blank">{{$t("message.navigation.secondMenu.doc")}}</a>
                            </li>
                            <li class="navigation_second_list_item">
                                <a href="https://cosmos.network/ibc" target="_blank">{{$t("message.navigation.secondMenu.ibc")}}</a>
                            </li>
                        </ul>
                    </li>
                    <li class="navigation_left_list_item">
                        <span>{{$t("message.navigation.community")}}</span>
                        <ul class="navigation_second_menu">
                            <li class="navigation_second_list_item">
                                <router-link :to="`/community/press-kit`">{{$t("message.navigation.secondMenu.pressKit")}}</router-link>
                            </li>
                            <li class="navigation_second_list_item">

                                <router-link :to="`/irisnet-bianjie`">{{$t("message.navigation.secondMenu.irisnetBianjie")}}</router-link>
                            </li>
                            <li class="navigation_second_list_item">
                                <router-link :to="`/ecosystem`">{{$t("message.navigation.secondMenu.IRISEcosystem")}}</router-link>
                            </li>
                            <li class="navigation_second_list_item">
                                <router-link :to="`/events`">{{$t("message.navigation.secondMenu.events")}}</router-link>
                            </li>
                            <li class="navigation_second_list_item">
                                <router-link :to="`/community`">{{$t("message.navigation.secondMenu.community")}}</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="navigation_right_content">
                <div class="mobile_right_content">
                    <img src="../assets/irisnetThree/mobile_menu_icon.png" alt="">
                </div>
                <div class="navigation_right_link_content">
                    <a href="https://forum.irisnet.org/" target="_blank">{{$t("message.navigation.forum")}}</a>
                    <div class="line"></div>
                    <a href="https://medium.com/irisnet-blog" target="_blank">{{$t("message.navigation.blog")}}</a>
                </div>
                <div class="navigation_right_lang_content">
                    <div class="navigation_lang_content" @click="changeLang()">
                        <span>{{$t("message.navigation.lang")}}</span>
                        <i>
                            <img src="../assets/irisnetThree/lang_change.png" alt="">
                        </i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavigationThree",
        data(){
            return {

            }
        },
        methods:{
            changeLang(){
                if(this.$i18n.locale === 'CN'){
                    this.$i18n.locale = 'EN'
                }else {
                    this.$i18n.locale = 'CN'
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .navigation_container{
        width: 100%;
        background: #111370;
        position: fixed;
        z-index: 1000;
        .navigation_content_wrap{
            max-width: 12rem;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            .navigation_left_content{
                display: flex;
                align-items: center;
                .navigation_logo_content{
                    max-width: 1.53rem;
                    img{
                        width: 100%;
                    }
                }
                .navigation_left_list_content{
                    display: flex;
                    align-items: center;
                    color:#fff;
                    .navigation_left_list_item{
                        position: relative;
                        flex: 1;
                        width: 1.6rem;
                        height: 0.8rem;
                        line-height: 0.8rem;
                        text-align: center;
                        .navigation_second_menu{
                            width: 1.6rem;
                            text-align: left;
                            display: none;
                            position: absolute;
                            top: 0.8rem;
                            box-shadow: 0 0.02rem 0.04rem 0 rgba(3,6,103,0.3);
                            border-radius: 0.04rem;
                            background: #fff;
                            overflow: hidden;
                            .navigation_second_list_item{
                                display: block;
                                height: 0.4rem;
                                line-height: 0.4rem;
                                box-sizing: border-box;
                                padding: 0 0.2rem;
                                cursor: pointer;
                                a{
                                    color: #263035;

                                }
                                &:hover{
                                    a{
                                        color: #5E82F1;
                                    }
                                    background: #EDF1FC;
                                }
                            }
                        }
                        &:hover{
                            .navigation_second_menu{
                                display: block;
                            }
                        }
                    }
                }
            }
            .navigation_right_content{
                display: flex;
                align-items: center;
                .mobile_right_content{
                    width: 0.3rem;
                    display: none;
                    img{
                        width: 100%;
                    }
                }
                .navigation_right_link_content{
                    display: flex;
                    align-items: center;
                    .line{
                        width: 0.01rem;
                        height: 0.2rem;
                        background: #fff;
                        margin: 0 0.2rem;
                    }
                    a{
                        font-size: 0.16rem;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height: 0.22rem;
                    }
                }
                .navigation_right_lang_content{
                    display: flex;
                    align-items: center;
                    margin-left: 0.4rem;
                    .navigation_lang_content{
                        border: 0.02rem solid #5E82F1;
                        padding: 0.1rem 0.18rem 0.1rem 0.33rem;
                        border-radius: 0.2rem;
                        color: #fff;
                        span{
                            padding-right: 0.3rem;
                        }
                        i{
                            display: inline-block;
                            width: 0.12rem;
                            padding-rights: 0.3rem;
                            img{
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen  and (max-width: 930px){
        .navigation_container{
            .navigation_content_wrap{
                padding: 0.2rem 0.4rem;
                .navigation_left_content{
                    .navigation_left_list_content{
                        display: none;
                    }
                }
                .navigation_right_content{
                    .navigation_right_link_content{
                        display: none;
                    }
                    .mobile_right_content{
                        .mobile_right_content{
                            width: 0.3rem;
                            display: none;
                            img{
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
</style>