<template>
	<div class="roadmap_container"  ref="roadmap">
		<div class="roadmap_wrap">
			<navigation-line/>
			<h3 class="roadmap_title">{{$store.state.messages.home.sectionThree.title}}</h3>
			<div class="roadmap_scroll_content">
				<vue-scroll :ops="opsConfig">
					<ul class="roadmap_list_content">
						<li class="roadmap_item"
						    v-for="item in $store.state.messages.home.sectionThree.road"
						    :key="item.id">
							<div class="roadmap_date_content">
								<div class="roadmap_date_content_wrap">
									<div class="roadmap_date_bg_content"
									     :class="item.isActive ? 'show_active' : 'hide_active'"
									     @click="choiceCaption(item.id)">{{item.caption}}</div>
									<div class="roadmap_line_content">
										<div class="roadmap_link_left_img"></div>
										<div class="roadmap_link"></div>
										<div class="roadmap_link_right_img"></div>
									</div>
								</div>
								<p class="roadmap_date_text" :class="item.isActive ? 'show_active' : 'hide_active'">{{item.time}}</p>
							</div>
							<div class="roadmap_date_link"></div>
						</li>
					</ul>
				</vue-scroll>
			</div>
			<div class="roadmap_content_container">{{coptionText}}</div>
		</div>
	</div>
</template>

<script>
	import NavigationLine from "./NavigationLine";
	export default {
		name: "RoadmapComponent",
		components: {NavigationLine},
		data() {
			return {
				coptionText: '',
				opsConfig:{
					rail: {
						opacity: '1',
						background: 'rgba(20, 30, 61, 1)',
						// border: '1px solid #cecece',
						size: '10px'
					},
					bar:{
						keepShow:true,
						size: '10px',
						minSize: 0.1,
						background:'rgba(67, 79, 130, 1)',
					},
					vuescroll: {
						wheelScrollDuration: 0,
						wheelDirectionReverse: false,
						locking: true,
						checkShifKey: true
					}
				}
			}
		},
		mounted(){
			this.$store.state.messages.home.sectionThree.road.forEach(item =>{
				if(item.isActive){
					this.coptionText = item.msg
				}
			})
			this.onresize();
			window.addEventListener('resize', this.onresize);
		},
		methods:{
			onresize(){
				setTimeout(() => {
					this.$store.commit('roadmap', this.$refs.roadmap.offsetTop - this.$store.state.headerHeight);
				},200)
			},
			choiceCaption(index){
				this.$store.commit('changeItemIsActive',index)
				this.$store.state.messages.home.sectionThree.road.forEach(item =>{
					if(item.isActive){
						this.coptionText = item.msg
					}
				})
			}
		}
	}
</script>

