<template>
    <title-component :title="features.title">
        <div class="features_list">
            <div
                class="feature_item"
                v-for="(item, index) in features.list"
                :key="index"
                :style="{ background: `url(${getImgRandom(item.bgImage)}) no-repeat` }"
            >
                <div class="feature_item_info">
                    <p class="feature_item_label">{{ item.label }}</p>
                    <p class="feature_item_intro">{{ item.intro }}</p>
                </div>
            </div>
        </div>
    </title-component>
</template>

<script>
    import TitleComponent from '../../../components/common/TitleComponent.vue';
    import { getImgRandom } from '../../../utils';

    export default {
        name: 'NewFeatures',
        components: {
            TitleComponent
        },
        props: ['features'],
        data() {
            return {
                getImgRandom
            };
        }
    };
</script>

<style lang="less" scoped>
    .title_container {
        padding: 0;
        @media (max-width: 1200px) {
            padding: 0 0.48rem;
        }
        @media (max-width: 440px) {
            padding: 0 0.16rem;
        }
        .features_list {
            margin: 0 auto;
            max-width: 11.34rem;
            .feature_item {
                display: flex;
                align-items: center;
                min-height: 4.68rem;
                background-size: 5.6rem auto !important;
                &:nth-of-type(odd) {
                    justify-content: flex-end;
                    margin-right: 0.4rem;
                }
                &:nth-of-type(even) {
                    margin-left: 0.4rem;
                    background-position: 100% 100% !important;
                }
                @media (max-width: 1200px) {
                    min-height: 3.51rem;
                    background-size: 4.2rem auto !important;
                }
                @media (max-width: 1000px) {
                    min-height: 2.93rem;
                    background-size: 3.5rem auto !important;
                }
                @media (max-width: 680px) {
                    margin-top: 0.24rem;
                    min-height: auto;
                    background-image: none !important;
                    &:nth-of-type(odd) {
                        justify-content: flex-start;
                        margin-right: 0;
                    }
                    &:nth-of-type(even) {
                        margin-left: 0;
                    }
                }
                .feature_item_info {
                    max-width: 4.6rem;
                    @media (max-width: 1000px) {
                        max-width: 3.6rem;
                    }
                    @media (max-width: 830px) {
                        max-width: 2.6rem;
                    }
                    @media (max-width: 680px) {
                        max-width: 100%;
                    }
                    .feature_item_label {
                        font-size: 0.32rem;
                        color: #fff;
                        line-height: 0.48rem;
                        @media (max-width: 680px) {
                            font-size: 0.24rem;
                        }
                    }
                    .feature_item_intro {
                        line-height: 0.32rem;
                    }
                }
            }
        }
    }
</style>
