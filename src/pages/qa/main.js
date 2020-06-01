import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Message from '@/components/message'
import QuestionResolve from './views/question-resolve.vue'
import List from './views/list.vue'
import { Popup } from 'vant'
import '@/config/axios'
import JSBridge from '@/modules/js-bridge'
import initSkin from '@/modules/skin'

initSkin()
Vue.config.productionTip = false
Vue.use(Message)
Vue.use(VueRouter)
Vue.use(Popup)

const bridge = JSBridge.init()
Vue.prototype.$bridge = bridge
const routes = [
  {
    path: '/questions',
    name: 'questions',
    component: List
  },
  {
    path: '/questions/:id',
    name: 'question',
    component: QuestionResolve
  },
  {
    path: '/*',
    redirect: '/questions'
  }
]

const router = new VueRouter({
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
