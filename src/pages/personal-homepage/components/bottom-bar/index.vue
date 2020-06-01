 <template lang="pug">
  div.bottom-bar
    div(@click="openGiveGifts")
      img(src="./images/ic_common_gift_dialogue_style_3@2x.png")
      span 送礼物
    div(@click="openSendMessage")
      img(src="./images/ic_common_remind_style_1@3x.png")
      span 发私信
    div(@click="switchNotify")
      img(src="./images/ic_live_get_into_style_2@3x.png")
      span {{nodifyText}}
</template>
<script>
import { Toast, Overlay } from 'vant'

export default {
  name: 'index',
  components: { Overlay },
  data () {
    return {
      query: this.$qs.parse(window.location.search, { ignoreQueryPrefix: true }),
      nodifyStatus: 0
    }
  },
  computed: {
    nodifyText () {
      if (this.nodifyStatus === 1) {
        return '关播提醒'
      }
      return '开播提醒'
    }
  },
  props: {
    information: {}
  },
  methods: {
    openGiveGifts () {
      Toast('该功能暂未开放')
    },
    openSendMessage () {
      if (Number(this.information.userLevel) > 0) {
        this.$bridge.sendMessage({
          uid: this.query.otherUid,
          accid: this.information.neteaseAccid
        })
        return
      }
      return Toast('请完善个人信息')
    },
    // 消息提醒是否开启
    remindStatus () {
      this.$axios({
        url: '/live/netease/getLiveNotify',
        method: 'POST',
        data: {
          userIds: [this.query.otherUid]
        }
      }).then(res => {
        if (res.rsCode === '200') {
          this.nodifyStatus = res.rsObject.notify_status[0].nodify
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 关闭或者开启提醒
    switchNotify () {
      // 0：关闭直播通知 1：开启直播通知
      if (this.nodifyStatus === 0) {
        this.nodifyStatus = 1
      } else {
        this.nodifyStatus = 0
      }
      this.$axios({
        url: '/live/netease/setLiveNotify',
        method: 'POST',
        data: {
          live_userid: this.query.otherUid,
          notify: this.nodifyStatus
        }
      }).then(res => {
        if (res.rsCode === '200') {
          if (this.nodifyStatus === 1) {
            return Toast('已开启他的直播开通提醒')
          }
          return Toast('已关闭她的直播开通提醒')
        }
        return Toast(res.rsMsg)
      }).catch(err => {
        console.log(err)
        return Toast('服务异常请稍后再试')
      })
    }
  },
  created () {
    this.remindStatus()
  }

}
</script>
<style lang="scss">
  @import '@/styles/main';
</style>
<style lang="scss" scoped>
.bottom-bar {
  width:100%;
  line-height :100px;
  background: #fff;
  display: flex;
  justify-content: space-around;
  div {
    font-size: 30px;
    color: #101727;
    border-left:1px solid rgba(0, 0, 0, 0.04);
    img {
      height: 40px;
      width: 40px;
      vertical-align: middle;
      padding: 0 15px;
    }
    &:nth-child(1) {
      border-left:0;
      img {
          height: 53px;
          width: 53px;
      }
    }
  }
}
</style>
