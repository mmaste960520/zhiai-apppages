<template lang="pug">
  warpper.warpper
    excellent-card(:first="first", :second="second", :thirdly="thirdly")
    Excellent-list(:list="list", @onLoad="getlist", :total="total")
</template>

<script>
import Warpper from '@/components/warpper'
import ExcellentCard from '../../components/excellent-card'
import ExcellentList from '../../components/excellent-list'
export default {
  name: 'index',
  components: { Warpper, ExcellentCard, ExcellentList },
  data () {
    return {
      listData: [
      ],
      list: [],
      first: {},
      second: {},
      thirdly: {},
      pagesNumber: 0,
      total: 0,
      ranking: '未上榜'
    }
  },
  methods: {
    myRanking () {
      this.$axios({ url: '/live/evaluate/getPraiseIndex',
        method: 'POST'
      }).then(res => {
        if (res.rsCode === '200') {
          let data = res.rsObject
          switch (data) {
            case data > 0 && data < 1000: this.ranking = data
              break
            default: this.ranking = '未上榜'
              break
          }
          console.log(data)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getCardList () {
      this.first = this.listData.slice(0, 1)[0]
      this.second = this.listData.slice(1, 2)[0]
      this.thirdly = this.listData.slice(2, 3)[0]
      this.list = this.listData.slice(3)
    },
    getlist () {
      let data = {
        userId: this.$uid
      }
      this.$axios({ url: '/user/star/getZhiAiListWeekly',
        method: 'POST',
        data
      }).then(res => {
        if (res.rsCode === '200') {
          let data = res.rsObject
          data.list.map(item => {
            this.listData.push({
              image: item.headURL,
              name: item.nickName,
              peak: item.evaluateValue,
              status: item.followStatus,
              id: item.userId
            })
          })
          this.total = data.total
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getlist()
    this.getCardList()
    this.myRanking()
  }
}
</script>

<style lang="scss">
  @import '@/styles/main';
</style>

<style lang="scss" scoped>
.warpper{
  margin: 20px 26px;
  min-height: calc(100vh - 200px);
  background: #fff;
  border-radius: 22px;
  overflow-y: auto;
}

</style>
