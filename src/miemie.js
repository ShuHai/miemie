import ArrayMethod from './utils/array'
import DateMethod from './utils/date'
import MathMethod from './utils/math'
import NumberMethod from './utils/number'
import ObjectMethod from './utils/object'
import RegMethod from './utils/reg'
import StringMethod from './utils/string'
class Mie {
  constructor () {
    this.array = new ArrayMethod()
    this.number = new DateMethod()
    this.object = new MathMethod()
    this.number = new NumberMethod()
    this.object = new ObjectMethod()
    this.reg = new RegMethod()
    this.string = new StringMethod()
  }
}

export default new Mie()
