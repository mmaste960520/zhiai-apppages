<template lang="pug">
  div.fill-information
    pages-header(title="填写信息", @goBack="goLastPage")
    div.fill-information-box
      div.input-name
        div.icon
        div.input-uername
          input.input(placeholder="请输入您的真实姓名", v-model="name", maxlength="20", @blur="nameRegFun")
          div.bottom-line
      div.input-name.input-idcard
        div.icon
        div.input-uername.input-idcard
          input.input(placeholder="请输入身份证号码",v-model="idCard", @blur="idCardFun", maxlength="18")
          div.bottom-line
      div.input-name.input-phone
        div.icon
        div.input-uername.input-phone
          input.input(placeholder="请输入手机号", type="text", v-model="phone",@blur="phoneReg", maxlength="13")
          div.bottom-line
      div.leave-message
        textarea(style="resize:none", :maxlength="maxlength", v-model="desc", placeholder="备注")
        div.tip-words
          span#leave-message-num.last {{desc.length}}
          span.total /{{maxlength}}
      div.attention-tip
        div.dist
        div.words 请按时到达目的地，如有特殊情况请及时与导游联系
      pages-button.submit-button(content='确定提交', status='0', @click.native="userInfoSubmit")
</template>
<script>
import PagesButton from '../component/pages-button'
import PagesHeader from '@/components/pages-header'
import axios from 'axios'
import { Toast, Dialog } from 'vant'
export default {
  components: {
    PagesButton,
    PagesHeader
  },
  data () {
    return {
      textVal: 0,
      desc: '',
      maxlength: 150,
      phone: '',
      phoneRule: /^1[3456789]\d{9}$/,
      idCard: '',
      idCardReg: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
      name: '',
      nameReg: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
    }
  },
  watch: {
    phone (n, o) {
      this.phone = n.replace(/(^\d{3})(?=\d)/g, '$1 ').replace(/(\d{4})(?=\d)/g, '$1 ')
    }
  },
  methods: {
    goLastPage () {
      window.location.href = '-1'
    },
    phoneReg () {
      if (!this.phoneRule.test(this.phone.replace(/\s+/g, ''))) {
        Toast('请输入正确手机号')
      }
    },
    idCardFun () {
      if (!this.idCardReg.test(this.idCard)) {
        Toast('请输入正确身份证号')
      }
    },
    nameRegFun () {
      if (!this.nameReg.test(this.name)) {
        Toast('请输入正确姓名')
      }
    },
    // 用户信息提交
    userInfoSubmit () {
      if (this.phone === '' || this.name === '' || this.idCard === '') {
        Toast('请完善您的个人信息')
      }
      if (this.phone !== '' && this.name !== '' && this.idCard !== '') {
        console.log(this.phone, this.idCard, this.name, this.desc)
        axios.post('/activity/activity/getBanner/checkUserApplyInfo', {
          cardId: this.idCard,
          cardName: this.name,
          // 活动id
          id: Number(this.$route.params.activeId),
          phone: this.phone.replace(/\s+/g, '')
          // uuid: '45474146'
        }).then((response) => {
          if (response.rsCode === '200') {
            // Toast('报名成功，请前往我的活动查看详情')
            // 支付提示
            Dialog.confirm({
              message: '是否使用实物券抵扣？',
              confirmButtonColor: '#181b22',
              cancelButtonColor: '#181b22',
              cancelButtonText: '否',
              confirmButtonText: '是'
            }).then(() => {
              // on confirm
              this.payMethodSelect()
            }).catch(() => {
              // 调用端上支付
              Toast('调用端上支付方式')
            })
          }
        })
      }
    },
    // 支付方式选择
    payMethodSelect () {
      axios.post('/activity/activity/getBanner/userJoinActivity', {
        // 活动id
        activityId: this.$route.params.activeId,
        // uuid: '45474146',
        // 支付方式 支付类型0实物券，1微信，2支付宝
        payType: '0'
      }).then((response) => {
        if (response.rsCode === '200') {
          Toast(response.rsMsg)
        }
        if (response.rsCode !== '200') {
          Toast(response.rsMsg)
        }
      })
    }
  }
}
</script>
<style lang="scss">
  .fill-information {
    .fill-information-box {
      min-height: 94vh;
      padding: 50px 46px;
      background: #f7f7f8;
      box-sizing: border-box;
      border-radius: 20px;
      margin: 10px 24px 0;
      .input-name {
        display: flex;
        margin-bottom: 44px;
        .icon {
          width: 50px;
          height: 50px;
          // margin-right: 28px;
          background-image: url('../images/ic_me_personal_style_4@2x.png');
          background-size: cover;
        }
        .input-uername {
          width: 550px;
          .input {
            color: rgb(24,27,34);
            font-size: 32px;
            display: inline-block;
            width: 550px;
            caret-color:#deb175;
            border: none;
            outline:none;
            margin-bottom: 38px;
            background: #f7f7f8;
            padding-left: 8px;
          }
          .bottom-line {
            border-bottom: 1px solid #e4e6e9;
          }
        }
      }
      .input-idcard {
        .icon {
          background-image: url('../images/ic_me_identity_style_4@2x.png');
          background-size: cover;
        }
      }
      .input-phone {
        .icon {
          background-image: url('../images/ic_me_telephone_style_4@2x.png');
          background-size: cover;
        }
      }
      .leave-message {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
          textarea {
            background: #ebecee;
            color: #86878a;
            border: #364053;
            outline: none;
            border-radius: 12px;
            width: 606px;
            height: 230px;
            font-size: 32px;
            padding: 28px 18px;
          }
          .tip-words {
            position: absolute;
            right: 38px;
            bottom: 18px;
              .last,
              .total {
                color: #9b9ea5;
              }
          }
      }
      .attention-tip {
        display: flex;
        align-items: center;
        margin-top: 80px;
        margin-left: 4px;
        .dist {
          width: 10px;
          height: 10px;
          margin-right: 18px;
          border-radius: 50%;
          background: #9d9ea2;
        }
        .words {
          color: #5e5f63;
          font-size: 24px;
        }
      }
      .submit-button {
        margin: 0 auto;
        margin-top: 290px;
      }
    }
  }
</style>
