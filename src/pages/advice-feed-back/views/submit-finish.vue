<template lang="pug">
  div#submit-finish
    div.container
      div.advice-content
        p.question-tip 我遇到的这个问题是 ：
        p.receive-content {{receiveContent}}
      div.photo-container
        div.advice-photo-list 图片
        div.advice-photo-list 图片
    advice-submit-success(msg="意见反馈提交成功", delay=number)
</template>
<script>
import adviceSubmitSuccess from './advice-submit-success/component'
export default {
  components: {
    adviceSubmitSuccess
  },
  data () {
    return {
      receiveContent: this.$route.params.submitContent,
      number: 10
    }
  }
}
</script>
<style lang="scss">
#submit-finish {
  background: #364053;
  min-height: 100vh;
    .container {
      padding: 0 70px;
        .advice-content {
          position: relative;
          padding-top: 87px;
            p {
              margin: 0;
              padding: 0;
            }
            .question-tip {
              color: #e0e1e3;
              margin-bottom: 26px;
            }
            .receive-content {
              background: #364053;
              color: #9b9ea5;
              border: #364053;
              outline: none;
              border-radius: 12px;
              width: 610px;
              height: 380px;
              overflow:hidden;
              text-overflow:ellipsis;
              display:-webkit-box;
              -webkit-box-orient:vertical;
              -webkit-line-clamp:3;
            }
            .photo-container {
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              position: absolute;
              left:0;
              top:460px;
              width: 560px;
              height: 590px;;
              background: #2e384c;
                .advice-photo-list {
                  width: 120px;
                  height: 120px;
                }
            }
        }
    }
}
</style>
