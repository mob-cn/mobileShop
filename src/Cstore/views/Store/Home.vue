<template>
	<div class="c-home">
		<!-- 轮播图 -->
		<div class="c-home-swipe">
			<van-swipe @change="onChange" :autoplay="3000">
				<van-swipe-item
					v-for="(item, index) in homeData.swipList"
					:key="index"
				><img :src="item.img"></van-swipe-item>
				<div class="custom-indicator" slot="indicator">
					{{ current + 1 }}/4
				</div>
			</van-swipe>
			<div class="c-home-footer">{{homeData.swipList[current].textWords}}</div>
		</div>
		<!-- banner区域 -->
		<div class="c-home-banner">
			<div class="c-banner-hd">
				<h2>分类</h2>
				<p>CLASSFICATION</p>
			</div>
			<div class="c-banner-bd">
				<div
					class="c-home-bannerCard"
					v-for="(item, index) in homeData.bannerList"
					:key="index"
				>
					<img :src="item.img" alt="">
					<div class="c-bannerCard-footer">
						<h3>{{item.title}}</h3>
						<p>{{item.titleEn}}</p>
					</div>
				</div>
			</div>
		</div>
		<!-- 内容区域 -->
		<div class="c-home-content">
			<div class="c-content-hd">
				<h2>店长推荐</h2>
				<p>RECOMMENDATION</p>
			</div>
			<div class="c-content-bd">
				<div
					class="c-home-contentCard"
					v-for="(item, index) in homeData.contentList"
					:key="index"
				>
					<img :src="item.img" alt="">
					<div class="c-content-footer">
						<h3>{{item.title}}</h3>
						<p class="c-footer-tax">
							<span>税</span>
							<span>¥ {{item.tax}}</span>
						</p>
						<p>¥ {{item.price}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less">
.c-home {
	.c-home-swipe {
		.van-swipe {
			.van-swipe-item {
				img {
					width: 100%;
					height: 400px;
				}
			}
			position: relative;
			.custom-indicator {
				position: absolute;
				right: 15px;
				bottom: 10px;
				z-index: 1;
				background-color: rgba(0, 0, 0, .3);
				width: 60px;
				height: 30px;
				border-radius: 15px;
				text-align: center;
				line-height: 30px;
				color: #fff;
			}	
		}
		position: relative;
		.c-home-footer {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 50px;
			line-height: 50px;
			padding-left: 15px;
			background-color: rgba(255, 255, 255, .5);
		}
	}
	.c-home-banner {
		margin-top: 10px;
		.c-banner-hd {
			text-align: center;
			color: #8E7E6F;
			padding: 20px 0;
			h2 {
				font-size: 16px;
				line-height: 26px;
			}
			p {
				font-size: 14px;
				line-height: 20px;
			}
		}
		.c-banner-bd {
			margin-top: 10px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			padding: 0 15px;
			.c-home-bannerCard {
				margin-bottom: 5px;
				width: 48%;
				overflow: hidden;
				border-radius: 10px;
				img {
					width: 100%;
					height: 140px;
				}
				position: relative;
				.c-bannerCard-footer {
					position: absolute;
					left: 0;
					bottom: 0;
					width: 100%;
					background-color: rgba(255, 255, 255, .5);
					text-align: center;
					font-size: 14px;
					line-height: 20px;
					color: #333333;
					h3 {
						font-weight: normal;
					}
					p {
						font-weight: bold;
					}
				}
			}
		}
	}
	.c-home-content {
		margin-top: 30px;
		background-color: #C1AB96;
		.c-content-hd {
			text-align: center;
			color: #8E7E6F;
			padding: 20px 0;
			h2 {
				font-size: 16px;
				line-height: 26px;
			}
			p {
				font-size: 14px;
				line-height: 20px;
			}
		}
		.c-content-bd {
			margin-top: 10px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			padding: 0 15px;
			.c-home-contentCard {
				box-shadow: 2px 2px 4px rgba(0 ,0, 0, .3),
							-2px -2px 4px rgba(0, 0, 0,.3);
				margin-bottom: 20px;
				width: 45%;
				overflow: hidden;
				border-radius: 5px;
				background-color: #fff;
				img {
					width: 100%;
					height: 190px;
				}
				.c-content-footer {
					padding: 5px 10px;
					h3 {
						font-weight: normal;
						font-size: 16px;
						line-height: 20px;
					}
					p {
						font-size: 14px;
						line-height: 24px;
						font-weight: bold;
					}
					.c-footer-tax {
						color: #C1AB96;
						span:first-child {
							display: inline-block;
							color: #fff;
							background-color: #C1AB96;
							border-radius: 5px;
							width: 24px;
							height: 24px;
							text-align: center;
							margin-right: 5px;
						}
					}
				}
			}
		}
	}
	
}
</style>

<script type="text/javascript">
export default {
	data() {
		return {
			current: 0,
			homeData: {
				swipList: [
					{ textWords: "" }
				]
			}
		}
	},
	methods: {
		onChange(index) {
			this.current = index;
		},
		getData() {
			// 发送请求
			this.$http
				.get('/api/chomeData.json')
				// 监听数据返回
				.then(({ data }) => {
					// console.log(data);
					this.homeData = data;
				})
		}
	},
	created() {
		// 更新数据
		this.getData();
	},
	// 监听路由变化
	watch: {
		// 路由改变
		$route() {
			// 更新数据
			this.getData();
		}
	}
}
</script>