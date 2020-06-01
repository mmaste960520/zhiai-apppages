import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Message from '@/components/message'
import InfoReport from './views/info-report.vue'
import initSkin from '@/modules/skin'
import JSBridge from '@/modules/js-bridge'
import { Uploader } from 'vant'
import '@/config/axios'
Vue.config.productionTip = false
Vue.use(Message)
Vue.use(VueRouter)
Vue.use(Uploader)
initSkin()
// 全局注册 JS Bridge
const bridge = JSBridge.init()
Vue.prototype.$bridge = bridge
const routes = [
  {
    path: '/info-report',
    component: InfoReport,
    name: 'info-report'
  },
  {
    path: '/*',
    redirect: '/info-report'
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
