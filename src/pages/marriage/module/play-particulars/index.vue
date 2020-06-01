<template lang="pug">
  div#play-particulars
    warpper.warpper
      div.title 您的伴侣是
      userCard.user-card
      div.site
        div 旅行信息
        div
          span 西安 - 昆明
          span 2019.11.08--2019.11.15
      div.particulars
        div 活动介绍
        div
          img(src="../../moduleImage/pic.png")
      div.btn
        div
          img(src="../../moduleImage/btn.png")
          span 拒绝邀请
        div
          img(src="../../moduleImage/btn.png")
          span 接受邀请
</template>
<script>
import UserCard from '@/components/user-card'
import Warpper from '@/components/warpper'

export default {
  name: 'index',
  components: { UserCard, Warpper }
}
</script>
<style lang="scss">
  @import '@/styles/main';
</style>

<style scoped lang="scss">
#play-particulars{
  padding: 0 32px;
}
.warpper{
  padding: 0 40px;
  margin-bottom: 120px;
  min-height: calc(100vh - 80px);
  .title {
    font-size: 24px;
    color: #989ba3;
    padding-top:47px;
  }
  .user-card {
    border:0;
  }
  .site{
    font-size:28px;
    columns: #e1e0e3;
    display: flex;
    height:100px;
    line-height: 50px;
    div:nth-child(1){
      color:#989ba3;
      font-size:24px;
      padding-right: 40px;
    }
    div:nth-child(2){
      display: flex;
      flex-direction: column
    }
  }
  .particulars{
    margin-top: 20px;
    line-height: 70px;
    color: #989ba3;
    font-size: 24px;
    div:nth-child(2){
      min-height: 50px;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
        border-radius: 16px;
      }
    }
  }
  .btn {
    width:100%;
    height:120px;
    padding:0 22px;
    box-sizing: border-box;
    line-height: 120px;
    text-align: center;
    background: #2d364a;
    color: #000;
    font-size: 24px;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    div{
      flex: 1;
      position: relative;
      img {
        height:100%;
        width:100%;
      }
      span{
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom: 0;
      }
    }
  }
}

</style>
