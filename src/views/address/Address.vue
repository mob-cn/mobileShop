<template>
  <div class="l-address">
    <Header>
        <template v-slot:center>
            <p>收货地址</p>
        </template>
        <template v-slot:right>
            <router-link to='/address/addAddress' class='l-addAddress'>新增地址</router-link>
        </template>
    </Header>
    <div class='l-addressWrapper default'>
      <LogisticsCard
        class='default'
        :isDefault='true' 
        :name='defaultAddress.name'
        :phoneNumber='defaultAddress.phoneNumber'
        :addressDetails='defaultAddress.addressDetails'
        :street='defaultAddress.street'
        :id='defaultAddress.id'
      />
    </div>
    <div class='l-addressWrapper'>
      <LogisticsCard 
        v-for='item of addressList' 
        :key='item.id' 
        :isDefault='false'
        :name='item.name'
        :phoneNumber='item.phoneNumber'
        :addressDetails='item.addressDetails'
        :street='item.street'
        :id='item.id'
        :default='item.default'
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '../layout/header'
import LogisticsCard from '@/components/LogisticsCard'
import axios from 'axios'
export default {
  name: 'Address',
  components: {
    Header,
    LogisticsCard
  },
  computed: {
    ...mapState([
      'allAddress'
    ]),
    addressList() {
      const defaultIndex = this.allAddress.findIndex((item) => item.defaultAddress)
      const addressList = [...this.allAddress]
      addressList.splice(defaultIndex, 1)
      return [...addressList]
    },
    defaultAddress() {
      return this.allAddress.find(item => item.defaultAddress)
    }
  },
  methods: {
    initAddress() {
      axios.get('/api/l-address.json').then((res) => {
        const allAddressList = res.data.data
        this.$store.dispatch('getAllAddress', allAddressList)
      })
    }
  },
  mounted() {
    const allAddress = this.$store.state.allAddress
    if (!allAddress.length) {
      this.initAddress()
    }
  }
}
</script>
<style lang="less" scoped>
  .l-address {
    text-align: center;
    .l-addAddress {
      color: #C1AB96;
    }
    .l-addressWrapper {
      margin-top: 25px;
      box-sizing: border-box;
      padding: 0 15px;
      display: inline-block;
      width: 90%;
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0 0 8px 3px #ccc;
      &.default {
        background-color: #C1AB96;
      }
    }
  }
</style>

