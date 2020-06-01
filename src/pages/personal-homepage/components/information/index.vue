 <template lang="pug">
  div.info
    div.header
      img(:src="headerImg")
    div.hot
      div
        div {{information.praise}}
        div
          img(src="../../image/hot.png")
          span 好评度
      div
        div
          img(:src="information.profilePhotoidURL")
        div.icon(v-if="information.onLine === '1'")
      div(:class="!attentionStatus ? 'attention' : '' ")
        span(v-if="attentionStatus") 已关注
        span(v-else, @click="followTure") + 关注
    div.basic
      div
        span {{information.nickName}}
        userLevel.userLevel(:userLevel="information.userLevel")
        gps.gps(:gpsCity="information.gpsCity", :isGpsOpen="information.isGpsOpen")
      div
        span {{information.liveCity}}
        span {{information.userEducation}}
        span(v-if="information.userAge !=='' && information.userAge !== '-1'") {{information.userAge}}岁
      level.level(:charm="information.charm", :charmNextValue="information.charmNextValue", :level="information.charmLevel")
    div.picture
      div.img-box(v-for="(item,index) in pictureList", :key="index", @click="openAlbum(index)")
        img(:src="item.presignedUrl")
      div.img-box(v-if="totalCount>5")
        img(src="../../image/ic_me_album_added_More@2x.png" ,@click="openAlbum(5)")
    p.code ID:{{information.uuid}}
    div.online(@click="openOnline", v-if="onLine")
      img(:src="onlineImg")
      div
        span 她正在直播
        img(src="../../image/broadcast_bg_dak@3x.png")
      div
        span 点击前往观看
        img(src="../../image/broadcast_bg_jiantyd@2x.png")
</template>
<script>
import { Toast } from 'vant'
import gps from './components/gps'
import userLevel from './components/userLevel'
import Level from './components/level'
export default {
  name: 'index',
  props: {
    information: {}
  },
  components: {
    gps,
    userLevel,
    Level
  },
  computed: {
    headerImg () {
      if (this.information.userSex === '男') {
        return require('../../image/man-header.png')
      } else {
        return require('../../image/woman-header.png')
      }
    },
    onlineImg () {
      if (this.information.userSex === '男') {
        return require('../../image/man-online.png')
      } else {
        return require('../../image/woman-online.png')
      }
    }
  },
  data () {
    return {
      attentionStatus: true, // false 未关注， ture 关注
      pictureList: [],
      query: this.$qs.parse(window.location.search, { ignoreQueryPrefix: true }),
      onLine: false,
      liveRoomId: '',
      images: [],
      yunxinRoomId: '',
      totalCount: 0
    }
  },
  methods: {
    async openOnline () {
      let yunxinRoomId = await this.getYunxinRoomId()
      this.$bridge.streaming({
        uid: this.query.otherUid,
        liveRoomId: this.liveRoomId,
        yunxinRoomId
      })
    },
    getYunxinRoomId () {
      return new Promise((resolve) => {
        let data = {
          liveRoomId: this.liveRoomId
        }
        this.$axios({ url: '/live/netease/joinLiveRoom',
          method: 'POST',
          data
        }).then(res => {
          if (res.rsCode === '200') {
            resolve(res.rsObject.yunxinRoomId)
          } else {
            return Toast(res.rsMsg)
          }
        }).catch(err => {
          console.log(err)
          return Toast('服务器累了，休息一会吧')
        })
      })
    },
    // 获取主播是否开播
    getOnlineIn () {
      let data = {
        uuid: this.query.otherUid
      }
      this.$axios({ url: '/live/room/enterAnchorLiveRoomCheck',
        method: 'POST',
        data
      }).then(res => {
        if (res.rsCode === '200') {
          if (res.rsObject.liveRoomId) {
            this.liveRoomId = res.rsObject.liveRoomId
            this.onLine = true
          }
        } else {
          this.onLine = false
        }
      }).catch(err => {
        this.onLine = false
        console.log(err)
      })
    },
    followTure () {
      let data = {
        action: 2,
        direction: 1,
        sceneType: 2,
        value: 1,
        toUuid: this.query.otherUid
      }
      this.$axios({ url: '/user/action/actionToUser',
        method: 'POST',
        data
      }).then(res => {
        if (res.rsCode === '200') {
          this.attentionStatus = true
          Toast('关注成功')
        } else {
          Toast(res.rsMsg)
        }
      }).catch(err => {
        Toast('关注失败')
        console.log(err)
      })
    },
    openAlbum (index) {
      this.$bridge.openAlbum({
        uid: this.query.otherUid,
        index,
        images: this.images
      })
    },
    getPictureImg () {
      this.$axios({
        method: 'post',
        url: '/album/photo/getTopNPhotos',
        data: {
          uuid: this.query.otherUid,
          limit: 5
        }
      }).then(res => {
        let data = res
        if (data.rsCode === '200') {
          this.totalCount = data.rsObject.totalCount
          this.pictureList = data.rsObject.dataList.filter(item => {
            if (item.presignedUrl) {
              return item.presignedUrl
            }
          })
          this.images = data.rsObject.dataList.filter(item => {
            if (item.photoURL) {
              return item.photoURL
            }
          })
        }
      })
    },
    // 获取对方是否关注了自己
    attentionToMe () {
      this.$axios({
        url: '/user/action/getActionInfo',
        method: 'POST',
        data: {
          fromUuid: this.query.myUid,
          toUuid: this.query.otherUid
        }
      }).then(res => {
        if (res.rsCode === '200') {
          if (res.rsObject && (res.rsObject.attention !== '0')) {
            this.attentionStatus = true
          } else {
            this.attentionStatus = false
          }
        }
      }).catch(err => {
        console.log(err)
        return Toast(err.data.rsMsg)
      })
    }

  },
  created () {
    this.getPictureImg()
    this.attentionToMe()
    this.getOnlineIn()
  }
}
</script>
<style lang="scss">
  @import '@/styles/main';
