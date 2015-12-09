import Animal from './Animal';
//name, symmetry
export default class Bilateral extends Animal {
  constructor (name, body) {
    super( name, 'bilateral');

    this._body = body;
  }

  get body () {
    return this._body;
  }
  set body(val) {
    this._body = val;
  }
}