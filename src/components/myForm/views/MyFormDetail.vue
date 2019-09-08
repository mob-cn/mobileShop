<template>
    <div class="myformdetail" v-if="shop.length > 0">
        <div class="w-header-tab">
            <span @click='onClickLeft'></span>
            <p>我的订单</p>
        </div>
        <div class="w-box" v-for="item in shop" :key="item.id">
            <div class="w-detailstatus">
                <p>{{getStatus(item)}}</p>
            </div>
            <div class="w-address">
                <img src="/img/address.svg" alt="">
                <div class="w-right">
                    <div>
                        <p>收货人：{{item.name}}张三的歌</p>
                        <span>{{item.tel}}13910733521</span>
                    </div>
                    <p>{{item.address}}地址：北京天安门广场</p>
                </div>
            </div>
            <div class="w-detailcard">
                    <div class="w-header">
                        <h3 class="title">{{item.title}}</h3>
                        <span class="status">{{getStatus(item)}}</span>
                    </div>
                    <div class="w-content">
                        <div class="img">
                            <img :src='item.img' alt="">
                        </div>
                        <div class="w-right">
                            <div class="w-descrition">
                                <p class="w-txt">{{item.descrition}}</p>
                                <div class="w-count">
                                    <p>￥{{item.price}}.00</p>
                                    <span>x {{item.count}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-freight">
                        <p>运费险</p>
                        <span>{{ item.harvest ? "运费险已失效" : "确认收货前可理赔"}}</span>
                    </div>
                <div class="w-shopnews">
                        <p>共{{item.count}}件商品</p>
                        <span>合计：￥{{gettotal(item.price, item.count)}}.00</span>
                </div>
            </div>
            <div class="w-information">
                <div>订单信息</div>
                <div>
                    <p>订单编号：</p>
                    <span>{{item.id}}</span>
                </div>
                <div>
                    <p>交易时间：</p>
                    <span>{{item.time}}2019-06-18</span>
                </div>
                <div>
                    <p>创建时间：</p>
                    <span>{{item.createtime}}2019-06-18</span>
                </div>
                <div>
                    <p>成交时间：</p>
                    <span>{{item.successtime}}2019-06-25</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
.myformdetail {
    height: 100%;
    background: #efefef;
    .w-header-tab {
        height: 50px;
        text-align: center;
        background: #efefef;
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
    .w-box {
        .w-detailstatus {
            background: #C1AB96;
            color: #fff;
            height: 100px;
            line-height: 50px;
            p {
                margin-left: 30px;
            }
        }
        .w-address {
            position: absolute;
            top: 100px;
            left: 20px;
            width: 330px;
            border-radius: 15px;
            line-height: 32px;
            background: #fff;
            border: 1px solid #efefef;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);
            display: flex;
            img {
                width: 20px;
                height: 20px;
                margin: 10px;
                margin-top: 20px;
            }
            .w-right {
                margin: 12px 0;
                color: #666;
                div {
                    font-size: 18px;
                    display: flex;
                    p {
                        margin-right: 20px;
                    }
                }
            }
        }
        .w-detailcard {
            background: #fff;
            margin: 15px 0;
            padding: 10px;
            padding-top: 50px;
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
        }
        .w-information {
            background: #fff;
            padding: 10px 0;
            div {
                margin: 5px;
                margin-left: 20px;
                display: flex;
                line-height: 20px;
                p {
                    color: #666;
                }
                span {
                    color: #999;
                }
            }
        }
    }
}
</style>

<script>
export default {
    data() {
        return {
            shop: []
        }
    },
    methods: {
        getData() {
            this.$http
                .get('/api/myform/myformall.json')
                .then(({ data }) => { if (data.data) this.shop = data.data.filter(item => item.id === this.$route.query.id)})
                .catch(err => console.log(err))
        },
        onClickLeft() {
            this.$router.go(-1);
        },
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
    },
    created() {
        this.getData();
    }
}
</script>