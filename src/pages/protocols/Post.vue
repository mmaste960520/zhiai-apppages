<template lang="pug">
  div.post
    box(:is-full="true", :is-scroll="false")
      div.content(v-html="content")
</template>

<script>
import showdown from 'showdown'
import Box from '@/components/box'

export default {
  name: 'protocol',
  data () {
    return {
      id: this.$route.params.id,
      content: ''
    }
  },
  components: {
    Box
  },
  methods: {
    initContent () {
      const md = require(`./posts/${this.id}.md`).default
      const converter = new showdown.Converter({ metadata: true })
      this.content = converter.makeHtml(md)
      const { title } = converter.getMetadata()
      document.title = title
    }
  },
  mounted () {
    this.initContent()
  }
}
</script>

<style lang="scss" scope>
.box {
  overflow: hidden;
}
.subscribe {
  display: block;
  margin: 10px auto;
}
.content {
  font-size: 28px;
  line-height: 1.5;
  padding: 50px;
  h1 {
    font-weight: normal;
    color: #263459;
    font-size: 40px;
  }
  h2 {
    font-weight: normal;
    color: #263459;
    font-size: 32px;
  }
  li {
    color: rgba(38, 52, 89, 0.8);
  }
  p {
    color: rgba(38, 52, 89, 0.8);
    text-indent: 56px;
  }
  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    border-radius: 20px;
  }
}
</style>
