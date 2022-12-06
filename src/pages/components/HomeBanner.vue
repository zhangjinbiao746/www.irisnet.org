<template>
    <div class="home_banner_container">
        <div class="home_banner_wrap" :style="{ 'height': `${curHeight}rem` }">
            <a href="https://discord.gg/bmhu9F9xbX" target="_blank"><span class="btn"></span></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeBanner",
    data() {
        return {
            clientWidth: null,
        }
    },
    computed: {
        curHeight() {
            let ratio = 0.5625
            if(this.clientWidth < 1000 && this.clientWidth > 600){
                ratio = 0.768
            } else if (this.clientWidth <= 600 && this.clientWidth > 375) {
                ratio = 1.2
            } else if (this.clientWidth <= 375){
                ratio = 1.728
            }
            return (this.clientWidth * ratio) / 100
        }
    },
    methods: {
        resizeWidth() {
            this.clientWidth = +document.body.clientWidth;
        },
    },
    mounted() {
        this.resizeWidth();
        window.addEventListener("resize", this.resizeWidth);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.resizeWidth);
    }
};
</script>

<style scoped lang="less">
.home_banner_container {
    width: 100%;
    background: rgba(21, 12, 54, 1);
    position: relative;
    .home_banner_wrap {
        margin: 0 auto;
        height: 10.8rem;
        background: url(../../assets/shouping_bg.jpg) no-repeat center center;
        background-size: contain;
        @media(max-width: 1000px) {
            height: 7.68rem;
            background: url(../../assets/shouping_1000.jpg) no-repeat center center;
            background-size: contain;

        }
        @media(max-width: 600px) {
            height: 7.2rem;
            background: url(../../assets/shouping_600.jpg) no-repeat center center;
            background-size: contain;
        }

        @media(max-width: 375px) {
            height: 6.48rem;
            background: url(../../assets/shouping_375.jpg) no-repeat center center;
            background-size: 100%;
        }

        .btn {
            box-sizing: border-box;
            cursor: pointer;
            position: absolute;
            top: 52%;
            left: 40%;
            width: 3.38rem;
            height: 1.68rem;
            font-size: 0.3rem;
            font-weight: normal;
            color: #FFFFFF;
            line-height: 0.48rem;
            background: url(../../assets/discord.png) no-repeat center;
            background-size: 100%;
            @media (max-width: 1600px) {
                left: 31%;
                background-size: 90%;
            }
            @media (max-width: 1350px) {
                left: 28%;
                top: 50%;
                background-size: 80%;
            }
            @media (max-width: 1000px) {
                top: 50%;
                left: 38%;
                width: 3.23rem;
                height: 1.61rem;
                font-size: 0.24rem;
                background: url(../../assets/discord_1000.png) no-repeat center;
                background-size: 100%;
            }

            @media (max-width: 900px) {
                top: 48%;
                left: 36%;
                background-size: 90%;
            }

            @media (max-width: 800px) {
                top: 47%;
                left: 34%;
                background-size: 80%;
            }

            @media (max-width: 700px) {
                top: 46%;
                left: 32%;
                background-size: 70%;
            }

            @media (max-width: 600px) {
                top: 50%;
                left: 38%;
                width: 2.8rem;
                background: url(../../assets/discord_600.png) no-repeat center center;
                background-size: 80%;
            }

            @media (max-width: 500px) {
                top: 45%;
                left: 36%;
                background-size: 60%;
            }

            @media (max-width: 375px) {
                top: 48%;
                left: 22%;
                background: url(../../assets/discord_375.png) no-repeat center center;
                background-size: 100%;
            }

            @media (max-width: 350px) {
                top: 45%;
                left: 20%;
                background-size: 80%;
            }
        }
    }
}
</style>