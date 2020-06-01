<template lang="pug">
  div#report
    router-view
</template>
<script>
export default {
  name: 'bad-information-report'
}
</script>

<style lang="scss">
  @import '@/styles/main';
  #report {
    padding: 30px 26px 30px;
    box-sizing: border-box;
  }
</style>
