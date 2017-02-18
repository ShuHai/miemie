export default class DateMethod {
  // 获取所有跟今天有关的信息
  getToday () {
    let today = new Date()
    var todayObj = {}
    todayObj.year = today.getFullYear()
    todayObj.month = today.getMonth() + 1
    todayObj.day = today.getDate()
    todayObj.hour = today.getHours()
    todayObj.minute = today.getMinutes()
    todayObj.second = today.getSeconds()
    todayObj.weekend = today.getDay()
    todayObj.tiemStamp = today.getTime()
    return todayObj
  }
}
