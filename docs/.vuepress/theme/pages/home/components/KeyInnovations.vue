<template>
    <title-component :title="keyInnovations.title">
        <ul
            class="innovations_list"
            :style="{
                'grid-template-columns':
                    keyInnovations.list.length < 3
                        ? `repeat(${keyInnovations.list.length}, 1fr)`
                        : 'repeat(3, 1fr)'
            }"
        >
            <li
                class="innovation"
                v-for="(item, index) in keyInnovations.list"
                :key="index"
                :style="{
                    background: `url(${getImgRandom(item.bgImage)}) no-repeat center / cover`
                }"
            >
                <img :src="getImgRandom(item.imgName)" alt="" />
                <p class="innovation_info">{{ item.msg }}</p>
            </li>
        </ul>
    </title-component>
</template>

<script>
    import TitleComponent from '../../../components/common/TitleComponent.vue';
    import { getImgRandom } from '../../../utils';

    export default {
        name: 'KeyInnovations',
        components: {
            TitleComponent
        },
        props: ['keyInnovations'],
        data() {
            return {
                getImgRandom
            };
        }
    };
</script>

<style lang="less" scoped>
    .innovations_list {
        display: grid;
        gap: 0.4rem;
        margin-top: 0.68rem;
        @media (max-width: 1000px) {
            grid-template-columns: repeat(1, 1fr) !important;
        }
        .innovation {
            justify-self: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0.45rem 0.3rem 0.36rem 0.3rem;
            max-width: 4.34rem;
            min-height: 3.13rem;
            border: 0.03rem solid rgba(111, 33, 193, 0.2);
            border-radius: 0.04rem;
            img {
                width: 1.5rem;
                height: 1.5rem;
            }
            .innovation_info {
                margin-top: 0.4rem;
                font-size: var(--font-20);
                color: rgba(255, 255, 255, 0.74);
                line-height: 0.32rem;
            }
        }
    }
</style>
