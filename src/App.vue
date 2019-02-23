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
        methods: {
            switchView(_this) {
                let pcWindowMinWidth = 850;
                if(Tools.currentDeviceIsPersonComputer()){
                    // if ($(window).width() > pcWindowMinWidth) {
                    //     if(_this.$route.path.indexOf('app') !== -1){
                    //         _this.$router.replace('/');
                    //     }
                    // } else {
                    //     if(_this.$route.path.indexOf('app') == -1){
                    //         _this.$router.replace('/app');
                    //     }
                    // }
                }else {
                    this.switchAppView()
                }

            },
            switchAppView(){
                if(this.$route.path.indexOf('app') == -1){
                    // if(this.$route.path === '/'){
                    //     this.$router.replace(`${this.$route.matched[0].path}app`);
                    // }else {
                    //     this.$router.replace(`${this.$route.matched[0].path}/app`);
                    // }
                }else {
                    this.$router.replace(`${this.$route.path}`);
                }
                window.onload = function () {
                    document.addEventListener('touchstart', function (event) {
                        if (event.touches.length > 1) {
                            event.preventDefault();
                        }
                    });
                    let lastTouchEnd = 0;
                    document.addEventListener('touchend', function (event) {
                        let now = new Date().getTime();
                        if (now - lastTouchEnd <= 300) {
                            event.preventDefault();
                        }
                        lastTouchEnd = now;
                    }, false)
                }
            }
        },
        created() {
            if (process.env.VUE_ENV === 'client') {
                let _this = this;
                _this.switchView(_this)
                window.onresize = function () {
                    _this.switchView(_this)
                }
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
    *{
        margin: 0;
        padding: 0;
    }
</style>

