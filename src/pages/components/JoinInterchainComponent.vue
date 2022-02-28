<template>
    <div class="join_chain_container">
        <div class="join_chain_wrap">
            <NavigationLine />
            <h4 class="join_chain_title">{{$store.state.messages.home.joinchain.title}}</h4>
            <div class="big_container">
                <p class="join_chain_content">{{$store.state.messages.home.joinchain.content}}</p>

            </div>
            <div class="all">
                <div class="join_chain_btn_content"
                    v-for="(item,index) in $store.state.messages.home.joinchain.list"
                    :key="index">
                    <div class="chain_btn"><a :href="item.url" target="_blank"  rel="noreferrer noopener">{{item.btn}}</a></div>

                </div>
            </div>

        </div>

    </div>
</template>

<script>
import NavigationLine from "./NavigationLine";
export default {
    name: "JoinInterchainComponent",
    components: { NavigationLine }
};
</script>

<style scoped lang="less">
.join_chain_container {
    background: rgba(13, 14, 44, 1);
    height: 667px;
    padding-bottom: 100px;

    .join_chain_wrap {
        height: 100%;
        background: url("../../assets/join_chain.png") no-repeat center center;
        background-size: cover;
        max-width: 12rem;
        margin: 0 auto;

        @media (max-width: 1100px) {
            height: auto;
            background-position: bottom center !important;
        }
        @media (max-width: 400px) {
            height: auto;
            background-position: bottom center !important;
        }
        @media (max-width: 360px) {
            height: auto;
            background-position: bottom center !important;
            background-size: 100% auto !important;
        }
        @media (max-width: 1200px) {
            margin: 0 0.48rem;
        }
        @media (max-width: 596px) {
            margin: 0 0.2rem;
        }
        .join_chain_title {
            padding-top: 0.36rem;
            font-weight: normal;
            font-size: 0.4rem;
            color: rgba(255, 255, 255, 1);
            line-height: 0.4rem;
            @media (max-width: 596px) {
                margin-top: 0.24rem;
            }
        }
        .big_container {
            margin-top: 375px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .join_chain_content {
                margin: 0 auto;
                height: 32px;
                font-size: 20px;
                color: #ffffff;
                line-height: 32px;
            }
        }
        .all {
            display: flex;
            justify-content: center;
            margin-top: 60px;
            @media (max-width: 400px) {
                flex-direction: column;
            }
            // margin-left: 380px;

            .join_chain_btn_content {
                box-sizing: border-box;
                min-width: 2rem;
                display: inline-block;
                background: rgba(46, 69, 211, 1);
                color: rgba(255, 255, 255, 1);
                padding: 0.14rem 0.08rem;
                text-align: center;
                border-radius: 0.04rem;
                font-size: 0.2rem;
                margin-right: 32px;

                @media (max-width: 1100px) {
                    justify-content: center;
                }
                @media (max-width: 768px) {
                    margin-top: 0.32rem;
                }

                .chain_btn a {
                    margin: 0 auto;
                    // margin-right: 32px;
                    // display: block;
                    box-sizing: border-box;
                    line-height: 28px;
                    font-size: 20px;
                    border-radius: 4px;

                    font-weight: 600;
                    color: #ffffff;
                    line-height: 28px;
                }
            }
        }
    }
}
</style>
