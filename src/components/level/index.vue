<template lang="pug">
span.level-icon(:style="{backgroundImage: 'url(' + levelPic + ')'}")
</template>
<script>
const oss = 'https://zajy-public.oss-cn-beijing.aliyuncs.com/miniapp'

export default {
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  computed: {
    levelPic () {
      return `${oss}/me_icon_level${this.level}.png`
    }
  }
}
</script>
<style lang="scss" scope>
$size: 60px;

.level-icon {
  display: inline-block;
  width: $size;
  height: $size;
  vertical-align: middle;
  background-size: cover;
}
</style>
