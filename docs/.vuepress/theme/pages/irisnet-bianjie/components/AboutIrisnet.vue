<template>
    <div class="about">
        <div class="about_content">
            <div class="about_title">{{ aboutContent.title }}</div>
            <div class="about_info">
                <div
                    class="about_info_item"
                    v-for="(item, index) in aboutContent.aboutInfo"
                    :key="index"
                >
                    <div class="line" :style="{ background: item.color }"></div>
                    <p class="label">{{ item.label }}</p>
                    <img :src="getImageUrl(item.img)" alt="" />
                </div>
            </div>
            <div class="about_intro">
                <div
                    class="about_intro_item"
                    v-for="(item, index) in aboutContent.aboutIntroList"
                    :class="{ about_intro_item_dynamic: item.position }"
                    :key="index"
                >
                    <img :src="getImageUrl(item.img)" alt="" />
                    <ul class="intro_list">
                        <li
                            class="intro_item"
                            v-for="(intro, iIndex) in item.list"
                            :key="iIndex"
                            v-html="intro"
                        >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="logo_content">
            <a
                class="logo_item"
                v-for="(item, index) in logo"
                :key="index"
                :href="item.link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img :src="getImageUrl(item.img)" alt="" />
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutIrisnet',
        props: ['aboutContent', 'logo'],
        methods: {
            getImageUrl(img) {
                return new URL(`../../../assets/irisnet-bianjie/${img}`,import.meta.url);
            }
        }
    };
</script>

<style lang="less" scoped>
    .about {
        background: #fcfcff;
        .about_content {
            padding: 1rem 0 1.19rem;
            margin: 0 auto;
            max-width: 8rem;
            @media (max-width: 860px) {
                width: 90%;
            }
            @media (max-width: 500px) {
                padding: 1rem 0.16rem 1.19rem;
                width: auto;
            }
            .about_title {
                font-size: 0.28rem;
                font-weight: var(--font-weight-600);
                color: #000;
                text-align: center;
            }
            .about_info {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 0.1rem 0.4rem;
                margin-top: 0.6rem;
                @media (max-width: 1035px) {
                    gap: 0.1rem;
                }
                @media (max-width: 860px) {
                    grid-template-columns: repeat(1, 1fr);
                }
                .about_info_item {
                    position: relative;
                    display: flex;
                    padding: 0.19rem 0 0.19rem 0.1rem;
                    color: #000;
                    line-height: 0.21rem;
                    background: #fff;
                    border-radius: 0.04rem;
                    .line {
                        width: 0.01rem;
                        height: 0.21rem;
                    }
                    .label {
                        margin-left: 0.1rem;
                        font-weight: var(--font-weight-600);
                    }
                    img {
                        position: absolute;
                        top: 0;
                        right: 0;
                        height: 100%;
                    }
                }
            }
            .about_intro {
                margin-top: 0.3rem;
                .about_intro_item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 0.3rem;
                    min-height: 1.5rem;
                    background: #fff;
                    border-radius: 0.04rem;
                    &:first-child {
                        margin-top: 0;
                    }
                    img {
                        width: 1.62rem;
                        height: 1.5rem;
                        @media (max-width: 768px) {
                            align-self: flex-start;
                            width: 0.81rem;
                            height: 0.75rem;
                        }
                        @media (max-width: 500px) {
                            width: 0.4rem;
                            height: 0.33rem;
                        }
                    }
                    .intro_list {
                        flex: 1;
                        margin-left: 0.2rem;
                        .intro_item {
                            padding-right: 0.16rem;
                            font-size: var(--font-14);
                            color: #666;
                            line-height: 0.21rem;
                            &::before {
                                content: '';
                                display: inline-block;
                                margin-right: 0.09rem;
                                width: 0.04rem;
                                height: 0.04rem;
                                background: #999;
                                border-radius: 50%;
                            }
                        }
                    }
                }
                .about_intro_item_dynamic {
                    flex-direction: row-reverse;
                    img {
                        @media (max-width: 768px) {
                            align-self: flex-end;
                        }
                        @media (max-width: 500px) {
                            width: 0.4rem;
                            height: 0.33rem;
                        }
                    }
                    .intro_list {
                        margin-left: 0;
                        margin-right: 0.2rem;
                        .intro_item {
                            padding-left: 0.16rem;
                            text-align: right;
                            &::before {
                                display: none;
                            }
                            &::after {
                                content: '';
                                display: inline-block;
                                margin-left: 0.09rem;
                                width: 0.04rem;
                                height: 0.04rem;
                                background: #999;
                                border-radius: 50%;
                                white-space: nowrap;
                            }
                        }
                    }
                }
            }
        }
        .logo_content {
            padding: 0.97rem 0;
            width: 100%;
            text-align: center;
            background: #171931;
            .logo_item {
                margin-left: 1.8rem;
                @media (max-width: 500px) {
                    margin-left: 0.85rem;
                }
                @media (max-width: 400px) {
                    margin-left: 0.4rem;
                }
                &:first-child {
                    margin-left: 0;
                }
                img {
                    width: 1.16rem;
                }
            }
        }
    }
</style>
