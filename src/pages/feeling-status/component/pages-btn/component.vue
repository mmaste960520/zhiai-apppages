<template lang="pug">
  div.pages-btn {{content}}
</template>
<script>
export default {
  props: {
    content: String
  }
}
</script>
<style lang="scss">
  .pages-btn {
    width: 262px;
    height: 72px;
    color: #4f2f0c;
    font-size: 32px;
    text-align: center;
    line-height: 72px;
    border-radius: 36px;
    background: linear-gradient(#f9ca90 30%, #eabb83 60%, #dcab76 100%);
  }
</style>
