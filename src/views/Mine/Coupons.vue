<template>
	<div class="y-page-attention-store">
		<NavBar
			title="卡券"
			left-text=""
			right-text=""
			left-arrow
			@click-left="onClickLeft"
			@click-right="onClickRight"
		/>
		<Tabs 
            v-model="activeName"
            background="#eae9e5"
            sticky="true"
            animated="true"
        >
			<Tab title="优惠券" name="a">全部</Tab>
			<Tab title="会员卡" name="b">降价中</Tab>
		</Tabs>
		<Divider>没有更多了哦~</Divider>
	</div>
</template>
<script>
import { NavBar, Divider, Tabs, Tab } from "vant";
export default {
	components: { NavBar, Divider, Tabs, Tab },
	data() {
		return {
            list: [],
            activeName: 'a'
		};
    },
	methods: {
		onClickLeft() {
			this.$router.go(-1);
		},
		onClickRight() {
			// console.log(this.list);
		}
	}
};
</script>

<style lang="less">
.y-page-attention-store {
	width: 100%;
	height: 100%;
	background: #eae9e5;
}
.van-nav-bar,
.van-hairline--bottom {
	background: #eae9e5;
}
.van-nav-bar__title,
.van-ellipsis {
	color: #1e1e1e;
	font-weight: bold;
}
.van-icon-arrow-left:before,
.van-nav-bar__text {
	color: #c7b4a3;
}
// .van-tabs__nav,
// .van-tabs__nav--line {
//     background: #eae9e5;
// }
</style>
