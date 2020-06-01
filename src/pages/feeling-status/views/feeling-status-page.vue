<template lang="pug">
  div.feeling-status-home
    div.banner-photo(v-if="SwiperImg.length")
      van-swipe.van-swipe(:autoplay="3000", indicator-color="white", loop=true)
        van-swipe-item.van-swipe-item(v-for="(image, index) in SwiperImg" :key="index")
          img.img-swiper(:src="image")
    div.select
      div.status-select
        div.single-container
          div.single(:class="loveStatus === 1 ? 'selected' : 'unselecte'", @click="changeStatusSingle")
            img(src="../img/single-heart.png")
          p.single-text {{singleTitle}}
        div.love-container
          div.love(:class="loveStatus === 2 ? 'selected' : 'unselecte'", @click="changeStatusLove")
            img(src="../img/love-heart.png")
          p.love-text 确定恋爱
      div.sure-btn(@click="toContactPerson")
        bottom-sure-btn.bottom-sure-btn(content="确认")
</template>

<script>
import axios from 'axios'
import BottomSureBtn from '../component/pages-btn/component'
// import QS from 'qs'
import { Dialog } from 'vant'
export default {
  name: 'feeling-status-home',
  components: {
    BottomSureBtn
  },
  data () {
    return {
      SwiperImg: [],
      singleTitle: '单身',
      loveTitle: '确定恋爱',
      personStatus: 0,
      loveStatus: 0,
      // 弹框提示信息
      message: '',
      // 恋爱是否到期
      isShelf: '1',
      // 选择的恋爱时长
      shelfLife: '',
      // 解禁日期时间
      shelfBeginTime: ''
    }
  },
  methods: {
    toContactPerson () {
      console.log(this.personStatus, this.loveStatus, this.isShelf)
      // 去选择恋爱对象进行恋爱绑定
      if (this.personStatus === 1 && this.loveStatus === 2) {
        this.$router.push('/mutual-attention')
      }
      // 解除恋爱关系 判断恋爱时长是否满足条件
      if (this.personStatus === 2 && this.singleTitle === '恢复单身' && this.isShelf === '1' && this.loveStatus === 1) {
        // 恋爱超过保质期
        this.complianceRequireToast(this.shelfLife)
      }
      // 恋爱未超过保质期
      if (this.personStatus === 2 && this.singleTitle === '恢复单身' && this.isShelf === '0' && this.loveStatus === 1) {
        this.loveUnExpireToast(this.shelfLife, this.shelfBeginTime)
      }
    },
    beforeClose (action, done) {
      if (action === 'confirm') {
        setTimeout(done, 1000)
      } else {
        done()
      }
    },
    // 恋爱到期提示
    complianceRequireToast (loveTimer) {
      Dialog.confirm({
        message: `本段恋爱已超过"${loveTimer}",恢复单身后所有功能解禁,是否恢复单身`,
        confirmButtonText: '是',
        cancelButtonText: '否',
        cancelButtonColor: '#deb175',
        confirmButtonColor: '#deb175'
      }).then(() => {
        // 调用解除恋爱的接口 header 传uuid
        axios.post('/user/relationship/cancelLoveRelation').then((response) => {
          if (response.rsCode === '200') {
            // 解除成功后
            this.$router.push('/recover-single-scussess')
          }
        })
      }).catch(() => {
        // on cancel
      })
    },
    // 恋爱未到期提示
    loveUnExpireToast (loveTimer, forbiddenTime) {
      Dialog.confirm({
        message: `本段恋爱不足"${loveTimer}",解除关系后到${forbiddenTime}方可恢复被禁功能`,
        confirmButtonText: '是',
        cancelButtonText: '否',
        cancelButtonColor: '#deb175',
        confirmButtonColor: '#deb175'
      }).then(() => {
        // 调用解除恋爱的接口 header 传uuid
        axios.post('/user/relationship/cancelLoveRelation').then((response) => {
          if (response.rsCode === '200') {
            // 解除成功后
            this.$router.push('/recover-single-scussess')
          }
        })
      }).catch(() => {
        // on cancel
      })
    },
    changeStatusSingle () {
      this.loveStatus = 1
    },
    changeStatusLove () {
      this.loveStatus = 2
    },
    getUserLoveStatus () {
      // 请求接口 获取当前用户恋爱状态 1单身 2恋爱
      axios.post('/user/relationship/getLoveStatus').then((response) => {
        if (response.rsCode === '200') {
          console.log(response)
          // 个人恋爱状态
          this.personStatus = response.rsObject.loveStatus
          // 恋爱是否到期
          this.isShelf = response.rsObject.isShelf
          // 选择的恋爱时长
          this.shelfLife = response.rsObject.shelfLife
          // 解禁日期时间
          this.shelfBeginTime = response.rsObject.shelfBeginTime
          if (this.personStatus === 1) {
            this.loveStatus = 1
          }
          if (this.personStatus === 2) {
            this.loveStatus = 2
            this.singleTitle = '恢复单身'
          }
        }
      })
    },
    // 获取恋爱banner
    getLoveBanner () {
      axios.post('/activity/activity/getBanner/getBannerActivityList', {
        bannerPlace: 9
      }).then(data => {
        if (data.data.rsCode === '200') {
          this.SwiperImg = data.data.rsObject
        }
      })
    }
  },
  created () {
    this.getUserLoveStatus()
    this.getLoveBanner()
  }
}
</script>
<style lang="scss">
@import '@/styles/main';
.feeling-status-home {
  min-height: 80vh;
  box-sizing: border-box;
    .banner-photo {
      width: 687px;
      height: 220px;
      box-sizing: border-box;
      margin:36px auto 81px;
      .van-swipe {
        height: 125px;
        border-radius: 16px;
        .van-swipe__indicator--active{
          width: 15px;
          background: #9f9fa0;
          border-radius: 8px;
        }
        .van-swipe-item {
          .img-swiper {
            width: 100%;
            height: 100%;
            border-radius: 8px;
          }
        }
      }
      .swiper-container {
        width: 500px;
        height: 300px;
        margin: 20px auto;
      }
    }
    .select {
      width: 687px;
      min-height: 70vh;
      box-sizing: border-box;
      padding: 238px 0 60px 0;
      margin: 20px auto 0;
      border-radius: 16px;
      background: #ffffff;
        .status-select {
          width: 438px;
          height: 229px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          .single-container {
            text-align: center;
            .single {
              width: 140px;
              height: 140px;
              img {
                width: 140px;
                height: 140px;
              }
            }
            .selected {
              border-radius: 70px;
              background: #f2e1e9;
            }
            .single-text {
              font-size: 32px;
            }
          }
          .love-container {
            text-align: center;
            .love {
              width: 140px;
              height: 140px;
              img {
                width: 140px;
                height: 140px;
              }
            }
            .selected {
              border-radius: 70px;
              background: #f2e1e9;
            }
            .love-text {
              font-size: 32px;
            }
          }
        }
        .sure-btn {
          width: 406px;
          height: 72px;
          margin: 257px 203px 0;
        }
    }
    .is-background {
      width: 406px;
      height: 72px;
      margin: 0 auto;
      line-height: 102px;
      text-align: center;
      background-size: cover;
    }
}
</style>
