<template lang="pug">
  div#info-from
    warpper.warpper
      div
        p
          img(src='./image/phone.png')
        input(placeholder="请输入您的手机号", v-model="fromData.phone")
      div
        p
          img(src='./image/security.png')
        input(placeholder="请输入您收到的验证码", v-model="fromData.security")
        span(v-show="show", @click="securityCode") 获取验证码
        span(v-show="!show") {{count}} s
      div
        p
          img(src='./image/userName.png')
        input(placeholder="请输入您的真实姓名", v-model="fromData.userName")
      div
        p
          img(src='./image/idCard.png')
        input(placeholder="请输入您的身份证号", v-model="fromData.idCard")
      div
        p
          img(src='./image/passPort.png')
        input(placeholder="请输入您的护照", v-model="fromData.passPort")
      div.textarea
        textarea(placeholder="备注", resize="none", @input="descInput", maxlength="300", rows="5", v-model="fromData.desc")
        span {{remnant}}/300
      div.btn
        button(@click="saveFromData", :disabled="disabled") 提交
</template>

<script>
import Warpper from '@/components/warpper'

export default {
  name: 'info-form',
  components: { Warpper },
  data () {
    return {
      disabled: false,
      remnant: 0,
      desc: '',
      phoneRule: /^1[3456789]\d{9}$/, // 电话正则
      userNameRule: /^[\u4E00-\u9FA5]{2,4}$/, // 中文验证
      idCardRule: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, // 身份证验证
      passPortRule: /^1[45][0-9]{7}$|([P|p|S|s]\d{7}$)|([S|s|G|g]\d{8}$)|([Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\d{8}$)|([H|h|M|m]\d{8,10})$/, // 护照验证
      fromData: {
        phone: '',
        security: '',
        userName: '',
        idCard: '',
        passPort: '',
        desc: ''
      },
      show: true, // 发起请求按钮的状态
      count: '', // 倒计时时间
      timer: null // 计时器
    }
  },

  methods: {
    // 文本框中输入文字的数量
    descInput () {
      let txtVal = this.fromData.desc.length
      this.remnant = txtVal
    },

    // 获取手机验证码验证手机号
    securityCode () {
      if (!this.phoneRule.test(this.fromData.phone)) {
        return this.$toast('请输入正确的手机号码格式')
      }
      this.getCode()
    },

    // 获取验证码倒计时
    getCode () {
      const TIME_COUNT = 60
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    },

    // 提交表单个人信息
    saveFromData () {
      this.disabled = true
      if (this.disabled) {
        setTimeout(() => {
          this.disabled = false
        }, 2000)
      }

      // 手机号码验证
      if (!this.phoneRule.test(this.fromData.phone)) {
        return this.$toast('请输入正确的手机号码格式')
      }
      // 验证码验证
      if (!this.fromData.security) {
        return this.$toast('请输入验证码')
      }
      // 用户姓名验证
      if (!this.userNameRule.test(this.fromData.userName)) {
        return this.$toast('请输入中文名称')
      }
      // 手机号码验证
      if (!this.idCardRule.test(this.fromData.idCard)) {
        return this.$toast('请输入正确的身份证号码格式')
      }
      // 手机号码验证
      if (!this.passPortRule.test(this.fromData.passPort)) {
        return this.$toast('请输入正确的护照号码格式')
      }
      // 验证表单， 调取api发送请求
      this.$router.push('/TripList')
      /**
       * 表单添加要加入状态对于安卓以及ios要统一
       * tripStatus （1:表示邀请人，2表示被邀请人）
       * 单人游双人游需要区分 <待定>
       */
    }
  }
}
</script>

<style lang="scss">
  @import '@/styles/main';
</style>

<style scoped lang="scss">
#info-from{
  padding: 0 32px;
}
  .warpper {
    padding: 0 40px;
    min-height: calc(100vh - 80px);
    div {
      height: 120px;
      line-height: 120px;
      text-align: center;
      display: flex;
      justify-content: center;
      font-size: 32px;
      color: #9e9ba5;

      p {
        display: inline-block;
        margin: 0;
        width: 60px;

        img {
          margin-top: 40px;
          height: 40px;
          width: 38px;
        }
      }

      input {
        flex: 1;
        background: #2d384c;
        border: 0;
        border-bottom: 1px solid #364053;
        color: #e0e1e3;

        &:hover {
          outline: none;
        }
      }
    }
    div:nth-child(2) {
      position: relative;
      span {
        font-size: 20px;
        position: absolute;
        right: 0;
        top: 34px;
        width: 160px;
        height: 48px;
        line-height: 48px;
        color: #c2c4c9;
        border-radius: 41px;
        background: #434c5e;
        &:hover {
          outline: none;
        }
      }
    }
    .textarea{
      width: 100%;
      position: relative;
      height: 270px;

      textarea {
        width: 100%;
        margin-top: 40px;
        box-sizing: border-box;
        background: #364053;
        border: 0;
        border-radius: 20px;
        color: #e0e1e3;
        text-indent: 40px;

        &:hover {
          outline: none;

        }
      }
      span {
        position: absolute;
        right: 15px;
        bottom: -26px;
      }
    }
    .btn{
      margin-top: 120px;

      button {
        width: 406px;
        height: 72px;
        border-radius: 36px;
        box-shadow: 0 2px 29px 1px
        rgba(9, 14, 28, 0.6);
        background: #fed094;
        border: 0;

        &:hover {
          outline: none;

        }
      }
    }

  }
</style>
