import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import FillInformation from './view/fill-personal-information'
import PayForTest from './view/payfor-test'
import JoinPersonsList from './view/personal-list'

import JSBridge from '@/modules/js-bridge'
import Post from './Post'
import '@/config/axios'

import initSkin from '@/modules/skin'

Vue.config.productionTip = false
Vue.use(VueRouter)

initSkin()
// 全局注册 JS Bridge
const bridge = JSBridge.init()
Vue.prototype.$bridge = bridge
const routes = [
  {
    path: '/fill-personal-information',
    name: 'fill-personal-information',
    component: FillInformation
  },
  {
    path: '/payfor-test',
    name: 'payfor-test',
    component: PayForTest
  },
  {
    path: '/join-persons-list',
    name: 'join-persons-list',
    component: JoinPersonsList
  },
  {
    path: '/:id',
    name: 'active-detail',
    component: Post
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
