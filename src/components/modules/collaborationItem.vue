<template>
    <div class="collaboration_list">
        <a class="collaboration_item"
           v-for="item in info.list"
           :href="item.href || 'javascript:void(0)'"
        >
            <i class="collaboration_logo"
               :style="{
                backgroundImage:'url('+UrlSrc+info.img+')',
                backgroundPositionY:item.pos+'px'
           }"
            ></i>
            <h5>{{item.title}}</h5>
        </a>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        data(){
            return {}
        },
        props: {
            info: {}
        },

        methods: {}
    }
</script>


<style scoped lang='less'>
    /*@import "../../assets/style/index.less";*/

    .collaboration_list{
    display: flex;
    flex-wrap: wrap;
    /*align-content: center;*/
        justify-content: flex-start;
    }
       .collaboration_item{
           overflow: hidden;
           cursor: pointer;
           margin:20px 10px auto ;
           display: inline-block;
    .collaboration_logo{
        display: block;
        width:56px;
        height:56px;
        position: absolute;
        border:2px solid #5252a3;
        border-radius:56px;
    }
    h5{
        color: #6677e8;
        height:42px;
        line-height:42px;
        background-color:#141430;
        margin:9px auto 9px 40px;

        text-align: center;
        border-radius:8px;
        padding:0 10px;
        width:170px;
        text-indent: 10px;
    }
    }
    .collaboration_item:hover{
    .collaboration_logo{
        border-color: #1f97f8;
    }
    h5{
        color: #1f97f8;
        text-decoration:underline;
    }
    }


</style>