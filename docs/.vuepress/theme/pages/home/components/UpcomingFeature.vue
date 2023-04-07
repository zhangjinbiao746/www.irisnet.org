<template>
    <title-component :title="upcoming.title">
        <ul class="upcoming_list">
            <li class="upcoming_item" v-for="(item, index) in upcoming.list" :key="index">
                <img :src="getImageUrl(item.imgName)" alt="" />
                <h5 class="upcoming_item_title">{{ item.title }}</h5>
                <p class="upcoming_item_content">{{ item.content }}</p>
            </li>
        </ul>
    </title-component>
</template>

<script>
    import TitleComponent from '@theme/components/common/TitleComponent';
    export default {
        name: 'UpcomingFeature',
        components: {
            TitleComponent
        },
        props: ['upcoming'],
        methods: {
            getImageUrl(img) {
                return require(`../../../assets/home/${img}`);
            }
        }
    };
</script>

<style lang="less" scoped>
    .upcoming_list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.36rem;
        margin-top: 0.48rem;
        @media (max-width: 1200px) {
            grid-template-columns: repeat(1, 1fr);
        }
        .upcoming_item {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0.74rem 0.5rem 0.72rem 0.5rem;
            @media (max-width: 500px) {
                padding: 0.48rem 0.32rem;
            }
            img {
                height: 1.6rem;
            }
            .upcoming_item_title {
                margin-top: 0.58rem;
                font-size: var(--font-32);
                font-weight: var(--font-weight-400);
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
        .upcoming_item:first-child {
            background: url('../../../assets/home/cosmwasm_bg.png') no-repeat center / cover;
        }
    }
</style>
