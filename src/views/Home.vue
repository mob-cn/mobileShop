<template>
	<div class="h-home">
		<div class="h-search">
			<p>
				<input type="text" placeholder="lns风配饰" @touchend="$router.push('/search')" />
			</p>
			<span v-show="isShow" @touchend="$router.push('/login')">登录</span>
			<span v-show="!isShow" @touchend="signIn">签到</span>
		</div>
		<transition name="fade" mode="in-out">
			<div
				class="h-search"
				:style="{ 'position': 'fixed', 'z-index': 5, 'top': 0, 'width': '100%' }"
				v-show="searchIsShow"
			>
				<p :style="{ 'marginRight': '40px' }">
					<input type="text" placeholder="lns风配饰" @touchend="$router.push('/search')" />
				</p>
			</div>
		</transition>
		<div class="h-carouser">
			<mt-swipe :auto="2000">
				<mt-swipe-item>
					<img src="img/u887.png" alt />
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="img/u888.png" alt />
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="img/u889.png" alt />
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="img/u890.png" alt />
				</mt-swipe-item>
			</mt-swipe>
			<span>{{ num }}/4</span>
		</div>
		<div class="h-content">
			<div class="h-content-header">
				<p @touchend="$router.push('/homediscount')">限时折扣</p>
				<p @touchend="$router.push('/homefaddish')">本周爆款</p>
				<p @touchend="$router.push('/sort')">分类</p>
			</div>
			<div class="h-content-footer">
				<div class="h-time-limit">
					<p>
						限时折扣
						<span>{{ hour }}</span>：
						<span>{{ minute }}</span>：
						<span>{{ seconds }}</span>
					</p>
					<p @touchend="$router.push('/homediscount')">更多</p>
				</div>
				<div>
					<TimeLimit></TimeLimit>
				</div>
				<div class="h-time-limit">
					<p>本周爆款</p>
					<p @touchend="$router.push('/homefaddish')">更多</p>
				</div>
				<div>
					<TimeLimit></TimeLimit>
				</div>
				<div class="h-time-limit">
					<p>为你推荐</p>
				</div>
				<div class="h-footer-card">

					<HomeProductCard v-for="(item, index) in recommed" :data-recommed="item" :key="index" ></HomeProductCard>
				
				</div>
				<div class="h-no-have-more">
					<p>没有更多了哦~</p>
				</div>
			</div>
		</div>
		<div class="h-home-footer-tabar"></div>
	</div>
