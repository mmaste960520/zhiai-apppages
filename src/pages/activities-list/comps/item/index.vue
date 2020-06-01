<template lang="pug">
  div.item
    div.pic(:class="{waiting: isWaiting}", :style="{backgroundImage: 'url(' + pic + ')'}")
    div.content
      h2.title {{ title }}
      p.position(v-if="position") 出发地点: {{ position }}
      p.time 出发时间: {{ time }}
</template>

<script>
export default {
  name: 'item',
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    },
    pic: {
      type: String,
      default: ''
    },
    isWaiting: {
      type: Boolean,
      default: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import '@/styles/main';

.item {
  display: flex;
  margin: 10px 30px;
  align-items: center;
  border-bottom: 1px solid #f3f3f3;
  .pic {
    position: relative;
    display: block;
    width: 140px;
    height: 140px;
    margin-right: 20px;
    background: gray;
    flex-shrink: 0;
    border-radius: 10px;
    overflow: hidden;
    &.waiting:after {
      content: '等待答复中';
      font-size: 24px;
      text-align: center;
      color: #FFF;
      background: #f52859;
      position: absolute;
      height: 35px;
      line-height: 35px;
      width: 100%;
      left: 0;
      bottom: 0;
    }
  }
  .content {
    font-size: 24px;
    color: #6a6a6b;
    .title {
      font-size: 32px;
      color: #181b22;
    }
  }
}
</style>
