<template lang="pug">
  div#list
    h2
      router-link(to="./InfoFrom") 个人信息表单
    h2
      router-link(to="./TripParticulars") 旅游详情
    h2
      router-link(to="./TripList") 旅游列表
    h2
      router-link(to="./PlayParticulars") 被邀请人详情列表
    h2
      router-link(to="./TripType") 旅游单双人类型
</template>

<script>
export default {
  name: 'list'
}
</script>

<style lang="scss">
  @import '@/styles/main';
</style>

<style scoped lang="scss">

</style>
