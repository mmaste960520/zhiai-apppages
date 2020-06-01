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
          title: '解锁消息发送',
          icon: require('./images/ic_me_news_style_3.png'),
          content: '开通挚爱佳缘VIP后，可以查看Ta给你发的消息，也可以回复Ta的消息，与你喜欢的Ta互动起来吧',
          image: require('./images/tapd_31429388_1579700449_73.jpg'),
          id: 0
        },
        {
          title: '直播激情畅想',
          content: '开通挚爱佳缘VIP后，可以畅享直播，与你喜欢的Ta面对面，相亲收益两不误',
          icon: require('./images/ic_me_live_style_3.png'),
          image: require('./images/tapd_31429388_1579700460_79.jpg'),
          id: 1
        },
        {
          title: '活动尊享报名',
          content: '开通挚爱佳缘VIP后，享受活动线下报名特权，和Ta一起去玩吧',
          icon: require('./images/ic_me_activity_enroll.png'),
          image: require('./images/tapd_31429388_1579700471_64.jpg'),
          id: 2
        },
        {
          title: '群精心创建',
          content: '开通挚爱佳缘VIP后，可以创建属于自己的群聊，与你的粉丝亲切互动',
          icon: require('./images/ic_me_head_portrait_style_3.png'),
          image: require('./images/tapd_31429388_1579700481_19.jpg'),
          id: 3
        },
        {
          title: '礼物自由兑换',
          content: '开通挚爱佳缘VIP后，礼物商场的商品任你兑换，喜欢Ta就送Ta礼物吧',
          icon: require('./images/ic_me_gift_exchange.png'),
          image: require('./images/tapd_31429388_1579700490_28.jpg'),
          id: 4
        },
        {
          title: '开播多重分享',
          content: '开通挚爱佳缘VIP后，开启直播后，可多渠道分享你的直播，让Ta看到你的精彩表现吧',
          icon: require('./images/ic_me_share_multiple.png'),
          image: require('./images/tapd_31429388_1579700498_60.jpg'),
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
