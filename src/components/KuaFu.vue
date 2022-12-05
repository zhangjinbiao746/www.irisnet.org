<template>
	<div class="irishub_update_container">
		<div class="irishub_header_content">
			<div class="irtshub_header_title_wrap">
				<div class="irishub_header_title_content">
					<div class="irishub_header_title">{{$store.state.messages.irishub.title}}</div>
					<div class="irishub_header_title">{{$store.state.messages.irishub.secondTitle}}</div>
<!--					<p class="irishub_sub_title" v-html="$store.state.messages.irishub.description"></p>-->
					<div class="proposal_btn_container">
						<a class="proposal_proposal_btn" href="https://irishub.iobscan.io/#/home" target="_blank" rel="noreferrer nonpener">
							{{$store.state.messages.irishub.btn.proposal}}
						</a>
						<a class="proposal_prepare_btn" href="https://www.rainbow.one/" target="_blank" rel="noreferrer nonpener">
							{{$store.state.messages.irishub.btn.prepare}}
						</a>
					</div>
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
                                <div class="iservice_icon">
                                    <img src="../assets/irishub1/interchain_account.png" alt="">
                                </div>
								<p class="new_function_section_label">{{$store.state.messages.irishub.iService.title}}</p>
								<p class="new_function_section">{{$store.state.messages.irishub.iService.description}}</p>
							</div>
						</div>
						<!-- <div class="new_function_left_img_content">
							<img src="" alt="">
						</div> -->
						<!-- <div class="new_function_right_content">
							<div class="new_function_section_content">
                                <div class="ibc_icon">
                                    <img src="../assets/irishub1/ibc_kuafu.png" alt="">
                                </div>
								<p class="new_function_section_label">{{$store.state.messages.irishub.ibc.title}}</p>
								<p class="new_function_section" v-html="$store.state.messages.irishub.ibc.description"></p>
								<span @click="toTestFunction()" style="cursor: pointer">{{$store.state.messages.irishub.ibc.test}}<i class="iconfont icon-qianwang"></i></span>
							</div>
						</div> -->
						<div class="new_function_right_img_content">
							<img src="../assets/irishub1/irishub_ibc.png" alt="">
						</div>
					
					</div>
				</div>
			</div>
			<!-- <div class="new_function_application_container">
				<div class="new_function_application_content"
				     v-for="(item, index) in $store.state.messages.irishub.applicationList"
				     :key="index">
                    <div class="application_icon">
                        <img :src="item.iconName" alt="">
                    </div>
					<p class="new_function_application_title">{{item.title}}</p>
					<p class="new_function_application_section" v-html="item.section "></p>
				</div>
			</div> -->
		</div>
