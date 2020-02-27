<template>
    <div class="router_container events_container">
        <div class="router_content_container events_content_container">
            <p class="events_content_title">
                {{$store.state.messages.events.title}}
            </p>
            <div class="events_content_img_container">
                <div class="events_content_left_container"
                     v-for="item in firstList"
                     @click="toLinkUrl(item.href)">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582625727812&di=0c2c5eadfbafc3d406324491ac5dd88a&imgtype=0&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2018-11-29%2F171758842.jpg" alt="失去网络" class="events_img">
                    <div class="events_content_left_produce_container">
                        <span class="events_content_left_produce_title">
                            {{item.title}}
                        </span>
                        <span class="events_content_left_produce_content">
                            {{item.content}}
                        </span>
                        <span class="events_content_left_produce_time">
                            {{item.date}}
                        </span>
                    </div>
                </div>
            </div>
            <p class="events_history_title">
                {{$store.state.messages.announce.historyTitle}}
            </p>
            <div class="events_history_item_container"
                 @click="toLinkUrl(item.href)"
                 v-for="item in lastList">
                <div class="events_history_item_time_container">
                    <span class="events_history_item_time_month">
                        {{ item.month }}
                    </span>
                    <span class="events_history_item_time_date">
                        {{ item.day }}
                    </span>
                    <span class="events_history_item_time_year">
                        {{ item.year }}
                    </span>
                </div>
                <div class="events_history_content_container">
                    <span class="events_history_item_title">
                        {{ item.title }}
                    </span>
                    <span class="events_history_item_content">
                        {{ item.content }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "EventsThree",
        data(){
            return {}
        },
        computed:{
            firstList(){
                return this.$store.state.messages.events.eventsList.slice(0,3);
            },
            lastList(){
                return this.$store.state.messages.events.eventsList.slice(3,7);
            }
        },
        mounted(){

        },
        methods : {
            toLinkUrl(url){
                if(url){
                    window.open(url);
                }

            }
        }
    }
</script>

<style scoped lang="less">
    @import '../style/mixin.less';

    .events_container {
        .events_content_container {
            padding-bottom:1rem;
            .events_content_title {
                color:#313236;
                font-size:0.48rem;
                font-family:SFUIDisplay-Regular,SFUIDisplay;
                margin-bottom:0.52rem;
            }
            //公共样式
            .events_content_img_container{
                .flexRow;
                justify-content: space-between;
                .events_content_left_container{
                    flex:67;
                    margin-right:0.8rem;
                    cursor:pointer;
                    .flexColumn;
                    .events_img{
                        height:3.75rem;
                        width:100%;
                        margin-bottom:0.3rem;
                    }
                    .events_content_left_produce_container{
                        .flexColumn;
                        .events_content_left_produce_title{
                            font-size:0.22rem;
                            color:#263035;
                            font-weight:600;
                            margin-bottom:0.14rem;
                        }
                        .events_content_left_produce_content{
                            font-size:0.17rem;
                            color:#7C7D8D;
                            line-height:0.3rem;
                            margin-bottom:0.1rem;
                        }
                        .events_content_left_produce_time{
                            font-size:0.15rem;
                            color:#7C7D8D;
                        }

                    }
                }
                .events_content_right_container{
                    flex:45;
                    .events_content_right_top_container{
                        .flexColumn;
                        padding-bottom:0.31rem;
                        .events_content_right_time{
                            color:#7C7D8D;
                            font-size:0.15rem;
                            margin-bottom:10px;
                        }
                        .events_content_right_title{
                            color:#263035;
                            font-size:22px;
                            font-weight:600;
                            margin-bottom:0.1rem;
                            line-height:32px;
                        }
                        .events_content_right_content{
                            color:#7C7D8D;
                            font-size:0.17rem;
                            line-height:30px;
                        }
                        &:first-child{
                            border-bottom:0.01rem solid #EEEEEE;
                        }
                        &:last-child{
                            padding-top:0.31rem;
                        }


                    }
                }

            }
            //平板和Pc均两列展示,自适应, 手机一列展示
            //手机
            @media only screen and ( max-width: 768px){
                .events_content_img_container{

                }
            }
            //pc 和 平板
            @media only screen and ( min-width: 768px){
                .events_content_img_container{

                }
            }
            .events_history_title{
                color:#313236;
                font-size:0.48rem;
                margin-top:0.7rem;
                margin-bottom:0.1rem;
            }
            .events_history_item_container{
                .flexRow;
                width:100%;
                padding:0.6rem 0;
                border-bottom:0.01rem solid #EEEEEE;
                cursor:pointer;
                &:last-child{
                    border:none;
                }
                .events_history_item_time_container{
                    flex:0 0 0.6rem;
                    height:0.8rem;
                    border-radius:0.04rem;
                    .flexColumn;
                    background: #5E82F1;
                    align-items: center;
                    padding-bottom:0.04rem;
                    justify-content: space-between;
                    .events_history_item_time_month{
                        height:0.22rem;
                        font-size:0.14rem;
                        color:#ffffff;
                        line-height:0.22rem;
                        width:100%;
                        text-align: center;
                        background:rgba(15,24,142,0.23);
                    }
                    .events_history_item_time_date{
                        color:#ffffff;
                        font-size:0.24rem;
                    }
                    .events_history_item_time_year{
                        margin-top:0.1rem;
                        color:rgba(255,255,255,.5);
                        font-size:0.12rem;
                    }

                }
                .events_history_content_container{
                    margin-left:0.4rem;
                    .flexColumn;
                    .events_history_item_title{
                        color:#263035;
                        font-size:0.22rem;
                        font-weight:600;
                        line-height:0.32rem;
                    }
                    .events_history_item_content{
                        color:#7C7D8D;
                        font-size:0.17rem;
                        line-height:0.3rem;
                    }

                }
            }
        }




    }


</style>