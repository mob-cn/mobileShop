<template>
	<router-link tag="div" class="h-HomeProductCard" to="/productdetail">
		<img :src="this.dataRecommed.img" alt="">
		<p>{{ this.dataRecommed.text }}</p>
		<div>
			<p>满300减30</p>
			<p>店铺领劵</p>
		</div>
		<p>￥{{ this.dataRecommed.price }}</p>
	</router-link>
</template>
<style type="text/css" lang="less">
	.h-HomeProductCard {
		border-radius: 8px;
		background-color: #fff;
		-webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.349019607843137);
		width: 48%;
		float: left;
		margin-bottom: 15px;
		font-family: '微软雅黑';
    	font-weight: 400;
		p {
    		margin-left: 10px;
    		font-size: 14px;
    		&:last-child {
    			font-weight: 700;
    		}
		}
		div {
			display: flex;
			p {
    			font-size: 12px;
    			color: #8E7E6F;
				border: 1px solid #8E7E6F;
				&:last-child {
					margin: 0;
					font-weight: 400;
					border-left-style: dashed; 
					border-top-left-radius: 3px; 
					border-bottom-left-radius: 3px; 

				}
				&:first-child {
					border-right: 0; 
					border-top-right-radius: 3px; 
					border-bottom-right-radius: 3px; 
				}
			}
		}
		img {
			width: 100%;
			height: 165px;
			border-radius: 8px;
		}
		&:nth-child(odd) {
			margin-right: 10px;
		};
	}
</style>
<<script>
	export default {
		props: [ 'dataRecommed' ],
	}
</script>