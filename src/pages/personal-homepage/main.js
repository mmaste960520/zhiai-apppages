import App from './App.vue'
import Vue from 'vue'
import Axios from 'axios'
import JSBridge from '@/modules/js-bridge'
import Qs from 'qs'
import initSkin from '@/modules/skin'
import whichPlatform from '@/modules/which-platform'
import '@/config/axios'
initSkin()
// 全局注册 JS Bridge
const bridge = JSBridge.init()
Vue.prototype.$bridge = bridge
Vue.prototype.$qs = Qs

Vue.config.productionTip = false
Vue.prototype.$axios = Axios
let parmse = Qs.parse(window.location.search, { ignoreQueryPrefix: true })
Axios.interceptors.request.use((config) => {
  if (whichPlatform() === 'web') {
    config.headers['accessToken'] = parmse.accessToken || 'guest001'
    config.headers['uuid'] = parmse.myUid || 'guest001'
  }
  return config
})
new Vue({
  render: h => h(App)
}).$mount('#app')
