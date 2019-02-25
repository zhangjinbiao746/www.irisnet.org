<template>
    <div id="app">
        <Header></Header>
        <router-view/>
        <Footer></Footer>
    </div>
</template>

<script>
    import Tools from "../src/util/Tools"
    import Header from "./components/Header";
    import Footer from "./components/Footer";
    export default {
        name: 'app',
        components: {Footer, Header},
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
    @import "assets/style/reset";
</style>

