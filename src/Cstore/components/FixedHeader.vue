<template>
	<div class="c-fixedHeader">
		<div class="c-header-top">
			<div class="c-header-left">
				<span @touchend="$router.go(-1)"></span>
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
			<router-link
				class="c-header-right"
				to="/search"
				tag="div"
			>搜索</router-link>
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
<style lang="less">
.c-fixedHeader {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	width: 100%;
	.c-header-top {
		padding: 10px;
		background-color: #EAE9E5;
		line-height: 26px;
		display: flex;
		justify-content: space-between;
		font-size: 14px;
		.c-header-left {
			display: flex;
			align-items: center;
			color: #fff;
			span {
				margin-right: 15px;
				display: inline-block;
				height: 26px;
				width: 60px;
				text-align: center;
				&:first-child {
					width: 26px;
					height: 26px;
					margin-right: 49px;
					background-color: #C1AB96;
					border-radius: 50%;
					position: relative;
					&::before {
						position: absolute;
						top: 5px;
						right: 10px;
						content: '';
						border: 8px solid transparent;
						border-right-color: #fff;
					}
					&::after {
						position: absolute;
						top: 5px;
						right: 7px;
						content: '';
						border: 8px solid transparent;
						border-right-color: #C1AB96;
					}
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
		.c-header-right {
			height: 26px;
			width: 50px;
			text-align: center;
			color: #fff;
			background-color: #C1AB96;
			border-radius: 13px;
		}
	}
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
}
</style>

<script type="text/javascript">
import Header from './Header';
export default {
	// 使用混合
	mixins: [ Header ]
}
</script>