import Vue from 'vue'
import App from './App.vue'

import initSkin from '@/modules/skin'

Vue.config.productionTip = false

initSkin()

new Vue({
  render: h => h(App)
}).$mount('#app')
