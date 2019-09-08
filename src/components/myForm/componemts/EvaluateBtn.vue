<template>
    <div class="w-evaluatebtn w-btn" @click="onClick">
        <p>评价</p>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    props: [ 'data' ],
    methods: {
        onClick() {
            this.$router.history.push(`/myForm/evaluatePage?id=${this.data.id}`);
        }
    }
}
</script>

<style lang="less">
@import url(../common/common.less);
.w-evaluatebtn {
    .w-btn(red);
}
</style>