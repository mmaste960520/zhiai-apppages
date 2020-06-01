<template lang="pug">
  div.mask(v-if="layershow")
    div.layermbox
      div.laymshade(:class="{'laymshadeBgNo': type >= 2 ? false : shade}" @click="laymshadeClose")
      div.layermmain(:class="layermmain[type]")
        template(v-if="type== 0")
          transition(name="fade")
            div.layermchild
              div.logBox(v-if="layershow")
                img.img1(:src="logImg1" alt="")
                img.img2(:src="logImg2" alt="")
        template(v-if="type == 1")
          div.section
            transition(name="fade")
              div.layermchild.layermPrompts(v-if="layershow")
                section.layermcont
                  img.img(:src="imgurl")
                  p.text {{content}}
        template(v-if="type == 2")
          div.section
            transition(name="fade")
              div.layermchild.layermPrompts(v-if="layershow")
                section.layermcont
                  p {{content}}
                div.layermbtn
                  span.layermspan(v-for="(item, index) in button", :key="index", @click="sure(index)") {{item}}
</template>
<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      layershow: false, // 是否显示弹出框
      type: 0, // 显示类型
      shade: true, // 蒙层
      shadeClose: false, // 蒙层是否点击隐藏
      imgurl: require('@/common/image/error.png'), // 默认类型是1的 图标
      content: '全力加载中', // 默认内容
      button: ['确定'], // 默认按钮
      logImg1: require('./logo1.png'), // type为1时-加载图标
      logImg2: require('./logo2.png'), // type为1时-加载图标
      time: 20, // 倒计时隐藏时间
      callback: '', // 是否回调-type大于1
      no: '', // 点击确认按钮回调
      yes: '' // 点击取消按钮回调
    }
  },
  created () {
    this.layermmain = ['layermmain0', 'layermmain1', 'layermmain2']
    this.imgurl_ = ['error', 'success', 'collection']
  },
  methods: {
    open (opt) {
      this.close()
      if (opt) {
        for (var key in opt) {
          this.$data[key] = opt[key]
        }
        if (opt.imgurl) {
          this.$data['imgurl'] = require('@/common/image/' + opt.imgurl)
        }
        this.layershow = true
        if (this.time && this.type === 1) {
          setTimeout(() => {
            this.close()
            this.callback && this.callback()
          }, this.time * 1000)
          return false
        }
      }
      this.callback && this.callback()
    },
    sure (index) {
      if (this.button.length > 1) {
        if (index === 0) {
          this.yes && this.yes()
        } else {
          this.no && this.no()
        }
        return false
      }
      this.no && this.no()
      this.close()
    },
    close () {
      this.layershow = false
      this.type = 0
      this.shade = true
      this.shadeClose = false
      this.imgurl = require('@/common/image/error.png')
      this.content = '全力加载中'
      this.button = ['确定']
    },
    laymshadeClose () {
      this.shadeClose && this.close()
    }
  },
  computed: {
  }
}
</script>
<style lang="scss">
  .layermbox {
    position:fixed;
    left: 0;
    top: 0;
    z-index:19891014;
    right: 0;
    bottom: 0;
      .laymshade,
      .layermmain {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index:19891014;
          &.laymshadeBgNo {
            background: none
          }
      }
      .laymshade {
        background: rgba(0,0,0,0.3);
      }
      .layermmain {
        display: table;
        pointer-events: none;
          .section {
            display: table-cell;
            vertical-align: middle;
            text-align: center;
              .layermchild {
                width: 14rem;
                height: 7.5rem;
                position: relative;
                display: inline-block;
                text-align: center;
                // 这是改变弹窗背景色
                background-color: #3b414f;
                border-radius: 6px;
                box-shadow: 0 0 15px rgba(0,0,0,.1);
                pointer-events: auto;
                color: #95989f;
                overflow: hidden;
                box-sizing: border-box;
                  &.layermPrompts {
                    background: rgba(0,0,0,.7);
                    width: auto;
                    height: auto;
                    min-width: 7rem;
                    min-height: 6rem;
                    max-width: 14rem;
                    color: #fff;
                  }
                  &.fade-enter-active,
                  &.fade-leave-active {
                     transition: all 0.3s;
                  }
                  &.fade-enter,
                  &.fade-leave-active {
                    opacity: 0;
                    transform: scale(0);
                  }
                  .layermcont {
                    font-size: 0.85rem;
                    display: block;
                    padding: 0.8rem 0.8rem 0.4rem;
                    line-height: 1rem;
                    display:flex;
                    align-items:center;
                    justify-content: center;
                    flex-direction: column;
                    min-height: 5rem;
                    box-sizing: border-box;
                      .img {
                        display: block;
                        width: 2.2rem;
                        height: 2.2rem;
                        margin: 0.2rem auto .8rem;
                      }
                  }
                  .layermbtn {
                    width: 100%;
                    display: flex;
                    height: 2.4rem;
                    line-height: 2.4rem;
                    border-top: 1px solid #ebebeb;
                    font-size: 0.9rem;
                      .layermspan {
                        display: block;
                        flex: 1;
                          &:first-child {
                            border-right: 1px solid #ebebeb;
                            color: #95989f;
                          }
                          &:last-child {
                            border: none;
                            color: #95989f;
                          }
                      }
                  }
              }
              &.layermmain0 {
                display:flex;
                align-items:center;
                justify-content: center;
                  .layermchild {
                    background: none;
                      .logBox {
                        position: relative;
                        width: 1.5rem;
                        height: 1.5rem;
                        text-align: center;
                          .img1 {
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 100%;
                            height: 100%;
                            animation: bounce-in 2s linear infinite;
                          }
                          @keyframes bounce-in {
                            0% {
                              transform: rotate(0)
                            }
                            100% {
                              transform: rotate(360deg)
                            }
                          }
                          .img2 {
                             width: 0.5rem;
                             margin-top: 0.3rem;
                          }
                      }
                  }
              }
              &.layermmain1 {
                 .layermchild {
                   background: rgba(0,0,0,0.6);
                 }
              }
              &.layermmain2 {
                .section {
                  .layermchild {
                    height: auto;
                  }
                }
              }
          }
      }
  }
</style>
