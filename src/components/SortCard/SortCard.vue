<template>
	<div>
		<div class='xzw-sort-car' v-for="(item, index) in msg" :key="index">
			<span class="xzw-sort-car-span">{{item.title}}</span>
			<div class="xzw-sort-car-grid">
				<Grid :column-num="3">
					<GridItem
					  v-for="(value,idx) in item.article"
					  :key="index + '-' + idx"
					  :icon="value.img"
					  :text="value.name"
					  to="/"
					/>
				</Grid>
			</div>
		</div>
	</div>
</template>
<script>
	import { Grid, GridItem } from 'vant';
	import './SortCard.less'
	export default {
		components:{
			Grid,
			GridItem
		},
		data() {
			return {
				data: 12
			}
		},
		props: ['msg']
	}
</script>