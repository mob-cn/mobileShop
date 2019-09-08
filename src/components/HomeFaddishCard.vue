<template>
	<router-link tag="div" class="home-faddish-card" to="/productdetail">
		<div class="h-img">
			<img :src="this.data.img" alt="">
		</div>
		<div class="h-card">
			<p>{{ this.data.closeName }}</p>
			<p>{{ this.data.collect}}人已收藏</p>
			<p><span>￥&nbsp;{{ this.data.newPrice }}</span><span>马上抢</span></p>
			<p><span>￥{{ this.data.oldPrice }}</span><span>已售{{ this.data.HaveBeenSold }}件</span></p>
		</div>
	</router-link>
</template>
<style lang="less">
	.home-faddish-card {
		display: flex;
		height: 120px;
		margin: 20px;
		border-radius: 8px;
		-webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.349019607843137);
		.h-img {
			flex: 1;
			width: 120px;
			height: 120px;
			img {
				width: 120px;
				height: 120px;
			}
		}
		.h-card {
			flex: 5;
			p {
				margin: 6px;
				font-family: '微软雅黑';
				font-weight: 400;
    			font-size: 14px;
			}
			p:nth-child(2) {
    			color: #666666;
    			margin-top: 0;
			}
			p:nth-child(3) {
				display: flex;
				justify-content: space-between;
				font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
    			font-weight: 700;
    			font-size: 18px;
    			color: #D1082A;
    			margin-bottom: 0;
    			margin-top: 15px;
    			span:last-child {
    				display: block;
    				background-color: #D1082A;
    				font-family: '微软雅黑';
    				font-weight: 400;
    				font-style: normal;
    				font-size: 12px;
    				color: #FFFFFF;
    				height: 24px;
    				line-height: 24px;
    				text-align: center;
    				width: 60px;
    				border-radius: 5px;
    				

    			}
			}
			p:last-child {
				display: flex;
				justify-content: space-between;
				font-family: 'Arial Normal', 'Arial';
    			font-style: normal;
    			color: #999999;
    	
			}
		}
	}
</style>
<script>
	export default {
		props: [ 'data' ]

	}
</script>