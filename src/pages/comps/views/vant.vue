<template lang="pug">
  div.comp-wrap
    h2 Vant
    van-button(type="info", @click="showDialog") Dialog
    van-button(type="info", @click="showToast") Toast
</template>

<script>

export default {
  name: 'vant',
  data () {
    return {
    }
  },
  methods: {
    showDialog () {
      this.$dialog.confirm({
        message: 'Test content',
        cancelButtonText: '否',
        confirmButtonText: '是'
      }).then(() => {
        console.log('Yes')
      }).catch(() => {
        console.log('No')
      })
    },
    showToast () {
      this.$toast('Toast')
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