</style>
<style lang="scss" scoped>
  .info{
    .header{
      width:100%;
      height:91px;
      img{
        height: 100%;
        width: 100%;
      }
    }
    .hot{
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 26px 36px;
      &>div:nth-child(1) {
        div:nth-child(1) {
          font-size: 30px;
          line-height: 42px;
          color: #101727
        }
        div:nth-child(2) {
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 42px;
          letter-spacing: 0px;
          color: rgba(10, 17, 27, 0.46);
          img {
            height: 30px;
            width: 26px;
            box-shadow: 0 0 0;
            vertical-align: middle;
            padding-right: 8px;
          }
        }
      }
      &>div:nth-child(2) {
        position: relative;
        div{
          height: 161px;
          width: 161px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            object-fit: cover;
            box-shadow: 0px 2px 20px rgba(16, 23, 39, 0.4);
          }
        }
        .icon{
          width: 99px;
          height: 28px;
          border-radius: 0;
          background: url('./grzl_icon_dqzx@2x.png') no-repeat;
          background-size: cover;
          position: absolute;
          right: -15px;
          bottom: 0;
          z-index: 1;
        }
      }
      &>div:nth-child(3) {
        width: 140px;
        line-height: 48px;
        font-size: 24px;
        color: #101727;
        text-align: center;
        background-color: rgba(10, 17, 27, 0.06);
        border-radius: 24px;
      }
    }
    .basic{
      text-align: center;
      &>div{
        margin-bottom: 20px;
      }
      div:nth-child(1){
        font-size: 36px;
        font-weight: 600;
        color: #101727;
        .userLevel{
          display: inline-block;
        }
        .gps{
          display: inline-block;
        }
      }
      &>div:nth-child(2){
        font-size: 22px;
        line-height: 32px;
        color: #101727;
        opacity: 0.8;
        span {
          display: inline-block;
          background-color: rgba(10, 17, 27, 0.04);
          border-radius: 8px;
          padding:5px 10px;
          margin-left: 10px;
        }
      }
      .level{
        margin-bottom: 32px;
      }
    }
    .picture{
      display: flex;
      justify-content: flex-start;
      margin: 26px 26px;
      padding: 20px;
      background-color: rgba(10, 17, 27, 0.02);
      .img-box{
        margin-right: 20px;
        img{
          vertical-align: middle;
          height: 86px;
          width: 86px;
          object-fit: cover;
          border-radius: 12px;
        }
      }
    }
    .code{
      font-size: 24px;
      margin: 0 26px;
      text-align: right;
      padding: 22px 0 45px 0;
      color: rgba(10, 17, 27, 0.6);
    }
    .online{
      height: 112px;
      padding: 0 26px;
      color: #fff;
      border-radius: 20px;
      position: relative;
      img{
        height: 100%;
        width:100%;
      }
      div:nth-child(2){
        position: absolute;
        left: 64px;
        top: 40px;
        img{
          width: 26px;
          vertical-align: middle;
          height: 20px;
          margin-left: 10px;
        }
      }
      div:nth-child(3){
        display: inline-block;
        position: absolute;
        right: 64px;
        top: 40px;
        img{
          width: 26px;
          height: 26px;
          vertical-align: middle;
          margin-left: 5px;
        }
      }
    }
  }
  .attention {
    width: 140px;
    line-height: 48px;
    background-image: linear-gradient(0deg,
    #daa873 0%,
    #fed094 100%);
    border-radius: 24px;
    color: #4f2f0c;
  }
</style>