</template>
<style type="text/css" lang="less">
.h-home {
	// 搜索样式
	.h-search {
		background-color: #fff;
		padding: 20px 20px 10px;
		display: flex;
		height: 32px;
		line-height: 32px;
		p {
			flex: 4;
			background-color: #eae9e5;
			border-radius: 20px;
			input {
				border: 0;
				background-color: rgba(255, 255, 255, 0);
				outline: none;
				margin-left: 10px;
				&::-webkit-input-placeholder {
					color: #c4af9c;
				}
			}
		}
		span {
			flex: 1;
			border: 1px solid #c4af9c;
			border-radius: 20px;
			color: #c4af9c;
			text-align: center;
			margin-left: 10px;
		}
	}
	// 搜索过渡动画
	.fade-enter {
		opacity: 0;
	}
	.fade-leave {
		opacity: 1;
	}
	.fade-enter-active {
		transition: opacity 0.5s;
	}
	.fade-leave-active {
		opacity: 0;
		transition: opacity 0.5s;
	}
	// 轮播图
	.h-carouser {
		position: relative;
		height: 182px;
		.mint-swipe-item {
			height: 100%;
			img {
				width: 100%;
				height: 100%;
			}
		}
		span {
			position: absolute;
			width: 70px;
			height: 30px;
			line-height: 30px;
			right: 20px;
			bottom: 20px;
			border-radius: 15px;
			text-align: center;
			color: #fff;
			background-color: rgba(82, 80, 75, 0.5);
		}
	}

	.h-content {
		width: 100%;
		// 限时折扣
		.h-content-header {
			display: flex;
			height: 60px;
			line-height: 60px;
			text-align: center;
			p {
				flex: 1;
				font-weight: 700;
				font-size: 14px;
				color: #71a284;
			}
		}
		// 为你推荐
		.h-content-footer {
			padding: 0 20px;
			background-color: rgba(193, 171, 150, 1);
			.h-time-limit {
				height: 60px;
				line-height: 60px;
				display: flex;
				justify-content: space-between;
				p {
					font-weight: 700;
					font-size: 16px;
					color: #ffffff;
					&:last-child {
						font-weight: 400;
						font-size: 14px;
					}
					&:first-child {
						span {
							background-color: black;
							font-weight: 400;
							width: 21px;
							height: 21px;
							font-size: 12px;
							text-align: center;
							&:first-child {
								margin-left: 10px;
							}
						}
					}
				}
			}
			.h-footer-card {
				overflow: hidden;
			}
		}
		.h-no-have-more {
			font-weight: 700;
			color: #ffffff;
			height: 40px;
			line-height: 40px;
			text-align: center;
		}
	}
}
.h-home-footer-tabar {
	margin-bottom: 60px;
}
.h-toast {
	width: 200px;
	height: 200px;
	line-height: 200px;
	span {
		font-size: 25px;
	}
}
</style>
<script>
// 引入轮播图组件，toast组件
import { Swipe, SwipeItem, Toast } from "mint-ui";
// 引入TimeLimit组件
import TimeLimit from "../components/TimeLimit";
// 引入HomeProductCard
import HomeProductCard from "../components/HomeProductCard";
export default {
	// 注册组件
	components: { Swipe, SwipeItem, TimeLimit, HomeProductCard },
	data() {
		return {
			num: 1,
			hour: "",
			minute: "",
			seconds: "",
			isShow: true,
			signInData: true,
			searchIsShow: false,
			clientHeight: "",

			// 初始化数据
			list: [],
			recommed: []
		};
	},
	created() {
		this.$http.get("/api/h_home.json").then(({ data }) => {
			this.list = data.list;
			this.recommed = data.recommed;
		});
		this.$http.get("/api/h_home_faddish.json").then(({ data }) => {
			if (data.errno === 0) {
				this.$store.dispatch("syncAddHomeFaddishCard", data.data);
			}
		});
		this.carouserNum();
		this.countTime();
		this.login();
		// 给window添加scroll事件
		// 备份this
		let me = this;
		window.addEventListener("scroll", function() {
			if (this.document.documentElement.scrollTop > 61) {
				me.searchIsShow = true;
			} else {
				me.searchIsShow = false;
			}
		});
	},
	methods: {
		// 获取当前时间
		countTime() {
			// 获取当前的时间
			var date = new Date();
			// 获取当前毫秒值
			var now = date.getTime();
			// console.log(now);
			// 设置未来时间
			var str = "2019/8/10 00:00:00";
			var date1 = new Date(str);
			// 转为毫秒值
			var end = date1.getTime();
			// console.log(end);

			// 时间差 未来的毫秒值 - 当前的毫秒值
			var result = parseInt((end - now) / 1000);
			// console.log(leftTime);

			// 定义变量
			var h, m, s;

			if (result >= 0) {
				h = parseInt((result / 60 / 60) % 24);
				m = parseInt((result / 60) % 60);
				s = parseInt(result % 60);
				// console.log(d, h, m, s);

				// 获取元素并设置内部文本
				this.hour = h;
				this.minute = m;
				this.seconds = s;
			}
			// 开启延时器，使用递归的方式，可以动态的显示效果
			setTimeout(this.countTime, 1000);
		},
		// 判断登录方法
		login() {
			if (this.$store.state.phone) {
				this.isShow = false;
			}
		},
		// 签到方法
		signIn() {
			if (this.signInData) {
				Toast({
					message: "签到成功 + 1",
					className: "h-toast"
				});
				this.signInData = !this.signInData;
			} else {
				Toast({
					message: "今天已经签到了",
					className: "h-toast"
				});
			}
		},
		carouserNum() {
			setInterval(() => {
				this.num++;
				if (this.num === 5) {
					this.num = 1;
				}
			}, 2000);
		}
	}
};
</script>