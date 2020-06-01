import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Message from '@/components/message'
import LoveBinding from './views/love-binding.vue'
import BindingFailer from './views/binding-failer.vue'
import BindingScussess from './views/binding-scussess.vue'
import InviteConfirm from './views/invite-confirm.vue'
import Recover from './views/recover-single-scussess.vue'
import FeelingStatusPage from './views/feeling-status-page.vue'
import PersonDevice from './views/person-device.vue'
import MutualAttention from './views/mutual-attention'
import InvitedPersonToast from './views/invited-person-toast'
import { Swipe, SwipeItem, Dialog } from 'vant'
import '@/config/axios'
import initSkin from '@/modules/skin'
Vue.config.productionTip = false
initSkin()
Vue.use(Message)
Vue.use(VueRouter)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Dialog)
const routes = [
  {
    path: '/love-binding',
    component: LoveBinding,
    name: 'love-binding'
  },
  {
    path: '/binding-failer',
    component: BindingFailer
  },
  {
    path: '/binding-scussess',
    component: BindingScussess
  },
  {
    path: '/invite-confirm',
    component: InviteConfirm
  },
  {
    path: '/recover-single-scussess',
    component: Recover
  },
  {
    path: '/feeling-status-page',
    component: FeelingStatusPage
  },
  {
    path: '/person-device',
    component: PersonDevice
  },
  {
    path: '/mutual-attention',
    component: MutualAttention
  },
  {
    path: '/invited-person-toast',
    component: InvitedPersonToast
  },
  {
    path: '/*',
    redirect: '/feeling-status-page'
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
