<template lang="pug">
  div#qa-list
    pages-header(title="常见问题", @goBack="colsePage")
    warpper.warpper
      common-question.public(
        v-for="(group, index) in groups",
        :title="group.groupTitle",
        :key="index",
        :questionList="group.list"
      )
</template>
<script>
import CommonQuestion from '../component/qa-help/common-question'
import groups from '../config'
import Warpper from '@/components/warpper'
import PagesHeader from '@/components/pages-header'
export default {
  components: {
    CommonQuestion,
    Warpper,
    PagesHeader
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
<style lang="scss">
  @import '@/styles/main';
  #qa-list {
    min-height: 100vh;
    border-radius: 16px;
    box-sizing: border-box;
    .warpper{
      min-height: calc(100vh - 200px);
      background: #ffffff;
      margin: 20px 26px;
      padding: 40px;
      overflow: hidden;
      margin-bottom: 40px;
      .public {
        margin-bottom: 66px;
      }
    }
  }
</style>
