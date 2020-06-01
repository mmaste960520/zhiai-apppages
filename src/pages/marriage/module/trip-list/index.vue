<template lang="pug">
  div#trip-list
    warpper.warpper
      div.title 您的伴侣是
      userCard(:userPicture="userInfo.userPicture", :userName="userInfo.userName", :userIcon="userInfo.userIcon", :userTitle="userInfo.userTitle", )
      div.trip-select
        div 请选择出发地点
        div 西安
        dropdown.dropdown(:status="arrows", v-on:click.native="btnStatus")
      div.list
        list(v-for="(item,index) in listData", :key="index", :content="item")
</template>

<script>
import List from './list'
import UserCard from '@/components/user-card'
import Warpper from '@/components/warpper'
import Dropdown from '@/components/dropdown'
export default {
  name: 'trip-list',
  components: { List, UserCard, Warpper, Dropdown },
  data () {
    return {
      arrows: true,
      tabImage: [ 'req' ],
      listData: [
        {
          title: '国内寻源单人行aaaaaaaa阿达aaa',
          pic: '12313',
          id: 1
        },
        {
          title: '亚洲寻源单人行',
          pic: '45462',
          id: 213
        },
        {
          title: '欧洲寻源单人行',
          pic: '98772',
          id: 231
        },
        {
          title: '云南寻源单人行',
          pic: '867112',
          id: 1231
        },
        {
          title: '西双版纳寻源单人行',
          pic: '0761',
          id: 123
        }
      ],
      userInfo: {
        userName: '孤身前往不曾离去',
        userTitle: ['西安', '单身', '贵族']
      }
    }
  },
  methods: {
    btnStatus () {
      console.log(this.arrows)
      this.arrows = !this.arrows
    }
  }
}
</script>

<style lang="scss">
  @import '@/styles/main';
</style>

<style scoped lang="scss">
#trip-list{
  padding: 0 32px;
}
  .warpper{
    padding: 0 40px;
    .title{
      font-size: 24px;
      color: #989ba3;
      padding-top:46px;
    }
    .trip-select{
      display: flex;
      height:120px;
      line-height: 120px;
      font-size: 36px;
      border-bottom: 1px solid #364053;
      div:nth-child(1){
        flex:1;
      }
      div:nth-child(2){
        font-size: 28px;
      }
      .dropdown{
        padding-left: 20px;
        width:50px;
        height:100%;
      }
    }
    .list{
      padding:20px 0 400px;
    }
  }
</style>
