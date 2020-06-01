<template lang="pug">
  div.post
    box(:is-full="true", :is-scroll="false")
      div.content(v-html="content")
      subscribe-button.subscribe(@click.native="action()", :buttonContent="isSubscribe ? '已订阅' : '订阅'")
</template>

<script>
import showdown from 'showdown'
import Box from '@/components/box'
import SubscribeButton from './component/subscribe-button'
import Platform from '@/modules/which-platform'
import axios from 'axios'
import { Toast } from 'vant'
export default {
  name: 'live-detail',
  data () {
    return {
      id: this.$route.params.id,
      // 获取主播订阅
      userIds: [],
      // 订阅
      liveUserId: '',
      content: '',
      isSubscribe: false
    }
  },
  components: {
    Box,
    SubscribeButton
  },
  methods: {
    initContent () {
      const md = require(`./posts/${this.id}.md`).default
      const converter = new showdown.Converter()
      this.content = converter.makeHtml(md)
    },
    // 判断是否订阅当前主播
    judgeSubscribe () {
      const platform = Platform()
      if (platform === 'ios' || platform === 'android') {
        // 获取订阅状态 判断对当前主播是否订阅
        axios.post('/live/live/netease/getLiveNotify', {
          userIds: this.userIds
        }).then(data => {
          if (data.rsCode === '200') {
            this.isSubscribe = !!Number(data.rsObject.notify_status[0].notify)
          }
        })
      }
    },
    // 订阅主播
    action () {
      const platform = Platform()
      if (platform === 'web') {
        Toast('具体直播详情前往APP了解')
      }
      if (platform === 'ios' || platform === 'android') {
        axios.post('/live/live/netease/setLiveNotify', {
          liveUserId: this.liveUserId,
          notify: this.isSubscribe ? '0' : '1'
        }).then(data => {
          if (data.rsCode === '200') {
            this.isSubscribe = !this.isSubscribe
          }
        })
      }
    }
  },
  mounted () {
    this.initContent()
    this.judgeSubscribe()
    this.userIds = this.$route.query.liveUserId
    this.liveUserId = this.$route.query.liveUserId
  }
}
</script>

<style lang="scss" scope>
.box {
  overflow: hidden;
}
.subscribe {
  // display: block;
  margin: 0 auto 24px;
}
.content {
  font-size: 28px;
  line-height: 1.5;
  padding: 50px;
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
    border-radius: 20px;
  }
}
</style>
