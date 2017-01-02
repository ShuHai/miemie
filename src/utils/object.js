export default class ObjectMethod {
  // 深拷贝
  deepClone (obj) {
    let newObj = obj.constructor === Array ? [] : {}
    if (typeof obj !== 'object') {
      return
    } else {
      for (var i in obj) {
        newObj[i] = typeof obj[i] === 'object' ? this.deepClone(obj[i]) : obj[i]
      }
    }
    return newObj
  }

}
