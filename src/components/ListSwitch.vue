<template>
    <div class="l-list-switch">
        <div class="l-switch-left">
            <span>设置默认地址</span>
            <p>提醒：每次下单时会使用该地址！实际下单地址会根据您购物切换的地址智能切换,请在下单时确认哦~</p>
        </div>
        <div class='l-switch-right'>
            <Switchs 
                v-model='isCheck' 
                size='20px'
                active-color="#C1AB96"
                @input='checkDefault'
            />
        </div>
    </div>
</template>
<script>
import {Switch}  from 'vant';
import Vue from 'vue'
Vue.use(Switch)
export default {
    components: {
        Switchs: Switch
    },
    props: {
        defaultAddress: Boolean
    },
    data() {
        return {isCheck: false}
    },
    methods: {
        checkDefault() {
            if (this.isDefault) {
                alert('至少有一个默认地址！')
            } else {
                this.$emit('checkDefault', this.isCheck)
            }
        }
    },
    mounted() {
        this.isCheck = this.defaultAddress
    }
}
</script>
<style lang="less" scoped>
.l-list-switch {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    .l-switch-left {
        flex: 1;
        span {
            font-size: 18px;
            color: #666;
        }
        p {
            margin-top: 10px;
            margin-right: 30px;
            line-height: 20px;
            color: #999;
        }
    }
    .l-switch-right {
        width: 42px;
    }
}
</style>
