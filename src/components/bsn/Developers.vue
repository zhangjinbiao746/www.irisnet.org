<template>
	<div class="developers_container">
		<div class="developers_title_container">
			<div class="developers_title_wrap">
				<div class="developers_title_content">{{$store.state.messages.developer.title}}</div>
			</div>
			
		</div>
		<div class="developers_content_wrap">
			<div class="developers_content">
                <NavigationLine class="nav_line" />
				<div class="developers_content_title">{{$store.state.messages.developer.content.title}}</div>
				<div class="developers_content_doc">
					<div class="developers_img_content">
						<img src="../../assets/bsn/bsn_developer.png" alt="">
					</div>
					<div>
						<ul class="developers_right_content">
							<li class="developers_right_content_item" v-html="$store.state.messages.developer.content.rightContent1"></li>
							<li class="developers_right_content_item" v-html="$store.state.messages.developer.content.rightContent2"></li>
							<li class="developers_right_content_item bond_style">{{$store.state.messages.developer.content.rightContent3}}</li>
<!--							<li class="developers_right_content_item" v-html="$store.state.messages.developer.content.rightContent4"></li>-->
<!--							<li class="developers_right_content_item" v-html="$store.state.messages.developer.content.rightContent5"></li>-->
<!--							<li class="developers_right_content_item" v-html="$store.state.messages.developer.content.rightContent6"></li>-->
						</ul>
						<div class="developers_create_account_content">
							<div class="developers_create_account_btn">
								<button class="developers_create_btn_doc" @click="jumpUrl($store.state.messages.developer.content.createDeveloperHref)">{{$store.state.messages.developer.content.createDeveloperBtnDoc}}</button>
							</div>
							<a class="irisnet_doc_link" :href="$store.state.messages.developer.content.irisnetDocHref" target="_blank">{{$store.state.messages.developer.content.irisnetDoc}}</a>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div class="testnet_container">
            <NavigationLine />
			<h3 class="testnet_title">{{$store.state.messages.developer.testnet.title}}</h3>
			<div class="testnet_item_container">
                <h3 class="testnet_content_title">{{$store.state.messages.developer.testnet.content.title}}</h3>
                <p class="testnet_content">{{$store.state.messages.developer.testnet.content.content}}</p>
                <a class="testnet_content_btn" rel="noreferrer noopener" :href="$store.state.messages.developer.testnet.content.link">{{$store.state.messages.developer.testnet.content.btnLabel}}</a>
			</div>
		</div>
	</div>

</template>

<script>
    import NavigationLine from "../../pages/components/NavigationLine";
	export default {
		name: "Developers",
		methods:{
			jumpUrl(url){
				window.open(url,'_blank')
				this.$umeng.push('reservation',"click")
			},
		},
        components: {
            NavigationLine
        }
	}
</script>

