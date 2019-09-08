<template>
	<div class="xzw-header">
		<h3>{{title}}</h3>
	</div>
</template>

<style lang="less">
	.xzw-header {
		background-color: #C1AB96;
		height: 100px;
		width: 100%;
		display: flex;
		align-items: center;
		padding-left: 10px;
		h3 {
			color: #fff;
			font-size: 25px;
		}
	}
</style>

<script>
	export default {
		props: ['title']
	}
</script>