<template lang="pug">
  div#app
    div.home
      div.slogan
    div.about
      div.about-content
      div.about-images
    div.contact-us
      h3 联系我们
      div.contact-us-content
        div.contact-card
          div.card(
            v-for="(item,index) in cardList"
            :key="index"
            @mouseover="mouseover(index)"
            @mouseleave= "mouseleave"
            :class="cardId === index ? 'card-hover' : ''"
             )
            img(:src="item.images")
            div {{item.text}}
            div {{item.hrefs}}
    div.footer
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      cardList: [
        {
          images: require('./assets/icon1.png'),
          text: '官网网址',
          hrefs: 'www.zhiai2019.com',
          border: '#ff477a'
        },
        {
          images: require('./assets/icon2.png'),
          text: '官方邮箱',
          hrefs: 'service@zhiai2019.com',
          border: '#35c795'
        },
        {
          images: require('./assets/icon3.png'),
          text: '市场合作',
          hrefs: 'service@zhiai2019.com',
          border: '#856bfa'
        },
        {
          images: require('./assets/icon4.png'),
          text: '举报',
          hrefs: 'service@zhiai2019.com',
          border: '#ff9453'
        }
      ],
      cardId: ''
    }
  },
  methods: {
    mouseover (i) {
      this.cardId = i
    },
    mouseleave () {
      this.cardId = ''
    }
  }
}
</script>
<style lang="scss" scoped>
#app{
  width:100%;
}
.home {
  height: 100vh;
  background: url('https://zajy-public.oss-cn-beijing.aliyuncs.com/web-app/%E6%89%8B%E6%9C%BA%E5%AE%98%E7%BD%91.jpg') no-repeat;
  background-size: cover;
  .slogan {
    height: 200px;
    width: 350px;
    background: url('./assets/logo@3x.png') no-repeat;
    background-size: contain;
  }
}
.about{
  height: 100vh;
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  &-content{
    height: 65vh;
    width:100%;
    color: #101727;
    background: url('./assets/we@3x.png') no-repeat;
    background-position: center ;
    background-size: contain;
  }
  &-images{
    height: 35vh;
    width:100%;
    background: url('./assets/zhongj1@2x.png') no-repeat;
    background-position: center ;
    background-size: contain;
  }
}
.contact-us{
  height: 100vh;
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('./assets/zhongj2@2x.png') no-repeat;
  background-size: cover;
  h3{
    margin: 10vh 0 10vh;
  }
  &-content{
    width: 100%;
    .contact-card{
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-flow:row wrap;
      .card{
        background: #fff;
        margin-top: 3vw;
        width: 37vw;
        height: 44vw;
        text-align: center;
        box-shadow: 0px 6px 14px 0px
        rgba(22, 29, 46, 0.1);
        border-radius: 10px;
        overflow: hidden;
        img{
          margin-top: 3vw;
          width: 14vw;
          height: 14vw;
        }
        div{
          line-height: 2;
          font-size: 20px;
          color: #101727;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        $one: #ff477a;
        $two: #35c795;
        $three: #856bfa;
        $fore: #ff9453;
        $borderBottom:($one $two $three $fore);
        @for $i from 1 to length($borderBottom)+1 {
          &:nth-child(#{$i}) {
            border-bottom: 2px solid nth($borderBottom,$i);
          }
        }
      }
      .card-hover{
        transform: scale(1.1);
        z-index: 1;
      }
    }
  }
  &-images{
    height: 100vh;
    width: 48vw;
    background: url('./assets/www.png') no-repeat;
    background-position: right center ;
    background-size: contain;
  }
}
.footer{
  height: 30vh;
  width:100%;
  background: url('./assets/底部图文@2x.png') no-repeat;
  background-size: cover
  }
@keyframes blink {
  50% { opacity: 0; }
}
</style>
