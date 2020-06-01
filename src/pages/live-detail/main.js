import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Post from './Post'
import '@/config/axios'
Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path: '/:id',
    name: 'live-detail',
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
