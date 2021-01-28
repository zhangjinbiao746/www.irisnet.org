<template>
	<div class="prepare_container">
		<div class="up_grade_maneuver">
			<div class="up_grade_maneuver_wrap">
				<div class="up_grade_content">
					<p class="up_grade_line"></p>
					<h1 class="up_grade_title">{{$store.state.messages.irishub.prepare.maneuverTitle}}</h1>
					<p class="up_grade_description">{{$store.state.messages.irishub.prepare.maneuverDescription}}</p>
				</div>
			</div>
		</div>
		<div class="up_grade_guide_container">
			<div class="up_grade_guide_content">
				<p class="up_grade_guider_line"></p>
				<h2 class="up_grade_guider_title">{{$store.state.messages.irishub.prepare.guide.title}}</h2>
				<div class="up_grade_guide_list_wrap">
					<div class="up_grade_guide_list">
						<div class="up_grade_guide_item"
						     v-for="(item,index) in $store.state.messages.irishub.prepare.guide.list"
						     :key="index">
							<span :class="`iconfont ${item.iconName}`"></span>
							<div class="up_grade_guide_description_list">
								<p class="up_grade_guide_description_item_title">{{item.title}}</p>
								<p class="up_grade_guide_description_item_description">{{item.description}}</p>
								<a class="up_grade_guide_description_item_cli_link"
								   v-if="item.cliLink"
								   :href="item.cliLink"
								   target="_blank" rel="noreferrer noopener">
									{{item.cliLinkLabel}} <i class="iconfont icon-qianwang"></i>
								</a>
								<p>
									<a class="up_grade_guide_description_item_link"
									   :href="item.link"
									   target="_blank"
									   rel="noreferrer noopener">{{item.linkLabel}} <i class="iconfont icon-qianwang"></i></a>
								</p>
								<p v-if="item.cliTitle" class="up_grade_guide_description_item_cli_description">
									{{item.cliTitle}}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="join_testnet_container">
			<div class="join_testnet_content">
				<p class="join_testnet_line"></p>
				<p class="join_testnet_title">{{$store.state.messages.irishub.prepare.joinTestnet.title}}</p>
				<p class="join_testnet_id">{{$store.state.messages.irishub.prepare.joinTestnet.chainId}}</p>
				<p class="join_testnet_section">{{$store.state.messages.irishub.prepare.joinTestnet.section}}</p>
				<p class="join_testnet_description">{{$store.state.messages.irishub.prepare.joinTestnet.sectionTwo}}</p>
				<a class="join_testnet_link"
				   :href="$store.state.messages.irishub.prepare.joinTestnet.joinLink"
				   target="_blank"
				   rel="noreferrer noopener">{{$store.state.messages.irishub.prepare.joinTestnet.joinLabel}}<i class="iconfont icon-qianwang"></i></a>
				<div class="rpc_node_content">
					<p class="rpc_node_title">{{$store.state.messages.irishub.prepare.joinTestnet.rpcNodeLabel}}</p>
					<a class="rpc_ip_content"
					   :href="$store.state.messages.irishub.prepare.joinTestnet.rpcNodeIpLink"
					   target="_blank" rel="noreferrer noopener">{{$store.state.messages.irishub.prepare.joinTestnet.rpcNodeIp}}</a>
				</div>
				<div class="rest_node_content">
					<p class="rest_node_title">{{$store.state.messages.irishub.prepare.joinTestnet.restNodeLabel}}</p>
					<a class="rest_node_content_link"
					   :href="$store.state.messages.irishub.prepare.joinTestnet.restNodeIpLink"
					   target="_blank" rel="noreferrer noopener">{{$store.state.messages.irishub.prepare.joinTestnet.restNodeIp}}</a>
				</div>
			</div>
		</div>
		<BugBountyComponent></BugBountyComponent>
	</div>
</template>

<script>
	import BugBountyComponent from "./modules/BugBountyComponent";
	export default {
		name: "Prepare",
		components: {BugBountyComponent}
	}
</script>

