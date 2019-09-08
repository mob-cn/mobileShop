<template>
    <div class="l-infoEdit">
        <Header>
            <template v-slot:center>
                <p>
                    手机号修改
                </p>
            </template>
            <template v-slot:right>
                <div @click='savePhoneInfo'>
                    保存
                </div>
            </template>
        </Header>
        <div class='l-edit-info'>
            <Edit-info
                :label='"原手机号"'
                :inputValue='privateInfo.phoneNumber'
            >
                <template v-slot:right>
                    <p class='sendAuth'>发送验证码</p>
                </template>
            </Edit-info>
            <Edit-info
                :label='"验证码"'
                inputValue=''
            ></Edit-info>
            <Edit-info
                :label='"新手机号"'
                inputValue=''
                @setInputValue='getNewPhoneNumber'
            ></Edit-info>
        </div>
    </div>
</template>
<script>
import Header from '@/views/layout/header'
import EditInfo from './settingInput'
import { mapState, mapMutations } from 'vuex'
export default {
    components: {
        Header,
        EditInfo
    },
    data() {
        return {
            phoneNumber: ''
        }
    },
    computed: {
        ...mapState([
            'privateInfo'
        ])
    },
    methods: {
        ...mapMutations([
            'editPrivateInfo'
        ]),
        savePhoneInfo() {
            const newInfo = {
                phoneNumber: this.phoneNumber 
            }
            this.$store.commit('editInfo', newInfo)
            this.$router.push('/setting')
        },
        getNewPhoneNumber(value) {
            this.phoneNumber = value
        }
    }
    
}
</script>
<style lang="less" scoped>
.l-infoEdit {
    background-color: #fff;
    .l-avatar-wrapper {
        height: 150px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 130px;
            height: 130px;
        }
    }
    .l-edit-info {
        padding: 0 20px;
        .sendAuth {
            color: #EAD8B7;
            font-size: 12px;
        }
    }
}
</style>
