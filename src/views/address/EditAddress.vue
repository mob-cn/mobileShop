
<script>
import addAddress from './AddAddress'
import { mapState } from 'vuex'
export default {
    mixins: [addAddress],
    props: {
        index: String
    },
    data() {
        return {
            headerTitle: '编辑收货地址'
        }
    },
    computed: {
        ...mapState([
            'allAddress'
        ]),
        NIndex() {
            return parseInt(this.index)
        }
    },
    methods: {
        getInfo() {
            const allAddress = this.allAddress
            const address = allAddress[this.NIndex]
            Object.assign(this, address)
        },
        saveAddressSetting() {
            const index = this.NIndex
            const addressSet = {
                name: this.name,
                phoneNumber: this.phoneNumber,
                addressDetails: this.addressDetails,
                street: this.street,
                defaultAddress: this.defaultAddress
            }
            const addressSets = {addressSet, index}
            this.$store.commit('editAddress', addressSets)
            this.$router.push('/address')
        }
    },
    mounted() {
        this.getInfo()
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
