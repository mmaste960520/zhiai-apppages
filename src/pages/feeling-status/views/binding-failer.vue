<template lang="pug">
  div#binding-failer
    Binding(bindStatusI="绑定失败",@click.native="toPersonDevice")
    router-view
</template>
<script>
import Binding from '../component/bind-scussess-failer/component'
export default {
  components: {
    Binding
  },
  methods: {
    toPersonDevice () {
      this.$router.push('/person-device')
    }
  }
}
</script>
<style lang="scss" scope>
#binding-failer {
  padding-top: 220px;
  min-height: 94vh;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 20px;
}
</style>
