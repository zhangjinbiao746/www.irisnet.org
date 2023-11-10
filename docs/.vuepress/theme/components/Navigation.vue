<template>
    <div class="nav_container" :class="{ color_bg: isColor }">
        <div class="nav_wrap">
            <img class="logo_content" src="../assets/nav/irisnet_logo.png" alt="" @click="toHome" />
            <div class="nav_content">
                <ul class="nav nav_content_left">
                    <li class="nav_item" v-for="(item, index) in navList.leftNav" :key="index">
                        <router-link
                            class="nav_link"
                            :class="{ active_link: handleActive(item.link) }"
                            :to="item.link"
                            >{{ item.text }}</router-link
                        >
                    </li>
                </ul>
                <ul class="nav nav_content_right">
                    <li class="nav_item" v-for="(item, index) in navList.rightNav" :key="index">
                        <a
                            v-if="item.target"
                            class="nav_link"
                            :href="item.link"
                            :target="item.target"
                            rel="noopener noreferrer"
                            >{{ item.text }}</a
                        >
                        <router-link
                            v-else
                            class="nav_link"
                            :class="{ active_link: handleActive(item.link) }"
                            :to="item.link"
                            >{{ item.text }}</router-link
                        >
                    </li>
                </ul>
            </div>
            <img
                class="nav_icon"
                src="../assets/nav/menu_icon.png"
                alt=""
                @click="controlShowMobileMenu"
            />
        </div>
        <ul v-show="showMobileMenu" class="mobile_nav_list">
            <li class="mobile_nav_item" v-for="(item, index) in mobileNavList" :key="index">
                <a
                    v-if="item.target"
                    class="mobile_nav_link"
                    :href="item.link"
                    :target="item.target"
                    rel="noopener noreferrer"
                    >{{ item.text }}</a
                >
                <router-link
                    v-else
                    class="mobile_nav_link"
                    :class="{ mobile_active_link: handleActive(item.link) }"
                    :to="item.link"
                    @click.native="closeMobileMenu"
                    >{{ item.text }}</router-link
                >
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Navigation',
        props: ['navList'],
        data() {
            return {
                fullPath: '',
                isColor: false,
                scroll: 0,
                showMobileMenu: false
            };
        },
        computed: {
            mobileNavList() {
                return [...this.navList.leftNav, ...this.navList.rightNav];
            }
        },
        methods: {
            handleActive(link) {
                return link === this.fullPath;
            },
            controlShowMobileMenu() {
                this.showMobileMenu = !this.showMobileMenu;
            },
            closeMobileMenu() {
                this.showMobileMenu = false;
            },
            scrollTop() {
                this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
                if (this.scroll > 60) {
                    this.isColor = true;
                } else {
                    this.isColor = false;
                }
            },
            toHome() {
                this.$router.push(this.$store.state.currentLang);
            }
        },
        watch: {
            $route: {
                handler(newRoute) {
                    this.fullPath = newRoute.fullPath.split('.')[0];
                },
                immediate: true,
                deep: true
            }
        },
        mounted() {
            window.addEventListener('scroll', this.scrollTop);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.scrollTop);
        }
    };
</script>

<style lang="less" scoped>
    .nav_container {
        position: fixed;
        top: 0;
        width: 100%;
        height: 0.6rem;
        z-index: 100;
        .nav_wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
            max-width: 12rem;
            height: 100%;
            @media (max-width: 1200px) {
                padding: 0 0.2rem;
            }
            @media (max-width: 768px) {
                padding: 0 0.16rem;
            }
            .logo_content {
                width: 1.3rem;
                cursor: pointer;
            }
            .nav_content {
                flex: 1;
                display: flex;
                justify-content: space-between;
                align-items: center;
                @media (max-width: 768px) {
                    display: none;
                }
                .nav {
                    display: flex;
                    .nav_item {
                        .nav_link {
                            display: inline-block;
                            padding: 0 0.18rem;
                            color: rgba(255, 255, 255, 0.3);
                            line-height: 0.18rem;
                            &:hover {
                                color: #fff;
                            }
                        }
                        .active_link {
                            color: #fff;
                        }
                    }
                }
                .nav_content_right {
                    .nav_item {
                        &:last-child {
                            .nav_link {
                                border-right: none;
                            }
                        }
                        .nav_link {
                            border-right: 0.01rem solid rgba(255, 255, 255, 0.3);
                        }
                    }
                }
            }
            .nav_icon {
                width: 0.25rem;
                cursor: pointer;
                display: none;
                @media (max-width: 768px) {
                    display: block;
                }
            }
        }
        .mobile_nav_list {
            background: #000;
            .mobile_nav_item {
                .mobile_nav_link {
                    display: inline-block;
                    padding: 0.09rem 0;
                    width: 100%;
                    text-align: center;
                    color: rgba(255, 255, 255, 0.3);
                }
                .mobile_active_link {
                    color: #fff;
                }
            }
        }
    }
    .color_bg {
        background: #0d0e2c;
    }
</style>
