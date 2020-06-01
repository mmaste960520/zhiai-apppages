<template lang="pug">
  div.user-card
    img(:src="userPicture")
    div.info
      div.info-name
        span {{userName}}
        div
          img(v-for="(item,index) in userIcon", :key="index", :src="item")
      div.info-lable
        span(v-if="age") {{age}}岁
        span(v-if="location") {{location}}
        span(v-if="education") {{education}}
</template>

<script>
import image from './image/hy.png'
export default {
  name: 'user-card',
  props: {
    userPicture: {
      type: String,
      default: image
    },
    userName: {
      type: String,
      default: '暂无'
    },
    userIcon: {
      type: Array,
      default () {
        return [image, image, image]
      }
    },
    age: {
      type: String,
      default () {
        return '0'
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
        color: #e1e0e3;
        div{
          display: inline-block;
          margin-left: 8px;
          img {
            height:28px;
            width:28px;
          }
        }
      }
      &-lable{
        font-size: 22px;
        color: #adb0b6;
        span{
          display: inline-block;
          background: #434c5e;
          padding:5px 10px;
          border-radius: 8px;
          margin-right: 8px
        }
      }
    }
  }
</style>
