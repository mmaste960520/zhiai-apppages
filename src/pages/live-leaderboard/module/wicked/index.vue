<template lang="pug">
  warpper.warpper
    div.list-header
      span 昵称
      span 封禁时间
      span 封禁原因
    List(:listData="listData")
</template>

<script>
import Warpper from '@/components/warpper'
import List from './list'
export default {
  name: 'exchange-list',
  components: { Warpper, List },
  data () {
    return {
      listData: [
      ]
    }
  },
  methods: {
    getlist () {
      let data = {
        userId: this.$uid
      }
      this.$axios({ url: '/live/netease/getBlackRankRoom',
        method: 'POST',
        data
      }).then(res => {
        if (res.rsCode === '200') {
          let data = res.rsObject
          data.banneds.map((item, index) => {
            this.dataList.push({
              image: item.headUrl,
              name: item.nickName,
              peak: item.bannedTime,
              stause: item.reasonDesc
            })
          })
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
.warpper{
  margin: 20px 26px;
  min-height: calc(100vh - 200px);
  background: #fff;
  border-radius: 22px;
  overflow-y: auto;
  .list-header{
    height:80px;
    display: flex;
    font-size: 20px;
    line-height: 100px;
    text-align: center;
    color: #181b22;
    opacity: 0.6;
    span{
      width:160px;
    }
    span:nth-child(1){
      flex:1
    }
  }
}
</style>
