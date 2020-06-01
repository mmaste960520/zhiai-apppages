import Vue from 'vue'
import App from './App.vue'
import Message from '@/components/message'
import JSBridge from '@/modules/js-bridge'
import initSkin from '@/modules/skin'

import '@/config/axios'
initSkin()
Vue.config.productionTip = false
Vue.use(Message)
// 全局注册 JS Bridge
const bridge = JSBridge.init()
Vue.prototype.$bridge = bridge
new Vue({
  render: h => h(App)
}).$mount('#app')
