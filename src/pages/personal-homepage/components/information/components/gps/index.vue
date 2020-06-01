<template lang="pug">
  div.gps
    div(:class="isGpsOpen==='1' ? 'ture-gps' : 'false-gps' ")
      img(v-if="isGpsOpen==='1'", src="./images/me_icon_gpsdz_1@2x.png")
      img(v-else, src="./images/me_icon_gpsdz_2@2x.png")
      span {{city}}
</template>
<script>
export default {
  name: 'gps',
  props: {
    gpsCity: String,
    isGpsOpen: String
  },
  computed: {
    city () {
      if (!this.gpsCity) {
        return '未知'
      } else {
        return this.gpsCity
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.gps{
  div{
    line-height: 23px;
    display: inline-block;
    font-size: 17px;
    transform:scale(0.8);
    padding: 8px 12px;
    color: #ffffff;
    font-weight: 100;
    border-radius: 6px;
    img{
      vertical-align: middle;
      height: 20px;
      width: 20px;
      margin-right: 10px;
    }
  }
}
.false-gps{
background: linear-gradient(329deg,
  rgba(181,181,181,1) 0%,
  rgba(221,221,221,1) 100%)
}
.ture-gps{
  background-image: linear-gradient(-40deg,
#4b6bf5 0%,
#d257f8 100%);
}
</style>