<style scoped lang="less">
.roadmap_container{
	background: rgba(13, 14, 44, 1);
	.roadmap_wrap{
		max-width: 12rem;
		margin: 0 auto;
		padding-bottom: 1.6rem;
		@media(max-width: 1200px){
			margin: 0 0.48rem;
			padding-bottom: 1rem;
		}
		@media(max-width: 596px){
			margin: 0 0.2rem;
			padding-bottom: 0.72rem;
		}
		.roadmap_title{
			font-size: 0.4rem;
			line-height: 0.4rem;
			font-weight: normal;
			padding-top: 0.36rem;
			color: rgba(255,255,255,1);
			margin-bottom: 0.48rem;
			
		}
		.roadmap_scroll_content{
			width: 100%;
			height: 3.06rem;
			/*overflow-y: hidden;*/
			.roadmap_list_content{
				display: flex;
				color: rgba(255,255,255,1);
				width: 12rem;
				box-sizing: border-box;
				padding-left: 0.33rem;
				.roadmap_item{
					flex: 1;
					display: flex;
					align-items: center;
					.roadmap_date_content{
						flex: 1;
						.roadmap_date_content_wrap{
							display: flex;
							.roadmap_date_bg_content{
								background: url("../../assets/pages/roadmap_black.png") no-repeat center center;
								background-size: auto 100%;
								width: 1.23rem;
								height:1.23rem;
								text-align: center;
								line-height: 1.23rem;
								font-size: 0.24rem;
								font-weight: normal;
								cursor: pointer;
								z-index: 100;
							}
							.show_active{
								background: url("../../assets/pages/roadmap_white.png") no-repeat center center;
								background-size: auto 100%;
							}
							.hide_active{
								background: url("../../assets/pages/roadmap_black.png") no-repeat center center;
								background-size: auto 100%;
							}
							.roadmap_line_content{
								flex: 1;
								display: flex;
								align-items: center;
								justify-content: space-between;
								.roadmap_link_left_img{
									background: url("../../assets/pages/block_white.png") no-repeat center center;
									background-size: cover;
									width: 0.16rem;
									height: 0.16rem
								}
								.roadmap_link{
									width: 0.94rem;
									height: 0.01rem;
									background: rgba(255,255,255,1);
								}
								.roadmap_link_right_img{
									background: url("../../assets/pages/block_white.png") no-repeat center center;
									background-size: cover;
									width: 0.16rem;
									height: 0.16rem
								}
							}
						}
						.roadmap_date_text{
							margin-top: 0.2rem;
							font-size: 0.2rem;
							color: rgba(255,255,255,0.65);
							line-height: 0.2rem;
							font-weight: 400;
							position: relative;
							left: -0.33rem;
							&:after{
								display: none;
								content: '';
								background: url("../../assets/pages/blue_arrow.png");
								background-size: 0.32rem 0.16rem;
								width: 0.32rem;
								height: 0.16rem;
								position: absolute;
								top: 0.4rem;
								left: 0.78rem;
								z-index: 10;
							}
						}
						.show_active{
							&:after{
								display: block;
							}
						}
						.hide_active{
							&:after{
								display: none;
							}
						}
					}
				}
				.roadmap_item:nth-child(3){
					.roadmap_date_content{
						.roadmap_date_content_wrap{
							.roadmap_date_bg_content{
								background: url("../../assets/pages/kuafu_light.png") no-repeat center center;
								background-size: auto 100%;
								width: 2.07rem;
								height:2.02rem;
								line-height: 2.02rem;
								font-size: 0.24rem;
								font-weight: normal;
							}
							.show_active{
								background: url("../../assets/pages/kuafu_light.png") no-repeat center center;
								background-size: auto 100%;
								width: 2.07rem;
								height:2.02rem;
							}
							.hide_active{
								background: url("../../assets/pages/kuafu_dark.png") no-repeat center center;
								background-size: auto 100%;
							}
							.roadmap_line_content{
								min-width: 1.66rem;
								.roadmap_link{
									background: rgba(255,255,255,0.14);
								}
								.roadmap_link_right_img{
									background-image: url("../../assets/pages/block_black.png");
								}
							}
						}
						.roadmap_date_text{
							left: 0.08rem;
							&:after{
								left: 0.83rem;
							}
						}
					}
				}
				.roadmap_item:nth-child(4){
					.roadmap_date_content{
						.roadmap_date_content_wrap{
							.roadmap_line_content{
								min-width: 1.66rem;
								.roadmap_link_left_img{
									background-image: url("../../assets/pages/block_black.png");
								}
								.roadmap_link{
									background: rgba(255,255,255,0.14);
								}
								.roadmap_link_right_img{
									background-image: none;
								}
							}
						}
						.roadmap_date_text{
							left: -0.17rem;
							&:after{
								left: 0.63rem;
							}
						}
					}
				}
			}
		}
		.roadmap_content_container{
			margin-top: 0.16rem;
			color: rgba(255,255,255,0.65);
			box-sizing: border-box;
			padding: 0.4rem;
			background: rgba(32, 34, 65, 1);
			font-size: 0.16rem;
			line-height: 0.32rem;
			@media(max-width: 596px){
				padding: 0.24rem 0.2rem;
			}
		}
	}
}
</style>
