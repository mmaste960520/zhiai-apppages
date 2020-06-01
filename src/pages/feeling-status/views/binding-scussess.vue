<template lang="pug">
  div#binding-scussess
    Binding(bindStatusI="恋爱绑定成功", bindStatusII="请好好珍惜这份感情吧", @click.native="toPersonDevice")
</template>
<script>
import Binding from '../component/bind-scussess-failer/component'
export default {
  name: 'BindingScussess',
  components: {
    Binding
  },
  methods: {
    toPersonDevice () {
      this.$router.push({ path: '/person-device', query: { id: 1 } })
      // this.$router.push({ name: 'PersonDevice', params: { id: 1 } })
    }
  }
}
</script>
<style lang="scss">
#binding-scussess {
  padding-top: 220px;
  min-height: 94vh;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 20px;
}
</style>
