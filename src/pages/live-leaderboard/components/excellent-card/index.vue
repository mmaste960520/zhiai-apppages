<template lang="pug">
  div.card
    div.lable
      div 我的排名 {{ranking}}
    div.list
      div.list-item(v-if="second")
        div.picture
          img(src="../../image/icon.png")
          img(:src="second.image")
        div {{second.name}}
        div {{second.peak}}
        attention-btn(:followStatus="second")
      div.list-item(v-if="first")
        div.picture
          img(src="../../image/icon.png")
          img(:src="first.image")
        div {{first.name}}
        div {{first.peak}}
        attention-btn(:followStatus="first")
      div.list-item(v-if="thirdly")
        div.picture
          img(src="../../image/icon.png")
          img(:src="thirdly.image")
        div {{thirdly.name}}
        div {{thirdly.peak}}
        attention-btn(:followStatus="thirdly")
</template>

<script>
import AttentionBtn from '../attention-btn'
export default {
  name: 'index',
  components: {
    AttentionBtn
  },
  props: {
    first: {},
    second: {},
    thirdly: {},
    ranking: String
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  @import '@/styles/main';
</style>

<style lang="scss" scoped>
.card{
  height: 480px;
  width: 100%;
  background: url(../../image/bg.png) no-repeat;
  background-size: 100% 100%;
  position: relative;
  .lable{
    display: inline-block;
    line-height: 34px;
    font-size: 18px;
    background: rgba(0, 0, 0, .1);
    border-radius: 17px;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 1;
    div {
      transform: scale(.7);
    }
  }
  .list{
    height: 100%;
    display: flex;
    align-items: center;
    .list-item{
      font-size: 24px;
      line-height: 40px;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      .picture{
        text-align: center;
        position: relative;
        img:nth-child(1) {
          height: 48px;
          width: 48px;
          position: absolute;
          top: -20px;
          right: -20px;
        }
        img:nth-child(2) {
          height: 100px;
          width: 100px;
          border: 4px solid #fff;
          border-radius: 20px;
          margin-bottom: 20px;
        }
      }
      &:nth-child(2){
        height: 420px;
          img:nth-child(2) {
            height: 140px;
            width: 140px;
            border: 4px solid #fff;
            border-radius: 20px;
            margin-bottom: 20px;
          }
      }
    }
  }
}
</style>
