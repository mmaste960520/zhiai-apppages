<template lang="pug">
div.persons
  div.join-personal-info
    div.header-img
      img.image(:src="anchorAvatar")
    div.middle
      div.articles
        div.user-name {{nickName}}
        div.user-rank
          level(:level="userLevel")
        div.gps-position
          gps-icon(:city="gpsStatus === '1' ? gpsCity : '未知'", :trust="gpsStatus === '1'")
      div.tags
        div.tag {{address}}
        div.tag {{age}}
        div.tag {{edu}}
  div.bottom-line
</template>
<script>
import GpsIcon from '@/components/gps-icon'
import Level from '@/components/level'
export default {
  components: {
    GpsIcon,
    Level
  },
  data () {
    return {
    }
  },
  props: {
    anchorAvatar: {
      type: String
    },
    nickName: {
      type: String
    },
    userLevel: {
      type: Number
    },
    gpsStatus: {
      type: String
    },
    gpsCity: {
      type: String
    },
    address: {
      type: String
    },
    age: {
      type: String
    },
    edu: {
      type: String
    }
  }
}
</script>
<style lang="scss" scope>
  .persons {
    padding: 0;
    .join-personal-info {
      height: 140px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      background: #ffffff;
      .header-img {
        width: 96px;
        height: 96px;
        border-radius: 20px;
        margin: 0 18px 0 0;
        .image {
          width: 100%;
          height: 100%;
          border-radius: 20px;
        }
      }
      .middle {
        .articles {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 8px;
          align-items: center;
          .user-rank {
              display: inline-block;
              width: 60px;
              height: 54px;
              margin: 0 4 0 0px;
              image {
                width: 66px;
                height: 68px;
              }
          }
          .gps-position {
            margin-left: 6px;
          }
        }
        .tags {
          font-size: 22px;
          color: #535559;
          display: flex;
          .tag {
            padding: 5px;
            margin-right: 10px;
            border-radius: 6px;
            background: #d7d8dc;
          }
        }
      }
    }
    .bottom-line {
      height: 1px;
      background: #e8e9eb;
    }
  }
</style>
