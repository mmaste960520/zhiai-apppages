import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Message from '@/components/message'
import Fillform from './views/fill-form.vue'
import Submitfinish from './views/submit-finish.vue'
import JSBridge from '@/modules/js-bridge'
import initSkin from '@/modules/skin'
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
    path: '/fill-form',
    component: Fillform,
    name: 'fillform'
  },
  {
    path: '/submit-finish',
    component: Submitfinish,
    name: 'submit-finish'
  },
  {
    path: '/*',
    redirect: '/fill-form'
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
