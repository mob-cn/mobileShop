<template>
    <div class="Goods-Bar">
        <div class="left">
            <span class="left-span"><Icon name="shop-o" size="25px" color="#C1AB96"/>店铺</span>
            <span class="left-span"><Icon name="service-o" size="25px"/>客服</span>
            <span class="left-span"><Icon name="star-o" size="25px"/>收藏</span>
        </div>
        <div class="right">
            <span class="shopcar">加入购物车</span>
            <span class="buynow">立即购买</span>
        </div>

    </div>
</template>
<style lang="less">
    .Goods-Bar {
        height:75px;
        width: 100%;
        background-color:#fff;
        position:fixed;
        bottom:0;
        display:flex;
        border-top:1px solid#F2F2F2;
        font-size:14px;
        font-weight: bold;
        .left{
            flex:1;
            display:flex;
            .left-span{
                display:flex;
                flex:1;
                justify-content: center;
                align-items: center;
                flex-direction:column;
                border-right:1px solid #F2F2F2;
                i{
                    margin-bottom: 10px;
                }
            }
        }
        .right{
            flex:1;
            display:flex;
            justify-content:center;
            align-items:center;
            span{
                width: 85px;
                height: 30px;
                color:#F2F2F2;
                display:flex;
                justify-content:center;
                align-items:center;
            }
            .shopcar{
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
                background-color: #F0D5B8;
                // border:1px solid #F2F2F2;
            }
            .buynow{
                border-top-right-radius: 20px;
                border-bottom-right-radius: 20px;
                background-color: #8E7E6F;
               
            }
        }
}
</style>


<script>
import { Icon } from 'vant';
export default {
    components : {
        Icon
    }
}
</script>

