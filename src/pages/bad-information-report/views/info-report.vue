<template lang="pug">
  div.info-report
    div.report-type
      popup( v-model="show" position="bottom" :overlay="true")
        picker(
          show-toolbar,
          title="举报类型",
          :columns="columns",
          @cancel="onCancel",
          @confirm="onConfirm",
          @change="onChange",
          :default-index="2"
        )
      p.type(@click="ShowPup")
        input(v-model="slelctType", readonly)
      p.arrow-icon(@click="ShowPup")
        img(src="../image/arrow-down.png")
    div.bottom-pop
    div.leave-message
      textarea.textarea(:maxlength="maxlength", v-model="desc", style="resize:none", placeholder="举报具体内容" )
      .last {{desc.length}}
      span.total /300
    div.upload-screenshot
      p.title 上传图片
      p.small-title (每次只能选择一张,最多6张)
    div.upload-function
      uploader.photo-list(v-model="fileList", :max-count="6")
    div.bottom-tip
      p.tip1
        span.single 违法不良信息举报电话 ：
        span.highlight.phonenumber 400 1131 499
      p.tip2
        span.single 违法不良信息举报邮箱 :
        span.highlight.email service@zhiai2019.com
    div.submit(@click="submitClick") 确认提交
</template>
<script>
import axios from 'axios'
import { Picker, Toast, Popup, Uploader } from 'vant'
import Qs from 'qs'
export default {
  name: 'bad-information-report',
  components: {
    Picker,
    Toast,
    Popup,
    Uploader
  },
  data () {
    return {
      textVal: 0,
      desc: '',
      maxlength: 300,
      columns: [],
      slelctType: '举报类型',
      slelctNumber: '',
      show: false,
      fileList: [],
      photoids: '',
      file: '',
      query: Qs.parse(window.location.search, { ignoreQueryPrefix: true })
    }
  },
  created () {
    axios.post('/user/helpAndQA/getFeedbackType').then((response) => {
      if (response.rsCode === '200') {
        this.columns = response.rsObject.map(item => {
          return {
            text: item.typeName,
            key: item.typeNum
          }
        })
      }
    })
  },
  methods: {
    onConfirm (value, index) {
      this.show = false
      this.slelctNumber = value.key
      this.slelctType = value.text
    },
    onCancel (value, index) {
      this.show = false
    },
    onChange (picker, value, index) {
      // this.slelctType = value.text
    },
    ShowPup () {
      this.show = true
    },
    submitClick () {
      // 反馈内容为空
      if (!this.desc) {
        Toast('请输入反馈内容')
        return
      }
      // 举报类型未选
      if (!this.slelctNumber) {
        Toast('请选择举报类型')
        return
      }
      // 有反馈图片
      if (this.fileList.length) {
        this.uploadFiles().then(data => {
          if (data.rsCode === '200') {
            const urls = data.rsObject.map(item => item.url)
            this.submit(urls)
          }
        }).catch(error => {
          console.log(error)
        })
        return
      }
      // 无反馈图片
      this.submit()
    },
    submit (urls) {
      axios.post('/user/helpAndQA/submitUserFeedback', {
        feedbackContent: this.desc,
        // 举报类型
        feedbackType: this.slelctNumber,
        photoids: urls || [],
        informantId: this.query.informantId || '',
        theInformantId: this.query.TheInformantId || '',
        roomId: this.query.roomId || ''
      })
      // 与产品确认 不管成功或失败都提示提交成功
      Toast('提交成功,我们将在24小时以内处理相关内容\n感谢您对挚爱佳缘的支持')
      setTimeout(() => {
        this.close()
      }, 1000)
    },
    uploadFiles () {
      return new Promise((resolve, reject) => {
        // 文件上传至服务器
        const bodyFormData = new FormData()
        bodyFormData.set('type', 7)
        this.fileList.forEach((item, index) => {
          bodyFormData.append('file' + (index + 1), item.file)
        })
        axios({
          headers: { 'content-type': 'multipart/form-data' },
          url: '/oss/oss/uploadFile',
          method: 'POST',
          data: bodyFormData
        }).then((response) => {
          if (response.rsCode === '200') {
            resolve(response)
          }
        }).catch((error) => {
          reject(error)
        })
      })
    },
    close () {
      this.$bridge.close()
    }
  }
}
</script>
<style lang="scss" scope>
  @import '@/styles/main';
  .info-report {
    min-height: 100vh;
    font-size: 26px;
    background: #ffffff;
    box-sizing: border-box;
    padding: 30px 26px 30px;
    border-radius: 20px;
    .report-type {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #16181f;
      border-bottom: 1px solid rgba(24, 27, 34, 0.04);
      width: 100%;
      height: 100px;
      margin-bottom: 50px;
      .type {
        input {
          border: none;
          width: 550px;
        }
      }
      .arrow-icon {
        width: 18px;
        height: 13px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .leave-message {
      position: relative;
        textarea {
          width: 100%;
          height: 420px;
          padding: 37px 32px 32px;
          color: #101727;
          font-size: 30px;
          border: #d9dade;
          outline: none;
          border-radius: 12px;
          background: rgba(24, 27, 34, 0.04);
          box-sizing: border-box;
        }
        textarea::-webkit-input-placeholder {
          color: rgba(16, 23, 39, 0.4);
        }
        .last {
          color: #9b9ea5;
          position: absolute;
          right: 76px;
          bottom: 18px;
        }
        .total {
          color: #9b9ea5;
          position: absolute;
          right: 16px;
          bottom: 18px;
        }
    }
    .upload-screenshot {
      color: #e0e1e3;
      margin: 20px 0 30px 0px;
        .title {
          color: #181b24;
          font-size: 28rpx;
        }
        .small-title {
          color: #5c5d61;
          font-size: 20rpx;
          margin-left: 12px;
          letter-spacing: 2px;
        }
        p {
          display: inline-block;
        }
    }
    .bottom-tip {
      color: #5e5f63;
      .tip2 {
        .email {
          margin-left: 18px;
        }
      }
    }
    .submit {
      font-size: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #714210;
      width: 406px;
      height: 76px;
      margin: 70px auto 0;
      border-radius: 36px;
      background: linear-gradient(#f9ca90 30%, #eabb83 60%, #dcab76 100%);
    }
  }
</style>
