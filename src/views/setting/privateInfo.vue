<template>
    <div class="l-infoEdit">
        <Header>
            <template v-slot:center>
                <p>
                    信息编辑
                </p>
            </template>
            <template v-slot:right>
                <div @click='savePrivateInfo'>
                    保存
                </div>
            </template>
        </Header>
        <div class='l-avatar-wrapper'>
            <img src="../../assets/img/avatar.png" alt="">
        </div>
        <div class='l-edit-info'>
            <Edit-info
                :label='"昵称"'
                :inputValue='privateInfo.name'
                @setInputValue='getNameValue'
            ></Edit-info>
            <Edit-info
                :label='"会员ID"'
                :inputValue='privateInfo.personId'
                @setInputValue='getIdValue'
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
            name: '',
            personId: ''
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
        initInfo() {
            this.name = this.privateInfo.name
            this.personId = this.privateInfo.personId
        },
        savePrivateInfo() {
            const newInfo = {
                name: this.name,
                personId: this.personId
            }
            this.$store.commit('editInfo', newInfo)
            this.$router.push('/setting')
        },
        getNameValue(value) {
            this.name = value
        },
        getIdValue(value) {
            this.personId = value
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
    }
}
</style>
