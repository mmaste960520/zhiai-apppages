<template lang="pug">
  ul.join-request
    li 参加条件：
    li 报名截止时间：{{applyEndTime}}
    li 出发日期：{{applyOverTime}}
    li 报名限制人数：{{manNumber + womenNumber}} 人
    li 报名年龄限制：{{startAge}} - {{endAge}}岁
    li 报名费：{{expenditure}}元
</template>
<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    applyOverTime () {
      return this.TimerFotmate(this.departTime)
    }
  },
  methods: {
    TimerFotmate (timestamp) {
      const valid = (new Date(timestamp)).getTime() > 0
      if (!valid) {
        return ''
      }
      var date = new Date(timestamp)
      var len = timestamp.toString().length
      if (len < 13) {
        var sub = 13 - len
        sub = Math.pow(10, sub)
        date = new Date(timestamp * sub)
      }
      var y = date.getFullYear() + '.'
      var M = date.getMonth() + 1
      M = (M < 10 ? '0' + M : M) + '.'
      var d = date.getDate()
      d = (d < 10 ? '0' + d : d) + ''
      return y + M + d
    }
  },
  props: {
    expenditure: {
      type: String
    },
    manNumber: {
      type: Number
    },
    womenNumber: {
      type: Number
    },
    limitNumber: {
      type: Number
    },
    startAge: {
      type: Number
    },
    endAge: {
      type: Number
    },
    applyEndTime: {
      type: Number
    },
    departTime: {
      type: Number
    }
  }
}
</script>
<style lang="scss" scope>
  .join-request {
    height: 312px;
    padding: 0;
    padding: 18px 24px 27px;
    border-radius: 20px;
    background: #f1f1f2;
    li {
      list-style: none;
      font-size: 28px;
      color: rgb(225,164,90);
      margin-left: 18px;
      margin-bottom: 20px;
    }
  }
</style>
