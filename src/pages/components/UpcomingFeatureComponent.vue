<template>
	<div class="upcoming_container">
		<div class="upcoming_wrap">
			<navigation-line/>
			<h4 class="upcoming_title">{{$store.state.messages.home.upcoming.title}}</h4>
			<ul class="upcoming_list_content">
				<li class="upcoming_item" v-for="(item,index) in $store.state.messages.home.upcoming.list" :key="index">
					<div class="upcoming_logo">
						<img :src=item.image alt="">
					</div>
					<h5 class="upcoming_item_title">{{item.title}}</h5>
					<p class="upcoming_item_content">{{item.content}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import NavigationLine from "./NavigationLine";
	export default {
		name: "UpcomingFeatureComponent",
		components: {NavigationLine}
	}
</script>

<style scoped lang="less">
	.upcoming_container{
		background: rgba(21, 12, 54, 1);
		.upcoming_wrap{
			max-width: 12rem;
			margin: 0 auto;
			@media(max-width: 1200px){
				margin: 0 0.48rem;
			}
			@media(max-width: 596px){
				margin: 0 0.2rem;
			}
			.upcoming_title{
				margin-top: 0.36rem;
                font-family: ArialMT;
				font-weight: normal;
				font-size: 0.4rem;
				color: rgba(255,255,255,1);
				line-height: 0.4rem;
				@media(max-width: 768px){
					margin-top: 0.24rem;
                    font-size: 0.32rem;
				}
			}
			.upcoming_list_content{
				margin-top: 0.48rem;
				display: grid;
				grid-template-columns: repeat(2,1fr);
				grid-column-gap: 0.36rem;
				padding-bottom: 1.6rem;
				@media(max-width: 1200px){
					grid-template-columns: repeat(1,1fr);
					grid-row-gap: 0.4rem;
					padding-bottom: 1rem;
				}
				@media(max-width: 596px){
					margin-top: 0.24rem;
					padding-bottom: 0.72rem;
				}
				.upcoming_item{
					box-sizing: border-box;
					padding: 0.74rem 0.5rem 0.72rem 0.5rem;
					@media(max-width: 596px){
						padding: 0.48rem 0.32rem;
					}
					.upcoming_logo:first-child{
						display: flex;
						align-items: center;
						justify-content: center;
						img{
							height: 1.6rem;
						}
					}
					.upcoming_logo:last-child{
						img{
							margin: 0 auto;
							width: 1.48rem;
						}
					}
					.upcoming_item_title{
						text-align: center;
						margin-top: 0.58rem;
                        font-family: ArialMT;
						font-size: 0.32rem;
						line-height: 0.32rem;
						font-weight: normal;
						color: rgba(255,255,255,1);
					}
					.upcoming_item_content{
                        margin-top: 0.24rem;
                        font-family: ArialMT;
						font-size: 0.2rem;
						line-height: 0.32rem;
						color: rgba(255,255,255,0.65);
					}
				}
				.upcoming_item:first-child{
					background: url("../../assets/pages/eth_bg.png") no-repeat center center;
					background-size: cover;
				}
				.upcoming_item:last-child{
					background: url("../../assets/pages/cosmwasm_bg.png") no-repeat center center;
					background-size: cover;
				}
			}
		}
	}
</style>
