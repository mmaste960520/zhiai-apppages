<template lang="pug">
  div#login-help-list
    pages-header(title="帮助", @goBack="colsePage")
    warpper.warpper
      login-help.public(
        v-for="(group, index) in groups",
        :title="group.groupTitle",
        :key="index",
        :LoginList="group.list"
      )
</template>

<script>
import LoginHelp from '../component/component'
import groups from '../config'
import Warpper from '@/components/warpper'
import PagesHeader from '@/components/pages-header'
export default {
  components: {
    LoginHelp,
    PagesHeader,
    Warpper
  },
  data () {
    return {
      groups
    }
  },
  methods: {
    colsePage () {
      this.$bridge.close()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/styles/main';
  #login-help-list {
    box-sizing: border-box;
    .warpper{
      min-height: calc(100vh - 200px);
      background: #ffffff;
      margin: 20px 26px;
      padding: 0 40px;
      overflow: hidden;
    }
  }
</style>
