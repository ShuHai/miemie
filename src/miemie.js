import ArrayMethod from './utils/array'
import NumberMethod from './utils/number'
class Mie {
  constructor () {
    this.array = new ArrayMethod()
    this.number = new NumberMethod()
  }
}

export default new Mie()
