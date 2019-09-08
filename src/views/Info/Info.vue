<template>
	<section class="xzw-info">
		<Header title="消息"></Header>
		<div class="xzw-info-content" ref="content">
			<div class="replaceul">
				<div class='replaceli'>
					<router-link to="/">
						<div><img :src="img" alt=""></div>
						<div>
							<p><span>OMINI官方旗舰店</span><span>09:22</span></p>
							<p><span>请核对您的付款信息</span><span>2</span></p>
						</div>
					</router-link>
				</div>
				<p class="clue">没有更多了哦~</p>
			</div>
		</div>
		<div class="xzw-info-nav">
			<router-link to='/'>
				<div>
					<span></span>
					<span>物流信息</span>
				</div>
			</router-link>
			<router-link to='/'>
				<div>
					<span></span>
					<span>物流信息</span>
				</div>
			</router-link>
			<router-link to='/'>
				<div>
					<span></span>
					<span>物流信息</span>
				</div>
			</router-link>
		</div>
	</section>
</template>


<script>
	import './Info.less';
	import BScroll from 'better-scroll';
	export default {
		data() {
			return {
				img: 'img/4.png'
			}
		},
		methods: {
			_initScroll() {
               new BScroll(this.$refs.content, {
                    click: true,
                })
            }
		},
		mounted() {
			console.log(this)
            this.$nextTick(() => {
                this._initScroll()            
            })
        }
	}
</script>