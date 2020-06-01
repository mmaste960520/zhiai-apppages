import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import GoodReputation from './module/good-reputation'
import Weekly from './module/weekly'
import JSBridge from '@/modules/js-bridge'
import Qs from 'qs'
import Axios from 'axios'
import initSkin from '@/modules/skin'

import '@/config/axios'
initSkin()
const uid = Qs.parse(window.location.search, { ignoreQueryPrefix: true }).uid
Vue.config.productionTip = false
Vue.use(VueRouter)
// 全局注册 JS Bridge

const bridge = JSBridge.init()
Vue.prototype.$bridge = bridge
Vue.prototype.$uid = uid
Vue.prototype.$axios = Axios
const routes = [
  {
    path: '/GoodReputation',
    component: GoodReputation,
    title: '好评榜'
  },
  {
    path: '/Weekly',
    component: Weekly,
    title: '周榜'
  },
  {
    path: '/*',
    redirect: '/GoodReputation'
  }
]
const router = new VueRouter({
  mode: 'hash',
  routes
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
