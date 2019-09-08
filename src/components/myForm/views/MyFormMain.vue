<template>
<div class="myformmain">
        <div class="w-headertab" :style="{width: htmlWidth + 'px'}">
        <div class="w-header-tab">
            <span @click='onClickLeft'></span>
            <p>我的订单</p>
        </div>
        <div class="w-headernav">
            <router-link to="/myForm/main/all" tag="span">全部</router-link>
            <router-link to="/myForm/main/payment" tag="span">待付款</router-link>
            <router-link to="/myForm/main/shipments" tag="span">待发货</router-link>
            <router-link to="/myForm/main/harvest" tag="span">待收货</router-link>
            <router-link to="/myForm/main/evaluate" tag="span">待评价</router-link>
        </div>
    </div>
    <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> -->
        <div class="w-page">
            <transition :name="transitionName">   
                <router-view />
            </transition>
        </div>
    <!-- </van-pull-refresh> -->
    <van-overlay :show="!$store.state.loadingComplete" />
    <van-loading color="#1989fa" v-if="!$store.state.loadingComplete" />
</div>
</template>

<script>
import { Toast, Loading, Overlay, PullRefresh } from 'vant';
export default {
    data() {
        return {
            transitionName: '',
            isLoading: false,
            htmlWidth: ''
        }
    },
    methods: {
        onClickLeft() {
            this.$router.replace('/mine');
        },
        getOriginalData() {
            this.$http
                .get('/api/myform/myformall.json')
                .then(({ data }) => {if (data.data) this.$store.commit('setOriginalMyForm', data.data)})
                .catch(err => console.log(err))
        },
        onRefresh() {
            setTimeout(() => {
                this.$toast({
                    message: '刷新成功',
                    forbidClick: true,
                    duration: 500
                });
                this.isLoading = false;
            }, 500);
        },
        getHtmlWidth() {
            this.htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
        }
    },
    components: {
        [Toast.name]: Toast, 
        [Loading.name]: Loading,
        [Overlay.name]: Overlay,
        [PullRefresh.name]: PullRefresh
    },
    created() {
        this.getOriginalData();
        this.getHtmlWidth();
    },
    watch: {
        $route(to, from) {
            if(to && from && to.meta.index > from.meta.index){
                this.transitionName = 'w-slide-left';
            } else {
                this.transitionName = 'w-slide-right';
            }
        }
    }
}
</script>

<style lang="less">
.myformmain {
    // width: 375px;
    // // overflow: hidden;
    // position: absolute;
    // left: 0;
    // right: 0;
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 90px;
    .w-headertab {
        position: fixed;
        top: 0;
        left: 0;
        // right: 0;
        background: #eee;
        text-align: center;
        z-index: 1;
        .w-header-tab {
            height: 50px;
            display: flex;
            span {
                margin-left: 10px;
                padding: 10px;
                background: url('/img/arrow.svg') no-repeat 0px 15px; 
                background-size: 20px 20px;
                transform: rotate(180deg);
                img {
                    width: 10px;
                    height: 10px;
                }
            }
            p {
                margin-right: 30px;
                font-weight: bold;
                flex: 1;
                line-height: 50px;
            }
        }
        .w-headernav {
            background: #eee;
            line-height: 40px;
            display: flex;
            justify-content: space-around;
            span {
                border-bottom: 2px solid #eee;
                transition: all .3s;
                font-size: 14px;
                &.router-link-active {
                    border-bottom: 2px solid #C1AB96;
                    color: #C1AB96;
                }
            }
        }
    }
    .van-overlay {
        background-color: rgba(200, 200, 200, .4)
    }
    .van-loading {
        position: absolute;
        top: 300px;
        left: 180px;
    }
    .van-pull-refresh {
        height: 100%;
    }
}
</style>