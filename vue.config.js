const path = require('path')
const pages = require('./config/pages')

module.exports = {
  pages,
  chainWebpack: config => {
    config.module
      .rule('raw')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  },
  configureWebpack: {
    resolve: {
      alias: {
        config: path.resolve(__dirname, './config'),
        vant: path.resolve(__dirname, './src/libs/vant')
      }
    }
  },
  devServer: {
    // proxy: 'http://192.168.3.212:9527'
    proxy: 'https://testapigateway.zhiai2019.com'
  },
  publicPath: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test'
    ? '/app-pages/'
    : '/'
}
