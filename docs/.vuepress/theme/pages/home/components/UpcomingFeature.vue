<template>
    <title-component class="upcoming_wrap" :title="upcomingTitle">
        <ul class="upcoming_list" :class="{ upcoming_list_single: upcoming.list.length <= 1 }">
            <li
                class="upcoming_item"
                v-for="(item, index) in upcoming.list"
                :key="index"
                :style="{
                    background: `url(${getImgRandom(item.bgImage)}) no-repeat center / cover`
                }"
            >
                <img :src="getImgRandom(item.imgName)" alt="" />
                <h5 class="upcoming_item_title">{{ item.title }}</h5>
                <p class="upcoming_item_content">{{ item.content }}</p>
            </li>
        </ul>
    </title-component>
</template>

<script>
    import TitleComponent from '../../../components/common/TitleComponent.vue';
    import { getImgRandom } from '../../../utils';

    export default {
        name: 'UpcomingFeature',
        components: {
            TitleComponent,
        },
        props: ['upcoming'],
        data() {
            return {
                getImgRandom
            };
        },
        computed: {
            upcomingTitle() {
                if (this.upcoming.list.length > 1) {
                    return `${this.upcoming.title}s`;
                } else {
                    return this.upcoming.title;
                }
            }
        }
    };
</script>

<style lang="less" scoped>
    .upcoming_wrap {
        padding: 0.2rem 0;
        @media (max-width: 1200px) {
            padding: 0.2rem 0.48rem;
        }
        @media (max-width: 500px) {
            padding: 0.2rem 0.16rem;
        }
        .upcoming_list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.36rem;
            margin-top: 0.48rem;
            @media (max-width: 1200px) {
                grid-template-columns: repeat(1, 1fr);
            }
            .upcoming_item {
                justify-self: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 0.74rem 0.5rem 0.72rem 0.5rem;
                max-width: 4.8rem;
                @media (max-width: 500px) {
                    padding: 0.48rem 0.32rem;
                }
                img {
                    height: 1.6rem;
                }
                .upcoming_item_title {
                    margin-top: 0.58rem;
                    font-size: var(--font-32);
                    line-height: 0.32rem;
                    text-align: center;
                    color: #fff;
                }
                .upcoming_item_content {
                    margin-top: 0.24rem;
                    font-size: var(--font-20);
                    line-height: 0.32rem;
                }
            }
        }
        .upcoming_list_single {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>
