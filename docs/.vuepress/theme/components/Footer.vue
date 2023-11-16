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
                                    @input="inputChange"
                                />
                                <p :class="flShowError ? 'show_error' : 'hide_error'">
                                    {{ item.inputBtn.btn.warningTip }}
                                </p>
                                <div v-show="showRobot" id="robot" class="robot"></div>
                                <custom-button
                                    class="submit_btn"
                                    @click.native="googleVerify"
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
    import { Message } from 'element-ui';
    import Module from '@theme/components/common/Module';
    import CustomButton from '@theme/components/common/CustomButton';
    import {
        SUCCESS_CODE,
        GOOGLE_VERIFY_ERR_TRY_AGAIN,
        GOOGLE_VERIFY_EXPIRE_AGAIN,
        NETWORK_ERROR
    } from '@theme/constant';
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
                errorTimer: '',
                showRobot: false,
                googleVerifyId: ''
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
            inputChange() {
                this.$nextTick(() => {
                    this.showRobot && (this.showRobot = false);
                });
            },
            async commitMail(token) {
                this.clearTimeoutFn(this.submitTimer);
                const res = await this.$axios
                    .post(
                        `/api/news_letter/newsletter`,
                        {
                            email: this.mailAddress
                        },
                        {
                            headers: {
                                Authorization: token
                            }
                        }
                    )
                    .catch(() => {
                        this.errorCallback();
                    });
                if (res.status === SUCCESS_CODE) {
                    if (res.data.data.is_register) {
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
                } else {
                    this.errorCallback();
                }
            },
            verifySuccess(token) {
                if (token) {
                    this.showRobot && (this.showRobot = false);
                    this.commitMail(token);
                    grecaptcha.reset(this.googleVerifyId);
                }
            },
            expiredCallback() {
                Message.closeAll();
                Message({
                    message: GOOGLE_VERIFY_EXPIRE_AGAIN,
                    type: 'warning'
                });
                this.showRobot && (this.showRobot = false);
                grecaptcha.reset(this.googleVerifyId);
            },
            errorCallback() {
                Message.closeAll();
                Message({
                    message: GOOGLE_VERIFY_ERR_TRY_AGAIN,
                    type: 'error'
                });
                this.showRobot && (this.showRobot = false);
                grecaptcha.reset(this.googleVerifyId);
            },
            renderReCaptcha() {
                grecaptcha &&
                    grecaptcha?.ready(() => {
                        this.googleVerifyId =
                            grecaptcha &&
                            grecaptcha?.render('robot', {
                                sitekey: cfg.googleSiteKey,
                                callback: this.verifySuccess,
                                'expired-callback': this.expiredCallback,
                                'error-callback': this.errorCallback
                            });
                    });
            },
            googleVerify() {
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
                if (typeof this.googleVerifyId !== 'number') {
                    const scriptDom = document.createElement('script');
                    scriptDom.src = 'https://www.google.com/recaptcha/api.js?hl=en';
                    scriptDom.async = true;
                    scriptDom.defer = true;
                    document.getElementsByTagName('head')[0].appendChild(scriptDom);
                    scriptDom.onload = () => {
                        try {
                            this.renderReCaptcha();
                            this.showRobot = true;
                        } catch (error) {
                            this.googleVerifyId = '';
                            this.showRobot && (this.showRobot = false);
                        }
                    };
                    scriptDom.onerror = () => {
                        Message.closeAll();
                        Message({
                            message: NETWORK_ERROR,
                            type: 'error'
                        });
                        this.showRobot && (this.showRobot = false);
                    };
                    document.head.removeChild(scriptDom);
                } else {
                    this.showRobot = true;
                }
            }
        },
        watch: {
            '$store.state.showMask': {
                handler(newMask) {
                    if (!newMask) {
                        this.mailAddress = '';
                    }
                },
                immediate: true
            }
        },
        async mounted() {
            try {
                await this.renderReCaptcha();
            } catch (error) {
                console.log(error);
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
                        @media (max-width: 940px) {
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
                        @media (max-width: 940px) {
                            grid-column-start: span 3;
                        }
                    }

                    &:nth-child(3) {
                        @media (max-width: 940px) {
                            grid-column-start: span 3;
                        }
                    }

                    &:nth-child(4) {
                        @media (max-width: 720px) {
                            grid-column-start: span 2;
                        }

                        @media (max-width: 540px) {
                            grid-column-start: span 3;
                        }
                    }

                    &:nth-child(5) {
                        @media (max-width: 720px) {
                            grid-column-start: span 1;
                        }

                        @media (max-width: 540px) {
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
                            min-width: 3rem;
                            width: auto;
                            height: 0.45rem;
                            color: #fff;
                            text-indent: 0.1rem;
                            background: rgba(22, 24, 57, 1);
                            border: 0.01rem solid #636084;
                            border-radius: 0.04rem;
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
                            margin-top: 0.22rem;
                            cursor: pointer;

                            :deep(.custom_btn_href) {
                                margin: 0;
                                max-width: 2.88rem;

                                @media (max-width: 720px) {
                                    max-width: 100%;
                                }
                            }
                        }

                        .robot {
                            max-width: 52%;
                            min-width: 3.04rem;
                            transition: all 0.3s linear;
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
