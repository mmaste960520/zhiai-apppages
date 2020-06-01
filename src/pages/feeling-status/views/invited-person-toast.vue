<template lang="pug">
  div#invited-person-toast(@click="toInvitedConfirm") 被邀请人界面弹窗
</template>
<script>
export default {
  methods: {
    toInvitedConfirm () {
      this.$router.push('/invite-confirm')
    }
  }
}
</script>
<style lang="scss">
</style>
