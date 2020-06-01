<template lang="pug">
  div.yes-list
    div.img(:class=" item.image ? '' : 'img-none' " )
      img( v-if=" item.image ", :src="item.image")
    div.name
      span {{ item.name }}
    div.times
      span {{ item.times }}个月
</template>

<script>
export default {
  name: 'yes-list',
  props: {
    item: {}
  }
}
</script>

<style scoped lang="scss">
  .yes-list {
    width: 100%;
    border-bottom: 1px solid #dfd4e3;
    padding: 34px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .img {
        height: 88px;
        width: 89px;
        padding-left: 31px;
        img {
          width: 100%;
          height: 100%;
          box-shadow: 0px 2px 10px 0px
          rgba(16, 23, 39, 0.4);
          border-radius: 20px;
        }
      }
      .name {
        flex: 1;
        font-size: 28px;
        width: 140px;
        padding-left: 19px;
      }

    .times{
      width: 106px;
      line-height: 40px;
      text-align: center;
      border-radius: 20px;
      background: linear-gradient(-90deg,
        rgba(355, 118, 134, 0.1) 0%,
        rgba(226, 91, 182, 0.1) 100%);
      margin-right: 14px;
      span {
        font-size: 24px;
        color: #f53c70;
        opacity: 1;
      }

    }
  }

</style>
