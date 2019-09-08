<template>
	<div class="c-store">
		<!-- 头部 -->
		<Header ref="headerHeight"></Header>
		<!-- 头部固定蒙版 -->
		<FixedHeader v-if="isShowFixd"></FixedHeader>
		<!-- 路由 -->
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
// 引入组件
import Header from '../../components/Header';
import FixedHeader from '../../components/FixedHeader';

export default {
    // 注册组件
    components: { Header, FixedHeader },
	data() {
		return {
			isShowFixd: false
		}
	},
	methods: {
		//滚动到一个高度 贴顶
		handlerScroll() {
			// 获取当前页面滚动值
			let scrollTop =
			document.documentElement.scrollTop || document.body.scrollTop;
			// 获取Header组件高度
			if (this.$refs.headerHeight) {
				let offsetTop = this.$refs.headerHeight.$el.clientHeight;
				this.isShowFixd = scrollTop > offsetTop;
			}
		}
	},
	mounted() {
		// 监听滚动事件
		window.addEventListener("scroll", this.handlerScroll);
	}
}
</script>