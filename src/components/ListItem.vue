<template>
    <div class='l-list-item'>
        <div class='l-item-left'>
            {{label}}
        </div>
        <div class='l-item-right'>
            <input :placeholder="placeholder" />
        </div>
    </div>
</template>
<script>
export default {
    props: ['label', 'placeholder']
}
</script>
<style lang="less" scoped>
.l-list-item {
    display: flex;
    align-items: center;
    font-size: 18px;
    height: 50px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    .l-item-left {
        width: 90px;
        color: #666;
    }
    .l-item-right {
        flex: 1;
        font-size: 14px;
        input {
            font-size: 18px;
        }
        input::placeholder {
            color: #999;
            font-size: 14px;
        }
    }
}
</style>

