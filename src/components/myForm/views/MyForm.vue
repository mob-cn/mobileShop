<template>
    <div class="w-myform">
        <div class="w-myformheader">
            <h2>我的订单</h2>
            <router-link to="/myForm" tag="span">查看全部订单</router-link>
        </div>
        <div class="w-myformlist">
            <router-link to="/myForm/main/payment" tag="span">待付款</router-link>
            <router-link to="/myForm/main/shipments" tag="span">待发货</router-link>
            <router-link to="/myForm/main/harvest" tag="span">待收货</router-link>
            <router-link to="/myForm/main/evaluate" tag="span">评价</router-link>
            <router-link to="/myForm/main/evaluate" tag="span">退款/售后</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.w-myform {
    width: 100%;
    height: 100%;
    span {
        font-size: 14px;
    }
    .w-myformheader {
        display: flex;
        justify-content: space-between;
        line-height: 40px;
        margin-bottom: 10px;
        h2 {
            font-size: 16px;
        }
        span {
            padding-right: 20px;
            background: url('/img/arrow.svg') no-repeat 88px 8px;
            background-size: 20px 20px;
        }
    }
    .w-myformlist {
        display: flex;
        justify-content: space-between;
        span {
            padding-top: 40px;
            background: url('/img/payment.svg') no-repeat top center;
            background-size: 30px 30px;
            &:nth-child(2) {
                background-image: url('/img/shipments.svg');
                background-size: 36px 36px;
            }
            &:nth-child(3) {
                background-image: url('/img/harvest.svg');
            }
            &:nth-child(4) {
                background-image: url('/img/evaluate.svg');
                background-size: 36px 36px;
            }
            &:last-child {
                background-image: url('/img/logisticslist.svg');
            }
        }
    }
}
.w-noshop {
    text-align: center;
    line-height: 100px;
    font-size: 20px;
    color: #ddd;
}
.w-slide-right-enter-active,
.w-slide-right-leave-active,
.w-slide-left-enter-active,
.w-slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.w-slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.w-slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.w-slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.w-slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>