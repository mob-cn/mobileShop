<template>
<div>
    <p v-show="!list || !list.length" class="w-noshop">暂无订单</p>
    <div class="myformshipment">
        <ShopCard 
            @touchEnd='getList(item.id)'
            :data='item' 
            v-for='(item, index) in list' 
            :key='index' 
        >
            <ShipmentsBtn :data="{data: item.title}" slot="control" />        
            <ReturnSale :data="{id: item.id}" slot="control" />        
        </ShopCard>
    </div>
</div>
</template>

<script>
import ShopCard from '../componemts/ShopCard';
import ShipmentsBtn from '../componemts/ShipmentsBtn';
import ReturnSale from '../componemts/ReturnSale';
export default {
    data() {
        return {
            list: []
        }
    },
    components: { ShopCard, ShipmentsBtn, ReturnSale },
    methods: {
        setData(data) {
            // this.$http
            //     .get('/api/myform/myformall.json')
            //     .then(({ data }) => {
            //         if (data.data) {
            //             return this.list = data.data.filter(item => item.payment === true && item.shipments !== true);
            //         }
            //     })
            //     .catch(err => console.log(err))
            if (data) this.list = data.filter(item => item.payment === true && item.shipments !== true);
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

</style>