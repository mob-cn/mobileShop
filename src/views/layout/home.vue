<template>
    <div class='l-home'>
        <Header>
            <template v-slot:center>
                <p>收货地址</p>
            </template>
            <template v-slot:right>
                <router-link to='addAddress'>新增地址</router-link>
            </template>
        </Header>
        <router-link to="/address" class='nav-item'>地址</router-link>
        <router-link to="/getCoupon" class='nav-item'>优惠券</router-link>
        <router-link to="/setting" class='nav-item'>设置</router-link>
        <Bottom />
    </div>
</template>
<script>
import Bottom from './bottom'
import Header from './header'
export default {
    components: {
        Bottom,
        Header
    }
}
</script>
<style lang="less" scoped>
</style>
