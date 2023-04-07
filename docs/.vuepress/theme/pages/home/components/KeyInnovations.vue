<template>
    <title-component :title="keyInnovations.title">
        <ul class="innovations_list">
            <li class="innovation" v-for="item in keyInnovations.list" :key="item.id">
                <img :src="getImageUrl(item.imgName)" alt="" />
                <p class="innovation_info">{{ item.msg }}</p>
            </li>
        </ul>
    </title-component>
</template>

<script>
    import TitleComponent from '@theme/components/common/TitleComponent';
    export default {
        name: 'KeyInnovations',
        components: {
            TitleComponent
        },
        props: ['keyInnovations'],
        methods: {
            getImageUrl(img) {
                return require(`../../../assets/home/${img}`);
            }
        }
    };
</script>

<style lang="less" scoped>
    .innovations_list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.4rem;
        margin-top: 0.68rem;
        @media (max-width: 1000px) {
            grid-template-columns: repeat(1, 1fr);
        }
        .innovation {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0.64rem 0.3rem 0.36rem 0.3rem;
            background: url('../../../assets/home/innovation_bg.png') no-repeat center / cover;
            border: 0.03rem solid rgba(111, 33, 193, 0.2);
            border-radius: 0.04rem;
            @media (max-width: 1000px) {
                justify-self: center;
                max-width: 5rem;
            }
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
        .innovation:first-child {
            background: url('../../../assets/home/innovation_bg_first.png') no-repeat center / cover;
        }
        .innovation:last-child {
            background: url('../../../assets/home/innovation_bg_last.png') no-repeat center / cover;
        }
    }
</style>
