<template>
    <div class="w-paymentbtn w-btn" @click="onClick">
        <p>付款</p>
    </div>
</template>

<script>
export default {
    props: [ 'data' ],
    methods: {
        onClick() {
            this.$store.commit('changeFormStatus', { type: 'payment', id: this.data.id, msg: true })
        }
    }
}
</script>

<style lang="less">
@import url(../common/common.less);
.w-paymentbtn {
    .w-btn(red);
}
</style>