/**
 * 平台判断函数
 *
 * @returns {string} web | ios | android
 */
function whichPlatform () {
  const ua = window.navigator.userAgent
  const uaMap = {
    ios: 'ZHIAIJIAYUANFORIOS',
    android: 'ZHIAIJIAYUANFORANDROID'
  }

  if (ua.includes(uaMap.ios)) {
    return 'ios'
  }

  if (ua.includes(uaMap.android)) {
    return 'android'
  }

  return 'web'
}

export default whichPlatform
