import Vue from 'vue'
import App from './App.vue'
import Message from '@/components/message'
import JSBridge from '@/modules/js-bridge'
import '@/config/axios'

// 全局注册 JS Bridge

const bridge = JSBridge.init()
Vue.prototype.$bridge = bridge
Vue.config.productionTip = false
Vue.use(Message)
new Vue({
  render: h => h(App)
}).$mount('#app')
