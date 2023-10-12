<template>
    <div class="custom_btn">
        <a
            v-if="link"
            :href="link"
            class="custom_btn_href"
            :target="target"
            rel="noreferrer noopener"
            >{{ linkText }}</a
        >
        <span v-else class="custom_btn_href">{{ linkText }}</span>
    </div>
</template>

<script>
    export default {
        name: 'CustomButton',
        props: {
            link: String,
            linkText: String,
            target: {
                type: String,
                default: '_blank'
            }
        }
    };
</script>

<style lang="less" scoped>
    .custom_btn {
        .custom_btn_href {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 0.08rem;
            padding: 0.12rem 0.08rem;
            min-width: 1.8rem;
            height: 0.24rem;
            font-size: var(--font-20);
            color: #fff;
            line-height: 0.28rem;
            background: linear-gradient(90deg, #7ea4ff, #a845e2, #6f21c1, #7ea4ff);
            background-size: 400%;
            border-radius: 0.04rem;
            z-index: 1;
            &:hover {
                animation: customBtnAnimate 8s linear infinite;
                box-shadow: 0px 0px 6px 3px #c965ff;
                &::before {
                    filter: blur(0.2rem);
                    animation: customBtnAnimate 8s linear infinite;
                }
            }
            &::before {
                content: '';
                position: absolute;
                top: -0.01rem;
                left: -0.01rem;
                right: -0.01rem;
                bottom: -0.01rem;
                z-index: -1;
                background: linear-gradient(90deg, #7ea4ff, #a845e2, #6f21c1, #7ea4ff);
                background-size: 400%;
                border-radius: 0.06rem;
                opacity: 0;
                transition: all 0.5s linear;
            }
        }
    }
    @keyframes customBtnAnimate {
        0% {
            background-position: 0%;
        }
        100% {
            background-position: 400%;
        }
    }
</style>
