<template lang="pug">
  div.go-receive1( ref="go-receive1" )
    div.header
      img( :src="imageData" )
      div.explain 操作图解
    div.explain-box
      span 已复制“
      span 挚爱佳缘
      span ”到剪贴板
    div.content 在微信搜索框中粘贴即可搜索"挚爱佳缘"
    div.bottom-btn
      div.button(@click="wxCopy") 知道了，去微信关注
      input(ref="adhibition", readonly="readonly", style="position: fixed;top: -999px;left: 0", value="挚爱佳缘")
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'go-receive',
  data () {
    return {
      status: true,
      imageData: 'https://avatar.csdn.net/E/9/1/3_w15321271041.jpg'
    }
  },
  methods: {
    hideBox (e) {
      const boxDom = this.$refs['go-receive1']
      // contains检测一个元素包含在另一个元素之内
      if ((boxDom && boxDom.contains(e.target)) || e.target.className === 'btn') {
        // 除了btn 以及 mask-layer 其余点击都为fales
        this.status = true
      } else {
        this.status = false
      }
      // 向父组件传值
      this.$emit('showMask', this.status)
    },
    wxCopy () {
      this.$refs['adhibition'].select()
      document.execCommand('copy')
      Toast('复制成功')
      var locatUrl = 'weixin://'
      if (/ipad|iphone|mac/i.test(navigator.userAgent)) {
        var ifr = document.createElement('iframe')
        ifr.src = locatUrl
        ifr.style.display = 'none'
        document.body.appendChild(ifr)
      } else {
        window.location.href = locatUrl
      }
    }
  },
  mounted () {
    // 页面加载的时候调用监听
    document.addEventListener('click', this.hideBox)
  },

  beforeDestroy () {
    document.removeEventListener('click', this.hideBox)
  }

}
</script>

<style scoped lang="scss">
  .go-receive1 {
    padding: 50px;
    width: 100%;
    .header {
      height: 220px;
      position: relative;
      img {
        height: 100%;
        width: 100%;
      }
      .explain {
        position: absolute;
        right: 10px;
        bottom: 0;
        font-size: 24px;
        line-height: 48px;
        color: #9e9ca4;
      }
    }

    .explain-box {
      padding-top: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 30px;
      color: #ffffff;
    }

    .explain-box {
      line-height: 64px;
      span:nth-child(2) {
        color: #deb175;
      }
    }

    .content {
      line-height: 60px;
      text-align: center;
      font-size: 24px;
      color: #9e9ca4;
    }

    .bottom-btn {
      margin-top: 60px;
      text-align: center;
      .button {
        display: inline-block;
        width: 310px;
        height: 72px;
        line-height: 72px;
        font-size: 24px;
        color: #fff;
        text-align: center;
        background-color: #08c161;
        box-shadow: 0px 2px 29px 1px
        rgba(9, 14, 28, 0.6);
        border-radius: 36px;
      }
    }
  }
</style>
