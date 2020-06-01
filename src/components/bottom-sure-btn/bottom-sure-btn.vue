<template lang="pug">
  div#gradient
    p.content {{content}}
</template>
<script>
export default {
  props: {
    content: String
  }
}
</script>
<style lang="scss">
  #gradient {
    width: 406px;
    height: 72px;
    text-align: center;
    line-height: 72px;
    border-radius: 36px;
    letter-spacing: 2px;
    background: linear-gradient(to bottom, #fed094 0%, #daa873 100%);
    box-shadow: 0 0 4px rgba(0,0,0,.15);
  }
</style>
