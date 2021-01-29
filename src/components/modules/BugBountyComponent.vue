<template>
	<div>
		<div class="bug_bounty_container">
			<div class="bug_bounty_bg_content">
				<div class="bug_bounty_content_wrap">
					<div class="bug_bounty_title_content">
						<p class="bug_bounty_line"></p>
						<h3 class="bug_bounty_title">{{$store.state.messages.irishub.bugBounty.title}}</h3>
						<p class="bug_bounty_title"><span>{{$store.state.messages.irishub.bugBounty.subtitle}}</span> <span class="bug_bounty_title_tag">{{$store.state.messages.irishub.bugBounty.span}}</span></p>
						<a class="bug_bounty_btn" :href="$store.state.messages.irishub.bugBounty.lookDetailLink" target="_blank" rel="noreferrer noopener">{{$store.state.messages.irishub.bugBounty.lookDetail}}</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "BugBountyComponent"
	}
</script>

<style scoped lang="less">
	.bug_bounty_container{
		background-color: rgba(22,24,57,1);
		.bug_bounty_bg_content{
			max-width: 19.2rem;
			margin: 0 auto;
			background: url("../../assets/irishub1/irishub_bug_bounty.png") no-repeat center center;
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
						font-size: 0.2rem;
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
	@media (max-width: 1200px) {
		.bug_bounty_container{
			.bug_bounty_bg_content{
				box-sizing: border-box;
				padding-left: 0.4rem;
				padding-right: 0.4rem;
				background-position: 30% top;
			}
		}
	}
	@media (max-width: 950px) {
		.bug_bounty_container{
			.bug_bounty_bg_content{
				padding: 0;
				background: url("../../assets/irishub1/irishub_bug_bounty_mobile.png") no-repeat right bottom;
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
	@media (max-width: 768px) {
		.bug_bounty_container{
			.bug_bounty_bg_content{
				padding: 0;
				background: url("../../assets/irishub1/irishub_bug_bounty_mobile.png") no-repeat left bottom;
				background-size: 100% auto;
			}
		}
	}
	@media (max-width: 600px) {
		.bug_bounty_container{
			.bug_bounty_bg_content{
				padding: 0;
				background: url("../../assets/irishub1/irishub_bug_bounty_mobile.png") no-repeat left bottom;
				background-size: 100% auto;
				.bug_bounty_content_wrap{
					justify-content: flex-start;
					.bug_bounty_title_content{
						padding-top: 0.36rem;
						padding-bottom: 3rem;
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
	@media (max-width: 375px) {
		.bug_bounty_container{
			.bug_bounty_bg_content{
				padding: 0;
				background: url("../../assets/irishub1/irishub_bug_bounty_mobile.png") no-repeat left 3.4rem;
				background-size: 100% auto;
			}
		}
	}
</style>
