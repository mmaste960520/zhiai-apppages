<template lang="pug">
  div#feeling-status
    router-view
</template>

<script>
export default {
  name: 'feeling-status'
}
</script>

<style lang="scss">
@import '@/styles/main';
#feeling-status {
  box-sizing: border-box;
  padding: 30px 26px 30px;
}
</style>
