<template lang="pug">
  div.level(v-if="imgurl")
    img(:src="imgurl")
    span {{charm}}/{{charmNextValue}}
</template>
<script>
export default {
  name: 'level',
  props: {
    charm: {
      type: String,
      default: '0'
    },
    charmNextValue: {
      type: String,
      default: '1000'
    },
    level: String
  },

  data () {
    return {

    }
  },
  computed: {
    imgurl () {
      const data = {
        '1': require('./images/ic_common_devotion_level_1.png'),
        '2': require('./images/ic_common_devotion_level_2.png'),
        '3': require('./images/ic_common_devotion_level_3.png'),
        '4': require('./images/ic_common_devotion_level_4.png'),
        '5': require('./images/ic_common_devotion_level_5.png'),
        '6': require('./images/ic_common_devotion_level_6.png')
      }
      if (Number(this.level) > 0) {
        return data[this.level]
      }
      return ''
    }
  }
}
</script>
<style lang="scss" scoped>
.level{
  display: flex;
  justify-content: center;
  line-height: 40px;
  font-size: 24px;
  color: #8e13a0;
  img{
    width: 128px;
    height: 40px;
    margin-right: 15px;
  }
}
</style>
