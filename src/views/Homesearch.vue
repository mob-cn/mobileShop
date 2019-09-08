<template>
	<div class="hh-home-search">
		<div class="hh-search">
			<div class="hh-goOut" @touchend="$router.go(-1)">
				<p class="hh-goOut-p"></p>
			</div>
			<p><input type="text" placeholder="lns风配饰" v-model="msg"></p>
			<span @touchend="search" >搜索</span>
		</div>
		<transition name="fade" mode="in-out">
			<div 
				class="hh-search"
				:style="{ 'position': 'fixed', 'z-index': 5, 'top': 0, 'width': '100%' }"
				v-show="searchIsShow"
				>
				<p :style="{ 'marginRight':'40px' }"><input type="text" placeholder="lns风配饰" v-model="msg" @keyup.enter="search"></p>
				<!-- <span @touchend="search" :style="{ 'marginRight':'20px' }">搜索</span> -->
			</div>
		</transition>
		<div class="hh-search-history" v-show="!searchIsShowData">
			<div class="hh-search-history-header">
				<p>
					<span>历史搜索</span>
					<img src="img/delete.png" @click="deleteHistory" alt="">
				</p>
			</div>
			<div class="hh-search-history-content">
				<mt-badge size="normal" color="#F8E6D3">卫衣</mt-badge>
				<mt-badge size="normal" color="#F8E6D3">领带</mt-badge>
				<mt-badge size="normal" color="#F8E6D3">皮鞋</mt-badge>
				<mt-badge size="normal" color="#F8E6D3">眼镜</mt-badge>
			</div>
			<div class="hh-search-history-content">
				<mt-badge size="normal" color="#F8E6D3">盲僧</mt-badge>
				<mt-badge size="normal" color="#F8E6D3">盖伦</mt-badge>
				<mt-badge size="normal" color="#F8E6D3">奥巴马</mt-badge>
				<img 
					src="img/u1278.png" 
					:style="{ 'width':'12px', 'height':'6px', 'position':'relative', 'top': '10px', 'right': '20px' }"
					 alt=""
				>
			</div>
		</div>
		<div v-show="searchIsShowData"  class="hh-search-list">
			<div class="hh-search-list-shop">
				<p   
					v-for="(item, index) in shopData" 
					:key="index" 
					@touchend="addShopClass(index)"
				><span :class="addShopIsShow === index ? 'hh-shopColor' : '' ">{{ item }}</span></p>
			</div>
			<div class="hh-search-list-header">
				<p 
					:class="addClassIsShow === index ? 'hh-color' : '' " 
					 v-for="(item, index) in data" 
					 :key="index" 
					 @touchend="addClass(index, sort)"
				>{{ item }} 
				<span :class=" addClassIsShow === index && sort ? 'hh-triangleTrue-color' : 'hh-triangleFalse-color' "></span>
				<span :class=" addClassIsShow === index && sort ? 'hh-triangleTrue-color' : 'hh-triangleFalse-color'"></span></p>
			</div>
			<div v-show="addShopIsShow === 0">
				<HomeFaddishCard v-for="(item, index) in this.$store.state.addShop" :key="index" :data=	"item"></HomeFaddishCard>
			</div>
			<div class="hh-search-shop" v-show="addShopIsShow === 1">
				<HomeShop v-for="(item, index) in this.$store.state.homeStore" :key="index" :data-store="item"></HomeShop>
			</div>
			<div class="hh-search-list-no-have-more">没有更多了</div>
		</div>
	</div>
