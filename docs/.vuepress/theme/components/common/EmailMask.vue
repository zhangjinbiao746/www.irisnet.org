<template>
    <div
        id="mask_container"
        class="mask_container"
        :class="$store.state.showMask ? 'show_mask' : ''"
        @touchmove.prevent
    >
        <div class="mask_content">
            <h2 class="mask_title">{{ $store.state.newsLetterTitle }}</h2>
            <p class="mask_text_content">{{ $store.state.textContent }}</p>
            <div class="confirm_btn" @click="confirm()">
                {{ $store.state.confirm }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EmailMask',
        methods: {
            confirm() {
                this.$store.commit('showMask', false);
            }
        }
    };
</script>

<style scoped lang="less">
    .mask_container {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 2;
        .mask_content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0.8rem 0.53rem 0.37rem 0.53rem;
            width: 50%;
            background: #fff;
            border-radius: 0.04rem;
            .mask_title {
                font-size: var(--font-20);
                font-weight: var(--font-weight-600);
                color: #323c5a;
                text-align: center;
            }
            .mask_text_content {
                margin-top: 0.24rem;
                font-size: var(--font-14);
                color: #9ba5be;
                text-align: center;
                line-height: 0.21rem;
            }
            .confirm_btn {
                margin-top: 0.48rem;
                padding: 0.14rem 1rem;
                max-width: 0.56rem;
                color: #fff;
                background: -webkit-linear-gradient(left, #714be3, #653fd8);
                background: -o-linear-gradient(right, #714be3, #653fd8);
                background: -moz-linear-gradient(right, #714be3, #653fd8);
                background: linear-gradient(to right, #714be3, #653fd8);
                border-radius: 0.04rem;
                cursor: pointer;
            }
        }
    }
</style>
