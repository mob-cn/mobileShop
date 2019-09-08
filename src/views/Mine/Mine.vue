<template>
	<div class="y-page-mine">
		<div class="main-top">
			<div class="top-user">
				<div class="img-container">
					<img src="img/show3.jpg" alt />
				</div>
				<div class="user-content">
					<p class="username">OMINI.BASS</p>
					<p class="phone-number">188****7024</p>
				</div>
			</div>
			<div class="bottom-user">
				<div class="bottom-user-content">
					<div class="favorite">
						<router-link to="/favorite" tag="div">
							<p class="title">收藏夹</p>
							<p class="num">190</p>
						</router-link>
					</div>
					<div class="attention-store">
						<router-link to="/attentionstore" tag="div">
							<p class="title">关注店铺</p>
							<p class="num">37</p>
						</router-link>
					</div>
					<div class="coupons">
						<router-link to="/coupons" tag="div">
							<p class="title">卡券</p>
							<p class="num">2</p>
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="main-bottom">
			<div class="order">
				<p class="ordername">我的订单</p>
				<div class="order-list">
					<router-link to="/myForm/main/all" tag="div" class="order-box">
						<span class="icon">
							<Icon name="send-gift-o" size="40"></Icon>
						</span>
						<p class="name">待付款</p>
					</router-link>
					<router-link to="/myForm/main/payment" tag="div" class="order-box">
						<span class="icon">
							<Icon name="gift-o" size="40"></Icon>
						</span>
						<p class="name">待收货</p>
					</router-link>
					<router-link to="/myForm/main/shipments" tag="div" class="order-box">
						<span class="icon">
							<Icon name="point-gift-o" size="40"></Icon>
						</span>
						<p class="name">已完成</p>
					</router-link>
					<router-link to="/myForm/main/harvest" tag="div" class="order-box">
						<span class="icon">
							<Icon name="friends-o" size="40"></Icon>
						</span>
						<p class="name">退款/售后</p>
					</router-link>
				</div>
			</div>
			<div class="tools">
				<p class="toolsname">常用工具</p>
				<div class="tools-list">
					<router-link to="/address" tag="div" class="tools-box">
						<span class="icon">
							<Icon name="location-o" size="40"></Icon>
						</span>
						<p class="name">收货地址</p>
					</router-link>
					<router-link to="/getCoupon" tag="div" class="tools-box">
						<span class="icon">
							<Icon name="coupon-o" size="40"></Icon>
						</span>
						<p class="name">领券中心</p>
					</router-link>
					<router-link to="/setting" tag="div" class="tools-box">
						<span class="icon">
							<Icon name="setting-o" size="40"></Icon>
						</span>
						<p class="name">设置</p>
					</router-link>
				</div>
			</div>
			<Divider :style="{ color: '#70726B', borderColor: '#70726B', padding: '0 16px' }">为你推荐~</Divider>
		</div>
	<router-view></router-view>
	</div>
</template>

<style lang="less">
.y-page-mine {
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	padding-bottom: 80px;
	position: relative;
	.main-top {
		background: #c1ab96;
		width: 100%;
		height: 180px;
		background: #c1ab96;
		padding: 20px 10px 0;
		color: #fff;
		box-sizing: border-box;
		.top-user {
			display: flex;
			margin-bottom: 30px;
			.img-container {
				margin-right: 10px;
				img {
					width: 50px;
					height: 50px;
					border-radius: 50%;
					box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
				}
			}
			.user-content {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				flex: 1;
				.username {
					font-size: 24px;
					font-weight: bold;
				}
				.phone-number {
					font-size: 14px;
				}
			}
		}
		.bottom-user {
			font-weight: bold;
			.bottom-user-content {
				display: flex;
				justify-content: space-around;
				div {
					p {
						text-align: center;
						font-size: 16px;
						margin-bottom: 10px;
					}
				}
			}
		}
	}
	.main-bottom {
		width: 100%;
		position: absolute;
		background: #fff;
		top: 60%;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		.order {
			width: 100%;
			padding: 10px 10px 0;
			box-sizing: border-box;
			.ordername {
				font-size: 18px;
				height: 30px;
				line-height: 30px;
				margin-bottom: 20px;
				font-weight: bold;
			}
			.order-list {
				display: flex;
				justify-content: space-around;
				.order-box,
				.router-link-exact-active,
				.router-link-active {
					width: 80px;
					height: 80px;
					text-align: center;
					.icon {
						display: inline-block;
						width: 40px;
						height: 40px;
					}
					.name {
						font-size: 16px;
					}
				}
			}
		}
		.tools {
			width: 100%;
			padding: 10px 10px 0;
			box-sizing: border-box;
			.toolsname {
				font-size: 18px;
				height: 30px;
				line-height: 30px;
				margin-bottom: 20px;
				font-weight: bold;
			}
			.tools-list {
				display: flex;
				justify-content: space-around;
				.tools-box,
				.router-link-exact-active,
				.router-link-active {
					width: 80px;
					height: 80px;
					text-align: center;
					.icon {
						display: inline-block;
						width: 40px;
						height: 40px;
					}
					.name {
						font-size: 16px;
					}
				}
			}
		}
	}
}
.van-divider,
.van-divider--hairline,
.van-divider--content-center {
	font-size: 18px;
	font-weight: bold;
}
</style>

<script>
import { Icon, Divider } from "vant";
export default {
	components: { Icon, Divider }
};
</script>

