<template lang="pug">
  div.user-card
    img(:src="userHeaderImgUrl")
    div.info
      div.info-name
        span {{userName}}
        div
          level.level(:level="userLevel", v-if="userLevel > 0")
          gps-icon(:city="gpsCity === '' ? '未知' : gpsCity", :trust="false")
      div.info-lable
        span(v-if="age") {{age}}岁
        span(v-if="location") {{location.split('-')[0]}}
        span(v-if="education") {{education}}
</template>
<script>
import image from './image/hy.png'
import Level from '@/components/level'
import GpsIcon from '@/components/gps-icon'
export default {
  name: 'user-card',
  components: {
    Level,
    GpsIcon
  },
  props: {
    userHeaderImgUrl: {
      type: String
    },
    gpsCity: {
      type: String
    },
    userLevel: {
      type: Number
    },
    userPicture: {
      type: String,
      default: image
    },
    userName: {
      type: String,
      default: ''
    },
    age: {
      type: String,
      default () {
        return ''
      }
    },
    location: {
      type: String,
      default () {
        return ''
      }
    },
    education: {
      type: String,
      default () {
        return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .user-card{
    padding: 40px 0;
    display: flex;
    height:90px;
    border-bottom: 1px solid #e1e3e5;
    img {
      height:90px;
      width: 88px;
      border-radius: 20px;
    }
    .info {
      flex: 1;
      padding-left: 10px;
      &-name {
        font-size: 28px;
        line-height: 48px;
        color: #181a26;
        div{
          display: inline-block;
          margin-left: 8px;
          .level {
            margin-right: 8px;
          }
        }
      }
      &-lable{
        font-size: 22px;
        color: #55565a;
        span{
          display: inline-block;
          background: #d9dade;
          padding:5px 10px;
          border-radius: 8px;
          margin-right: 8px
        }
      }
    }
  }
</style>
