<template>
    <div class="w-harvestbtn w-btn" @click="onClick">
        <p>确认收货</p>
    </div>
</template>

<script>
export default {
    props: [ 'data'],
    methods: {
        onClick() {
            this.$store.commit('changeFormStatus', { type: 'harvest', id: this.data.id, msg: true })
        }
    }
}
</script>

<style lang="less">
@import url(../common/common.less);
.w-harvestbtn {
    .w-btn(red);
}
</style>