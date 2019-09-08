<template>
	<div class="c-search">
		<!-- 头部 -->
		<div class="c-search-hd">
			<div
				class="c-hd-left"
				@touchend="$router.go(-1)"
			></div>
			<input
				type="text"
				class="c-hd-center"
				placeholder="Ins风配饰"
				v-model="inputMsg"
			>
			<div
				class="c-hd-right"
				@touchend="getData"
			>店内搜</div>
		</div>
		
		<!-- 无搜索结果 -->
		<div
			class="c-noResult"
			v-if="noResult"
		>
			<img src="/img/2019-07-28_211159.png">
			<p>没有搜索到匹配的结果，换个关键词试试吧~</p>
		</div>
		<!-- 有搜索结果 -->
		<div
			class="c-hadResult"
			v-else-if="searchData.contentList.length"
		>
			<!-- 底部排序按钮 -->
			<div class="c-extra">
				<div
					:class="'c-extra-all ' + (list === 'all' ? 'c-extra-action' : '')"
					@touchend="listAll"
				>综合</div>
				<div
					:class="'c-extra-sales ' + (list === 'sales' ? 'c-extra-action' : '')"
					@touchend="listSales"
				>销量</div>
				<div 
					:class="'c-extra-price ' + (list === 'price' ? 'c-extra-action' : '')"
					@touchend="listPrice"
				>
					<div class="c-price-left">价格</div>
					<div class="c-price-right">
						<p 
							:class="(priceSort === 'up' && list === 'price') ? 'c-price-actionBottom' : ''"
							@touchend="priceSortUp"
						></p>
						<p
							:class="(priceSort === 'down' && list === 'price') ? 'c-price-actionTop' : ''"
							@touchend="priceSortDown"
						></p>
					</div>
				</div>
			</div>
			<div class="c-goods">
				<!-- 内容区域 -->
				<div class="c-goods-content">
					<div class="c-content-bd">
						<goodsCard
							v-for="(item, index) in searchData.contentList"
							:key="index"
							:data="item"
						></goodsCard>
					</div>
				</div>
			</div>
		</div>
		
		<!-- 默认页面 -->
		<div
			class="c-search-home"
			v-else
		>
			<h3>热门搜索</h3>
			<div class="c-search-homeList">
				<div
					v-for="(item, index) in tagList"
					:key="index"
				>{{item.ports}}</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" >
.c-search {
	.c-search-hd {
		background-color: #EAE9E5;
		display: flex;
		padding: 25px 15px 10px;
		justify-content: space-between;
		font-size: 14px;
		.c-hd-left {
			width: 20px;
			height: 26px;
			margin-right: 10px;
			position: relative;
			&::before {
				position: absolute;
				top: 5px;
				right: 10px;
				content: '';
				border: 8px solid transparent;
				border-right-color: #C1AB96;
			}
			&::after {
				position: absolute;
				top: 5px;
				right: 7px;
				content: '';
				border: 8px solid transparent;
				border-right-color: #EAE9E5;
			}
		}
		.c-hd-center {
			flex: 1;
			height: 22px;
			border: none;
			border-radius: 13px;
			line-height: 22px;
			padding: 2px 10px;
		}
		.c-hd-right {
			margin-left: 10px;
			width: 50px;
			height: 26px;
			line-height: 26px;
			text-align: center;
			background-color: #C1AB96;
			border-radius: 13px;
			color: #fff;
		}
	}
	// 默认页面
	.c-search-home {
		margin: 30px auto;
		width: 90%;
		padding: 15px;
		border-radius: 5px;
		font-size: 14px;
		box-shadow: 2px 2px 3px rgba(0 ,0, 0, .1),
					-2px -2px 3px rgba(0, 0, 0,.1);
		h3 {
			line-height: 30px;
			margin-bottom: 15px;
		}
		.c-search-homeList {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			text-align: center;
			color: #fff;
			div {
				width: 80px;
				height: 26px;
				line-height: 26px;
				background-color: #F8E6D3;
				border-radius: 13px;
				margin: 0 15px 10px 0;
			}
		}
	}
	// 无搜索结果
	.c-noResult {
		margin: 50px auto;
		text-align: center;
		img {
			margin-bottom: 30px;
		}
		p {
			color: #8E7E6F;
			font-size: 14px;
		}
	}
	// 有搜索结果
	.c-hadResult {
		// 排序
		.c-extra {
			background-color: #fff;
			padding: 6px 10px;
			font-size: 12px;
			line-height: 26px;
			display: flex;
			justify-content: flex-start;
			.c-extra-all,
			.c-extra-sales,
			.c-extra-price {
				margin-right: 15px;
				padding-left: 15px;
				width: 60px;
				height: 26px;
			}
			.c-extra-all,
			.c-extra-sales {
				position: relative;
				&::after {
					content: "";
					position: absolute;
					border: 5px solid transparent;
					border-top-color: #000; 
					top: 11px;
					right: 6px;
				}
			}
			.c-extra-price {
				display: flex;
				justify-content: space-between;
				padding-right: 5px;
				padding-left: 10px;
				.c-price-right {
					position: relative;
					p {
						position: absolute;
						border: 5px solid transparent;
						&:first-child {
							border-bottom-color: #000;
							top: 3px;
							right: 0;
						}
						&:last-child {
							border-top-color: #000;
							top: 15px;
							right: 0;
						}
						// 价格点击时
						&.c-price-actionBottom {
							border-bottom-color: #fff;
						}
						&.c-price-actionTop {
							border-top-color: #fff;
						}
					}	
				}
			}
			// 综合、销量，点击时
			.c-extra-action {
				background-color: #C1AB96;
				color: #fff;
				border-radius: 13px;
				font-weight: bold;
				&::after {
					border-top-color: #fff;
				}
			}
		}
		// 商品
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
	}
}
</style>

<script type="text/javascript">
import GoodsCard from '../../components/GoodsCard';
export default {
	components: { GoodsCard },
	data() {
		return {
			tagList: [
					{ ports: '耳环'},
					{ ports: '手链'},
					{ ports: '戒指'},
					{ ports: '耳环'},
					{ ports: '耳环'},
					{ ports: '耳环'},
					{ ports: '耳环'},
					{ ports: '耳环'}
			],
			searchData: { contentList: [] },
			noResult: false,
			inputMsg: '',
			list: 'all',
			priceSort: 'down'
		}
	},
	methods: {
		getData() {
			if (this.inputMsg) {
				// 发送请求
				this.$http
					.get('/api/cgoodsData.json')
					// 监听数据返回
					.then(({ data }) => {
						// console.log(data);
						if (data) {
							this.searchData = data;
							this.noResult = false;
						} else {
							this.noResult = true;
						}
					})
			} else {
				this.noResult = true;
			}
			
		},
		listAll() {
			this.list = 'all';
		},
		listSales() {
			this.list = 'sales';
		},
		listPrice() {
			this.list = 'price';
		},
		priceSortDown() {
			this.priceSort = 'down';
		},
		priceSortUp() {
			this.priceSort = 'up';
		}
	}
}
</script>

