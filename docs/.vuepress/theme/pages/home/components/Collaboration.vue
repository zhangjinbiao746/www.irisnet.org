<template>
    <title-component id="collaboration" :title="collaboration.title">
        <ul class="collaboration">
            <li class="collaboration_item" v-for="(item, index) in collaboration.list" :key="index">
                <h5 class="collaboration_title">{{ item.title }}</h5>
                <ul class="collaboration_logo_list">
                    <li
                        class="collaboration_logo_item"
                        v-for="(logoItem, logoIndex) in item.list"
                        :key="logoIndex"
                    >
                        <a
                            v-if="logoItem.link"
                            class="collaboration_logo_link"
                            :href="logoItem.link"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img :src="getImgRandom(logoItem.image)" alt="" />
                            <p class="collaboration_logo_name collaboration_logo_link_name">{{
                                logoItem.name
                            }}</p>
                        </a>
                        <span v-else class="collaboration_logo_link">
                            <img :src="getImgRandom(logoItem.image)" alt="" />
                            <p class="collaboration_logo_name">{{ logoItem.name }}</p>
                        </span>
                    </li>
                </ul>
            </li>
        </ul>
    </title-component>
</template>

<script>
    import TitleComponent from '../../../components/common/TitleComponent.vue';
    import { getImgRandom } from '../../../utils';

    export default {
        name: 'Collaboration',
        components: {
            TitleComponent
        },
        props: ['collaboration'],
        data() {
            return {
                getImgRandom
            };
        }
    };
</script>

<style lang="less" scoped>
    .collaboration {
        margin-top: 0.48rem;
        padding-bottom: 0.8rem;
        .collaboration_item {
            margin-top: 0.96rem;
            &:first-child {
                margin-top: 0;
            }
            .collaboration_title {
                font-size: var(--font-24);
                line-height: 0.24rem;
            }
            .collaboration_logo_list {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                gap: 1.11rem 1.36rem;
                margin-top: 0.36rem;
                padding: 0 0.91rem;
                @media (max-width: 1200px) {
                    grid-template-columns: repeat(4, 1fr);
                }
                @media (max-width: 1080px) {
                    grid-template-columns: repeat(3, 1fr);
                }
                @media (max-width: 870px) {
                    margin-top: 0.24rem;
                    grid-template-columns: repeat(2, 1fr);
                }
                @media (max-width: 768px) {
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.08rem 0.8rem;
                    padding: 0 0.2rem;
                }
                @media (max-width: 620px) {
                    grid-template-columns: repeat(3, 1fr);
                }
                @media (max-width: 500px) {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.08rem 0.4rem;
                }
                @media (max-width: 500px) {
                    padding: 0;
                    grid-template-columns: repeat(1, 1fr);
                }
                .collaboration_logo_item {
                    text-align: center;
                    .collaboration_logo_link {
                        position: relative;
                        display: inline-block;
                        img {
                            width: 1rem;
                            height: 1rem;
                            @media (max-width: 768px) {
                                width: 0.6rem;
                                height: 0.6rem;
                            }
                        }
                        .collaboration_logo_name {
                            position: absolute;
                            left: 50%;
                            transform: translateX(-50%);
                            margin-top: 0.24rem;
                            font-size: var(--font-32);
                            font-weight: var(--font-weight-600);
                            line-height: 0.32rem;
                            color: rgba(255, 255, 255, 1);
                            white-space: nowrap;
                            @media (max-width: 768px) {
                                margin-top: 0.16rem;
                                font-size: var(--font-20);
                            }
                        }
                        .collaboration_logo_link_name {
                            &:hover {
                                color: var(--hover-text-color);
                            }
                        }
                    }
                }
            }
        }
    }
</style>
