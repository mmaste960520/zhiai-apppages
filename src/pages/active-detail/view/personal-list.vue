<template lang="pug">
  div.personal-list
    pages-header(title="人员名单", @goBack="goLastPage")
    div.persons-container
      div.card-list(v-for="(item, index) in joinPersonalInfo", :key="index")
        join-persons-list(
          :nickName="item.nickName",
          :anchorAvatar="item.anchorAvatar",
          :userLevel="item.level",
          :address="item.address",
          :edu="item.edu",
          :age="item.age",
          :gpsCity="item.gpsCity",
          :gpsStatus="item.gpsStatus"
          )
</template>
<script>
import PagesHeader from '@/components/pages-header'
import JoinPersonsList from '../component/join-persons-list'
import axios from 'axios'
export default {
  components: {
    JoinPersonsList,
    PagesHeader
  },
  data () {
    return {
      joinPersonalInfo: [
        {
          nickName: '詹姆斯',
          anchorAvatar: require('../images/test.jpg'),
          level: 1,
          address: '西安',
          edu: '大专',
          age: '24',
          gpsStatus: '1',
          gpsCity: '北京'
        },
        {
          nickName: '詹姆斯',
          anchorAvatar: require('../images/test.jpg'),
          level: 1,
          address: '西安',
          edu: '大专',
          age: '24',
          gpsStatus: '1',
          gpsCity: '北京'
        },
        {
          nickName: '詹姆斯',
          anchorAvatar: require('../images/test.jpg'),
          level: 1,
          address: '西安',
          edu: '大专',
          age: '24',
          gpsStatus: '1',
          gpsCity: '北京'
        }
      ],
      // 活动id
      id: this.$route.query.id
    }
  },
  methods: {
    goLastPage () {
      window.location.href = '-1'
    },
    getJoinPsesons () {
      axios.post('/activity/activity/getBanner/getJoinUserInfo', {
        id: this.id
      }).then(data => {
        if (data.rsCode === '200') {
          console.log(data)
        }
      })
    }
  },
  created () {
    this.getJoinPsesons()
  }
}
</script>
<style lang="scss" scope>
  .personal-list {
    .persons-container {
      min-height: 86vh;
      padding: 0 24px;
      margin: 10px 24px 0;
      background: #f9f9f9;
      border-radius: 20px;
      .card-list {
        margin-bottom: 20px;
      }
    }
  }
</style>
