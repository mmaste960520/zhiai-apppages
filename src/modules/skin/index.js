import whichPlatform from '@/modules/which-platform'
import JSBridge from '@/modules/js-bridge'
import Vue from 'vue'
// 初始化 JSBridge
const bridge = JSBridge.init()
Vue.prototype.$skin = Vue.observable({ name: '' })
/**
 * 皮肤通用类初始化
 *
 */
function initSkin () {
  const platform = whichPlatform()
  if (platform === 'web') {
    document.body.classList.add('x-background')
  }

  // 获取皮肤
  bridge.getInfo({
    data: {
      key: 'skin'
    },
    callback (data) {
      // 设置皮肤
      document.body.setAttribute('data-skin', data.skin)
      Vue.prototype.$skin.name = data.skin
    }
  })
}

export default initSkin
