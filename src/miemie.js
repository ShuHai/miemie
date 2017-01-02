import ArrayMethod from './utils/array'
import NumberMethod from './utils/number'
import ObjectMethod from './utils/object'
class Mie {
  constructor () {
    this.array = new ArrayMethod()
    this.number = new NumberMethod()
    this.object = new ObjectMethod()
  }
}

export default new Mie()
