<template lang="pug">
  div#mutual-attention
    div.user-card-list
      div.empty(v-show="!userListInfo.length")
        p 关注列表为空
      user-card-info(@click.native="toast(item.userInfo.nickName, item.userInfo.uuid)",
        v-for="(item,index) in userListInfo",
        :key="index",
        :userName="item.userInfo.nickName",
        :age="item.userInfo.userAge",
        :userLevel="Number(item.userInfo.userLevel)",
        :gpsCity="item.userInfo.gpsCity",
        :location="item.userInfo.liveCity",
        :education="item.userInfo.userEducation",
        :userHeaderImgUrl="item.userInfo.profilePhotoidURL"
      )
</template>
<script>
import axios from 'axios'
import UserCardInfo from '@/components/user-card-info/index'
import { Dialog } from 'vant'
export default {
  name: 'mutual-attention',
  components: {
    UserCardInfo
  },
  data () {
    return {
      userListInfo: [],
      currentPageIndex: 1,
      userHeaderImgUrl: '',
      uuid: ''
    }
  },
  methods: {
    toInvitePerson (params) {
      this.$router.push({ name: 'love-binding', params: { userId: params } })
      // this.$router.push({ name: 'love-binding' })
    },
    beforeClose (action, done) {
      if (action === 'confirm') {
        setTimeout(done, 1000)
      } else {
        done()
      }
    },
    toast (uName, uuid) {
      Dialog.confirm({
        title: `确定要发送给"${uName}"吗？`,
        confirmButtonText: '是',
        cancelButtonText: '否',
        cancelButtonColor: '#deb175',
        confirmButtonColor: '#deb175'
      }).then(() => {
        // on confirm
        this.toInvitePerson(uuid)
      }).catch(() => {
        // on cancel
      })
    }
  },
  created () {
    axios.post('/user/action/getActionUserList', {
      action: 2,
      index: this.currentPageIndex,
      pageSize: 10,
      toMe: 2,
      value: 2
    }).then((response) => {
      console.log(response)
      if (response.rsCode === '200') {
        this.userListInfo = response.rsObject.userList
      }
    })
  }
}
</script>
<style lang="scss">
  #mutual-attention {
    min-height: 94vh;
    box-sizing: border-box;
    .user-card-list {
      min-height: 94vh;
      box-sizing: border-box;
      padding: 40px 17px 0 33px;
      border-radius: 12px;
      background: #f8f8f9;
      .van-dialog {
        background: red;
      }
    }
  }
  .empty {
    text-align: center;
    color: #CCC;
  }
</style>