</template>
<style lang="less">
	.hh-home-search {
		.hh-search {
			background-color: #EAE9E5;
			padding: 20px 20px 10px;
			display: flex;
			height: 32px;
			line-height: 32px;
			div.hh-goOut {
				flex: 1;
				position: relative;
				p.hh-goOut-p {
					width: 12px;
        			height: 12px;
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
        			background-color: #EAE9E5;
        			border-radius: 0;
				}
			}
			.fade-enter {
		 		opacity: 0;
			}
			.fade-leave{
			 	opacity:1;
			}
			.fade-enter-active{
			  transition:opacity .5s;
			}
			.fade-leave-active{
			   opacity:0;
			   transition:opacity .5s;
			}
			p {
				flex: 7;
				background-color: #fff;
				border-radius: 20px;
				input {
					border: 0;
					background-color: rgba(255,255,255,0);
					outline:none;
					margin-left: 10px;
					&::-webkit-input-placeholder{
            				color: #C4AF9C;
       					}
				}
			}
			span {
				position: relative;
				right: 10px;
				flex: 2;
				border: 1px solid #C4AF9C;
				border-radius: 20px;
				color:  #fff;
				background-color: #C4AF9C;
				text-align: center;
				margin-left: 20px;
			}
		}
		.hh-search-history {
			.hh-search-history-header {
				height: 60px;
				line-height: 60px;
				padding: 20px 20px 0px 20px;
				p {
					display: flex;
					justify-content: space-between;
					font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
    				font-weight: 700;
    				font-style: normal;
    				font-size: 14px;
    				text-align: left;
    		
    				img {
    					width: 16px;
    					height: 16px;
    					margin: 20px 0px;
    				}
				}
			}
			.hh-search-history-content {
				padding-right: 20%;
				padding-left: 20px;
				padding-top: 10px;
				display: flex;
				justify-content: space-between;

			}
		}
		.hh-search-list {
			.hh-search-list-shop {
				height: 35px;
				line-height: 35px;
				display: flex;
				background-color: #EAE9E5;
				font-size: 12px;
				text-align: center;
				p {
					span {
						&.hh-shopColor {
						color:  rgb(193, 171, 150);
						border-bottom: 2px solid rgb(193, 171, 150);
						}
					}
					&:first-child {
						flex: 3;
						position: relative;
						span {
							position: absolute;
							left: 50%;
							margin-left: -30px;
							width: 50px;
						}
					}
					&:last-child {
						flex: 7;
						span {
							position: absolute;
							left: 25%;
							width: 50px;
						}
					}
				}
				
			}
			.hh-search-list-header {
				background-color: #fff;
				height: 30px;
				display: flex;
				p {
					flex: 1;
					text-align: center;
					margin: 8px;
					font-size: 12px;
					&:last-child {
						border-left: 1px solid #ccc;
						span {
							border: 0;
						}
					}
					span {
						position: relative;
						top: 14px;
						left: 5px;
    					border-left: 4px solid transparent;
    					border-right: 4px solid transparent;
    					&:last-child {
							top: -13px;
							left: -3px;
							border-top: 0;
    						border-bottom: 5px solid #15161A;
    					}
    					&:first-child {
    						border-bottom: 0;
    						border-top: 5px solid #15161A;
    					}

					}
					span.hh-triangleTrue-color {
    					border-top-color:  rgb(193, 171, 150);
    					border-bottom-color:  #15161A;

    				}
    				span.hh-triangleFalse-color {
    					border-bottom-color:  rgb(193, 171, 150);
    					border-top-color:  #15161A;
    				}
				}
				p.hh-color {
					color:  rgb(193, 171, 150);
				}
			}
			.hh-search-list-no-have-more {
				text-align: center;
				height: 40px;
				line-height: 40px;
				color: rgb(193, 171, 150);
			}

		}
		.home-faddish-card .h-card {
			background-color: #fff;
		}

	}
</style>
<script>
	// 引入homeShop组件
	import HomeShop from '../components/HomeShop.vue';
	// 引入HomeProductCard组件
	import HomeFaddishCard from '../components/HomeFaddishCard.vue';
	// 引入badege组件
	import { Badge } from 'mint-ui';

	export default {
		// 注册
		components: { HomeFaddishCard, Badge, HomeShop },
		data() {
			return {
				data: [ '综合', '销量', '价格', '筛选' ],
				shopData: [ '商品', '店铺' ],
				msg: '',
				addClassIsShow: '',
				addShopIsShow: 0,
				searchIsShow: false,
				searchIsShowData: false,
				sort: true
			}
		},
		created() {
			// 发送请求获取商店数据
			this.$http
				.get('/api/h_home_store.json')
				.then(({ data }) => this.$store.dispatch('syncAddHomeStore', data.data))
			// 给window添加scroll事件
			// 备份this
			let me = this;
			window.addEventListener('scroll', function() {
				if (this.document.documentElement.scrollTop > 61) {
					me.searchIsShow = true;
				} else {
					me.searchIsShow = false;
				}
			})
		},
		methods: {
			search() {
				this.$store.commit('addShopSearch', this.msg);
				this.searchIsShowData = true;
				this.msg = '';
			},
			deleteHistory() {
				this.searchIsShowData = true;
			},
			addClass(index, sort) {
				this.addClassIsShow = index;
				this.sort = !this.sort;
				this.$store.commit('searchPriceShop', { index, sort })
			},
			addShopClass(index) {
				this.addShopIsShow = index;
			}
		}
	}
</script>