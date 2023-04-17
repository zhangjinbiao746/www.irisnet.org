<template>
	<div class="collaboration_container" ref="collaboration">
		<div class="collboration_wrap">
			<navigation-line></navigation-line>
			<h3 class="collboration_content_title">{{$store.state.messages.home.collborations.title}}</h3>
			<div class="collboration_container">
				<div class="collboration_logo_content"
				     v-for="(item,index) in $store.state.messages.home.collborations.list"
				     :key="index">
					<h5 class="collboration_logo_title">{{item.title}}</h5>
					<ul class="collboration_logo_list">
						<li class="collboration_logo_item" v-for="(item,index) in item.list" :key="index">
							<a v-if="item.name !== 'BIANJIE.AI'" :href="item.link" target="_blank" rel="noreferrer noopener">
								<img :src="item.image" alt="">
								<p class="collboration_logo_name">{{item.name}}</p>
							</a>
							<span v-else class="not_link_content">
								<img :src="item.image" alt="">
								<p class="collboration_logo_name">{{item.name}}</p>
							</span>
						</li>
					</ul>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import NavigationLine from "./NavigationLine";
	export default {
		name: "CollaborationComponent",
		components: {NavigationLine},
		mounted(){
			this.onresize();
			window.addEventListener('resize', this.onresize);
		},
		methods:{
			onresize(){
				setTimeout(() => {
					this.$store.commit('collaboration', this.$refs.collaboration.offsetTop - this.$store.state.headerHeight);
				},200)
			}
		}
	}
</script>

<style scoped lang="less">
.collaboration_container{
	background: rgba(21, 12, 54, 1);
	.collboration_wrap{
		margin: 0 auto;
		max-width: 12rem;
		padding-bottom: 1.6rem;
		@media(max-width: 1200px){
			margin: 0 0.48rem;
			padding-bottom: 1rem;
		}
		@media(max-width: 596px){
			margin: 0 0.2rem;
			padding-bottom: 0.72rem;
		}
		.collboration_content_title{
            font-family: ArialMT;
			font-size: 0.4rem;
			line-height: 0.4rem;
			color: rgba(255,255,255,1);
			font-weight: normal;
			padding-top: 0.36rem;
			@media(max-width: 768px){
				padding-top: 0.24rem;
                font-size: 0.32rem;
			}
		}
		.collboration_container{
			margin-top: 0.48rem;
			@media(max-width: 596px){
				margin-top: 0.25rem;
			}
			.collboration_logo_content{
				margin-top: 0.64rem;
				.collboration_logo_title{
                    font-family: ArialMT;
					font-size: 0.24rem;
					line-height: 0.24rem;
					color: rgba(255,255,255,0.65);
					font-weight: normal;
				}
				.collboration_logo_list{
					margin-top: 0.36rem;
					display: grid;
					grid-template-columns: repeat(5,1fr);
					grid-row-gap: 0.52rem;
					@media(max-width: 940px){
						margin-top: 0.24rem;
						grid-template-columns: repeat(4,1fr);
					}
					@media(max-width: 540px){
						grid-template-columns: repeat(3,1fr);
						grid-row-gap: 0.32rem;
					}
					@media(max-width: 440px){
						grid-template-columns: repeat(2,1fr);
					}
					.collboration_logo_item{
						text-align: center;
						.not_link_content {
							display: inline-block;
							img {
								width: 1rem;
								height: 1rem;
								@media (max-width: 768px) {
									width: 0.6rem;
									height: 0.6rem;
								}
							}
							.collboration_logo_name{
								margin-top: 0.24rem;
								font-family: ArialMT;
								font-size: 0.32rem;
								line-height: 0.32rem;
								font-weight: 600;
								color: rgba(255,255,255,1);
								@media(max-width: 768px){
									font-size: 0.2rem;
									margin-top: 0.16rem;
								}
							}
						}
						a{
							display: inline-block;
							img{
								width: 1rem;
								height: 1rem;
								@media(max-width: 768px){
									width: 0.6rem;
									height: 0.6rem;
								}
							}
							.collboration_logo_name{
								margin-top: 0.24rem;
                                font-family: ArialMT;
								font-size: 0.32rem;
								line-height: 0.32rem;
								font-weight: 600;
								color: rgba(255,255,255,1);
								&:hover {
									color: #9b64ed;
								}
								@media(max-width: 768px){
									font-size: 0.2rem;
									margin-top: 0.16rem;
								}
							}
						}
						
					}
				}
			}
			.collboration_logo_content:first-child{
				margin-top: 0;
			}
		}
	}
}
</style>
