<template>
    <div class="collaboration_list">
        <a class="collaboration_item"
           @mouseenter="enterShow(item.href)"
           v-for="item in info.list"
           :href="item.href || 'javascript:void(0)'"
           :target=" item.href ? '_blank': ''"
        >
            <div class="collaboration_logo">
                <img :src="UrlSrc+item.img" alt="">
            </div>
        </a>
        <a v-if="info.list.length > 10" class="collaboration_item">
            <div class="collaboration_zanwei_logo"></div>
        </a>
        <!--占位-->
        <div v-if="info.list.length < 3" class="collaboration_zanwei_logo">
        </div>
        <div v-if="info.list.length < 3" class="collaboration_zanwei_logo two_logo">
        </div>
        <div v-if="info.list.length < 4" class="collaboration_zanwei_logo three_logo">
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
    import $ from "jquery"
    export default {
        data(){
            return {}
        },
        props: {
            info: {}
        },

        methods: {
            // 业务需求，有链接的时候有hover效果。
            showHover(){
                $('.collaboration_item_none').removeClass('collaboration_item_none').addClass('collaboration_item')
            },
            removeHover(){
                $('.collaboration_item').removeClass('collaboration_item').addClass('collaboration_item_none')

            },
            enterShow(data){
                if(data !==""){
                    this.showHover()
                }else {
                    this.removeHover()
                }
            },
        }
    }
</script>


