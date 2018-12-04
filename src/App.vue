<template>
    <div id="app" style="height: 100%">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data(){
            return{

            }
        },
        methods: {
            switchView(_this) {
                let windowWidth = $(window).width() > 768;
                if (windowWidth) {
                   if(_this.$route.path.indexOf('app') !== -1){
                       _this.$router.replace('/');
                   }
                } else {
                    if(_this.$route.path.indexOf('app') == -1){
                        _this.$router.replace('/app');
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
        &::-webkit-scrollbar {display:none}
    }
</style>

