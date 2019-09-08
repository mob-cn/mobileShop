<template>
    <div class="w-myformapplysale">
        <div class="w-header-tab">
            <span @click='onClickLeft'></span>
            <p>申请售后</p>
        </div>
    </div>
</template>

<script>
import ShopCard from '../componemts/ShopCard';
export default {
    data() {
        return {
            list: []
        }
    },
    components: {  },
    methods: {
        getData() {
            // this.$http
            //     .get('/api/myform/myformall.json')
            //     .then(({ data }) => {
            //         if (data.data) return this.list = data.data.filter(item => item.payment !== true)})
            //     .catch(err => console.log(err))
        },
        onClickLeft() {
            this.$router.go(-1);
        }
    },
    created() {
        this.getData();
    }
}
</script>

<style lang="less">
.w-myformapplysale {
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