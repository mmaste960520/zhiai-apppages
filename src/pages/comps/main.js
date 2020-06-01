import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { Button, Dialog, Toast } from 'vant'

import JSBridge from '@/modules/js-bridge'
import Message from '@/components/message'

import MessagePage from './views/message.vue'
import WarpperPage from './views/warpper.vue'
import JsBridgePage from './views/js-bridge.vue'
import VantPage from './views/vant.vue'
import '@/config/axios.js'

Vue.config.productionTip = false
Vue.use(Message)
Vue.use(VueRouter)

Vue.use(Button)
Vue.use(Dialog)
Vue.use(Toast)

// 全局注册 JS Bridge
const bridge = JSBridge.init()
Vue.prototype.$bridge = bridge

// 路由配置
const routes = [
  {
    path: '/message',
    component: MessagePage
  },
  {
    path: '/warpper',
    component: WarpperPage
  },
  {
    path: '/vant',
    component: VantPage
  },
  {
    path: '/js-bridge',
    component: JsBridgePage
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
