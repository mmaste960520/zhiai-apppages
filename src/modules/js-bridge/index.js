import whichPlatform from '@/modules/which-platform'

export default class JSBridge {
  constructor () {
    this.instance = null
    this.id = 0
    this.callbacks = {}
    this.injectBridge()
    this.ua = whichPlatform()
  }

  getInfo (args) {
    const { data, callback } = args
    this.invoke('getInfo', data, callback)
  }

  jump (args) {
    this.invoke('jump', args)
  }
  /**
   * 打开相册
   * @param {uid,index}
   */
  openAlbum (args) {
    this.invoke('openAlbum', args)
  }

  close () {
    this.invoke('close')
  }

  pay (args) {
    const { callback } = args
    this.invoke('pay', null, callback)
  }

  threeLevel (args) {
    const { callback } = args
    this.invoke('threeLevel', null, callback)
  }
  /**
   * 个人主页分享唤起
   * @param {uid，url}
   */
  share (args) {
    this.invoke('share', args)
  }
  /**
   * 进入直播间页面
   * @param {uid}
   */
  streaming (args) {
    this.invoke('streaming', args)
  }
  /**
   * 送礼组件
   * @param {uid}
   */
  giveGifts (args) {
    this.invoke('giveGifts', args)
  }
  /**
   * 发送消息页面
   *  @param {uid}
   */

  sendMessage (args) {
    this.invoke('sendMessage', args)
  }
  /**
   * 唤起支付页面
   * @param {uid} args
   */
  guardPay (args) {
    this.invoke('guardPay', args)
  }
  /**
   * 销毁web本地储存
   */
  deleteLocalStorage () {
    window.localStorage.clear()
  }
  /** */

  invoke (bridgeName, data, callback) {
    this.callbacks[++this.id] = callback
    console.log(callback)
    const postData = {
      bridgeName,
      data: data || {},
      callbackID: this.id
    }
    console.log(this)
    console.log(postData)

    if (this.ua === 'ios') {
      window.webkit.messageHandlers.nativeBridge.postMessage(JSON.stringify(postData))
    }

    if (this.ua === 'android') {
      window.nativeBridge.postMessage(JSON.stringify(postData))
    }
  }

  injectBridge () {
    window.receiveMessage = (msg) => {
      const { bridgeName, data, callbackID } = msg
      if (callbackID && this.callbacks[callbackID]) {
        const objectData = typeof data === 'string' ? JSON.parse(data) : data
        this.callbacks[callbackID](objectData)
        return
      }
      this[bridgeName] && this[bridgeName]()
    }
  }

  static init () {
    if (!this.instance) {
      this.instance = new JSBridge()
    }
    return this.instance
  }
}
