<template lang="pug">
  div(@click="toFillInformation") 支付界面
</template>
<script>
export default {
  methods: {
    toFillInformation () {
      this.$router.push('/fill-personal-information')
    }
  }
}
</script>
