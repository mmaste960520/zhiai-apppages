import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import List from './module/list'
import InfoFrom from './module/info-form'
import TripList from './module/trip-list'
import TripParticulars from './module/trip-particulars'
import PlayParticulars from './module/play-particulars'
import TripType from './module/trip-type'
import '@/config/axios'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { Toast } from 'vant'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(VueAwesomeSwiper)
Vue.use(Toast)

const routes = [{
  path: '/List',
  component: List
},
{
  path: '/InfoFrom',
  component: InfoFrom,
  title: '个人信息'
},
{
  path: '/TripType',
  component: TripType,
  title: '但双人旅游资讯'
},
{
  path: '/TripList',
  component: TripList,
  title: '旅游列表'
},
{
  path: '/TripParticulars',
  component: TripParticulars,
  title: '旅游列表详情'
},
{
  path: '/PlayParticulars',
  component: PlayParticulars,
  title: '被邀请人查看详情'
},
{
  path: '/*',
  redirect: '/List'
}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
