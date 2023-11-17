<template>
    <div class="developers">
        <div class="developers_content">
            <h1 class="developers_title">{{ developersTitle }}</h1>
            <title-component :title="testnet.title">
                <div class="testnet">
                    <h3 class="testnet_title">{{ testnet.content.title }}</h3>
                    <p class="testnet_intro">{{ testnet.content.content }}</p>
                    <custom-button
                        class="testnet_btn"
                        :link="testnet.content.link"
                        :link-text="testnet.content.btnLabel"
                        :target="testnet.content.isRouterLink ? '_self' : '_blank'"
                    />
                </div>
            </title-component>
        </div>
    </div>
</template>

<script>
    import TitleComponent from '../../components/common/TitleComponent.vue';
    import CustomButton from '../../components/common/CustomButton.vue';
    import { getModuleContent } from '../../utils';

    export default {
        name: 'Developers',
        components: {
            TitleComponent,
            CustomButton
        },
        computed: {
            developersTitle() {
                return getModuleContent(this, 'developersTitle');
            },
            testnet() {
                return getModuleContent(this, 'testnet');
            }
        }
    };
</script>

<style lang="less" scoped>
    .developers {
        padding-top: 0.6rem;
        background: #0d0e2c;
        .developers_content {
            margin: 0 auto;
            padding: 0.7rem 0 1.2rem;
            max-width: 12rem;
            @media (max-width: 1200px) {
                padding: 0.7rem 0.48rem 1.2rem;
            }
            @media (max-width: 768px) {
                padding: 0.7rem 0.2rem 1.2rem;
            }
            .developers_title {
                font-size: 0.52rem;
                color: #fff;
                line-height: 0.52rem;
            }
            .title_container {
                padding: 0.7rem 0 0;
                .testnet {
                    margin-top: 0.28rem;
                    padding: 0.4rem 0.44rem;
                    background: url(../../assets/developers/testnet_image.png) no-repeat 100% /
                        cover;
                    border-radius: 0.04rem;
                    @media (max-width: 1100px) {
                        background-position: 70% center;
                    }
                    @media (max-width: 768px) {
                        padding: 0.2rem 0.24rem;
                        background: url(../../assets/developers/testnet_mobile_image.png) no-repeat
                            center / cover;
                    }
                    .testnet_title {
                        font-size: var(--font-32);
                        color: #fff;
                        line-height: 0.45rem;
                    }
                    .testnet_intro {
                        margin-top: 0.16rem;
                        max-width: 5.4rem;
                        font-size: var(--font-14);
                        line-height: 0.22rem;
                    }
                    .testnet_btn {
                        margin: 0.32rem 0 0;
                        width: 2.2rem;
                    }
                }
            }
        }
    }
</style>
