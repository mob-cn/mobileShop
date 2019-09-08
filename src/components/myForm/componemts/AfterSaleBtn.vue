<template>
    <div class="w-aftersalebtn w-btn" @click="onClick">
        <p>申请售后</p>
    </div>
</template>

<script>
export default {
    props: [ 'data' ],
    methods: {
        onClick() {
            this.$router.history.push(`/myForm/applySale?id=${this.data.id}`);
        }
    }
}
</script>

<style lang="less">
@import url(../common/common.less);
.w-aftersalebtn {
    .w-btn(#ccc, #333);
}
</style>