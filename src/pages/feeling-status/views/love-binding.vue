<template lang="pug">
  div#love-binding
    p.tip-piblic.selected-invite 已选择的邀请人
    div.data-base
      div.person-img
        img(:src="selectedPersonInfo.profilePhotoidURL")
      div.person-info
        div.top
          span.person-name {{selectedPersonInfo.nickName}}
          div
            level.level(:level="Number(selectedPersonInfo.userLevel) > 0 ? Number(selectedPersonInfo.userLevel) : 1")
            gps-icon(:city="selectedPersonInfo.gpsCity === '' ? '未知' : selectedPersonInfo.gpsCity", :trust="false")
        div.bottom
          span.address {{selectedPersonInfo.liveCity.split('-')[0]}}
          span.age {{selectedPersonInfo.userAge}}岁
          span.education {{selectedPersonInfo.userEducation}}
    p.tip-piblic.love-time-limit 请选择恋爱保质期: {{toastTimer}}
    div.love-duration
      div.duration-node
        p(v-for="(item, index) in durationNode", :key="index",@click="acquireTimer($event,index)", :class=" curTimerIndex === index ? 'selected' : 'unselected'") {{item}}
    //- div.send-invite(@click="sendLoveTimerTo") 发送邀请
    div.send-invite(@click="loveTimer(toastTimer)") 发送邀请
    layer(ref="layer")
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
import { Dialog } from 'vant'
export default {
  components: {
    Level,
    GpsIcon
  },
  data () {
    return {
      durationNode: ['一个月', '两个月', '三个月'],
      sendLoveTimer: '',
      toastTimer: '',
      show: false,
      curTimerIndex: -1,
      uuid: '',
      // 已选择恋爱对象信息
      selectedPersonInfo: {}
    }
  },
  methods: {
    acquireTimer (e, index) {
      this.sendLoveTimer = e.target.innerHTML
      this.curTimerIndex = index
      if (this.sendLoveTimer === '一个月') {
        this.sendLoveTimer = 1
        this.toastTimer = '一个月'
      } else if (this.sendLoveTimer === '两个月') {
        this.sendLoveTimer = 2
        this.toastTimer = '两个月'
      } else if (this.sendLoveTimer === '三个月') {
        this.sendLoveTimer = 3
        this.toastTimer = '三个月'
      }
    },
    sendLoveTimerTo () {
      console.log(this.sendLoveTimer)
    },
    loveTimer (loveTimer) {
      if (this.toastTimer !== '') {
        Dialog.confirm({
          message: `你确定恋爱保质期为${loveTimer}吗,\n在${loveTimer},部分权限将被限制`,
          confirmButtonText: '是',
          cancelButtonText: '否',
          cancelButtonColor: '#deb175',
          confirmButtonColor: '#deb175'
        }).then(() => {
          // on confirm
          axios.post('/user/relationship/sendLoveApply', {
            // 被邀请人id
            loveUserId: this.selectedPersonInfo.uuid,
            // 恋爱时长
            shelfLife: String(this.sendLoveTimer)
          }).then((response) => {
            console.log(response)
            if (response.rsCode === '200') {
              this.$router.push('/person-device')
            }
          })
        }).catch(() => {
          // on cancel
        })
      }
    }
  },
  created () {
    // 获取当前选中用户信息
    this.uuid = this.$route.params.userId
    axios.post('/user/info/getSingleUserInfo', {
      uuid: this.uuid
    }).then((response) => {
      if (response.rsCode === '200') {
        this.selectedPersonInfo = response.rsObject
      }
    })
  }
}
</script>
<style lang="scss" scope>
#love-binding {
  min-height: 94vh;
  box-sizing: border-box;
  border-radius: 12px;
  background: #ebecf0;
    .tip-piblic {
      font-size: 30px;
      color: #676d7b;
      padding: 48px 0 0 26px;
    }
    .love-time-limit {
      margin-top: 10px;
    }
    .data-base {
      display: flex;
      align-items: center;
      padding-left: 26px;
        .person-img {
          width: 88px;
          height: 88px;
          border-radius: 20px;
          margin-top: 10px;
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
            }
            .bottom {
              width: 314px;
              display: flex;
              margin-left: 10px;
              span {
                // width: 64px;
                // height: 32px;
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
            background: #ffffff;
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
    .send-invite {
      width: 406px;
      height: 72px;
      color: #704211;
      text-align: center;
      line-height: 76px;
      margin: 0 auto;
      margin-top: 104px;
      border-radius: 36px;
      background: linear-gradient(#f9ca90 30%, #eabb83 60%, #dcab76 100%);
    }
    .stablished-love {
      color:#8c8d90;
      margin-top: 80px;
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
