import axios from 'axios'
import { getDeviceUid } from '@/modules/get-device-uid'
import whichPlatform from '@/modules/which-platform'
import JSBridge from '@/modules/js-bridge'
import { apiBaseURL } from '@/config/domains'
const bridge = JSBridge.init()

axios.defaults.headers.common['deviceUid'] = getDeviceUid()
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'
axios.defaults.headers.common['platform'] = 'zajy_web_1'
// axios.defaults.headers.common['uuid'] = '24086106'
axios.defaults.headers.common['requestTimes'] = Date.now()
axios.defaults.baseURL = apiBaseURL

// 是否从客户端拿去到数据
let isGet = false
// 获取平台
const platform = whichPlatform()
let headersData = {}
axios.interceptors.request.use(async (config) => {
// 非 web 平台（iOS, Android）走 bridge 逻辑
  if (platform !== 'web' && !isGet) {
    await info()
    headersData.accessToken = window.localStorage.getItem('accessToken')
    headersData.uuid = window.localStorage.getItem('uuid')
  }
  if (headersData.accessToken) {
    config.headers['accessToken'] = headersData.accessToken
  }
  if (headersData.uuid) {
    config.headers['uuid'] = headersData.uuid
  }
  return config
})

// 添加响应拦截器
axios.interceptors.response.use(
  (res) => {
    return res.data
  }, error => {
    return Promise.reject(error)
  }
)

function info () {
  return new Promise((resolve, reject) => {
    bridge.getInfo({
      callback (data) {
        if (data.accessToken) {
          localStorage.setItem('accessToken', data.accessToken)
        }
        if (data.uuid) {
          localStorage.setItem('uuid', data.uuid)
        }
        isGet = true
      }
    })
    let timer = setInterval(() => {
      if (isGet) {
        clearInterval(timer) // 清理定时任务
        resolve()
      }
    }, 300)
    setTimeout(() => {
      clearInterval(timer) // 清理定时任务
      resolve()
    }, 5000)
  })
}
