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
            resize(_this) {
                _this.is = $(window).width() > 768
                if (_this.is) {
                   if(_this.$route.path.indexOf('newApp')!=-1){
                       _this.$router.replace('/');
                   }
                } else {
                    _this.$router.replace('/newApp');
                    window.onload = function () {
                        document.addEventListener('touchstart', function (event) {
                            if (event.touches.length > 1) {
                                event.preventDefault();
                            }
                        })
                        var lastTouchEnd = 0;
                        document.addEventListener('touchend', function (event) {
                            var now = (new Date()).getTime();
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
                _this.resize(_this)
                window.onresize = function () {
                    _this.resize(_this)
                }
            }
        }
    }
</script>

