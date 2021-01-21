<template>
	<div class="irishub_update_container">
		<div class="irishub_header_content">
			<div class="irtshub_header_title_wrap">
				<div class="irishub_header_title_content">
					<div class="irishub_header_title">{{$store.state.messages.irishub.title}}</div>
					<div class="irishub_header_title">{{$store.state.messages.irishub.secondTitle}}</div>
					<p class="irishub_sub_title">{{$store.state.messages.irishub.description}}</p>
					<div class="irishub_img_content">
						<img src="../assets/irishub1/irishub_mobile_hot_bg.png" alt="">
					</div>
				</div>
			</div>
		</div>
		<div class="new_function_content">
			<div class="bg_content">
				<div class="new_function_content_wrap">
					<div class="new_function_header_content">
						<p class="new_function_line"></p>
						<h1 class="new_function_title_content">{{$store.state.messages.irishub.newFunction.title}}</h1>
						<p class="new_function_sub_title_content" v-html="$store.state.messages.irishub.newFunction.description"></p>
					</div>
					<div class="new_function_section_container">
						<div class="new_function_left_content">
							<div class="new_function_section_content">
								<span class="iconfont  icon-iservicekualianfuwu"></span>
								<p class="new_function_section_label">{{$store.state.messages.irishub.iService.title}}</p>
								<p class="new_function_section">{{$store.state.messages.irishub.iService.description}}</p>
							</div>
						</div>
						<div class="new_function_left_img_content">
							<img src="" alt="">
						</div>
						<div class="new_function_right_content">
							<div class="new_function_section_content">
								<span class="iconfont icon-IBCkualiantongxinxieyi"></span>
								<p class="new_function_section_label">{{$store.state.messages.irishub.ibc.title}}</p>
								<p class="new_function_section" v-html="$store.state.messages.irishub.ibc.description"></p>
								<span @click="toTestFunction()" style="cursor: pointer">{{$store.state.messages.irishub.ibc.test}}<i class="iconfont icon-qianwang"></i></span>
							</div>
						</div>
						<div class="new_function_right_img_content">
							<img src="../assets/irishub1/irishub_ibc.png" alt="">
						</div>
					
					</div>
				</div>
			</div>
			<div class="new_function_application_container">
				<div class="new_function_application_content"
				     v-for="(item, index) in $store.state.messages.irishub.applicationList"
				     :key="index">
					<span :class="`iconfont ${item.iconName}`"></span>
					<p class="new_function_application_title">{{item.title}}</p>
					<p class="new_function_application_section" v-html="item.section "></p>
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
		<div class="application_show_container">
			<div class="application_show_content_wrap">
				<p class="application_show_link"></p>
				<div class="application_show_content_title">{{$store.state.messages.irishub.applicationShowList.title}}</div>
				<div class="application_list_show_content">
					<div class="application_list_item_content"
					     v-for="(item,index) in $store.state.messages.irishub.applicationShowList.list"
					     :key="index">
						<a :href="item.link ? item.link : 'javascript:void(0)'" :target="item.link ? '_blank' : ''" rel="noreferrer noopener">
							<div class="application_list_item_img">
								<img :src="item.scr" alt="">
							</div>
							<h3 class="application_list_item_title">{{item.title}}</h3>
							<p class="application_list_item_section">{{item.section}}</p>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="bug_bounty_container">
			<div class="bug_bounty_bg_content">
				<div class="bug_bounty_content_wrap">
					<div class="bug_bounty_title_content">
						<p class="bug_bounty_line"></p>
						<h3 class="bug_bounty_title">{{$store.state.messages.irishub.bugBounty.title}}</h3>
						<p class="bug_bounty_title"><span>{{$store.state.messages.irishub.bugBounty.subtitle}}</span> <span class="bug_bounty_title_tag">{{$store.state.messages.irishub.bugBounty.span}}</span></p>
