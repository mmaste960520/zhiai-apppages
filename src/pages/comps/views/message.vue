<template lang="pug">
  div.comp-wrap
    h2 Message
    button(@click="sayHello") sayHello
    button(@click="sayHi") sayHi
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
    }
  },
  methods: {
    sayHello () {
      this.xMessage({
        msg: 'hello',
        delay: 1000
      })
    },
    sayHi () {
      this.xMessage({
        msg: 'hi'
      })
    }
  }
}
</script>

<style lang="scss">
.comp-wrap {
  h2 {
    margin: 0 0 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
  }
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
