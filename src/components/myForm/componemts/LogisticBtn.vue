<template>
    <div class="w-logisticbtn w-btn" @click="onClick">
        <p>查看物流</p>
    </div>
</template>

<script>
export default {
    props: [ 'data' ],
    methods: {
        onClick() {
            this.$router.history.push(`/myForm/logistics?id=${this.data.id}`);
        }
    }
}
</script>

<style lang="less">
@import url(../common/common.less);
.w-logisticbtn {
    .w-btn(#ddd, #333);
}
</style>