<template>
    <div class='l-coupons'>
        <div class="coupons-left">
            <h5>{{name}}</h5>
            <span>有效期：{{startTime}} - {{endTime}}</span>
        </div>
        <div 
        :class="['coupons-right', isGet ? 'getCoupon' : '']"
        @click='getCoupon' 
        ref='getCoupon'>
            <p><i class='iconfont'>&#xe611;</i>￥<span class='l-coupon-price'>{{priceReduce}}</span></p>
            <p>{{isGet ? '已领取' : '立即领取'}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        'name',
        'startTime',
        'endTime',
        'priceReduce',
        'receive'
    ],
    data() {
        return {
            isGet: this.receive
        }
    },
    methods: {
        getCoupon() {
            if (!this.isGet) this.isGet = true
        }
    }
}
</script>
<style lang="less" scoped>
    .l-coupons {
        margin-top: 20px;
        height: 100px;
        display: flex;
        justify-content: space-between;
        padding-left: 25px;
        box-shadow: 
            0 -5px 4px 0 #eee,
            0 0 0 0 #eee,
            0 5px 5px 0 #eee,
            -5px 0 4px 0px #eee;
        box-sizing: border-box;
        background: #fff no-repeat url('../assets/img/coupon.png') 100% 0;
        .coupons-left {
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: space-between;
            padding: 15px 0;
            h5 {
                font-size: 16px;
                font-weight: bold;
            }
            span {
                font-size: 12px;
                color: #999;
            }
        }
        .coupons-right {
            width: 100px;
            color: #fff;
            padding-left: 10px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 15px;
            height: 100px;
            box-sizing: border-box;
            &.getCoupon {
                background-color: rgba(0, 0, 0, .3)
            }
            p {
                display: flex;
                align-items: center;
            }
            i.iconfont {
                font-size: 30px;
                vertical-align: top;
            }
            span.l-coupon-price {
                font-size: 20px;
            }
        }
    }
</style>
