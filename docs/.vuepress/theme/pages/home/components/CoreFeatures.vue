<template>
    <div class="core_features" :class="{ core_features_low2: coreFeatures.list.length <= 2 }">
        <title-component class="core_wrap" :title="coreFeatures.title">
            <ul class="core_list">
                <li class="core_item" v-for="(item, index) in coreFeatures.list" :key="index">
                    <div class="core_left_block"></div>
                    <div class="core_right_content">
                        <h4 class="core_right_content_title">{{ item.title }}</h4>
                        <p class="core_right_text">{{ item.content }}</p>
                    </div>
                </li>
            </ul>
        </title-component>
        <upcoming-feature :upcoming="upcoming" />
    </div>
</template>

<script>
    import TitleComponent from '../../../components/common/TitleComponent.vue';
    import UpcomingFeature from './UpcomingFeature.vue';
    export default {
        name: 'CoreFeatures',
        components: {
            TitleComponent,
            UpcomingFeature
        },
        props: ['coreFeatures', 'upcoming']
    };
</script>

<style lang="less" scoped>
    .core_features {
        background: url('../../../assets/home/core_left.png') no-repeat left -0.7rem bottom 4.8rem,
            url('../../../assets/home/core_right.png') no-repeat right -0.1rem top -0.6rem;
        background-size: 7.99rem 7.43rem, 10.96rem 11.78rem;
        @media (max-width: 1600px) {
            background: url('../../../assets/home/core_left.png') no-repeat left -0.7rem bottom 4.8rem,
                url('../../../assets/home/core_right.png') no-repeat right -3rem top -0.6rem;
            background-size: 7.99rem 7.43rem, 10.96rem 11.78rem;
        }
        @media (max-width: 1400px) {
            background: url('../../../assets/home/core_right.png') no-repeat right -3rem top -0.5rem;
            background-size: 10rem 11.6rem;
        }
        .core_wrap {
            padding: 0.8rem 0 1rem;
            @media (max-width: 1200px) {
                padding: 0.8rem 0.48rem;
            }
            @media (max-width: 500px) {
                padding: 0.8rem 0.16rem;
            }
            .core_list {
                .core_item {
                    display: flex;
                    margin-top: 0.4rem;
                    .core_left_block {
                        width: 0.16rem;
                        background: rgba(92, 74, 188, 0.5);
                        @media (max-width: 1200px) {
                            width: 0.14rem;
                        }
                    }
                    .core_right_content {
                        max-width: 7.36rem;
                        flex: 1;
                        background: linear-gradient(
                            270deg,
                            rgba(125, 76, 255, 0.2) 0%,
                            rgba(30, 21, 64, 1) 100%
                        );
                        box-sizing: border-box;
                        padding: 0.26rem 0.36rem;
                        @media (max-width: 500px) {
                            padding: 0.24rem 0.16rem;
                        }
                        .core_right_content_title {
                            font-size: var(--font-32);
                            line-height: 0.32rem;
                            color: rgba(255, 255, 255, 1);
                            @media (max-width: 500px) {
                                font-size: 0.24rem;
                            }
                        }
                        .core_right_text {
                            margin-top: 0.12rem;
                            font-size: var(--font-20);
                            color: rgba(255, 255, 255, 0.65);
                            line-height: 0.32rem;
                            @media (max-width: 500px) {
                                font-size: var(--font-16);
                                line-height: 0.32rem;
                            }
                        }
                    }
                }
            }
        }
    }
    .core_features_low2 {
        min-height: 8.2rem;
        background: url('../../../assets/home/core_left_low2.png') no-repeat left 0 bottom 0,
            url('../../../assets/home/core_right_low2.png') no-repeat right 0 top -0.7rem;
        background-size: 7.28rem 7.43rem, 8.42rem 9.49rem;
        @media (max-width: 1500px) {
            background: url('../../../assets/home/core_right_low2.png') no-repeat right 0 top -0.7rem;
            background-size: 8.42rem 9.49rem;
        }
    }
</style>
