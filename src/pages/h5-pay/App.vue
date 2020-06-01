<template lang="pug">
  div#app
    warpper.warpper
      radio-group(v-model="radio")
        cell-group
          cell(title="微信支付", :icon="weChatPay", clickable, @click="radio = '1'")
            radio(name="1", slot="right-icon")
          cell(title="支付宝", :icon="aliPay", clickable, @click="radio = '2'")
            radio(name="2", slot="right-icon")
          //- cell(title="苹果支付", :icon="iphonePay", clickable, @click="radio = '3'")
          //-   radio(name="3", slot="right-icon")
          //- cell(title="礼品卷支付", :icon="giftsPay", clickable, @click="radio = '4'")
          //-   radio(name="4", slot="right-icon")
      div.btn(@click="pay") 立即支付
</template>
<script>
import { RadioGroup, Radio, CellGroup, Cell, Toast } from 'vant'
import Warpper from '@/components/warpper'
import Axios from 'axios'
export default {
  name: 'h5-pay',
  components: {
    RadioGroup,
    Radio,
    CellGroup,
    Cell,
    Toast,
    Warpper
  },
  data () {
    return {
      radio: '1',
      weChatPay: require('./images/ic_common_payment_wechat@2x.png'),
      aliPay: require('./images/ic_common_payment_alipay@2x.png'),
      iphonePay: require('./images/ic_common_payment_apple@2x.png'),
      giftsPay: require('./images/ic_common_payment_devotion_value@2x.png'),
      show: false,
      payData: {
        orderContent: {},
        orderType: '',
        totalFee: '',
        payScenario: '',
        activityId: '-1'
      }
    }
  },
  methods: {
    info () {
      return new Promise((resolve, reject) => {
        this.$bridge.pay({
          callback: (data) => {
            this.payData.orderContent = data.orderContent
            this.payData.totalFee = data.totalFee
            this.payData.payScenario = data.payScenario
            this.payData.activityId = data.activityId
            this.show = true
            resolve()
          }
        })
      })
    },
    // 支付页面进入
    pay () {
      // 加载提示
      Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true
      })
      setTimeout(() => {
        Toast.clear()
      }, 3000)
      this.payData.orderType = this.radio
      // 微信支付
      if (this.radio === '1') {
        Axios({
          url: '/pay/h5pay/startBussinessPay',
          method: 'post',
          data: this.payData
        }).then(res => {
          if (res.rsCode === '200') {
            window.location.href = res.rsObject.result
          } else {
            Toast(res.rsmsg)
          }
          Toast.clear()
        }).catch(err => {
          Toast.clear()
          console.log(err)
        })
      } else if (this.radio === '2') {
        // 支付宝支付
        Axios({
          url: '/pay/h5pay/startBussinessPay',
          data: this.payData,
          method: 'post'
        }).then(res => {
          if (res.rsCode === '200') {
            const div = document.createElement('div')
            /* 此处form就是后台返回接收到的数据 */
            div.innerHTML = res.rsObject.result
            document.body.appendChild(div)
            document.forms[0].submit()
          } else {
            Toast(res.rsmsg)
          }
          Toast.clear()
        }).catch(err => {
          Toast.clear()
          console.log(err)
        })
      }
    }

  },
  mounted () {
    this.info()
  }
}
</script>
<style lang="scss">
  @import '@/styles/main';
</style>
<style lang="scss" scoped>
.warpper {
  margin: 20px 26px;
  min-height: calc(100vh - 80px);
  background: #fff;
  border-radius: 22px;
  overflow-y: auto;

}
.btn{
  line-height: 70px;
  width: 350px;
  text-align: center;
  background: linear-gradient(to bottom, #fed094 0%, #daa873 100%);
  border-radius: 15px;
  margin: 100px auto;
}

</style>
