<template>
    <div class="w-myformservice">
        <div class="w-header-tab">
            <span @click='onClickLeft'></span>
            <p>联系客服</p>
        </div>
    </div>
</template>

<style lang="less">
.w-myformservice {
    .w-header-tab {
        height: 50px;
        text-align: center;
        background: #efefef;
        display: flex;
        span {
            margin-left: 10px;
            padding: 10px;
            background: url('/img/arrow.svg') no-repeat 0px 15px; 
            background-size: 20px 20px;
            transform: rotate(180deg);
            img {
                width: 10px;
                height: 10px;
            }
        }
        p {
            margin-right: 30px;
            font-weight: bold;
            flex: 1;
            line-height: 50px;
        }
    }
}
</style>

<script>
export default {
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        }
    }
}
</script>