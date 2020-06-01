<template lang="pug">
  div.type-info
    div.medal.margin-bottom(v-if="medalList.length>0")
      div.title
        img(src="../../image/ic_common_tips_style_1.png")
        div 个人勋章
      div.medalList.content
        div(v-for="item in medalList", :key="item.id")
          img(:src="item.images")
    div(v-if="typeInfo.soliloquy")
      div.title
        img(:src="titleImg")
        div 内心独白
      div.content {{typeInfo.soliloquy}}
    div(v-if="typeInfo.advantage")
      div.title
        img(:src="titleImg")
        div 我的优势
      div.content.superiority {{typeInfo.advantage}}
    div.talent(v-if="talentList.length>0")
      div.title
        img(:src="titleImg")
        div 个人性格
      div.content.span-list
        span.talents(v-for="(item,index) in talentList", :key="index") {{item}}
    div(v-if="informationText.length>0")
      div.title
        img(:src="titleImg")
        div 个人资料
      div.content.span-list
        span.info(v-for="(item,index) in informationText", :key="index") {{item}}
    div(v-if="spouseCriterionResultText.length>0")
      div.title
        img(:src="titleImg")
        div 择偶条件
      div.content.span-list
        span.spouse(v-for="(item,index) in spouseCriterionResultText", :key="index") {{item}}
    div.hobby(v-if="hobbyList.length>0")
      div.title
        img(:src="titleImg")
        div 爱好
      div.content.hobby-list
        div.food(v-for="(itemType,index) in hobbyList", :key="index")
          div(v-if="itemType.list.length>0") {{itemType.title}}
          div(v-if="itemType.list.length>0")
            span(v-for="(item,i) in itemType.list", :key="i") {{item}}
</template>
<script>
import { personData } from './data.js'

export default {
  name: 'index',
  computed: {
    medalList () {
      let medalList = []
      if (this.typeInfo.idCardPass && this.typeInfo.idCardPass === '2') {
        medalList.push({
          images: require('./images/ic_common_identity_style_1@2x.png'),
          text: '实名认证'
        })
      } else {
        medalList.push({
          images: require('./images/ic_common_identity_style_3@2x.png'),
          text: '实名认证'
        })
      }
      if (this.typeInfo.idCardPass && this.typeInfo.idCardPass === '2') {
        medalList.push({
          images: require('./images/ic_common_discern_style_1@2x.png'),
          text: '人脸识别'
        })
      } else {
        medalList.push({
          images: require('./images/ic_common_discern_style_3@2x.png'),
          text: '人脸识别'
        })
      }
      if (this.typeInfo.isVip && this.typeInfo.isVip === '1') {
        medalList.push({
          images: require('./images/ic_common_fee_style_1@2x.png'),
          text: '付费标识'
        })
      } else {
        medalList.push({
          images: require('./images/ic_common_fee_style_3@2x.png'),
          text: '付费标识'
        })
      }
      return medalList
    },
    talentList () {
      let data = this.typeInfo.natureType
      let talentList = []
      if (data && data !== '') {
        talentList = JSON.parse(data).natureType
      }
      return talentList
    },
    hobbyList () {
      return Object.keys(this.typeInfo.userHobby).map(key => {
        return {
          title: this.hobbyKey[key],
          list: this.typeInfo.userHobby[key]
        }
      })
    },
    spouseCriterionResultText () {
      return personData(this.spouseCriterionResult)
    },
    informationText () {
      return personData(this.information)
    }
  },
  props: {
    typeInfo: {},
    information: {},
    spouseCriterionResult: {}
  },
  data () {
    return {
      titleImg: require('../../image/ic_common_tips_style_1.png'),
      likeType: [],
      query: this.$qs.parse(window.location.search, { ignoreQueryPrefix: true }),
      hobbyKey: {
        'sportHobby': '运动爱好',
        'eatingHobby': '饮食爱好',
        'artisticHobby': '文艺爱好'
      }
    }
  }
}
</script>
<style lang="scss">
  @import '@/styles/main';
</style>
<style lang="scss" scoped>
.type-info {
  padding: 46px 26px 100px;
  .title{
    display: flex;
    font-size: 24px;
    color: #101727;
    margin-bottom: 24px;
    img {
      width: 24px;
      height: 32px;
      margin: 0 5px 0 15px;
    }
  }
  .content{
    min-height: 131px;
    background: rgba(10, 17, 27, 0.02);
    border-radius: 16px;
    padding:26px;
    font-size: 28px;
    line-height: 48px;
    color: #101727;
    margin-bottom: 60px;
  }
  .medal{
    .medalList{
      min-height: 100px;
      display: flex;
      padding: 40px 0;
      div{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 40px;
        img {
          height: 88px;
          width: 88px;
        }
        span {
          font-size: 20px;
          transform: scale(.8);
          line-height: 44px;
          color: rgba(10, 17, 27, 0.6);
        }
      }

    }
  }
  .span-list{
    display: flex;
    text-align: center;
    flex-wrap:wrap;
    font-size: 24px;
    box-sizing: border-box;
    span{
      min-width: 123px;
      height: 52px;
      padding: 0 15px;
      line-height: 52px;
      border-radius: 10px;
      margin: 12px;
    }
  }
  .talents{
    background-color: #e5eff7
  }
  .info{
    background-color: #f6e7eb
  }
  .spouse{
    background-color: #f0e8f7
  }
  .hobby {
    .hobby-list {
      .food{
        div{
          padding: 14px 0;
          span{
            display: inline-block;
            font-size: 24px;
            padding: 0 28px;
            margin-bottom: 24px;
            line-height: 52px;
            background-color: #e5eff7;
            border-radius: 10px;
            margin-right: 24px;
          }
        }
      }
    }
  }
}
</style>
