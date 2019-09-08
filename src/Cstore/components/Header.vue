<template>
	<div class="c-header">
		<div class="c-header-top">
			<div class="c-header-title">
				<h2>OMINI官方旗舰店</h2>
				<span></span>
			</div>
			<div class="c-header-msg">
				<span>信用值 {{data.creditNum}}</span>
				<span>关注数量 {{data.focusNum}}</span>
			</div>
			<div class="c-header-footer">
				<router-link
					to="/search"
					tag="span"
				>搜索</router-link>
				<router-link
					to="/store/home"
					tag="span"
					:style="$route.name === 'home' ? 'color: #C1AB96;' : ''"
				>首页</router-link>
				<router-link
					to="/store/goods"
					tag="span"
					:style="$route.name === 'goods' ? 'color: #C1AB96;' : ''"
				>商品</router-link>
				<div :style="$route.name === 'goods' ? 'left: 150px;' : 'left: 75px;'"></div>
			</div>
		</div>
		<!-- 底部排序按钮 -->
		<div class="c-extra" v-if="$route.name === 'goods'">
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
	</div>
</template>
<style lang="less" >
.c-header {
	width: 100%;
	.c-header-top {
		padding: 10px;
		background-color: #EAE9E5;
		line-height: 26px;
		.c-header-title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			h2 {
				font-size: 18px;
			}
			span {
				width: 15px;
				height: 15px;
				background-color: #C1AB96;
				border-radius: 50%;
				color: #fff;
				line-height: 12px;
				text-align: center;
				font-size: 12px;
				position: relative;
				&::before {
					content: "";
					width: 3px;
					height: 3px;
					border: 2px solid transparent;
					border-top-color: #fff;
					border-right-color: #fff;
					position: absolute;
					top: 4px;
					right: 8px;
					transform:rotate(45deg);
				}
				&::after {
					content: "";
					width: 3px;
					height: 3px;
					border: 2px solid transparent;
					border-top-color: #fff;
					border-left-color: #fff;
					position: absolute;
					top: 4px;
					right: 0px;
					transform:rotate(-45deg);
				}
			}
		}
		.c-header-msg {
			color: #fff;
			font-size: 12px;
			line-height: 30px;
			span {
				margin-right: 25px;
			}
		}
		.c-header-footer {
			color: #fff;
			font-size: 14px;
			span {
				margin-right: 15px;
				display: inline-block;
				height: 26px;
				width: 60px;
				text-align: center;
				&:first-child {
					color: #C1AB96;
					border: 1px solid #C1AB96;
					border-radius: 13px;
				}
			}
			position: relative;
			div {
				transition: all .5s;
				position: absolute;
				width: 60px;
				border-bottom: 2px solid #C1AB96;
				bottom: -5px;
				left: 75px;
			}
		}
	}
	.c-extra {
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
}
</style>

<script type="text/javascript">
export default {
	data() {
		return {
			data: {},
			list: 'all',
			priceSort: 'down'
		}
	},
	methods: {
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
		},
		getData() {
			// 发送请求
			this.$http
				.get('/api/cheaderData.json')
				// 监听数据返回
				.then(({ data }) => {
					// console.log(data)
					this.data = data;
				})
		}
	},
	created() {
		// 更新数据
		this.getData();
	}
}
</script>