<style scoped lang='less'>

    /*@import "../../assets/style/index.less";*/
    @media only screen and (max-width: 330px){
        .collaboration_list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .collaboration_zanwei_logo{
            width: 226px;
            height: 85px;
            margin:20px 5px 20px ;
            display: none;
        }
        .collaboration_item{
            overflow: hidden;
            cursor: pointer;
            margin: 10px 5px 5px 0;
            display: inline-block;
            .collaboration_logo{
                display: block;
                width: 120px;
                height: 44px;
                cursor: hand;
                img{
                    width: 100%;
                }
            }
        }
        .collaboration_item_none{
            overflow: hidden;
            cursor: pointer;
            margin: 10px 5px 5px 0;
            display: inline-block;
            .collaboration_logo{
                display: block;
                width: 120px;
                height: 44px;
                cursor: default;
                img{width: 100%;}
            }
        }
        .collaboration_item:last-child{
            display: none;
        }
    }
    @media only screen and(min-width: 330px) and (max-width: 450px){
        .collaboration_list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .collaboration_zanwei_logo{
            width: 236px;
            height: 85px;
            margin:20px 5px 20px ;
            display: none;
        }
        .collaboration_item{
            overflow: hidden;
            cursor: pointer;
            margin: 10px 5px 15px 5px;
            display: inline-block;
            .collaboration_logo{
                display: block;
                width: 140px;
                height: 52px;
                cursor: hand;
                img{
                    width: 100%;
                }
            }
        }
        .collaboration_item_none{
            overflow: hidden;
            cursor: pointer;
            margin: 10px 5px 5px 5px;
            display: inline-block;
            .collaboration_logo{
                display: block;
                width: 140px;
                height: 50px;
                cursor: default;
                img{width: 100%;}
            }
        }
        .collaboration_item:last-child{
            display: none;
        }
    }
    @media only screen and(min-width: 450px)and (max-width: 800px){
        .collaboration_list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .collaboration_zanwei_logo{
            width: 226px;
            height: 85px;
            margin:20px 5px 20px ;
        }
        .collaboration_item{
            overflow: hidden;
            cursor: pointer;
            margin:20px 5px auto ;
            display: inline-block;
            .collaboration_logo{
                display: block;
                width: 236px;
                height: 85px;
                cursor: hand;
            }
        }
        .collaboration_item:last-child{
            cursor: auto;
        }
        .collaboration_item_none{
            overflow: hidden;
            cursor: pointer;
            margin: 20px 5px auto ;
            display: inline-block;
            .collaboration_logo{
                display: block;
                width: 236px;
                height: 85px;
                cursor: default;
            }
        }
        .collaboration_item_none:last-child{
            cursor: auto;
        }
    }
    @media only screen and (min-width:800px) and ( max-width: 925px){
        .collaboration_list{
            display: flex;
            flex-wrap: wrap;
            margin: 0 15%;
            justify-content: space-between;
        }
        .collaboration_zanwei_logo{
            width: 236px;
            height: 85px;
            margin:20px 5px 20px ;
            display: none;
        }
        .collaboration_item{
            overflow: hidden;
            cursor: pointer;
            margin:20px 5px 20px ;
            display: inline-block;
            .collaboration_logo{
                display: block;
                width: 236px;
                height: 86px;
                cursor: hand;
            }
        }
        .collaboration_item_none{
            overflow: hidden;
            cursor: pointer;
            margin: 20px 5px 20px;
            display: inline-block;
            .collaboration_logo{
                display: block;
                width: 236px;
                height: 86px;
                cursor: default;
            }
        }
        .collaboration_item:last-child{
            display: none;
        }
        .collaboration_item_none:last-child{
            display: none;
        }
    }
    @media only screen and (min-width:925px) and ( max-width: 1024px){
        .collaboration_list{
            display: flex;
            flex-wrap: wrap;
            margin: 0 5%;
            justify-content: space-between;
        }
        .collaboration_zanwei_logo{
            width: 236px;
            height: 85px;
            margin:20px 5px 20px ;
        }
        .two_logo{
            display: none;
        }
        .three_logo{
            display: none;
        }

        /*#collaboration_three_list{*/
            /*display: flex;*/
            /*margin: 0 5%;*/
            /*justify-content: flex-start;*/
        /*}*/
        .collaboration_item{
            overflow: hidden;
            cursor: pointer;
            margin:20px 5px 20px;
            display: inline-block;
            .collaboration_logo{
                display: block;
                width: 236px;
                height: 86px;
                cursor: hand;
            }
        }
        .collaboration_item_none{
            overflow: hidden;
            cursor: pointer;
            margin: 20px 5px 20px;
            display: inline-block;
            .collaboration_logo{
                display: block;
                width: 236px;
                height: 86px;
                cursor: default;
            }
        }
        .collaboration_item:last-child{
            cursor: auto;
        }
        .collaboration_item_none:last-child{
            cursor: auto;
        }
    }
    @media only screen and( min-width: 1024px) and ( max-width: 1200px){
        .collaboration_list{
            display: flex;
            flex-wrap: wrap;
            margin: 0 5%;
            justify-content: space-between;
        }
        .collaboration_zanwei_logo{
            width: 236px;
            height: 85px;
            margin:20px 5px 20px ;
        }
        .two_logo{
            display: none;
        }
        .collaboration_item{
            overflow: hidden;
            cursor: pointer;
            margin:20px 5px 20px ;
            display: inline-block;
            .collaboration_logo{
                display: block;
                width: 236px;
                height: 86px;
                cursor: hand;
            }
        }
        .collaboration_item_none{
            overflow: hidden;
            cursor: pointer;
            margin: 20px 5px 20px ;
            display: inline-block;
            .collaboration_logo{
                display: block;
                width: 236px;
                height: 86px;
                cursor: default;
            }
        }
        .collaboration_item:last-child{
            cursor:auto;
        }
        .collaboration_item_none:last-child{
            cursor:auto;
        }
    }
    @media only screen and( min-width: 1200px) and ( max-width: 1380px){
        .collaboration_list{
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
        }
        .collaboration_zanwei_logo{
            width: 236px;
            height: 85px;
            margin:20px 5px auto ;
        }
        .collaboration_item{
            overflow: hidden;
            cursor: pointer;
            margin:20px 5px auto ;
            display: inline-block;
            .collaboration_logo{
                display: block;
                width: 236px;
                height: 86px;
                cursor: hand;
            }
        }

        .collaboration_item_none{
            overflow: hidden;
            margin:20px 5px auto ;
            display: inline-block;
            .collaboration_logo{
                display: block;
                width: 236px;
                height: 86px;
                cursor: default;
            }
        }
        .collaboration_item:last-child{
            display: none;
        }
        .collaboration_item_none:last-child{
            display: none;
        }
    }
    @media only screen and ( min-width: 1380px){
        .collaboration_list{
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
        }
        .collaboration_zanwei_logo{
            width: 236px;
            height: 85px;
            margin:20px 5px auto ;
        }
        .collaboration_item{
            overflow: hidden;
            margin:20px 5px auto ;
            display: inline-block;
            .collaboration_logo{
                display: block;
                width: 236px;
                height: 86px;
                cursor: hand;

            }
        }
        .collaboration_item_none{
            overflow: hidden;
            margin: 20px 5px auto ;
            display: inline-block;
            .collaboration_logo{
                display: block;
                width: 236px;
                height: 86px;
                cursor: default;
            }
        }
    }
    /*.collaboration_item:hover{*/
        /*.collaboration_logo{*/
            /*border-color: #1f97f8;*/
        /*}*/
    /*}*/
    .collaboration_zanwei_logo{
        width: 236px;
        height: 86px;
    }
    .a-none-line{
        text-decoration: none !important;
    }

</style>