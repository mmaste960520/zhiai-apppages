<template lang="pug">
   div(@click="toRouter").trip-list
    div.image
      img(src="../image/trip.jpg")
    div.introduce
      span {{content.title}}
      span {{content.pic}} 星愿
      span 查看详情
</template>

<script>
export default {
  name: 'index',
  props: {
    content: {}
  },
  methods: {
    toRouter () {
      console.log(1)
      this.$router.push({ path: '/TripParticulars', query: { userId: this.content.id } })
    }
  }
}
</script>

<style lang="scss">
  @import '@/styles/main';
</style>

<style scoped lang="scss">
.trip-list {
  height: 160px;
  margin-top: 40px;
  display: flex;
  .image {
    height: 160px;
    width: 295px;
    img {
      height: 100%;
      width: 100%;
      border-radius: 10px;
    }
  }
  .introduce{
    font-size: 30px;
    display: flex;
    flex-direction: column;
    padding: 10px 0 0 20px;
    line-height: 40px;
    span {
      height: 40px;
    }
    span:nth-child(1) {
      width:250px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    span:nth-child(2) {
      color: #ffd778;
      font-size: 28px;
    }
    span:nth-child(3) {
      height:52px;
      line-height: 52px;
      width:180px;
      text-align: center;
      font-size: 24px;
      color: #e2e3e5;
      background: #434c5e;
      border-radius: 26px;
      margin-top:20px;
    }
  }
}
</style>
