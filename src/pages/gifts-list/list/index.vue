<template lang="pug">
    div.gifts-list
      div.pic-text
        div.img
          img(v-if="item.image", :src="item.image")
        div.price
          span(v-if=" item.price") {{ item.price }}个
          span {{ item.name }}
      div.title {{ item.title }}
      div.btn( :class=" item.state === '0' ? 'disable' : '' " )
        span(v-if="item.state === '0'", @click="changeState") 加关注
        span(v-if="item.state === '1'") 已关注
</template>

<script>
import { Toast } from 'vant'
import Axios from 'axios'
export default {
  name: 'index',
  props: {
    item: {}
  },
  mounted () {

  },
  methods: {
    /**
     * 点击按钮改变状态
     */

    changeState () {
      let data = {
        action: 2,
        direction: 1,
        sceneType: 2,
        value: 1,
        toUuid: this.item.id
      }
      Axios({ url: '/user/action/actionToUser',
        method: 'POST',
        data
      }).then(res => {
        if (res.rsCode === '200') {
          this.item.state = '1'
          Toast.success('关注成功')
        } else {
          Toast.fail('关注失败')
        }
      }).catch(err => {
        Toast.fail('关注失败')
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .gifts-list {
    width:100%;
    border-bottom: 1px solid rgba(10, 17, 27, .04);
    padding: 34px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .pic-text{
      display: flex;
      .img {
        height: 72px;
        width: 72px;
        img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .price {
        line-height: 35px;
        width: 140px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
        span {
          display: inline-block;
          &:nth-child(1) {
            color: #da9d56;
            font-size: 28px
          }
          &:nth-child(2) {
            display: inline-block;
            color: rgba(10, 17, 27, .8);
            font-size: 20px;
            transform: scale(.9)
          }
        }
      }
    }

    .title {
      text-align: center;
      color: #101727;
      font-size: 28px;
    }
    .btn {
      text-align: center;
      width: 120px;
      color: rgba(0, 0, 0, .8);
      font-size: 24px;
    }
    .disable {
      margin-top: 10px;
      background-image: linear-gradient(0deg,
        #dca974 0%,
        #fdcf94 100%);
      color: #714210;
      height: 52px;
      line-height: 52px;
      width: 120px;
      border-radius: 26px;
      font-size: 24px;
    }
  }

</style>
