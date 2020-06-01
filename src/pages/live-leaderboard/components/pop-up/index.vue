<template lang="pug">
  div
    div.pop
    div.card
      div.title 排行榜介绍
      div.content
        div
          div 好评榜
          div 这里是单身贵族的天地，是大家寻找另一半的乐园，希望大家在这里都能找到自己的另一半！
        div
          div 周榜
          div 这里是单身贵族的天地，是大家寻找另一半的乐园，希望大家在这里都能找到自己的另一半！
        div
          div 红榜
          div 这里是单身贵族的天地，是大家寻找另一半的乐园，希望大家在这里都能找到自己的另一半！
        div
          div 黑榜
          div 这里是单身贵族的天地，是大家寻找另一半的乐园，希望大家在这里都能找到自己的另一半！
      div.colse-btn(@click="colseBtn")
        icon(name="clear")
</template>

<script>
import { Icon } from 'vant'

export default {
  name: 'index',
  components: { Icon },
  methods: {
    colseBtn () {
      this.$emit('colse', false)
    }
  }
}
</script>

<style lang="scss">
  @import '@/styles/main';
</style>

<style scoped lang="scss">
.pop{
  background: rgba(0, 0, 0, .3);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.card{
  width: 580px;
  padding: 0 36px;
  background-image: linear-gradient(0deg,
  #888d9d 0%,
  #303b5f 100%);
  font-size: 24px;
  color: rgba(255, 255, 255, .8);
  border-radius: 20px;
  position: fixed;
  top: 18%;
  left: 11%;
  box-sizing: border-box;
  .title{
    line-height: 130px;
    font-size: 32px;
    text-align: center;
  }
  .content{
    line-height: 38px;
    div{
      padding-bottom: 24px;
    }
  }
  .colse-btn{
    font-size: 48px;
    position: absolute;
    top: -15px;
    right: -10px;
    color: #fff
  }
}
</style>
