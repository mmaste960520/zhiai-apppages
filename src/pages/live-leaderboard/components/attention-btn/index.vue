<template lang="pug">
  div.btn(v-if="followStatus" :class="followStatus.status !== '1' ? 'btn-bg' : '' ")
    span(v-if="followStatus.status === '1' ") 已关注
    span(v-if="followStatus.status !== '1' ", @click="changeState") +关注
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'index',
  props: {
    followStatus: {}
  },
  methods: {
    changeState () {
      let data = {
        action: 2,
        direction: 1,
        sceneType: 2,
        value: 1,
        toUuid: this.followStatus.id
      }
      this.$axios({ url: '/user/action/actionToUser',
        method: 'POST',
        data
      }).then(res => {
        if (res.rsCode === '200') {
          this.followStatus.status = '1'
          Toast.success('关注成功')
        } else {
          return Toast.fail(res.rsMsg)
        }
      }).catch(err => {
        console.log(err)
        return Toast.fail(`服务器异常请耐心等候`)
      })
    }
  }
}
</script>

<style lang="scss">
  @import '@/styles/main';
</style>

<style lang="scss" scoped>
  .btn{
    width: 96px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    font-size: 20px;
    background:rgba(0, 0, 0, .1);
    border-radius: 17px;
    span{
      display: inline-block;
      transform: scale(.8);
    }

  }
  .btn-bg{
    width: 96px;
    line-height: 34px;
    color: #fff;
    background: linear-gradient(0deg,
      #34a6e2 0%,
      #34cbc0 100%)
  }
</style>
