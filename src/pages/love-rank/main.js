import App from './App.vue'
import Vue from 'vue'
import '@/config/axios'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
