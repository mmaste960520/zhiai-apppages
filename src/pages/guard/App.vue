<template lang="pug">
  div#app
    warpper.warpper
      Items(v-for="(item,index) in dataList", :key="index", :item="item")

</template>

<script>
import Warpper from '@/components/warpper'
import Items from './items'
export default {
  name: 'member',
  components: {
    Warpper,
    Items
  },
  data () {
    return {
      dataList: [
        {
          title: '上麦不限时间',
          icon: require('./images/ic_me_time_style_3@2x.png'),
          content: '守护上麦不受主播设置时间限制，自由畅聊，守护您心中的TA！',
          image: require('./images/tapd_31429388_1579698812_50.jpg'),
          id: 0
        },
        {
          title: '开启多人直播',
          content: '自动开启多人直播模式，开启多人直播，一起开播一起嗨！',
          icon: require('./images/ic_me_many_people_style_3@2x.png'),
          image: require('./images/tapd_31429388_1579698822_79.jpg'),
          id: 1
        },
        {
          title: '连麦优先排队',
          content: '开通守护的用户，连麦排队可以直接排到队列的前端，在茫茫人海中，让主播第一个注意您的存在！',
          icon: require('./images/ic_me_first_style_4@2x.png'),
          image: require('./images/tapd_31429388_1579698844_29.jpg'),
          id: 2
        },
        {
          title: '尊贵守护标识',
          content: '让大家都知道您的守护身份，在茫茫人海中脱颖而出！',
          icon: require('./images/ic_me_security_style_1@2x.png'),
          image: require('./images/tapd_31429388_1579698859_92.jpg'),
          id: 3
        },
        {
          title: '挚爱专属宝座',
          content: '挚爱专属宝座，直播间中自动前排，让心仪主播更容易刷到您的信息！',
          icon: require('./images/ic_me_sofa_style_3@2x.png'),
          image: require('./images/tapd_31429388_1579698885_10.jpg'),
          id: 4
        },
        {
          title: '观众贵宾席',
          content: '头像优先显示，让新进直播间人员更容易注意到您！',
          icon: require('./images/ic_me_vip_style_3@2x.png'),
          image: require('./images/tapd_31429388_1579698896_62.jpg'),
          id: 5
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import '@/styles/main';
</style>

<style scoped lang="scss">
#app {
    margin:20px 0 32px;
    padding: 0 32px;
    .warpper {
      padding: 30px 40px;
      min-height: calc(100vh - 80px);
      background: #fff;
    }
}

</style>
