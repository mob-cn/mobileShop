<template>
	<div class="c-goods">
		<!-- 内容区域 -->
		<div class="c-goods-content">
			<div class="c-content-bd">
				<goodsCard
					v-for="(item, index) in goodsData.contentList"
					:key="index"
					:data="item"
				></goodsCard>
			</div>
		</div>
	</div>
</template>

<style lang="less">
.c-goods {
	.c-goods-content {
		background-color: #C1AB96;
		padding: 20px 15px;
		.c-content-bd {
			margin-top: 10px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
		}
	}	
}
</style>

<script type="text/javascript">
import GoodsCard from '../../components/GoodsCard';
export default {
	components: { GoodsCard },
	data() {
		return {
			goodsData: {}
		}
	},
	methods: {
		getData() {
			// 发送请求
			this.$http
				.get('/api/cgoodsData.json')
				// 监听数据返回
				.then(({ data }) => {
					this.goodsData = data;
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