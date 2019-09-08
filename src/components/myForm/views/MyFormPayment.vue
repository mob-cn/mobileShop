<template>
<div>
    <p v-show="!list || !list.length" class="w-noshop">暂无订单</p>
    <div class="myformpayment">
        <ShopCard 
            @touchEnd='getList(item.id)'
            :data='item' 
            v-for='(item, index) in list' 
            :key='index' 
        >
            <PaymentBtn :data="{id: item.id}" slot="control" />        
            <RefundBtn :data="{id: item.id}" slot="control" />        
            <ConnectBtn :data="{id: item.id}" slot="control" />        
        </ShopCard>
    </div>
</div>
</template>

<script>
import ShopCard from '../componemts/ShopCard';
import PaymentBtn from '../componemts/PaymentBtn';
import RefundBtn from '../componemts/RefundBtn';
import ConnectBtn from '../componemts/ConnectBtn';
export default {
    data() {
        return {
            list: []
        }
    },
    components: { ShopCard, PaymentBtn, RefundBtn, ConnectBtn },
    methods: {
        setData(data) {
            // this.$http
            //     .get('/api/myform/myformall.json')
            //     .then(({ data }) => {
            //         if (data.data) {
            //             return this.list = data.data.filter(item => item.payment !== true)
            //         }
            //     })
            //     .catch(err => console.log(err))
            if (data) this.list = data.filter(item => item.payment !== true);
        },
        getData() {
            if (this.$store.state.myForm) this.setData(this.$store.state.myForm[0]);
        }
    },
    created() {
        this.getData();
    },
    watch: {
        '$store.state.myForm'(data) {
            this.setData(data[0])
        }
    }
}
</script>

<style lang="less">
.w-myformpayment {
    height: 100%;
    // width: 100%;
    // position: absolute;
    // left: 0;
    // height: 0;
    // top: 90px;
}
</style>