<template>
    <div class="setting-item">
        <span>{{title}}</span>
        <span>
            <i class="iconfont">&#xe63b;</i>
        </span>
    </div>
</template>
<script>
export default {
    props: {
        title: String
    }
}
</script>
<style lang="less" scoped>
.setting-item {
    height: 50px;
    align-items: center;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    i.iconfont {
        display: inline-block;
        transform: rotate(180deg);
        color: #ccc;
    }
}
</style>
