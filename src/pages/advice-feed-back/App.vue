<template lang="pug">
  div#advice-feed-back
    router-view
</template>

<script>
export default {
  name: 'advice-feed-back'
}
</script>

<style lang="scss">
  @import '@/styles/main';
  #advice-feed-back {
    padding: 30px 26px 30px;
    box-sizing: border-box;
  }
</style>
