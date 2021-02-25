<template>
	<div class="core_feature_container">
		<div class="core_feature_wrap">
			<div class="core_feature_content">
				<navigation-line/>
				<div class="core_feature_title">{{$store.state.messages.home.core.title}}</div>
				<ul class="core_feature_list">
					<li class="core_feature_item"
					    v-for="(item,index) in $store.state.messages.home.core.list"
					    :key="index">
						<div class="core_feature_left_block"></div>
						<div class="core_feature_right_content">
							<h4 class="core_feature_right_content_title">{{item.title}}</h4>
							<p class="core_feature_right_text">{{item.content}}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import NavigationLine from "./NavigationLine";
	export default {
		name: "CoreFeaturesComponent",
		components: {NavigationLine}
	}
</script>

<style scoped lang="less">
	.core_feature_container{
		width: 100%;
		background: rgba(13, 14, 44, 1);
		.core_feature_wrap{
			max-width: 19.2rem;
			margin: 0 auto;
			background: url("../../assets/pages/core_left.png") no-repeat left -1rem bottom -1rem,url("../../assets/pages/core_right.png") no-repeat right -1rem  top -1.5rem;
			background-size: 7.43rem 7.43rem, 12.1rem 13.12rem;
			@media(max-width: 1600px){
				background: url("../../assets/pages/core_left.png") no-repeat left -1rem bottom -1rem,url("../../assets/pages/core_right.png") no-repeat right -1rem  top -1.5rem;
				background-size: 7.43rem 7.43rem, 11.5rem 12.8rem;
			}
			@media(max-width: 1400px){
				background:url("../../assets/pages/core_right.png") no-repeat right -1.5rem  top -1rem;
				background-size:10rem 11.6rem;
			}
			.core_feature_content{
				margin: 0 auto;
				max-width: 12rem;
				@media(max-width: 1200px){
					margin: 0 0.48rem;
				}
				@media(max-width: 596px){
					margin: 0 0.2rem;
				}
				.core_feature_title{
					padding-top: 0.36rem;
					font-size: 0.4rem;
					font-weight: normal;
					color: rgba(255,255,255,1);
					line-height: 0.4rem;
					@media(max-width: 596px){
						padding-top: 0.24rem;
					}
				}
				.core_feature_list{
					margin-top: 0.48rem;
					padding-bottom: 1.6rem;
					display: grid;
					grid-template-columns: 1fr;
					grid-template-rows: repeat(4,1fr);
					grid-row-gap: 0.4rem;
					@media(max-width: 1200px){
						padding-bottom: 1rem;
					}
					@media(max-width: 596px){
						margin-top: 0.24rem;
						padding-bottom: 0.72rem;
					}
					.core_feature_item{
						display: flex;
						.core_feature_left_block{
							width: 0.16rem;
							background: rgba(44, 41, 113, 1);
							@media(max-width: 1200px){
								width: 0.14rem;
							}
						}
						.core_feature_right_content{
							max-width: 7.36rem;
							flex: 1;
							background: linear-gradient(270deg, #1E225C 0%, #161839 100%);
							box-sizing: border-box;
							padding: 0.26rem 0.36rem;
							@media(max-width: 596px){
								padding: 0.24rem 0.16rem;
							}
							.core_feature_right_content_title{
								font-size: 0.32rem;
								line-height: 0.32rem;
								font-weight: normal;
								color: rgba(255,255,255,1);
								@media(max-width: 596px){
									font-size: 0.24rem;
								}
							}
							.core_feature_right_text{
								margin-top: 0.12rem;
								font-size: 0.2rem;
								color: rgba(255,255,255,0.65);
								line-height: 0.32rem;
								@media(max-width: 596px){
									font-size: 0.16rem;
									line-height: 0.32rem;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
