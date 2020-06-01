import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Message from '@/components/message'
import HlepResolve from './views/help-resolve.vue'
import List from './views/list.vue'
import { Popup } from 'vant'
import '@/config/axios'
import JSBridge from '@/modules/js-bridge'
import initSkin from '@/modules/skin'
initSkin()
Vue.config.productionTip = false
// 全局注册 JS Bridge
const bridge = JSBridge.init()
Vue.prototype.$bridge = bridge
Vue.use(Message)
Vue.use(VueRouter)
Vue.use(Popup)
const routes = [
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/list/:id',
    name: 'post',
    component: HlepResolve
  },
  {
    path: '/*',
    redirect: '/list'
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
