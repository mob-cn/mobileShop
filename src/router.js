import Vue from 'vue'
import Router from 'vue-router'
//00
import ProductDetail from './views/ProductDetail.vue'
import Evaluate from './views/Evaluate'
//11
import Message from "./views/Message/Message";
import MessageList from "./views/Message/MessageList/MessageList";
import ShoppingCar from "./views/ShoppingCar/ShoppingCar";
import Mine from "./views/Mine/Mine.vue";
import Favorite from "./views/Mine/Favorites";
import AttentionStore from "./views/Mine/AttentionStore";
import Coupons from "./views/Mine/Coupons";

import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import HomeDiscount from "./views/HomeDiscount.vue";
import HomeHaddish from "./views/HomeFaddish.vue";
import HomeSearch from "./views/Homesearch.vue";
//xzw
//引入Sort 页面
import Sort from './views/Sort/Sort.vue';
import SortCard from './components/SortCard/SortCard.vue';
//引入Info页面
import Info from './views/Info/Info.vue';
//引入通知管理页面
import InfoSetting from './views/InfoSetting/InfoSetting';
//cl
// 引入路由组件
import Store from './Cstore/views/Store'
import Search from './Cstore/views/Search'
// Store的子路由
import sHome from './Cstore/views/Store/Home'
import sGoods from './Cstore/views/Store/Goods'
//yang
import Address from './views/address/Address.vue'
import AddAddress from './views/address/AddAddress.vue'
import EditAddress from './views/address/EditAddress.vue'
import getCoupon from './views/getCoupon/getCoupon.vue'
import Setting from './views/setting/setting.vue'
import PhoneEdit from './views/setting/phoneEdit.vue'
import PrivateInfo from './views/setting/privateInfo.vue'
// 我的订单
import MyFormRouter from './components/myForm/views/MyFormRouter';
import MyFormDetail from './components/myForm/views/MyFormDetail';
import MyFormeEvaluatePage from './components/myForm/views/MyFormeEvaluatePage';
import MyFormMain from './components/myForm/views/MyFormMain';
import MyFormAll from './components/myForm/views/MyFormAll';
import MyFormPayment from './components/myForm/views/MyFormPayment';
import MyFormShipments from './components/myForm/views/MyFormShipments';
import MyFormHarvest from './components/myForm/views/MyFormHarvest';
import MyFormeEvaluate from './components/myForm/views/MyFormeEvaluate';
import MyFormLogistics from './components/myForm/views/MyFormLogistics';
import MyFormRefund from './components/myForm/views/MyFormRefund';
import MyFormAppleSale from './components/myForm/views/MyFormAppleSale';
import MyFormService from './components/myForm/views/MyFormService';
import MyFormReturnsale from './components/myForm/views/MyFormReturnsale';
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
      // 首页
    {
        path: "/",
        name: "home",
        component: Home
    },
    // home登录页面
    {   path: "/login", 
        meta:{
            keep:true//导航栏在该页面不予显示
         },
        component: Login 
    },
    // home限时页面
    { path: "/homediscount", component: HomeDiscount },
    // home爆款页面
    { path: "/homefaddish", component: HomeHaddish },
    // 搜索页面
    { path: "/search", component: HomeSearch },
    // 分类页面
    { path: "/sort" },

    {
        path: "/message",
        component: Message
    },
    {
        path: "/messageList/:id",
        component: MessageList
    },
    {
        path: "/shoppingcar",
        component: ShoppingCar
    },
    {
        path: "/mine",
        component: Mine
    },
    {
        path: "/favorite",
        component: Favorite
    },
    {
        path: "/attentionstore",
        component: AttentionStore
    },
    {
        path: "/coupons",
        component: Coupons
    },

    // 默认路由
    { path: "*", component: Home },
    //product
    {
      path: '/productdetail',
      name: 'productdetail',
      meta:{
        keep:true//导航栏在该页面不予显示
     },
      component: ProductDetail
    },
    {
      path: '/evaluate',
      name: 'evaluate',
      meta:{
        keep:true//导航栏在该页面不予显示
     },
      component: Evaluate
    },
    //xzw
    // { path: '/sort', redirect: '/sort/0' },
    {
        path: '/sort',
        redirect: '/sort/0',
        component: Sort,
        children: [
          { path: '0', component: SortCard },
          { path: '1', component: SortCard },
          { path: '2', component: SortCard },
          { path: '3', component: SortCard },
          { path: '4', component: SortCard },
          { path: '5', component: SortCard },
          { path: '6', component: SortCard },
          { path: '7', component: SortCard },
          { path: '8', component: SortCard },
          { path: '9', component: SortCard },
          { path: '10', component: SortCard },
          { path: '11', component: SortCard },
          { path: '12', component: SortCard },
          { path: '13', component: SortCard },
          { path: '14', component: SortCard },
          { path: '15', component: SortCard },
          { path: '16', component: SortCard },
          { path: '17', component: SortCard },
          { path: '18', component: SortCard }
        ]
      },
      {
        path: '/info', component: Info
      },
      {
        path: '/infosetting', component: InfoSetting
      },
      //cl
      {
        path: '/store',
        name: 'store',
        meta:{
            keep:true//导航栏在该页面不予显示
         },
        component: Store,
        children: [
            // 子路由采用相对路径
            { path: 'home', name: 'home', component: sHome },
            { path: 'goods', name: 'goods', component: sGoods }
        ]
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    },
    //yang
    {
        path: '/address',
        name: 'address',
        component: Address
      },
      {
        path: '/address/addAddress',
        name: 'addAddress',
        component: AddAddress
      },
      {
        path: '/address/editAddress/:index',
        name: 'editAddress',
        props: true,
        component: EditAddress
      },
      {
        path: '/getCoupon',
        name: 'coupon',
        component: getCoupon
      },
      {
        path: '/setting',
        name: 'setting',
        component: Setting
      },
      {
        path: '/setting/phoneEdit',
        name: 'phoneEdit',
        component: PhoneEdit
      },
      {
        path: '/setting/privateInfo',
        name: 'privateInfo',
        component: PrivateInfo
      },
      { 
        // 我的订单路由
        path: '/myForm/', 
        component: MyFormRouter,
        children: [
          { path: 'detail', component: MyFormDetail },
          { path: 'evaluatePage', component: MyFormeEvaluatePage },
          { path: 'applySale', component: MyFormAppleSale },
          { path: 'logistics', component: MyFormLogistics },
          { path: 'refund', component: MyFormRefund },
          { path: 'connect', component: MyFormService },
          { path: 'returnsale', component: MyFormReturnsale },
          { 
            path: 'main', 
            component: MyFormMain,
            children: [
              { path: 'all', meta: {index: 3}, component: MyFormAll },
              { path: 'payment', meta: {index: 4}, component: MyFormPayment },
              { path: 'shipments', meta: {index: 5}, component: MyFormShipments },
              { path: 'harvest', meta: {index: 6}, component: MyFormHarvest },
              { path: 'evaluate', meta: {index: 7}, component: MyFormeEvaluate },
              { path: '/', redirect: 'all' }
            ]
          },
          { path: '/', redirect: 'main' }
        ]
      }
  ]
})
