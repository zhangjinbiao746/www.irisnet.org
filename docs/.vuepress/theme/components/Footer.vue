<template>
    <div class="footer">
        <div class="footer_content">
            <div class="footer_top">
                <template v-for="(item, index) in footerInfo.topFooter">
                    <module :title="item.title" :key="index">
                        <template v-if="item.communityIcon" #icon>
                            <div class="community_icon_wrap">
                                <a
                                    class="community_icon"
                                    v-for="(community, cIndex) in item.communityIcon"
                                    :key="cIndex"
                                    :href="community.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img :src="getImageUrl(community.src)" alt="" />
                                </a>
                            </div>
                        </template>
                        <template v-if="item.communityText" #text>
                            <div class="community_text_wrap">
                                <template v-for="(communityText, tIndex) in item.communityText">
                                    <a
                                        class="community_text"
                                        v-if="communityText.href"
                                        :key="tIndex"
                                        :href="communityText.href"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >{{ communityText.name }}</a
                                    >
                                    <router-link
                                        class="community_text"
                                        v-if="communityText.route"
                                        :key="tIndex"
                                        target="_blank"
                                        :to="communityText.route"
                                        >{{ communityText.name }}</router-link
                                    >
                                </template>
                            </div>
                        </template>
                        <template v-if="item.inputBtn" #other>
                            <div class="newsletter">
                                <input
                                    v-model="mailAddress"
                                    class="email_input"
                                    :class="flShowError ? 'error_style' : ' '"
                                    type="text"
                                    :placeholder="item.inputBtn.btn.placeholder"
                                />
                                <p :class="flShowError ? 'show_error' : 'hide_error'">
                                    {{ item.inputBtn.btn.warningTip }}
                                </p>
                                <custom-button
                                    class="submit_btn"
                                    @click.native="commitMail"
                                    :link-text="item.inputBtn.btn.subscribe"
                                />
                            </div>
                        </template>
                    </module>
                </template>
            </div>
            <div class="footer_bottom">
                <p class="community_intro">{{ footerInfo.bottomFooter.intro }}</p>
                <p class="copyright_wrap">
                    <span class="copyright">{{ footerInfo.bottomFooter.copyright }}</span>
                    <router-link
                        class="agreement"
                        v-for="(item, index) in footerInfo.bottomFooter.agreement"
                        :key="index"
                        :to="item.route"
                    >
                        {{ item.name }}
                        <span
                            class="and"
                            v-if="index < footerInfo.bottomFooter.agreement.length - 1"
                            >&</span
                        >
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import validator from 'validator';
    import Module from '@theme/components/common/Module';
    import CustomButton from '@theme/components/common/CustomButton';
    import { SUCCESS_CODE } from '@theme/constant';
    import cfg from '../../config.json';
    export default {
        name: 'Footer',
        components: {
            Module,
            CustomButton
        },
        props: ['footerInfo'],
        data() {
            return {
                mailAddress: '',
                flShowError: false,
                submitTimer: '',
                errorTimer: ''
            };
        },
        computed: {
            maskInfo() {
                const inputBtnInfo = this.footerInfo.topFooter.filter(
                    (item) => item.title === 'Newsletter'
                );
                const { inputBtn } = inputBtnInfo[0];
                return inputBtn.dialogs;
            }
        },
        methods: {
            getImageUrl(img) {
                return require(`../assets/footer/${img}`);
            },
            clearTimeoutFn(timer) {
                timer && clearTimeout(timer);
            },
            commitMail() {
                this.clearTimeoutFn(this.submitTimer);
                this.clearTimeoutFn(this.errorTimer);
                /**
                 * 此处限制邮箱长度最长为 64 位
                 */
                if (validator.isEmail(this.mailAddress) && this.mailAddress.length <= 64) {
                    this.flShowError = false;
                } else {
                    this.flShowError = true;
                    this.errorTimer = setTimeout(() => {
                        this.flShowError = false;
                    }, 2000);
                    return;
                }
                this.$axios
                    .post(`${cfg.adminServer}`, {
                        email: this.mailAddress
                    })
                    .then((res) => {
                        if (res.status === SUCCESS_CODE) {
                            return res.data;
                        }
                    })
                    .then((data) => {
                        if (data.data.is_register) {
                            this.$store.commit(
                                'newsLetterTitle',
                                this.maskInfo.subscribeStatusTip.success
                            );
                            this.$store.commit(
                                'textContent',
                                this.maskInfo.subscribeStatusTip.successTip
                            );
                        } else {
                            this.$store.commit(
                                'newsLetterTitle',
                                this.maskInfo.subscribeStatusTip.failed
                            );
                            this.$store.commit(
                                'textContent',
                                this.maskInfo.subscribeStatusTip.failedTip
                            );
                        }
                        this.$store.commit('confirm', this.maskInfo.confirm);
                        this.$store.commit('showMask', true);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        }
    };
</script>

<style lang="less" scoped>
    .footer {
        background: #1f1641;
        .footer_content {
            margin: 0 auto;
            max-width: 12rem;
            @media (max-width: 1200px) {
                padding: 0 0.48rem;
            }
            @media (max-width: 440px) {
                padding: 0 0.16rem;
            }
            .footer_top {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 1rem 0;
                padding: 0.56rem 0 0.5rem;
                .module {
                    &:first-child {
                        @media (max-width: 900px) {
                            grid-column-start: span 3;
                        }
                        .community_icon_wrap {
                            .community_icon {
                                img {
                                    width: 0.27rem;
                                    height: 0.24rem;
                                }
                            }
                        }
                    }
                    &:nth-child(2) {
                        @media (max-width: 900px) {
                            grid-column-start: span 3;
                        }
                    }
                    &:nth-child(3) {
                        @media (max-width: 900px) {
                            grid-column-start: span 3;
                        }
                    }
                    &:nth-child(4) {
                        @media (max-width: 670px) {
                            grid-column-start: span 2;
                        }
                    }
                    &:nth-child(5) {
                        @media (max-width: 670px) {
                            grid-column-start: span 1;
                        }
                    }
                    &:nth-child(6) {
                        @media (max-width: 670px) {
                            grid-column-start: span 3;
                        }
                    }
                    .community_icon_wrap {
                        margin-top: 0.27rem;
                        .community_icon {
                            margin-right: 0.25rem;
                            img {
                                height: 0.24rem;
                                opacity: 0.4;
                                &:hover {
                                    opacity: 1;
                                }
                            }
                        }
                    }
                    .community_text_wrap {
                        display: flex;
                        flex-flow: column wrap;
                        align-content: flex-start;
                        margin-top: 0.27rem;
                        .community_text {
                            padding: 0.05rem 0;
                            color: rgba(255, 255, 255, 0.2);
                            white-space: nowrap;
                            &:hover {
                                color: #fff;
                            }
                        }
                    }
                    .newsletter {
                        margin-top: 0.2rem;
                        .email_input {
                            max-width: 52%;
                            min-width: 2.6rem;
                            width: auto;
                            height: 0.45rem;
                            color: #fff;
                            text-indent: 0.1rem;
                            background: rgba(22, 24, 57, 1);
                            border: 0.01rem solid #636084;
                            border-radius: 0.04rem;
                            @media (max-width: 670px) {
                                width: 100%;
                                max-width: 100%;
                            }
                        }
                        .error_style {
                            outline: none;
                            border: 0.01rem solid #f5a623;
                        }
                        .email_input::placeholder {
                            color: #fff;
                            opacity: 0.2;
                        }
                        .show_error {
                            color: #f5a623;
                            margin-top: 0.1rem;
                            font-size: var(--font-12);
                            line-height: 0.12rem;
                        }
                        .hide_error {
                            margin-top: 0.1rem;
                            line-height: 0.12rem;
                            visibility: hidden;
                        }
                        .submit_btn {
                            margin-top: 0.2rem;
                            cursor: pointer;
                            :deep(.custom_btn_href) {
                                margin: 0;
                                max-width: 2.44rem;
                                @media (max-width: 670px) {
                                    max-width: 100%;
                                }
                            }
                        }
                    }
                }
            }
            .footer_bottom {
                padding: 0 0 0.56rem;
                font-size: var(--font-12);
                .community_intro {
                    opacity: 0.5;
                }
                .copyright_wrap {
                    margin-top: 0.12rem;
                    .copyright {
                        opacity: 0.5;
                    }
                    .agreement {
                        color: var(--hover-text-color);
                        .and {
                            color: rgba(255, 255, 255, 0.5);
                        }
                    }
                }
            }
        }
    }
</style>
