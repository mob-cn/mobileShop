<template>
	<div class="y-page-message">
		<div class="page-message-container">
			<div class="header">
				<h1>消息</h1>
				<ul class="message-box">
					<router-link v-for="item in types" :key="item.id" :to="'/messageList/' + item.id" tag="li">
						<!-- <span class="icon"></span> -->
						<Icon :name="item.icon" size="40"></Icon>
						<p>{{item.text}}</p>
					</router-link>
				</ul>
			</div>
			<ul class="message-list">
				<li v-for="(item, index) in num" :key="index">
					<div class="image-container">
						<img src="img/show3.jpg" alt />
					</div>
					<div class="content">
						<p class="top">
							<span class="title">OMINI官方旗舰店</span>
							<span class="time">09:22</span>
						</p>
						<p class="bottom">
							<span class="msg">请核对您的付款信息</span>
							<span class="num">2</span>
						</p>
					</div>
				</li>
				<Divider>没有更多了哦~</Divider>
			</ul>
		</div>
	</div>
</template>
<style lang="less">
.y-page-message {
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	padding-bottom: 80px;
	.page-message-container {
		width: 100%;
		height: 100%;
		margin: 0 auto;
		position: relative;
		.header {
			position: relative;
			width: 100%;
			height: 90px;
			background: #c1ab96;
			padding: 0 10px;
			h1 {
				font-size: 28px;
				color: #fff;
				font-weight: bold;
				line-height: 28px;
			}
			.message-box {
				position: absolute;
				top: 50%;
				left: 48%;
				width: 80%;
				transform: translateX(-50%);
				height: 80px;
				display: flex;
				justify-content: space-around;
				background: #fff;
				box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
				border-radius: 8px;
				li {
					width: 70px;
					height: 70px;
					align-self: center;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-evenly;
					font-size: 14px;
					.van-icon, 
					.van-icon-logistics {
						width: 40px;
						height: 40px;
						border-radius: 50%;
						display: inline-block;
					}
				}
			}
		}
		.message-list {
			position: absolute;
			top: 20%;
			width: 100%;
			li {
				width: 100%;
				height: 80px;
				display: flex;
				border-bottom: 1px solid #ccc;
				.image-container {
					width: 80px;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					img {
						width: 75%;
						height: 75%;
						border-radius: 50%;
					}
				}
				.content {
					flex: 1;
					padding: 10px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					font-size: 14px;
					span {
						display: inline-block;
					}
					.top {
						display: flex;
						justify-content: space-between;
						.time {
							color: #868686;
							font-size: 12px;
						}
					}
					.bottom {
						display: flex;
						justify-content: space-between;
						color: #868686;
						font-size: 12px;
						.msg {
							width: 100%;
							height: 20px;
							line-height: 20px;
						}
						.num {
							width: 20px;
							height: 20px;
							border-radius: 50%;
							line-height: 20px;
							background: #f96877;
							color: #fff;
							text-align: center;
						}
					}
				}
			}
		}
	}
}
</style>
<script>
import { Divider, Icon } from "vant";
export default {
	// 注册组件
	components: {
		Divider,
		Icon
	},
	data() {
		return {
			types: [
				{ id: "1", text: "物流消息", path: "logistics", icon: "logistics" },
				{ id: "2", text: "通知消息", path: "notice", icon: "volume-o" },
				{ id: "3", text: "互动消息", path: "interact", icon: "flower-o" }
			],
			num: 5
		};
	}
};
</script>

