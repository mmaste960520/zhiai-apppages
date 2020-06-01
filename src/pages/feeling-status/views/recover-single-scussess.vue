<template lang="pug">
  div.recover-single
    Binding(bindStatusI="恢复单身成功", @click.native="toPersonDevice")
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
.recover-single {
  padding-top: 220px;
  min-height: 94vh;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 20px;
}
</style>
