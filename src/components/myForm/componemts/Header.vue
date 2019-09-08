<template>
    <div class="w-header">
        <van-nav-bar
            title="我的订单"
            left-text=""
            left-arrow
            @click-left="onClickLeft"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="less">
.myformall {
    .van-nav-bar {
        background: #ddd;
        i {
            color: #C1AB96;
        }
        .van-nav-bar__title {
            font-weight: bold;
        }
    }
}
</style>