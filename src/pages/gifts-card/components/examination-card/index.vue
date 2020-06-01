<template lang="pug">
  div.card
    warpper.warpper
      div.images
      div.content
        div(v-for="(item,index) in content", :key="index")
          span.rows {{index+1}}.
          span {{item}}
      div.btn
        div(@click="goEmploy") 去使用
</template>
<script>
import Warpper from '@/components/warpper'
import Axios from 'axios'
import { Toast } from 'vant'

export default {
  name: 'examination-card',
  components: { Warpper },
  data () {
    return {
      content: [
        '体检卡活动介绍.以下只为模拟内容.',
        '申请时根据实物券的多少可以对应选择相应的旅游活动.',
        '申请后,实物券清零，从此收到的礼物、收益全额转化为实物券.',
        '申请成功的一刻算起,一年内累计的实物券,凭结婚证可以领取相应的实物券和奖励.',
        '该活动最终解释权归挚爱家园科技有限公司所有.'
      ]
    }
  },
  methods: {
    goEmploy () {
      Axios({
        method: 'post',
        url: '/activity/activity/getBanner/userUseMedicalCard',
        data: {
          uuid: ''
        }
      }).then(res => {
        if (res.rsCode === '200') {
          Toast('使用成功')
        } else {
          Toast(res.rsMsg)
        }
      }).catch(err => {
        Toast('服务器繁忙')
        console.log(err)
      })
    }
  },
  created () {
    document.title = '体检卡'
  }
}
</script>
<style lang="scss">
  @import '@/styles/main';
</style>
<style lang="scss" scoped>
.warpper {
  position: relative;
  padding: 40px;
  min-height: calc(100vh - 80px);
  background: #fff;

  .images{
    height:350px;
    width: 100%;
    background: url('./images/bg_me_physical_examination_large.png');
    background-size: contain;
    margin-bottom: 50px;
  }
  .content{
    line-height: 48px;
    font-size: 28px;
    color: #181b22;
    .rows{
      margin-right: 16px;
    }
  }
  .btn{
    height: 72px;
    width:100%;
    position: absolute;
    bottom: 24px;
    left: 0;
    text-align: center;
    div {
      width: 406px;
      line-height: 72px;
      display: inline-block;
      background-image: linear-gradient(0deg,
      #daa873 0%,
      #fed094 100%);
      border-radius: 36px;
  }
  }
}

</style>
