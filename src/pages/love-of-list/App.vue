<template lang="pug">
  div#app
    div.warpper
      header.header
        div
          img(:src="userInfo.picture")
        div {{userInfo.name}}
        div
          img(src="./image/zhiai.png")
          span {{userInfo.loveNumber}}
      div.center
        list.list(v-if="dataList.length>0", v-for="(item,index) in dataList", :key="index", :item="item", :number="index+1")
        div.title 贡献度
        not-data(v-if="dataList.length<=0")
</template>

<script>

import List from './list/list'
import Axios from 'axios'
import Qs from 'qs'
import NotData from '@/components/not-data'
export default {
  name: 'giftsList',
  components: { List, NotData },
  data () {
    return {
      dataList: [],
      query: Qs.parse(window.location.search, { ignoreQueryPrefix: true }),
      userInfo: {
        name: '',
        picture: '',
        loveNumber: ''
      }
    }
  },
  methods: {
    getlist () {
      let data = {
        userId: this.query.uid,
        'pageNumber': 1,
        'pageSize': 10
      }
      Axios({ url: '/user/star/getUserZhiAiList',
        method: 'POST',
        data
      }).then(res => {
        if (res.rsCode === '200') {
          let data = res.rsObject
          data.list.map((item, index) => {
            this.dataList.push({
              index,
              image: item.imageURL,
              name: item.nickName,
              price: item.lastBalance
            })
          })
        }
      }).catch(err => {
        console.log(err)
      })
    },
    gitInfo () {
      let data = {
        userId: this.query.uid
      }
      Axios({ url: '/user/star/getUserZhiValueList',
        method: 'POST',
        data
      }).then(res => {
        if (res.srCode === '200') {
          this.userInfo.picture = res.rsObject.auditPhotoidURL
          this.userInfo.name = res.rsObject.nickName
          this.userInfo.loveNumber = res.rsObject.charm
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getlist()
    this.gitInfo()
  }
}
</script>
<style lang="scss">
  @import '@/styles/main';
</style>
<style scoped lang="scss">
  #app {
    margin:20px 0 32px;
    padding: 0 26px;
    .warpper {
      position:relative;
      min-height: calc(100vh - 80px);
      border-radius: 20px;
      background: #fff;
      .header {
        line-height: 90px;
        width:100%;
        display: flex;
        font-size: 28px;
        color: #fff;
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
          &:nth-child(2){
            flex: 1;
          }
          &:nth-child(3){
            text-align: right;
            padding-right: 27px;
            img {
              height: 32px;
              width: 88px;
              vertical-align: middle;
              margin-right: 20px;
            }
          }
        }

      }
      .center {
        padding: 40px 21px 0;
        position: relative;
        .title{
          position: absolute;
          top: 48px;;
          right: 55px;;
          font-size: 24px;
          color: #101727;
          opacity: 0.8;
        }
      }
    }
}
</style>
