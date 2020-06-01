import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import GuardCard from './components/guard-card'
import ExaminationCard from './components/examination-card'
import JSBridge from '@/modules/js-bridge'
import '@/config/axios'

Vue.use(VueRouter)
const bridge = JSBridge.init()
Vue.prototype.$bridge = bridge
const routes = [
  {
    path: '/guard-card',
    name: 'guard-card',
    component: GuardCard
  },
  {
    path: '/examination-card',
    name: 'examination-card',
    component: ExaminationCard
  },
  {
    path: '/*',
    redirect: '/guard-card'
  }
]
const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
