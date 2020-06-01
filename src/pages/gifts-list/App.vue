<template lang="pug">
  div#app
    pages-header(:title="headerTitle", text="历史", @open="openHistory", @goBack="colsePages")
    warpper.warpper
      header.header
        div.image-text
          div.left
            img.img( v-if="flowers.image", :src="flowers.image")
          div.right
            div {{flowers.count}}
            div {{flowers.giftType}}
        div.image-text
          div.left
            img.img( v-if="applause.image", :src="applause.image")
          div.right
            div {{applause.count}}
            div {{applause.giftType}}
      div.title
        span {{title}}
      list.list(v-if="giftsList.length > 0", v-for="(item, index) in giftsList", :key="index", :item="item")
      not-data(v-if="giftsList.length <= 0")
</template>

<script>
import PagesHeader from '@/components/pages-header'
import Warpper from '@/components/warpper'
import List from './list'
import Qs from 'qs'
import Axios from 'axios'
import NotData from '@/components/not-data'
import { baseUrl } from '@/config/domains'
export default {
  name: 'giftsList',
  components: { NotData, Warpper, List, PagesHeader },
  data () {
    return {
      applause: {
        image: '',
        count: 0,
        giftType: ''
      },
      flowers: {
        image: '',
        count: 0,
        giftType: ''
      },
      giftsList: [],
      query: Qs.parse(window.location.search, { ignoreQueryPrefix: true }),
      pagesMap: {
        received: {
          title: '仅显示三十天内收到的数据',
          apiUrl: '/gift/gift/getMyRecvGifts',
          headerTitle: '收到的礼物'
        },
        send: {
          title: '仅显示三十天内发送的数据',
          apiUrl: '/gift/gift/getMySendGifts',
          headerTitle: '送出的礼物'
        }
      }
    }
  },
  computed: {
    title () {
      if (this.query.type) {
        return this.pagesMap[this.query.type].title
      }
      return ''
    },
    url () {
      if (this.query.type) {
        return this.pagesMap[this.query.type].apiUrl
      }
      return ''
    },
    headerTitle () {
      if (this.query.type) {
        return this.pagesMap[this.query.type].headerTitle
      }
      return ''
    }
  },
  methods: {
    getlist () {
      let data = {
        userId: this.query.uid
      }
      Axios({ url: this.url,
        method: 'POST',
        data
      }).then(res => {
        if (res.rsCode === '200') {
          let data = res.rsObject
          if (data.gifts && data.gifts.length > 0) {
            this.giftsList = data.gifts.map(item => {
              return {
                image: item.giftImageUrl,
                price: item.giftNum,
                name: item.giftName,
                title: item.sendUserName,
                state: item.followStatus,
                id: item.sendUserId,
                uid: this.query.uid
              }
            })
          }
          this.applause.giftType = data.applause.giftName
          this.applause.count = data.applause.giftNum
          this.applause.image = data.applause.giftImageUrl
          this.flowers.giftType = data.flowers.giftName
          this.flowers.count = data.flowers.giftNum
          this.flowers.image = data.flowers.giftImageUrl
        }
      }).catch(err => {
        console.log(err)
      })
    },
    openHistory () {
      window.location.href = `${baseUrl}/app-pages/gifts-history.html?uid=${this.query.uid}&type=${this.query.type}`
    },
    colsePages () {
      this.$bridge.close()
    }

  },
  mounted () {
    this.getlist()
  }
}
</script>
<style lang="scss">
  @import '@/styles/main';
</style>
<style scoped lang="scss">

.warpper {
  min-height: calc(100vh - 200px);
  padding: 0 40px;
  margin: 20px 26px;
  background: #fff;
  .header {
    padding: 55px 0;
    height: 120px;
    display: flex;
    .image-text {
      width: 50%;
      overflow: hidden;
      display: flex;
      justify-content: flex-start;
      .left {
        width: 40%;
        height: 100% ;
        .img {
          border-radius: 50%;
          width: 100%;
          height: 100%
        }
      }
      .right {
        width: 30%;
        padding: 30px 30px 30px 15px;
        line-height: 40px;
        text-align: center;
        color: #101727;
        div:nth-child(1) {
          font-size: 32px;
        }
        div:nth-child(2) {
          color: rgba(10,17,27,.8);
          font-size: 20px;
          transform: scale(.9)
        }
      }
    }
  }
  .title {
    height: 30px;
    font-size: 20px;
    color: #101727;
    span{
      display: inline-block;
      transform: scale(.9)
    }
  }
  .list:last-child {
    border-bottom: 0;
  }
}

</style>
