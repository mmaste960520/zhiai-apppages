<template lang="pug">
  div#app
    div.warpper
      header.header
        div
          img(:src="userInfo.images")
        div {{userInfo.name}}
        div 共{{dataList.length}}位守护人
      div.center
        list.list(v-for="(item,index) in dataList", :key="index", :item="item")
      div.button
        div(@click="dredgeVip") 确认开通
    div.no-bg-image(v-if="dataList.length<=0")
      img(src="./image/nobg.png")
      div 快成为第一个守护他的人吧
    div.bg-image(v-else)
      img(src="./image/yesbg.png")

</template>

<script>

import List from './list/list'
import Axios from 'axios'
import Qs from 'qs'

export default {
  name: 'giftsList',
  components: { List },
  data () {
    return {
      dataList: [],
      userInfo: {
        images: '',
        name: ''
      },
      query: Qs.parse(window.location.search, { ignoreQueryPrefix: true })
    }
  },
  methods: {
    getUserInfo () {
      Axios({ url: '/user/info/getSingleUserInfo',
        method: 'POST',
        data: {
          uuid: this.query.uid
        }
      }).then(res => {
        if (res.rsCode === '200') {
          let data = res.rsObject
          this.userInfo.images = data.profilePhotoidURL
          this.userInfo.name = data.nickName
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getlist () {
      let data = {
        action: 3,
        pageNumber: 1,
        pageSize: 10,
        toMe: 0,
        userId: this.query.uid
      }
      Axios({ url: '/user/action/getActionUserList',
        method: 'POST',
        data
      }).then(res => {
        if (res.rsCode === '200') {
          let data = res.rsObject
          data.userList.map((item, index) => {
            this.dataList.push({
              index,
              image: item.userInfo.profilePhotoidURL,
              name: item.userInfo.nickName,
              times: item.userInfo.guardRemained
            })
          })
        }
      }).catch(err => {
        console.log(err)
      })
    },
    dredgeVip () {
      this.$bridge.guardPay({
        uid: this.query.uid,
        liveRoomId: this.query.liveRoomId
      })
    }
  },
  created () {
    this.getlist()
    this.getUserInfo()
  }
}
</script>
<style lang="scss">
  @import '@/styles/main';
</style>
<style scoped lang="scss">
  #app {
    padding:20px 26px 32px;
    position: relative;
    .warpper {
      position:relative;
      min-height: calc(100vh - 80px);
      border-radius: 20px;
      background: #fff;
      .header {
        line-height: 90px;
        width:100%;
        color: #fff;
        display: flex;
        font-size: 28px;
        background: linear-gradient(-90deg,
          #f86f5c 0%,
          #ea3f80 100%);
        border-radius: 20px 20px 0 0;
        div {
          display: inline-block;
          &:nth-child(1){
            padding: 0 21px 0 52px;
            height: 64px;
            width: 64px;
            img {
              height:100%;
              width:100%;
              border-radius: 50%;
              vertical-align: middle
            }
          }
          &:nth-child(3){
            flex: 1;
            text-align: right;
            padding-right: 27px;
          }
        }

      }
      .center {
        height:auto;
        padding: 20px 21px 0;
        .list:last-child {
          border-bottom: 0
        }
      }
      .button {
        height: 120px;
        text-align: center;
        background: #fff;
        font-size: 32px;
        position: absolute;
        right: 0;
        left:0;
        bottom: 0;
        border-radius: 20px;
        div {
          margin-top: 24px;
          display: inline-block;
          width: 406px;
          line-height: 72px;
          background: linear-gradient(180deg,
            #fed094 0%,
            #daa873 100%);
          border-radius: 36px;
        }
      }
    }
    .bg-image{
      position: fixed;
      top: 25%;
      left: 7%;
      height:650px;
      width:650px;
      img {
        width:100%;
        height:100%;
      }
    }
    .no-bg-image{
      position: absolute;
      top: 20%;
      left: 25%;
      height:380px;
      width:380px;
      img {
        width:100%;
        height:100%;
      }
      div{
        position: absolute;
        right:0;
        left: 0;
        bottom: 14px;
        line-height: 27px;
        font-size: 28px;
        line-height: 74px;
        text-align: center;
        letter-spacing: 0px;
        color: #101727;
        opacity: 0.6;
      }
    }
}
</style>
