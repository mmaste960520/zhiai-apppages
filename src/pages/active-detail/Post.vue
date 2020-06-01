<template lang="pug">
  div.post
    pages-header(title="活动详情", @goBack="close", text="人员名单", @open="toPersonsList")
    box(:is-full="true", :is-scroll="false")
      div.container
        div.active-title {{activeThisInfo.activityName}}
        div.bottom-line
        div.active-star-time 报名时间:
          span.timer {{activeThisInfo.activityStartTime}} -- {{activeThisInfo.activityStartTime}}
        div.active-banner(:style="{backgroundImage: 'url(' + activeThisInfo.activityUrl + ')', backgroundSize:'cover'}")
        div.content(v-html="content")
        join-request(
          :manNumber="joinRequest.manNumber",
          :womenNumber="joinRequest.womenNumber",
          :startAge="joinRequest.startAge",
          :endAge="joinRequest.endAge",
          :limitNumber="joinRequest.createTime",
          :applyEndTime="joinRequest.joinRequest",
          :departTime="joinRequest.outsetTime",
          :expenditure="expenditure"
        )
        already-join-ratio.already-join-ratio(
          :gentleman="alreadyManNumber",
          :madam="alreadyWomenNumber"
        )
        pages-button.pages-button(@click.native="buttonStatus === '0' ? toPayFor() : '' ", :content="buttonContent", :status ="buttonStatus")
        div.explain.explain-first 最终解释权归挚爱佳缘所有
        div.explain
          span 报名即同意
          a.highlight(href="//zhiai.live/app-pages/protocols.html#/activity") 《挚爱佳缘活动服务协议》
</template>

<script>
import PagesHeader from '@/components/pages-header'
import showdown from 'showdown'
import Box from '@/components/box'
import JoinRequest from './component/join-request'
import AlreadyJoinRatio from './component/already-join-ratio'
import PagesButton from './component/pages-button'
import axios from 'axios'
import Platform from '@/modules/which-platform'
import { Toast } from 'vant'
export default {
  name: 'active-detail',
  data () {
    return {
      id: this.$route.params.id,
      content: '',
      buttonContent: '',
      buttonStatus: '',
      joinRequest: {},
      alreadyManNumber: 0,
      alreadyWomenNumber: 0,
      expenditure: '',
      activeThisInfo: {},
      activityStartTime: 0,
      activityEndTime: 0
    }
  },
  components: {
    Box,
    JoinRequest,
    AlreadyJoinRatio,
    PagesButton,
    PagesHeader
  },
  methods: {
    initContent () {
      const md = require(`./posts/${this.id}.md`).default
      const converter = new showdown.Converter()
      this.content = converter.makeHtml(md)
    },
    toPayFor () {
      const platform = Platform()
      if (platform === 'web') {
        Toast('具体活动前往APP了解')
        // this.$router.push('/payfor-test')
      }
      if (platform === 'ios' || platform === 'android') {
        // 调用端上支付
      }
    },
    toPersonsList (params) {
      if (params) {
        this.$router.push({ path: '/join-persons-list', query: { id: this.id } })
      }
    },
    close () {
      this.$bridge.close()
    },
    TimerFotmate (time) {
      var date = new Date(time)
      var len = time.toString().length
      if (len < 13) {
        var sub = 13 - len
        sub = Math.pow(10, sub)
        date = new Date(time * sub)
      }
      var y = date.getFullYear() + '.'
      var M = date.getMonth() + 1
      M = (M < 10 ? '0' + M : M) + '.'
      var d = date.getDate()
      d = (d < 10 ? '0' + d : d) + ''
      return y + M + d
    },
    getActiveInfo () {
      axios.post('/activity/activity/getBanner/isUserJoinActivity', {
        id: this.id,
        uuid: ''
      }).then(data => {
        if (data.rsCode === '200') {
          this.activeThisInfo = data.rsObject.gmActivityDB
          this.joinRequest = data.rsObject.gmActivityDB
          this.alreadyWomenNumber = data.rsObject.womenNumber
          this.alreadyManNumber = data.rsObject.manNumber
          this.expenditure = data.rsObject.cashPayTotal
          this.activityStartTime = this.TimerFotmate(data.rsObject.gmActivityDB.activityStartTime)
          this.activityEndTime = this.TimerFotmate(data.rsObject.gmActivityDB.activityEndTime)
          this.buttonContent = '支付并报名'
          this.buttonStatus = '0'
        }
        if (data.rsCode !== '200') {
          Toast(data.rsMsg)
          this.activeThisInfo = data.rsObject.gmActivityDB
          this.joinRequest = data.rsObject.gmActivityDB
          this.alreadyWomenNumber = data.rsObject.womenNumber
          this.alreadyManNumber = data.rsObject.manNumber
          this.expenditure = data.rsObject.cashPayTotal
          this.activityStartTime = this.TimerFotmate(data.rsObject.gmActivityDB.activityStartTime)
          this.activityEndTime = this.TimerFotmate(data.rsObject.gmActivityDB.activityEndTime)
          this.buttonContent = '支付并报名'
          this.buttonStatus = '1'
        }
      })
    }
  },
  mounted () {
    this.initContent()
  },
  created () {
    this.getActiveInfo()
  }
}
</script>

<style lang="scss" scope>
.box {
  overflow: hidden;
}
.subscribe {
  display: block;
  margin: 10px auto;
}
.container {
  padding: 50px 26px 22px;
  .active-title {
    color: rgb(24,27,34);
    font-size: 32px;
  }
  .bottom-line {
    margin-top: 36px;
    height: 1px;
    background: #e3e4e8;
  }
  .active-star-time {
    font-size: 28px;
    margin-top: 30px;
    .timer {
      display: inline-block;
      margin-left: 8px;
    }
  }
  .active-banner {
    width: 606px;
    height: 240px;
    border-radius: 16px;
    margin-top: 24px;
  }
  .content {
    font-size: 28px;
    line-height: 1.5;
    h1 {
      font-weight: normal;
      color: #263459;
      font-size: 40px;
    }
    h2 {
      font-weight: normal;
      color: #263459;
      font-size: 32px;
    }
    li {
      color: rgba(38, 52, 89, 0.8);
    }
    p {
      color: rgba(38, 52, 89, 0.8);
      text-indent: 56px;
    }
    img {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 240px;
      border-radius: 20px;
    }
  }
  .pages-button {
    margin: 0 auto;
    margin-top: 56px;
  }
  .already-join-ratio {
    margin-top: 20px;
  }
  .explain {
    color: #a8a9aa;
    font-size: 20px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 26px;
    .highlight {
      color: #c99345;
    }
  }
  .explain-first {
    margin-top: 60px;
  }
}

</style>
