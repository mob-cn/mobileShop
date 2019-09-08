<template>
	<div class="h-login">
		<div class="h-header">
			<div>
				<span class="title">OMINI.cn</span>
			</div>
			<span class="delete" @touchend="$router.go(-1)">x</span>
		</div>
		<div class="h-content">
			<form :model="data" >
				<p><input type="text" οninput="value=value.replace(/[^\d]/g,'')" maxlength="11" placeholder="手机号" v-model="data.username"></p>
				<p><input class="h-verify" type="text"  maxlength="4" οninput="value=value.replace(/[^\d]/g,'')" placeholder="验证码" v-model="data.verify">
				<span @touchend="verification">发送验证码</span></p>
				<div class="h-btn" @touchend="submitData"><span>登录</span></div>
			</form>
		</div>
		<div class="h-footer">
			<div class="h-other">
				<div class="h-left"></div>
				<div>社交账号登录</div>
				<div class="h-right"></div>
			</div>
			<div class="h-img">
				<img src="../../public/img/qq.png" alt="">
				<img src="../../public/img/wx.png" alt="">
				<img src="../../public/img/wb.png" alt="">
			</div>
		</div>
	</div>
</template>
<style type="text/css" lang="less">
	.h-login {
		padding: 20px;
		height: 772px;
		background-image: url('../../public/img/bgc.png');
		background-size: cover;
		display: flex;
		flex-direction: column;
		color: rgb(230, 230, 232);
		.h-header {
			flex: 1;
			display: flex;
			justify-content: space-between;
			div {
				display: flex;
				flex-direction: column-reverse;
				.title {
					font-family: "微软雅黑 Bold", "微软雅黑 Regular";
   					font-weight: 700;
   			 		font-style: normal;
    				font-size: 28px;					
				}
			}
			.delete {
				width: 28px;
				height: 28px;
				border-radius: 50%;
				background-color: #C1AB96;
				text-align: center;
				font-weight: 700;
				font-size: 20px;
				color: #695D55;
			}
		}
		.h-content {
			flex: 4;
			form {
				position: relative;
				margin-top: 40px;
				width: 100%;
				p {
					height: 50px;
					width: 100%;
					margin-top: 5px;
					border-bottom: 2px solid #A19B97;
					position: relative;
					span {
						position: absolute;
						right: 18px;
						top: 20px;
					}
					input {
						width: 100%;
						margin-top: 20px;
						border: 0;
						background-color: rgba(255,255,255,0);
						outline:none;
						color: #fff;
						&::-webkit-input-placeholder{
            				color: #fff;
            				font-weight: 300;
       					}
						&.h-verify {
							width: 50%;
						}
					}
				}
				div.h-btn {
    					width: 300px;
    					height: 48px;
    					line-height: 48px;
    					background-color: rgba(193, 171, 150, 1);
    					border-radius: 24px;
    					font-size: 14px;
    					text-align: center;
    					margin-top: 50px;
    					position: absolute;
    					left: 50%;
    					margin-left: -150px;
    					span {
    						font-size: 14px;
    						color: #fff;
    					}
					}

			}
		}
		.h-footer {
			flex: 3;
			padding: 30px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			.h-other {
				display: flex;
				justify-content: space-evenly;
				div {
					flex: 2;
					width: 100%;
					text-align: center;
					&.h-left,
					&.h-right {
						align-self: center;
						flex: 1;
						height: 2px;
						background-color: #A19B97;
					}
				}
			}
			.h-img {
				margin-top: 20px;
				display: flex;
				justify-content: space-around;
			}
		}
	}
</style>
<script>
	export default {
		// 数据
		data() {
			return {
				data: {
					username: '',
					verify: ''
				}
			}
		},
		// 方法
		methods: {
			verification(e) {
				let num = 60;
				let timer = setInterval(() => {
					num--
					e.target.innerHTML = num;
					if (num === 0) {
						clearInterval(timer)
						e.target.innerHTML = "发送验证码";

					}
				}, 1000)
			},
			// 登录
			submitData() {
				this.$http
					.get('api/h_login.json')
					.then(({ data }) => {
						if (data.errno === 0) {
							this.$store.commit("addPhome", 12345678910)
							this.$router.push('/')
						}
					})
			}
		}
	}
</script>