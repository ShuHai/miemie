export default class StringMethod {
  isString (str) {
    return typeof str === 'string'
  }

  // 首字母大写
  capitalize (str) {
    if (this.isString(str)) {
      let arr = str.split('')
      arr[0] = arr[0].toUpperCase()
      return arr.join('')
    }
  }
}
