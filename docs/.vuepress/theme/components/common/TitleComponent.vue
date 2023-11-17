<template>
    <div class="title_container">
        <navigation-line />
        <h2 class="title">{{ title }}</h2>
        <p v-if="subTitle" class="sub_title">{{ subTitle }}</p>
        <slot></slot>
    </div>
</template>

<script>
    import NavigationLine from '../../components/common/NavigationLine.vue';
    export default {
        name: 'TitleComponent',
        components: {
            NavigationLine
        },
        props: ['title', 'subTitle']
    };
</script>

<style lang="less" scoped>
    .title_container {
        margin: 0 auto;
        padding: 0.8rem 0;
        max-width: 12rem;
        @media (max-width: 1200px) {
            padding: 0.8rem 0.48rem;
        }
        @media (max-width: 500px) {
            padding: 0.8rem 0.16rem;
        }
        .title {
            margin-top: 0.36rem;
            font-size: var(--font-40);
            color: #fff;
            line-height: 0.4rem;
            white-space: nowrap;
            @media (max-width: 768px) {
                margin-top: 0.24rem;
                font-size: var(--font-32);
            }
        }
        .sub_title {
            margin-top: 0.32rem;
            line-height: 0.32rem;
        }
    }
</style>
