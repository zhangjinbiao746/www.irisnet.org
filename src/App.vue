<template>
    <div id="app" @click="closeWeChatIcon">
        <mask1></mask1>
        <IrisnetHeader></IrisnetHeader>
        <router-view/>
        <IrisnetFooter></IrisnetFooter>
    </div>
</template>

<script>


    import IrisnetHeader from "./components/IrisnetHeader";
    import IrisnetFooter from "./components/IrisnetFooter";
    import Mask1 from "./components/Mask1";
    export default {
        name: 'app',
        components: {Mask1, IrisnetFooter, IrisnetHeader},
        data(){
            return{

            }
        },
        watch:{
            $route(){
                document.body.scrollTop = 0;
            }
        },
        methods: {
            closeWeChatIcon () {
                this.$store.commit('controlWeChat', false)
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

    #app{
        width: 100%;
    }
    @import "assets/style/reset";
</style>

