<template>
	<div class="h-home-header">
		<div>
			<p @touchend="$router.push('/')"></p>
		</div>
		<p>{{ msg }}</p>
		<p></p>
	</div>
</template>
<style lang="less">
	.h-home-header {
		display: flex;
		height: 60px;
		line-height: 60px;
		text-align: center;
		background-color: #EAE9E5;
		div {
			flex: 1;
			position: relative;
			p {
				width: 14px;
        		height: 14px;
        		border-top: 2px solid #D3C6B8;
        		border-left: 2px solid #D3C6B8;
        		-webkit-transform: rotateZ(-45deg);     
        		-moz-transform: rotateZ(-45deg);
        		-ms-transform: rotateZ(-45deg);
        		-o-transform: rotateZ(-45deg);    
        		transform: rotateZ(-45deg);
        		position: absolute;
        		top: 50%;
        		left: 50%;
        		margin-left: -7px;
        		margin-top: -7px;
			}
		}
		p:nth-child(2) {
			flex: 5;
			font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
    		font-weight: 700;
    		font-size: 16px;
    		color: #1E1E1E;

		}
		p:last-child {
			flex: 1;
		}
	}
</style>
<script>
	export default {
		data() {
			return {
				msg: ''
			}
		},
		created() {
			if (this.$router.history.current.path === '/homediscount') {
				this.msg = '限时折扣'
			} else {
				this.msg = "本周爆款"
			}
		}
	}

</script>