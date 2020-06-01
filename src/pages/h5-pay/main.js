import Vue from 'vue'
import App from './App.vue'
import '@/config/axios'
import JSBridge from '@/modules/js-bridge'
const bridge = JSBridge.init()
Vue.prototype.$bridge = bridge
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
