<template>
    <title-component :title="collaboration.title">
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
                            <img :src="logoItem.image" alt="" />
                            <p class="collaboration_logo_name">{{ logoItem.name }}</p>
                        </a>
                        <span v-else class="collaboration_logo_link">
                            <img :src="logoItem.image" alt="" />
                            <p class="collaboration_logo_name">{{ logoItem.name }}</p>
                        </span>
                    </li>
                </ul>
            </li>
        </ul>
    </title-component>
</template>

<script>
    import TitleComponent from '@theme/components/common/TitleComponent';

    export default {
        name: 'Collaboration',
        components: {
            TitleComponent
        },
        props: ['collaboration']
    };
</script>

<style lang="less" scoped>
    .collaboration {
        margin-top: 0.48rem;
        .collaboration_item {
            margin-top: 0.64rem;
            &:first-child {
                margin-top: 0;
            }
            .collaboration_title {
                font-size: var(--font-24);
                font-weight: var(--font-weight-400);
                line-height: 0.24rem;
            }
            .collaboration_logo_list {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                grid-row-gap: 0.52rem;
                margin-top: 0.36rem;
                @media (max-width: 940px) {
                    margin-top: 0.24rem;
                    grid-template-columns: repeat(4, 1fr);
                }
                @media (max-width: 540px) {
                    grid-template-columns: repeat(3, 1fr);
                    grid-row-gap: 0.32rem;
                }
                @media (max-width: 440px) {
                    grid-template-columns: repeat(2, 1fr);
                }
                .collaboration_logo_item {
                    text-align: center;
                    .collaboration_logo_link {
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
                            margin-top: 0.24rem;
                            font-size: var(--font-32);
                            font-weight: var(--font-weight-600);
                            line-height: 0.32rem;
                            color: rgba(255, 255, 255, 1);
                            @media (max-width: 768px) {
                                margin-top: 0.16rem;
                                font-size: var(--font-20);
                            }
                        }
                    }
                }
            }
        }
    }
</style>
