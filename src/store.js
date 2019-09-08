import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    evaluate:{},
        // 登录后的电话号码
        phone: "",
        homeFaddishCard: [],
        addShop: [],
        homeStore: [],
        //
        allAddress: [],
        coupons: [],
        privateInfo: {}
  },
  mutations: {
    evaluate(state,data){
      state.evaluate = data;
    },
    addPhome(state, num) {
      // 登录后将电话号码，储存在store中
      state.phone = num;
  },
  addHomeFaddishCard(state, arr) {
      // 将商品储存在数组中
      state.homeFaddishCard = arr;
  },
  addHomeStore(state, arr) {
      // 将商店储存在数组中
      state.homeStore = arr;
  },

  // 搜索方法
  addShopSearch(state, value) {
      // 定义一个新数组
      let arr = [];
      // 将字符串转为正则，并且转为大写
      let reg = new RegExp(value.toUpperCase());
      state.homeFaddishCard.map((item, index) => {
          // 正则校验
          if (reg.test(item.closeName)) {
              // 匹配到的item添加到数组中
              arr.push(item);
          }
      });
      // 存进store中
      state.addShop = arr;
  },
  // 根据价格搜索商品
  searchPriceShop(state, data) {
      let arr = [];
      if (data.index === 0) {
          data.sort
              ? state.addShop.sort(
                    (obj1, obj2) => obj1["collect"] - obj2["collect"]
                )
              : state.addShop.sort(
                    (obj1, obj2) => obj2["collect"] - obj1["collect"]
                );
      } else if (data.index === 1) {
          data.sort
              ? state.addShop.sort(
                    (obj1, obj2) =>
                        obj1["HaveBeenSold"] - obj2["HaveBeenSold"]
                )
              : state.addShop.sort(
                    (obj1, obj2) =>
                        obj2["HaveBeenSold"] - obj1["HaveBeenSold"]
                );
      } else if (data.index === 2) {
          data.sort
              ? state.addShop.sort(
                    (obj1, obj2) => obj1["newPrice"] - obj2["newPrice"]
                )
              : state.addShop.sort(
                    (obj1, obj2) => obj2["newPrice"] - obj1["newPrice"]
                );
      }
    },
    //yang
    getAllAddressList(state, allAddress) {
        state.allAddress = allAddress
    },
    addAddress(state, addressSet) {
        const allAddress = state.allAddress
        const id = allAddress.length
        addressSet.id = id
        if (addressSet.defaultAddress) {
            for (let i = 0; i < allAddress.length; i ++) {
                allAddress[i].defaultAddress = false
            }
        }
        state.allAddress.push(addressSet)
    },
    editAddress(state, addressSets) {
        const allAddress = state.allAddress
        const { addressSet, index } = addressSets
        if (addressSet.defaultAddress) {
            for (let i = 0; i < allAddress.length; i ++) {
                allAddress[i].defaultAddress = false
            }
        }
        state.allAddress[index] = addressSet
    },
    setCoupons(state, coupons) {
        state.coupons = coupons
    },
    setPrivateInfo(state, privateInfo) {
        state.privateInfo = privateInfo
    },
    editPrivateInfo(state, newPrivateInfo) {
        state.privateInfo = newPrivateInfo
    },
    editInfo(state, newInfo) {
        state.privateInfo = Object.assign(state.privateInfo, newInfo)
    },
        //wang
        deleteMyFormItem(state, id) {
            let idx = state.myForm[0].findIndex(item => item.id === id);
            state.myForm[0].splice(idx, 1);
            // 强制改变整个store的值
            // this.store.replaceState(state.myForm.splice(idx, 1))
          },
          setOriginalMyForm(state, data) {
            if (state.myForm.length === 0) {
              state.myForm.push(data);
              setTimeout(() => {
                state.loadingComplete = true;
              }, 500)
            }
          },
          changeFlag(state, data) {
            state.flag = data;
          },
          changeFormStatus(state, data) {
            let arr = state.myForm[0];
            let idx = state.myForm[0].findIndex(item => item.id === data.id);
            arr[idx][data.type] = data.msg;
            state.myForm.length = 0;
            state.myForm.push(arr);
            // console.log(state.myForm)
          }
  },

  actions: {
      // 添加商品
    syncAddHomeFaddishCard(state, arr) {
        this.commit("addHomeFaddishCard", arr);
    },
    // 添加商店
    syncAddHomeStore(state, arr) {
        this.commit("addHomeStore", arr);
    },
    //yang
    getAllAddress({ commit }, allAddress) {
        commit('getAllAddressList', allAddress)
    },
    getCoupons({ commit }, direction) {
        axios.get(direction).then((res) => {
            commit('setCoupons', res.data.data)
        })
    },
    addPrivateInfo({ commit }) {
        axios.get('/api/l-privateInfo.json').then((res) => {
            commit('setPrivateInfo', res.data.data)
        })
    }

  }
})
