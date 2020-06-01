function timestampToTime (timestamp) {
  var date = new Date(timestamp * 1000)// 时间戳为10位需*1000，时间戳为13位的话不需乘1000

  let Y = date.getFullYear() + '-'

  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'

  let D = date.getDate()

  return Y + M + D
}
export {
  timestampToTime
}
