<template>
    <div id="app" style="height: 100%">
        <router-view/>
    </div>
</template>

<script>
    import Tools from "../src/util/Tools"
    export default {
        name: 'app',
        data(){
            return{

            }
        },
        methods: {
            switchView(_this) {
                let windowWidth = $(window).width() > 768;
                if(Tools.currentDeviceIsPersonComputer()){
                    if (windowWidth) {
                        if(_this.$route.path.indexOf('app') !== -1){
                            _this.$router.replace('/');
                        }
                    } else {
                        if(_this.$route.path.indexOf('app') == -1){
                            _this.$router.replace('/app');
                        }
                    }
                }else {
                    this.switchAppView()
                }

            },
            switchAppView(){
                if(this.$route.path.indexOf('app') == -1){
                    if(this.$route.path === '/'){
                        this.$router.replace(`${this.$route.matched[0].path}app`);
                    }else {
                        this.$router.replace(`${this.$route.matched[0].path}/app`);
                    }
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
                        let now = (new Date()).getTime();
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
    html, body {
        overflow: hidden !important;
    }
    #app{
        overflow-y: auto;
        &::-webkit-scrollbar {display:none}
    }
</style>

