<template>
	<router-link tag="div" class="h-home-shop" :to="this.dataStore.http">
		<div class="h-home-shop-header">
			<div><p>{{ dataStore.storeName }}</p><p>信用值{{ this.dataStore.creditValue }}</p></div>
			<div><span>进店</span></div>
		</div>
		<ul class="h-home-shop-img">
			<li><img :src="this.dataStore.img1" alt=""></li>
			<li><img :src="this.dataStore.img2" alt=""></li>
			<li><img :src="this.dataStore.img3" alt=""></li>
		</ul>
	</router-link>
</template>
<style lang="less">
		.h-home-shop {
			height: 155px;
			margin: 20px;
			border-radius: 8px;
			-webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.349019607843137);
			.h-home-shop-header {
				display: flex;
				div {
					flex: 1;
					height: 40px;
					p {
						margin-top: 5px;
						margin-left: 10px;
						&:first-child {
							font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
    						font-weight: 700;
    						font-size: 12px;
						}
						&:last-child {
							font-family: '微软雅黑';
    						font-weight: 400;
    						font-size: 10px;
    						color: #EAE9E5;
						}
					}
				}
				div:last-child {
					display: flex;
					flex-direction: row-reverse;
					span {
						align-self: center;
						margin-right: 10px;
						width: 54px;
						height: 24px;
						line-height: 24px;
						text-align: center;
						font-family: '微软雅黑';
    					font-weight: 400;
    					font-size: 12px;
    					color: #C1AB96;
    					border: 1px solid #C1AB96;
    					border-radius: 16px;
    					box-sizing: border-box;
					}
				}
			}
			.h-home-shop-img {
				display: flex;
				justify-content: space-between;
				padding: 0 10px 10px 10px;
				li {
					width: 100px;
					height: 100px;
					img {
						width: 100%;
						height: 100%;
					}
				}
			}

		}
</style>
<script>
	export default {
		props: [ 'dataStore' ]
	}
</script>