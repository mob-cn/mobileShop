<template>
    <div class="w-myformevaluatepage">
        <div class="w-header-tab">
            <span @click='onClickLeft' class="w-back"></span>
            <p>评价</p>
            <span @click="onClickRight" class="w-right">完成</span>
        </div>
        <div class="w-content">
            <!-- <van-cell-group> -->
                <van-field
                    v-model="message"
                    type="textarea"
                    placeholder="请输入商品评价"
                    rows="5"
                    autosize
                    maxlength="199"
                    name="w-evaluate"
                    border
                />
            <!-- </van-cell-group> -->
        </div>
        <div class="w-upload">
            <van-uploader
                :after-read="afterRead"
                v-model="fileList"
                multiple
                :max-count="3"
            />
        </div>
        <div class="w-grade">
            <div class="w-shop">
                <span>店铺服务:</span>
                <van-rate
                    v-model="shop"
                    allow-half
                    void-icon="star"
                    void-color="#eee"
                />
                <span>评价</span>
            </div>
            <div class="w-shop">
                <span>物流服务:</span>
                <van-rate
                    v-model="logistic"
                    allow-half
                    void-icon="star"
                    void-color="#eee"
                />
                <span>评价</span>
            </div>
        </div>
    </div>
</template>

<style lang="less">
.w-myformevaluatepage {
    .w-header-tab {
        height: 50px;
        text-align: center;
        line-height: 50px;
        background: #efefef;
        display: flex;
        .w-back {
            margin: 0 10px;
            padding: 10px;
            background: url('/img/arrow.svg') no-repeat 0px 15px; 
            background-size: 20px 20px;
            transform: rotate(180deg);
            img {
                width: 10px;
                height: 10px;
            }
        }
        .w-right {
            width: 32px;
            margin-right: 10px;
            color: #C1AB96;
        }
        p {
            font-weight: bold;
            flex: 1;
        }
    }
    .w-content {
        margin: 10px;
        border: 1px solid #ddd;
    }
    .w-upload {
        margin: 10px;
    }
    .w-grade {
        color: #666;
        margin: 10px;
        .w-shop { 
            display: flex;
            margin: 10px 0;
            .van-rate {
                margin: 0 20px;
            }
        }
    }
}
</style>

<script>
import { Rate, Uploader, Field } from 'vant';
export default {
    data() {
        return {
            shop: 0,
            logistic: 0,
            fileList: [],
            message: ''
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        onClickRight() {
            this.$router.history.replace('/myForm/main/evaluate')
            let data = {
                shop: this.shop,
                logistic: this.logistic,
                content: this.content,
                message: this.message
            };
            const transFun =(data = {}) => Object.entries(data).map(ent => ent.join("=")).join("&");
            // this.$http
            //     .post({
            //         headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            //         // 设置序列化请求参数函数
            //         transformRequest: transFun,
            //         url: '/myForm/evaluate'
            //     }, data)
            //     .then(({ data }) => {
            //         if (!data.error) {
            //             this.$router.history.replace('/myForm/evaluate')
            //         }
            //     })
            //     .catch(err => console.log(err))

        },
        afterRead(file) {
            // console.log(123, file)
        }
    },
    components: { 
        [Rate.name]: Rate,
        [Uploader.name]: Uploader,
        [Field.name]: Field
    }
}
</script>