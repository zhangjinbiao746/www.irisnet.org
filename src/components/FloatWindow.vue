<template>
    <div class="float_window_container">
        <div class="float_window_forum_container">
            <a href="https://forum.irisnet.org/" target="_blank">
                <div class="forum_img_content">
                    <img src="../../public/irisnet/irisnet_forum.png">
                </div>
                <span>{{$store.state.messages.floatWindow.title}}</span>
            </a>
        </div>
    </div>
</template>

<script>
	export default {
		name: "FloatWindow"
	}
</script>

<style scoped lang="less">
    .float_window_container{
        position: fixed;
        right: 0.2rem;
        bottom: 0.2rem;
        .float_window_forum_container{
            width: 0.9rem;
            height: 0.9rem;
            border-radius: 0.45rem;
            background:linear-gradient(145deg,rgba(122,65,255,1) 0%,rgba(101,39,222,1) 100%);
            box-shadow:0 0.02rem 0.2rem 0 rgba(3,0,35,0.25);
            &:hover{
                background:linear-gradient(145deg,rgba(144,97,255,1) 0%,rgba(119,52,250,1) 100%);
                box-shadow:0 0.02rem 0.2rem 0 rgba(3,0,35,0.25);
            }
            a{
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                .forum_img_content{
                    width: 0.3rem;
                    height: 0.3rem;
                    img{
                        width: 100%;
                    }
                }
                span{
                    padding-top: 0.07rem;
                    font-size: 0.14rem;
                    color: #fff;
                    line-height: 0.16rem;
                }
            }
        }
    }
    @media screen and (max-width: 420px){
        .float_window_container{
            transform: scale(0.7);
        }
    }
</style>