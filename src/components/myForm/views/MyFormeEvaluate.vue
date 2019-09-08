<template>
<div>
    <p v-show="!list || !list.length" class="w-noshop">暂无订单</p>
    <div class="w-myformvaulate">
        <ShopCard 
            @touchEnd='getList(item.id)'
            :data='item' 
            v-for='(item, index) in list' 
            :key='index' 
        >
            <EvaluateBtn :data="{id: item.id}" slot="control" />
            <AfterSaleBtn :data="{id: item.id}" slot="control" />
        </ShopCard>
    </div>
</div>
</template>

<script>
import ShopCard from '../componemts/ShopCard';
import EvaluateBtn from '../componemts/EvaluateBtn';
import AfterSaleBtn from '../componemts/AfterSaleBtn';
export default {
    data() {
        return {
            list: []
        }
    },
    components: { ShopCard, EvaluateBtn, AfterSaleBtn },
    methods: {
        // getData() {
        //     this.$http
        //         .get('/api/myform/myformall.json')
        //         .then(({ data }) => {
        //             if (data.data) {
        //                 return this.list = data.data.filter(item => item.evaluate !== true && item.harvest === true);
        //             }
        //         })
        //         .catch(err => console.log(err))
        // }
        setData(data) {
            if (data) this.list = data.filter(item => item.evaluate !== true && item.harvest === true);
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