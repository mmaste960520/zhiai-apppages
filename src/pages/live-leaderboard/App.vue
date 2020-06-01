<template lang="pug">
  div#app
    PagesHeader(:textIcon="textIcon", @open="switchBtn", @goBack="back")
      div.title(slot="content")
        span(v-for="(item,index) in titleArray", :key="index", :class="switcherIndex===index?'selected': ''" @click="switcher(index)") {{item}}
    router-view
    pop-up(v-if="isPopShow", @colse="switchBtn")
</template>

<script>
import PagesHeader from '@/components/pages-header'
import PopUp from './components/pop-up'
export default {
  name: 'wish-trip',
  components: { PagesHeader, PopUp },
  computed: {
    textIcon () {
      let skin = this.$skin.name
      let stakData = {
        scp_famaleTheme: require('./image/ic_common_knapsack_style_4@2xwoman.png'),
        scp_maleTheme: require('./image/ic_common_knapsack_style_4@2x.png')
      }
      if (skin) return stakData[skin]
      return stakData.scp_famaleTheme
    }
  },
  data () {
    return {
      titleArray: ['好评榜', '周榜'],
      switcherIndex: 0,
      isPopShow: false
    }
  },
  watch: {
  },
  methods: {
    switcher (index) {
      let isRouter = this.$router.options.routes[index].path
      this.$router.replace({ path: isRouter })
      this.switcherIndex = index
    },
    switchBtn (e) {
      this.isPopShow = e
    },
    back () {
      this.$bridge.close()
    }
  }
}
</script>

<style lang="scss">
  @import '@/styles/main';
  .selected{
    @include x-color( #fe3b5a, #f1c28c);
    &::after{
      @include x-bg( #fe3b5a, #f1c28c);
    }
  }
</style>

<style scoped lang="scss">
.title{
  display: flex;
  justify-content: flex-start;
  font-size: 32px;
  span{
    display: inline-block;
    padding-left:40px;
  }
  .selected{
    transform: scale(1.1);
    position: relative;
    &::after{
      content:"";
      width: 26px;
      height: 4px;
      border-radius: 2px;
      position:absolute;
      bottom: 15px;
      z-index: 1;
      left: 50%;
    }
  }
}
</style>
