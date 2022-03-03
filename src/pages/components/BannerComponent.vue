<template>
	<div class="home_banner_container">
		<div class="home_banner_bg_img_warp">
			<div class="home_banner_content">
				<div class="home_banner_right_content">
					<div class="home_banner_img_content">
						<img :src="$store.state.messages.threeBanner.imgSrc" alt="">
					</div>
					<div class="home_banner_description">{{$store.state.messages.threeBanner.description}}</div>
					<a class="home_banner_button" :href="$store.state.messages.threeBanner.btnLink" target="_blank" rel="noreferrer noopener">{{$store.state.messages.threeBanner.btnLabel}}</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "BannerComponent"
}
</script>

<style scoped lang="less">
	.home_banner_container{
		width: 100%;
		background: url("../../assets/banner_other.png") no-repeat center;
		background-size: 100% 100%;
		.home_banner_bg_img_warp{
			background: url("../../assets/third_banner.png") no-repeat center;
			background-size: cover;
			margin: 0 auto;
			max-width: 19.2rem;
			width: 100%;
			height: 8rem;
			.home_banner_content{
				max-width: 12rem;
				margin: 0 auto;
				display: flex;
				justify-content: flex-end;
				.home_banner_right_content{
					width: 6.3rem;
					padding-top: 1.85rem;
					.home_banner_img_content{
						max-width: 6.3rem;
						height: 1.76rem;
						img{
							width: 100%;
						}
					}
					.home_banner_description{
						max-width: 6rem;
						color: #fff;
						font-size: 0.24rem;
						letter-spacing: 0.01rem;
						line-height: 0.4rem;
						box-sizing: border-box;
						padding-left: 0.27rem;
					}
					.home_banner_button{
						display: inline-block;
						margin-left: 0.27rem;
						margin-top: 0.24rem;
						width: 2rem;
						height: 0.56rem;
						background: #2E45D3;
						box-shadow: 0 0 0.2rem 0 rgba(1, 0, 36, 0.4);
						border-radius: 0.04rem;
						line-height: 0.56rem;
						font-size: 0.2rem;
						text-align: center;
						font-weight: 600;
						color: #fff;
					}
				}
			}
		}
	}
</style>