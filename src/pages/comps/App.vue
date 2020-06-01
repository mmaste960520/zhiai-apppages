<template lang="pug">
  div#app
    h1 Comps
    nav
      router-link(to="/message") Message
      router-link(to="/warpper") Warpper
      router-link(to="/js-bridge") JSBridge
      router-link(to="/vant") Vant
    router-view
</template>

<script>
export default {
  name: 'comps'
}
</script>

<style lang="scss">
  @import '@/styles/main';
  #app {
    width: 500px;
    margin: 0 auto;
    nav {
      margin: 10px 0;
      a {
        margin-right: 5px;
      }
    }
  }
</style>
