/**
 * 多页面配置文件
 * https://cli.vuejs.org/zh/config/#pages
 */
const pages = {
  index: {
    entry: 'src/pages/index/main.js',
    template: 'public/index.html',
    filename: 'index.html',
    title: 'Welcome'
  },
  comps: {
    entry: 'src/pages/comps/main.js',
    template: 'public/index.html',
    filename: 'comps.html',
    title: 'Comps'
  },
  // 不良信息举报
  badInformationReport: {
    entry: 'src/pages/bad-information-report/main.js',
    template: 'public/index.html',
    filename: 'bad-information-report.html',
    title: '不良信息举报'
  },
  // 登帮助
  loginHelp: {
    entry: 'src/pages/login-help/main.js',
    template: 'public/index.html',
    filename: 'login-help.html',
    title: '登录帮助'
  },
  // 常见问题
  qa: {
    entry: 'src/pages/qa/main.js',
    template: 'public/index.html',
    filename: 'qa.html',
    title: '常见问题'
  },
  // 意见反馈
  adviceFeedBack: {
    entry: 'src/pages/advice-feed-back/main.js',
    template: 'public/index.html',
    filename: 'advice-feed-back.html',
    title: '意见反馈'
  },
  // 感情状态
  feelingStatus: {
    entry: 'src/pages/feeling-status/main.js',
    template: 'public/index.html',
    filename: 'feeling-status.html',
    title: '感情状态'
  },
  giftsList: {
    entry: 'src/pages/gifts-list/main.js',
    template: 'public/index.html',
    filename: 'gifts-list.html',
    title: '礼物列表'
  },
  giftsHistory: {
    entry: 'src/pages/gifts-history/main.js',
    template: 'public/index.html',
    filename: 'gifts-history.html',
    title: '礼物历史记录'
  },
  loveRank: {
    entry: 'src/pages/love-rank/main.js',
    template: 'public/index.html',
    filename: 'love-rank.html',
    title: '挚爱排行榜'
  },
  publicMark: {
    entry: 'src/pages/public-mark/main.js',
    template: 'public/index.html',
    filename: 'public-mark.html',
    title: '公众号'
  },
  marriage: {
    entry: 'src/pages/marriage/main.js',
    template: 'public/index.html',
    filename: 'marriage.html',
    title: '婚嫁基金'
  },
  ward: {
    entry: 'src/pages/ward-list/main.js',
    template: 'public/index.html',
    filename: 'ward-list.html',
    title: '守护列表'
  },
  loveOfList: {
    entry: 'src/pages/love-of-list/main.js',
    template: 'public/index.html',
    filename: 'love-of-list.html',
    title: '挚爱榜'
  },
  personalHomepage: {
    entry: 'src/pages/personal-homepage/main.js',
    template: 'public/index.html',
    filename: 'personal-homepage.html',
    title: '个人主页'
  },
  liveLeaderboard: {
    entry: 'src/pages/live-leaderboard/main.js',
    template: 'public/index.html',
    filename: 'live-leaderboard.html',
    title: '直播排行榜'
  },
  activitiesList: {
    entry: 'src/pages/activities-list/main.js',
    template: 'public/index.html',
    filename: 'activities-list.html',
    title: '我的活动'
  },
  liveDetail: {
    entry: 'src/pages/live-detail/main.js',
    template: 'public/index.html',
    filename: 'live-detail.html',
    title: '直播详情'
  },
  activeDetail: {
    entry: 'src/pages/active-detail/main.js',
    template: 'public/index.html',
    filename: 'active-detail.html',
    title: '活动详情'
  },
  protocols: {
    entry: 'src/pages/protocols/main.js',
    template: 'public/index.html',
    filename: 'protocols.html',
    title: '协议'
  },
  member: {
    entry: 'src/pages/member/main.js',
    template: 'public/index.html',
    filename: 'member.html',
    title: '用户特权'
  },
  guard: {
    entry: 'src/pages/guard/main.js',
    template: 'public/index.html',
    filename: 'guard.html',
    title: '守护特权'
  },
  giftsCard: {
    entry: 'src/pages/gifts-card/main.js',
    template: 'public/index.html',
    filename: 'giftsCard.html',
    title: '礼物卡片'
  },
  h5pay: {
    entry: 'src/pages/h5-pay/main.js',
    template: 'public/index.html',
    filename: 'h5Pay.html',
    title: '支付'
  },
  webPages: {
    entry: 'src/pages/web-pages/main.js',
    template: 'public/index.html',
    filename: 'webPages.html',
    title: '手机官网'
  },
  downApp: {
    entry: 'src/pages/down-app/main.js',
    template: 'public/index.html',
    filename: 'downApp.html',
    title: '下载分享'
  }

}

module.exports = pages
