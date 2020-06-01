// 跳转页面域名前缀配置
const baseURLs = {
  production: '//zhiai.live',
  test: '//dev.zhiai.live',
  dev: '//dev.zhiai.live'
}

// 接口 baseURL
const apiBaseURLs = {
  production: 'https://apigateway.zhiai2019.com',
  test: 'https://testapigateway.zhiai2019.com',
  dev: ''
}

const baseUrl = baseURLs[process.env.NODE_ENV] || ''
const apiBaseURL = apiBaseURLs[process.env.NODE_ENV] || ''

export {
  baseUrl,
  apiBaseURL
}
