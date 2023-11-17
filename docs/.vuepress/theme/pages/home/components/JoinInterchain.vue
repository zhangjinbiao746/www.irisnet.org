<template>
    <title-component class="join_interchain" :title="joinInterchain.title">
        <div class="join_interchain_wrap">
            <p class="join_interchain_info">{{ joinInterchain.content }}</p>
            <div class="join_interchain_link">
                <custom-button
                    v-for="(item, index) in joinInterchain.list"
                    :key="index"
                    :link="item.url"
                    :link-text="item.btn"
                />
            </div>
        </div>
    </title-component>
</template>

<script>
    import TitleComponent from '../../../components/common/TitleComponent.vue';
    import CustomButton from '../../../components/common/CustomButton.vue';
    export default {
        name: 'JoinInterchain',
        components: {
            TitleComponent,
            CustomButton
        },
        props: ['joinInterchain']
    };
</script>

<style lang="less" scoped>
    .join_interchain {
        background: url('../../../assets/home/join_chain.png') no-repeat center / cover;
        background-position: center 60px;
        @media (max-width: 1200px) {
            margin: 0 0.48rem;
            padding: 0.8rem 0 0.6rem;
        }
        @media (max-width: 500px) {
            margin: 0 0.16rem;
            padding: 0.8rem 0 0.6rem;
        }
        .join_interchain_wrap {
            display: flex;
            flex-direction: column;
            .join_interchain_info {
                align-self: center;
                margin-top: 3.75rem;
                font-size: var(--font-20);
                color: #fff;
                line-height: 0.32rem;
                text-align: center;
            }
            .join_interchain_link {
                display: flex;
                justify-content: center;
                margin-top: 0.6rem;
                @media (max-width: 768px) {
                    flex-direction: column;
                    align-items: center;
                    .custom_btn {
                        margin-top: 0.32rem;
                        max-width: 2.4rem;
                        &:first-child {
                            margin-top: 0;
                        }
                    }
                }
            }
        }
    }
</style>
