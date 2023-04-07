<template>
    <div class="md_container" v-if="showMd">
        <div class="md_wrap">
            <Content></Content>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Markdown',
        props: ['showMd'],
        computed: {
            dynamicList() {
                return this.$page.frontmatter.dynamicList;
            }
        }
    };
</script>

<style lang="less" scoped>
    .md_container {
        margin-top: 4.8rem;
        width: 100%;
        height: 100%;
        font-size: var(--font-14);
        font-weight: var(--font-weight-500);
        color: #000;
        line-height: 3rem;

        .md_wrap {
            box-sizing: border-box;
            margin: 0 auto;
            padding: 6rem 0 10rem;
            max-width: 96rem;
            color: rgba(0, 0, 0, 0.75);

            @media (max-width: 1000px) {
                padding-left: 4.8rem;
                padding-right: 4.8rem;
            }
            @media (max-width: 400px) {
                padding-left: 1.6rem;
                padding-right: 1.6rem;
            }

            h1 {
                font-size: var(--font-24);
                font-weight: var(--font-weight-600);
                color: #000;
                line-height: 2.6rem;
            }
            hr {
                border: 1px solid #eaecef;
            }

            ul {
                padding-left: 20px;

                li::before {
                    content: '';
                    display: inline-block;
                    margin-right: 8px;
                    width: 5px;
                    height: 5px;
                    line-height: 5px;
                    vertical-align: middle;
                    background: #000;
                    border-radius: 50%;
                }
            }

            .article {
                display: flex;
                flex-direction: column;
                margin-top: 16px;
                margin-bottom: 15px;
                line-height: 16px;

                &::after {
                    content: '';
                    display: block;
                    margin-top: 1.5rem;
                    width: 100%;
                    height: 0.1rem;
                    background: #e8ebf5;
                }

                .article_container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .article_owner_container {
                        display: flex;
                        align-items: center;

                        .article_icon_wrap {
                            margin-right: 8px;
                            width: 16px;
                            height: 16px;

                            .article_icon {
                                display: inline-block;
                                width: 16px;
                                height: 16px;
                            }
                        }

                        .article_owner {
                            height: 16px;
                            font-size: 14px;
                            font-weight: 400;
                            color: rgba(0, 0, 0, 0.75);
                            line-height: 16px;
                        }
                    }

                    .article_time {
                        height: 16px;
                        line-height: 16px;
                        font-size: 14px;
                        font-weight: 400;
                        color: rgba(0, 0, 0, 0.64);
                    }
                }
            }

            img {
                width: 100%;

                @media (max-width: 375px) {
                    width: 100% !important;
                }
            }

            .prev_next_container {
                display: flex;
                justify-content: flex-start;
                margin-top: 4.8rem;
                width: 100%;
                height: 10.8rem;

                .prev_container {
                    box-sizing: border-box;
                    justify-content: flex-start;
                    align-items: flex-start;
                    padding: 1.6rem 2.4rem;
                    width: 37.2rem;
                    height: 100%;
                    border: 0.1rem solid #e8ebf5;
                    border-radius: 0.4rem;

                    &:hover {
                        border: 0.1rem solid var(--hover-link-color);
                    }
                    .prev {
                        display: flex;
                        align-items: center;
                        &::before {
                            content: '';
                            display: inline-block;
                            margin-right: 0.8rem;
                            width: 0.4rem;
                            height: 1.6rem;
                            background: #7065ff;
                        }
                    }
                }

                .next_container {
                    box-sizing: border-box;
                    justify-content: flex-start;
                    align-items: flex-start;
                    margin-left: 2.4rem;
                    padding: 1.6rem 2.4rem;
                    width: 37.2rem;
                    height: 100%;
                    border: 0.1rem solid #e8ebf5;
                    border-radius: 0.4rem;

                    &:hover {
                        border: 0.1rem solid var(--hover-link-color);
                    }
                    .next {
                        display: flex;
                        align-items: center;
                        &::before {
                            content: '';
                            display: inline-block;
                            margin-right: 0.8rem;
                            width: 0.4rem;
                            height: 1.6rem;
                            background: #7065ff;
                        }
                    }
                }
            }
        }
    }
</style>
