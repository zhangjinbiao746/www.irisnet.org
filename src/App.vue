<template>
    <div id="app" @click="closeWeChatIcon">
        <IrisnetMask></IrisnetMask>
<!--        <IrisnetHeader></IrisnetHeader>-->
        <navigation-three></navigation-three>
        <router-view/>
<!--        <IrisnetFooter></IrisnetFooter>-->
        <footer-three></footer-three>
<!--        <float-window></float-window>-->
        <right-menu-three></right-menu-three>
    </div>
</template>

<script>
    import IrisnetHeader from "./components/IrisnetHeader";
    import IrisnetFooter from "./components/IrisnetFooter";
    import IrisnetMask from "./components/IirsnetMask";
    import FloatWindow from "./components/FloatWindow";
    import FooterThree from "./components/FooterThree";
    import RightMenuThree from "./components/RightMenuThree";
    import NavigationThree from "./components/NavigationThree";
    export default {
        name: 'app',
        components: {
            NavigationThree,
            RightMenuThree, FooterThree, FloatWindow, IrisnetMask, IrisnetFooter, IrisnetHeader},
        data(){
            return{
            }
        },
        watch:{
            $route(){
                this.$store.commit('hideHeaderBgColor',false);
                this.$store.commit('showMobileMenu',false);
                window.scrollTo(0,0);
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
        font-family:SFUIDisplay-Regular,SFUIDisplay;
    }
    body{
        font-size:16px !important;
        position: relative;
    }

    #app{
        width: 100%;
    }
    .swiper-pagination-bullet{
        width: 0.3rem !important;
        height: 0.02rem !important;
        background: #f66;
        border-radius: 0% !important;
    }
    @media screen and (max-width: 768px){
        .right_menu_container{
            display: none;
        }
    }
    @import "assets/style/reset.less";
</style>

