<template>
	<div class="developers_container">
		<div class="developers_title_container">
			<div class="developers_title_wrap">
				<div class="developers_title_content">{{ $store.state.messages.developer.title }}</div>
			</div>
		
		</div>
		<div class="testnet_container">
			<NavigationLine/>
			<h3 class="testnet_title">{{ $store.state.messages.developer.testnet.title }}</h3>
			<div class="testnet_item_container">
				<h3 class="testnet_content_title">{{ $store.state.messages.developer.testnet.content.title }}</h3>
				<p class="testnet_content">{{ $store.state.messages.developer.testnet.content.content }}</p>
				<a class="testnet_content_btn" :href="$store.state.messages.developer.testnet.content.link" target="_blank"
				   rel="noopener noreferrer">{{ $store.state.messages.developer.testnet.content.btnLabel }}</a>
			</div>
		</div>
	</div>

</template>

<script>
import NavigationLine from "../../pages/components/NavigationLine";

export default {
	name: "Developers",
	methods: {
		jumpUrl() {
			this.$umeng.push('reservation', "click")
		},
	},
	components: {
		NavigationLine
	}
}
</script>

<style scoped lang="less">
.developers_container {
	.developers_title_container {
		width: 100%;
		padding-top: 0.6rem;
		
		.developers_title_wrap {
			margin: 0.7rem auto 0;
			max-width: 12rem;
			font-size: 0.52rem;
			display: flex;
			justify-content: flex-start;
			
			.developers_title_content {
				color: #fff;
				text-align: left;
			}
		}
	}
	
	.testnet_container {
		max-width: 12rem;
		margin: 0 auto;
		padding-top: 0.7rem;
		@media (max-width: 1200px) {
			margin: 0 0.4rem;
		}
		@media (max-width: 596px) {
			margin: 0 0.2rem;
		}
		
		.testnet_title {
			margin-top: 0.36rem;
			font-size: 0.4rem;
			font-weight: normal;
			color: #fff;
			line-height: 0.45rem;
			@media (max-width: 768px) {
				margin-top: 0.24rem;
				font-size: 0.32rem;
			}
		}
		
		.testnet_item_container {
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
				color: rgba(255, 255, 255, 0.65);
				line-height: 0.22rem;
			}
			
			.testnet_content_btn {
				position: relative;
				box-sizing: border-box;
				margin-top: 0.32rem;
				padding: 0.1rem 0.08rem;
				width: 2.2rem;
				font-size: 0.2rem;
				color: #fff;
				height: 0.5rem;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 0.04rem;
				background: linear-gradient(90deg, #7EA4FF, #A845E2, #6F21C1, #7EA4FF);
				background-size: 400%;
				z-index: 1;
				
				&:hover {
					animation: whitePaperAnimate 8s linear infinite;
					box-shadow: 0px 0px 6px 3px #C965FF;
					
					&::before {
						filter: blur(0.2rem);
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
			}
		}
	}
}

@media screen and (max-width: 1200px) {
	.developers_container {
		.developers_title_container {
			box-sizing: border-box;
			padding-left: 0.2rem;
			padding-right: 0.2rem;
		}
		
		.developers_content_wrap {
			box-sizing: border-box;
			padding-right: 0.2rem;
			padding-left: 0.2rem;
		}
	}
}

@media screen and (max-width: 768px) {
	.developers_container {
		.developers_title_container {
			padding-left: 0.3rem;
			padding-right: 0.3rem;
		}
		
		.developers_content_wrap {
			padding-right: 0.3rem;
			padding-left: 0.3rem;
			
			.developers_content {
				.developers_content_doc {
					flex-direction: column;
					align-items: center;
					margin-bottom: 0.6rem;
					
					.developers_img_content {
						margin-right: 0;
						max-width: 5.04rem;
					}
					
					.developers_right_content {
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
	.developers_container {
		.developers_title_container {
			padding-left: 0.2rem;
			padding-right: 0.2rem;
		}
		
		.developers_content_wrap {
			padding-right: 0.2rem;
			padding-left: 0.2rem;
			
		}
	}
}

@keyframes whitePaperAnimate {
	0% {
		background-position: 0%;
		opacity: 0;
	}
	100% {
		background-position: 400%;
		opacity: 1;
	}
}
</style>
