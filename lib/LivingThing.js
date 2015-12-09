export default class LivingThing {
  constructor (name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof (name) === 'string') {
      this._name = name;
    }else {
      throw new TypeError('LivingThing.name must be a string');
    }
  }
  get uniCellular() {
    return this._uniCellular;
  }
  set uniCellular(uniCellular) {
    if (typeof (uniCellular) === 'boolean') {
      this._uniCellular = uniCellular;
    }else {
      throw new TypeError('This is not a boolean');
    }
  }
  get multiCellular () {
    return !this._uniCellular;
  }
  //value is whether multiCellular is true or false
  set multiCellular (value) {
    this._uniCellular = !value;
 }
  get eukaryote () {
    return this._trueNucleus;
  }
  set eukaryote (value) {
    this._trueNucleus = value;
  }
  get prokaryote () {
    return !this._trueNucleus;
  }
  set prokaryote (value) {
    this._trueNucleus = !value;
  }
  get anaerobic () {
    return this._anaerobic;
  }
  set anaerobic (value) {
    this._anaerobic = value;
  }
  get aerobic () {
    return !this._anaerobic;
  }
  set aerobic (value) {
    this._anaerobic = !value;
  }
}