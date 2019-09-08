<template>
    <div class="w-returnsale w-btn" @click="onClick">
        <p>申请退货</p>
    </div>
</template>

<script>
export default {
    props: [ 'data' ],
    methods: {
        onClick() {
            this.$router.history.push(`/myForm/returnsale?id=${this.data.id}`);
        }
    }
}
</script>

<style lang="less">
@import url(../common/common.less);
.w-returnsale {
    .w-btn(#ccc, #333);
}
</style>