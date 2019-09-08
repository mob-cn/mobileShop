<template>
    <div class='l-logisticsCard'>
        <p class='l-card-phoneNumber'>
            {{phoneNumber}}
        </p>
        <div class='l-card-left'>
            <span>{{name}}</span>
            <p>{{addressDetails + ' ' + street}}</p>
        </div>
        <router-link class='l-card-right' :to='"/address/editAddress/" + id'>
            编辑
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'logisticsCard',
    props: {
        phoneNumber: String,
        name: String,
        addressDetails: String,
        street: String,
        id: Number
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.l-logisticsCard {
    height: 60px;
    width: 100%;
    background-color: #fff;
    justify-content: space-between;
    display: flex;
    position: relative;
    color: black;
    padding: 12px 0;
    border-bottom: 1px solid #ccc;

    &.default {
        color: #fff;
        background-color: #C1AB96;

        .l-card-phoneNumber {
            color: #fff;
        }

        .l-card-right {
            color: #fff;
            background-color: #C1AB96;
        }

        .l-card-left {
            border-right: 1px dashed #fff;
        }
    }

    .l-card-phoneNumber {
        color: #999;
        position: absolute;
        left: 50%;
        margin-left: -42px;
    }

    .l-card-left {
        flex: 1;
        padding-right: 10px;
        box-sizing: border-box;
        border-right: 1px dashed #999;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        font-size: 16px;

        span {
            font-weight: bold;
        }

        p {
            font-size: 16px;
            text-align: left;
        }
    }

    .l-card-right {
        padding-right: 10px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 12px;
        box-sizing: border-box;
        width: 50px;
        background-color: #fff;
        color: #666;
    }
}
</style>
