<template>
    <div class="home_banner_container">
        <div class="home_banner_wrap" :style="{ 'height': `${curHeight}rem` }">
            <div class="home_banner_text_wrap" :style="{left: curLeft}">
                <img class="home_banner_text" src="../../assets/irishub2_text.png" alt="" :style="{ width: curWidth('5.68') }" />
                <a class="home_banner_discord" href="https://discord.gg/bmhu9F9xbX" target="_blank" rel="noreferrer noopener">
                    <img class="discord_normal" src="../../assets/discord.png" alt="" :style="{ width: curWidth('3.72') }" />
                    <img class="discord_hover" src="../../assets/discord_hover.png" alt="" :style="{ width: curWidth('3.72') }" />
                </a>
            </div>
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
            if(this.clientWidth > 1250) {
                return (this.clientWidth * ratio) / 100
            } else if(this.clientWidth <= 1250 && this.clientWidth > 800){
                return 7.68
            } else if(this.clientWidth <= 800 && this.clientWidth > 460){
                return 10.8
            }
        },
        curLeft() {
            if(this.clientWidth > 1250) {
                return `21%`;
            } else if(this.clientWidth <= 1250 && this.clientWidth > 800){
                return `${21 * this.clientWidth / 1250}%`
            } else if(this.clientWidth <= 800 && this.clientWidth > 650){
                return `7%`
            } else if(this.clientWidth <= 650 && this.clientWidth > 460){
                return `5%`
            }
        }
    },
    methods: {
        resizeWidth() {
            this.clientWidth = +document.body.clientWidth;
        },
        curWidth(baseWidth) {
            if(this.clientWidth > 1250) {
                return `${baseWidth * this.clientWidth / 1920}rem`;
            } else if(this.clientWidth <= 1250 && this.clientWidth > 800){
                return `${baseWidth - 1.5}rem`
            } else if(this.clientWidth <= 800 && this.clientWidth > 650){
                return `${baseWidth}rem`
            } else if(this.clientWidth <= 650 && this.clientWidth > 460){
                return `${baseWidth - 1.5}rem`
            } else {
                return '3.42rem'
            }
        }
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
        position: relative;
        margin: 0 auto;
        height: 10.8rem;
        background: url(../../assets/shouping_bg.jpg) no-repeat center center;
        background-size: contain;
        @media(max-width: 1260px) {
            background-size: cover;
        }
        @media(max-width: 800px) {
            height: 10.8rem;
            background: url(../../assets/shouping_800.jpg) no-repeat center / cover;
        }
        @media(max-width: 460px) {
            background: url(../../assets/shouping_375.jpg) no-repeat center / cover;
        }
        .home_banner_text_wrap {
            position: absolute;
            top: 45%;
            @media(max-width: 800px) {
                top: 51%;
            }
            @media(max-width: 460px) {
                left: 50%;
                transform: translateX(-50%);
            }
            .home_banner_discord {
                position: absolute;
                top: 100%;
                left: -12%;
                .discord_hover {
                    display: none;
                }
                &:hover {
                    .discord_normal {
                        display: none;
                    }
                    .discord_hover {
                        display: block;
                    }
                }
            }
        }
    }
}
</style>