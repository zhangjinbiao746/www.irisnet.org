<template>
    <div class="foot">
        Copyright © 2018 IRIS Foundation Ltd. All rights reserved.
        <a :href="'/privacy/?lang='+$store.state.lang" target="_blank">Privacy</a>
        &
        <a :href="'/terms?lang='+$store.state.lang" target="_blank">Terms</a>
    </div>
</template>

<script>
    export default {
        name: "foot"
    }
</script>

<style scoped lang='less'>
    .foot {
        a {
            color: #3563c1;
        }
        z-index: 10;
        position: fixed;
        bottom: 0;
        height: 40px;
        width: 100%;
        background: #0f0f1f;
        line-height: 40px;
        color: #3b3b5f;
        font-size: 14px;
        text-align: center;
    }
</style>