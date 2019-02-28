<template>
    <div id="app">
        <Header></Header>
        <router-view/>
        <Footer></Footer>
    </div>
</template>

<script>
    import Tools from "../src/util/Tools"
    export default {
        name: 'app',
        components: {},
        data(){
            return{

            }
        },
    }
</script>
<style lang="less">
    html {
        font-size: 625% !important;
        -webkit-text-size-adjust: none;
    }
    body{
        font-size:16px !important;
    }
    @import "./assets/style/reset";
</style>

