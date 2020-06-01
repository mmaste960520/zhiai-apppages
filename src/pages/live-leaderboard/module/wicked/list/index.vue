<template lang="pug">
  div.list
    div.list-item(v-for="(item,index) in listData" :key="index")
      div.item-pic
        img(:src="item.image")
        div {{item.name}}
      div {{item.peak}}
      div {{item.stause}}
</template>

<script>
import Warpper from '@/components/warpper'

export default {
  name: 'exchange-list',
  components: { Warpper },
  props: {
    listData: Array
  }
}
</script>

<style lang="scss">
  @import '@/styles/main';
</style>

<style scoped lang="scss">
.list{
  .list-item{
    line-height: 120px;
    display: flex;
    font-size: 20px;
    text-align: center;
    color: #181b22;
    border-top: 1px solid rgba(18, 18, 18, 0.04);
    div{
      width:160px;
    }
    .item-pic{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 88px;
        height: 88px;
        vertical-align: middle;
        box-shadow: 0px 4px 20px 0px
          rgba(18, 18, 18, 0.2);
        border-radius: 20px;
      }
    }

  }
}
</style>
