export default class Number {
  isNumber (num) {
    return !isNaN(num)
  }
  // 求和
  sum () {
    let sum = 0
    let args = Array.prototype.slice.call(arguments)
    args.map(item => {
      sum += this.isNumber(item) ? item : 0
    })
    return sum
  }

}
