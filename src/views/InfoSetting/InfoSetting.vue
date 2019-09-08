<template>
	<div class="xzw-infosetting">
		<InfoOtherPageHeader
			text="通知管理"
			color="#EAE9E5"
			rightCategory=""
		></InfoOtherPageHeader>
		<div class="xzw-infosetting-box">
			<span>消息免打扰</span>
			<van-switch
			  v-model="checked"
			  active-color="#C1AB96"
			  inactive-color="#F1F0ED"
			   size="24px"
			/>
		</div>
		<p class="xzw-infosetting-tooltip">设置后，所有通知将用红点显示，不再显示未读数字。</p>
	</div>
</template>

<style lang="less">
	.xzw-infosetting {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background-color: #EAE9E5;
		.xzw-infosetting-box {
			width: 100%;
			height: 70px;
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.xzw-infosetting-tooltip {
			margin-top: 10px;
			font-size: 12px;
		}
	}
</style>

<script>
	import InfoOtherPageHeader from '../../components/InfoOtherPageHeader/InfoOtherPageHeader.vue';
	export default {
		components: {InfoOtherPageHeader},
		data() {
			return {
				checked: false
			}
		}
	}
</script>