<style scoped lang="less">
	.prepare_container{
		padding-top: 0.6rem;
		background: #0d0e2c;
		.up_grade_maneuver{
			background: url("../assets/irishub1/prepare_header_bg.png") no-repeat center center;
			background-size: auto 90%;
			@media(max-width: 768px){
				background-position: -2rem 1.8rem;
				background-size: auto 85%;
			}
			@media(max-width: 375px){
				background-position: -0.7rem 1.8rem;
				background-size: auto 65%;
			}
			.up_grade_maneuver_wrap{
				max-width: 12rem;
				margin:0 auto;
				display: flex;
				justify-content: flex-end;
				@media(max-width: 1200px){
					margin: 0 0.4rem;
				}
				@media(max-width: 768px){
					margin: 0 0.2rem;
					justify-content: center;
				}
				.up_grade_content{
					margin-top: 1.93rem;
					@media(max-width: 768px){
						margin-top: 1rem;
					}
					@media(max-width: 375px){
						margin-top: 0.51rem;
					}
					.up_grade_line{
						width: 3.6rem;
						height: 0.08rem;
						background: linear-gradient(347deg, rgba(13, 17, 53, 0.06) 0%, #2344C2 100%);
						@media(max-width: 375px){
							width: 2.66rem;
						}
					}
					.up_grade_title{
						margin-top: 0.32rem;
						font-size: 0.6rem;
						color: #fff;
						line-height: 0.6rem;
						margin-bottom: 0;
						@media(max-width: 768px){
							font-size: 0.48rem;
						}
						@media(max-width: 375px){
							font-size: 0.44rem;
							margin-top: 0.21rem;
						}
					}
					.up_grade_description{
						color: #fff;
						font-size: 0.2rem;
						line-height: 0.32rem;
						margin-top: 0.32rem;
						margin-bottom: 4.43rem;
						@media(max-width: 768px){
							margin-top: 0.24rem;
							margin-bottom: 5.53rem;
						}
						@media(max-width: 375px){
							margin-top: 0.21rem;
							margin-bottom: 2.59rem;
						}
					}
				}
			}
			
		}
		.up_grade_guide_container{
			background: #0d0e2c;
			.up_grade_guide_content{
				max-width: 12rem;
				margin: 0 auto;
				@media(max-width: 1200px){
					margin: 0 0.4rem;
				}
				@media(max-width: 768px){
					margin: 0 0.2rem;
				}
				.up_grade_guider_line{
					width: 1rem;
					height: 0.08rem;
					background: rgba(46, 69, 211, 1);
				}
				.up_grade_guider_title{
					color: #Fff;
					font-size: 0.4rem;
					line-height: 0.4rem;
					margin-top: 0.36rem;
					@media(max-width: 375px){
						margin-top: 0.24rem;
					}
				}
				.up_grade_guide_list_wrap{
					display: flex;
					justify-content: flex-end;
					background: url("../assets/irishub1/up_grade_guide_bg.png") no-repeat left center;
					background-size:auto 100%;
					@media(max-width: 768px){
						justify-content: flex-start;
					}
					.up_grade_guide_list{
						margin-top: 1rem;
						margin-bottom: 0.88rem;
						max-width: 7rem;
						@media(max-width: 768px){
							margin-top: 0.61rem;
						}
						@media(max-width: 375px){
							margin-top: 0.25rem;
						}
						.up_grade_guide_item{
							display: flex;
							margin-top: 1rem;
							@media(max-width: 490px){
								flex-direction: column;
								margin-top: 0.48rem;
							}
							.iconfont{
								font-size: 1.2rem;
								color: #fff;
								@media(max-width: 768px){
									font-size: 0.9rem;
								}
							}
							.up_grade_guide_description_list{
								margin-left: 0.43rem;
								@media(max-width: 490px){
									margin-left: 0;
									margin-top: 0.24rem;
									
								}
								.up_grade_guide_description_item_title{
									font-size: 0.32rem;
									color: #fff;
									line-height: 0.45rem;
									font-weight: 600;
									@media(max-width: 375px){
										font-size: 0.28rem;
									}
								}
								.up_grade_guide_description_item_description{
									margin-top: 0.24rem;
									color: rgba(255,255,255,0.65);
									font-size: 0.16rem;
									line-height: 0.32rem;
									@media(max-width: 375px){
										margin-top: 0.2rem;
									}
								}
								.up_grade_guide_description_item_link{
									display: inline-block;
									margin-top: 0.24rem;
									font-size: 0.2rem;
									color: rgba(100, 141, 237, 1);
									font-weight: 600;
									line-height: 0.2rem;
									.iconfont{
										position: relative;
										left:0;
										top: 0.05rem;
										font-size: 0.3rem;
										color: rgba(100, 141, 237, 1);
										@media(max-width: 375px){
											font-size: 0.2rem;
											top: 0.02rem;
										}
									}
									@media(max-width: 375px){
										margin-top: 0.2rem;
										font-size: 0.16rem;
									}
								}
								.up_grade_guide_description_item_cli_link{
									display: inline-block;
									margin-top: 0.24rem;
									font-size: 0.2rem;
									line-height: 0.2rem;
									font-weight: 600;
									color: rgba(100, 141, 237, 1);
									@media(max-width: 375px){
										font-size: 0.16rem;
									}
									.iconfont{
										position: relative;
										left:0;
										top: 0.05rem;
										font-size: 0.3rem;
										color: rgba(100, 141, 237, 1);
										@media(max-width: 375px){
											font-size: 0.2rem;
											top: 0.02rem;
										}
									}
								}
								.up_grade_guide_description_item_cli_description{
									margin-top: 0.12rem;
									font-size: 0.14rem;
									color: rgba(255, 255, 255, 0.45);
									line-height: 0.21rem;
									&:before{
										content: '*';
										color: rgba(100, 141, 237, 1);
									}
								}
							}
						}
						.up_grade_guide_item:first-child{
							margin-top: 0;
						}
					}
				}
			}
		}
		.join_testnet_container{
			
			.join_testnet_content{
				max-width: 12rem;
				margin: 0 auto;
				@media(max-width: 1200px){
					margin: 0 0.4rem;
				}
				@media(max-width: 768px){
					margin: 0 0.2rem;
				}
				.join_testnet_line{
					width: 1rem;
					height: 0.08rem;
					background: rgba(46, 69, 211, 1);
				}
				.join_testnet_title{
					font-size: 0.4rem;
					line-height: 0.4rem;
					font-weight: 600;
					color: #fff;
					margin-top: 0.36rem;
				}
				.join_testnet_id{
					margin-top: 0.36rem;
					color: #fff;
					font-size: 0.14rem;
				}
				.join_testnet_section{
					margin-top: 0.36rem;
					color: rgba(255, 255, 255, 0.65);
					font-size: 0.16rem;
					line-height: 0.32rem;
				}
				.join_testnet_description{
					font-size: 0.16rem;
					line-height: 0.32rem;
					color: rgba(255, 255, 255, 0.65);
				}
				.join_testnet_link{
					margin-top: 0.2rem;
					font-size: 0.2rem;
					line-height: 0.2rem;
					color: rgba(100, 141, 237, 1);
					display: inline-block;
					@media(max-width: 375px){
						font-size: 0.16rem;
					}
					.iconfont{
						font-size: 0.3rem;
						position: relative;
						left: 0;
						top: 0.05rem;
					}
				}
				.rpc_node_content{
					max-width: 10.4rem;
					margin-top: 0.36rem;
					box-sizing: border-box;
					padding: 0.36rem  0.48rem;
					background: rgba(22, 24, 57, 1);
					@media(max-width: 375px){
						padding: 0.24rem;
					}
					.rpc_node_title{
						color: rgba(255, 255, 255, 0.86);
						font-size: 0.2rem;
						line-height: 0.2rem;
					}
					.rpc_ip_content{
						display: inline-block;
						margin-top: 0.25rem;
						font-size: 0.32rem;
						color: rgba(100, 141, 237, 1);
						line-height: 0.36rem;
						@media(max-width: 375px){
							font-size: 0.24rem;
						}
					}
				}
				.rest_node_content{
					max-width: 10.4rem;
					margin-top: 0.24rem;
					box-sizing: border-box;
					padding: 0.36rem  0.48rem;
					background: rgba(22, 24, 57, 1);
					margin-bottom: 1.6rem;
					@media(max-width: 768px){
						margin-bottom: 1.2rem;
					}
					@media(max-width: 375px){
						padding: 0.24rem;
						margin-bottom: 0.8rem;
					}
					.rest_node_title{
						color: rgba(255, 255, 255, 0.86);
						font-size: 0.2rem;
						line-height: 0.2rem;
					}
					.rest_node_content_link{
						display: inline-block;
						margin-top: 0.25rem;
						font-size: 0.32rem;
						color: rgba(100, 141, 237, 1);
						line-height: 0.36rem;
						@media(max-width: 375px){
							font-size: 0.24rem;
						}
					}
				}
			}
		}
	}

</style>
