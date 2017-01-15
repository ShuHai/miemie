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

  // 合并对象,同样元素会保留后者
  assign () {
    let args = Array.prototype.slice.call(arguments)
    let obj = {}
    if (args.length) {
      args.forEach(item => {
        obj = Object.assign(obj, item)
      })
    }
    return obj
  }
}
