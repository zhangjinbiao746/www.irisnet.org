<template>
    <title-component :title="appEcosystem.title">
        <div class="app_ecosystem_list">
            <a
                class="app_ecosystem_item"
                v-for="(item, index) in appEcosystem.list"
                :key="index"
                :href="item.link || ''"
                :target="item.link ? '_blank' : ''"
                rel="noreferrer noopener"
            >
                <img class="app_ecosystem_img" :src="getImageUrl(item.src)" alt="" />
                <h3 class="app_ecosystem_item_title">{{ item.title }}</h3>
                <p class="app_ecosystem_item_section">{{ item.section }}</p>
            </a>
        </div>
    </title-component>
</template>

<script>
    import TitleComponent from '@theme/components/common/TitleComponent';

    export default {
        name: 'AppEcosystem',
        components: {
            TitleComponent
        },
        props: ['appEcosystem'],
        methods: {
            getImageUrl(img) {
                return require(`../../../assets/mainnet/${img}`);
            }
        }
    };
</script>

<style lang="less" scoped>
    .title_container {
        padding: 0.8rem 0 1.2rem;
        @media (max-width: 1200px) {
            padding: 0.8rem 0.48rem 1.2rem;
        }
        @media (max-width: 768px) {
            padding: 0.36rem 0.48rem 0;
        }
        @media (max-width: 440px) {
            padding: 0.36rem 0.16rem 0;
        }
        .app_ecosystem_list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-items: center;
            gap: 0.16rem;
            margin-top: 0.36rem;
            @media (max-width: 880px) {
                grid-template-columns: repeat(1, 1fr);
            }
            .app_ecosystem_item {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 0.36rem 0.24rem;
                max-width: 3.52rem;
                &:hover {
                    background: rgba(22, 24, 57, 1);
                }
                .app_ecosystem_img {
                    width: 1.4rem;
                    height: 1.4rem;
                    border-radius: 50%;
                }
                .app_ecosystem_item_title {
                    margin-top: 0.3rem;
                    font-size: var(--font-32);
                    font-weight: var(--font-weight-600);
                    color: #fff;
                    text-align: center;
                    line-height: 0.32rem;
                }
                .app_ecosystem_item_section {
                    margin-top: 0.24rem;
                    color: rgba(255, 255, 255, 0.65);
                    line-height: 0.32rem;
                }
            }
        }
    }
</style>
