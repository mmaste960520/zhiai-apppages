<template lang="pug">
  div
    img.image(v-if="imgurl", :src="imgurl")
</template>
<script>
export default {
  name: 'userLevel',
  props: {
    userLevel: String
  },

  data () {
    return {

    }
  },
  computed: {
    imgurl () {
      const data = {
        '1': require('./images/me_icon_level1@2x.png'),
        '2': require('./images/me_icon_level2@2x.png'),
        '3': require('./images/me_icon_level3@2x.png')
      }
      if (Number(this.userLevel) > 0) {
        return data[this.userLevel]
      }
      return ''
    }
  }
}
</script>
<style lang="scss" scoped>
.image{
  height: 44px;
  width: 44px;
  vertical-align: middle;
  margin: 0 10px;
}
</style>
