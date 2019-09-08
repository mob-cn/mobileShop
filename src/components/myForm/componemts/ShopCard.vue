<template>
    <div class="w-shopcard">
        <div class="w-header">
            <h3 class="title">{{data.title}}</h3>
            <span class="status">{{getStatus(data)}}</span>
        </div>
        <div class="w-content" @click="getFormDetail(data.id)">
            <div class="img">
                <img :src='data.img' alt="">
            </div>
            <div class="w-right">
                <div class="w-descrition">
                    <p class="w-txt">{{data.descrition}}</p>
                    <div class="w-count">
                        <p>￥{{data.price}}.00</p>
                        <span>x {{data.count}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-freight">
            <p>运费险</p>
            <span>{{ data.harvest ? "运费险已失效" : "确认收货前可理赔"}}</span>
        </div>
        <!-- <div class="w-status">{{data.freightstatus}}111</div> -->
        <div class="w-shopnews">
            <p>共{{data.count}}件商品</p>
            <span>合计：￥{{gettotal(data.price, data.count)}}.00</span>
        </div>
        <div class="w-slot">
            <slot name='control'></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'data' ],
    methods: {
        gettotal(price, count) {
            return +price * count;
        },
        getStatus(data) {
            if (data.evaluate) {
                return "可追评";
            } else if (data.harvest) {
                return "已完成";
            } else if (data.shipments) {
                return "待收货";
            } else if (data.payment) {
                return "待发货";
            } else {
                return "待付款"
            }
        },
        getFormDetail(id) {
            // console.log(this.$router);
            this.$router.history.push('/myForm/detail?id=' + id)
        }
    }
}
</script>

<style lang="less">
p {
    margin: 0;
    padding: 0;
}
.w-shopcard {
    margin: 15px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 1px 0 5px rgba(0, 0, 0, .2);
    .w-header {
        display: flex;
        justify-content: space-between;
        line-height: 40px;
        h3 {
            margin: 0;
            padding: 0;
        }
        span {
            color: red;
        }
    }
    .w-content {
        display: flex;
        .img {
            width: 100px;
            height: 100px;
            margin-right: 10px;
            border-radius: 10px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .w-right {
            flex: 1;
            p {
                line-height: 30px;
            }
            .w-count {
                display: flex;
                justify-content: space-between;
            }
        }
    }
    .w-freight {
        display: flex;
        line-height: 40px;
        text-align: right;
        p {
            width: 100px;
            margin-right: 10px;
        }
        span {
            // text-align: center;
            color: red;
            flex: 1;
        }
    }
    .w-shopnews {
        display: flex;
        line-height: 40px;
        text-align: right;
        p {
            width: 100px;
            margin-right: 10px;
        }
        span {
            // text-align: center;
            flex: 1;
        }
    }
    .w-slot {
        display: flex;
        flex-direction: row-reverse;
    }
}
</style>