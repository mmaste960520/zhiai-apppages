<template lang="pug">
  div.count-close
    div.photo
      img(src="../../img/binding.png")
    div.tip
      span.top-line {{this.bindStatusI}}
      span.top-lineII {{this.bindStatusII}}
    div.finish-btn 完成
    div.count-down
      span {{countNum}}秒钟后自动关闭
</template>
<script>
export default {
  data () {
    return {
      countNum: 3,
      timer: null
    }
  },
  props: {
    bindStatusI: String,
    bindStatusII: String
  },
  methods: {
    slefClose () {
      this.$router.push({ path: '/person-device', params: { id: 1 } })
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.countNum--
      // if (this.countNum === 0) {
      //   clearInterval(this.timer)
      //   this.slefClose()
      // }
    }, 1000)
  },
  destroyed () {
    clearInterval(this.timer)
  }
}
</script>
<style lang="scss">
.count-close {
  box-sizing: border-box;
  .photo {
    width: 240px;
    height: 240px;
    margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
  }
  .tip {
    text-align: center;
    font-size: 32px;
    margin: 95px auto 0;
      span {
        display: block;
      }
      .top-line {
        margin-bottom: 16px;
        color: #5e5f63;
      }
      .top-lineII {
        color: #5e5f63;
      }
  }
  .finish-btn {
    width: 406px;
    height: 72px;
    border-radius: 36px;
    background: linear-gradient(#f7c78e 30%, #e8b77f 60%, #deac77 100%);
    text-align: center;
    line-height: 72px;
    margin: 112px auto 0;
  }
  .count-down {
    font-size: 24px;
    color: #5e5f63;
    text-align: center;
    margin-top: 51px;
  }
}
</style>
