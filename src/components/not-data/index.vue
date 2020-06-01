<template lang="pug">
  div.not-data
    div.content
      img.image(:src="images")
      div(v-text="text")
</template>

<script>
export default {
  name: 'not-data',
  props: {
    images: {
      type: String,
      default: require('./images/ic_common_lack_style_14@2x.png')
    },
    text: {
      type: String,
      default: '这儿空空如也什么都没有'
    }
  }
}
</script>

<style lang="scss">
  @import '@/styles/main';
</style>
<style lang="scss" scoped>
.not-data{
  height: 70vh;
  position: relative;
  .content{
    height: 500px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    font-size: 24px;
    line-height: 36px;
    color: rgba(10, 17, 27, .6);
    text-align: center;
    .image{
      height: 350px;
      width: 350px;
    }
  }
}
</style>
