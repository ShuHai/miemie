export default class RegMethod {
  // 判断字符串中是否全是数字
  checkNum (string) {
    let reg = new RegExp('^[0-9]*$')
    return reg.test(string)
  }

}
