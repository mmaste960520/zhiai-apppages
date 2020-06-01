<template lang="pug">
  div.fillform
    div.container
      div.leave-message
        textarea(style="resize:none", :maxlength="maxlength", v-model="desc", placeholder="请描述您遇到的问题，意见建议可以写在这里，我们获悉后将尽快改进...")
        div.tip-words
          span#leave-message-num.last {{desc.length}}
          span.total /100
      div.upload-screenshot
        p.title 上传图片
        p.small-title (每次只能选择一张,最多6张)
      div.upload-function
        van-uploader.photo-list(v-model="fileList", :max-count="6")
      div.bottom-tip
        p.tip1
          span.single 意见反馈电话 ：
          span.highlight.phonenumber 400 1131 499
        p.tip2
          span.single 意见反馈邮箱 :
          span.highlight.email service@zhiai2019.com
      div.submit(@click="submitClick") 确认提交
</template>
<script>
import { Toast } from 'vant'
import axios from 'axios'
export default {
  name: 'advice-feed-back',
  data () {
    return {
      textVal: 0,
      desc: '',
      maxlength: 100,
      fileList: [],
      photoids: [],
      file: ''
    }
  },
  methods: {
    submitClick () {
      // 反馈内容为空
      if (!this.desc) {
        Toast('请输入反馈内容')
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
        feedbackType: 'opinion',
        photoids: urls || []
      })
      // 与产品确认 不管成功或失败都提示提交成功
      Toast('意见反馈提交成功')
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
          resolve(response)
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

<style lang="scss">
  @import '@/styles/main';
  .fillform {
    font-size: 26px;
    background: #ffffff;
    min-height: 95vh;
    border-radius: 20px;
    box-sizing: border-box;
    position: relative;
      .container{
        .leave-message {
          position: relative;
          margin: 0 44px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 42px;
            textarea {
              background: rgba(24, 27, 34, 0.04);
              color: #101727;
              border: #364053;
              outline: none;
              border-radius: 12px;
              width: 610px;
              height: 380px;
              font-size: 30px;
              padding: 30px;
            }
            textarea::-webkit-input-placeholder {
              color: rgba(16, 23, 39, 0.4);
            }
            .tip-words {
              position: absolute;
              right: 38px;
              bottom: 18px;
                .last,
                .total {
                  color: #9b9ea5;
                }
            }
        }
        .upload-screenshot {
          color: #e0e1e3;
          margin: 40px 0 0 42px;
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
        .upload-function {
          margin: 0px 0 0 42px;
        }
        .bottom-tip {
          color: #5c5d61;
          margin: 60px 0 0 42px;
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
          color: #714110;
          width: 406px;
          height: 76px;
          margin: 120px auto 70px;
          border-radius: 36px;
          background: linear-gradient(#f9ca90 30%, #eabb83 60%, #dcab76 100%);
        }
      }
  }
</style>
