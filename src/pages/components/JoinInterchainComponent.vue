<template>
    <div class="join_chain_container">
        <div class="join_chain_wrap">
            <NavigationLine />
            <h4 class="join_chain_title">{{$store.state.messages.home.joinchain.title}}</h4>
            <div class="deng">
                <div class="big_container">
                    <p class="join_chain_content">{{$store.state.messages.home.joinchain.content}}</p>

                </div>
                <div class="all">
                    <div class="join_chain_btn_content"
                        v-for="(item,index) in $store.state.messages.home.joinchain.list"
                        :key="index">
                        <!-- <div class="chain_btn"><a :href="item.url"
                            target="_blank"
                            rel="noreferrer noopener">{{item.btn}}</a></div> -->
                        <a :href="item.url"
                            class="join_btn"
                            target="_blank"
                            rel="noreferrer noopener">{{item.btn}}</a>

                    </div>
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
    background: rgba(21, 12, 54, 1);
    .join_chain_wrap {
        height: 100%;
        background: url("../../assets/join_chain.png") no-repeat center center;
        background-size: cover;
        max-width: 12rem;
        margin: 0 auto;
        @media (max-width: 1200px) {
            margin: 0 0.48rem;
        }
        @media (max-width: 1100px) {
            height: auto;
            background-position: bottom center !important;
        }
        @media (max-width: 596px) {
            margin: 0 0.2rem;
        }
        @media (max-width: 400px) {
            height: auto;
            background-position: bottom center !important;
        }
        @media (max-width: 375px) {
            background: url("../../assets/join_chain_small.png") no-repeat center center;
			background-size: cover;
        }

        // @media (max-width: 360px) {
        //     height: auto;
        //     background-position: bottom center !important;
        //     background-size: 100% auto !important;
        // }
        // @media (max-width: 1200px) {
        //     margin: 0 0.48rem;
        // }
        // @media (max-width: 596px) {
        //     margin: 0 0.2rem;
        // }
        .join_chain_title {
            font-family: ArialMT;
             margin-top: 0.36rem;
            font-weight: normal;
            font-size: 0.4rem;
            color: rgba(255, 255, 255, 1);
            line-height: 0.4rem;
            @media (max-width: 768px) {
                margin-top: 0.24rem;
                font-size: 0.32rem;
            }
        }
        .big_container {
            margin-top: 3.75rem;
            display: flex;
            // flex-direction: column;
            justify-content: center;

            padding: 0 0.32rem;
            .join_chain_content {
                align-self: center;
                margin: 0 auto;
                height: 0.32rem;
                font-size: 0.2rem;
                color: #ffffff;
                line-height: 0.32rem;
                font-family: ArialMT;
                text-align: center;
            }
        }
        .all {
            display: flex;
            justify-content: center;
            margin-top: 0.6rem;
            padding-bottom: 0.6rem;
            @media (max-width: 565px) {
                flex-direction: column;

                .join_chain_btn_content {
                    margin-top: 0.32rem;
                    align-self: center;
                }
            }

            .join_chain_btn_content {
                box-sizing: border-box;
                width: 2.4rem;
                height: 0.56rem;
                color: rgba(255, 255, 255, 1);
                text-align: center;
                border-radius: 0.04rem;
                font-family: ArialMT;
                font-size: 0.2rem;
                margin-right: 0.16rem;
                margin-left: 0.16rem;
                &:first-child {
                    background: rgba(111, 33, 193, 1);
                }
                &:last-child {
                    border: 0.02rem solid rgba(155, 100, 237, 1);
                    .join_btn {
                        color: rgba(155, 100, 237, 1);
                    }
                }

                // @media (max-width: 1100px) {
                //     justify-content: center;
                // }
                // @media (max-width: 768px) {
                //     margin-top: 0.32rem;
                // }

                .join_btn {
                    display: block;
                    height: 0.56rem;
                    width: 100%;
                    padding: 0.14rem 0.08rem;

                    box-sizing: border-box;

                    font-size: 0.2rem;
                    border-radius: 0.04rem;
                    font-family: ArialMT;

                    font-weight: 600;
                    color: #ffffff;
                    line-height: 0.28rem;
                }
            }
        }
    }
}
</style>
