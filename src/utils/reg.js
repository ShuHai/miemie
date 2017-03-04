export default class RegMethod {
  // 丢给我正则我吐给你结果
  justCheck (string, rule) {
    let reg = new RegExp(rule)
    return reg.test(string)
  }
  // 判断字符串中是否全是数字,length可选，指定位数
  checkNum (string, length) {
    if (length) {
      return this.justCheck(string, `^\\d{${length}}$`)
    } else {
      return this.justCheck(string, '^[0-9]*$')
    }
  }

  // 判断手机号是否合法, true严格， false只检查位数和数字
  checkPhone (string, isStrict) {
    if (isStrict) {
      return this.justCheck(string, '^1[34578]\\d{9}$')
    } else {
      return this.justCheck(string, '^\\d{11}$')
    }
  }
}
