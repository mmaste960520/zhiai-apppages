<template lang="pug">
  header(v-if="isHeader")
    div.x-header
      div.go-back(@click="goBack")
        img(:src="goBackIcon")
      div.x-title
        span(v-if="title") {{title}}
        span
          slot(name='content')
      div.x-message(@click="openBtn")
        span(v-if="text") {{text}}
        img(v-else-if="textIcon", :src="textIcon")
</template>

<script>
import whichPlatform from '@/modules/which-platform'
export default {
  name: 'exchange-list',
  data () {
    return {
      isHeader: true
    }
  },
  computed: {
    goBackIcon () {
      let skin = this.$skin.name
      let stakData = {
        scp_famaleTheme: require('./image/ic_common_return_woman.png'),
        scp_maleTheme: require('./image/ic_common_return.png')
      }
      if (skin) {
        return stakData[skin]
      }
      return stakData.scp_maleTheme
    }
  },
  props: {
    title: String,
    text: String,
    textIcon: String
  },
  methods: {
    openBtn () {
      this.$emit('open', true)
    },
    goBack () {
      this.$emit('goBack')
    }
  },
  created () {
    if (whichPlatform() === 'web') {
      this.isHeader = false
    }
  }
}
</script>

<style lang="scss">
  @import '@/styles/main';
  .x-message,
  .x-title{
    @include x-color( #101727, #fff);
  }
  .x-header{
    @include x-bg(#f1d5cc, #253358);
  }
</style>

<style scoped lang="scss">
header{
  height: 90px;
  width: 100%;
  margin-bottom: 20px;
}
.x-header{
  height: 90px;
  width: 100%;
  line-height: 90px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  .go-back{
    margin-left: 20px;
    min-width: 48px;
    img {
      width: 40px;
      height: 40px;
      vertical-align: middle;
    }
  }
  .x-title{
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    flex: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden
  }
  .x-message{
    min-width: 48px;
    margin-right: 26px;
    font-size: 24px;
    img {
      width: 40px;
      height: 38px;
      vertical-align: middle;
    }
  }
}
</style>
