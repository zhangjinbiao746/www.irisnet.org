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
                $('.collaboration_itemnone').removeClass('collaboration_itemnone').addClass('collaboration_item')
            },
            removeHover(){
                $('.collaboration_item').removeClass('collaboration_item').addClass('collaboration_itemnone')

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
    @media only screen and (max-width: 450px){
        .collaboration_list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .collaboration_item{
            overflow: hidden;
            cursor: pointer;
            margin: 10px 5px 10px 0;
            display: inline-block;
            .collaboration_logo{
                display: block;
                width: 130px;
                height: 50px;
                cursor: hand;
                img{
                    width: 100%;
                }
            }
        }
        .collaboration_itemnone{
            overflow: hidden;
            cursor: pointer;
            margin: 10px 5px;
            display: inline-block;
            .collaboration_logo{
                display: block;
                width: 130px;
                height: 50px;
                cursor: default;
                img{width: 100%;}
            }
        }
    }
    @media only screen and(min-width: 450px)and (max-width: 800px){
        .collaboration_list{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .collaboration_item{
            overflow: hidden;
            cursor: pointer;
            border-radius: 13px;
            margin:20px 5px auto ;
            display: inline-block;
            .collaboration_logo{
                display: block;
                width: 236px;
                height: 85px;
                cursor: hand;
            }
        }
        .collaboration_itemnone{
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
    }
    @media only screen and (min-width:800px) and ( max-width: 925px){
        .collaboration_list{
            display: flex;
            flex-wrap: wrap;
            margin: 0 15%;
            justify-content: space-between;
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
        .collaboration_itemnone{
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
    }
    @media only screen and (min-width:925px) and ( max-width: 1024px){
        .collaboration_list{
            display: flex;
            flex-wrap: wrap;
            margin: 0 5%;
            justify-content: space-between;
        }
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
        .collaboration_itemnone{
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
    }
    @media only screen and( min-width: 1024px) and ( max-width: 1200px){
        .collaboration_list{
            display: flex;
            flex-wrap: wrap;
            margin: 0 5%;
            justify-content: space-between;
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
        .collaboration_itemnone{
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
    }
    @media only screen and( min-width: 1200px) and ( max-width: 1380px){
        .collaboration_list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .collaboration_item{
            overflow: hidden;
            cursor: pointer;
            margin:20px 5px ;
            display: inline-block;
            .collaboration_logo{
                display: block;
                width: 236px;
                height: 86px;
                cursor: hand;
            }
        }
        .collaboration_itemnone{
            overflow: hidden;
            cursor: pointer;
            margin: 20px 5px ;
            display: inline-block;
            .collaboration_logo{
                display: block;
                width: 236px;
                height: 86px;
                cursor: default;
            }
        }
    }
    @media only screen and ( min-width: 1380px){
        .collaboration_list{
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
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
        .collaboration_itemnone{
            overflow: hidden;
            cursor: pointer;
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
    .a-none-line{
        text-decoration: none !important;
    }

</style>