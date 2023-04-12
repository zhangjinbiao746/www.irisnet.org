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
        props: ['showMd']
    };
</script>

<style lang="less" scoped>
    .md_container {
        padding-top: 0.6rem;
        // width: 100%;
        // height: 100%;
        background: #2d2948 url('../assets/privacy.png') no-repeat;
        background-attachment: fixed;
        background-position: 36% 1.8rem;
        .md_wrap {
            margin: 0 auto;
            padding: 0.7rem 0.2rem 1.4rem;
            max-width: 12rem;
            color: #d4d5de;
            line-height: 0.26rem;
            :deep(.content__default) {
                h1,
                h3,
                h4,
                h5,
                h6 {
                    color: #fff;
                }
                h1 {
                    font-size: 0.3rem;
                    font-weight: var(--font-weight-600) !important;
                    line-height: 0.32rem;
                    text-align: center;
                }
                h2 {
                    margin-top: 0.14rem;
                    font-size: var(--font-24);
                    color: #8c8fa6;
                }
                h3 {
                    margin-top: 0.18rem;
                    font-size: var(--font-24);
                }
                hr {
                    width: 0.84rem;
                    height: 0.02rem;
                    background: #c83e66;
                    border: 0;
                }
                a {
                    color: #7681e3;
                }
                p {
                    padding: 0 0.08rem;
                }
                h3 + p {
                    padding: 0;
                }
            }
        }
    }
</style>
