<template lang="pug">
  div.list(:id="item.id")
    div.title
      img(:src="item.icon")
      div {{item.title}}
    div.ms 特权介绍
    div {{item.content}}
    div.img
      img(:src="item.image")
</template>

<script>

export default {
  name: 'member',
  props: {
    item: {}
  }
}
</script>

<style lang="scss">
  @import '@/styles/main';
</style>

<style scoped lang="scss">
.list{
  line-height: 50px;
  padding-top:40px;
  font-size: 28px;
  color: #101727;
  overflow: hidden;
  .title{
    display: flex;
    height: 90px;
    font-size: 32px;
    color: #c99345;
    border-bottom: 1px solid rgba(10, 17, 27, .1);
    margin-bottom: 20px;
    img{
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }
  }
  .ms{
    font-size: 28px;
    line-height: 74px;
    color: rgba(10, 17, 27, .8);
  }
  .img{
    width:100%;
    height: 266px;
    margin-top: 30px;
    img{
      width:100%;
      object-fit: contain;
      border-radius: 20px;
    }
  }
}

</style>
