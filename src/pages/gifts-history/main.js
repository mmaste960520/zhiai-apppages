import Vue from 'vue'
import App from './App.vue'
import initSkin from '@/modules/skin'

import '@/config/axios'
initSkin()

Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
