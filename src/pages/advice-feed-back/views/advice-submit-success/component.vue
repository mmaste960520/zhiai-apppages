<template lang="pug">
  div#app
    div.message(v-if="isShow")
      p {{ msg }}
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
      isShow: true
    }
  },
  props: {
    msg: String,
    delay: Number
  },
  created () {
    setTimeout(() => {
      this.isShow = false
    }, this.delay)
  }
}
</script>

<style scoped lang="scss">
#app {
  // position: relative;
  //   .message {
  //     position: absolute;
  //     left: 100px;
  //     top: 500px;
  //   }
}
</style>
