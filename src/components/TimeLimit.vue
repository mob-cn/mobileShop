<template>
	<div class='h-timeLimit'>
		<ul>
			<li>
				<img src="../../public/img/pic_u810-0.png" alt="">
				<p>OMINI简约上衣T恤</p>
				<p>￥523.6</p>
				<p><span>原</span><span>￥1233.00</span></p>
			</li>
			<li>
				<img src="../../public/img/pic_u810-1.png" alt="">
				<p>OMINI宽松长袖毛衣</p>
				<p>￥523.6</p>
				<p><span>原</span><span>￥1233.00</span></p>
			</li>
			<li>
				<img src="../../public/img/pic_u810-2.png" alt="">
				<p>OMINI简约职场风</p>
				<p>￥523.6</p>
				<p><span>原</span><span>￥1233.00</span></p>
			</li>
		</ul>
	</div>
</template>
<style type="text/css" lang="less">
	.h-timeLimit {
		ul {
			-webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.349019607843137);
			display: flex;
			height: 190px;
			background-color: #fff;
			border-radius: 15px;
			li {
				flex: 1;
				margin-left: 5px;
    			font-size: 14px;
				p:nth-child(3) {
    				color: #C1AB96;
				}
				p:nth-child(4) {
    				span {
    					color: #666666;
    					text-decoration:line-through;
    					&:first-child {
    						background-color: #999999;
    						text-decoration: none;
    						color: #FFF;
    					}
    				}
    			}
			}
		}
	}
</style>
<script>
	
	export default {

		// props: [ 'dataList' ],
		// created() {
		// 	console.log(this.dataList)
		// }
		
	}	
</script>