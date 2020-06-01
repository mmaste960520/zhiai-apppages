<template lang="pug">
  div#app
    warpper.warpper
      div.header
      div.title
        img(src='./images/ic_common_list_title_style_1.png')
      list.list(v-if="rankList.length>0" ,v-for="(item,index) in rankList", :key="index", :item="item")
      not-data(v-if="rankList.length<=0")
</template>

<script>
import Warpper from '@/components/warpper'
import List from './list'
import Axios from 'axios'
import Qs from 'qs'
import NotData from '@/components/not-data'
export default {
  name: 'loveRank',
  components: { Warpper, List, NotData },
  data () {
    return {
      rankList: [],
      query: Qs.parse(window.location.search, { ignoreQueryPrefix: true })
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
          this.rankList = data.list.map((item, index) => {
            return {
              index: index + 1,
              image: item.imageURL,
              name: item.nickName,
              price: item.lastBalance
            }
          })
          console.log(this.rankList)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getlist()
  }
}
</script>
<style lang="scss">
  @import '@/styles/main';
</style>
<style scoped lang="scss">
  #app {
    margin:20px 0 32px;
    padding: 0 32px;
    .warpper {
      padding: 30px 40px;
      min-height: calc(100vh - 80px);
      background: #fff;
      position: relative;
      .header {
        height: 480px;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: url('./images/bg_common_background_style_1.png');
        background-size: 100% 480px;
      }
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 320px;
          height: 80px;
        }
      }
      .list:last-child {
        border-bottom: 0;
      }
    }
  }
</style>
