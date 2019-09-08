import Vue from 'vue'
import App from './App.vue'
import "./utils/rem";
import router from './router'
import store from './store'
import axios from 'axios';
//引入全局注册的Header
import Header from './components/Header/Header'
import './reset.css'
// 引入mint-ui组件库
import Mint from 'mint-ui';
//所需使用的ui模块
import './assets/iconfont/iconfont.css'
// import { Icon } from 'vant';
// import { Swipe, SwipeItem, Lazyload} from 'vant';
// Vue.use(Lazyload);
// Vue.use(Icon);
// Vue.use(Swipe).use(SwipeItem);
Vue.use(Mint);
Vue.config.productionTip = false
// 安装axios
Vue.prototype.$http = axios;
Vue.component('Header', Header)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
