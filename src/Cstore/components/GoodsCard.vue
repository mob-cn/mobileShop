<template>
	<div class="c-goods-contentCard">
		<img :src="data.img" alt="">
		<div class="c-content-footer">
			<h3>{{data.title}}</h3>
			<p class="c-footer-tax">
				<span>{{data.cut}}</span>
				<span>店铺领券</span>
			</p>
			<p>¥ {{data.price}}</p>
		</div>
	</div>
</template>

<style lang="less">
.c-goods-contentCard {
	box-shadow: 2px 2px 4px rgba(0 ,0, 0, .3),
				-2px -2px 4px rgba(0, 0, 0,.3);
	margin-bottom: 20px;
	width: 45%;
	overflow: hidden;
	border-radius: 5px;
	background-color: #fff;
	img {
		width: 100%;
		height: 190px;
	}
	.c-content-footer {
		padding: 5px 10px;
		h3 {
			font-weight: normal;
			font-size: 16px;
			line-height: 20px;
		}
		p {
			font-size: 14px;
			line-height: 24px;
			&:last-child {
				font-weight: bold;
			}
		}
		.c-footer-tax {
			span {
				color: #C1AB96;
				border: 1px solid #8E7E6F;
				border-radius: 3px;
				padding: 2px;
				font-size: 12px;
				&:first-child {
					border-right: none;
				}
				&:last-child {
					border-left: 1px dashed #8E7E6F;
				}
			}
			
		}

	}
}
</style>

<script type="text/javascript">
export default {
	props: [ 'data' ]
}
</script>