<template>
	<div class="h-discount">
		<div class="h-discount-header">
			<HomeHeader></HomeHeader>
		</div>
		<div class="h-discount-title">
			<div :class=" active === 'tab-container1' ? 'h-discount-title-hover' : '' " 
				@touchend="toggle('tab-container1')">
				<p>7月8日</p>
				<p>20:00</p>
				<p>进行中</p>
			</div>
			<div :class=" active === 'tab-container2' ? 'h-discount-title-hover' : '' " 
				@touchend="toggle('tab-container2')">
				<p>7月8日</p>
				<p>20:00</p>
				<p>进行中</p>
			</div>
			<div :class=" active === 'tab-container3' ? 'h-discount-title-hover' : '' "   
				@touchend="toggle('tab-container3')">
				<p>7月8日</p>
				<p>20:00</p>
				<p>进行中</p>
			</div>
			<div :class=" active === 'tab-container4' ? 'h-discount-title-hover' : '' "   
				@touchend="toggle('tab-container4')">
				<p>7月8日</p>
				<p>2:00</p>
				<p>进行中</p>
			</div>
			<div :class=" active === 'tab-container5' ? 'h-discount-title-hover' : '' "  
				@touchend="toggle('tab-container5')">
				<p>7月8日</p>
				<p>20:00</p>
				<p>进行中</p>
			</div>
		</div>
		<div class="h-discount-list">
			<mt-tab-container v-model="active" swipeable>
  				<mt-tab-container-item id="tab-container1">
  				 	<HomeFaddishCard v-for="(item, index) in this.$store.state.homeFaddishCard" :key="index" :data="item"></HomeFaddishCard>
  				</mt-tab-container-item>
  				<mt-tab-container-item id="tab-container2">
  				 	<HomeFaddishCard v-for="(item, index) in this.$store.state.homeFaddishCard" :key="index" :data="item"></HomeFaddishCard>
  				</mt-tab-container-item>
  				<mt-tab-container-item id="tab-container3">
  				 	<HomeFaddishCard v-for="(item, index) in this.$store.state.homeFaddishCard" :key="index" :data="item"></HomeFaddishCard>
  				</mt-tab-container-item>
  				<mt-tab-container-item id="tab-container4">
  				 	<HomeFaddishCard v-for="(item, index) in this.$store.state.homeFaddishCard" :key="index" :data="item"></HomeFaddishCard>
  				</mt-tab-container-item>
  				<mt-tab-container-item id="tab-container5">
  				 	<HomeFaddishCard v-for="(item, index) in this.$store.state.homeFaddishCard" :key="index" :data="item"></HomeFaddishCard>
  				</mt-tab-container-item>
			</mt-tab-container>
		</div>
		<div class="h-discount-no-have-more">
			<p>没有更多了哦~</p>
		</div>
	</div>
</template>
<style lang="less">
	.h-discount {
		.h-discount-header {
			width: 100%;
			height: 60px;
			position: fixed;
			z-index: 5;
		}
		.h-discount-title {
			display: flex;
			position: fixed;
			margin-top: 60px;
			width: 100%;
			height: 60px;
			z-index: 5;
			div {
				flex: 1;
				text-align: center;
				font-family: '微软雅黑';
    			font-size: 12px;
    			background-color: #C1AB96;
    			&.h-discount-title-hover {
    				background-color: rgba(209, 8, 42, 1);
    				color: #fff;
    			}
				p:nth-child(2) {
					font-size: 20px;
				}
			}
		}
		.h-discount-list {
			padding-top: 120px;
		}
		.h-discount-no-have-more {
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
	}
</style>
<script>
	// 引入头部组件
	import HomeHeader from '../components/HomeHeader';
	// 引入HomeFaddishCard组件
	import HomeFaddishCard from '../components/HomeFaddishCard';
	// 引入组件
	import { TabContainer, TabContainerItem } from 'mint-ui';
	export default {
		components: { HomeHeader, HomeFaddishCard, TabContainer, TabContainerItem},

		data() {
			return {
				active: 'tab-container1',
				data: []
			}
		},
		methods: {
			toggle(id) {
				this.active = id;
			}
		}
	}
</script>
