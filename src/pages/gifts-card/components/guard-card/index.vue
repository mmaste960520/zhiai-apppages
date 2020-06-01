<template lang="pug">
  div.card
    warpper.warpper
      div.images
      div.content
        div(v-for="(item,index) in content", :key="index")
          span.rows {{index+1}}.
          span {{item}}

</template>
<script>
import Warpper from '@/components/warpper'
export default {
  name: 'guard-card',
  components: { Warpper },
  data () {
    return {
      content: [
        '守护卡活动介绍.以下只为模拟内容.',
        '申请时根据实物券的多少可以对应选择相应的旅游活动.',
        '申请后,实物券清零，从此收到的礼物、收益全额转化为实物券.',
        '申请成功的一刻算起,一年内累计的实物券,凭结婚证可以领取相应的实物券和奖励.',
        '一年内未结婚的,根据当年度积攒的实物券,可以免费参加我平台组织的相亲旅行.',
        '该活动最终解释权归挚爱家园科技有限公司所有.'
      ]
    }
  },
  created () {
    document.title = '守护卡'
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
    background: url('./images/bg_me_card_guard_large.png');
    background-size: contain;
    margin-bottom: 50px;
  }
  .content {
    line-height: 48px;
    font-size: 28px;
    color: #181b22;
    .rows{
      margin-right: 16px;
    }
  }
}

</style>
