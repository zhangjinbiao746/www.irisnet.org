<template>
    <div class="nav_container">
        <div class="nav_wrap">
            <div class="logo_content">
                <img src="../assets/nav/irisnet_logo.png" alt="" />
            </div>
            <div class="nav_content">
                <ul class="nav nav_content_left">
                    <li class="nav_item" v-for="(item, index) in navList.leftNav" :key="index">
                        <router-link
                            class="nav_link"
                            :class="{ active_link: item.link === fullPath }"
                            :to="item.link"
                            @click.native="handleActive(index)"
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
                            >{{ item.text }}</a
                        >
                        <router-link
                            v-else
                            class="nav_link"
                            :class="{ active_link: item.link === fullPath }"
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
                    >{{ item.text }}</a
                >
                <router-link
                    v-else
                    class="mobile_nav_link"
                    :class="{ mobile_active_link: item.link === fullPath }"
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
        }
    };
</script>

<style lang="less" scoped>
    .nav_container {
        position: relative;
        width: 100%;
        height: 0.6rem;
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
            .logo_content {
                display: flex;
                align-items: center;
                width: 1.3rem;
                img {
                    width: 100%;
                }
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
                    .nav_link {
                        padding: 0 0.18rem;
                        color: #eee;
                        &:hover {
                            color: #fff;
                        }
                    }
                    .active_link {
                        color: #fff;
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
                            border-right: 0.01rem solid #fff;
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
</style>
