<template>
    <div class="explorer">
        <div class="explorer_content">
            <div class="explorer_title">{{ cosmosExplorer.title }}</div>
            <div class="explorer_list">
                <a
                    class="explorer_item"
                    v-for="(item, index) in cosmosExplorer.list"
                    :key="index"
                    :href="item.href"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="iconfont" :class="item.icon"></i>
                    <p class="explorer_name">{{ item.title }}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Explorer',
        props: ['cosmosExplorer']
    };
</script>

<style lang="less" scoped>
    .explorer {
        .explorer_content {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 auto;
            padding: 0.92rem 0 0.4rem;
            max-width: 8.16rem;
            @media (max-width: 920px) {
                padding: 0.64rem 0 0.4rem;
            }
            @media (max-width: 600px) {
                padding: 0.36rem 0 0.4rem;
            }
            .explorer_title {
                font-size: 0.28rem;
                font-weight: var(--font-weight-600);
                color: #000;
            }
            .explorer_list {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 0.6rem;
                margin-top: 1rem;
                @media (max-width: 920px) {
                    grid-template-columns: repeat(2, 1fr);
                    margin-top: 0.8rem;
                }
                @media (max-width: 600px) {
                    gap: 0.3rem;
                    margin-top: 0.4rem;
                }
                .explorer_item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0.4rem 0.3rem 0.3rem;
                    border: 0.01rem solid #999;
                    @media (max-width: 920px) {
                        max-width: 1.7rem;
                    }
                    @media (max-width: 600px) {
                        max-width: 1.08rem;
                    }
                    @media (max-width: 420px) {
                        padding: 0.4rem 0.2rem 0.12rem;
                        max-width: 0.85rem;
                    }
                    &:hover {
                        background: #2f85dc;
                        transition: all 0.3s ease-in-out;
                        .iconfont {
                            color: #fff;
                        }
                        .explorer_name {
                            color: #fff;
                        }
                    }
                    .iconfont {
                        font-size: 1.55rem;
                        color: #2f85dc;
                        @media (max-width: 600px) {
                            font-size: 0.67rem;
                        }
                    }
                    .explorer_name {
                        margin-top: 0.4rem;
                        font-size: var(--font-20);
                        color: #999;
                        text-align: center;
                        line-height: 0.26rem;
                        @media (max-width: 600px) {
                            font-size: var(--font-16);
                        }
                        @media (max-width: 420px) {
                            margin-top: 0.2rem;
                        }
                    }
                }
            }
        }
    }
</style>
