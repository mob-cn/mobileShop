<template>
	<div class="h-faddish">
		<div class="h-faddish-header">
			<HomeHeader></HomeHeader>
		</div>
		<div class="h-home-faddish-list">
			<HomeFaddish v-for="(item, index) in this.$store.state.homeFaddishCard" :key="index" :data=	"item"></HomeFaddish>
		</div>
		<div class="h-faddish-no-have-more">
			<p>没有更多了哦~</p>
		</div>
	</div>	
</template>
<style lang='less'>
	.h-faddish-header {
			width: 100%;
			height: 60px;
			position: fixed;
			z-index: 5;
		}
	.h-home-faddish-list {
		padding-top: 60px;
	}
	.h-faddish-no-have-more {
   			p {
   				font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
    			font-weight: 700;
    			height: 30px;
    			line-height: 30px;
    			font-size: 14px;
    			color: #8E7E6F;
    			text-align: center;
   			}
		}
</style>
<script>
	import HomeHeader from '../components/HomeHeader.vue';
	import HomeFaddish from '../components/HomeFaddishCard.vue';

	export default {
		components: { HomeHeader, HomeFaddish }
	}
</script>