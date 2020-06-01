<template lang="pug">
  div.comp-wrap
    h2 JS Bridge
    button(@click="getInfo") getInfo
    button(@click="getSkin") getSkin
    button(@click="jump") jump
    button(@click="close") close
    button(@click="pay") pay
    button(@click="threeLevel") threeLevel

    div.info {{ info }}
</template>

<script>
export default {
  name: 'js-bridge',
  data () {
    return {
      info: ''
    }
  },
  methods: {
    getInfo () {
      this.$bridge.getInfo({
        callback: data => {
          console.log(data)
          this.info = data
          alert(data)
        }
      })
    },
    getSkin () {
      this.$bridge.getInfo({
        data: {
          key: 'skin'
        },
        callback: data => {
          console.log(data)
          this.info = data
          alert(data)
        }
      })
    },
    jump () {
      this.$bridge.jump({
        path: 'home'
      })
    },
    close () {
      this.$bridge.close()
    },
    pay () {
      this.$bridge.pay({
        data: {
          paying: '1'
        },
        callback: data => {
          console.log(data)
          this.info = data
          alert(data)
        }
      })
    },
    threeLevel () {
      this.$bridge.threeLevel({
        callback: data => {
          console.log(data)
          this.info = data
          alert(data)
        }
      })
    }
  },
  mounted () {
    console.log(this.$bridge)
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
