import Eukaryota from './Eukaryota';
//name, uniCellular, asexual, mobile, heterotroph
export default class Animal extends Eukaryota {
  constructor (name, symmetry) {
    super( name, false, false, true, true);

    this._symmetry = symmetry;
  }
  get symmetry(){
    return this._symmetry;
  }
  set symmetry(val) {
    this._symmetry = val;
  }
}