<style scoped lang="less">
	.developers_container{
		.developers_title_container{
			width: 100%;
			padding-top: 0.6rem;
			.developers_title_wrap{
				margin: 0.7rem auto 0;
				max-width: 12rem;
				font-size: 0.52rem;
				display: flex;
				justify-content: flex-start;
				.developers_title_content{
					color: #fff;
					text-align: left;
				}
			}
		}
		.developers_content_wrap{
			width: 100%;
			.developers_content{
				max-width: 12rem;
				margin: 0 auto;
                .nav_line {
                    margin-top: 0.7rem;
                }
				.developers_content_title{
					color:#fff;
					font-size: 0.4rem;
					line-height: 0.45rem;
					margin-top: 0.36rem;
					max-width: 7.8rem;
                    @media (max-width: 768px) {
                        margin-top: 0.24rem;
                        font-size: 0.32rem;
                    }
				}
				.developers_content_doc{
					display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 0.4rem;
					margin-bottom: 1.2rem;
					.developers_img_content{
                        margin-left: 0.11rem;
                        margin-right: 1.2rem;
						max-width: 5.04rem;
                        @media(max-width: 1200px) {
                            margin-right: 0.8rem;
                        }
                        @media(max-width: 1000px) {
                            margin-right: 0.48rem;
                        }
						img{
							width: 100%;
						}
					}
					.developers_right_content{
						max-width: 4.8rem;
						.developers_right_content_item{
							color:#9BA5BE;
							font-size: 0.16rem;
							margin-top: 0.24rem;
							line-height: 0.24rem;
							word-wrap: break-word;
							word-break: normal;
						}
						.developers_right_content_item:first-child{
							margin-top: 0;
						}
						.developers_right_content_item:nth-child(5){
							margin-top: 0;
						}
						.developers_right_content_item:nth-child(6){
							margin-top: 0;
						}
						.bond_style{
							font-weight: bold;
							color: #7987A8;
						}
					}
					.developers_create_account_content{
						margin-top: 0.24rem;
						.developers_create_account_btn{
							margin-bottom: 0.24rem;
							.developers_create_btn_doc{
                                box-sizing: border-box;
                                padding: 0.1rem 0.08rem;
								width: 2rem;
								font-size: 0.16rem;
                                font-weight: 600;
								color: #fff;
								background: url(../../assets/btn.png) no-repeat center / cover;
								height: 0.5rem;
								border-radius: 0.04rem;
								display: flex;
								align-items: center;
								justify-content: center;
                                border: 0.02rem solid transparent;
                                transition: all .2s linear;
                                &:hover {
                                    background: url(../../assets/btn_active.png) no-repeat center / cover;
                                    box-shadow: 0px 0px 6px 3px #C965FF;
                                    border-color: #9B64ED;
                                    backdrop-filter: blur(0.05rem);
                                    transition: all .2s linear;
                                }
							}
						}
						.irisnet_doc_link{
							margin: 0 0 0 0.24rem;
							color: #714BE3;
							border-bottom: 0.01rem solid #714BE3;
						}
					}
				}
			}
		}
		.testnet_container{
			max-width: 12rem;
			margin: 0 auto;
            @media (max-width: 1200px) {
                margin: 0 0.4rem;
            }
            @media (max-width: 596px) {
                margin: 0 0.2rem;
            }
			.testnet_title{
                margin-top: 0.36rem;
				font-size: 0.4rem;
                font-weight: normal;
				color: #fff;
				line-height: 0.45rem;
                @media(max-width: 768px) {
                    margin-top: 0.24rem;
                    font-size: 0.32rem;
                }
			}
			.testnet_item_container{
                box-sizing: border-box;
				margin-top: 0.28rem;
				margin-bottom: 1.2rem;
                padding: 0.4rem 0.44rem;
                background: url(../../assets/testnet_image.png) no-repeat 100% / cover;
                border-radius: 0.04rem;
                @media (max-width: 1100px) {
                    background-position: 70% center;
                }
                @media (max-width: 768px) {
                    padding: 0.2rem 0.24rem;
                    background: url(../../assets/testnet_mobile_image.png) no-repeat center / cover;
                }
                .testnet_content_title {
                    font-size: 0.32rem;
                    color: #FFFFFF;
                    font-weight: normal;
                    line-height: 0.45rem;
                }
                .testnet_content {
                    margin-top: 0.16rem;
                    max-width: 5.4rem;
                    font-size: 0.14rem;
                    font-weight: 400;
                    color: rgba(255,255,255,0.65);
                    line-height: 0.22rem;
                }
                .testnet_content_btn {
                    box-sizing: border-box;
                    display: inline-block;
                    margin-top: 0.32rem;
                    padding: 0.1rem 0.24rem;
                    font-size: 0.2rem;
                    font-weight: 600;
                    color: #FFFFFF;
                    line-height: 0.28rem;
                    background: url(../../assets/btn.png) no-repeat center / cover;
                    border: 2px solid transparent;
                    border-radius: 0.04rem;
                    transition: all .2s linear;
                    &:hover {
                        background: url(../../assets/btn_active.png) no-repeat center / cover;
                        box-shadow: 0px 0px 6px 3px #C965FF;
                        border-color: #9B64ED;
                        backdrop-filter: blur(0.05rem);
                        transition: all .2s linear;
                    }
                }
			}
		}
	}
	@media screen and (max-width: 1200px){
		.developers_container{
			.developers_title_container{
				box-sizing: border-box;
				padding-left: 0.2rem;
				padding-right: 0.2rem;
			}
			.developers_content_wrap{
				box-sizing: border-box;
				padding-right: 0.2rem;
				padding-left: 0.2rem;
			}
		}
	}
	@media screen and (max-width: 768px) {
		.developers_container{
			.developers_title_container{
				padding-left: 0.3rem;
				padding-right: 0.3rem;
			}
			.developers_content_wrap{
				padding-right: 0.3rem;
				padding-left: 0.3rem;
				.developers_content{
					.developers_content_doc{
						flex-direction: column;
						align-items: center;
						margin-bottom: 0.6rem;
						.developers_img_content{
                            margin-right: 0;
							max-width: 5.04rem;
						}
						.developers_right_content{
							margin-top: 0.48rem;
							width: auto;
							max-width: none;
						}
					}
				}
			}
		}
	}
	@media screen and (max-width: 375px) {
		.developers_container{
			.developers_title_container{
				padding-left: 0.2rem;
				padding-right: 0.2rem;
			}
			.developers_content_wrap{
				padding-right: 0.2rem;
				padding-left: 0.2rem;
				
			}
		}
	}
</style>
