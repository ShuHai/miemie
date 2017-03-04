export default class RegMethod {
  // 判断字符串中是否全是数字
  checkNum (string) {
    let reg = new RegExp('^[0-9]*$')
    return reg.test(string)
  }

  // 判断手机号是否合法, true严格， false只检查位数和数字
  checkPhone (string, isStrict) {
    if (isStrict) {
      let reg = new RegExp('^1[34578]\\d{9}$')
      return reg.test(string)
    } else {
      let reg = new RegExp('^\\d{11}$')
      return reg.test(string)
    }
  }
}
