<template lang="pug">
  div#app
    pages-header(title="历史记录", @goBack="back")
    warpper.warpper
      list.list(v-if="historyList.length > 0", v-for="(item,index) in historyList", :key="index", :item="item")
      not-data(v-if="historyList.length <= 0")

</template>

<script>
import PagesHeader from '@/components/pages-header'
import Warpper from '@/components/warpper'
import List from './list'
import Axios from 'axios'
import Qs from 'qs'
import NotData from '@/components/not-data'
export default {
  name: 'gifts-history',
  components: { Warpper, List, PagesHeader, NotData },
  computed: {
    businessType () {
      if (this.query.type === 'received') {
        return 'targetUserId'
      }
      return 'sourceUserId'
    }
  },
  data () {
    return {
      historyList: [],
      query: Qs.parse(window.location.search, { ignoreQueryPrefix: true })
    }
  },
  methods: {
    getlist () {
      let data = {
        businessType: this.businessType,
        userId: this.query.uid
      }
      Axios({ url: '/gift/gift/getMyGiftsHistory',
        method: 'POST',
        data
      }).then(res => {
        if (res.rsCode === '200') {
          let data = res.rsObject
          this.historyList = data.map(item => {
            return {
              image: item.giftImageUrl,
              price: item.giftPrice,
              name: item.giftName,
              number: item.giftNum
            }
          })
        }
      }).catch(err => {
        console.log(err)
      })
    },
    back () {
      window.history.back(-1)
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

.warpper {
  padding: 40px 30px;
  margin: 20px 26px;
  background: #fff;
  min-height: calc(100vh - 200px);
  .list:last-child {
    border-bottom: 0;
  }
}

</style>
