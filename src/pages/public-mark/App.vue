<template lang="pug">
  div#app
    div.header
      swipe(:autoplay="3000")
        swipe-item(v-for="(item,index) in swipeImage", :key="index", @click="openH5(index)")
          img(:src="item.activityUrl" )
    warpper.warpper
      div.main
        div.img
          img( v-if=" codePic ", :src="codePic" )
        div.content
          span(v-for="(item,index) in content", :key="index") {{ item }}
        div.btn( @click="openMask" ) 去领取
    div.mark-box( v-if="maskStatus" )
    div.mask-layer( v-if="maskStatus" )
      go-receive( @showMask="childData" )
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
import Warpper from '@/components/warpper'
import GoReceive from './goReceive'
import Axios from 'axios'
export default {
  name: 'App',
  components: { Warpper, GoReceive, Swipe, SwipeItem },
  data () {
    return {
      swipeImage: [],
      codePic: 'https://zajy-public.oss-cn-beijing.aliyuncs.com/app-pages/logo/tweo.png',
      content: ['关注挚爱佳缘微信公众号', '脱单指导免费领取', '多重豪礼尽情享受'],
      maskStatus: false
    }
  },
  methods: {
    /**
     * 点击领取打开弹出层
     */
    openMask () {
      this.maskStatus = true
    },
    /**
     * 接受子组件传过来的值
     * @param e （值）
     */
    childData (e) {
      this.maskStatus = e
    },
    // 轮播
    getswipeImage () {
      Axios({
        method: 'post',
        url: '/activity/activity/getBanner/getBannerActivityList',
        data: {
          bannerPlace: 8
        }
      }).then(res => {
        if (res.rsCode === '200') {
          this.swipeImage = res.rsObject.map(item => {
            return { activityUrl: item.activityUrl, activityH5Url: item.activityH5Url }
          })
        }
      }).catch(err => {
        console.log(err)
      })
    },
    openH5 (index) {
      if (this.swipeImage[index].activityH5Url) {
        return
      }
      window.location.href = this.swipeImage[index].activityH5Url
    }
  },
  created () {
    this.getswipeImage()
  }
}
</script>
<style lang="scss">
  @import '@/styles/main';
</style>
<style scoped lang="scss">
  #app {
    padding: 26px;
    min-height: calc(100vh - 80px);
    .header {
      height: 170px;
      width:100%;
      margin-bottom: 26px;
      box-shadow: 0px 0px 50px 0px
      rgba(31, 38, 53, 0.64);
      border-radius: 16px;

      img {
        height: 170px;
        width: 100%;
        border-radius: 16px;
      }
    }

    .warpper {
      min-height: calc(100vh - 300px);
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      .main {
        display: inline-block;
        padding-top: 140px;
        width:  340px;
        .img {
          height: 300px;
          width: 300px;
          text-align: center;
          padding: 0 20px;
          img {
            height: 300px;
            width: 300px;
          }
        }
        .content {
          text-align: center;
          margin: 20px 0 90px;
          font-size: 30px;
          color: #181b22;
          line-height: 38px;
          span {
            display: block;
          }
        }
        .btn {
          width: 262px;
          height: 72px;
          font-size: 24px;
          display: inline-block;
          line-height: 72px;
          text-align: center;
          margin-left: 38px;
          background-color: #08c161;
          box-shadow: 0px 2px 29px 1px
          rgba(9, 14, 28, 0.6);
          border-radius: 36px;
          z-index: 3;
        }
      }
    }
    .mark-box {
      height:100%;
      width:100%;
      opacity: .4;
      background: #000;
      position: fixed;
      left: 0;
      top: 0;
    }
    /**弹窗页面居中*/
    .mask-layer {
      height:700px;
      width: 606px;
      display: flex;
      margin: auto;
      background: #2e384c;
      border-radius: 12px;
      box-shadow: 0px 8px 40px 0px
      rgba(51, 51, 51, 0.8);
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 2;
    }
  }
  /deep/
  .van-swipe__indicator--active{
    width: 16px;
    height: 6px;
    border-radius: 4px;
    background:rgba(255, 255, 255, 0.6)
  }
</style>
