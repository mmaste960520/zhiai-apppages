<template lang="pug">
  div.drodown
    div(v-show='status')
      img(src='./down.png')
    div(v-show='!status')
      img(src='./up.png')
</template>

<script>
export default {
  name: 'marriage',
  props: {
    status: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  @import '@/styles/main';
</style>

<style scoped lang="scss">
.drodown{
  div{
    height:20px;
    width:35px;
    img{
      width:100%;
      height:100%;
    }
  }
}
</style>
