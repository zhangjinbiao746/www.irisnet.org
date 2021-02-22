<template>
	<div class="prepare_container">
		<div class="up_grade_maneuver">
			<div class="up_grade_maneuver_wrap">
				<div class="up_grade_content">
					<p class="up_grade_line"></p>
					<h1 class="up_grade_title">{{$store.state.messages.irishub.prepare.maneuverTitle}}</h1>
					<p class="up_grade_description">{{$store.state.messages.irishub.prepare.maneuverDescription}}</p>
					<a class="link_content" target="_blank" rel="noreferrer noopener" :href="$store.state.messages.irishub.prepare.link">{{$store.state.messages.irishub.prepare.learnBifrost}} <i class="iconfont icon-qianwang"></i></a>
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
		<div class="test_net_content_container">
			<div class="test_net_content_wrap_content">
				<div class="test_net_content_title_content">
					<p class="test_net_link"></p>
					<h1 class="test_net_content_title">{{$store.state.messages.irishub.testnet.title}}</h1>
					<p class="test_net_content_subtitle" v-html="$store.state.messages.irishub.testnet.description"></p>
					<a :href="$store.state.messages.irishub.testnet.understandLink" class="read_more_content" target="_blank" rel="noreferrer noopener">{{$store.state.messages.irishub.testnet.understand}} <i class="iconfont icon-qianwang"></i></a>
				</div>
				<div class="test_net_time_line_content_container">
					<div class="test_net_time_left_content">
						<div class="test_net_time_content_item">
							<div class="test_net_item_content_item_top">
								<div class="test_net_item_block_img_content">
									<div class="test_net_item_block_content">
										<span>{{$store.state.messages.irishub.setpList.phase}}</span>
										<span>0</span>
									</div>
								</div>
								<div class="test_net_item_content_line">
									<div class="test_net_item_dot"></div>
									<div class="test_net_connecting_link"></div>
									<div class="test_net_item_dot"></div>
								</div>
							</div>
							<div class="test_net_item_content_item_bottom">
								<div class="test_net_item_step_content">
									<p>{{$store.state.messages.irishub.setpList.phase}} 0</p>
									<a :href="$store.state.messages.irishub.setpList.link0" class="test_net_time_link" target="_blank" rel="noreferrer noopener">
										{{$store.state.messages.irishub.setpList.end}}
									</a>
								</div>
							</div>
						</div>
						<div class="test_net_time_content_item">
							<div class="test_net_item_content_item_top">
								<div class="test_net_item_block_img_content">
									<div class="test_net_item_block_content">
										<span>{{$store.state.messages.irishub.setpList.phase}}</span>
										<span>1</span>
									</div>
								</div>
								<div class="test_net_item_content_line">
									<div class="test_net_item_dot"></div>
									<div class="test_net_connecting_link"></div>
									<div class="test_net_item_dot"></div>
								</div>
							</div>
							<div class="test_net_item_content_item_bottom">
								<div class="test_net_item_step_content">
									<p>{{$store.state.messages.irishub.setpList.phase}} 1</p>
									<a :href= "$store.state.messages.irishub.setpList.link1" class="test_net_time_link" target="_blank" rel="noreferrer noopener">
										{{$store.state.messages.irishub.setpList.end}}
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class="test_net_time_right_content">
						<div class="test_net_time_content_item">
							<div class="test_net_item_content_item_top">
								<div class="test_net_item_block_big_img_content">
									<div class="test_net_item_block_content">
										<span>{{$store.state.messages.irishub.setpList.phase}}</span>
										<span>2</span>
									</div>
								</div>
								<div class="test_net_item_content_line">
									<div class="test_net_item_dot"></div>
									<div class="test_net_connecting_link"></div>
									<div class="test_net_item_dot"></div>
								</div>
							</div>
							<div class="test_net_item_content_item_bottom">
								<div class="test_net_item_step_big_content">
									<p>{{$store.state.messages.irishub.setpList.phase}} 2</p>
									<a :href="$store.state.messages.irishub.setpList.link2" class="test_net_time_link" target="_blank" rel="noreferrer noopener">
										{{$store.state.messages.irishub.setpList.ing}}
									</a>
								</div>
							</div>
						</div>
						<div class="test_net_time_last_content_item">
							<div class="test_net_item_content_item_top">
								<div class="test_net_item_block_img_content">
									<div class="test_net_item_block_content">
										<span>{{$store.state.messages.irishub.setpList.irishub}}</span>
										<span>{{$store.state.messages.irishub.setpList.hub1}}</span>
									</div>
								</div>
							</div>
							<div class="test_net_item_content_item_bottom">
								<div class="test_net_item_step_content">
									<p>{{$store.state.messages.irishub.setpList.irishub}} {{$store.state.messages.irishub.setpList.hub1}}</p>
									<a class="test_net_time_link" :href= "$store.state.messages.irishub.setpList.link3"  target="_blank" rel="noreferrer noopener">
										{{$store.state.messages.irishub.setpList.comeSoon}}
									</a>
									<!--									<span class="test_net_time_link">{{$store.state.messages.irishub.setpList.comeSoon}}</span>-->
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="test_net_application_content">
					<div class="test_net_application"
					     v-for="(item,index) in $store.state.messages.irishub.functionList"
					     :key="index" :id="index === 2 ? '#ibc' : ''">
						<span :class="`iconfont ${item.iconName}`"></span>
						<h2 class="test_net_application_title">{{item.title}}</h2>
						<p class="test_net_application_subtitle" v-html="item.subTitle"></p>
						<ul class="test_net_application_section_list" v-if="item.list.length > 0">
							<li class="test_net_application_section_item" v-for="(value,index) in item.list" v-html="value.content"></li>
						</ul>
						<p class="test_net_application_section" v-if="item.description" v-html="item.description"></p>
					</div>
				</div>
			</div>
		</div>
