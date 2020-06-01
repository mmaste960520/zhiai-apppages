<template lang="pug">
  div.app
    pages-header(:title="headerTitle", @goBack="colsePage")
    warpper.warpper
      div.container
        div.content(v-html="content")
        bottom-handing-result
        //- div.service
        //-   div.left
        //-     span.unfocus 需要协助 ：
        //-     span.highlight 在线客服
        //-   div.right
        //-     span.unfocus 服务热线 :
        //-     span.highlight 8888888888
</template>
<script>
import showdown from 'showdown'
import BottomHandingResult from '../component/bottom-handing-result/bottom-handing-result'
import Warpper from '@/components/warpper'
import PagesHeader from '@/components/pages-header'
export default {
  components: {
    BottomHandingResult,
    Warpper,
    PagesHeader
  },
  data () {
    return {
      id: this.$route.params.id,
      content: ''
    }
  },
  computed: {
    headerTitle () {
      console.log(this.$route.params)
      return this.$route.params.title
    }
  },
  methods: {
    colsePage () {
      this.$router.go('-1')
    },
    initContent () {
      const md = require(`./../posts/${this.id}.md`).default
      const converter = new showdown.Converter()
      this.content = converter.makeHtml(md)
    }
  },
  mounted () {
    this.initContent()
  }
}
</script>
<style lang="scss" scope>
.app {
  font-size: 26px;
  height: 100vh;
  .warpper{
    background: #fff;
    min-height: calc(100vh - 200px);
    margin: 20px 26px;
    padding: 40px;
    overflow: hidden;
    margin-bottom: 40px;
    .container {
      padding-top: 30px;
      .content {
        font-size: 28px;
        line-height: 1.5;
      }
    }
    img{
      width: 100%;
      object-fit: cover;
    }
  }

}
</style>
