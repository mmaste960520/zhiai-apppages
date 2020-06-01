<template lang="pug">
  div#app
    h1 App pages
    ul
      li(v-for="page in pages")
        span.file-name.ignore {{page.filename}}
        a(:href="'' + page.filename") {{page.title}}
    div.change-skin
      button(@click="changeSkin('scp_maleTheme')") male
      button(@click="changeSkin('scp_femaleTheme')") female
</template>

<script>
const pages = require('../../../config/pages.js')

export default {
  name: 'index',
  data () {
    return {
      pages
    }
  },
  methods: {
    changeSkin (skin) {
      document.body.setAttribute('data-skin', skin)
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/main';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 30px;
  color: #FFF;
  text-shadow: 1px 1px 0px #2d2d2d;
  .file-name.ignore {
    display: inline-block;
    width: 200px;
  }
  a {
    color: #FFF;
  }
  h1 {
    @include x-color(red, green);
  }
}
</style>
