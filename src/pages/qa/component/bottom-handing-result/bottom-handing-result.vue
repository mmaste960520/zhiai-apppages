<template lang="pug">
  div#bottom-handing-result
    div.bottom
      div.unresolve(is-link @click="showPopup") 未解决
      div.resolve(@click="resolve") 已解决
      van-popup(v-model="show", round, :style="{ height: '28%', width: '86%'}")
        div.contain
          p 如果您的问题还未解决
          p 请致电客服人员，我们将竭诚为您服
          p 务、持续优化在线帮助栏目
          p.through-line
          p.calll-phone
            a.phone-call(href="tel:4001-1314-99") 拨打电话: 4001 1314 99
</template>
<script>
import Axios from 'axios'
import { Toast } from 'vant'
export default {
  data () {
    return {
      show: false,
      problemId: Number
    }
  },
  methods: {

    resolve () {
      this.question()
      this.$router.go('-1')
    },
    showPopup () {
      this.show = true
    },
    // 问题是否已解决
    // problemId: 问题(id _ id) ,  solveStatus类型：0：未解决 1：已解决
    question (problemId, solveStatus) {
      let data = {
        problemId,
        solveStatus
      }
      Axios({
        url: '/user/helpAndQA/helpIsEffect',
        method: 'POST',
        data
      }).then(res => {
        if (res.rsCode === '200') {
          if (res.rsObject.result === 'success') {
            Promise.resolve(true)
            Toast.success('反馈成功')
          }
        } else {
          Toast.fail('反馈失败')
        }
      }).catch(err => {
        Toast.fail('服务异常稍后再试')
        console.log(err)
      })
    }
  },
  created () {
    this.problemId = this.$route.params.id
  }
}
</script>
<style lang="scss" scope>
  #bottom-handing-result {
    .bottom {
      height: 100px;
      display: flex;
      justify-content: space-around;
      margin-top: 80px;
        .unresolve,
        .resolve {
          line-height: 56px;
          height: 56px;
          width: 204px;
          border-radius: 28px;
          text-align: center;
          font-size: 28px;
        }
        .unresolve {
          background: linear-gradient(to bottom, #eb7175 50%, #dc6064 100%);
        }
        .resolve {
          background: linear-gradient(to bottom, #fed094 50%, #daa873 100%);
        }
        .van-popup--center {
          border-radius: 12px;
          background: #ffffff;
          color: #333333;
          .contain {
            box-sizing: border-box;
            padding: 30px 0 0;
            font-size: 16px;
            p {
              text-align: center;
              margin: 0 0 15px 0;
              .phone-call {
                font-size: 20px;
                color: #deb175;
              }
            }
            .calll-phone {
              margin-bottom: 0;
            }
            .through-line {
              width: 100%;
              height: 1px;
              background: #ebebeb;
            }
          }
        }
    }
  }
</style>
