<template lang="pug">
  div.list
    div.number
      img(v-if="number===1", src="../image/1.png")
      img(v-if="number===2", src="../image/2.png")
      img(v-if="number===3", src="../image/3.png")
      span(v-if="number>3") {{number}}
    div.img(:class=" item.image ? '' : 'img-none' " )
      img( v-if=" item.image ", :src="item.image")
    div.name
      span {{ item.name }}
    div.times {{ item.price }}
</template>

<script>
export default {
  name: 'yes-list',
  props: {
    item: {},
    number: {
      type: Number
    }
  }
}
</script>

<style scoped lang="scss">
  .list {
    width: 100%;
    border-bottom: 1px solid #dfd4e3;
    padding: 34px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .number{
      width: 32px;
      margin: 0 10px 0 20px;
      line-height: 32px;
      text-align: center;
      font-size: 22px;
      border-radius: 50%;
      color: #101727;
      font-style: italic;
      font-weight: 600;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .img {
        height: 88px;
        width: 89px;
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
      margin-right: 14px;
        font-size: 24px;
        color: #f53c70;
    }
  }

</style>
