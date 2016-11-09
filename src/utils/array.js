export default class Array {
  hello (message) {
    let a = message || 'hello world'
    console.log(a)
  }

  // 数组去重
  unique (arr) {
    let result = []
    arr.map(item => {
      result.indexOf(item) === -1 ? result.push(item) : null
    })
    return result
  }

  // 判断是否是数组
  isArray (object) {
    return Object.prototype.toString.call(object) === '[object Array]'
  }

  // 数组求交集
  intersection () {
    console.log(arguments)
    let args = Array.prototype.slice.call(arguments)
    console.log(args)
    console.log('test')
    let arr = []
    args.map(item => {
      arr = arr || this.isArray(item) ? item : arr
      arr.indexOf(item) !== -1 ? arr.push(item) : null
    })
    return arr
  }

  // 数组求并集
  union () {

  }

  // 数组求差集
  difference () {

  }
}
