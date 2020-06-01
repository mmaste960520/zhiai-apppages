  <template lang="pug">
  div#common-question
    h3.top-title {{title}}
    ul
      router-link.question-list(
        tag="li",
        v-for="item in questionList",
        :key="item.id",
        :to="{ name: 'question', params: { id: item.id, title: item.title } }"
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
    'questionList'
  ]
}
</script>
<style lang="scss" scope>
#common-question {
  ul {
    margin-bottom: 36px;
  }
  ul li {
    list-style: none;
    color: #181b22;
    line-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(18, 22, 22, .04);
  }
  .top-title {
    font-weight: normal;
    font-size: 24px;
    color: #6b707c;
  }
  .question-list {
    font-size: 30px;
    &:after {
      content: '';
      width: 48px;
      height: 48px;
      background-image: url('./../../views/image/arrow-right2.png');
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
}
</style>
