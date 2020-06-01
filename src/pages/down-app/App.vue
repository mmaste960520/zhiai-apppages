<template lang="pug">
  div#app
    div.href
      div.iPhone(@click="hrefUrl('iPhone')")
      div.android(@click="hrefUrl()")
</template>

<script>
export default {
  name: 'down-app',
  methods: {
    hrefUrl (h) {
      if (h === 'iPhone') {
        window.location.href = 'https://fir.im/f43h'
      } else {
        window.location.href = 'https://fir.im/kp81'
      }
    }
  }
}
</script>

<style lang="scss">
  @import '@/styles/main';
</style>

<style scoped lang="scss">
#app {
  height: 100vh;
  width: 100%;
  background: url('./images/小程序.jpg') no-repeat;
  background-size: cover;
  position: relative;
  .href{
    height: 300px;
    width: 350px;
    position: absolute;
    left: 30%;
    bottom: 22%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .iPhone{
      height: 110px;
      width:100%;
      background: url('./images/iPhone版下载.png') no-repeat;
      background-size: contain;
    }
    .android{
      height: 110px;
      width:100%;
      background: url('./images/Android版下载.png') no-repeat;
      background-size: contain;
    }
  }
}
</style>
