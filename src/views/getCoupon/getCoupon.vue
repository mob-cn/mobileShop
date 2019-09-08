<template>
    <div>
        <Header>
            <template v-slot:center>
                <p>领券中心</p>
            </template>
        </Header>
        <div class='coupons-wrapper'>
            <Coupons 
                v-for='item of coupons'
                :key='item.id'
                :name='item.name'
                :startTime='item.startTime'
                :endTime='item.endTime'
                :priceReduce='item.priceReduce'
                :receive='item.receive'            
            ></Coupons>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import Header from '@/views/layout/header.vue'
import Coupons from '@/components/coupons.vue'
export default {
    components: {
        Coupons,
        Header
    },
    computed: {
        ...mapState([
            'coupons'
        ])
    },
    methods: {
        getCoupons() {
            this.$store.dispatch('getCoupons', '/api/l-coupon.json')
        }
    },
    mounted() {
        this.getCoupons()
    }
}
</script>
<style lang="less" scoped>
.coupons-wrapper {
    padding: 0 20px;
}
</style>
