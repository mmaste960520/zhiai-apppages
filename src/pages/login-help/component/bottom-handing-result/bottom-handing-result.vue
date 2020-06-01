
<template lang="pug">
  div#bottom-handing-result
    div.bottom
      div.unresolve(is-link @click="showPopup") 未解决
      div.resolve(@click="resolve") 已解决
      van-popup(v-model="show", round, :style="{ height: '30%', width: '86%'}")
        div.contain
          p 如果您的问题未解决,请致电客服人员将
          p 竭诚为您服务
          p 我们将持续优化在线帮助栏目
          p
            a.phone-call(href="tel:4001-1314-99") 4001-1314-99
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
      // this.question()
      this.$router.go('-1')
    },
    showPopup () {
      this.show = true
    },
    // 问题是否已解决
    // problemId: 问题id solveStatus类型：0：未解决 1：已解决
    question (problemId, solveStatus) {
      let data = {
        problemId,
        solveStatus
      }
      console.log(data)
      Axios({
        url: '/user/helpAndQA/helpIsEffect',
        method: 'POST',
        data
      }).then(res => {
        if (res.rsCode === '200') {
          if (res.rsObject.result === 'success') {
            Toast.success('反馈成功')
          }
        } else {
          Toast.fail('反馈失败')
        }
      }).catch(err => {
        Toast.fail('系统繁忙稍后再试')
        console.log(err)
      })
    }
  },
  created () {
    this.problemId = this.$route.params.id
  }
}
</script>
<style lang="scss">
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
          color: #744513;
          background: linear-gradient(to bottom, #fed094 50%, #daa873 100%);
        }
        .van-popup--center {
          border-radius: 12px;
          background: #ffffff;
          color: #757b8e;
          .contain {
            padding: 42px 10px 10px 26px;
            font-size: 16px;
            position: relative;
            p {
              margin: 0 0 15px 0;
              .phone-call {
                color: #757b8e;
              }
            }
          }
        }
    }
  }
</style>
