<template lang="pug">
  div#app
    box
      div.history 历史记录
      item(
        v-if="items.length>0"
        v-for="(item, index) in items",
        :key="index",
        :title="item.title",
        :position="item.position",
        :time="item.time",
        :isWaiting="item.isWaiting"
        :pic="item.pic"
      )
      not-data(v-if="items.length<=0")
</template>

<script>
import Box from '@/components/box'
import Item from './comps/item'
import Axios from 'axios'
import Qs from 'qs'
import NotData from '@/components/not-data'
import { timestampToTime } from '@/utils/times'
export default {
  name: 'activities',
  data () {
    return {
      items: [],
      query: Qs.parse(window.location.search, { ignoreQueryPrefix: true })
    }
  },
  components: {
    Box,
    Item,
    NotData
  },
  methods: {
    getList () {
      let data = {
        uuid: this.query.uid
      }
      Axios({ url: '/activity/getBanner/getUserJoinActivity',
        method: 'POST',
        data
      }).then(res => {
        if (res.rsCode === '200') {
          this.items = res.rsObject.forEach(item => {
            return {
              title: item.activityName,
              time: timestampToTime(item.outsetTime),
              pic: item.activityUrl
            }
          })
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style lang="scss">
@import '@/styles/main';

#app {
  .history {
    display: flex;
    margin: 10px 30px;
    padding: 30px 0;
    justify-content: flex-end;
    color: rgba(18, 22, 22, .8);
    border-bottom: 1px solid #f3f3f3;
    font-size: 28px;
  }
}
</style>
