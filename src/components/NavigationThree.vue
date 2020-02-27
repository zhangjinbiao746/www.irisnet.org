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
                        <span>about us</span>
                        <ul class="navigation_second_menu">
                           <li class="navigation_second_list_item">
                               <router-link :to="`/mainnet`">Mainnet</router-link>
                           </li>
                           <li class="navigation_second_list_item">
                               <a href="https://github.com/irisnet/irisnet/blob/master/WHITEPAPER.md" target="_blank">Whitepaper</a>
                           </li>
                           <li class="navigation_second_list_item">
                               <router-link :to="`/announcements`">Announcements</router-link>
                           </li>
                           <li class="navigation_second_list_item">
                               <router-link :to="`/collaboration`">Collaboration</router-link>
                           </li>
                        </ul>
                    </li>
                    <li class="navigation_left_list_item">
                        <span>developers</span>
                        <ul class="navigation_second_menu">
                            <li class="navigation_second_list_item">
                                <router-link :to="`/devportal`">DevPortal</router-link>
                            </li>
                            <li class="navigation_second_list_item">
                                <router-link :to="`/testnets`">Testnets</router-link>
                            </li>
                            <li class="navigation_second_list_item">
                                <a href="https://www.irisnet.org/docs/" target="_blank">Docs</a>
                            </li>
                            <li class="navigation_second_list_item">
                                <a href="https://cosmos.network/ibc" target="_blank">IBC</a>
                            </li>
                        </ul>
                    </li>
                    <li class="navigation_left_list_item">
                        <span>ecosystem</span>
                        <ul class="navigation_second_menu">
                            <li class="navigation_second_list_item">
                                <router-link :to="`/community/press-kit`">Press-kit</router-link>
                            </li>
                            <li class="navigation_second_list_item">

                                <router-link :to="`/irisnet-bianjie`">IRISnet-Bianjie</router-link>
                            </li>
                            <li class="navigation_second_list_item">
                                <router-link :to="`/ecosystem`">IRIS Ecosystem</router-link>
                            </li>
                            <li class="navigation_second_list_item">
                                <router-link :to="`/events`">Events</router-link>
                            </li>
                            <li class="navigation_second_list_item">
                                <router-link :to="`/community`">Community</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="navigation_right_content">
                <div class="navigation_right_link_content">
                    <a href="https://forum.irisnet.org/" target="_blank">forum</a>
                    <div class="line"></div>
                    <a href="https://medium.com/irisnet-blog" target="_blank">blog</a>
                </div>
                <div class="navigation_right_lang_content">
                    <div class="navigation_lang_content">
                        <span>English</span>
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
        name: "NavigationThree"
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
</style>