<template lang="pug">
  div#app
    pages-header(:title="title", :textIcon="textIcon", @open="openShare", @goBack="colsePage")
    warpper.warpper(:class="{'warpper-height': isweb}")
      div.user-content
        information(:information="information")
        type-info(:typeInfo="typeInfo", :information="information", :spouseCriterionResult="spouseCriterionResult")
      bottom-bar.bottom-bar(:information="information")
</template>
<script>
import PagesHeader from '@/components/pages-header'
import Warpper from '@/components/warpper'
import Information from './components/information'
import BottomBar from './components/bottom-bar'
import TypeInfo from './components/type-info'
import { baseUrl } from '@/config/domains'
import whichPlatform from '@/modules/which-platform'

export default {
  name: 'personal-homepage',
  components: {
    PagesHeader,
    Warpper,
    Information,
    BottomBar,
    TypeInfo
  },
  computed: {
    textIcon () {
      let skin = this.$skin.name
      let stakData = {
        scp_famaleTheme: require('./image/ic_common_share_top_1woman.png'),
        scp_maleTheme: require('./image/ic_common_share_top_1@2x.png')
      }
      if (skin) return stakData[skin]
      return stakData.scp_famaleTheme
    }
  },
  data () {
    return {
      isweb: false,
      title: '个人主页',
      information: {
        profilePhotoid: '', // 图片url
        isGpsOpen: '', // GPS是否开启
        nickName: '', // 昵称,
        charm: '', // 挚爱值
        charmNextValue: '', // 下一挚爱等级的值
        charmTitle: '', // 挚爱称号
        uuid: '', // 用户id
        gpsCity: '', // 当前位置
        userLevel: '', // 用户等级
        praise: '', // 好评度
        charmLevel: '', // 用户等级
        userAge: '', // 年龄
        userSex: '男', // 性别
        userBirthday: '', // 生日
        chZodiac: '', // 生肖
        userZodiac: '', // 星座
        userBlood: '', // 血型
        userHeight: '', // 身高
        userWeight: '', // 体重
        userShape: '', // 重量级
        profession: '', // 职业
        userMonthIncome: '', // 月收入
        userEducation: '', // 学历
        liveCity: '', // 常驻城市
        businessTrip: '', // 是否出差
        social: '', // 是否应酬
        smokingOrNot: '', // 是否抽烟
        dringkingOrNot: '', // 是否饮酒
        workRest: '', // 作息状态
        dietaryHabit: '', // 饮食状态
        userAllergen: '', // 过敏原
        buyHouseState: '', // 居住状况
        buyCarState: '', // 出行方式
        maleFeminist: '', // 个性标签
        userMarriage: '', // 婚姻状态
        marriageOrNot: '', // 婚恋目的
        childOrNot: '', // 是否想要小孩
        hasChild: '', // 有无子女
        childNum: '', // 子女个数
        childState: '', // 子女状态
        pet: '', // 饲养宠物
        hasTogether: '', // 子女是否在一起
        neteaseAccid: '',
        onLine: '' // 是否在线
      },
      typeInfo: {
        soliloquy: '', // 内心独白
        advantage: '', // 我的优势
        userSkill: '', // 个人才艺
        idCardPass: '', // 实名认证，人脸识别一块使用
        isVip: '', // 是否会员
        userHobby: '', // 爱好
        natureType: '' // 性格
      },
      // 择偶条件
      spouseCriterionResult: {
        liveCity: '', // 常驻城市
        userEducation: '', // 教育程度
        userAge: '', // 年龄
        userHeight: '', // 身高
        chZodiac: '', // 生肖
        userZodiac: '', // 星座
        userBlood: '', // 血型
        natureType: '', // 性格类型
        userMarriage: '', // 婚姻状况
        pet: '', // 饲养宠物
        userShape: '', // 重量级
        profession: '', // 职业
        userMonthIncome: '', // 月收入
        businessTrip: '', // 是否出差
        social: '', // 是否应酬
        smokingOrNot: '', // 是否抽烟
        dringkingOrNot: '', // 是否饮酒
        workRest: '', // 作息状态
        dietaryHabit: '', // 饮食状态
        buyHouseState: '', // 居住状况
        buyCarState: '', // 出行方式
        marriageOrNot: '', // 婚恋目的
        childOrNot: '', // 是否想要小孩
        hasChild: '', // 有无子女
        hasPhoto: '' // 有无照片
      },
      isShow: false,
      query: this.$qs.parse(window.location.search, { ignoreQueryPrefix: true })
    }
  },
  methods: {
    openShare () {
      this.$bridge.share({
        urlType: '1',
        otherUid: this.query.otherUid,
        url: `${baseUrl}/app-pages/personal-homepage.html`,
        userImage: this.information.profilePhotoidURL,
        userName: this.information.nickName
      })
    },
    colsePage () {
      this.$bridge.close()
    },
    getUserInfo () {
      this.$axios({
        method: 'post',
        url: '/user/info/getBasicUserInfo',
        data: {
          uuid: this.query.otherUid,
          liveVideo: '1'
        }
      }).then(res => {
        let data = res
        if (data.rsCode === '200') {
          this.information.profilePhotoidURL = data.rsObject.userInfoCardResult.profilePhotoidURL
          this.information.isGpsOpen = data.rsObject.userInfoCardResult.isGpsOpen
          this.information.nickName = data.rsObject.userInfoCardResult.nickName
          this.information.userSex = data.rsObject.userInfoCardResult.userSex
          this.information.userZodiac = data.rsObject.baseInfoResult.userZodiac
          this.information.charm = data.rsObject.userInfoCardResult.charmZh
          this.information.charmNextValue = data.rsObject.userInfoCardResult.charmNextValueZh
          this.information.charmTitle = data.rsObject.userInfoCardResult.charmTitle
          this.information.uuid = data.rsObject.baseInfoResult.uuid
          this.information.gpsCity = data.rsObject.userInfoCardResult.gpsCity
          this.information.userLevel = data.rsObject.userInfoCardResult.userLevel
          this.information.praise = data.rsObject.userInfoCardResult.praise
          this.information.liveCity = data.rsObject.userInfoCardResult.liveCity
          this.information.charmLevel = data.rsObject.userInfoCardResult.charmLevel
          this.information.userMarriage = data.rsObject.baseInfoResult.userMarriage
          this.information.profession = data.rsObject.baseInfoResult.profession
          this.information.userAge = data.rsObject.baseInfoResult.userAge
          this.information.userEducation = data.rsObject.baseInfoResult.userEducation
          this.information.userMonthIncome = data.rsObject.baseInfoResult.userMonthIncome
          this.information.userWeight = data.rsObject.baseInfoResult.userWeight
          this.information.userHeight = data.rsObject.baseInfoResult.userHeight
          this.information.hasTogether = data.rsObject.baseInfoResult.hasTogether
          this.information.userBirthday = data.rsObject.baseInfoResult.userBirthday
          this.information.chZodiac = data.rsObject.baseInfoResult.chZodiac
          this.information.userBlood = data.rsObject.baseInfoResult.userBlood
          this.information.userShape = data.rsObject.baseInfoResult.userShape
          this.information.businessTrip = data.rsObject.baseInfoResult.businessTrip
          this.information.social = data.rsObject.baseInfoResult.social
          this.information.smokingOrNot = data.rsObject.baseInfoResult.smokingOrNot
          this.information.dringkingOrNot = data.rsObject.baseInfoResult.dringkingOrNot
          this.information.workRest = data.rsObject.baseInfoResult.workRest
          this.information.dietaryHabit = data.rsObject.baseInfoResult.dietaryHabit
          this.information.userAllergen = data.rsObject.baseInfoResult.userAllergen
          this.information.buyHouseState = data.rsObject.baseInfoResult.buyHouseState
          this.information.buyCarState = data.rsObject.baseInfoResult.buyCarState
          this.information.maleFeminist = data.rsObject.baseInfoResult.maleFeminist
          this.information.marriageOrNot = data.rsObject.baseInfoResult.marriageOrNot
          this.information.childOrNot = data.rsObject.baseInfoResult.childOrNot
          this.information.hasChild = data.rsObject.baseInfoResult.hasChild
          this.information.childNum = data.rsObject.baseInfoResult.childNum
          this.information.neteaseAccid = data.rsObject.userInfoCardResult.neteaseAccid
          this.information.onLine = data.rsObject.userInfoCardResult.onLine

          this.typeInfo.userHobby = data.rsObject.baseInfoResult.userHobby ? JSON.parse(data.rsObject.baseInfoResult.userHobby) : ''
          this.typeInfo.advantage = data.rsObject.baseInfoResult.advantage
          this.typeInfo.soliloquy = data.rsObject.baseInfoResult.soliloquy
          this.typeInfo.userSkill = data.rsObject.baseInfoResult.userSkill
          this.typeInfo.idCardPass = data.rsObject.idCardPass
          this.typeInfo.isVip = data.rsObject.userInfoCardResult.isVip
          this.typeInfo.natureType = data.rsObject.baseInfoResult.natureType

          this.spouseCriterionResult.liveCity = data.rsObject.spouseCriterionResult.liveCity
          this.spouseCriterionResult.userEducation = data.rsObject.spouseCriterionResult.userEducation
          this.spouseCriterionResult.userAge = data.rsObject.spouseCriterionResult.userAge
          this.spouseCriterionResult.userHeight = data.rsObject.spouseCriterionResult.userHeight
          this.spouseCriterionResult.chZodiac = data.rsObject.spouseCriterionResult.chZodiac
          this.spouseCriterionResult.userZodiac = data.rsObject.spouseCriterionResult.userZodiac
          this.spouseCriterionResult.userBlood = data.rsObject.spouseCriterionResult.userBlood
          this.spouseCriterionResult.natureType = data.rsObject.spouseCriterionResult.natureType
          this.spouseCriterionResult.userMarriage = data.rsObject.spouseCriterionResult.userMarriage
          this.spouseCriterionResult.pet = data.rsObject.spouseCriterionResult.pet
          this.spouseCriterionResult.userShape = data.rsObject.spouseCriterionResult.userShape
          this.spouseCriterionResult.profession = data.rsObject.spouseCriterionResult.profession
          this.spouseCriterionResult.userMonthIncome = data.rsObject.spouseCriterionResult.userMonthIncome
          this.spouseCriterionResult.businessTrip = data.rsObject.spouseCriterionResult.businessTrip
          this.spouseCriterionResult.social = data.rsObject.spouseCriterionResult.social
          this.spouseCriterionResult.smokingOrNot = data.rsObject.spouseCriterionResult.smokingOrNot
          this.spouseCriterionResult.dringkingOrNot = data.rsObject.spouseCriterionResult.dringkingOrNot
          this.spouseCriterionResult.workRest = data.rsObject.spouseCriterionResult.workRest
          this.spouseCriterionResult.dietaryHabit = data.rsObject.spouseCriterionResult.dietaryHabit
          this.spouseCriterionResult.buyHouseState = data.rsObject.spouseCriterionResult.buyHouseState
          this.spouseCriterionResult.buyCarState = data.rsObject.spouseCriterionResult.buyCarState
          this.spouseCriterionResult.marriageOrNot = data.rsObject.spouseCriterionResult.marriageOrNot
          this.spouseCriterionResult.childOrNot = data.rsObject.spouseCriterionResult.childOrNot
          this.spouseCriterionResult.hasChild = data.rsObject.spouseCriterionResult.hasChild
          this.spouseCriterionResult.hasPhoto = data.rsObject.spouseCriterionResult.hasPhoto
        }
      })
    }
  },
  created () {
    this.getUserInfo()
    // 小程序个人主页不需要header，wapper需要
    if (whichPlatform() === 'web') {
      this.isweb = true
    }
  }
}
</script>
<style lang="scss">
  @import '@/styles/main';
</style>
<style lang="scss" scoped>

.warpper{
  height: calc(100vh - 200px);
  background: rgba(255, 255, 255, 0.9);
  color: #101727;
  overflow: hidden;
  font-size: 24px;
  margin: 0 26px 20px;
  border-radius: 20px;
  position: relative;

  .user-content{
    height: calc(100vh - 150px);
    overflow: auto;
  }
  .bottom-bar{
    position: absolute;;
    left:0;
    bottom: 0;
    box-shadow: 0px -8px 20px 0px rgba(16, 23, 39, 0.1)
  }
}
  .warpper-height{
    height: calc(100vh - 50px);
  }
</style>
