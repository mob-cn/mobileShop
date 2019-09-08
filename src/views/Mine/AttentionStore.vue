<template>
	<div class="y-page-attention-store">
		<NavBar
			title="关注店铺"
			left-text=""
			right-text="编辑"
			left-arrow
			@click-left="onClickLeft"
			@click-right="onClickRight"
		/>
		<Tabs 
            v-model="activeName"
            background="#eae9e5"
            animated="true"
            sticky="true"
        >
			<Tab title="全部" name="a">
				<div @touchend="go">
				<StoreCard v-for="(item, index) in attentionStoreNum" :key="index" @touchend="go"></StoreCard>
				</div>
			</Tab>
			<Tab title="有上新" name="b">
				<StoreCard v-for="(item, index) in attentionStoreNum" :key="index"></StoreCard>
			</Tab>
		</Tabs>
		<Divider>没有更多了哦~</Divider>
	</div>
</template>
<script>
import { NavBar, Divider, Tabs, Tab } from "vant";
import StoreCard from "../../components/StoreCard";
export default {
	components: { NavBar, Divider, Tabs, Tab, StoreCard },
	data() {
		return {
            list: [],
			activeName: 'a',
			attentionStoreNum: 5
		};
    },
	methods: {
		onClickLeft() {
			this.$router.go(-1);
		},
		onClickRight() {
			// console.log(this.list);
		},
		go(){
			console.log("6")
			this.$router.push("/store")
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
</style>
