<template>
    <div class="presskit_content">
        <h5 class="presskit_title">{{ pressKitContent.title }}</h5>
        <p class="presskit_download_title">{{ pressKitContent.downloadTitle }}</p>
        <a :href="pressKitContent.downloadHref" target="_blank" class="presskit_download_btn" rel="noopener noreferrer">
            {{ pressKitContent.downloadBtn }}
        </a>
    </div>
</template>

<script>
    export default {
        name: 'Banner',
        props: ['pressKitContent']
    };
</script>

<style lang="less" scoped>
    .presskit_content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding: 0.83rem 0 0.9rem;
        max-width: 12rem;
        @media (max-width: 1200px) {
            padding: 0.83rem 0.48rem 0.9rem;
        }
        @media (max-width: 400px) {
            padding: 0.83rem 0.16rem 0.9rem;
        }
        .presskit_title {
            font-size: 0.52rem;
            font-weight: var(--font-weight-600);
            color: #fff;
            line-height: 0.7rem;
        }
        .presskit_download_title {
            margin-top: 0.06rem;
            font-size: 0.22rem;
            font-weight: lighter;
            color: #fff;
            line-height: 0.3rem;
            text-align: center;
        }
        .presskit_download_btn {
            display: inline-block;
            margin-top: 0.68rem;
            padding: 0.14rem 0.68rem;
            color: #fff;
            background: linear-gradient(to right, #714be3, #653fd8);
            border-radius: 0.33rem;
            &:hover {
                background: linear-gradient(to right, rgba(130, 92, 245, 1), rgba(123, 80, 255, 1));
            }
        }
    }
</style>
