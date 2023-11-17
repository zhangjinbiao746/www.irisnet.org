<template>
    <div class="delegation">
        <div class="delegation_content">
            <div class="delegation_title">{{ delegation.title }}</div>
            <ul class="delegation_list">
                <li
                    class="delegation_item"
                    v-for="(item, index) in delegation.product"
                    :key="index"
                >
                    <img :src="getImageUrl(item.img)" alt="" />
                    <p class="delegation_item_intro">{{ item.text }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Delegation',
        props: ['delegation'],
        methods: {
            getImageUrl(img) {
                return new URL(`../../../assets/irisnet-bianjie/${img}`,import.meta.url);
            }
        }
    };
</script>

<style lang="less" scoped>
    .delegation {
        background: #fcfcff;
        .delegation_content {
            margin: 0 auto;
            padding: 1rem 0 0.8rem;
            max-width: 8rem;
            @media (max-width: 900px) {
                padding: 1rem 0.2rem 0.8rem;
            }
            .delegation_title {
                font-size: 0.28rem;
                font-weight: var(--font-weight-600);
                color: #000;
                text-align: center;
            }
            .delegation_list {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 0.8rem;
                margin-top: 0.8rem;
                @media (max-width: 768px) {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 0.4rem;
                }
                @media (max-width: 400px) {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 0.2rem;
                }
                .delegation_item {
                    display: flex;
                    flex-direction: column;
                    justify-items: center;
                    align-items: center;
                    img {
                        height: 0.98rem;
                    }
                    .delegation_item_intro {
                        color: #999;
                        text-align: center;
                        line-height: 0.18rem;
                    }
                }
            }
        }
    }
</style>
