<template lang="pug">
  div#invite-confirm
    p.tip-piblic.selected-invite 邀请人
    div.data-base
      div.person-img
        img(:src="invitePersonInfo.profilePhotoidURL")
      div.person-info
        div.top
          span.person-name {{invitePersonInfo.nickName}}
          div
            level.level(:level="Number(invitePersonInfo.userLevel) > 0 ? Number(invitePersonInfo.userLevel) : 1")
            gps-icon(:city="invitePersonInfo.gpsCity === '' ? '未知' : invitePersonInfo.gpsCity", :trust="false")
        div.bottom
          span.address {{invitePersonInfo.liveCity.split('-')[0]}}
          span.age {{invitePersonInfo.userAge}}岁
          span.education {{invitePersonInfo.userEducation}}
    p.tip-piblic.love-time-limit 对方选择的恋爱保质期为：{{sendLoveTimer}}
    div.love-duration
      div.duration-node
        p(v-for="(item, index) in durationNode", :key="index", :class="{'selected': curTimerIndex === index, 'selected1': curTimerIndex === index, 'selected2': curTimerIndex === index }") {{item}}
    div.agree-reject
      div.reject(@click="disAgree") 不同意
      div.agree(@click="agree") 同意
    div.tip-piblic.stablished-love 确定恋爱状态后
    ul
      li
        p 您将只能与您伴侣放松私信
      li
        p 您的个人信息将对大家隐藏
      li
        p 您与伴侣将获得"恋爱头像"，"恋爱称谓"
      li
        p 您的私密信息将展现给对方
      li
        p 您将不能加入其他群聊 (已在群的不受影响)
      li
        p 与对方联播时方可开直播 (不可独自开直播)
</template>
<script>
import axios from 'axios'
import Level from '@/components/level'
import GpsIcon from '@/components/gps-icon'
export default {
  components: {
    Level,
    GpsIcon
  },
  data () {
    return {
      elMain: {
        background: '#373f52'
      },
      durationNode: ['一个月', '两个月', '三个月'],
      sendLoveTimer: '',
      uuid: '88800006',
      invitePersonInfo: {},
      curTimerIndex: -1,
      // 默认选中恋爱时长
      loveTimer: ''
    }
  },
  methods: {
    agree () {
      axios.post('/user/relationship/confirmLoveApply', {
        agree: '1',
        applyUserId: this.uuid
      }).then((resopnse) => {
        this.$router.push('/binding-scussess')
      })
    },
    disAgree () {
      axios.post('/user/relationship/confirmLoveApply', {
        agree: '0',
        // 发起方的挚爱ID
        applyUserId: this.uuid
      }).then((resopnse) => {
        this.$router.push('/binding-failer')
      })
    }
  },
  created () {
    // 请求接口 获取邀请人信息
    axios.post('/user/info/getSingleUserInfo', {
      uuid: this.uuid
    }).then((response) => {
      if (response.rsCode === '200') {
        this.invitePersonInfo = response.rsObject
        this.loveTimer = this.invitePersonInfo.shelfLife
        if (this.loveTimer === '0') {
          this.curTimerIndex = 0
          this.sendLoveTimer = '一个月'
        }
        if (this.loveTimer === '2') {
          this.curTimerIndex = 1
          this.sendLoveTimer = '两个月'
        }
        if (this.loveTimer === '3') {
          this.curTimerIndex = 2
          this.sendLoveTimer = '三个月'
        }
      }
    })
  }
}
</script>
<style lang="scss">
#invite-confirm {
  min-height: 100vh;
  box-sizing: border-box;
  background: #f0f1f3;
  border-radius: 20px;
    .tip-piblic {
      font-size: 30px;
      color: #676d7b;
      padding: 48px 0 0 26px;
    }
    .love-time-limit {
      margin-top: 60px;
    }
    .data-base {
      display: flex;
      padding-left: 26px;
      align-items: center;
        .person-img {
          width: 88px;
          height: 88px;
          border-radius: 20px;
            img {
              width: 100%;
              height: 100%;
              border-radius: 20px;
            }
        }
        .person-info {
          font-size: 28px;
          color: #e2e0e3;
            .top {
              color: #bdbec2;
              margin-left: 10px;
              display: flex;
              align-items: center;
              margin-bottom: 6px;
            }
            .bottom {
              width: 314px;
              display: flex;
              margin-left: 10px;
              margin-top: -16px;
              span {
                padding: 5px;
                line-height: 32px;
                border-radius: 6px;
                font-size: 22px;
                text-align: center;
                color: #53555a;
                background: #d8dadd;
                margin-right: 6px;
              }
            }
        }
    }
    .love-duration{
      padding: 0 47px;
       .duration-node {
         color: #616266;
         font-size: 36px;
         display: flex;
          p {
            width: 140px;
            height: 60px;
            border-radius: 20px;
            text-align: center;
            line-height: 60px;
            background: #d7d8da;
              &:nth-child(2) {
                margin-left: 56px;
                margin-right: 56px;
              }
          }
          .selected {
            color: #8e6235;
            background: linear-gradient(#f9ca90 30%, #eabb83 60%, #dcab76 100%);
          }
       }
    }
    .agree-reject {
      margin: 0 auto;
      margin-top: 104px;
      display: flex;
      justify-content: space-around;
        .reject {
          background: #e4696c;
        }
        .agree {
          background: linear-gradient(#f9ca90 30%, #eabb83 60%, #dcab76 100%);
        }
        .agree,
        .reject {
          width: 204px;
          height: 60px;
          text-align: center;
          line-height: 60px;
          border-radius: 45px;
        }
    }
    .stablished-love {
      color:#8c8d90;
      margin-top: 106px;
      padding-left: 26px;
    }
    ul {
      margin: 0;
      margin-top: 36px;
      padding-left: 56px;
      list-style: none;
        li {
          color: #181b22;
          font-size: 28px;
          line-height: 40px;
          letter-spacing: 1px;
          position: relative;
            p:after {
              content: '';
              display: block;
              width: 18px;
              height: 18px;
              border-radius: 50%;
              background: #abafb8;
              position: absolute;
              top: 10px;
              left: -30px;
            }
        }
    }
}
</style>
