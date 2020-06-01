<template lang="pug">
  div#trip-particulars
    warpper.warpper
      div.header
        div 请选择出发时间
        div
          span {{nowTimeData}}
          dropdown.dropdown(:status="arrows", v-on:click.native="btnStatus")
      div.date(v-if='!calendar', ref="data")
        datepicker(v-model="timeDate", :maximumView="'day'", :disabledDates="highlightedFn", format="yyyy.MM.dd", :inline="true", :language="languages.zh", @selected="sele")
      div.particulars
        div 活动介绍
        div
          img(src='../../moduleImage/jianj.jpg')
      div.btn
        span(@click="closePages") 一起去旅行
</template>

<script>
import Warpper from '@/components/warpper'
import Datepicker from 'vuejs-datepicker'
import * as lang from 'vuejs-datepicker/src/locale'
import Dropdown from '@/components/dropdown'

export default {
  name: 'trip-particulars',
  components: { Warpper, Datepicker, Dropdown },
  data () {
    let time = `${new Date().getFullYear()}.${new Date().getMonth() + 1}.${new Date().getDate()}`
    return {
      nowTimeData: time,
      languages: lang,
      timeDate: time,
      arrows: true, // 日期箭头方向
      calendar: true,
      highlightedFn: {
        customPredictor (date) {
          if (date.getDate() % 4 === 0) {
            return true
          }
        }
      }
    }
  },
  methods: {
    sele (e) {
      let d = new Date(e)
      this.nowTimeData = this.timeDate = d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate()
    },
    btnStatus () {
      this.arrows = this.calendar = !this.arrows
    },
    closePages () {
      window.close()
      window.opener = null
    }
  },
  mounted () {
    console.log(this.$route.query.userId)
  }
}
</script>

<style lang="scss">
  @import '@/styles/main';

</style>

<style scoped lang="scss">
  #trip-particulars {
    padding: 0 32px;
    .warpper{
      position: relative;
      padding: 0 40px;
      min-height: calc(100vh - 80px);
      .header{
        display: flex;
        justify-content: space-between;
        line-height: 38px;
        padding-bottom: 36px;
        border-bottom: 1px solid #364053;
        div:nth-child(1){
          font-size: 36px;
          flex: 1
        }
        div:nth-child(2){
          font-size: 28px;
          display: flex;
          .dropdown{
          padding-left: 20px;
          width:50px;
          height:100%;
          }
        }
      }
      .date {
        margin-top: 20px;
        width:100%;
        color: #fff

      }
      .particulars{
        margin-top: 20px;
        line-height: 70px;
        color: #989ba3;
        font-size: 24px;
        div:nth-child(2){
          min-height: 50px;
          width: 100%;
          img {
            height: 100%;
            width: 100%;
            border-radius: 16px;
          }
        }
      }
      .btn {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 120px;
        width: 100%;
        background: #2e384c;
        z-index: 9;
        text-align: center;
        span {
          display: inline-block;
          height:72px;
          line-height:72px;
          width:406px;
          background: #ecbc84;
          border-radius: 36px;
          margin-top:24px;
          color: #0c0402;
          font-size: 32px;
        }
      }
    }

  }
/deep/.vdp-datepicker__calendar{
  background: #364053;
  font-size: 28px;
  width: 100%;
  height:100%;
  border: 0;
  border-radius: 16px;
  padding:20px 0;
  header {
    .next:not(.disabled):hover {
      background: #364053;
    }
    .prev:not(.disabled):hover {
      background: #364053
    }
  }
  //上部左箭头
  .prev:after {
    border-right: 12px solid #5e6675;
  }
  // 上部右箭头
  .next:after {
    border-left: 12px solid #5e6675;
  }
  // 点击时的border
  .cell{
    height:90px;
    line-height: 90px;
  }
  .cell.selected {
    background: #ecbc84;
    color: #000;
    border-radius: 50%;
    border: 0;
    &.day:hover {
      background: #ecbc84;
    }
  }
  //取消点击后的border
  .cell:not(.blank):not(.disabled).day:hover {
    border: 0
  }
  // 高亮的变化
  .disabled {
    color: #6f7580
  }
}
</style>
