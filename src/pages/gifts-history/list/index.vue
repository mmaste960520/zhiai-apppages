<template lang="pug">
  div.gifts-history
    div.img(:class=" item.image ? '' : 'img-none' " )
      img( v-if=" item.image ", :src="item.image")
    div.price
      div(v-if="item.price") {{ item.price }}个
      div
        span {{ item.name }}
    div.number {{ item.number }}
</template>

<script>
export default {
  name: 'index',
  props: {
    item: {}
  }
}
</script>

<style scoped lang="scss">
  .gifts-history {
    width: 100%;
    border-bottom: 1px solid rgba(10, 17, 27, .04);
    padding: 34px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .img {
        height: 72px;
        width: 72px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .img-none {
        height: 72px;
        width: 72px;
        border-radius: 50%;
        background: #eee;
      }
      .price {
        flex: 1;
        width: 140px;
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        div {
          &:nth-child(1) {
            color: #da9d56
          }
          &:nth-child(2) {
            color: rgba(10, 17, 27, .8);
            font-size: 20px;
            span{
              display: inline-block;
              transform: scale(.9)
            }
          }
        }
      }

    .number{
      text-align: right;
      color: #101727;
    }
  }

</style>
