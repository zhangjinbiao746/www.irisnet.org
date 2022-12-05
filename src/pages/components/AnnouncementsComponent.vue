<template>
	<div class="announcement_container">
		<div class="announcement_wrap">
			<navigation-line></navigation-line>
			<h5 class="announcement_title ">{{$store.state.messages.announcements.title}}</h5>
			<div class="announcement_top_content">
			</div>
			<ul class="announcement_list_content">
				<li class="announcement_item_content" v-for="(item,index) in $store.state.messages.announcements.announcementList" :key="index">
					<a class="announcement_item_link"
					   :href="item.href"
					   target="_blank"
					   rel="noreferrer noopener">
						<div class="announcement_image_content"
						     id="announcement_image_content"
						     @mouseenter="scaleItemImage(index)"
						     @mouseleave="hideItemImage(index)">
							<img :src="item.img" alt="">
						</div>
						<h4 class="announcement_title">{{item.title}}</h4>
					</a>
					<p class="announcement_date_content">{{item.date}}</p>
				</li>
			</ul>
			<div class="view_more_btn_content">
				<a :href="$store.state.messages.announcements.viewMoreHref"
				   target="_blank" class="view_more_btn" rel="noreferrer noopener">
					{{$store.state.messages.announcements.viewMore}}
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	import NavigationLine from "./NavigationLine";
	export default {
		name: "AnnouncementsComponent",
		components: {NavigationLine},
		data() {
			return {
				announcementDom:null,
				announcementListItemImgDom:null
			}
		},
		mounted(){
			this.announcementDom = document.getElementById('announcement_top_image_content')
			this.announcementListItemImgDom = document.getElementsByClassName('announcement_image_content')
		},
		methods:{
			scaleImage(){
				this.announcementDom.classList.remove('reversion_image')
				this.announcementDom.classList.add('scale_image')
			},
			hideImage(){
				this.announcementDom.classList.remove('scale_image')
				this.announcementDom.classList.add('reversion_image')
			},
			scaleItemImage(index){
				this.announcementListItemImgDom[index].classList.remove('reversion_item_image')
				this.announcementListItemImgDom[index].classList.add('scale_item_image')
			},
			hideItemImage(index){
				this.announcementListItemImgDom[index].classList.remove('scale_item_image')
				this.announcementListItemImgDom[index].classList.add('reversion_item_image')
			},
		}
	}
</script>

<style scoped lang="less">
	.announcement_container{
		background: rgba(21, 12, 54, 1);
		.announcement_wrap{
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
			.announcement_title{
				padding-top: 0.36rem;
                font-family: ArialMT;
				font-size: 0.4rem;
				line-height: 0.4rem;
				font-weight: normal;
				color: rgba(255,255,255,1);
				@media(max-width: 768px){
					padding-top: 0.24rem;
                    font-size: 0.32rem;
				}
			}
			.announcement_top_content{
				max-width: 11rem;
				margin: 0 auto;
				.scale_image{
					animation: scale 0.3s ease-in-out;
					animation-fill-mode: forwards;
				}
				.reversion_image{
					animation: unscale 0.3s ease-in-out;
					animation-fill-mode: forwards;
				}
				.announcement_top_image_content{
					margin-top: 0.48rem;
					width: 100%;
					height: 3.4rem;
					background: url("../../assets/pages/announcement_bg.png") no-repeat center center;
					background-size: cover;
					display: flex;
					justify-content: flex-end;
					border-radius: 0.04rem;
					overflow: hidden;
					@media(max-width: 1200px){
						background: url("../../assets/pages/announcement_bg.png") no-repeat left center;
						background-size: cover;
					}
					@media(max-width: 900px){
						background: url("../../assets/pages/announcement_bg_ipad.png") no-repeat center center;
						background-size: cover;
						height: auto;
					}
					.announcement_content_wrap{
						display: flex;
						flex-direction: column;
						align-items: flex-start;
						margin-top: 0.8rem;
						margin-right: 0.5rem;
						@media(max-width: 900px){
							align-items: flex-start;
							margin: 4rem auto 0.34rem auto;
						}
						@media(max-width: 500px){
							margin: 2.8rem 0.2rem 0.34rem 0.2rem;
						}
						.announcement_top_content_title{
							display: inline-block;
                            font-family: ArialMT;
							font-size: 0.32rem;
							line-height: 0.4rem;
							color: rgba(255,255,255,1);
							font-weight: normal;
						}
						.announcement_top_text{
							display: inline-block;
                            font-family: ArialMT;
							font-size: 0.2rem;
							line-height: 0.4rem;
							color: rgba(255,255,255,0.64);
							margin-top: 0.18rem;
							@media(max-width: 900px){
								margin-top: 0.16rem;
							}
						}
						.announcement_date{
							margin-top: 0.43rem;
							display: inline-block;
                            font-family: ArialMT;
							font-size: 0.16rem;
							color: rgba(255,255,255,1);
							font-weight: 400;
							line-height: 0.16rem;
						}
					}
					
				}
			}
			.announcement_list_content{
				max-width: 11rem;
				margin: 0 auto;
				display: grid;
				grid-template-columns: repeat(2,1fr);
				// grid-template-rows: repeat(2,1fr);
				grid-row-gap: 0.6rem;
				grid-column-gap: 0.56rem;
				@media(max-width: 1000px){
					grid-template-columns: repeat(1,1fr);
					grid-template-rows: repeat(1,1fr);
					grid-column-gap:0 ;
					grid-row-gap: 0.46rem;
					margin-top: 0.48rem;
				}
				.announcement_item_content{
					margin-top: 0.56rem;
					@media(max-width: 1000px){
						margin-top: 0;
					}
					.announcement_item_link{
						display: inline-block;
						@media(max-width: 1200px){
							width: 100%;
						}
						.announcement_image_content{
							img{
								width: 100%;
								border-radius: 0.08rem;
								border:0.01rem solid rgba(44,57,117,1);
							}
						}
						.scale_item_image{
							animation: scale 0.3s ease-in-out;
							animation-fill-mode: forwards;
						}
						.reversion_item_image{
							animation: unscale 0.3s ease-in-out;
							animation-fill-mode: forwards;
						}
						.announcement_title{
                            font-family: ArialMT;
							font-size: 0.24rem;
							line-height: 0.32rem;
							color: rgba(255,255,255,1);
							@media(max-width: 1200px){
								padding-top: 0.17rem;
							}
							@media(max-width: 596px){
								font-size: 0.2rem;
								line-height: 0.32rem;
							}
							&:hover{
								color: rgba(155, 100, 237, 1);
							}
						}
					}
					.announcement_date_content{
						margin-top: 0.24rem;
						color: rgba(255,255,255,0.75);
                        font-family: ArialMT;
						font-size: 0.16rem;
						font-weight: 400;
					}
				}
			}
			.view_more_btn_content{
				margin-top: 0.59rem;
				border-top:0.01rem solid rgba(255, 255, 255, 0.45);
				.view_more_btn{
					margin-top: 0.35rem;
					display: inline-block;
					border-radius: 0.04rem;
					border: 0.02rem solid rgba(155, 100, 237, 1);
					box-sizing: border-box;
					padding: 0.14rem 0.4rem;
					color: rgba(155, 100, 237, 1);
                    font-family: ArialMT;
				}
			}
		}
	}
	@keyframes scale {
		from{
			transform: scale(1);
		}
		to{
			transform: scale(1.03);
		}
	}
	@keyframes unscale {
		from{
			transform: scale(1.03);
		}
		to{
			transform: scale(1);
		}
	}
</style>
