<template>
    <div class="w-deleteformbtn w-btn" @click="onClick">
        <p>删除订单</p>
    </div>
</template>

<script>
export default {
    props: [ 'data' ],
    methods: {
        onClick() {
            this.$store.commit('deleteMyFormItem', this.data.id);
            this.$store.commit('changeFlag', true);
        }
    }
}
</script>

<style lang="less">
@import url(../common/common.less);
.w-deleteformbtn {
    .w-btn(#ddd, #333);
}
</style>