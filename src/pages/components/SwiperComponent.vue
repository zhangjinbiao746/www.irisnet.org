<template>
	<div>
		<div class="swiper_container" @mouseenter="swiperStop" @mouseleave="swiperStart">
			<swiper ref="mySwiper" :options="swiperOption" class="my-swipe" v-show="flShowSwiper">
				<swiper-slide v-for="(item,index) in $store.state.messages.homeBanner" :key="index">
					<div class="banner_content_wrap" :style="{background:`url(${item.bgImage})`}">
						<div class="banner_content_container">
							<div class="banner_content">
								<p class="banner_content_title">{{item.title}}</p>
								<p class="banner_content_sub_title">{{item.subTitle}}</p>
								<p class="banner_content_description">{{item.description}}</p>
								<div class="banner_content_btn_content">
									<a class="banner_content_left_btn"
									   :href="item.leftBtnLink"
									   target="_blank"
									   rel="noreferrer noopener">{{item.leftBtnLabel}}</a>
									<a class="banner_content_right_btn" :href="item.rightBtnLink"
									   target="_blank"
									   rel="noreferrer noopener">{{item.rightBtnLabel}}</a>
								</div>
							</div>
						</div>
					</div>
				</swiper-slide>
			</swiper>
			<div class="swiper-button-prev" @click="prev()"></div>
			<div class="swiper-button-next" @click="next()"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "SwiperComponent",
		data() {
			return {
				flShowSwiper : false,
				swiperOption:{
					loop : true,
					autoplay : 3000,
					speed : 300,
					autoplayDisableOnInteraction : false,
					disableOnInteraction : false,
					//鼠标变成手掌型
					grabCursor : true,
					virtualTranslate : false,
					roundLengths : true,
					autoHeight : true,
					// effect : 'coverflow',
					navigation : {
						nextEl : '.swiper-button-next',
						prevEl : '.swiper-button-prev',
					}
				}
			}
		},
		computed : {
			mySwiper(){
				// mySwiper 是要绑定到标签中的ref属性
				return this.$refs.mySwiper.swiper
			},
			
		},
		methods:{
			swiperStop(){
				this.mySwiper.stopAutoplay()
			},
			swiperStart(){
				this.mySwiper.startAutoplay()
			},
			next(){
				this.mySwiper.slideNext();
			},
			prev(){
				this.mySwiper.slidePrev();
			},
		},
		mounted(){
			this.flShowSwiper = true
		}
	}
</script>

<style scoped lang="less">
.swiper_container{
	background: rgba(13, 14, 44, 1);
	position: relative;
	padding-bottom: 1rem;
	.my-swipe{
		.banner_content_wrap{
			height: 6.08rem;
			max-width: 13.2rem;
			margin: 0 auto;
			background-size: auto 100% !important;
			background-repeat:no-repeat !important;
			background-position: left center !important;
			@media(max-width: 1200px){
				height: auto;
				background-position: bottom -1rem center !important;
				background-size: 70% auto !important;
			}
			.banner_content_container{
				height: 100%;
				max-width: 12rem;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				color: rgba(255,255,255,1);
				@media(max-width: 1200px){
					margin: 0 0.48rem;
					justify-content: center;
				}
				.banner_content{
					@media(max-width: 1200px){
						margin-bottom: 5.4rem;
						margin-top: 1rem;
						text-align: center;
					}
					@media(max-width: 768px){
						margin-bottom: 0.57rem;
					}
					.banner_content_title{
						font-size: 0.6rem;
						line-height: 0.6rem;
						font-weight: normal;
						@media(max-width: 768px){
							font-size: 0.4rem;
							line-height: 0.4rem;
						}
					}
					.banner_content_sub_title{
						margin-top: 0.24rem;
						font-size: 0.6rem;
						line-height: 0.6rem;
						font-weight: 600;
						@media(max-width: 768px){
							font-size: 0.28rem;
							line-height: 0.28rem;
							margin-top: 0.2rem;
						}
					}
					.banner_content_description{
						margin-top: 0.6rem;
						font-size: 0.24rem;
						line-height: 0.32rem;
						letter-spacing: 0.01rem;
						font-weight: 400;
						color: rgba(255,255,255,0.75);
						@media(max-width: 768px){
							font-size: 0.16rem;
							margin-top: 0.49rem;
						}
					}
					.banner_content_btn_content{
						display: grid;
						grid-template-columns: repeat(2,1fr);
						grid-column-gap: 0.32rem;
						margin-top: 0.6rem;
						@media(max-width: 768px){
							margin-top: 0.32rem;
						}
						.banner_content_left_btn{
							width: 2rem;
							display: inline-block;
							background: rgba(46, 69, 211, 1);
							color: rgba(255,255,255,1);
							padding: 0.1rem 0;
							text-align: center;
							border-radius: 0.04rem;
						}
						.banner_content_right_btn{
							width: 2rem;
							display: inline-block;
							background: rgba(46, 69, 211, 1);
							color: rgba(255,255,255,1);
							padding: 0.1rem 0;
							text-align: center;
							border-radius: 0.04rem;
						}
					}
				}
			}
		}
	}
}
</style>
