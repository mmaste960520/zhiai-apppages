<template lang="pug">
  div.warpper
    slot
</template>

<script>
export default {
  name: 'warpper'
}
</script>

<style lang="scss" scoped>
  .warpper{
    min-height: 20px;
    border-radius: 20px;
    box-sizing: border-box;
  }
</style>
