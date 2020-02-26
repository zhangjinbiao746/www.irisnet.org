<template>
    <div class="router_container announcements_container">
        <div class="router_content_container announcements_content_container">
            <p class="announcements_content_title">
                {{$store.state.messages.announce.title}}
            </p>
            <div class="announcements_content_img_container">
                <div class="announcements_content_left_container">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582625727812&di=0c2c5eadfbafc3d406324491ac5dd88a&imgtype=0&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2018-11-29%2F171758842.jpg" alt="失去网络" class="announcements_img">
                    <div class="announcements_content_left_produce_container">
                        <span class="announcements_content_left_produce_title">
                            {{$store.state.messages.announce.betaTitle}}
                        </span>
                        <span class="announcements_content_left_produce_content">
                            {{$store.state.messages.announce.betaContent}}
                        </span>
                        <span class="announcements_content_left_produce_time">
                            {{$store.state.messages.announce.betaDate}}
                        </span>

                    </div>
                </div>
                <div class="announcements_content_right_container">
                    <div class="announcements_content_right_top_container">
                        <span class="announcements_content_right_time">
                            {{$store.state.messages.announce.announcementList[0].date}}
                        </span>
                        <span class="announcements_content_right_title">
                            {{$store.state.messages.announce.announcementList[0].title}}
                        </span>
                        <span class="announcements_content_right_content">
                            {{$store.state.messages.announce.announcementList[0].content}}
                        </span>
                    </div>
                    <div class="announcements_content_right_top_container">
                        <span class="announcements_content_right_time">
                            {{$store.state.messages.announce.announcementList[1].date}}
                        </span>
                        <span class="announcements_content_right_title">
                            {{$store.state.messages.announce.announcementList[1].title}}
                        </span>
                        <span class="announcements_content_right_content">
                            {{$store.state.messages.announce.announcementList[1].content}}
                        </span>
                    </div>
                </div>
            </div>
            <p class="announcements_history_title">
                {{$store.state.messages.announce.historyTitle}}
            </p>
            <div class="announcements_history_item_container" v-for="item in announcementList">
                <div class="announcements_history_item_time_container">
                    <span class="announcements_history_item_time_month">
                        {{ item.month }}
                    </span>
                    <span class="announcements_history_item_time_date">
                        {{ item.day }}
                    </span>
                    <span class="announcements_history_item_time_year">
                        {{ item.year }}
                    </span>
                </div>
                <div class="announcements_history_content_container">
                    <span class="announcements_history_item_title">
                        {{ item.title }}
                    </span>
                    <span class="announcements_history_item_content">
                        {{ item.content }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "Announcements",
        data(){
            return {}
        },
        computed:{
            announcementList(){
                let announcementList = JSON.parse(JSON.stringify(this.$store.state.messages.announce.announcementList));
                announcementList.shift();
                announcementList.shift();
                return announcementList;
            }
        },
        mounted(){

        }
    }
</script>

<style scoped lang="less">
    @import '../style/mixin.less';

    .announcements_container {
        .announcements_content_container {

            .announcements_content_title {
                color:#313236;
                font-size:0.48rem;
                font-family:SFUIDisplay-Regular,SFUIDisplay;
                margin-bottom:0.52rem;
            }
            //公共样式
            .announcements_content_img_container{
                .flexRow;
                justify-content: space-between;
                .announcements_content_left_container{
                    flex:67;
                    margin-right:0.8rem;
                    .flexColumn;
                    .announcements_img{
                        height:3.75rem;
                        width:100%;
                        margin-bottom:0.3rem;
                    }
                    .announcements_content_left_produce_container{
                        .flexColumn;
                        .announcements_content_left_produce_title{
                            font-size:0.22rem;
                            color:#263035;
                            font-weight:600;
                            margin-bottom:0.14rem;
                        }
                        .announcements_content_left_produce_content{
                            font-size:0.17rem;
                            color:#7C7D8D;
                            line-height:0.3rem;
                            margin-bottom:0.1rem;
                        }
                        .announcements_content_left_produce_time{
                            font-size:0.15rem;
                            color:#000000;
                        }

                    }
                }
                .announcements_content_right_container{
                    flex:45;
                    .announcements_content_right_top_container{
                        .flexColumn;
                        padding-bottom:0.31rem;
                        .announcements_content_right_time{
                            color:#7C7D8D;
                            font-size:0.15rem;
                            margin-bottom:10px;
                        }
                        .announcements_content_right_title{
                            color:#263035;
                            font-size:22px;
                            font-weight:600;
                            margin-bottom:0.1rem;
                            line-height:32px;
                        }
                        .announcements_content_right_content{
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
                .announcements_content_img_container{

                }
            }
            //pc 和 平板
            @media only screen and ( min-width: 768px){
                .announcements_content_img_container{

                }
            }
            .announcements_history_title{
                color:#313236;
                font-size:0.48rem;
                margin-top:0.7rem;
                margin-bottom:0.1rem;
            }
            .announcements_history_item_container{
                .flexRow;
                width:100%;
                padding:0.6rem 0;
                border-bottom:0.01rem solid #EEEEEE;
                .announcements_history_item_time_container{
                    flex:0 0 0.6rem;
                    height:0.8rem;
                    border-radius:0.04rem;
                    .flexColumn;
                    background: #5E82F1;
                    align-items: center;
                    padding-bottom:0.04rem;
                    justify-content: space-between;
                    .announcements_history_item_time_month{
                        height:0.22rem;
                        font-size:0.14rem;
                        color:#ffffff;
                        line-height:0.22rem;
                        width:100%;
                        text-align: center;
                        background:rgba(15,24,142,0.23);
                    }
                    .announcements_history_item_time_date{
                        color:#ffffff;
                        font-size:0.24rem;
                    }
                    .announcements_history_item_time_year{
                        margin-top:0.1rem;
                        color:rgba(255,255,255,.5);
                        font-size:0.12rem;
                    }

                }
                .announcements_history_content_container{
                    margin-left:0.4rem;
                    .flexColumn;
                    .announcements_history_item_title{
                        color:#263035;
                        font-size:0.22rem;
                        font-weight:600;
                        line-height:0.32rem;
                    }
                    .announcements_history_item_content{
                        color:#7C7D8D;
                        font-size:0.17rem;
                        line-height:0.3rem;
                    }

                }
            }
        }




    }


</style>