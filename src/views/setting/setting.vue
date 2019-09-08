<template>
    <div class='l-setting'>
        <Header>
            <template v-slot:center>
                <p>设置</p>
            </template>
        </Header>
        <div class="l-privateInfo" @click='editPrivate'>
            <div class="imgWrapper">
                <img src='../../assets/img/avatar.png' />
            </div>
            <div class='privateInfo'>
                <h5>{{privateInfo.name}}</h5>
                <p>{{phoneNumber}}</p>
            </div>
            <span class='edit'>
                编辑
            </span>                
        </div>
        <div class='area area1' @click='editPhoneNumber'>
            <setting-item title='手机号修改' />
        </div>
        <div class='area'>
            <setting-item
                v-for='item of secondList'
                :key='item.id'
                :title='item.title'
            />
            <setting-item
                v-for='item of thirdList'
                :key='item.id'
                :title='item.title'
            />
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Header from '@/views/layout/header.vue'
import SettingItem from './settingItem.vue'
export default {
    components: {
        Header,
        SettingItem
    },
    computed: {
        ...mapState([
            'privateInfo'
        ]),
        phoneNumber() {
            let phoneNumber = this.privateInfo.phoneNumber
            if (phoneNumber) {
                let phoneNumber1 = phoneNumber.replace(/^(\d{3})(\d{4})/g, (a, b) => {
                    return b + '*'.repeat(4)
                })
                return phoneNumber1
            }
            return ''
        }
    },
    methods: {
        ...mapActions([
            'addPrivateInfo'
        ]),
        editPrivate() {
            this.$router.push('/setting/privateInfo')
        },
        editPhoneNumber() {
            this.$router.push('/setting/phoneEdit')
        }
    },
    data() {
        return {
            secondList: [
                {id: 0, title: '音效与通知'},
                {id: 1, title: '通用'},
                {id: 2, title: '隐私条款'}
            ],
            thirdList: [
                {id: 3, title: '问题反馈'},
                {id: 4, title: '关于'},
                {id: 5, title: '检查更新'}
            ]
        }
    },
    mounted() {
        
        if (!Object.keys(this.privateInfo).length) this.addPrivateInfo()
    }
}
</script>
<style lang="less" scoped>
.l-setting {
    background-color: #EBE9E5;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .l-privateInfo {
        height: 80px;
        box-sizing: border-box;
        background-color: #fff;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .privateInfo {
            flex: 1;
            h5 {
                height: 25px;
                font-weight: bold;
            }
        }
        .edit {
            width: 54px;
            height: 24px;
            text-align: center;
            line-height: 24px;
            border-radius: 22px;
            border: 1px solid #C1AB96;
            color: #C1AB96;
        }
    }
    .area {
        margin-top: 15px;
    }
}

</style>
