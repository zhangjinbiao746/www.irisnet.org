<template>
    <div class="irishub">
        <div class="irishub_content">
            <div class="irishub_wrap">
                <h1 class="irishub_title">{{ irishub.title }}</h1>
                <p class="irishub_sub_title">{{ irishub.subTitle }}</p>
                <div class="irishub_btn">
                    <custom-button
                        class="irishub_btn_item"
                        v-for="(item, index) in irishub.btnList"
                        :key="index"
                        :link="item.link"
                        :link-text="item.btnLabel"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CustomButton from '../../../components/common/CustomButton.vue';

    export default {
        name: 'MainnetBanner',
        components: {
            CustomButton
        },
        props: ['irishub']
    };
</script>

<style lang="less" scoped>
    .irishub {
        background: url('../../../assets/mainnet/irishub_hot_bg.png') no-repeat center center;
        background-size: auto 100%;
        @media (max-width: 880px) {
            background: url('../../../assets/mainnet/irishub_mobile_hot_bg.png') no-repeat center
                bottom;
            background-size: 100% auto;
        }
        .irishub_content {
            margin: 0 auto;
            max-width: 12rem;
            @media (max-width: 1200px) {
                padding: 0 0.48rem;
            }
            @media (max-width: 400px) {
                padding: 0 0.16rem;
            }
            .irishub_wrap {
                padding: 1.85rem 0 2.56rem;
                @media (max-width: 880px) {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1rem 0 5.25rem;
                }
                @media (max-width: 768px) {
                    padding: 0.57rem 0 5.25rem;
                }
                @media (max-width: 600px) {
                    padding: 0.57rem 0 4rem;
                }
                @media (max-width: 440px) {
                    padding: 0.57rem 0 2.71rem;
                }
                .irishub_title {
                    font-size: 0.6rem;
                    color: #fff;
                    line-height: 0.6rem;
                    @media (max-width: 768px) {
                        font-size: var(--font-40);
                        line-height: 0.4rem;
                    }
                }
                .irishub_sub_title {
                    margin-top: 0.48rem;
                    font-size: var(--font-20);
                    color: rgba(255, 255, 255, 0.75);
                    line-height: 0.36rem;
                    @media (max-width: 880px) {
                        text-align: center;
                    }
                }
                .irishub_btn {
                    display: flex;
                    margin-top: 0.8rem;
                    @media (max-width: 620px) {
                        flex-direction: column;
                        align-items: center;
                        .irishub_btn_item {
                            margin: 0;
                            &:last-child {
                                margin-top: 0.2rem;
                            }
                        }
                    }
                    .irishub_btn_item {
                        &:first-child {
                            margin-left: 0;
                        }
                    }
                }
            }
        }
    }
</style>
