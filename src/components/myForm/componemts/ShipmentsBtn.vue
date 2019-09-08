<template>
    <div class="w-shipmentsbtn w-btn" @click="onClick">
        <p>提醒发货</p>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    props: [ 'data' ],
    data() {
        return {
            count: 0
        }
    },
    methods: {
        onClick() {
            if (this.count > 2) {
                return this.$toast({
                    message: `已超过提醒上线`,
                    forbidClick: true,
                    duration: 800
                });
            }
            this.count++;
            this.$toast({
                message: `已提醒"${this.data.data}"发货`,
                forbidClick: true,
                duration: 800
            });
        }
    },
    components: {
        [Toast.name]: Toast
    }
}
</script>

<style lang="less">
@import url(../common/common.less);
.w-shipmentsbtn {
    .w-btn(red);
}
</style>