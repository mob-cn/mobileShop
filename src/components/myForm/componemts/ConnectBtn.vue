<template>
    <div class="w-connectbtn w-btn" @click="onClick">
        <p>联系客服</p>
    </div>
</template>

<script>
export default {
    props: ['data'],
    methods: {
        onClick() {
            this.$router.history.push(`/myForm/connect?id=${this.data.id}`);
        }
    }
}
</script>

<style lang="less">
@import url(../common/common.less);
.w-connectbtn {
    .w-btn(#ddd, #333);
}
</style>