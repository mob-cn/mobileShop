<template>
    <div class='l-add-address'>
        <Header>
            <template v-slot:center>
                <p>{{headerTitle}}</p>
            </template>
            <template v-slot:right>
                <div class='l-save' @click='saveAddressSetting'>保存</div>
            </template>
        </Header>
        
        <div class='l-add-body'>
            <div class='l-list-item'>
                <div class='l-item-left'>
                    收货人
                </div>
                <div class='l-item-right'>
                    <input placeholder="请填写收货人姓名" v-model='name' />
                </div>
            </div>
            <div class='l-list-item'>
                <div class='l-item-left'>
                    手机号码
                </div>
                <div class='l-item-right'>
                    <input v-model='phoneNumber' />
                </div>
            </div>
            <div class='l-list-item'>
                <div class='l-item-left'>
                    所在地区
                </div>
                <div class='l-item-right'>
                    <input 
                        placeholder="省市区县，乡镇等" 
                        @click="showPopup"
                        :value="addressDetails" 
                    />
                    <popup 
                        v-model='show'
                        round
                        position="bottom"
                        :style="{ height: '50%' }"
                    >
                        <Area 
                            :area-list="areaList" 
                            value="110101" 
                            @confirm='confirm'
                            @cancel='cancel'
                        />
                    </popup>
                </div>
            </div>
            <div class='l-list-item'>
                <div class='l-item-left'>
                    详细地址
                </div>
                <div class='l-item-right'>
                    <input placeholder="街道楼牌等" v-model='street' />
                </div>
            </div>
            <list-switch @checkDefault='checkDefault' :defaultAddress='defaultAddress'></list-switch>
        </div>
    </div>
</template>
<script>
import Header from '@/views/layout/header.vue'
import ListSwitch from '@/components/ListSwitch.vue'
import areaList from '@/assets/js/addressDetail'
import { Popup } from 'vant';
import { Area } from 'vant'
import Vue from 'vue'
Vue.use(Popup)
Vue.use(Area);
export default {
    components: {
        Header,
        ListSwitch,
        Popup,
        Area
    },
    data() {
        return {
            headerTitle:'新增收货地址',
            show: false,
            areaList,
            addressDetails: '',
            name: '',
            phoneNumber: '',
            street: '',
            defaultAddress: false
        }
    },
    computed: {
        defaultValue() {
            return this.default
        }
    },
    methods: {
        showPopup() {
            this.show = true;
        },
        confirm(data) {
            this.show = false
            this.addressDetails = data.map((item) => item.name).join(' ')
        },
        cancel() {
            this.show = false
        },
        checkDefault(isChecked) {
            this.defaultAddress = isChecked
        },
        saveAddressSetting() {
            const addressSet = {
                name: this.name,
                phoneNumber: this.phoneNumber,
                addressDetails: this.addressDetails,
                street: this.street,
                defaultAddress: this.defaultAddress
            }
            this.$store.commit('addAddress', addressSet)
            this.$router.push('/address')
        }
    }
}
</script>
<style lang="less" scoped>
.l-add-address {
    .l-save {
        color: #C1AB96;
    }
    .l-add-body {
        padding: 20px;
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
    }
}
</style>
