<template lang="pug">
  div(:class="status === '0' ? 'pages-button' : 'set-grey'") {{content}}
</template>
<script>
export default {
  props: {
    content: String,
    status: String
  }
}
</script>
<style lang="scss" scope>
 .pages-button {
    width: 406px;
    height: 72px;
    line-height: 72px;
    text-align: center;
    font-size: 32px;
    background: linear-gradient(#f9ca90 30%, #eabb83 60%, #dcab76 100%);
    border-radius: 36px;
    color: #714210;
     &:active {
      color: #b27e41;
      background: linear-gradient(#ffd6a3 30%, #ffd6a3 60%, #ffd6a3 100%);
    }
  }
  .set-grey {
    width: 406px;
    height: 72px;
    line-height: 72px;
    text-align: center;
    font-size: 32px;
    background: #f1f2f2;
    border-radius: 36px;
    color: #959699;
    &:active {
      color: #959699;
      background: #f1f2f2;
    }
  }
</style>
