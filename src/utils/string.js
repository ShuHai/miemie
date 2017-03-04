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

  // 去空格, 默认去掉全部，可选只去掉左边(left)或者右边(right)
  trim (string, direction) {
    if (direction === 'left') {
      return string.replace(/(^\s*)/g, '')
    } else if (direction === 'right') {
      return string.replace(/(\s*$)/g, '')
    } else {
      return string.replace(/(^\s*)|(\s*$)/g, '')
    }
  }
}
