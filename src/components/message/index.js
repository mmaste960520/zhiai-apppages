import Message from './component.vue'

let installed = false

export default {
  install (Vue, options) {
    if (installed) {
      return
    }

    Vue.prototype.xMessage = function (param) {
      const MessageComp = Vue.extend(Message)

      const messageVM = new MessageComp({
        propsData: {
          msg: param.msg,
          delay: param.delay || 3000
        }
      })

      const messageElement = document.createElement('div')
      document.body.appendChild(messageElement)
      messageVM.$mount(messageElement)
    }

    installed = true
  }
}