<!--						<a class="bug_bounty_btn" :href="$store.state.messages.irishub.bugBounty.lookDetailLink" target="_blank" rel="noreferrer noopener">{{$store.state.messages.irishub.bugBounty.lookDetail}}</a>-->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import '../assets/icon/iconfont.css'
	export default {
		name: "kuafu",
		data(){
			return{
				isChinese:false
			}
		},
		methods:{
			toTestFunction(){
				let ibcDom = document.getElementById('#ibc')
				console.log(ibcDom.offsetTop,"dom")
				$('html,body').animate({
						scrollTop: ibcDom.offsetTop - 60
					}, 500
				);
			}
		},
		mounted(){
			if(window.navigator.language === 'zh' || window.navigator.language === 'zh-CN'){
				this.isChinese = true
			}else {
				this.isChinese = false
			}
		}
	}
</script>

<style scoped lang="less">
	.irishub_update_container{
		padding-top: 0.6rem;
		.irishub_header_content{
			width: 100%;
			background: url("../assets/irishub1/irishub_hot_bg.png") no-repeat center center;
			background-size: auto 100%;
			background-color: rgba(13,14,44,1);
			.irtshub_header_title_wrap{
				max-width: 12rem;
				margin: 0 auto;
				display: flex;
				justify-content: flex-start;
				.irishub_header_title_content{
					.irishub_img_content{
						display: none;
						img{
							width: 100%;
							height: 100%;
						}
					}
					.irishub_header_title{
						margin-top: 1.85rem;
						font-size: 0.6rem;
						color: #fff;
					}
					.irishub_header_title:nth-of-type(2){
						margin-top: 0.24rem;
					}
					.irishub_sub_title{
						max-width: 5rem;
						color: #fff;
						line-height: 0.32rem;
						font-size: 0.2rem;
						margin-top: 0.57rem;
						margin-bottom: 2.74rem;
						box-sizing: border-box;
						padding: 0.11rem 0.2rem;
						background: linear-gradient(347deg, rgba(13, 17, 53, 0.06) 0%, #2344C2 100%);
					}
				}
			}
		}
		.new_function_content{
			background-color: rgba(13,14,44,1);
			.bg_content{
				max-width: 19.2rem;
				margin: 0 auto;
				background: url("../assets/irishub1/irishub_ibc.png") no-repeat right 1rem top 5.7rem,url("../assets/irishub1/irishub_iservice.png") no-repeat 1rem 1.8rem;
				background-size: 8rem auto;
				@media(max-width: 1500px){
					background-size: 6rem auto;
				}
				.new_function_content_wrap{
					max-width: 12rem;
					margin: 0 auto;
					.new_function_header_content{
						.new_function_line{
							
							width: 1rem;
							height: 0.08rem;
							background: rgba(46, 69, 211, 1);
						}
						.new_function_title_content{
							font-size: 0.4rem;
							color: #fff;
							font-weight: 600;
							margin-top: 0.36rem;
						}
						.new_function_sub_title_content{
							font-size: 0.16rem;
							line-height: 0.32rem;
							color: rgba(255,255,255,0.65);
							margin-top: 0.32rem;
						}
					}
					.new_function_section_container{
						display: flex;
						flex-direction: column;
						.new_function_left_content{
							display: flex;
							justify-content: flex-end;
							margin-bottom: 1.8rem;
							.new_function_left_img_content{
								display: none;
								max-width: 3.58rem;
								margin: 0.44rem auto 0.05rem auto;
								img{
									width: 100%;
								}
							}
							.new_function_section_content{
								max-width: 50%;
								color: #fff;
								.iconfont{
									display: inline-block;
									margin-top: 0.89rem;
									font-size: 0.8rem;
									color: #fff;
								}
								
								.new_function_section_label{
									font-size: 0.32rem;
									margin-top: 0.24rem;
								}
								.new_function_section{
									margin-top: 0.36rem;
									font-size: 0.16rem;
									line-height: 0.32rem;
									color: rgba(255,255,255,0.65);
								}
								
							}
						}
						.new_function_right_content{
							display: flex;
							flex-direction: row;
							.new_function_section_content{
								max-width: 50%;
								margin-bottom: 1.48rem ;
								color: #fff;
								text-align: right;
								.iconfont{
									display: inline-block;
									margin-top: 0.89rem;
									font-size: 0.8rem;
									color: #fff;
								}
								.new_function_section_label{
									font-size: 0.32rem;
									margin-top: 0.24rem;
								}
								.new_function_section{
									margin-top: 0.36rem;
									font-size: 0.16rem;
									line-height: 0.32rem;
									color: rgba(255,255,255,0.65);
								}
								span{
									display: inline-block;
									margin-top: 0.24rem;
									font-size: 0.2rem;
									color: rgba(100, 141, 237, 1);
									.iconfont{
										color: rgba(100, 141, 237, 1);
										margin-top: 0;
										font-size: 0.2rem;
									}
								}
							}
						}
						.new_function_right_img_content{
							display: none;
							
						}
					}
				}
			}
			.new_function_application_container{
				max-width: 12rem;
				margin: 0 auto;
				display: flex;
				color: #fff;
				padding-bottom: 1.2rem;
				.new_function_application_content{
					flex: 1;
					margin-right:0.44rem ;
					box-sizing: border-box;
					padding: 0.48rem;
					background: rgba(22, 24, 57, 1);
					.iconfont{
						font-size: 0.8rem;
					}
					.new_function_application_title{
						margin-top: 0.24rem;
						font-size: 0.32rem;
					}
					.new_function_application_section{
						margin-top: 0.36rem;
						font-size: 0.16rem;
						line-height: 0.32rem;
						color: rgba(255,255,255,0.65);
					}
				}
				.new_function_application_content:last-child{
					margin-right: 0;
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
							line-height: 0.32rem;
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
		.application_show_container{
			background-color: rgba(13,14,44,1);
			.application_show_content_wrap{
				max-width: 12rem;
				margin: 0 auto;
				padding-top: 1rem;
				.application_show_link{
					width: 1rem;
					height: 0.08rem;
					background: rgba(49, 65, 201, 1);
				}
				.application_show_content_title{
					font-size: 0.4rem;
					margin-top: 0.36rem;
					color: rgba(255,255,255,1);
					font-weight: 600;
				}
				.application_list_show_content{
					display: grid;
					grid-template-columns: 1fr 1fr;
					justify-items: center;
					padding: 0.36rem 0 1.2rem 0 ;
					.application_list_item_content{
						color: rgba(255,255,255,1);
						max-width: 3.76rem;
						box-sizing: border-box;
						padding: 0.36rem 0.48rem;
						background: transparent;
						cursor: pointer;
						a{
							color: #fff;
						}
						&:hover{
							background: rgba(22, 24, 57, 1);
						}
						.application_list_item_img{
							display: flex;
							align-items: center;
							justify-content: center;
							img{
								width: 1.4rem;
								height: 1.4rem;
							}
						}
						.application_list_item_title{
							font-size: 0.32rem;
							font-weight: 600;
							line-height: 0.32rem;
							margin-top: 0.3rem;
							text-align: center;
						}
						.application_list_item_section{
							margin-top: 0.24rem;
							color: rgba(255,255,255,0.65);
							font-size: 0.16rem;
							line-height: 0.32rem;
						}
					}
				}
			}
		}
		.bug_bounty_container{
			background-color: rgba(22,24,57,1);
			.bug_bounty_bg_content{
				max-width: 19.2rem;
				margin: 0 auto;
				background: url("../assets/irishub1/irishub_bug_bounty.png") no-repeat center center;
				background-size: auto 100%;
				.bug_bounty_content_wrap{
					max-width: 12rem;
					margin: 0 auto;
					display: flex;
					justify-content: flex-end;
					.bug_bounty_title_content{
						padding: 1.59rem 0 2.73rem 0;
						.bug_bounty_btn{
							margin-top: 0.48rem;
							display: inline-block;
							padding: 0.14rem 0.34rem;
							border: 0.01rem solid rgba(100, 141, 237, 1);
							background: rgba(13,14,44,1);
							border-radius: 0.04rem;
						}
						.bug_bounty_line{
							max-width: 3.6rem;
							height: 0.08rem;
							background: linear-gradient(347deg, rgba(13, 17, 53, 0.06) 0%, #2344C2 100%);
						}
						.bug_bounty_title{
							margin-top: 0.48rem;
							font-size: 0.4rem;
							font-weight: 600;
							line-height: 0.4rem;
							color: rgba(255,255,255,1);
							.bug_bounty_title_tag{
								position: relative;
								left: 0.1rem;
								top: 0.04rem;
								font-size: 0.6rem;
								line-height: 0.4rem;
							}
						}
						.bug_bounty_title:last-child{
							margin-top: 0.28rem;
						}
					}
				}
			}
		}
	}
	@media(max-width: 1200px){
		.irishub_update_container{
			.irishub_header_content{
				.irtshub_header_title_wrap{
					margin: 0 0.4rem;
				}
			}
			.new_function_content{
				padding-left: 0.4rem;
				padding-right: 0.4rem;
				.bg_content{
					background: url("../assets/irishub1/irishub_ibc.png") no-repeat bottom left,url("../assets/irishub1/irishub_iservice.png") no-repeat top 2rem right -1rem;
					background-size: 6rem auto;
					.new_function_content_wrap{
						.new_function_section_container{
							.new_function_left_content{
								justify-content: flex-start;
							}
							.new_function_left_img_content{
								display: block;
							}
							.new_function_right_content{
								justify-content: flex-end;
							}
						}
					}
				}
				.new_function_application_container{
					flex-direction: column;
					.new_function_application_content{
						margin-top: 0.36rem;
						margin-right: 0;
					}
					
				}
			}
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
			.application_show_container{
				padding-left: 0.4rem;
				padding-right: 0.4rem;
			}
			.bug_bounty_container{
				.bug_bounty_bg_content{
					box-sizing: border-box;
					padding-left: 0.4rem;
					padding-right: 0.4rem;
					background-position: 30% top;
				}
			}
		}
	}
	@media (max-width: 1050px) {
		
		.irishub_update_container{
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
	}
	@media (max-width: 950px) {
		.irishub_update_container{
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
			.bug_bounty_container{
				.bug_bounty_bg_content{
					padding: 0;
					background: url("../assets/irishub1/irishub_bug_bounty_mobile.png") no-repeat right bottom;
					background-size: cover;
					.bug_bounty_content_wrap{
						padding-right: 0.4rem;
						.bug_bounty_title_content{
							padding-top: 0.84rem;
							padding-bottom: 5rem;
							.bug_bounty_btn{
								margin-left: 0.2rem;
							}
							.bug_bounty_line{
								margin-left: 0.2rem;
							}
							.bug_bounty_title{
								margin-top: 0.24rem;
								margin-left: 0.2rem;
							}
							.bug_mobile_bounty_img{
								display: block;
								img{
									width: 100%;
									height: 100%;
								}
							}
						}
					}
				}
			}
		}
	}
	@media (max-width: 880px) {
		.irishub_update_container{
			.irishub_header_content{
				background: url("../assets/irishub1/irishub_mobile_hot_bg.png") no-repeat center bottom;
				background-size: 100%  auto;
				background-color: rgba(13,14,44,1);
				.irtshub_header_title_wrap{
					.irishub_header_title_content{
						margin: 0 auto;
						.irishub_header_title{
							margin-top: 1rem;
							text-align: center;
						}
						.irishub_sub_title{
							max-width: 3.6rem;
							margin-left: auto;
							margin-right: auto;
							margin-bottom: 5.53rem;
							text-align: center;
						}
					}
				}
			}
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
			.application_show_container{
				padding-left: 0.4rem;
				padding-right: 0.4rem;
				.application_show_content_wrap{
					.application_list_show_content{
						grid-template-columns: 100%;
						grid-row-gap: 0.16rem;
					}
				}
			}
		}
	}
	@media (max-width: 768px) {
		.irishub_update_container{
			.irishub_header_content{
				.irtshub_header_title_wrap{
					margin: 0 0.2rem;
					.irishub_header_title_content{
						.irishub_header_title{
							text-align: center;
							margin-top: 0.57rem;
							font-size: 0.4rem;
						}
						.irishub_sub_title{
							font-size: 0.18rem;
							margin-bottom: 5.6rem;
						}
					}
				}
			}
			.new_function_content{
				padding: 0 0.2rem;
				.bg_content{
					background-image: none;
					.new_function_content_wrap{
						.new_function_header_content{
							.new_function_title_content{
								font-size: 0.32rem;
							}
							.new_function_sub_title_content{
								margin-top: 0.2rem;
							}
						}
						.new_function_section_container{
							.new_function_left_content{
								margin-bottom: 0;
								.new_function_section_content{
									max-width: 70%;
									.iconfont{
										color: rgba(255,255,255,1);
										margin-top: 0.32rem;
									}
									.new_function_section_label{
										font-size: 0.24rem;
									}
									.new_function_section{
										margin-top: 0.24rem;
									}
								}
							}
							.new_function_right_content{
								justify-content: flex-start;
								.new_function_section_content{
									max-width: 70%;
									margin-bottom: 0;
									text-align: left;
									.iconfont{
										color: rgba(255,255,255,1);
										margin-top: 0.24rem;
									}
									.new_function_section_label{
										margin-top: 0.24rem;
										font-size: 0.24rem;
									}
									.new_function_section{
										margin-top: 0.24rem;
									}
								}
							}
						}
					}
				}
				.new_function_application_container{
					padding-bottom: 0.36rem;
					.new_function_application_content{
						padding: 0;
						background: transparent;
					}
				}
			}
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
			.application_show_container{
				padding: 0 0.2rem;
				.application_show_content_wrap{
					padding-top: 0.36rem;
					.application_show_content_title{
						margin-top: 0.24rem;
					}
					.application_list_show_content{
						padding: 0.24rem 0;
						.application_list_item_content{
							padding: 0.24rem 0.16rem;
						}
					}
				}
			}
			.bug_bounty_container{
				.bug_bounty_bg_content{
					padding: 0;
					background: url("../assets/irishub1/irishub_bug_bounty_mobile.png") no-repeat left bottom;
					background-size: 100% auto;
				}
			}
		}
	}
	@media (max-width: 600px) {
		.irishub_update_container{
			.bug_bounty_container{
				.bug_bounty_bg_content{
					padding: 0;
					background: url("../assets/irishub1/irishub_bug_bounty_mobile.png") no-repeat left bottom;
					background-size: 100% auto;
					.bug_bounty_content_wrap{
						justify-content: flex-start;
						.bug_bounty_title_content{
							padding-top: 0.36rem;
							.bug_bounty_line{
								margin-left: 0.2rem;
							}
							.bug_bounty_title{
								margin-top: 0.24rem;
								margin-left: 0.2rem;
							}
							.bug_mobile_bounty_img{
								display: block;
								img{
									width: 100%;
									height: 100%;
								}
							}
						}
					}
				}
			}
			.irishub_header_content{
				.irtshub_header_title_wrap{
					margin: 0 0.2rem;
					.irishub_header_title_content{
						.irishub_header_title{
							text-align: center;
							margin-top: 0.57rem;
							font-size: 0.4rem;
						}
						.irishub_sub_title{
							font-size: 0.18rem;
							margin-bottom: 3.6rem;
						}
					}
				}
			}
			.bug_bounty_container{
				.bug_bounty_bg_content{
					.bug_bounty_content_wrap{
						.bug_bounty_title_content{
							padding-bottom: 3rem;
							
						}
					}
				}
			}
		}
	}
	@media (max-width: 450px) {
		.irishub_update_container{
			.irishub_header_content{
				.irtshub_header_title_wrap{
					margin: 0 0.2rem;
					.irishub_header_title_content{
						.irishub_header_title{
							text-align: center;
							margin-top: 0.57rem;
							font-size: 0.4rem;
						}
						.irishub_sub_title{
							font-size: 0.18rem;
							margin-bottom: 2.91rem;
						}
					}
				}
			}
		}
	}
</style>
