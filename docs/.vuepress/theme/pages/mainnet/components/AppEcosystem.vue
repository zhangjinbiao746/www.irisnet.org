<template>
    <title-component :title="appEcosystem.title">
        <div class="app_ecosystem_list">
            <div class="app_ecosystem_item" v-for="(item, index) in appEcosystem.list" :key="index">
                <img class="app_ecosystem_img" :src="getImgRandom(item.src)" alt="" />
                <h3 class="app_ecosystem_item_title">{{ item.title }}</h3>
            </div>
        </div>
    </title-component>
</template>

<script>
    import TitleComponent from '@theme/components/common/TitleComponent';
    import { getImgRandom } from '@theme/utils';

    export default {
        name: 'AppEcosystem',
        components: {
            TitleComponent
        },
        props: ['appEcosystem'],
        data() {
            return {
                getImgRandom
            };
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
            grid-template-columns: repeat(4, 1fr);
            justify-items: center;
            gap: 0.56rem 0;
            margin-top: 0.36rem;
            @media (max-width: 1200px) {
                grid-template-columns: repeat(3, 1fr);
            }
            @media (max-width: 992px) {
                grid-template-columns: repeat(2, 1fr);
            }
            @media (max-width: 700px) {
                grid-template-columns: repeat(1, 1fr);
            }
            .app_ecosystem_item {
                display: flex;
                flex-direction: column;
                align-items: center;
                .app_ecosystem_img {
                    width: 1.12rem;
                    height: 1.12rem;
                    border-radius: 0.16rem;
                }
                .app_ecosystem_item_title {
                    margin-top: 0.2rem;
                    font-size: var(--font-32);
                    font-weight: var(--font-weight-600);
                    color: #fff;
                    text-align: center;
                    line-height: 0.32rem;
                }
            }
        }
    }
</style>
