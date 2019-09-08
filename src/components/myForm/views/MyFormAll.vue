<template>
<div>
    <p v-show="!list || !list.length" class="w-noshop">暂无订单</p>
    <div class="myformall">
        <ShopCard 
            @touchEnd='getList(item.id)'
            :data='item' 
            v-for='(item, index) in this.$store.state.myForm[0]' 
            :key='index' 
        >
            <DeleteFormBtn slot="control" :data="{id: item.id}" />
        </ShopCard>
    </div>
</div>
</template>

<script>
import { Toast } from 'vant';
import ShopCard from '../componemts/ShopCard';
import DeleteFormBtn from '../componemts/DeleteFormBtn';
export default {
    data() {
        return {
            list: [],
            flag: false
        }
    },
    components: { ShopCard, DeleteFormBtn, [Toast.name]: Toast },
    methods: {
        setData(data) {
            // this.$http
            //     .get('/api/myform/myformall.json')
            //     .then(({ data }) => this.list = data.data)
            //     .catch(err => console.log(err))
            // if (this.list.length !== data.length) Toast("删除成功");
            // console.log(111, data, this.list)
            this.list = data;
        },
        getData() {
            if (this.$store.state.myForm) {
                this.setData(this.$store.state.myForm[0]);
            }
        }
    },
    created() {
        this.getData();
    },
    watch: {
        '$store.state.myForm'(data) {
            this.setData(data[0]);
            if (this.$store.state.flag) 
                this.$toast({
                    message: '删除成功',
                    forbidClick: true,
                    duration: 500
                });
        }
    }
}
</script>

<style lang="less">

</style>