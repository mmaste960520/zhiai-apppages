<template lang="pug">
  div.rank-list
    div.number(:class="item.number ===1 ? 'background-one' : item.number ===2 ? 'background-two' :  item.number ===3 ? 'background-three' : '' ") {{ item.number }}
    div.img(:class=" item.image ? '' : 'img-none' " )
      img(v-if="item.image", src="@/assets/pic.jpg")
    div.name {{ item.name }}
    div.price {{ item.price }}
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
.rank-list {
  width:100%;
  border-bottom: 1px solid #354054;
  padding: 34px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #e1e0e3;
  font-size: 24px;
  .number {
    margin: 10px;
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    font-size: 22px;
    border-radius: 50%;
  }

  .img {
    height: 90px;
    width: 90px;
    margin: 10px;
    box-shadow: 0px 2px 20px 0px
    rgba(18, 18, 18, 0.5);
    border-radius: 20px;
    img{
      height:100%;
      width:100%;
      border-radius: 20px;
    }
  }

  .img-none {
    margin: 10px;
    height: 90px;
    width: 90px;
    background: #eee;
    box-shadow: 0px 2px 20px 0px
    rgba(18, 18, 18, 0.5);
    border-radius: 20px;
  }

  .name {
    flex: 1;
  }

}
  .background-one {
    color:#fff;
    background-image: linear-gradient(0deg,
      #fdc45f 0%,
      #f6a751 100%);
  }

  .background-two {
    color:#fff;
    background-image: linear-gradient(0deg,
      #909090 0%,
      #aab0b4 100%);
  }

  .background-three {
    color:#fff;
    background-image: linear-gradient(0deg,
      #eba171 0%,
      #dc9460 100%)
  }
</style>
