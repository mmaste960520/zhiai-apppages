<template lang="pug">
  div.vip-button {{buttonContent}}
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: {
    buttonContent: {
      type: String
    }
  }
}
</script>
<style lang="scss">
  .vip-button {
    width: 408px;
    height: 72px;
    font-size: 32px;
    color: rgb(113,66,16);
    text-align: center;
    line-height: 72px;
    margin: 0 auto ;
    border-radius: 36px;
    background: linear-gradient(#f9ca90 30%, #eabb83 60%, #dcab76 100%);
  }
</style>
