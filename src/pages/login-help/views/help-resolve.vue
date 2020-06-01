<template lang="pug">
  div#resolve
    pages-header(title="帮助", @goBack="colsePage")
    warpper.warpper
      div.content(v-html="content")
      result
</template>
<script>
import showdown from 'showdown'
import Result from '../component/bottom-handing-result/bottom-handing-result'
import Warpper from '@/components/warpper'
import PagesHeader from '@/components/pages-header'
export default {
  components: {
    Result,
    Warpper,
    PagesHeader
  },
  data () {
    return {
      id: this.$route.params.id,
      content: ''
    }
  },
  methods: {
    initContent () {
      const md = require(`./../posts/${this.id}.md`).default
      const converter = new showdown.Converter()
      this.content = converter.makeHtml(md)
    },
    colsePage () {
      this.$router.go('-1')
    }
  },
  mounted () {
    this.initContent()
  }
}
</script>
<style lang="scss" scope>
#resolve {
  .warpper{
    min-height: calc(100vh - 200px);
    background: #ffffff;
    margin: 20px 26px;
    margin-bottom: 20px;
    padding: 26px;
    overflow: hidden;
    img{
      width:100%;
      object-fit: cover;
    }
  }
}
</style>
