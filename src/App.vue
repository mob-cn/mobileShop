<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <h1>this is app</h1>
    <router-link to="/goods">商品详情面</router-link> -->
   
    <router-view></router-view>
    <keep-alive>
    <Tabbar v-model="active" route  v-show="!$route.meta.keep">
      <TabbarItem to="/home" icon="home-o">首页</TabbarItem>
      <TabbarItem to="/sort/0" icon="apps-o">分类</TabbarItem>
      <TabbarItem to="/info" icon="envelop-o">消息</TabbarItem>
      <TabbarItem to="/shoppingcar" icon="shopping-cart-o">购物车</TabbarItem>
      <TabbarItem to="/mine" icon="friends-o">我的</TabbarItem>
    </Tabbar>
    </keep-alive>
  </div>
</template>
<style lang="less">
  @import './reset.css';
</style>
<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
    components:{
      Tabbar, 
      TabbarItem
    },
    data(){
      return{
          active:0,
          show:true
      }
    },
    //监听路由的改变
    watch:{
      $route(e){
        console.log(e)
        if(e.path !== '/login')
        {
          

        }
      }
    }
}
</script>

