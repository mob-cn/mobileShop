<template>
    <div class="w-cancellation w-btn" @click="onClick">
        <p>取消订单</p>
    </div>
</template>

<script>
export default {
    methods: {
        onClick() {
            this.$router.history.push(`/myForm/applySale?id=${this.data.id}`);
        }
    }
}
</script>

<style lang="less">
@import url(../common/common.less);
.w-cancellation {
    .w-btn(#ddd, #333);
}
</style>