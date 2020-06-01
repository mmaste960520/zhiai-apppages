<template lang="pug">
  div
    div.trip-type
      div.swiper
        swiper.swiper-wrapper(:options="swiperOption")
          swiper-slide.swiper-slide(v-for="(item,index) in images", :key="index", on-sliderMove="getSwiperIndex(index)")
            img(:src="item")
        div.swiper-pagination
    div.warpper-box
      warpper.warpper
        p 卡片介绍
        div
          span 1.
          span 当会员婚嫁基金达到10W时,可以进行申请.
        div
          span 2.
          span 申请时根据婚嫁基金的多少可以对应选择相应的旅游活动.
        div
          span 3.
          span 申请后,婚嫁基金清零，从此收到的礼物、收益全额转化为婚嫁基金.
        div
          span 4.
          span 申请成功的一刻算起,一年内累计的婚嫁基金,凭结婚证可以领取相应的婚嫁基金和奖励.
        div
          span 5.
          span 一年内未结婚的,根据当年度积攒的婚嫁基金,可以免费参加我平台组织的相亲旅行.
        div
          span 6.
          span 该活动最终解释权归挚爱家园科技有限公司所有.
        div.btn
          router-link(tag="p", to="/InfoFrom") 去使用
</template>

<script>
import Warpper from '@/components/warpper'

export default {
  name: 'index',
  components: { Warpper },
  data () {
    return {
      swiperOption: {
        direction: 'horizontal',
        loop: true,
        autoplay: 5000,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 20,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        on: {
          slideChange (e) {
            console.log(this.realIndex)
          }
        }
      },
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },
  methods: {
    getSwiperIndex (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss">
  @import '@/styles/main';
</style>

<style lang="scss" scoped>

.trip-type{
  .swiper{
    margin: 20px 0 53px;
    height: 312px;
    overflow: visible!important;
    .swiper-wrapper {
      .swiper-slide{
        width: 620px;
        border-radius: 20px;
        img {
          width: 100%;
          height: 312px;
          border-radius: 20px;
        }
      }
      .swiper-slide-prev{
        margin-top: 18px;
        height: 279px!important;
        img{
          height: 279px!important;
        }
      }
      .swiper-slide-next{
        margin-top: 18px;
        height: 279px!important;
        img{
          height: 279px!important;
        }
      }
      .swiper-slide-active{
        width: 620px;
      }
    }
    .swiper-container{
      --swiper-theme-color: #ff6600;
    }
  }
}
.warpper-box{
  padding: 0 40px;
  min-height: 800px;
  .warpper {
    min-height: 800px;
    padding: 5px 40px;
    position: relative;
    p{
      font-size: 40px;
    }
    div {
      line-height: 48px;
      font-size: 28px;
      display: flex;
      span:nth-child(1) {
        width: 22px;
        padding-right: 16px;
      }
    }
    .btn {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 120px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #2e384c;
      p {
        color: #333;
        display: inline-block;
        margin: 0;
        height: 72px;
        line-height: 72px;
        width: 406px;
        border-radius: 36px;
        background: #edbd85;
        text-align: center;
      }
    }
  }
}

</style>