<!--		<div class="proposal_container">
			<div class="proposal_content">
				<div class="proposal_title_content">
					<p class="proposal_link"></p>
					<h1 class="proposal_title">{{$store.state.messages.irishub.proposal.title}}</h1>
				</div>
				<div class="proposal_list">
					<div class="proposal_item" v-for="(item,index) in $store.state.messages.irishub.proposal.list">
						<p class="propsal_item_id">{{item.proposalId}}</p>
						<p class="propsal_item_title">{{item.title}}</p>
						<a class="proposal_item_btn"
						   :href="!!item.link ? item.link : 'javascript:void(0)'"
						   :target="!!item.link ? '_blank' :''"
						   rel="noreferrer noopener">{{item.btnLabel}}</a>
					</div>
				</div>
			</div>
		</div>-->
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
		<div class="community_resources_container">
			<div class="community_resources_wrap">
				<navigation-line/>
				<h2 class="community_resources_title">{{$store.state.messages.communityPage.resources.title}}</h2>
				<div class="community_resources_list_content">
					<div class="community_list_item_content" v-for="item in $store.state.messages.communityPage.resources.ResourceList">
						<div class="community_list_logo_content">
							<img :src="UrlSrc + item.img" alt="">
							<span class="logo_name">{{item.name}}</span>
						</div>
						<div class="community_resource_item_content">
							<div class="community_item_top_container" v-if="item.resourceList">
								<div class="community_item_top_content" v-for="value in item.resourceList">
									<a :href="value.href" :target="value.href === 'javascript:void(0);' ? '' : '_blank'"><span>{{value.itemName}}</span></a> <span class="os_content"><i class="iconfont" v-for="os in value.osList" :class="os"></i></span>
								</div>
							</div>
							<div class="community_item_bottom_content" :class="item.href !=='javascript:void(0);' ? 'hover_style' : ''"><a :href="item.href" :target="item.href === 'javascript:void(0);' ? '' : '_blank'">{{item.content}}</a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import '../assets/icon/iconfont.css'
	import BugBountyComponent from "./modules/BugBountyComponent";
	import {Message} from "element-ui"
	import NavigationLine from "../pages/components/NavigationLine";
	export default {
		name: "kuafu",
		components: {NavigationLine, BugBountyComponent},
		data(){
			return{
				isChinese:false,
				prepareLink: `/kuafu/testnet`
			}
		},
		methods:{
			showTooltip(){
				this.$Message.Message.closeAll()
				this.$Message.Message({
					message:this.$store.state.messages.irishub.btn.tooltip,
					duration: 3000,
					offset: 50
				})
			},
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
			if(this.$route.query && this.$route.query.lang && this.$route.query.lang === 'EN'){
				this.prepareLink = `/kuafu/testnet/?lang=EN`
			}else if(this.$route.query && this.$route.query.lang && this.$route.query.lang === 'CN'){
				this.prepareLink = `/kuafu/testnet/?lang=CN`
			}else {
				this.prepareLink = `/kuafu/testnet`
			}
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
                        font-family: ArialMT;
						font-size: 0.6rem;
						color: #fff;
					}
					.irishub_header_title:nth-of-type(2){
						margin-top: 0.48rem;
						font-size: 0.2rem;
						color: rgba(255,255,255,0.75);
						line-height: 0.36rem;
						font-weight: 400;
					}
					.irishub_sub_title{
						color: rgba(255,255,255,1);
						line-height: 0.36rem;
						font-size: 0.28rem;
						margin-top: 0.11rem;
						margin-bottom:0.61rem;
						box-sizing: border-box;
					}
					.proposal_btn_container{
						display: flex;
						margin-bottom: 2.56rem;
						margin-top: 0.8rem;
						@media(max-width: 880px){
							margin-bottom: 5.25rem;
							justify-content: center;
						}
						@media(max-width: 600px){
							margin-bottom: 4rem;
							flex-direction: column;
							justify-content: center;
							align-items: center;
						}
						@media(max-width: 440px){
							margin-bottom: 2.71rem;
						}
						.proposal_prepare_btn{
                            position: relative;
                            box-sizing: border-box;
							margin-left: 0.32rem;
							padding: 0.1rem 0.5rem;
                            width: 2.7rem;
                            height: 0.5rem;
                            display: flex;
                            justify-content: center;
                            align-items: center;
							color: rgba(255, 255, 255, 1);
                            font-family: ArialMT;
							font-size: 0.2rem;
							text-align: center;
							border-radius: 0.04rem;
                            background: linear-gradient(90deg, #7EA4FF, #A845E2, #6F21C1, #7EA4FF);
                            background-size: 400%;
                            z-index: 1;
                            &:hover {
                                animation: whitePaperAnimate 8s linear infinite;
                                box-shadow: 0px 0px 6px 3px #C965FF;
                                &::before {
                                    filter: blur(0.2rem);
                                    opacity: 1;
                                    animation: whitePaperAnimate 8s linear infinite;
                                }
                            }
                            &::before {
                                content: '';
                                position: absolute;
                                top: -0.01rem;
                                left: -0.01rem;
                                right: -0.01rem;
                                bottom: -0.01rem;
                                z-index: -1;
                                background: linear-gradient(90deg, #7EA4FF, #A845E2, #6F21C1, #7EA4FF);
                                background-size: 400%;
                                border-radius: 0.06rem;
                                opacity: 0;
                                transition: all 0.5s linear;
                            }
							@media(max-width: 768px){
								padding: 0.08rem 0.4rem;
								font-size: 0.18rem;
							}
							@media(max-width: 600px){
								flex: 1;
								margin-left: 0;
								margin-top: 0.2rem;
								width: 2rem;
							}
							@media(max-width: 375px){
								padding: 0.08rem 0.24rem;
							}
						}
						
						.proposal_proposal_btn{
                            position: relative;
                            box-sizing: border-box;
							padding: 0.1rem 0.5rem;
                            width: 2.7rem;
                            height: 0.5rem;
							border-radius: 0.04rem;
							color: rgba(255, 255, 255, 1);
                            font-family: ArialMT;
							font-size: 0.2rem;
							text-align: center;
							cursor: pointer;
                            transition: all .2s linear;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background: linear-gradient(90deg, #7EA4FF, #A845E2, #6F21C1, #7EA4FF);
                            background-size: 400%;
                            z-index: 1;
                            &:hover {
                                animation: whitePaperAnimate 8s linear infinite;
                                box-shadow: 0px 0px 6px 3px #C965FF;
                                &::before {
                                    filter: blur(0.2rem);
                                    opacity: 1;
                                    animation: whitePaperAnimate 8s linear infinite;
                                }
                            }
                            &::before {
                                content: '';
                                position: absolute;
                                top: -0.01rem;
                                left: -0.01rem;
                                right: -0.01rem;
                                bottom: -0.01rem;
                                z-index: -1;
                                background: linear-gradient(90deg, #7EA4FF, #A845E2, #6F21C1, #7EA4FF);
                                background-size: 400%;
                                border-radius: 0.06rem;
                                opacity: 0;
                                transition: all 0.5s linear;
                            }
							@media(max-width: 768px){
								padding: 0.08rem 0.4rem;
								font-size: 0.18rem;
							}
							@media(max-width: 600px){
								width: 2rem;
								flex: 1;
							}
							@media(max-width: 375px){
								padding: 0.08rem 0.24rem;
								
							}
						}
					}
				}
			}
		}
		.new_function_content{
			background-color: rgba(13,14,44,1);
			.bg_content{
				max-width: 19.2rem;
				margin: 0 auto;
				// background: url("../assets/irishub1/irishub_ibc.png") no-repeat right 1rem top 6.4rem,url("../assets/irishub1/interchainaccount.png") no-repeat 1rem 1.5rem;
				background: url("../assets/irishub1/interchainaccount.png") no-repeat 1rem 1.5rem;
				background-size: 7rem auto;
				@media(max-width: 1500px){
					background-size: 5rem auto;
				}
				.new_function_content_wrap{
					max-width: 12rem;
					margin: 0 auto;
					.new_function_header_content{
						.new_function_line{
							
							width: 1rem;
							height: 0.08rem;
							background: rgba(111, 33, 193, 1);
						}
						.new_function_title_content{
                            font-family: ArialMT;
							font-size: 0.4rem;
							color: #fff;
							font-weight: normal;
							margin-top: 0.36rem;
						}
						.new_function_sub_title_content{
                            font-family: ArialMT;
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
                                .iservice_icon {
                                    margin-top: 0.89rem;
                                    width: 0.8rem;
                                    height: 0.8rem;
                                    img {
                                        height: 100%;
                                    }
                                }
								
								.new_function_section_label{
                                    font-family: ArialMT;
									font-size: 0.32rem;
									margin-top: 0.24rem;
									line-height: 0.48rem;
								}
								.new_function_section{
									margin-top: 0.36rem;
                                    font-family: ArialMT;
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
                                display: flex;
                                flex-direction: column;
                                align-items: flex-end;
								max-width: 50%;
								margin-bottom: 1.48rem ;
								color: #fff;
								text-align: right;
                                .ibc_icon {
                                    margin-top: 0.89rem;
                                    width: 0.8rem;
                                    height: 0.8rem;
                                    img {
                                        height: 100%;
                                    }
                                }
								.new_function_section_label{
                                    font-family: ArialMT;
									font-size: 0.32rem;
									margin-top: 0.24rem;
								}
								.new_function_section{
									margin-top: 0.36rem;
                                    font-family: ArialMT;
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
										color: rgba(155, 100, 237, 1);
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
                    .application_icon {
                        width: 0.8rem;
                        height: 0.8rem;
                        img {
                            height: 100%;
                        }
                    }
					.new_function_application_title{
						margin-top: 0.24rem;
                        font-family: ArialMT;
						font-size: 0.32rem;
					}
					.new_function_application_section{
						margin-top: 0.36rem;
                        font-family: ArialMT;
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
		.proposal_container{
			background: rgba(13,14,44,1);
			.proposal_content{
				max-width: 12rem;
				margin: 0 auto;
				@media(max-width: 1200px){
					margin: 0 0.4rem;
				}
				@media(max-width: 768px){
					margin: 0 0.2rem;
				}
				.proposal_title_content{
					.proposal_link{
						width: 1rem;
						height: 0.08rem;
						background: rgba(111, 33, 193, 1);
					}
					.proposal_title{
						padding-top: 0.36rem;
						font-size: 0.4rem;
						font-weight: 600;
						line-height: 0.36rem;
						margin: 0;
						color: #fff;
						@media(max-width: 375px){
							font-size: 0.32rem;
						}
					}
				}
				.proposal_list{
					display: grid;
					grid-template-columns: 1fr 1fr;
					grid-column-gap: 0.4rem;
					margin-top: 0.4rem;
					padding-bottom: 1.17rem;
					@media(max-width: 1200px){
						grid-template-columns: 1fr;
						grid-row-gap: 0.4rem;
					}
					@media(max-width: 768px){
						padding-bottom: 0.6rem;
					}
					.proposal_item{
						box-sizing: border-box;
						padding: 0.56rem 0.48rem;
						background: url("../assets/irishub1/proposal_item_left.png") no-repeat center center;
						background-size: cover;
						border-radius: 0.04rem;
						@media(max-width: 768px){
							padding: 0.24rem;
						}
						.propsal_item_id{
							font-size: 0.2rem;
							color: rgba(255, 255, 255, 0.65);
							font-weight: 400;
							line-height: 0.2rem;
						}
						.propsal_item_title{
							margin-top: 0.16rem;
							color: #fff;
							font-size: 0.32rem;
							line-height: 0.32rem;
							font-weight: 600;
							@media(max-width: 768px){
								margin-top: 0.1rem;
								font-size: 0.24rem;
							}
						}
						.proposal_item_btn{
							margin-top: 0.48rem;
							display: inline-block;
							/*border: 0.01rem solid rgba(100, 141, 237, 1);*/
							color: rgba(100, 141, 237, 1);
							font-size: 0.2rem;
							line-height: 0.2rem;
							padding: 0.14rem 0.3rem 0.14rem 0;
							border-radius: 0.04rem;
							@media(max-width: 768px){
								margin-top: 0.2rem;
							}
						}
					}
					.proposal_item:last-child{
						background: url("../assets/irishub1/proposal_item_right.png") no-repeat center center;
						background-size: cover;
						/*.proposal_item_btn{
							color: rgba(255, 255, 255, 0.5);
						}*/
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
					background: rgba(111, 33, 193, 1);
				}
				.application_show_content_title{
                    font-family: ArialMT;
					font-size: 0.4rem;
					margin-top: 0.36rem;
					color: rgba(255,255,255,1);
					font-weight: normal;
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
								border-radius: 0.7rem;
								overflow: hidden;
							}
						}
						.application_list_item_title{
                            font-family: ArialMT;
							font-size: 0.32rem;
							font-weight: 600;
							line-height: 0.32rem;
							margin-top: 0.3rem;
							text-align: center;
						}
						.application_list_item_section{
							margin-top: 0.24rem;
							color: rgba(255,255,255,0.65);
                            font-family: ArialMT;
							font-size: 0.16rem;
							line-height: 0.32rem;
						}
					}
				}
			}
		}
		.community_resources_container{
			background: rgba(13, 14, 44, 1);
			@media(max-width: 1200px){
				padding: 0 0.4rem;
			}
			@media(max-width: 768px){
				padding: 0 0.2rem;
			}
			.community_resources_wrap{
				max-width: 12rem;
				width: 100%;
				margin: 0 auto;
				.community_resources_title{
                    font-family: ArialMT;
					font-size: 0.4rem;
                    font-weight: normal;
					color: rgba(255,255,255,1);
					line-height: 0.37rem;
					padding: 0.36rem 0 0.48rem 0;
                    @media(max-width: 768px) {
                        padding: 0.24rem 0 0.48rem 0;
                        font-size: 0.32rem;
                    }
				}
				.community_resources_list_content{
					display: flex;
					flex-direction: column;
					box-sizing: border-box;
					.community_list_item_content{
						display: flex;
						margin-bottom: 0.85rem;
                        &:nth-of-type(1) {
                            .community_resource_item_content {
                                .community_item_top_container {
                                    grid-template-columns: repeat(3, 1fr);
                                    @media(max-width: 880px) {
                                        grid-template-columns: repeat(2, 1fr);
                                    }
                                    @media(max-width: 620px) {
                                        grid-template-columns: repeat(1, 1fr);
                                    }
                                }
                            }
                        }
                        &:nth-of-type(5) {
                            .community_resource_item_content {
                                .community_item_top_container {
                                    display: flex;
                                    flex-wrap: wrap;
                                    @media(max-width: 440px) {
                                        flex-direction: column;
                                    }
                                    .community_item_top_content {
                                        margin-right: 0.8rem;
                                        @media(max-width: 840px) {
                                            margin-right: 0.48rem;
                                        }
                                        @media(max-width: 730px) {
                                            margin-right: 0.24rem;
                                        }
                                        @media(max-width: 640px) {
                                            margin-right: 0.6rem;
                                        }
                                    }
                                }
                            }
                        }
						@media(max-width: 1200px){
							flex-direction: column;
						}
						@media(max-width: 768px){
							margin-bottom: 0.36rem;
						}
						.community_list_logo_content{
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: center;
							min-width: 2.12rem;
							padding-right: 0.2rem;
							@media(max-width: 1200px){
								flex-direction: row;
								justify-content: flex-start;
							}
							img{
								width:1rem;
								height: 1rem;
								@media(max-width: 768px){
									width: 0.72rem;
									height: 0.72rem;
								}
							}
							.logo_name{
								margin-top: 0.28rem;
                                font-family: ArialMT;
								font-size: 0.24rem;
								color: rgba(255,255,255,1);
								line-height: 0.4rem;
								font-weight: bolder;
								@media(max-width: 1200px){
									margin-top: 0;
									margin-left: 0.16rem;
								}
							}
						}
						.community_resource_item_content{
							flex: 1;
							.community_item_top_container{
                                display: grid;
                                grid-template-columns: repeat(5, 1fr);
								width: 100%;
								border-bottom: 0.01rem solid rgba(255,255,255,0.29);
								@media(max-width: 1200px){
                                    margin-top: 0.36rem;
								}
                                @media(max-width: 930px) {
                                    grid-template-columns: repeat(3, 1fr);
                                }
                                @media(max-width: 630px) {
                                    grid-template-columns: repeat(2, 1fr);
                                }
                                @media(max-width: 375px) {
                                    grid-template-columns: repeat(1, 1fr);
                                }
								.community_item_top_content{
									padding-bottom: 0.28rem;
									display: flex;
									.content_title{
										font-size: 0.24rem;
										line-height: 0.32rem;
										color:rgba(255,255,255,1);
										font-weight: 600;
									}
									a{
										display: inline-block;
										font-size: 0.24rem;
										line-height: 0.32rem;
										color:rgba(255,255,255,1);
										font-weight: 600;
										:hover{
											color: rgba(155, 100, 237, 1);
										}
										span{
											display: inline-block;
											white-space: nowrap;
                                            font-family: ArialMT;
										}
									}
									.os_content{
										white-space: nowrap;
										display: inline-block;
										padding-left: 0.15rem;
										line-height: 0.32rem;
                                        .iconfont {
                                            margin-left: 0.12rem;
                                            font-family: ArialMT;
                                            font-size: 0.24rem;
                                            color: rgba(255,255,255,0.35);
                                            &:first-child {
                                                margin-left: 0;
                                            }
                                        }
									}
								}
							}
							.community_item_bottom_content{
								margin-top: 0.17rem;
								a{
									cursor: text;
                                    font-family: ArialMT;
									color: rgba(255,255,255,0.64);
									line-height: 0.21rem;
								}
							}
							.hover_style{
								a{
									cursor: pointer;
									color: #9BA5BE;
									&:hover{
										color: rgba(155, 100, 237, 1);
									}
								}
							}
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
					background: url("../assets/irishub1/irishub_ibc.png") no-repeat bottom left,url("../assets/irishub1/irishub_iservice.png") no-repeat top 2rem right 0;
					background-size: 5.5rem auto;
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
			
			.application_show_container{
				padding-left: 0.4rem;
				padding-right: 0.4rem;
			}
		}
	}
	@media (max-width: 1050px) {
		
		.irishub_update_container{
		
		}
	}
	@media (max-width: 950px) {
		.irishub_update_container{
		
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
							max-width: 4rem;
							margin-left: auto;
							margin-right: auto;
							text-align: center;
							margin-bottom: 0.36rem;
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
                                margin-top: 0.24rem;
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
                                    .iservice_icon {
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
                                    align-items: flex-start;
									max-width: 70%;
									margin-bottom: 0;
									text-align: left;
                                    .ibc_icon {
                                        margin-top: 0.32rem;
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
			
			.application_show_container{
				padding: 0 0.2rem;
				.application_show_content_wrap{
					padding-top: 0.36rem;
					.application_show_content_title{
						margin-top: 0.24rem;
                        font-size: 0.32rem;
					}
					.application_list_show_content{
						padding: 0.24rem 0;
						.application_list_item_content{
							padding: 0.24rem 0.16rem;
						}
					}
				}
			}
		}
	}
	@media (max-width: 600px) {
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
						}
					}
				}
			}
		}
	}
    @keyframes whitePaperAnimate {
        0% {
            background-position: 0%;
        }
        100% {
            background-position: 400%;
        }
    }
</style>
