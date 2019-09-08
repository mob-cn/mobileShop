<template>
	<div class="xzw-info-other-page-header">
		<svg class="icon" width="20px" height="20px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
		 @touchend="goBack"
		><path fill="#C1AB96" d="M369.728 512l384.768-384.704a48.64 48.64 0 0 0 0.896-68.8 48.64 48.64 0 0 0-68.736 0.96L269.44 476.736a48.704 48.704 0 0 0-11.136 17.344c-1.024 2.304-1.024 4.736-1.472 7.04-0.896 3.648-2.048 7.168-2.048 10.88 0 3.712 1.152 7.232 1.984 10.88 0.512 2.368 0.512 4.8 1.472 7.04a48.704 48.704 0 0 0 11.136 17.344l417.216 417.28a48.576 48.576 0 0 0 68.736 0.96 48.576 48.576 0 0 0-0.896-68.736L369.728 512z" /></svg>
		<span v-text="text"></span>
		<span 
			:style="{opacity: rightCategory ? '' : 0}"

		>{{rightCategory || "$nbsp"}}</span>
	</div>
</template>

<script>
	import './InfoOtherPageHeader.less';
	export default {
		props: ["rightCategory", "text", "color"],
		methods: {
			goBack() {
				console.log(this.$router)
				this.$router.go(-1)
			}
		}
	}
</script>