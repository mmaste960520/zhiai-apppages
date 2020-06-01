<template lang="pug">
div.box(:class="[{full: isFull}, {scroll: isFull && isScroll}]")
    slot
</template>

<script>
export default {
  name: 'box',
  props: {
    isFull: {
      type: Boolean,
      default: true
    },
    isScroll: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .box{
    position: relative;
    font-size: 26px;
    border-radius: 20px;
    margin: 30px;
    box-sizing: border-box;
    box-shadow:0px 8px 40px 0px rgba(51, 51, 51, 0.8);
    background: #ffffff;
    &.full {
      min-height: calc(100vh - 80px);
      &.scroll {
        height: calc(100vh - 80px);
        overflow: scroll;
      }
    }
  }
</style>
