<template>
    <title-component :title="resources.title">
        <ul class="resources_list">
            <li class="resource" v-for="(item, index) in resources.list" :key="index">
                <div class="resource_left">
                    <img class="resource_left_img" :src="getImgRandom(item.img)" alt="" />
                    <span class="resource_left_name">{{ item.name }}</span>
                </div>
                <div class="resource_right">
                    <ul class="resource_content_list">
                        <li
                            class="content"
                            v-for="(content, cIndex) in item.resourceList"
                            :key="cIndex"
                        >
                            <a
                                class="content_name"
                                :href="content.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                >{{ content.itemName }}</a
                            >
                            <span v-if="content.osList">
                                <i
                                    class="iconfont os_content"
                                    v-for="(os, oIndex) in content.osList"
                                    :class="os"
                                    :key="oIndex"
                                ></i>
                            </span>
                        </li>
                    </ul>
                    <hr class="hr" />
                    <p class="content_intro">{{ item.content }}</p>
                </div>
            </li>
        </ul>
        <a
            class="more_resource"
            :href="moreResource.href"
            target="_blank"
            rel="noopener noreferrer"
        >
            {{ moreResource.text }}
        </a>
    </title-component>
</template>

<script>
    import TitleComponent from '../../../components/common/TitleComponent.vue';
    import { getImgRandom } from '../../../utils';

    export default {
        name: 'Resources',
        components: {
            TitleComponent
        },
        props: ['resources', 'moreResource'],
        data() {
            return {
                getImgRandom
            };
        }
    };
</script>

<style lang="less" scoped>
    .title_container {
        padding: 0 0 0.85rem;
        @media (max-width: 1200px) {
            padding: 0.36rem 0.48rem 0.85rem;
        }
        @media (max-width: 440px) {
            padding: 0.36rem 0.16rem 0.85rem;
        }
        .resources_list {
            margin-top: 0.48rem;
            .resource {
                display: flex;
                align-items: center;
                margin-top: 0.85rem;
                &:first-child {
                    margin-top: 0;

                    .resource_right {
                        .resource_content_list {
                            grid-template-columns: repeat(3, 1fr);
                            @media (max-width: 940px) {
                                grid-template-columns: repeat(2, 1fr);
                            }
                            @media (max-width: 660px) {
                                grid-template-columns: repeat(1, 1fr);
                            }
                        }
                    }
                }
                @media (max-width: 1200px) {
                    flex-direction: column;
                    align-items: flex-start;
                }
                .resource_left {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-right: 0.2rem;
                    width: 2.32rem;
                    @media (max-width: 1200px) {
                        flex-direction: row;
                        align-items: center;
                        margin-right: 0;
                        width: 100%;
                    }
                    .resource_left_img {
                        width: 1rem;
                        height: 1rem;
                        border-radius: 50%;
                    }
                    .resource_left_name {
                        margin-top: 0.28rem;
                        font-size: var(--font-24);
                        font-weight: var(--font-weight-600);
                        line-height: 0.4rem;
                        color: #fff;
                        @media (max-width: 1200px) {
                            margin-top: 0;
                            margin-left: 0.16rem;
                        }
                    }
                }
                .resource_right {
                    flex: 1;
                    @media (max-width: 1200px) {
                        margin-top: 0.36rem;
                        margin-left: 0;
                        width: 100%;
                    }
                    .resource_content_list {
                        display: grid;
                        grid-template-columns: repeat(5, 1fr);
                        gap: 0.28rem;
                        @media (max-width: 930px) {
                            grid-template-columns: repeat(3, 1fr);
                        }
                        @media (max-width: 610px) {
                            grid-template-columns: repeat(2, 1fr);
                        }
                        @media (max-width: 370px) {
                            grid-template-columns: repeat(1, 1fr);
                        }
                        .content {
                            .content_name {
                                font-size: var(--font-24);
                                font-weight: var(--font-weight-600);
                                color: #fff;
                                line-height: 0.32rem;
                                white-space: nowrap;
                                &:hover {
                                    color: var(--hover-text-color);
                                }
                            }
                            .os_content {
                                margin-left: 0.15rem;
                                font-size: var(--font-24);
                                color: rgba(255, 255, 255, 0.35);
                            }
                        }
                    }
                    .hr {
                        margin-top: 0.28rem;
                    }
                    .content_intro {
                        margin-top: 0.17rem;
                    }
                }
            }
        }
        .more_resource {
            display: inline-block;
            margin-top: 0.8rem;
            margin-left: 0.66rem;
            padding: 0.14rem 0.16rem;
            color: rgba(155, 100, 237, 1);
            border: 0.02rem solid rgba(155, 100, 237, 1);
            border-radius: 0.04rem;
            @media (max-width: 1200px) {
                margin-left: 0;
            }
            @media (max-width: 440px) {
                margin-top: 0.36rem;
            }
        }
    }
</style>
