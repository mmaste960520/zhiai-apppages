<template lang="pug">
  div#person-device
    p 个人设置页面
    p(@click="toFeelingStatusPage") 绑定成功后进入感情状恢复单身
</template>
<script>
export default {
  name: 'PersonDevice',
  data () {
    return {
      personStatus: ''
    }
  },
  mounted () {
    // console.log(this.$route.params.id)
    // console.log(this.$route.query.id)
    this.personStatus = this.$route.query.id
    if (this.personStatus === 1) {
      console.log('牵手成功')
    }
  },
  methods: {
    toFeelingStatusPage () {
      this.$router.push({ path: '/feeling-status-page', query: { personStatus: 2 } })
    }
  }
}
</script>
<style lang="scss">
#person-device {
  height: 100vh;
  padding: 4px;
}
</style>
