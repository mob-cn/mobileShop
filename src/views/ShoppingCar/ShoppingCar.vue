<template>
	<div class="y-page-shopcar">
		<div class="header">
			<h1>购物车</h1>
		</div>
		<div class="goot-list">
			<Card
				v-for="(item, index) in goodsNum"
				:key="index"
				num="2"
				price="2.00"
				title="法国BDM大圆圈耳环女网红欧美夸张时尚耳圈"
				thumb="img/show3.jpg"
			>
				<div slot="footer">
					<Button size="mini" @click="removeNum">-</Button>
					<input v-model="singleNum" />
					<Button size="mini" @click="addNum">+</Button>
				</div>
			</Card>
			<Divider>没有更多了哦~</Divider>
		</div>
		<SubmitBar :price="3050" button-text="提交订单">
			<Checkbox v-model="checked">全选</Checkbox>
		</SubmitBar>
	</div>
</template>
<style lang="less">
.y-page-shopcar {
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	.header {
		position: relative;
		width: 100%;
		height: 90px;
		background: #c1ab96;
		padding: 10px;
		box-sizing: border-box;
		h1 {
			font-size: 28px;
			color: #fff;
			font-weight: bold;
			line-height: 28px;
		}
	}
	.goot-list {
		position: absolute;
		top: 5%;
		width: 100%;
		.van-card {
			width: 95%;
			box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
			margin: 0 auto;
			padding: 10px;
			margin: 10px;
			border-radius: 10px;
		}
		.van-image__img {
			border-radius: 10px;
		}

		.van-checkbox {
			margin-left: 10px;
		}
		input {
			width: 22px;
			height: 22px;
			text-align: center;
			line-height: 22px;
			margin: 0;
		}
		.van-button,
		.van-button--default,
		.van-button--mini {
			margin: 0;
			min-width: 22px;
			width: 22px;
			height: 22px;
			font-size: 16px;
		}
		.van-card__title {
			font-size: 16px;
			margin-bottom: 5px;
		}
		.van-card__price {
			font-size: 14px;
		}
	}
	.van-submit-bar {
		bottom: 75px;
	}
}
</style>

<script>
import { Card, Button, SubmitBar, Checkbox, Divider } from "vant";
export default {
	components: { Card, Button, SubmitBar, Checkbox, Divider },
	data() {
		return {
			goodsNum: 3,
			checked: true,
			singleNum: 1,
		};
	},
	methods: {
		removeNum() {
			this.singleNum--;
			if (this.singleNum < 0) {
				return (this.singleNum = 0);
			}
		},
		addNum() {
			this.singleNum++;
		}
	}
};
</script>

