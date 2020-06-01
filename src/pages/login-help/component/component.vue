<template lang="pug">
  div#login-help
    div.top-title {{title}}
    ul.list
      router-link.question-list(
        tag="li",
        v-for="item in LoginList",
        :key="item.id",
        :to="{ name: 'post', params: { id: item.id } }"
      ) {{item.title}}
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: [
    'title',
    'LoginList'
  ]
}
</script>
<style lang="scss" scope>
#login-help {
  .list li {
    list-style: none;
    color: #263459;
    line-height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba( 26, 34,59,.12);
  }
  .top-title {
    font-weight: normal;
    font-size: 24px;
    color: #6b707c;
    margin: 72px 0 18px;
  }
  .question-list {
    font-size: 30px;
    color: #263459;
    &:after {
      content: '';
      width: 48px;
      height: 48px;
      background-image: url('../image/arrow-right2.png');
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
}
</style>
