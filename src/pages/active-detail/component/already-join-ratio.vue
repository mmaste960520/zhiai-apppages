<template lang="pug">
  div.already-join-ratio
    div.tip 已报名人数
    div.ratio
      div.gentleman
        div.sex 男
        div.gentleman-num {{gentleman}}
      div.madam
        div.sex 女
        div.madam-num {{madam}}
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: {
    gentleman: {
      type: Number
    },
    madam: {
      type: Number
    }
  }
}
</script>
<style lang="scss">
  .already-join-ratio {
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    align-items: center;
    background: #f1f1f2;
    border-radius: 20px;
    .tip,
    .ratio {
      color: #5c5d61;
      font-size: 24px;
    }
    .ratio {
      display: flex;
      justify-content: space-between;
      .gentleman,
      .madam{
        display: flex;
        .sex {
          margin-right: 12px;
        }
      }
      .gentleman {
        margin-right: 46px;
      }
    }
  }
</style>
