<template lang="pug">
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
  mounted () {
    setTimeout(() => {
      this.isShow = false
    }, this.delay)
  }
}
</script>

<style scoped lang="scss">
</style>
