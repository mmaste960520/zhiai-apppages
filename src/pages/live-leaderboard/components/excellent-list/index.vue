<template lang="pug">
  div.list
    div.list-title
      span 排行
      span 昵称
      span 挚爱值
      span 关注
    list(:finished="finished", v-model="loading" finished-text="没有更多了", @load="onLoad")
      div.list-item(v-for="(item,index) in list", :key="index")
        div.item-index {{index+4}}
        div
          img(:src="item.image")
        div {{item.name}}
        div {{item.peak}}
        div
          attention-btn.btn(:followStatus="item")
</template>

<script>
import AttentionBtn from '../attention-btn'
import { List } from 'vant'

export default {
  name: 'index',
  components: {
    AttentionBtn,
    List
  },
  props: {
    list: Array,
    total: Number
  },
  data () {
    return {
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        if (this.list && this.list.length >= this.total) {
          this.finished = true
        }
        this.$emit('onLoad')
        this.loading = false
      }, 1000)
    }

  }
}
</script>

<style lang="scss">
  @import '@/styles/main';
</style>

<style lang="scss" scoped>
.list{
  padding: 0 35px;
  .list-title {
    line-height: 70px;
    display: flex;
    color: #181b22;
    opacity: 0.6;
    font-size: 20px;
    text-align: center;
    span:nth-child(1) {
      width:80px;
    }
    span:nth-child(2) {
      flex: 1;
    }
    span:nth-child(3) {
      width:160px;
    }
    span:nth-child(4) {
      width:120px;
    }
  }
  .list-item {
    display: flex;
    line-height: 120px;
    color: #181b22;
    font-size: 22px;
    text-align: center;
    border-top: 1px solid rgba(0, 0, 0, 0.04);
    .item-index {
      width: 80px;
      font-size: 22px;
    }
    div:nth-child(2) {
      img{
        width: 88px;
        height: 88px;
        box-shadow: 0px 4px 20px rgba(18, 18, 18, 0.2);
        border-radius: 20px;
        vertical-align: middle;
      }
    }
    div:nth-child(3) {
      flex: 1;
      padding-left: 14px;
      color: #181b22;
      font-size: 24px;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    div:nth-child(4) {
      width: 160px;
      font-size: 24px;
      color: #34b4d5;
    }
    div:nth-child(5) {
      width: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

</style>
