<template>
    <div class="module">
        <h4 class="module_title">{{ title }}</h4>
        <slot name="icon"></slot>
        <slot name="text"></slot>
        <slot name="other"></slot>
    </div>
</template>

<script>
    export default {
        name: 'FooterModule',
        props: ['title']
    };
</script>

<style lang="less" scoped>
    .module {
        .module_title {
            font-weight: var(--font-weight-600);
            color: #fff;
            line-height: 0.16rem;
        }
    }
</style>
