<template>
    <div class="press_kit_container">
        <div class="press_kit_header_content">
            <div class="press_kit_header_wrap">
                <h2 class="press_kit_header_title">{{$t('message.presskitThree.title')}}</h2>
                <p class="press_kit_header_section">{{$t('message.presskitThree.secondTitle')}}</p>
                <div class="press_kit_header_btn">{{$t('message.presskitThree.resources')}}</div>
            </div>
        </div>
        <div class="press_kit_color_content">
            <div class="press_kit_color_wrap">
                <h3 class="press_kit_color_title">Colos</h3>
                <ul class="press_kit_color_list">
                    <li class="press_kit_color_item" v-for="item in colorArray">
                        <div class="press_kit_color"  :style="{'border-color': item.color}"  >
                            <div class="press_kit_color_center" :style="{'background':item.color}"></div>
                        </div>
                        <p class="press_kig_color_number">{{item.label}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="press_kit_logo_content">
            <div class="press_kit_logo_wrap">
                <div class="press_kit_logo_header_title">Logo</div>
                <ul class="press_kit_logo_img_top_content">
                    <li class="press_kit_logo_img_list_item" v-for="item in logoHeaderArray">
                        <img :src="item.pngSrc" alt="">
                        <p class="press_kst_link_content">
                            <a :href="item.pngSrc" :download="item.pngName">PNG</a>
                            <a :href="item.svgSrc" :download="item.svgName">SVG</a>
                        </p>
                    </li>
                </ul>
                <ul class="press_kit_logo_img_top_bottom">
                    <li class="press_kit_logo_img_list_item" v-for="item in logoFooterArray">
                        <img :src="item.pngSrc" alt="">
                        <p class="press_kst_link_content">
                            <a :href="item.pngSrc" :download="item.pngName">PNG</a>
                            <a :href="item.svgSrc" :download="item.svgName">SVG</a>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="press_kit_about_irisnet">
            <div class="press_kit_about_irisnet_wrap">
                <h1 class="press_kit_about_irisnet_title">{{$t('message.presskitThree.about.AboutIRISnet')}}</h1>
                <h2 class="press_kit_about_irisnet_section_title">{{$t('message.presskitThree.about.title')}}</h2>
                <p class="press_kit_about_irisnet_sertion" v-html="$t('message.presskitThree.about.section')"></p>
                <p class="press_kit_about_irisnet_sertion" v-html="$t('message.presskitThree.about.secondSection')"></p>
                <p class="press_kit_about_irisnet_link">
                    <span>{{$t('message.presskitThree.about.more')}}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PressKitThree",
        data () {
            return{
                colorArray: [
                    {
                        color:"#009DDE",
                        label:'#009DDE'
                    },
                    {
                        color:"#694D9F",
                        label:'#694D9F'
                    },
                    {
                        color:"#ED3554",
                        label:'#ED3554'
                    },
                    {
                        color:"#2E3148",
                        label:'#2E3148'
                    },
                ],
                logoHeaderArray:[
                    {
                        pngSrc:require("../assets/irisnetThree/irisnet_logo_1.png"),
                        svgSrc: require("../assets/irisnetThree/irisnet_header_1.svg"),
                        pngName: 'irisnet_logo_1.png',
                        svgName: 'irisnet_header_1.svg'
                    },
                    {
                        pngSrc:require("../assets/irisnetThree/irisnet_logo_2.png"),
                        svgSrc: require("../assets/irisnetThree/irisnet_header_2.svg"),
                        pngName: 'irisnet_logo_2.png',
                        svgName: 'irisnet_header_2.svg'
                    },
                    {
                        pngSrc:require("../assets/irisnetThree/irisnet_logo_3.png"),
                        svgSrc: require("../assets/irisnetThree/irisnet_header_3.svg"),
                        pngName: 'irisnet_logo_3.png',
                        svgName: 'irisnet_header_3.svg'
                    }
                ],
                logoFooterArray:[
                    {
                        pngSrc:require("../assets/irisnetThree/irisnet_footer_1.png"),
                        svgSrc: require("../assets/irisnetThree/irisnet_header_4.svg"),
                        pngName: 'irisnet_footer_1.png',
                        svgName: 'irisnet_header_4.svg'
                    },
                    {
                        pngSrc:require("../assets/irisnetThree/irisnet_footer_2.png"),
                        svgSrc: require("../assets/irisnetThree/irisnet_header_5.svg"),
                        pngName: 'irisnet_footer_2.png',
                        svgName: 'irisnet_header_5.svg'
                    },
                    {
                        pngSrc:require("../assets/irisnetThree/irisnet_footer_3.png"),
                        svgSrc: require("../assets/irisnetThree/irisnet_header_6.svg"),
                        pngName: 'irisnet_footer_3.png',
                        svgName: 'irisnet_header_6.svg'
                    },
                    {
                        pngSrc:require("../assets/irisnetThree/irisnet_footer_4.png"),
                        svgSrc: require("../assets/irisnetThree/irisnet_header_7.svg"),
                        pngName: 'irisnet_footer_4.png',
                        svgName: 'irisnet_header_7.svg'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .press_kit_container{
        padding-top: 0.6rem;
        .press_kit_header_content{
            background: #F8F9FC;
            .press_kit_header_wrap{
                max-width: 12rem;
                margin: 0 auto;
                padding:0 0.15rem;
                padding-bottom: 1.03rem;
                .press_kit_header_title{
                    padding: 1rem 0 0.1rem 0;
                    font-size: 0.48rem;
                    font-weight:400;
                    color:rgba(49,50,54,1);
                    line-height: 0.65rem;
                }
                .press_kit_header_section{
                    font-size: 0.22rem;
                    font-weight:400;
                    color:rgba(124,125,141,1);
                    line-height: 0.34rem;
                }
                .press_kit_header_btn{
                    margin-top: 0.3rem;
                    width: 1.88rem;
                    height: 0.5rem;
                    line-height: 0.5rem;
                    border-radius: 0.25rem;
                    text-align: center;
                    color:#5E82F1;
                    border: 0.01rem solid #5E82F1
                }
            }
        }
        .press_kit_color_content{
            background: #fff;
            .press_kit_color_wrap{
                max-width: 12rem;
                margin: 0 auto;
                padding:0 0.15rem;
                .press_kit_color_title{
                    padding: 1rem 0 0.6rem 0;
                    font-size: 0.36rem;
                    font-weight:400;
                    color:rgba(49,50,54,1);
                    line-height:0.65rem;
                }
                .press_kit_color_list{
                    display: flex;
                    flex-wrap: wrap;
                    padding-bottom: 1rem;
                    .press_kit_color_item{
                        flex: 1;
                        .press_kit_color{
                            width: 1.2rem;
                            height:1.2rem;
                            border-radius: 0.6rem;
                            border: 0.01rem solid;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            .press_kit_color_center{
                                width: 0.9rem;
                                height: 0.9rem;
                                border-radius: 0.45rem;
                            }
                        }
                        .press_kig_color_number{
                            margin-top: 0.3rem;
                            width: 1.2rem;
                            text-align: center;
                        }
                    }
                }
            }
        }
        .press_kit_logo_content{
            .press_kit_logo_wrap{
                max-width: 12rem;
                margin: 0 auto;
                padding:0 0.15rem;
                .press_kit_logo_header_title{
                    font-size: 0.36rem;
                    font-weight:400;
                    color:rgba(49,50,54,1);
                    line-height: 0.65rem;
                    padding: 0.6rem 0 0.6rem 0rem;
                }
                .press_kit_logo_img_top_content{
                    display: flex;
                    flex-wrap: wrap;
                    .press_kit_logo_img_list_item{
                        // flex: 1;
                        width:3.8rem;
                        margin-right: 0.3rem;
                        margin-bottom:0.4rem;
                        img{
                            width: 100%;
                        }
                        .press_kst_link_content{
                            margin: 0.2rem 0 0 0.3rem;
                            a{
                                font-size: 0.22rem;
                                font-weight:400;
                                color:rgba(94,130,241,1);
                                line-height: 0.34rem;
                                margin-right: 0.15rem;
                            }
                        }
                    }
                    .press_kit_logo_img_list_item:last-child{
                        margin-right: 0;
                    }
                }
                .press_kit_logo_img_top_bottom{
                    margin-top: 0.6rem;
                    display: flex;
                    flex-wrap: wrap;
                    .press_kit_logo_img_list_item{
                        width:2.7rem;
                        margin-right: 0.3rem;
                        margin-bottom:0.4rem;
                        img{
                            width: 100%;
                        }
                        .press_kst_link_content{
                            margin: 0.2rem 0 0 0.19rem;
                            a{
                                font-size: 0.22rem;
                                font-weight:400;
                                color:rgba(94,130,241,1);
                                line-height: 0.34rem;
                                margin-right: 0.15rem;
                            }
                        }
                    }
                    .press_kit_logo_img_list_item:last-child{
                        margin-right: 0;
                    }
                }
            }
        }
        .press_kit_about_irisnet{
            background: #fff;
            .press_kit_about_irisnet_wrap{
                max-width: 12rem;
                margin: 0 auto;
                padding:0 0.15rem;
                .press_kit_about_irisnet_title{
                    margin:0;
                    padding: 0.6rem 0 0.6rem 0;
                    font-size: 0.36rem;
                    font-weight:400;
                    color:rgba(49,50,54,1);
                    line-height: 0.65rem;
                }
                .press_kit_about_irisnet_section_title{
                    font-size: 0.22rem;
                    font-weight:600;
                    color:rgba(38,48,53,1);
                    line-height: 0.32rem;
                }
                .press_kit_about_irisnet_sertion{
                    margin-top: 0.2rem;
                    font-size: 0.17rem;
                    font-weight:400;
                    color:rgba(124,125,141,1);
                    line-height: 0.3rem;
                }
                .press_kit_about_irisnet_link{
                    margin-top: 0.15rem;
                    margin-bottom: 1rem;
                    font-size: 0.17rem;
                    font-weight:600;
                    color:rgba(94,130,241,1);
                    line-height: 0.32rem;
                    span{
                        border-bottom: 0.01rem solid #5E82F1;
                    }
                }
            }
        }
    }

    // @media screen and (min-width:768px) and (max-width: 1200px){
    //     .press_kit_container{
    //         .press_kit_header_content{
    //             .press_kit_header_wrap{
    //                 .press_kit_header_title{
    //                     font-size: 0.48rem;
    //                     font-weight:400;
    //                     line-height: 0.65rem;
    //                 }
    //                 .press_kit_header_section{
    //                     font-size: 0.22rem;
    //                     line-height: 0.34rem;
    //                 }
    //                 .press_kit_header_btn{
    //                     line-height: 0.5rem;
    //                     border-radius: 0.25rem;
    //                     text-align: center;
    //                     border: 0.01rem solid #5E82F1
    //                 }
    //             }
    //         }
    //         .press_kit_color_content{
    //             .press_kit_color_wrap{
    //                 .press_kit_color_title{
    //                     font-size: 0.36rem;
    //                     font-weight:400;
    //                     line-height:0.65rem;
    //                 }
    //                 .press_kit_color_list{
    //                     .press_kit_color_item{
    //                         .press_kit_color{
    //                             .press_kit_color_center{
    //                             }
    //                         }
    //                         .press_kig_color_number{
                               
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //         .press_kit_logo_content{
    //             .press_kit_logo_wrap{
    //                 .press_kit_logo_header_title{
    //                     font-size: 0.36rem;
    //                     font-weight:400;
    //                     line-height: 0.65rem;
    //                 }
    //                 .press_kit_logo_img_top_content{
    //                     .press_kit_logo_img_list_item{
    //                         margin-right: 0.3rem;
    //                         img{
    //                             width: 100%;
    //                         }
    //                         .press_kst_link_content{
    //                             a{
    //                                 font-size: 0.22rem;
    //                                 font-weight:400;
    //                                 color:rgba(94,130,241,1);
    //                                 line-height: 0.34rem;
    //                                 margin-right: 0.15rem;
    //                             }
    //                         }
    //                     }
    //                     .press_kit_logo_img_list_item:last-child{
    //                         margin-right: 0;
    //                     }
    //                 }
    //                 .press_kit_logo_img_top_bottom{
    //                     margin-top: 0.6rem;
    //                     .press_kit_logo_img_list_item{
    //                         flex: 1;
    //                         margin-right: 0.3rem;
    //                         img{
    //                             width: 100%;
    //                         }
    //                         .press_kst_link_content{
    //                             margin: 0.2rem 0 0 0.19rem;
    //                             a{
    //                                 font-size: 0.22rem;
    //                                 font-weight:400;
    //                                 line-height: 0.34rem;
    //                                 margin-right: 0.15rem;
    //                             }
    //                         }
    //                     }
    //                     .press_kit_logo_img_list_item:last-child{
    //                         margin-right: 0;
    //                     }
    //                 }
    //             }
    //         }
    //         .press_kit_about_irisnet{
    //             .press_kit_about_irisnet_wrap{
    //                 margin: 0 auto;
    //                 .press_kit_about_irisnet_title{
    //                     padding: 1rem 0 0.6rem 0;
    //                     font-size: 0.36rem;
    //                     font-weight:400;
    //                     line-height: 0.65rem;
    //                 }
    //                 .press_kit_about_irisnet_section_title{
    //                     font-size: 0.22rem;
    //                     font-weight:600;
    //                     line-height: 0.32rem;
    //                 }
    //                 .press_kit_about_irisnet_sertion{
    //                     margin-top: 0.2rem;
    //                     font-size: 0.17rem;
    //                     font-weight:400;
    //                     line-height: 0.3rem;
    //                 }
    //                 .press_kit_about_irisnet_link{
    //                     margin-top: 0.15rem;
    //                     margin-bottom: 1rem;
    //                     font-size: 0.17rem;
    //                     font-weight:600;
    //                     line-height: 0.32rem;
    //                     span{
    //                         border-bottom: 0.01rem solid #5E82F1;
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    @media screen and (min-width:375px) and (max-width: 768px){
        .press_kit_container{
            .press_kit_header_content{
                .press_kit_header_wrap{
                    max-width:5.2rem;
                    align-items:center;
                    .press_kit_header_title{
                        font-size: 0.36rem;
                        font-weight:400;
                        line-height: 0.65rem;
                    }
                    .press_kit_header_section{
                        font-size: 0.22rem;
                        line-height: 0.34rem;
                    }
                    .press_kit_header_btn{
                        line-height: 0.5rem;
                        border-radius: 0.25rem;
                        text-align: center;
                        border: 0.01rem solid #5E82F1
                    }
                }
            }
            .press_kit_color_content{
                .press_kit_color_wrap{
                    max-width:5.2rem;
                    .press_kit_color_title{
                        font-size: 0.36rem;
                        font-weight:400;
                        line-height:0.65rem;
                    }
                    .press_kit_color_list{
                        padding-bottom: 0.5rem;
                        .press_kit_color_item{
                            margin:0 0.30rem 0.40rem 0.30rem;
                            .press_kit_color{
                                .press_kit_color_center{
                                }
                            }
                            .press_kig_color_number{
                               
                            }
                        }
                    }
                }
            }
            .press_kit_logo_content{
                .press_kit_logo_wrap{
                    max-width:5.2rem;
                    .press_kit_logo_header_title{
                        font-size: 0.36rem;
                        font-weight:400;
                        line-height: 0.65rem;
                        padding-left: 0;
                    }
                    .press_kit_logo_img_top_content{
                        .press_kit_logo_img_list_item{
                            margin-right: 0.3rem;
                            img{
                                width: 100%;
                            }
                            .press_kst_link_content{
                                margin-left:0.2rem;
                                a{
                                    font-size: 0.22rem;
                                    font-weight:400;
                                    color:rgba(94,130,241,1);
                                    line-height: 0.34rem;
                                    margin-right: 0.15rem;
                                }
                            }
                        }
                        .press_kit_logo_img_list_item:last-child{
                            margin-right: 0;
                        }
                    }
                    .press_kit_logo_img_top_bottom{
                        margin-top: 0rem;
                        .press_kit_logo_img_list_item{
                            margin-right: 0.3rem;
                            img{
                                width: 100%;
                            }
                            .press_kst_link_content{
                                margin: 0.2rem 0 0 0.19rem;
                                a{
                                    font-size: 0.22rem;
                                    font-weight:400;
                                    line-height: 0.34rem;
                                    margin-right: 0.15rem;
                                }
                            }
                        }
                        .press_kit_logo_img_list_item:last-child{
                            margin-right: 0;
                        }
                    }
                }
            }
            .press_kit_about_irisnet{
                .press_kit_about_irisnet_wrap{
                    max-width:5.2rem;
                    .press_kit_about_irisnet_title{
                        padding: 1rem 0 0.6rem 0;
                        font-size: 0.36rem;
                        font-weight:400;
                        line-height: 0.65rem;
                    }
                    .press_kit_about_irisnet_section_title{
                        font-size: 0.22rem;
                        font-weight:600;
                        line-height: 0.32rem;
                    }
                    .press_kit_about_irisnet_sertion{
                        margin-top: 0.2rem;
                        font-size: 0.17rem;
                        font-weight:400;
                        line-height: 0.3rem;
                    }
                    .press_kit_about_irisnet_link{
                        margin-top: 0.15rem;
                        margin-bottom: 1rem;
                        font-size: 0.17rem;
                        font-weight:600;
                        line-height: 0.32rem;
                        span{
                            border-bottom: 0.01rem solid #5E82F1;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 375px){
        .press_kit_container{
            .press_kit_header_content{
                .press_kit_header_wrap{
                    .press_kit_header_title{
                        font-size: 0.18rem;
                        font-weight:400;
                        line-height: 0.36rem;
                    }
                    .press_kit_header_section{
                        font-size: 0.14rem;
                        line-height: 0.34rem;
                    }
                    .press_kit_header_btn{
                        line-height: 0.34rem;
                        border-radius: 0.25rem;
                        text-align: center;
                        border: 0.01rem solid #5E82F1
                    }
                }
            }
            .press_kit_color_content{
                .press_kit_color_wrap{
                    .press_kit_color_title{
                        font-size: 0.18rem;
                        font-weight:400;
                        line-height:0.34rem;
                    }
                    .press_kit_color_list{
                        padding-bottom: 0rem;
                        .press_kit_color_item{
                            margin:0 0.30rem 0.40rem 0.30rem;
                            .press_kit_color{
                                .press_kit_color_center{
                                }
                            }
                            .press_kig_color_number{
                               
                            }
                        }
                    }
                }
            }
            .press_kit_logo_content{
                .press_kit_logo_wrap{
                    .press_kit_logo_header_title{
                        font-size: 0.18rem;
                        font-weight:400;
                        line-height: 0.36rem;
                    }
                    .press_kit_logo_img_top_content{
                        .press_kit_logo_img_list_item{
                            margin-right: 0.3rem;
                            img{
                                width: 100%;
                            }
                            .press_kst_link_content{
                                margin-left:0.1rem;
                                a{
                                    font-size: 0.14rem;
                                    font-weight:400;
                                    color:rgba(94,130,241,1);
                                    line-height: 0.15rem;
                                    margin-right: 0.15rem;
                                }
                            }
                        }
                        .press_kit_logo_img_list_item:last-child{
                            margin-right: 0;
                        }
                    }
                    .press_kit_logo_img_top_bottom{
                        margin-top: 0rem;
                        .press_kit_logo_img_list_item{
                            margin-right: 0.3rem;
                            img{
                                width: 100%;
                            }
                            .press_kst_link_content{
                                margin: 0.2rem 0 0 0.1rem;
                                a{
                                    font-size: 0.14rem;
                                    font-weight:400;
                                    line-height: 0.15rem;
                                    margin-right: 0.15rem;
                                }
                            }
                        }
                        .press_kit_logo_img_list_item:last-child{
                            margin-right: 0;
                        }
                    }
                }
            }
            .press_kit_about_irisnet{
                .press_kit_about_irisnet_wrap{
                    margin: 0 auto;
                    .press_kit_about_irisnet_title{
                        padding: 0.6rem 0 0.4rem 0;
                        font-size: 0.18rem;
                        font-weight:400;
                        line-height: 0.36rem;
                    }
                    .press_kit_about_irisnet_section_title{
                        font-size: 0.14rem;
                        font-weight:600;
                        line-height: 0.32rem;
                    }
                    .press_kit_about_irisnet_sertion{
                        margin-top: 0.2rem;
                        font-size: 0.14rem;
                        font-weight:400;
                        line-height: 0.15rem;
                    }
                    .press_kit_about_irisnet_link{
                        margin-top: 0.15rem;
                        margin-bottom: 1rem;
                        font-size: 0.14rem;
                        font-weight:600;
                        line-height: 0.15rem;
                        span{
                            border-bottom: 0.01rem solid #5E82F1;
                        }
                    }
                }
            }
        }
    }
</style>