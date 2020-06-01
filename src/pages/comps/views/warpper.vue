<template lang="pug">
  div.comp-wrap
    warpper
      h2 1111111111
      h2 1111111111
      h2 1111111111
</template>

<script>
import Warpper from '@/components/warpper'
export default {
  name: 'warpper-page',
  components: { Warpper }
}
</script>

<style lang="scss">
.comp-wrap {
  h2 {
    margin: 0 0 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
  }
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
