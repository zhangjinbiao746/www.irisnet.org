<template>
    <div class="presskit_module">
        <div class="presskit_module_content">
            <div class="presskit_module_wrap" v-for="(item, index) in moduleContents" :key="index">
                <module :title="item.title">
                    <template v-if="item.colors" #icon>
                        <div class="list color_list">
                            <div
                                class="color_item"
                                v-for="(color, cIndex) in item.colors"
                                :key="cIndex"
                                :style="{ background: color }"
                            >
                                {{ color }}
                            </div>
                        </div>
                    </template>
                    <template v-if="item.standardList" #text>
                        <div class="list standard_list">
                            <div
                                class="standard_item"
                                v-for="(standard, sIndex) in item.standardList"
                                :key="sIndex"
                            >
                                <img :src="getImageUrl(standard.imgUrl)" alt="" />
                                <div class="img_type">
                                    <a
                                        :href="getImageUrl(standard.pngUrl)"
                                        :download="getImageUrl(standard.pngUrl)"
                                        class="standard_download"
                                        rel="noopener noreferrer"
                                    >
                                        {{ standard.pngTitle }}
                                    </a>
                                    <a
                                        :href="getImageUrl(standard.svgUrl)"
                                        :download="getImageUrl(standard.svgUrl)"
                                        class="standard_download"
                                        rel="noopener noreferrer"
                                    >
                                        {{ standard.svgTitle }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-if="item.content" #other>
                        <p class="list presskit_about_content">{{ item.content }}</p>
                    </template>
                </module>
            </div>
        </div>
    </div>
</template>

<script>
    import Module from '../../../components/common/Module.vue';
    export default {
        name: 'PressKitModule',
        components: {
            Module
        },
        props: ['moduleContents'],
        methods: {
            getImageUrl(img) {
                return new URL(`../../../assets/press-kit/${img}`,import.meta.url);
            }
        }
    };
</script>

<style lang="less" scoped>
    .presskit_module {
        .presskit_module_content {
            .presskit_module_wrap {
                &:nth-of-type(odd) {
                    background: #f9fafc;
                }
                &:nth-of-type(even) {
                    background: #fff;
                }
                :deep(.module) {
                    display: flex;
                    margin: 0 auto;
                    padding: 1rem 0;
                    max-width: 12rem;
                    @media (max-width: 1200px) {
                        padding: 1rem 0.48rem;
                    }
                    @media (max-width: 768px) {
                        flex-direction: column;
                        align-items: center;
                    }
                    @media (max-width: 400px) {
                        padding: 1rem 0.16rem;
                    }
                    .module_title {
                        width: 3rem;
                        font-size: var(--font-32);
                        font-weight: var(--font-weight-600);
                        color: #323c5a;
                        line-height: 0.37rem;
                        white-space: nowrap;
                        @media (max-width: 768px) {
                            width: auto;
                        }
                    }
                    .list {
                        flex: 1;
                        @media (max-width: 768px) {
                            margin-top: 0.4rem;
                            width: 100%;
                        }
                    }
                    .color_list {
                        .color_item {
                            margin-top: 0.3rem;
                            padding-right: 0.14rem;
                            height: 0.5rem;
                            color: #fff;
                            line-height: 0.5rem;
                            text-align: right;
                            &:first-child {
                                margin-top: 0;
                            }
                        }
                    }
                    .standard_list {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        justify-content: space-between;
                        gap: 0.5rem;
                        @media (max-width: 1150px) {
                            grid-template-columns: repeat(1, 1fr);
                        }
                        .standard_item {
                            display: flex;
                            flex-direction: column;
                            @media (max-width: 768px) {
                                justify-self: center;
                            }
                            img {
                                width: 3.52rem;
                                height: 3.52rem;
                                border: 0;
                                border-radius: 0.02rem;
                                @media (max-width: 768px) {
                                    width: 3.35rem;
                                    height: 3.35rem;
                                }
                                @media (max-width: 400px) {
                                    width: 2.8rem;
                                    height: 2.8rem;
                                }
                            }
                            .img_type {
                                display: flex;
                                max-width: 3.52rem;
                                .standard_download {
                                    display: inline-block;
                                    width: 50%;
                                    height: 0.3rem;
                                    line-height: 0.3rem;
                                    color: #fff;
                                    text-align: center;
                                    &:nth-of-type(1) {
                                        background: rgba(155, 165, 190, 0.37);
                                    }
                                    &:nth-of-type(2) {
                                        background: #9ba5be;
                                    }
                                }
                            }
                        }
                    }
                    .presskit_about_content {
                        font-size: var(--font-14);
                        color: #323c5a;
                        line-height: 0.24rem;
                    }
                }
            }
        }
    }
</style>
