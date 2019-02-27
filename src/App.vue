<template>
    <div id="app">
        <IrisnetHeader></IrisnetHeader>
        <router-view/>
        <IrisnetFooter></IrisnetFooter>
    </div>
</template>

<script>
    import IrisnetHeader from "./components/IrisnetHeader";
    import IrisnetFooter from "./components/IrisnetFooter";
    export default {
        name: 'app',
        components: {IrisnetFooter, IrisnetHeader},
        data(){
            return{

            }
        },
        watch:{
            $route(){
                document.body.scrollTop = 0;
            }
        }
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

