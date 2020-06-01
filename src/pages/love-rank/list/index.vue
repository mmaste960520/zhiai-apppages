<template lang="pug">
  div.rank-list
    div.index
      img(v-if="item.index===1", :src='firstImages')
      img(v-if="item.index===2", :src='secondImages')
      img(v-if="item.index===3", :src='thirdImages')
      span(v-if="item.index>=4") {{ item.index }}
    div.img(:class=" item.image ? '' : 'img-none' " )
      img(v-if="item.image", src="@/assets/pic.jpg")
    div.name {{ item.name }}
    div.price {{ item.price }}
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      firstImages: require('../images/ic_common_ranking_first.png'),
      secondImages: require('../images/ic_common_ranking_second.png'),
      thirdImages: require('../images/ic_common_ranking_third.png')
    }
  },
  props: {
    item: {}
  }
}
</script>

<style scoped lang="scss">
.rank-list {
  width:100%;
  border-bottom: 1px solid rgba(10, 17, 27, .04);
  padding: 34px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #101727;
  font-size: 24px;
  .index {
    margin: 10px;
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    font-size: 22px;
    border-radius: 50%;
    font-style:italic;
    img{
      width: 100%;
      height: 100%;
    }
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
    padding-left: 20px;
  }

}
</style>