<!--		<BugBountyComponent></BugBountyComponent>-->
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
				background-image: url("../assets/irishub1/prepare_header_ipad_bg.png");
				background-position: center 70%;
				background-size: 100% auto;
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
					.link_content{
						display: inline-block;
						margin-bottom: 2.83rem;
						color: rgba(100, 141, 237, 1);
						font-size: 0.2rem;
						@media(max-width: 768px){
							margin-top: 0.24rem;
							margin-bottom: 4.36rem;
						}
					}
					.up_grade_description{
						color: #fff;
						font-size: 0.2rem;
						line-height: 0.32rem;
						margin-top: 0.32rem;
						margin-bottom: 0.36rem;
						@media(max-width: 768px){
							margin-top: 0.24rem;
							margin-bottom: 0.36rem;
						}
						@media(max-width: 375px){
							margin-top: 0.21rem;
							margin-bottom: 0.36rem;
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
		.test_net_content_container{
			background: rgba(22,24,56,1);
			.test_net_content_wrap_content{
				max-width: 12rem;
				margin: 0 auto;
				padding-top: 1rem;
				padding-bottom: 1.2rem;
				.test_net_content_title_content{
					.test_net_link{
						width: 1rem;
						height: 0.08rem;
						background: rgba(46, 69, 211, 1);
					}
					.test_net_content_title{
						font-size: 0.4rem;
						font-weight: 600;
						margin-top: 0.36rem;
						color: #fff;
					}
					.test_net_content_subtitle{
						margin-top: 0.32rem;
						font-size: 0.16rem;
						color: rgba(255,255,255,0.65);
						line-height: 0.32rem;
					}
					.read_more_content{
						display: inline-block;
						margin-top: 0.2rem;
						font-size: 0.2rem;
						color: rgba(100, 141, 237, 1);
						.iconfont{
							font-size: 0.2rem;
						}
					}
				}
				.test_net_time_line_content_container{
					margin-top: 0.36rem;
					display: flex;
					.test_net_time_left_content{
						display: flex;
						flex: 7;
						.test_net_time_content_item:last-child{
							.test_net_item_content_item_top{
								.test_net_item_content_line:last-child{
									.test_net_item_dot:last-child{
										background: url("../assets/irishub1/irishub_time_link_white_dot.png") no-repeat center center;
										background-size: 100% auto;
										width: 0.16rem;
										height: 0.16rem
									};
								}
							}
						}
						.test_net_time_content_item{
							flex: 1;
							.test_net_item_content_item_top{
								display: flex;
								align-items: center;
								height: 2.02rem;
								.test_net_item_block_img_content{
									display: flex;
									justify-content: center;
									align-items: center;
									background: url("../assets/irishub1/irishub_time_block.png") no-repeat center center;
									background-size: auto 100%;
									width: 1.23rem;
									min-width: 1.23rem;
									height: 1.23rem;
									color: #fff;
									.test_net_item_block_content{
										display: flex;
										flex-direction: column;
										justify-content: center;
										span{
											font-size: 0.2rem;
											text-align: center;
										}
										span:last-child{
											margin-top: 0.08rem;
										}
									}
								}
								
								.test_net_item_content_line{
									flex: 1;
									display: flex;
									align-items: center;
									justify-content: center;
									.test_net_item_dot{
										background: url("../assets/irishub1/irishub_time_link_dot.png") no-repeat center center;
										background-size: 100% auto;
										width: 0.16rem;
										height: 0.16rem
									}
									.test_net_connecting_link{
										background: url("../assets/irishub1/iriahub_time_connecting_link.png") no-repeat center center;
										background-size: cover;
										width: 100%;
										height: 0.02rem;
										max-width: 1.2rem;
										margin: 0 0.14rem;
									}
								}
							}
							.test_net_item_content_item_bottom{
								color: rgba(255,255,255,0.65);
								.test_net_item_step_content{
									max-width: 1.23rem;
									margin-top: 0.83rem;
									text-align: center;
									padding-top: 0.19rem;
									.test_net_time_link{
										display: inline-block;
										margin-top: 0.12rem;
										padding: 0.15rem 0.3rem;
										border: 0.01rem solid rgba(100, 141, 237, 1);
										line-height: 1;
										border-radius: 0.04rem;
										color: rgba(100, 141, 237, 1);
									}
								}
								
							}
						}
					}
					.test_net_time_right_content{
						flex: 6;
						max-width: 5.34rem;
						display: flex;
						.test_net_time_content_item{
							flex: 1;
							.test_net_item_content_item_top{
								display: flex;
								align-items: center;
								height: 2.02rem;
								.test_net_item_block_big_img_content{
									display: flex;
									justify-content: center;
									align-items: center;
									background: url("../assets/irishub1/irishub_time_block_big.png") no-repeat center center;
									background-size: cover;
									width: 2.07rem;
									min-width: 2.07rem;
									height: 2.02rem;
									color: #fff;
									.test_net_item_block_content{
										display: flex;
										flex-direction: column;
										justify-content: center;
										span{
											font-size: 0.28rem;
											text-align: center;
										}
										span:last-child{
											margin-top: 0.08rem;
										}
									}
								}
								.test_net_item_block_img_content{
									display: flex;
									justify-content: center;
									align-items: center;
									background: url("../assets/irishub1/irishub_time_block.png") no-repeat center center;
									background-size: auto 100%;
									width: 1.23rem;
									min-width: 1.23rem;
									height: 1.23rem;
									color: #fff;
									.test_net_item_block_content{
										display: flex;
										flex-direction: column;
										justify-content: center;
										span{
											font-size: 0.2rem;
											text-align: center;
										}
										span:last-child{
											margin-top: 0.08rem;
										}
									}
								}
								.test_net_item_content_line{
									flex: 1;
									display: flex;
									align-items: center;
									justify-content: center;
									.test_net_item_dot:first-child{
										background: url("../assets/irishub1/irishub_time_link_white_dot.png") no-repeat center center;
										background-size: 100% auto;
										width: 0.16rem;
										height: 0.16rem
									}
									.test_net_item_dot{
										background: url("../assets/irishub1/irishub_time_link_dot.png") no-repeat center center;
										background-size: 100% auto;
										width: 0.16rem;
										height: 0.16rem
									}
									
									.test_net_connecting_link{
										background: url("../assets/irishub1/iriahub_time_connecting_link.png") no-repeat center center;
										background-size: cover;
										width: 100%;
										height: 0.02rem;
										max-width: 1.2rem;
										margin: 0 0.14rem;
									}
								}
							}
							.test_net_item_content_item_bottom{
								color: rgba(255,255,255,0.65);
								.test_net_item_step_content{
									max-width: 1.23rem;
									margin-top: 0.83rem;
									text-align: center;
								}
								.test_net_item_step_big_content{
									max-width: 2.07rem;
									margin-top: 0.83rem;
									text-align: center;
									background: rgba(32, 34, 65, 1);
									padding: 0.19rem 0 0.35rem 0;
									.test_net_time_link{
										display: inline-block;
										margin-top: 0.12rem;
										padding: 0.15rem 0.3rem;
										border: 0.01rem solid rgba(100, 141, 237, 1);
										line-height: 1;
										border-radius: 0.04rem;
										color: rgba(100, 141, 237, 1);
									}
								}
							}
						}
						.test_net_time_last_content_item{
							width: 1.24rem;
							.test_net_item_content_item_top{
								display: flex;
								align-items: center;
								height: 2.02rem;
								.test_net_item_block_img_content{
									display: flex;
									justify-content: center;
									align-items: center;
									background: url("../assets/irishub1/irishub_time_block.png") no-repeat center center;
									background-size: auto 100%;
									width: 1.23rem;
									min-width: 1.23rem;
									height: 1.23rem;
									color: #fff;
									.test_net_item_block_content{
										display: flex;
										flex-direction: column;
										justify-content: center;
										span{
											font-size: 0.2rem;
											text-align: center;
										}
										span:last-child{
											margin-top: 0.08rem;
										}
									}
								}
								.test_net_item_content_line{
									flex: 1;
									display: flex;
									align-items: center;
									justify-content: center;
									.test_net_item_dot{
										background: url("../assets/irishub1/irishub_time_link_dot.png") no-repeat center center;
										background-size: 100% auto;
										width: 0.16rem;
										height: 0.16rem
									}
									.test_net_connecting_link{
										background: url("../assets/irishub1/iriahub_time_connecting_link.png") no-repeat center center;
										background-size: cover;
										width: 100%;
										height: 0.02rem;
										max-width: 1.2rem;
										margin: 0 0.14rem;
									}
								}
							}
							.test_net_item_content_item_bottom{
								color: rgba(255,255,255,0.65);
								.test_net_item_step_content{
									max-width: 1.23rem;
									margin-top: 0.83rem;
									text-align: center;
									padding-top: 0.19rem;
									.test_net_time_link{
										display: inline-block;
										margin-top: 0.12rem;
										padding: 0.15rem 0.1rem;
										border: 0.01rem solid rgba(100, 141, 237, 1);
										line-height: 1;
										border-radius: 0.04rem;
										color: rgba(100, 141, 237, 1);
									}
								}
								.test_net_item_step_big_content{
									max-width: 2.07rem;
									margin-top: 0.83rem;
									text-align: center;
								}
							}
						}
					}
					
				}
				.test_net_application_content{
					display: grid;
					grid-template-columns: 1fr 1fr;
					grid-column-gap: 0.44rem;
					grid-row-gap: 0.4rem;
					box-sizing: border-box;
					padding: 0.4rem 0.44rem;
					background: rgba(32, 34, 65, 1);
					.test_net_application{
						box-sizing: border-box;
						padding: 0.36rem 0.48rem;
						color: #fff;
						background: rgba(21, 23, 55, 1);
						.iconfont{
							font-size: 0.84rem;
						}
						.test_net_application_title{
							margin-top: 0.24rem;
							font-size: 0.32rem;
							font-weight: 600;
							line-height: 0.48rem;
						}
						.test_net_application_subtitle{
							margin-top: 0.36rem;
							font-size: 0.16rem;
							line-height: 0.32rem;
						}
						.test_net_application_section_list{
							margin-top: 0.16rem;
							list-style: initial;
							.test_net_application_section_item{
								font-size: 0.16rem;
								color: rgba(255, 255, 255, 0.65);
								line-height: 0.32rem;
								position: relative;
								left: 0.2rem;
								&:before{
									position: absolute;
									top: 0.12rem;
									left: -0.2rem;
									margin-right: 0.1rem;
									display: inline-block;
									content: ' ';
									width: 8px;
									height: 8px;
									border-radius: 0.04rem;
									background: rgba(255,255,255,1);
								}
							}
						}
						.test_net_application_section{
							margin-top: 0.16rem;
							line-height: 0.32rem;
							color: rgba(255,255,255,0.65);
						}
					}
				}
			}
		}
		@media(max-width: 1200px){
			.test_net_content_container{
				padding-left: 0.4rem;
				padding-right: 0.4rem;
				.test_net_content_wrap_content{
					.test_net_time_line_content_container{
						.test_net_time_left_content{
							flex: 7.5;
							.test_net_time_content_item{
								.test_net_item_content_item_top{
									.test_net_item_block_img_content{
										width:0.74rem;
										min-width: 0.74rem;
										height: 0.74rem;
										.test_net_item_block_content{
											span{
												font-size: 0.16rem;
											}
										}
									}
								}
								.test_net_item_content_item_bottom{
									.test_net_item_step_content{
										max-width: 1.2rem;
										text-align: left;
										p{
											max-width: 0.74rem;
											text-align: center;
										}
										.test_net_time_link{
											color: rgba(100, 141, 237, 1);
											padding: 0.08rem 0.13rem;
										}
									}
								}
							}
						}
						.test_net_time_right_content{
							.test_net_time_content_item{
								.test_net_item_content_item_top{
									.test_net_item_block_big_img_content{
										width: 1.23rem;
										min-width: 1.23rem;
										height: 1.2rem;
										background-size: auto 100%;
									}
								}
								.test_net_item_content_item_bottom{
									.test_net_item_step_big_content{
										max-width: 1.2rem;
										text-align: center;
										p{
											text-align: center;
										}
										.test_net_time_link{
											color: rgba(100, 141, 237, 1);
											padding: 0.08rem 0.13rem;
										}
									}
								}
							}
							.test_net_time_last_content_item{
								.test_net_item_content_item_top{
									.test_net_item_block_img_content{
										width: 0.74rem;
										min-width: 0.74rem;
										height: 0.74rem;
										.test_net_item_block_content{
											span{
												font-size: 0.16rem;
											}
										}
									}
								}
								.test_net_item_content_item_bottom{
									.test_net_item_step_content{
										max-width: 1.2rem;
										text-align: left;
										p{
											max-width: 0.94rem;
											text-align: center;
										}
										.test_net_time_link{
											color: rgba(100, 141, 237, 1);
											padding: 0.08rem 0.1rem;
										}
									}
								}
							}
						}
					}
					.test_net_application_content{
						grid-template-columns: 100%;
					}
				}
			}
		}
		@media (max-width: 1050px) {
			.test_net_content_container{
				.test_net_content_wrap_content{
					.test_net_time_line_content_container{
						.test_net_time_left_content{
							flex: 7;
						}
						.test_net_time_right_content{
							flex: 6.5;
						}
					}
				}
			}
		}
		@media (max-width: 950px) {
			.test_net_content_container{
				.test_net_content_wrap_content{
					.test_net_time_line_content_container{
						.test_net_time_left_content{
							flex: 7;
						}
						.test_net_time_right_content{
							flex: 7;
						}
					}
				}
			}
		}
		@media (max-width: 880px) {
			.test_net_content_container{
				.test_net_content_wrap_content{
					.test_net_time_line_content_container{
						.test_net_time_left_content{
							flex: 7;
						}
						.test_net_time_right_content{
							flex: 7;
						}
					}
				}
			}
		}
		@media (max-width: 768px) {
			.test_net_content_container{
				padding-left: 0.2rem;
				padding-right: 0.2rem;
				.test_net_content_wrap_content{
					padding-top: 0.24rem;
					padding-bottom: 0.24rem;
					.test_net_content_title_content{
						.test_net_content_title{
							margin-top: 0.24rem;
							margin-bottom: 0.2rem;
							font-size: 0.32rem;
						}
					}
					.test_net_time_line_content_container{
						margin-top: 0.2rem;
						flex-direction: column;
						.test_net_time_left_content{
							.test_net_time_content_item{
								.test_net_item_content_item_top{
									height: 1.2rem;
								}
								.test_net_item_content_item_bottom{
									.test_net_item_step_content{
										margin-top: 0;
									}
								}
							}
						}
						.test_net_time_right_content{
							margin-top: 0.2rem;
							.test_net_time_content_item{
								.test_net_item_content_item_top{
									height: 1.2rem;
								}
								.test_net_item_content_item_bottom{
									.test_net_item_step_big_content{
										margin-top: 0.09rem;
										max-width: 0.86rem;
										padding: 0.04rem 0.12rem 0.16rem 0.12rem;
									}
								}
							}
							.test_net_time_last_content_item{
								.test_net_item_content_item_top{
									height: 1.2rem;
								}
								.test_net_item_content_item_bottom{
									.test_net_item_step_content{
										margin-top: 0;
										padding-top: 0.1rem;
									}
								}
							}
						}
					}
					.test_net_application_content{
						padding: 0.16rem 0.12rem;
						.test_net_application{
							padding: 0.16rem 0.14rem;
							.test_net_application_subtitle{
								margin-top: 0.24rem;
							}
						}
					}
				}
			}
		}
	}

</style>
