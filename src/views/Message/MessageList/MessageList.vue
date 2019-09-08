<template>
	<div class="page-messagelist">
		<NavBar
			title="物流消息"
			left-text="返回"
			right-text="设置"
			left-arrow
			@click-left="onClickLeft"
			@click-right="onClickRight"
		/>
        <LogisticsCard v-for="item in list" :key="item.id" :data="item"></LogisticsCard>
	    <Divider>没有更多了哦~</Divider>
	</div>
</template>
<style lang="less">
.page-messagelist {
    width: 100%;
    height: 100%;
    background: #EAE9E5;
}
.van-nav-bar, 
.van-hairline--bottom {
    background: #EAE9E5;
}
.van-nav-bar__title,
.van-ellipsis {
    color: #1E1E1E;
    font-weight: bold;
}
.van-icon-arrow-left:before,
.van-nav-bar__text {
    color: #C7B4A3;
}
</style>

<script>
import { NavBar, Divider } from "vant";
import LogisticsCard from "../../../components/LogisticsCard";
export default {
    components: { NavBar, Divider, LogisticsCard },
    data() {
        return {
            list: []
        }
    },
	methods: {
		onClickLeft() {
            this.$router.go(-1);
        },
        onClickRight() {
            console.log(this.list);
        },
    },
    created() {
        this.$http("/api/y-logistics.json")
            .then(({ data }) => {
                this.list = data.data;
            });
    }
};
</script>

<style lang="less">
.page-messagelist {
	background: #eae9e5;
	height: 100%;
	width: 100%;
	.header {
		height: 50px;
		width: 100%;
		background: pink;
		span {
			font-size: 20px;
		}
    }
}
</style>
